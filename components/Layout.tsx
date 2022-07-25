import Nav from "./Nav";
import Meta from "./Meta";
import { ReactNode } from "react";
import AlertsProvider from "../providers/Alertsprovider";

interface LayoutProps {
  children?: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Meta />
      <Nav />
      <div className="pt-20">
        <AlertsProvider>
          <main className="">{children}</main>
        </AlertsProvider>
      </div>
    </>
  );
};

export default Layout;
