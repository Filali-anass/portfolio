import Nav from "./Nav";
import Meta from "./Meta";
import { ReactNode } from "react";
import Alert from "./Alert";

interface LayoutProps {
  children?: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Meta />
      <Nav />
      <div className="pt-20">
        {/* <Alert title="Form Submited" /> */}
        <main className="">{children}</main>
      </div>
    </>
  );
};

export default Layout;
