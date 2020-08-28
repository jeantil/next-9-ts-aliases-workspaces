import React from "react";
import { Nav } from "../../../components/Nav";

export const getStaticPaths = async () => {
  return {
    paths: ["/nestedvariables/en", "/nestedvariables/fr"],
    fallback: true,
  };
};
export const getStaticProps = async (params) => {
  console.log("/nestedvariables/[lang] ", params);
  const timestamp = new Date().toISOString();
  console.log("/nestedvariables/[lang] ", timestamp);
  return {
    props: { ...params, date: timestamp },
    revalidate: 1,
  };
};
const BazPage = (props) => (
  <>
    <h1>About variables {props.lang}/Baz</h1>
    <h2>props.date :{props.date}</h2>
    <h2>page date: {new Date().toISOString()}</h2>
    <h3>Props</h3>
    <div>
      <pre style={{ backgroundColor: "#efefef", maxWidth: "650px" }}>
        <code>{JSON.stringify(props, null, 2)}</code>
      </pre>
    </div>
    <Nav />
  </>
);

export default BazPage;
