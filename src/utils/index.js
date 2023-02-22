const debounceObj = {}
// 防抖函数
export function debounce(funcName, func, wait = 0) {
    return function () {
        console.log("执行之前debounceObj", debounceObj)
        debounceObj[funcName] && clearTimeout(debounceObj[funcName])
        console.log("func::", JSON.stringify(func));
        debounceObj[funcName] = setTimeout(() => {
            func()
            delete debounceObj[funcName]
            console.log("执行之后debounceObj", debounceObj)
        }, wait)
    }
}