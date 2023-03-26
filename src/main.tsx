/*
 * @Author: Hemei yuhemei8088@163.com
 * @Date: 2023-02-24 14:56:22
 * @FilePath: /vite-react-project/src/main.tsx
 * @Description: 项目主文件
 */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import router from '@/router.jsx'

import store from './store/store'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);