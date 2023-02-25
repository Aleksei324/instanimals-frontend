import { Footer, Header } from "./";

interface layoutProps {
  children: JSX.Element;
}

export const Layout = ({ children }: layoutProps) => {
  /** Layout que se verá en todas las páginas */
  return (
    <div>
      <Header />
      {/** Componente de la pagina actual */}
      <main>{children}</main>
      <Footer />
    </div>
  );
};
