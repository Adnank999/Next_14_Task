"use client";
import React from "react";
import Link from "next/link";
import { useDeleteTaskMutation, useGetTasksQuery } from "../features/apiSlice";

const Read = () => {
  const {
    data: tasks,
    isSuccess,
    isError,
    error,
    isLoading,
  } = useGetTasksQuery();

  const [deleteStudent] = useDeleteTaskMutation();

  return (
    <div className="">
      <div className="">
        {isLoading && <span>Loading..</span>}
        {isError && <span>Something went wrong</span>}

        {isSuccess &&
          tasks?.map((task) => (
            <div
              key={task?.id}
              className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <div className="grid grid-flow-row">
                <h1>{task?.id}</h1>
                <h5>{task?.name}</h5>
                <h6>{task?.category}</h6>
                <button
                  className="bg-red-600"
                  onClick={() => deleteStudent(task?.id)}
                >
                  Delete
                </button>

                {/* <button className="">
                  <Link href={`edit/${task?.id}`}>
                    Edit
                  </Link>
                </button> */}

               
                  <Link href={`/edit/[taskId]`} as={`/edit/${task?.id}`}>
                    Edit
                  </Link>
                
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Read;
