import { CMSGraphQLClient, gql } from '../../../infra/cms/CMSGraphQLClient';

export async function getContent({ preview }) {
  const query = gql`
    query {
      allProjects {
        title
        summary
        slug
        thumbnail {
          url
        }
      }
    }
  `;

  const client = CMSGraphQLClient({ preview });
  const response = await client.query({ query });

  return response.data.messages;
}
