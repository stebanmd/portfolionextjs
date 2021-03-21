import AboutMe from '../src/components/screens/AboutMe';
import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc';

export default websitePageHOC(AboutMe, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Sobre Mim',
    },
  },
});
