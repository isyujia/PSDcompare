/*
 * @Author: Billy
 * @Date: 2021-07-23 01:56:55
 * @LastEditors: Billy
 * @LastEditTime: 2022-01-04 09:54:37
 * @Description: 树状结构帮助方法(v1.1)
 */

/**
 * @description 把树结构数组转化为指定属性组成的数组(N叉树的前序遍历)
 * @param {Array} nodes 树结构数组
 * @param {string} keyName 需要收集的树节点的属性名
 * @param {string} childAttrName 子树节点数组的属性名
 * @param {Array} arr 需要收集的树节点的属性名的数组
 * @returns {Array} 所有树节点的指定属性组成的数组
 */
function treeNodesToArray(nodes = [], keyName = 'id', childAttrName = 'children', arr = []) {
    for (let node of nodes) {
        arr.push(node[keyName]);
        if (node[childAttrName] && node[childAttrName].length)
            treeNodesToArray(node[childAttrName], keyName, childAttrName, arr)
    }
    return arr
}

/**
 * @description 获取树结构数组内的某一层的所有元素的指定属性(N叉树的层序遍历)
 * @param {Array} nodes 树结构数组
 * @param {string} keyName 需要收集的树节点的属性名
 * @param {string} childAttrName 子树节点数组的属性名
 * @param {number} levelNo 要获取的层级(从1开始，小于1时本方法只会返回[])
 * @returns {Array} 符合条件的树节点的指定属性组成的数组
 */
function getLevelOfTree(nodes = [], keyName = 'id', childAttrName = 'children', levelNo = 1) {
    if (!nodes) {
        return [];
    }

    const queue = nodes.slice();
    let tmp = [];

    while (levelNo--) {
        tmp = [];
        let count = queue.length;
        if (count === 0) {
            break;
        }
        // 本while循环一周代表一层
        while (count--) {
            const node = queue.shift();
            tmp.push(node[keyName]);
            if (node[childAttrName] && node[childAttrName].length) {
                for (let i = 0; i < node[childAttrName].length; i++) {
                    queue.push(node[childAttrName][i]);
                }
            }
        }
    }

    return tmp;
}

/**
 * @description 根据数组的某个字段分组数组节点
 * @param {Array} 数组
 * @param {string} 字段名(分组依据)
 * @returns [{key:key, value:obj}]
 */
function arrayToGroup(array, attrName) {
    let map = new Map();
    for (const item of array) {
        if (map[item[attrName]]) {
            map[item[attrName]].push(item);
        } else {
            map[item[attrName]] = [item];
        }
    }
    let newArray = [];
    for (const key in map) {
        newArray.push({
            key,
            value: map[key]
        });
    }
    return newArray;
}

/**
 * @description 针对树结构数组的每一层的每个元素(节点)进行一些操作(N叉树的层序遍历)
 * @param {Array} nodes 树结构数组
 * @param {string} childAttrName 子树节点数组的属性名
 * @param {Function} func 操作函数(两个参数：level:层级(从1开始)，node:节点)
 * @returns 
 */
function setEveryLevelOfTree(nodes = [], childAttrName = "children", func) {
    if (!nodes) {
        return;
    }

    const queue = nodes.slice();
    let level = 0;
    const imTrue = true; // eslint:no-constant-condition
    while (imTrue) {
        level++;
        let count = queue.length;
        if (count === 0) {
            break;
        }
        // 本while循环一周代表一层
        while (count--) {
            const node = queue.shift();
            func(level, node);
            if (node[childAttrName] && node[childAttrName].length) {
                for (let i = 0; i < node[childAttrName].length; i++) {
                    queue.push(node[childAttrName][i]);
                }
            }
        }
    }
}

module.exports = {
    treeNodesToArray,
    getLevelOfTree,
    arrayToGroup,
    setEveryLevelOfTree
}