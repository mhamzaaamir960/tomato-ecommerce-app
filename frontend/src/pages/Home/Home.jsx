import { AppDownload, ExploreMenu, Herosection, MenuCards } from "../../components";
import { useState } from "react";

function Home() {
  const [category, setCategory] = useState("All");
  return (
    <>
      <Herosection />
      <ExploreMenu category={category} setCategory={setCategory} />
      <MenuCards category={category} />
      <AppDownload />
    </>
  );
}

export default Home;
