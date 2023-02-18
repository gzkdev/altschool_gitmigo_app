import useSWR from "swr";
import { useContext, createContext } from "react";
import { useParams } from "react-router-dom";
import fetcher from "../utils/fetcher";

const RepositoriesContext = createContext();

export const useRepositoriesContext = () => {
  const store = useContext(RepositoriesContext);
  return store;
};

const RepositoriesProvider = ({ children }) => {
  const { username } = useParams();
  const url = `https://api.github.com/users/${username}/repos`;
  const { data, error, isLoading } = useSWR(url, fetcher);

  return (
    <RepositoriesContext.Provider value={{ data, error, isLoading }}>
      {children}
    </RepositoriesContext.Provider>
  );
};

export default RepositoriesProvider;
