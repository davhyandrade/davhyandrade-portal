import Footer from "./_components/footer/Footer.component";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}

export default Layout;