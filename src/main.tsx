/*
 * @Author: Hemei yuhemei8088@163.com
 * @Date: 2023-02-24 14:56:22
 * @FilePath: /hemei-vite-react/src/main.tsx
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


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);