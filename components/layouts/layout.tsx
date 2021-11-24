import { ReactNode } from "react";
import Navigation from "components/organisms/navigation";
import Footer from "components/organisms/footer";
import Meta from "components/atoms/meta";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => (
  <>
    <Meta />
    <Navigation />
    <div className="min-h-screen">
      <main>{children}</main>
    </div>
    <Footer />
  </>
);

export default Layout;
