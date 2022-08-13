import { HomeContainer } from "./Home.styles";

import { Welcome } from "./components/Welcome/Welcome";
import { Market } from "./components/Market/Market";

export function Home() {
  return (
    <HomeContainer>
      <Welcome />
      <Market />
    </HomeContainer>
  );
}
