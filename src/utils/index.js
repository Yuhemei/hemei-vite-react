/*
 * @Author: Hemei
 * @Date: 2023-02-20 19:50:34
 * @FilePath: /vite-react-project/src/utils/index.js
 * @Description: 封装的工具函数
 */

const debounceObj = {}
/**
 * @description: 防抖函数
 * @param {uuid} funcName
 * @param {function} func
 * @param {time} wait //秒为单位
 * @return {function}
 */
export function debounce(funcName, func, wait = 0) {
    return function () {
        debounceObj[funcName] && clearTimeout(debounceObj[funcName])
        debounceObj[funcName] = setTimeout(() => {
            func()
            delete debounceObj[funcName]
        }, wait * 1000)
    }
}