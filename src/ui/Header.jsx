import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import UserName from "../features/user/UserName";

function Header() {
  return (
    <header className="bg-yellow-500 uppercase">
      <Link className="tracking-widest" to="/">Fast React Pizza Company</Link>
      <SearchOrder />
      {/* <p>Nifemi</p> */}
      <UserName/>
    </header>
  );
}

export default Header;
