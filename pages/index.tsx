// in pages/index.tsx
import type { NextPage } from "next";
import dynamic from "next/dynamic";

const App = dynamic(() => import("../src/admin/App"), { ssr: false });

console.log('Или Тут?');

const Home: NextPage = () => {
  return <App />;
};

export default Home;