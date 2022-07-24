import Nav from "./Nav";
import Meta from "./Meta";
import { ReactNode } from "react";

interface LayoutProps {
  children?: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Meta />
      <Nav />
      <div className="pt-20">
        <main className="">{children}</main>
      </div>
    </>
  );
};

export default Layout;
