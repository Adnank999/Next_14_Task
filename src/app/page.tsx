import React from "react";
import Read from "./components/read";
import AddEdit from "./components/addEdit";

const page = () => {
  return (
    <div className="">
      <div className="mt-20 flex justify-center">
        <AddEdit />
        <Read />
      </div>
    </div>
  );
};

export default page;
