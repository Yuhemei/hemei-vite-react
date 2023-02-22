/*
 * @Author: Hemei 
 * @Date: 2023-02-20 19:50:34
 * @FilePath: /vite-react-project/src/utils/index.js
 * @Description: 封装的工具函数
 */

/**
 * @description: 防抖函数
 * @param {uuid} funcName
 * @param {function} func //尽量使用箭头函数
 * @param {time} wait //秒为单位
 * @return {function}
 */
const debounceObj = {} //防抖宿主对象
export function debounce(funcName, func, wait = 0.5) {
    return function () {
        console.log("arguments", arguments);
        debounceObj[funcName] && clearTimeout(debounceObj[funcName])
        debounceObj[funcName] = setTimeout(() => {
            func()
            delete debounceObj[funcName]
        }, wait * 1000)
    }
}