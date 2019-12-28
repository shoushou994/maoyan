
//引入路由并注册 例如
//import Info from '@/pages/Shop/Info/Info'

export default [
  //路由放在数组中
  {
    path:'/login',
    component:() => import('@/pages/Login/Login'),
  },
  {
    path:'/',
    redirect:'/login'
  }
]