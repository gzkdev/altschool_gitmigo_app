import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const useSearchProfile = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleInputUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleSearchUsername = (e) => {
    e.preventDefault();
    navigate(`/${username}`);
    console.log(username);
    setUsername("");
  };

  return { username, handleInputUsername, handleSearchUsername };
};

export default useSearchProfile;
