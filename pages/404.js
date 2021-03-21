import NotFoundScreen from '../src/components/screens/NotFound';
import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc';

export default websitePageHOC(NotFoundScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: '404',
    },
  },
});
