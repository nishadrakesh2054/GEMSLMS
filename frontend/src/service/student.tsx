import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Student ,ApiResponse, GetStudentApiResponse} from "../types/student";

export const studentApi = createApi({
  reducerPath: "studentApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
  tagTypes: ["Students"],
  endpoints: (builder) => ({

    getStudents: builder.query<ApiResponse<GetStudentApiResponse>, void>({
      query: () => "/students",
      providesTags: ["Students"],
    }),

    getStudentById: builder.query<ApiResponse<Student>, number>({
      query: (id) => `/students/${id}`,
      providesTags: ["Students"],
    }),

    addStudent: builder.mutation<ApiResponse<Student>, Omit<Student, "id">>({
      query: (newStudent) => ({
        url: "/students",
        method: "POST",
        body: newStudent,
      }),
      invalidatesTags: ["Students"],
    }),

    updateStudent: builder.mutation<
    ApiResponse<Student>,
      { id: number; updateStudent: Partial<Student> }
    >({
      query: ({ id, updateStudent }) => ({
        url: `/students/${id}`,
        method: "PUT",
        body: updateStudent,
      }),
      invalidatesTags: ["Students"],
    }),


    deleteStudent: builder.mutation<ApiResponse<void>, number>({
      query: (id) => ({
        url: `/students/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Students"],
    }),
  }),
});

export const {
  useGetStudentByIdQuery,
  useGetStudentsQuery ,
  useAddStudentMutation,
  useUpdateStudentMutation,
  useDeleteStudentMutation,
} = studentApi;
