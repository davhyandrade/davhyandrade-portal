import Footer from "./_components/footer/Footer.component";
import Menu from "./_components/menu/Menu.component";

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
