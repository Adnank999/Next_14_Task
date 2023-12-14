"use client";
import { useState, useEffect } from "react";
import { Task } from "../model/task.model";
import {
  useAddTaskMutation,
  useGetTaskQuery,
  useUpdateTaskMutation,
} from "../features/apiSlice";
import { useParams } from "next/navigation";

const AddEdit = () => {
  const [tasks, setTasks] = useState<Task>(Object);
  const [editMode, setEditMode] = useState<boolean>(false);

  //   const { id } = useParams();
  const { id } = useParams<{ id: string }>();
  const [addTask] = useAddTaskMutation();
  const [updateTask] = useUpdateTaskMutation();
  const { data } = useGetTaskQuery(id);

  console.log(data);

  useEffect(() => {
    if (id && data) {
      setEditMode(true);
      setTasks({ ...data });
    } else {
      setEditMode(false);
    }
  }, [id, data]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTasks({ ...tasks, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Submitting task:", tasks);

    if (editMode) {
      await updateTask(tasks);
    } else {
      await addTask(tasks);
    }

    console.log("Task submitted successfully!");
    setEditMode(false);
  };

  return (
    // <div className="">

    //   <h2>Add and Edit</h2>

    //   <form onSubmit={handleSubmit}>
    //     <div className="mb-3">
    //       <label className="block text-sm font-medium leading-6 text-gray-900">Task Name</label>

    //       <input
    //         type="text"
    //         name="name"
    //         className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
    //         onChange={handleChange}
    //         value={tasks?.name || ""}
    //       />
    //     </div>

    //     <div className="mb-3">
    //       <label className="block text-sm font-medium leading-6 text-gray-900">Task Category</label>
    //       <input
    //         type="text"
    //         name="category"
    //         className="form-control"
    //         onChange={handleChange}
    //         value={tasks?.category || ""}
    //       />
    //     </div>

    //     <button type="submit" className="btn btn-primary">
    //       {editMode ? "Update " : "Add"}
    //     </button>

    //   </form>
    // </div>

    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">
          Create Task
        </h5>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Name
          </label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={tasks?.name || ""}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Category
          </label>
          <input
            type="text"
            name="category"
            onChange={handleChange}
            value={tasks?.category || ""}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddEdit;
