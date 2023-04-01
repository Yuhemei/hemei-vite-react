/*
 * @Author: Hemei yuhemei8088@163.com
 * @Date: 2023-02-28 09:39:38
 * @FilePath: /vite-react-project/src/router.jsx
 * @Description: 路由组件
 */
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "@/screens/Home/Home";

import Root, {
  loader as rootLoader,
  action as rootAction,
} from "./screens/RouterTest/root";
import ErrorPage from "./error-page";
import Contact, { loader as contactLoader } from "./screens/RouterTest/contact";
import EditContact, { action as editAction } from "./screens/RouterTest/edit";
import Login from "@/screens/Login";
import { action as destroyAction } from "./screens/RouterTest/destroy";
import Index from "./screens/RouterTest/index";
import ViteReactDemo from "@/screens/ViteReactDemo";
import SquireGame from "@/screens/SquireGame";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage />,
    loader: rootLoader, //类似于Vue的mounted或者$route.query/params
    action: rootAction,
    children: [
      {
        index: true,
        element: <ViteReactDemo></ViteReactDemo>,
        errorElement: <ErrorPage />,
      },
      {
        path: "/routerTest",
        element: <Root></Root>,
        errorElement: <ErrorPage />,
        loader: rootLoader, //类似于Vue的mounted或者$route.query/params
        action: rootAction,
        children: [
          { index: true, element: <Index /> },
          // contact item
          {
            path: "contacts/:contactId",
            loader: contactLoader,
            element: <Contact />,
          },
          // 编辑
          {
            path: "contacts/:contactId/edit",
            loader: contactLoader,
            action: editAction,
            element: <EditContact />,
          },
          // 删除
          {
            path: "contacts/:contactId/destroy",
            action: destroyAction,
            // errorElement: <div>Oops! There was an error.</div>,
          },
          {
            path: "Login",
            element: <Login />,
          },
        ],
      },
      {
        path: "game",
        element: (
          <div>
            {" "}
            <Outlet></Outlet>{" "}
          </div>
        ),
        errorElement: <ErrorPage />,
        children: [
          {
            path: "SquireGame",
            element: <SquireGame />,
          },
        ],
      },
    ],
  },
]);

export default router;
