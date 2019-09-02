import router from './router'
router.beforeEach(function (to, from, next) {
  if (to.path.startsWith('/home')) {
    // 如果要去的地址是以/home为其实,就需要判断是不是登录,判断token
    let token = window.localStorage.getItem('user-token')
    if (token) {
      // 放行
      next()
    } else {
      // 退回到登录页面
      next('/login')
    }
  } else {
    // 不是/home开头 直接放行
    next()
  }
})
export default router
