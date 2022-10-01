import gql from 'graphql-tag'

const getPublications  = gql `query {
  publicationCollection(order: [publishDate_DESC]) {
    items {
      title
      publicationType
      publishDate
      publisherName
      published
      url
    }
  }
}`

export {getPublications};