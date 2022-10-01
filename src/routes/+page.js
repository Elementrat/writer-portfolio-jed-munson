import cmsClient from '../util/cms'
import { getPublications } from '../queries/gql'

export const prerender = true;

/** @type {import('./$types').PageLoad} */
export async function load() {
  try{
    const publicationQueryResponse = await cmsClient.query({
      query: getPublications
    })
    const { data } = publicationQueryResponse;
    const { publicationCollection } = data;
    const { items: publications } = publicationCollection;

    return {
      publications
    };
  }
  catch(e){
    return {
      
    }
  }
}
