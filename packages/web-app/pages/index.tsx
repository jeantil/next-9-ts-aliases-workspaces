import Link from "next/link";
import Layout from "../components/Layout";
import foo from "foo";
import Bar from "bar";
import Baz from "baz";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
    <div>
      Imported modules from another workspace:
      <pre>{foo}</pre>
      <Bar />
    </div>
    <div>
      Imported modules from another workspace ts:
      <pre>{Baz}</pre>
    </div>
  </Layout>
);

export default IndexPage;
