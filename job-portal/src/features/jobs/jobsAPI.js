import axiosInstance from "../../utils/axios";

export const getJobs = async () => {
  const jobs = await axiosInstance.get(`/jobs`);
  return jobs.data;
};

export const addJob = async (data) => {
  const job = await axiosInstance.post("/jobs", data);

  return job.data;
};

export const editJob = async (id, data) => {
  const res = await axiosInstance.put(`/jobs/${id}`, data);

  return res.data;
};
