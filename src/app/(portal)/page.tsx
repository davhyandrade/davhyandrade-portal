import LandingPage from './_components/landing-page/LandingPage.component';

async function Home() {
  await new Promise(resolve => setTimeout(resolve, 2000));

  return (
    <>
      <LandingPage />
    </>
  );
}

export default Home;
