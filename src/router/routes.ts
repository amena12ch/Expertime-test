import RequestList from '../views/RequestList.vue'
import RequestEditPage from '../views/RequestEditPage.vue'
import PageNotFound from '../views/PageNotFound.vue'
import { RouteConfig } from 'vue-router'
export const routes: Array<RouteConfig> = [
    {
      name: "/",
      path: "/",
      component: RequestList
    },
    {
      name: "Edit-request",
      path: "/Request-Edit/:id",
      component: RequestEditPage
    },
    {   
        name: "PageNotFound",
        path: '/:catchAll(.*)*',
        component: PageNotFound,
    },
  ];
