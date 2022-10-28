
const home = () => import('@/views/home/index.vue')

const routes = [
  { path: '/', redirect: '/home' },
  {
    path: '/home',
    name: 'home',
    component: home
  }
]
export default routes
