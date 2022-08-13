import { Route, Routes } from "react-router-dom";
import { Checkout } from "./pages/Home/components/Checkout/Checkout";
import { Home } from "./pages/Home/Home";
import { DefaultLayout } from "./styles/layouts/DefaultLayout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}
