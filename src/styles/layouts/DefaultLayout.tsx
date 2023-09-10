import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { LayoutContainer, ContentContainer } from "./DefaultLayout.styles";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.min.css";

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <ContentContainer>
        <Outlet />
        <ToastContainer />
      </ContentContainer>
    </LayoutContainer>
  );
}
