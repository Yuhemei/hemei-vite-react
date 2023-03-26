/*
 * @Author: Hemei yuhemei8088@163.com
 * @Date: 2023-03-25 09:29:12
 * @FilePath: /vite-react-project/src/store/index.js
 * @Description: 创建ReactRedux
 */
import { createStore } from 'redux'
import rootReducer from './reducers'

const store = createStore(rootReducer)

export default store