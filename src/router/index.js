import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import DataBinding from '../views/DataBinding.vue'
import NestedComponent from '../views/NestedComponent.vue'
import ParentComponent from '../views/ParentComponent.vue'
import ProvideInject from '../views/ProvideInject.vue'
import OptionsApi from '../views/OptionsApi'
import CompositionApi from '../views/CompositionApi'
import CompositionApiProvide from '../views/CompositionApiProvide'
import StoreAccess from '../views/StoreAccess'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/dataBinding',
    name: 'DataBinding',
    component: DataBinding
  },
  {
    path: '/nested',
    name: 'Nested',
    component: NestedComponent
  },
  {
    path: '/parent',
    name: 'Parent',
    component: ParentComponent
  },
  {
    path: '/provide-inject',
    name: 'ProvideInject',
    component: ProvideInject
  },
  {
    path: '/options-api',
    name: 'OptionsApi',
    component: OptionsApi
  },
  {
    path: '/composition-api',
    name: 'CompositionApi',
    component: CompositionApi
  },
  {
    path: '/composition-api-provide',
    name: 'CompositionApiProvide',
    component: CompositionApiProvide
  },
  {
    path: '/store-access',
    name: 'StoreAccess',
    component: StoreAccess
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
