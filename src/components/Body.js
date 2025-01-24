import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Body = () => {
  return (
    <div>
      <NavBar />
      {/* This outlet says that any children route of body will  render over here*/}
      {/* Below a navbar we have outlet and  all child route will render below the bavbar */}
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;
