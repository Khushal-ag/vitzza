import { Link } from "react-router-dom";

import SearchOrder from "../features/order/SearchOrder";

export default function Header() {
  return (
    <header>
      <Link to="/">Fast Vite Pizza Co.</Link>
      <SearchOrder />
      <p>Khushal Agarwal</p>
    </header>
  );
}
