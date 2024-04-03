import * as React from "react";
import { Link, type HeadFC, type PageProps } from "gatsby";
import { useState } from "react";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const IndexPage: React.FC<PageProps> = () => {
  const [count, setCount] = useState(0);

  const cambiar = (suma: boolean) => {
    // console.log("probando el codigo jeje");
    if (suma === true) {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  };

  return (
    <main style={pageStyles}>
      <h1>{count}</h1>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      <button
        onClick={() => {
          cambiar(true);
        }}
      >
        sumar + 1
      </button>

      <button
        onClick={() => {
          cambiar(false);
        }}
      >
        restar - 1
      </button>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
