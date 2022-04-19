/*
 * @Author: ChileeHong
 * @Date: 2021-01-11 08:44:52
 * @LastEditors: Billy
 * @LastEditTime: 2021-09-06 03:37:48
 * @Description: 从树形节点数据中查找记录
 */
/**
 * @description 根据value值从多级cascade数据对象中取出数据链
 * @param {Array} arr 如:
 * [
 *  { label:'部门1',value:'1'
 *      children:[
 *          { label:'组11',value:'11'
 *              children:[
 *                  { label:'用户1',value:'111'}
 *              ]
 *          }
 *      ]
 *  }
 * ]
 * @param {String} key value的键名，如'value'
 * @param {String} name name的键名，如'name'
 * @returns {Array} 带上parentId链接的扁平数组
 */
import { deepClone } from "./DeepClone.js"

export function flatten(tree, key = 'id', parentName = 'parentId', childrenName = 'children') {
  let arr = deepClone(tree instanceof Array ? tree : [tree])
  let data = [];
  function recursive(arr, parentId = null) {
    let results = [];
    for (let i in arr) {
      let ele = basicCopy(arr[i]);
      ele[parentName] = parentId;
      ele[key] = arr[i][key];
      results.push(ele);
      if (arr[i][childrenName] instanceof Array) {
        recursive(arr[i][childrenName], arr[i][key]);
      }
    }
    data.push(...results);
  }
  recursive(arr);
  return data;
}

// 根据一个value值找到其祖先
/**
 * @description 从带有parentId链接的扁平数组中，根据关键值查找到祖先的所有元素
 * @param {Array} arr 扁平数组
 * @param {Mixed} currentId 查找的值
 * @param {String} key 键名字段
 * @param {String} parentId 指向父节点的键名
 * @returns 包含从根节点到搜索节点的元素数组
 */
export function getAncestors(arr, currentId, key = 'id', parentId = 'parentId') {
  let i = 0;
  function recursive(currentId, arr) {
    if (i > 100) {
      return;
    }
    i++;
    const results = [];
    let item = arr.find((item) => item[key] === currentId);
    if (!item) {
      return [];
    }
    results.push(item);
    if (item[parentId]) {
      results.push(...recursive(item[parentId], arr));
    }
    return results;
  }
  let data = recursive(currentId, arr);
  return data ? data.reverse() : data;
}

/**
 * @description 根据平坦数组的元素获取包含它自己的所有后代树形结构
 * @param {String/Number} currentId 当前元素的key值
 * @param {Array} flatArr 平坦数组
 * @param {String} key 数组中主键字段名（如id，key等等）
 * @param {String} parentId 数组中指向父节点字段名
 * @param {String} childrenName 存放后代节点的字段名
 * @return {Array} 扁平数组
 * */
export function getOffspring(currentId, flatArr = [], key = 'id', parentId = 'parentId', childrenName = 'children') {
  let data = flatArr.find(item => item[key] === currentId)
  function getChildren(curItem, flatArr) {
    const children = flatArr.filter(item => item[parentId] === curItem[key])
    if (children.length < 1) {
      return false
    }
    children.forEach(item => {
      getChildren(item, flatArr)
    })
    curItem[childrenName] = children
  }
  getChildren(data, flatArr)
  return data ? flatten(data, key, parentId, childrenName) : []
}

/**
 * @description 把带parentId链结构的平级数组转换成树形结构
 * @param {Array} arr 数组
 * @param {String} key 保存关键值的键名
 * @param {String} parentId 指向父记录值的键名
 */
export function makeTree(arr, key = 'id', parentId = 'parentId', childrenName = 'children') {
  var flat = deepClone(arr.filter(item => !Object.prototype.hasOwnProperty.call(item, childrenName)));
  const root = [];
  flat.forEach((node) => {
    if (!node[parentId]) return root.push(node);
    const parentIndex = flat.findIndex((el) => el[key] === node[parentId]);
    if (!flat[parentIndex][childrenName]) {
      return (flat[parentIndex][childrenName] = [node]);
    }

    flat[parentIndex][childrenName].push(node);
  });
  return root;
}

// 浅复制，只复制基本类型的属性
function basicCopy(obj) {
  let data = {};
  for (let i in obj) {
    if (typeof obj[i] === 'object' && obj[i]) {
      continue;
    }
    data[i] = obj[i];
  }
  return data;
}