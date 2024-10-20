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
  loading: boolean;
  setPending: (data: boolean) => void;
};

type ProviderProps = {
  children?: ReactNode;
};

const GiphyStore = createContext<GiphyStoreContext>({
  giphyData: [],
  updateDataStore: () => {},
  loading: false,
  setPending: () => {}
});

const GiphyContextProvider = ({ children }: ProviderProps) => {
  const [data, setData] = useState<ImageData[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchTrending = useCallback(async () => {
    setLoading(true);
    const result = await getTrending();
    setData(result);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchTrending().catch(console.error);
  }, [fetchTrending]);

  return (
    <GiphyStore.Provider
      value={{
        giphyData: data,
        updateDataStore: setData,
        loading,
        setPending: setLoading
      }}
    >
      {children}
    </GiphyStore.Provider>
  );
};

const useGiphyStore = () => useContext(GiphyStore);

export { GiphyContextProvider, useGiphyStore };
