/*
 *
 * Title: Loading
 * Description: This page will shown when site loads
 * Author: Shah Arafat
 * Date: 17-03-2021
 *
 */

import React from "react";

const Loading = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="content-container animate-pulse">
        <p className="bg-gray-300 mt-4 w-full rounded-xl py-2"></p>
        <div
          className="bg-gray-300 mt-4 rounded-full py-2"
          style={{ minHeight: "150px", minWidth: "150px" }}
        ></div>
        <p className="bg-gray-300 mt-6 w-full rounded-xl py-2"></p>
        <p className="bg-gray-300 mt-6 w-full rounded-xl py-2"></p>
        <p className="bg-gray-300 mt-6 w-2/3 rounded-xl py-2"></p>
        <p className="bg-gray-300 mt-6 w-1/3 rounded-xl py-2"></p>
      </div>
    </div>
  );
};

export default Loading;
