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
    // Loading state or handle when task is not found
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Edit Task</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Task Name</label>
          <input
            type="text"
            name="name"
            value={task.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Task Category</label>
          <input
            type="text"
            name="category"
            value={task.category}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Update Task</button>
      </form>
    </div>
  );
};

export default Edit;
