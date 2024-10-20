import {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
  useCallback,
} from "react";
import { ImageData } from "../types/giphy";
import { getTrending } from "../services/getTrending";

type GiphyStoreContext = {
  giphyData: ImageData[];
  updateDataStore: (data: ImageData[]) => void;
};

type ProviderProps = {
  children?: ReactNode;
};

const GiphyStore = createContext<GiphyStoreContext>({
  giphyData: [],
  updateDataStore: () => {},
});

const GiphyContextProvider = ({ children }: ProviderProps) => {
  const [data, setData] = useState<ImageData[]>([]);

  const fetchTrending = useCallback(async () => {
    const result = await getTrending();
    setData(result);
  }, []);

  useEffect(() => {
    fetchTrending().catch(console.error);
  }, [fetchTrending]);

  return (
    <GiphyStore.Provider
      value={{
        giphyData: data,
        updateDataStore: setData,
      }}
    >
      {children}
    </GiphyStore.Provider>
  );
};

const useGiphyStore = () => useContext(GiphyStore);

export { GiphyContextProvider, useGiphyStore };
