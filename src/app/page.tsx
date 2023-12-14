import React from "react";
import Read from "./components/read";
import AddEdit from "./components/addEdit";

const page = () => {
  return (
    <div className="flex flex-row justify-evenly w-full">
      <div className="">
        <AddEdit />
      </div>

      <div >
        <Read />
      </div>
    </div>
  );
};

export default page;
