import useSWR from "swr";
import { useContext, createContext } from "react";
import { useParams } from "react-router-dom";
import fetcher from "../utils/fetcher";

const ProfileContext = createContext();

export const useProfileContext = () => {
  const store = useContext(ProfileContext);
  return store;
};

const ProfileProvider = ({ children }) => {
  const { username } = useParams();
  const url = `https://api.github.com/users/${username}`;
  const { data, error, isLoading } = useSWR(url, fetcher);

  return (
    <ProfileContext.Provider value={{ data, error, isLoading, username }}>
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileProvider;
