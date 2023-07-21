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
      featured
      cover{
        fileName
        width
        height
        url
        description
      }
    }
  }
}`

const getAuthor  = gql `query {
  author(id:"4Rzhi8MJ9EHQngzcBjFStp"){
    biography{
      json
    }
    name
    profilePic{
      fileName
      width
      height
      url
      description
    }
  }
}`

export { getPublications, getAuthor };