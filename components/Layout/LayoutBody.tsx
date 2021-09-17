import { FC } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

export const LayoutBody: FC = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};
