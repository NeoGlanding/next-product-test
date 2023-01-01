import axios from "axios";

// Instance
const localAPI = axios.create({
  baseURL: "http://localhost:3010",
});

const nextAPI = axios.create({
  baseURL: "http://localhost:3000/api",
});

// Abstract Class
class API {
  constructor(axios, url) {
    this.url = url;
    this.axios = axios;
  }

  async get(params = {}, config = {}) {
    try {
      const { data } = await this.axios.get(this.url, { params, ...config });
      return data.data;
    } catch (error) {
      throw error;
    }
  }

  async post(body, params = {}, config = {}) {
    try {
      const { data } = await this.axios.post(this.url, body, {
        params,
        ...config,
      });
      return data.data;
    } catch (error) {
      throw error;
    }
  }

  async getDetail(id, params = {}, config = {}) {
    try {
      const { data } = await this.axios.get(`${this.url}/${id}`, {
        params,
        ...config,
      });
      return data.data;
    } catch (error) {
      throw error;
    }
  }

  async postDetail(id, body, params = {}, config = {}) {
    try {
      const { data } = await this.axios.post(`${this.url}/${id}`, body, {
        params,
        ...config,
      });
      return data.data;
    } catch (error) {
      throw error;
    }
  }

  async patchDetail(id, body, params = {}, config = {}) {
    try {
      const { data } = await this.axios.patch(`${this.url}/${id}`, body, {
        params,
        ...config,
      });
      return data.data;
    } catch (error) {
      throw error;
    }
  }

  async putDetail(id, body, params = {}, config = {}) {
    try {
      const { data } = await this.axios.put(`${this.url}/${id}`, body, {
        params,
        ...config,
      });
      return data.data;
    } catch (error) {
      throw error;
    }
  }

  async patch(body, params = {}, config = {}) {
    try {
      const { data } = await this.axios.patch(`${this.url}`, body, {
        params,
        ...config,
      });
      return data.data;
    } catch (error) {
      throw error;
    }
  }

  async put(body, params = {}, config = {}) {
    try {
      const { data } = await this.axios.patch(`${this.url}`, body, {
        params,
        ...config,
      });
      return data.data;
    } catch (error) {
      throw error;
    }
  }
}

export { localAPI, nextAPI, API };
