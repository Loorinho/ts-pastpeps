import { Outlet } from "react-router-dom";
import Header from "../../utils/Header";

const Layout = () => {
  return (
    <>
      {/* <NavBar /> */}
      {/* <div className="grid grid-cols-4"> */}
      {/* <Sidebar /> */}
      {/* <div className="col-span-3"> */}
      <div className="">
        <Header />

        <Outlet />
      </div>
      {/* </div> */}
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
