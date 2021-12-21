import { createRouter, createWebHistory } from 'vue-router'
import ProductList from '../views/ProductList'
import ProductDetail from '../views/ProductDetail'
import ProductCreate from '../views/ProductCreate'
import ProductUpdate from '../views/ProductUpdate'
import SalesList from '../views/SalesList.vue'
import ImageInsert from '../views/ImageInsert'
import Sample from '../views/Sample'
import Home from '../views/Home.vue'
import DataBinding from '../views/DataBinding.vue'
import NestedComponent from '../views/NestedComponent.vue'
import ParentComponent from '../views/ParentComponent.vue'
import ProvideInject from '../views/ProvideInject.vue'
import OptionsApi from '../views/OptionsApi'
import CompositionApi from '../views/CompositionApi'
import CompositionApiProvide from '../views/CompositionApiProvide'
import StoreAccess from '../views/StoreAccess'
import KakaoLogin from '../views/KakaoLogin'
import NaverLogin from '../views/NaverLogin'
import GoogleLogin from '../views/GoogleLogin'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ProductList
  },
  {
    path: '/detail',
    name: 'ProductDetail',
    component: ProductDetail
  },
  {
    path: '/create',
    name: 'ProductCreate',
    component: ProductCreate
  },
  {
    path: '/update',
    name: 'ProductUpdate',
    component: ProductUpdate
  },
  {
    path: '/sales',
    name: 'SalesList',
    component: SalesList
  },
  {
    path: '/image_insert',
    name: 'ImageInsert',
    component: ImageInsert
  },
  {
    path: '/sample',
    name: 'Sample',
    component: Sample,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home
      },
      {
        path: 'about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      },
      {
        path: 'dataBinding',
        name: 'DataBinding',
        component: DataBinding
      },
      {
        path: 'nested',
        name: 'Nested',
        component: NestedComponent
      },
      {
        path: 'parent',
        name: 'Parent',
        component: ParentComponent
      },
      {
        path: 'provide-inject',
        name: 'ProvideInject',
        component: ProvideInject
      },
      {
        path: 'options-api',
        name: 'OptionsApi',
        component: OptionsApi
      },
      {
        path: 'composition-api',
        name: 'CompositionApi',
        component: CompositionApi
      },
      {
        path: 'composition-api-provide',
        name: 'CompositionApiProvide',
        component: CompositionApiProvide
      },
      {
        path: 'store-access',
        name: 'StoreAccess',
        component: StoreAccess
      },
      {
        path: 'kakaologin',
        name: 'KakaoLogin',
        component: KakaoLogin
      },
      {
        path: 'naverlogin',
        name: 'NaverLogin',
        component: NaverLogin
      },
      {
        path: '/login',
        name: 'Login',
        component: Home
      },
      {
        path: '/googlelogin',
        name: 'GoogleLogin',
        component: GoogleLogin
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
