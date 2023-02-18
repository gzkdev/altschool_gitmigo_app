import React from "react";
import ProfileCard from "../../components/ProfileCard";
import ProfilePageLayout from "../../components/ProfilePageLayout";
import ProfileProvider from "../../providers/ProfileProvider";

const Profile = () => {
  return (
    <ProfileProvider>
      <ProfilePageLayout>
        <ProfileCard />
      </ProfilePageLayout>
    </ProfileProvider>
  );
};

export default Profile;
