import { useState } from "react";
import { useGiphyStore } from "../hooks/useGiphyStore";
import { searchGiphy } from "../services/searchGiphy";

const SearchBar = (): JSX.Element => {
  const [errorMessage, setErrorMessage] = useState("")
  const [search, setSearch] = useState("")
  const [disable, setDisable] = useState(false);
  const {updateDataStore, setPending} = useGiphyStore();

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log("Search input", search);

    setPending(true)
    const res = await searchGiphy(search);
    updateDataStore(res);
    setPending(false)
  };

  const validate = (text: String) => {
    if(text.length > 50) {
        setDisable(true)
        return "50 characters maximum search length"
    }
    setDisable(false)
    return ""
  }

  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    setErrorMessage(validate(e.currentTarget.value))
    setSearch(e.currentTarget.value);
  };

  return (
    <div className="mb-5">
      <h1 className="text-3xl font-bold tracking-tight text-white py-3">Giphy Finder</h1>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <div className="flex flex-row justify-center flex-wrap">
          <input 
            type="text"
            className="grow-0 basis-1/2 mr-2 mt-2 sm:mt-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500" 
            name="search" 
            onChange={handleOnChange}
            value={search}
            placeholder="Search for a GIF"
            required
            />
          <button 
            type="submit" 
            disabled={disable} 
            className="basis-1/4 mt-2 sm:mt-0 rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
            Search
          </button>
        </div>
        {errorMessage && <p className="text-pink-500 justify-self-start">{errorMessage}</p>}
      </form>
    </div>
  );
};

export { SearchBar };
