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
    <div className="bg-gray-200 px-2 py-10">
      {isLoading && <span>Loading..</span>}
      {isError && <span>Something went wrong</span>}
      <div id="features" className="mx-auto max-w-6xl">
        <h2 className="text-center font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Task Cards
        </h2>
        <p className="text-center text-base font-semibold leading-7 text-primary-500">
          Here you can Add Delete Edit Cards
        </p>

        {isSuccess &&
          tasks?.map((task) => (
            <div
              key={task?.id}
              className="mt-16 flex flex-row justify-center gap-6 text-center text-black md:grid-cols-3 sm:grid-cols-1"
            >
              <div className="rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 px-6 py-8 shadow-sm ">
                <h3 className="my-3 font-display font-lg font-bold font-serif">
                  {task?.id}
                </h3>
                <h3 className="my-3 font-display font-lg font-bold font-serif">
                  Name :{task?.name}
                </h3>
                <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                  Category : {task?.category}
                </p>

                <div className="mt-5 p-6">
                  <Link
                    className="ml-5 text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    href={`/edit/[taskId]`}
                    as={`/edit/${task?.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    onClick={() => deleteStudent(task?.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Read;
