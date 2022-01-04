import React from "react";

const Error = ({err}) => {

  if(err === false){return null} 

  return(
    <div className="text-justify font-mono pt-4 px-5 sm:px-24 lg:px-64 md:px-36 xl:px-80 mbp:px-96 2xl:mx-20">
      <div className="text-gray-900 dark:text-gray-200 bg-gray-50 dark:bg-gray-800 shadow-md rounded-xl p-6">
        <h1 className="text-3xl font-bold pb-2 text-red-600">
          Error finding that username.
        </h1>

        <h1 className="text-lg py-2 font-bold">
          Could be one of the two:
        </h1>

        <div className="text-sm">
          <ol> 
            <li>1. Bad connection. Check your internet connection.</li>
            <li className="py-2">2. The username is incorrect or does not exists. Please enter a valid username.</li>
          </ol>
        </div>
      </div>
      
    </div>
  )
}
export default Error