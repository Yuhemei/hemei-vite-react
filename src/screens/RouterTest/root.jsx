import {
  Outlet,
  Link,
  Form,
  NavLink,
  useLoaderData,
  useNavigation,
  useSubmit,
  redirect,
} from "react-router-dom";
import { getContacts, createContact } from "./contacts";
import { useEffect, useState } from "react";
import { debounce } from "@utils";
import { useSelector } from "react-redux";

// 获取模拟数据
export async function loader({ request }) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  const contacts = await getContacts(q);
  return { contacts, q };
}
// 模拟请求
export async function action() {
  const contact = await createContact();
  return redirect(`/routerTest/contacts/${contact.id}/edit`);
}

export default function Root() {
  const { contacts, q } = useLoaderData();
  //   自定义路由
  const customContacts = [
    {
      url: "Login",
    },
  ];
  const navigation = useNavigation();
  const submit = useSubmit();
  const [funcDebounce, setFuncDebounce] = useState(null);
  // 搜索时feedback
  const searching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has("q");
  const counter = useSelector((state) => state.counter.value);
  useEffect(() => {
    document.getElementById("q").value = q;
    console.log("counter", counter);
  }, [q]);
  return (
    <div style={{ display: "flex", height: "100%" }}>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <Form id="search-form" role="search">
            <input
              id="q"
              className={searching ? "loading" : ""}
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
              defaultValue={q}
              onChange={(event) => {
                const isFirstSearch = q == null;
                const { form } = event.currentTarget;
                debounce(
                  "submit",
                  () => {
                    submit(form, {
                      replace: !isFirstSearch,
                    });
                  },
                  1
                )();
              }}
            />
            <div id="search-spinner" aria-hidden hidden={!searching} />
            <div className="sr-only" aria-live="polite"></div>
          </Form>
          <Form method="post">
            <button type="submit">New</button>
          </Form>
        </div>
        <nav>
          <ul>
            {contacts.length ? (
              <ul>
                {contacts.map((contact) => (
                  <li key={contact.id}>
                    <Link to={`router${contact.id}`}></Link>
                    <NavLink
                      to={`contacts/${contact.id}`}
                      className={({ isActive, isPending }) =>
                        isActive ? "active" : isPending ? "pending" : ""
                      }
                    >
                      {contact.first || contact.last ? (
                        <>
                          {contact.first}
                          {contact.last}
                        </>
                      ) : (
                        <i>No Name</i>
                      )}{" "}
                      {contact.favorite && <span>★</span>}
                    </NavLink>
                  </li>
                ))}
              </ul>
            ) : (
              <p>
                <i>No contacts</i>
              </p>
            )}
          </ul>
        </nav>
      </div>
      <div
        id="detail"
        className={navigation.state === "loading" ? "loading" : ""}
      >
        <Outlet />
      </div>
    </div>
  );
}
