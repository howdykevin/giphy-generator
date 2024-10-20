import "./App.css";
import { SearchBar } from "./components/SearchBar";
import { DisplayGrid } from "./components/DisplayGrid";

function App() {
  return (
    <div className="container mx-auto px-2 bg-gray-900 h-screen">
      <SearchBar />
      <DisplayGrid />
    </div>
  );
}

export default App;
