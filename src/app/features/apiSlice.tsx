
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Task } from "../model/task.model"; 

export const taskApi = createApi({
    reducerPath: "taskApi",
    baseQuery: fetchBaseQuery({
      baseUrl: "https://657aaf7d1acd268f9afb92df.mockapi.io",
      
    }),
    tagTypes: ["Task"],
  
    endpoints: (builder) => ({
      getTasks: builder.query<Task[], void>({
        query: () => "/tasks",
        providesTags: ["Task"],
        transformResponse: (response: Task[], meta, args: any) => {
          if (args === 2) {
            return response.slice(0, 4);
          }
          return response;
        },
      }),
      getTask: builder.query<Task, string>({
        query: (id) => `/tasks/${id}`,
        providesTags: ["Task"],
      }),
      addTask: builder.mutation<void, Task>({
        query: (task) => ({
          url: "/tasks",
          method: "POST",
          body: task,
        }),
        invalidatesTags: ["Task"],
      }),
      deleteTask: builder.mutation<void, string>({
        query: (id) => ({
          url: `/tasks/${id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["Task"],
      }),
      updateTask: builder.mutation<void, Task>({
        query: ({ id, ...rest }) => ({
          url: `/tasks/${id}`,
          method: "PUT",
          body: rest,
        }),
        invalidatesTags: ["Task"],
      }),
    }),
  });
  
  export const {
    useGetTasksQuery,
    useGetTaskQuery,
    useAddTaskMutation,
    useDeleteTaskMutation,
    useUpdateTaskMutation,
  } = taskApi;