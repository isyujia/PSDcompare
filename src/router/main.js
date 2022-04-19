/*
 * @Author: Billy
 * @Date: 2021-12-20 11:09:19
 * @LastEditors: Billy
 * @LastEditTime: 2022-01-10 20:55:52
 * @Description: 请输入
 */

export default [
    {
        path: 'compare',
        name: 'HomeCompare',
        component: () => import('@/views/HomeSubViews/Main/Compare.vue'),
        meta: {
            title: '图纸对比',
            iconClass: 'compare',
            keepAlive: true
        }
    },
    {
        path: 'history',
        name: 'HomeHistory',
        component: () => import('@/views/HomeSubViews/Main/History.vue'),
        meta: {
            title: '历史记录',
            iconClass: 'note',
            keepAlive: true
        }
    },
]