import HomeScreen, { getContent } from '../src/components/screens/HomeScreen';
import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc';

export default websitePageHOC(HomeScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Home',
    },
    menuProps: {
      display: true,
      displayCover: true,
    },
  },

});

export async function getStaticProps({ preview }) {
  const { allProjects } = await getContent({ preview });

  return {
    props: {
      cards: allProjects,
    },
  };
}
