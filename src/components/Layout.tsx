import { ReactNode } from "react";
import Nav from "./Nav";
import Meta from "./Meta";
import AlertProvider from "../providers/AlertProvider";

interface LayoutProps {
  children?: ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
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

export default Layout;
