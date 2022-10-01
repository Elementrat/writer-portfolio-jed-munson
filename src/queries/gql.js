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

const getAuthor  = gql `query {
  author(id:"4Rzhi8MJ9EHQngzcBjFStp"){
    biography{
      json
    }
    name
  }
}`

export { getPublications, getAuthor };