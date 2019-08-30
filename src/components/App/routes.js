import Stage1 from '../Stage1';
import Stage2 from '../Stage2';
import NotFound from '../NotFound';

export const routesByKey = {
  stage1: {
    key: 'stage1',
    path: '/stage-1/:id',
    component: Stage1,
  },
  stage2: {
    key: 'stage2',
    path: '/stage-2/:id',
    component: Stage2,
  },
  notFound: {
    key: 'NotFound',
    path: '*',
    component: NotFound,
  },
};

export default Object.values(routesByKey);
