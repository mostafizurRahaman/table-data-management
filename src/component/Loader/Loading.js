import React from "react";
import { Blocks } from "react-loader-spinner";

const Loading = () => {
   return (
      <div className="min-h-screen flex items-center justify-center  absolute top-0 left-0 right-0 border-0 w-full ">
         <Blocks 
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
         />
      </div>
   );
};

export default Loading;
