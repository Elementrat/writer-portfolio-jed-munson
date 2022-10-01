import ApolloClient from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { onError } from 'apollo-link-error'
import { ApolloLink } from 'apollo-link'

const CMS_CFG = {
  TOKEN: import.meta.env.VITE_CMS_TOKEN,
  SPACE_ID: import.meta.env.VITE_CMS_SPACE_ID
}

const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors) {
        graphQLErrors.map(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
          )
        )
      }
      if (networkError) console.log(`[Network error]: ${networkError}`)
    }),
    new HttpLink({
      uri: `https://graphql.contentful.com/content/v1/spaces/${CMS_CFG.SPACE_ID}`,
      credentials: 'same-origin',
      headers: {
        Authorization: `Bearer ${CMS_CFG.TOKEN}`
      }
    })
  ]),
  cache: new InMemoryCache()
})


export default client;