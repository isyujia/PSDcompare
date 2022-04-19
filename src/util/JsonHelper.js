/*
 * @Author: Billy
 * @Date: 2021-06-21 23:06:25
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-28 11:17:03
 * @Description: 请输入
 */

// 递归方式求对象最大深度
function maxDepth(obj) {
    let results = [];
    for (let key in obj) {
        if (typeof (obj[key]) == 'object' && obj[key] != null) {
            results.push(maxDepth(obj[key]));
        }
    }
    if (results.length === 0) {
        return 1;
    } else {
        return Math.max(...results) + 1;
    }
}

// DFS剪枝方式求对象最大深度
function maxDepth2(root) {
    var stack = [];
    if (typeof (root) == 'object' && root != null) {
        stack.unshift([root, 1]);
    }
    var depth = 0;
    while (stack.length !== 0) {
        var current = stack.shift();
        root = current[0];
        var current_depth = current[1];
        if (typeof (root) == 'object' && root != null) {
            depth = Math.max(depth, current_depth);
            for (const key in root) {
                stack.unshift([root[key], current_depth + 1]);
            }
        }
    }
    return depth;
}
// 安全的JSON.parse方法
function safeParse(str, def = false) {
    try {
        const res = JSON.parse(str)
        return res
    } catch (err) {
        console.error(err.message)
    }
    return def
}
// 安全的JSON.stringify方法
function safeStringify(mixedVar) {
    try {
        return JSON.stringify(mixedVar)
    } catch (err) {
        console.error(err.message)
    }
    return ''
}

module.exports = {
    maxDepth,
    maxDepth2,
    safeParse,
    safeStringify
}