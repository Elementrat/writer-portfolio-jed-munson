import cmsClient from '../util/cms'
import { getPublications } from '../queries/gql'
import { getAuthor } from '../queries/gql'

export const prerender = true;

/** @type {import('./$types').PageLoad} */
export async function load() {
  try{
    const publicationQueryResponse = await cmsClient.query({
      query: getPublications
    })

    const { data: publicationData } = publicationQueryResponse;
    const { publicationCollection } = publicationData;
    const { items : publications } = publicationCollection;

    const authorQueryResponse = await cmsClient.query({
      query: getAuthor
    })

    const { data: authorData } = authorQueryResponse;
    const { author } = authorData

    return {
      publications,
      author
    };
  }

  catch(e){
    return {
      
    }
  }
}
