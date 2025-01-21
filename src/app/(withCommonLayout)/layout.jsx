import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

const homeLayout = ({ children }) => {
  return (
    <div>
      {/* <Navbar /> */}
      <h1>{children}</h1>
      {/* <Footer /> */}
    </div>
  );
};

export default homeLayout;
