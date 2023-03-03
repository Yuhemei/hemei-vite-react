/*
 * @Author: Hemei yuhemei8088@163.com
 * @Date: 2023-02-24 14:56:22
 * @FilePath: /hemei-vite-react/src/main.tsx
 * @Description: 项目主文件
 */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// 路由
import {
    RouterProvider,
} from "react-router-dom";
import router from '@/router.js'
// redux
import { Provider as ReduxProvider } from 'react-redux'
import store from './store'

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <ReduxProvider store={store}>
            <RouterProvider router={router} />
        </ReduxProvider>
    </React.StrictMode>
);