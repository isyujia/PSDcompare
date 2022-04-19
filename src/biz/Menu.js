/*
 * @Author: Billy
 * @Date: 2021-12-18 02:20:09
 * @LastEditors: Billy
 * @LastEditTime: 2022-03-07 15:26:48
 * @Description: 请输入
 */

import MenuItem from "../entity/Ui/Menu/MenuItem.js";

async function getMainMenuItems() {
    return [
        new MenuItem({
            id: 'Test',
            title: '测试',
            routerName: 'Test',
        }),
        new MenuItem({
            id: 'Test2',
            title: '测试2',
            routerName: 'Test2',
        }),
        // 内部标签
        new MenuItem({
            id: 'ProductAndCases',
            title: '产品案例',
            iconSrc: require("../assets/MenuIcons/Main/ProductAndCases1.png"),
            iconSrcInactive: require("../assets/MenuIcons/Main/ProductAndCases2.png"),
            routerName: 'ProductAndCases',
        }),
        // 内部标签
        new MenuItem({
            id: 'Solutions',
            title: '解决方案',
            iconSrc: require("../assets/MenuIcons/Main/Solutions1.png"),
            iconSrcInactive: require("../assets/MenuIcons/Main/Solutions2.png"),
            routerName: 'Solutions',
        }),
        // 内部标签
        new MenuItem({
            id: 'Demonstrations',
            title: '演示方案',
            iconSrc: require("../assets/MenuIcons/Main/Demonstrations1.png"),
            iconSrcInactive: require("../assets/MenuIcons/Main/Demonstrations2.png"),
            routerName: 'Demonstrations',
        }),
        // 内部标签
        new MenuItem({
            id: 'SalesResources',
            title: '销售资源',
            iconSrc: require("../assets/MenuIcons/Main/SalesResources1.png"),
            iconSrcInactive: require("../assets/MenuIcons/Main/SalesResources2.png"),
            routerName: 'SalesResources',
        }),
        // 内部标签
        new MenuItem({
            id: 'PersonalSpace',
            title: '个人空间',
            iconSrc: require("../assets/MenuIcons/Main/PersonalSpace1.png"),
            iconSrcInactive: require("../assets/MenuIcons/Main/PersonalSpace2.png"),
            routerName: 'PersonalSpace',
        }),
        // popover
        // new MenuItem({
        //     id: 'More',
        //     title: '更多',
        //     iconSrc: require("../assets/MenuIcons/Main/More1.png"),
        //     iconSrcInactive: require("../assets/MenuIcons/Main/More2.png"),
        //     // routerName: 'More',
        // }),
    ]
}

export default {
    getMainMenuItems
};