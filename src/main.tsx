import React from "react";
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import "./index.css";

import Root, { loader as rootLoader, action as rootAction, } from "./routes/root";
import ErrorPage from "./error-page";
import Contact, { loader as contactLoader } from "./routes/contact";
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

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);