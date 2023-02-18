import React from "react";
import { Outlet } from "react-router-dom";
import ProfileCard from "../../components/ProfileCard";
import ProfilePageLayout from "../../components/ProfilePageLayout";
import ProfileProvider from "../../providers/ProfileProvider";

const Profile = () => {
  return (
    <ProfileProvider>
      <ProfilePageLayout>
        <ProfileCard />
        <Outlet />
      </ProfilePageLayout>
    </ProfileProvider>
  );
};

export default Profile;
