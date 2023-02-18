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
import EditContact from "./routes/edit";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage />,
        loader: rootLoader, //类似于Vue的mounted或者$route.query/params
        action: rootAction,
        children: [
            {
                path: "contacts/:contactId",
                loader: contactLoader,
                element: <Contact />,
            },
            {
                path: "contacts/:contactId/edit",
                loader: contactLoader,
                element: <EditContact />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);