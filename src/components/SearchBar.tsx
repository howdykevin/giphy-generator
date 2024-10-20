import { useState } from "react";
import { useGiphyStore } from "../hooks/useGiphyStore";
import { searchGiphy } from "../services/searchGiphy";

const SearchBar = (): JSX.Element => {
  const [errorMessage, setErrorMessage] = useState("")
  const [search, setSearch] = useState("")
  const [disable, setDisable] = useState(false);
  const {updateDataStore} = useGiphyStore();

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log("Search input", search);

    const res = await searchGiphy(search);
    updateDataStore(res);
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
    <div>
      <h2>Giphy Finder</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="searchValue" onChange={handleOnChange} value={search}/>
        <button type="submit" disabled={disable}>Search</button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export { SearchBar };
