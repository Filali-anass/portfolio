import Nav from "./Nav";
import Meta from "./Meta";
import { ReactNode } from "react";
import AlertProvider from "../providers/AlertProvider";

interface LayoutProps {
  children?: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Meta />
      <Nav />
      <div className="pt-20">
        <AlertProvider>
          <main className="">{children}</main>
        </AlertProvider>
      </div>
    </>
  );
};

export default Layout;
