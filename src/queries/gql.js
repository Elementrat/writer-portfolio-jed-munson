import gql from 'graphql-tag'

const getPublications  = gql `query publications {
  publicationCollection {
    items {
      title
    }
  }
}`

export {getPublications};