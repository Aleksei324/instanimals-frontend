import { Footer, Header } from "./";

interface layoutProps {
  children: JSX.Element;
}

export const Layout = ({ children }: layoutProps) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
