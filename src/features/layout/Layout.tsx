import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      {/* <NavBar /> */}
      <div className="grid grid-cols-4">
        {/* <Sidebar /> */}
        <div className="col-span-3">
          <Outlet />
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
