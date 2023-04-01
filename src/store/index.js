/*
 * @Author: Hemei yuhemei8088@163.com
 * @Date: 2023-03-25 10:07:46
 * @FilePath: /vite-react-project/src/store/index.js
 * @Description: 这将创建一个 Redux store，并自动配置 Redux DevTools 扩展，以便你可以在开发时检查 store
 */
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../screens/Counter/counterSlice.js';
export default configureStore({
    reducer: {
        counter: counterReducer
    },
});