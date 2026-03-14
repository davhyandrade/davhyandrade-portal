import { Typography } from "@mui/material";

async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return <Typography>hello world</Typography>;
}

export default Home;
