import { Outlet } from "react-router-dom";
import Headers from "./Headers";

const Main = () => {
  return (
    <div className="min-h-screen">
      <Headers></Headers>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
