import React from "react";
import RepositoriesProvider from "../../providers/RepositoriesProvider";
import RepositoriesList from "../../components/RepositoriesList";

const Repositories = () => {
  return (
    <RepositoriesProvider>
      <RepositoriesList />
    </RepositoriesProvider>
  );
};

export default Repositories;
