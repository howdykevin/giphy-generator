import "./App.css";
import { SearchBar } from "./components/SearchBar";
import { DisplayGrid } from "./components/DisplayGrid";

function App() {
  return (
    <>
      <SearchBar />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <DisplayGrid />
    </>
  );
}

export default App;
