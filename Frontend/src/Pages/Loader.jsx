/* eslint-disable no-unused-vars */
import React from 'react';

const Loader = () => {
  return (

    <div className="p-3 animate-spin flex mt-[20%] ml-[45%]  drop-shadow-2xl bg-gradient-to-bl from-pink-400 via-purple-400 to-indigo-600 md:w-48 md:h-48 h-32 w-32 aspect-square rounded-full">
      <div className="rounded-full h-full justify-center items-center w-full bg-slate-100 dark:bg-zinc-900 background-blur-md"> </div>
    </div>

  );
};

export default Loader;