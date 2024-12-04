import { Header } from "./header";
import { Outlet } from "react-router-dom";

const SniperLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default SniperLayout;
