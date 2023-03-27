/*
 * @Author: Hemei yuhemei8088@163.com
 * @Date: 2023-02-18 17:42:09
 * @FilePath: /vite-react-project/src/screens/RouterTest/destroy.jsx
 * @Description: Do not edit
 */
import { redirect } from "react-router-dom";
import { deleteContact } from "./contacts";

export async function action({ params }) {
  // throw new Error("oh dang!");
  await deleteContact(params.contactId);
  return redirect("/");
}
