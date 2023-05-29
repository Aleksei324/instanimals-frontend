import { Footer } from "./Footer"
import { Header } from "./Header"

interface layoutProps {
  children: JSX.Element;
}

export const Layout = ({ children }: layoutProps) => {
  /** Layout que se verá en todas las páginas */
  return (
    <div>
      <Header />
      {/** Componente de la pagina actual */}
      <div>{children}</div>
      <Footer />
    </div>
  )
}
