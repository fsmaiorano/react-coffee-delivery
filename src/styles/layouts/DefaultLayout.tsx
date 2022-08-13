import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { LayoutContainer, ContentContainer } from "./DefaultLayout.styles";

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <ContentContainer>
        <Outlet />
      </ContentContainer>
    </LayoutContainer>
  );
}
