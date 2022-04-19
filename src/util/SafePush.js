/*
 * @Author: ChileeHong
 * @Date: 2021-03-01 17:10:55
 * @LastEditors: Billy
 * @LastEditTime: 2022-01-07 14:23:39
 * @Description: 安全的route.push方法
 */
import router from '../router/_index'

// 跟this.$router.push() 用法一致
function savePush(location, onComplete, onAbort) {
  const current = router.currentRoute;
  const {
    resolved
  } = router.resolve(location);

  // console.log('current.path :>> ', current.path);
  // console.log(' resolved.path :>> ', resolved.path);
  // console.log('current.query :>> ', current.query);
  // console.log('resolved.query :>> ', resolved.query);
  // console.log('current.params :>> ', current.params);
  // console.log('resolved.params :>> ', resolved.params);

  // 判断当前路由跟目标路由是否一致，如是则取消，避免重复路由
  if (
    current.path === resolved.path &&
    JSON.stringify(current.query) === JSON.stringify(resolved.query) &&
    JSON.stringify(current.params) === JSON.stringify(resolved.params)
  ) {
    return;
  }

  router.push(
    location,
    success => {
      onComplete && onComplete(success);
    },
    err => {
      onAbort && onAbort(err);
    }
  );
}

export default savePush