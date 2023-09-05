import { HeaderOnly } from '~/components/Layout';
import Home from '~/pages/Home';

import routesconfig from '~/config/routes';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
const publcRoutes = [
    { path: routesconfig.home, component: Home },
    { path: routesconfig.following, component: Following },
    { path: routesconfig.profile, component: Profile },
    { path: routesconfig.upload, component: Upload, layout: HeaderOnly },
    { path: routesconfig.search, component: Search, layout: null },
];
const privateRoutes = [];
export { publcRoutes, privateRoutes };
