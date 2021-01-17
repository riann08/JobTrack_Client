import axios from "axios";

const service = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL + "/api",
  withCredentials: true,
});

function errorHandler(error) {
  if (error.response) {
    console.log(error.response.data.message);
    throw error.response.data;
  }
  throw error;
}

export default {
  service,

  signup(userInfo) {
    return service
      .post("/auth/signup", userInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  signin(userInfo) {
    return service
      .post("/auth/signin", userInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  logout() {
    return service.get("/auth/logout").catch(errorHandler);
  },

  isLoggedIn() {
    return service
      .get("/auth/isLoggedIn")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  getJobs() {
    return service
      .get("/job")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  updateJob( jobId, data) {
    return service
      .patch(`/job/${jobId}`, data)
      .then((res) => res.data)
      .catch(errorHandler)
  },

  createJob(data) {
    return service
      .post("/job", data)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  deleteJob(jobId) {
    return service
      .delete(`/job/${jobId}`)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  updateUser(userId, data) {
    return service
      .patch(`/user/${userId}`, data)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  getUserInfo(userId) {
    return service
      .get(`/user/${userId}`)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  createUser(data) {
    return service
      .post(`/user, data`)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  deleteUser(userId) {
    return service
      .delete(`/user/${userId}`)
      .then((res) => res.data)
      .catch(errorHandler);
  }

};

