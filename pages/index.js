import Head from "next/head";
import BlackNavbar from "../components/BlackNavbar";
import Nav from "../components/Nav";
import Navbar from "../components/Navbar";
import Top from "../components/Top";
import Image from "next/dist/client/image";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { useState } from "react";

export default function Home(name) {
  const initialState = name;
  const [products, setName] = useState(initialState.products);
  console.log(initialState.products);
  return (
    <div>
      <Head>
        <title>mi</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <BlackNavbar />
        <Navbar />
        <Nav products={products} />
        <Top />
        <div>
          <div>
            <Image
              src="https://i01.appmifile.com/webfile/globalimg/products/pc/redmi-10c/p002.png"
              width={2550}
              height={1400}
              className=""
            />
          </div>
        </div>
        <div>
          <div>
            <Image
              src="https://i01.appmifile.com/webfile/globalimg/products/pc/redmi-10c/section03.jpg"
              width={2550}
              height={1000}
              className=""
            />
          </div>
        </div>
        <div>
          <div>
            <Image
              src="https://i01.appmifile.com/webfile/globalimg/products/pc/redmi-10c/section04.jpg"
              width={2550}
              height={800}
              className=""
            />
          </div>
        </div>
        <div>
          <div>
            <Image
              src="https://i01.appmifile.com/webfile/globalimg/products/pc/redmi-10c/top002.png"
              width={2550}
              height={1400}
              className=""
            />
          </div>
        </div>
        <div>
          <div>
            <Image
              src="https://i01.appmifile.com/webfile/globalimg/products/pc/redmi-10c/section06.jpg"
              width={2550}
              height={1200}
              className=""
            />
          </div>
        </div>
        <div>
          <div>
            <Image
              src="https://i01.appmifile.com/webfile/globalimg/products/pc/redmi-10c/top003.png"
              width={2550}
              height={900}
              className=""
            />
          </div>
        </div>
        <div>
          <div>
            <Image
              src="https://i01.appmifile.com/webfile/globalimg/products/pc/redmi-10c/section08s.jpg"
              width={2550}
              height={1000}
              className=""
            />
          </div>
        </div>
        <div>
          <div>
            <Image
              src="https://i01.appmifile.com/webfile/globalimg/products/pc/redmi-10c/section09.jpg"
              width={2550}
              height={1400}
              className=""
            />
          </div>
        </div>
        <div>
          <div>
            <Image
              src="https://i01.appmifile.com/webfile/globalimg/products/pc/redmi-10c/section10.jpg"
              width={2550}
              height={1300}
              className=""
            />
          </div>
        </div>
        <div>
          <div>
            <Image
              src="https://i01.appmifile.com/webfile/globalimg/products/pc/redmi-10c/section11.jpg"
              width={2550}
              height={1000}
              className=""
            />
          </div>
        </div>
        <div>
          <div>
            <Image
              src="https://i01.appmifile.com/webfile/globalimg/products/pc/redmi-10c/section13-01.jpg"
              width={2550}
              height={1100}
              className=""
            />
          </div>
        </div>
        <div>
          <div>
            <Image
              src="https://i01.appmifile.com/webfile/globalimg/products/pc/redmi-10c/section15.jpg"
              width={2550}
              height={600}
              className=""
            />
          </div>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: "https://dev-scphonecmlcj.microgen.id/graphql",
    cache: new InMemoryCache(),
  });
  const { data } = await client.query({
    query: gql`
      query {
        products(where: { name: "Redmi 10C" }) {
          name
        }
      }
    `,
  });
  return {
    props: {
      products: data.products.map((product) => product.name),
    },
  };
}
