import Head from "next/head";

import DogPicture from "../components/DogPicture";

const Nav = (await import("home/Nav")).default;

const Home = () => (
  <div className="container">
    <Head>
      <title>Dog Detail</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <Nav />
      <h1 className="title">Dog Detail</h1>
      <DogPicture />
    </main>

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </div>
);

export default Home;
