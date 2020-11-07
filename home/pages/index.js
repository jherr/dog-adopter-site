import Head from "next/head";

import Nav from "../components/Nav";
const DogPicture = (await import("dogdetail/DogPicture")).default;

const Home = () => (
  <div className="container">
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <Nav />
      <h1 className="title">Welcome to Dog Town</h1>
      <div
        style={{
          textAlign: "center",
          background: "lightgrey",
        }}
      >
        <DogPicture />
      </div>
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
