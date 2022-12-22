import React from "react";

const Form = () => {
  return (
    <form>
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Enter username"
      />
      <button type="submit">Find Profile</button>
    </form>
  );
};

export default Form;
