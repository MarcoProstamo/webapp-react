import { Outlet } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";

export default function defaultLayout() {
  return (
    <div className="wrapper">
      <Header />
      <Main>
        <Outlet />
      </Main>
    </div>
  );
}
