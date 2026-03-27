import Footer from "./_components/footer/Footer.component";
import Menu from "./_components/header/Header.component";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Menu />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
