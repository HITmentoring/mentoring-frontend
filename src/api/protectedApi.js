import axios from 'axios';

const API = axios.create({ baseURL: "http://localhost:4000/api" })

API.interceptors.request.use((req) => {
  if (localStorage.getItem("userinfo")) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("userinfo")).token
      }`;
  }
  return req;
});

//teacher api for students
export const getAllStudents = async () => {
  const res = await API.get("/teacher")
  return res;
}

export const createStudent = async (studentData) => {
  const { studentId, fullName, email, regNo, rollNo, dept, startYear, endYear, batchno, groupNo } = studentData;
  const res = await API.post("/teacher/create-student", {
    studentId,
    fullName,
    email,
    regNo,
    rollNo,
    dept,
    startYear,
    endYear,
    batchno,
    groupNo,
  })
  return res;
}

export const updateStudent = async (id, studentData) => {
  const res = await API.put(`/teacher/update/${id}`, {
    ...studentData
  })
  return res;
}

export const deleteStudent = async (id) => {
  const res = await API.delete(`/teacher/delete/${id}`)
  return res;
}

//admin api for teachers
export const getAllTeachers = async () => {
  const res = await API.get("/admin")
  return res;
}

export const createTeacher = async (teacherData) => {
  const { empId, fullName, dept, ofYear, ofBatch, ofGroup } = teacherData;
  const res = await API.post("/admin/create-teacher", {
    email,
    empId,
    fullName,
    dept,
    ofYear,
    ofBatch,
    ofGroup
  })
  return res;
}

export const updateTeacher = async (id, teacherData) => {
  const res = await API.put(`/admin/edit/${id}`, {
    ...teacherData
  })
  return res;
}

export const deleteTeacher = async (id) => {
  const res = await API.delete(`/admin/delete/${id}`)
  return res;
}

export const changePassword = async (oldPassword, newPassword) => {
  const res = await API.post("/auth/change-password", {
    oldPassword, newPassword
  })
  return res;
}

export const documentUpload = async (formData) => {
  const res = await axios.post("/upload/single", formData)
  return res;
}