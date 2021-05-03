import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    //there are multiple ways to pass an authorization token, this is how you pass it in the header.
    //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = (method === "get")
        ? data
        : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  // get list of companies
  static async getCompanies(formData = false) {
    let res
    if (formData) {
      res = await this.request(`companies`, formData);
    } else {
    res = await this.request(`companies`);}
    return res;
  }

  // get user from backend
  static async getUser(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }

  // update user
  static async updateUser(username, formData) {
    console.log('startapi')
    let res = await this.request(`users/${username}`, formData, "PATCH")
    console.log(res)
    return res.user
  }

  //send job application to backend
  static async apply(username, job) {
    await this.request(`users/${username}/jobs/${job}`, {}, "POST");
  }

  // get jobs from backend
  static async getJobs(formData = false) {
    let res
    if (formData) {
      res = await this.request(`jobs`, formData);
    } else {
    res = await this.request(`jobs`);
    }
    return res;
  }
  
  // login user
  static async login(formData) {
    let res = await this.request(`auth/token`, formData, "POST");
    this.token = res.token;
    return this.token;
  }

  // logout user
  static logout() {
    this.token = null;
  }

  // signup new user
  static async signup(formData) {
    let res = await this.request(`auth/register`, formData, "POST");
    this.token = res.token;
    return this.token
  }
}

export default JoblyApi;