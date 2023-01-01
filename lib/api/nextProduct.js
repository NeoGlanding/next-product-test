import { API, nextAPI } from ".";

class NextProductAPI extends API {
  constructor(axios, url) {
    super(axios, url);
  }

  async postProduct(body) {
    try {
      const data = await this.axios.post(this.url, body);
      return data;
    } catch (error) {
      throw error;
    }
  }
}

const nextProductApi = new NextProductAPI(nextAPI, "/products");

export default nextProductApi;
