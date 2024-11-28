import { AppDownload, ExploreMenu, Herosection, MenuCards } from "./components";
import "./App.css";
import { useState } from "react";

function App() {
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

export default App;
