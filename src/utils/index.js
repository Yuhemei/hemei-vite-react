// 防抖函数
export debounceFunc(func, wait = 0){
    let timeOut;
    return function () {
        timeOut && clearTimeout(timeOut)
        timeOut = setTimeout(() => {
            func()
        })
    }
}