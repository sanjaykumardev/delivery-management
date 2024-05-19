/* eslint-disable no-unused-vars */
import React from 'react';
import SyncLoader from "react-spinners/SyncLoader";
const Loader = () => {
  return (

    <SyncLoader
      color={'rgba(0, 0, 0, 1)'}
      className="mt-[24%] ml-[49%]"
      size={35}
      aria-label="Loading Spinner"
      data-testid="loader"
    />

  );
};

export default Loader;


