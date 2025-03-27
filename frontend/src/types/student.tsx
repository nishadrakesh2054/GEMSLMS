export interface Student {
  id: number;
  name: string;
  phone: string;
  email: string;
  rollNo: number;
  grade: string;
  age: number;
}
export interface ApiResponse<T> {
  message: string;
  student: T;
}
export interface StudentsResponse {
  Total_students: number;
  students: Student[];
}

export type GetStudentApiResponse = ApiResponse<StudentsResponse>;
