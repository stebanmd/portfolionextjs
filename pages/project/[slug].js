import React from 'react';
import ProjectScreen from '../../src/components/screens/ProjectScreen';
import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc';
import projectDb from '../../src/db/projects.json';

function ProjectInternaPage({ project }) {
  return (
    <ProjectScreen
      project={project}
    />
  );
}
ProjectInternaPage.propTypes = ProjectScreen.propTypes;

export default websitePageHOC(ProjectInternaPage);

export async function getStaticProps({ params }) {
  const project = projectDb.projects.find((p) => p.slug === params.slug);

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
  const paths = projectDb.projects.map((project) => ({
    params: { slug: project.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}
