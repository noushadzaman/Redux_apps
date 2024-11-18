import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addJob, editJob, getJobs } from "./jobsAPI";

const initialState = {
  jobs: [],
  isLoading: false,
  isError: false,
  error: "",
  editing: {},
};

export const fetchJobs = createAsyncThunk("jobs/fetchJobs", async () => {
  const jobs = await getJobs();

  return jobs;
});

export const createJob = createAsyncThunk("jobs/createJob", async (data) => {
  const job = await addJob(data);

  return job;
});

export const changeJob = createAsyncThunk("jobs/editJob", async ({ id, data }) => {
    const job = await editJob(id, data);

    return job;
  }
);

const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    setEditItem: (state, action) => {
      state.editing = action.payload;
    },
    removeEditItem: (state, action) => {
      state.editing = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.jobs = action.payload;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.jobs = [];
      })
      .addCase(createJob.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(createJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.jobs.push(action.payload);
      })
      .addCase(createJob.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload.message;
      })
      .addCase(changeJob.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(changeJob.fulfilled, (state, action) => {
        state.isLoading = false;
        const jobIndex = state.jobs.findIndex(
          (j) => j.id === action.payload.id
        );
        state.jobs[jobIndex] = action.payload.data;
      })
      .addCase(changeJob.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload.message;
      });
  },
});

export default jobsSlice.reducer;
export const { setEditItem, removeEditItem } = jobsSlice.actions;
