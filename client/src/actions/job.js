import * as api from "../api";

export const getJobs = async (job, location) => {
  const jobType = job.toLowerCase();
  const city = location.split(',')[0].trim().toLowerCase();
  const state = location.split(',')[1].trim().toLowerCase();
  try {
    const { data } = await api.getJobs({jobType, city, state});
    return data;
  } catch (error) {
    return error?.response?.data;
  }
}

export const getAllJobs = async () => {
  try {
    const { data } = await api.getAllJobs();
    return data;
  } catch (error) {
    return error?.response?.data;
  }
} 
