'use client'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'
import { useGetTaskQuery, useUpdateTaskMutation } from '../features/apiSlice';
import { Task } from '../model/task.model';
import { redirect } from 'next/dist/server/api-utils';

interface EditProps {
    id: string;
  }

  const Edit: React.FC<EditProps> = ({ id }) => {
    const router = useRouter()

    const [task, setTask] = useState<Task | null>(null);
    const [updateTask] = useUpdateTaskMutation();
  
    const { data } = useGetTaskQuery(id);
  
    useEffect(() => {
      if (data) {
        setTask(data);
      }
    }, [data]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (task) {
      setTask({ ...task, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (task) {
      await updateTask(task);

      router.push('/',)
    }
  };

  if (!task) {
    
    return <div>Loading...</div>;
  }

  return (
    

    <div className="w-full  mt-5 max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">
          Edit Task
        </h5>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Name
          </label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={task?.name || ""}
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
            value={task?.category || ""}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Update Task
        </button>
      </form>
    </div>
  );
};

export default Edit;
