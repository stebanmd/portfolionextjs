import { CMSGraphQLClient, gql } from '../../../infra/cms/CMSGraphQLClient';

export async function getContent({ slug, preview } = { slug: '', preview: false }) {
  const query = gql`
    query {
      project(filter: { slug: { eq: "${slug}" } }) {
        title
        description
        url
        slug
        thumbnail {
          url
        }
      }
      allProjects {
        slug
      }
    }
  `;

  const client = CMSGraphQLClient({ preview });
  const response = await client.query({ query });

  return response.data.messages;
}
