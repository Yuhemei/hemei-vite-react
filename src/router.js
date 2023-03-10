/*
 * @Author: Hemei yuhemei8088@163.com
 * @Date: 2023-02-28 09:39:38
 * @FilePath: /hemei-vite-react/src/router.jsx
 * @Description: 路由组件
 */
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root, {
  loader as rootLoader,
  action as rootAction,
} from "./routes/root";
import ErrorPage from "./error-page";
import Contact, {
  loader as contactLoader,
  action as contactAction,
} from "./routes/contact";
import EditContact, { action as editAction } from "./routes/edit";
import { action as destroyAction } from "./routes/destroy";
import Index from "./routes/index";

const router = createBrowserRouter([
  {
    path: "/",
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
        action: contactAction,
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
    ],
  },
]);

export default router;
