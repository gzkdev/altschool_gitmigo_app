import React from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { username } = useParams();
  return <div>Hey, {username}</div>;
};

export default Profile;
