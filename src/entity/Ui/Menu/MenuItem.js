/*
 * @Author: Billy
 * @Date: 2021-12-18 01:56:48
 * @LastEditors: Billy
 * @LastEditTime: 2022-01-07 16:39:27
 * @Description: 请输入
 */

class MenuItem {
    /**
     * 菜单栏按钮对象类
     * @param {string} id 全局唯一标记
     * @param {string} title 标题
     * @param {string} iconSrc 主图标图片的加载地址
     * @param {string} iconSrcInactive 非激活图标图片的加载地址
     * @param {string} iconClass 图标的类名(包括 element ui 的图标的类名)
     * @param {string} routerName 按钮对应的路由名称(点击后跳转的目标路由名称)
     * @param {string} drawerName 按钮对应的抽屉名称(点击后加载的目标抽屉名称)
     * @param {object} params 路由param
     * @param {Array.<MenuItem>} children 子菜单栏对象数组
     */
    constructor({
        id,
        title,
        iconSrc,
        iconSrcInactive,
        iconClass,
        routerName,
        drawerName,
        params,
        children = []
    }) {
        this.id = id;
        this.title = title;
        this.iconSrc = iconSrc;
        this.iconSrcInactive = iconSrcInactive;
        this.iconClass = iconClass;
        this.routerName = routerName;
        this.drawerName = drawerName;
        this.params = params;
        this.children = children;
    }
}

export default MenuItem