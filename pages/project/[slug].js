import React from 'react';
import ProjectScreen, { getContent } from '../../src/components/screens/ProjectScreen';
import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc';

function ProjectInternaPage({ project }) {
  return (
    <ProjectScreen
      project={project}
    />
  );
}
ProjectInternaPage.propTypes = ProjectScreen.propTypes;

export default websitePageHOC(ProjectInternaPage);

export async function getStaticProps({ params, preview }) {
  const { project } = await getContent({ slug: params.slug, preview });

  return {
    props: {
      project,
      pageWrapperProps: {
        seoProps: {
          headTitle: project.title,
        },
      },
    },
  };
}

export async function getStaticPaths() {
  const { allProjects } = await getContent();

  const paths = allProjects.map((project) => ({
    params: { slug: project.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}
