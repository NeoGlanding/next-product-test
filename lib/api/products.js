import { localAPI, API } from ".";

class ProductAPI extends API {
  constructor(axios, url) {
    super(axios, url);
  }

  async getProduct() {
    try {
      const { data } = await this.axios.get(this.url);
      return data;
    } catch (error) {
      throw error;
    }
  }

  async getProductDetail(id) {
    try {
      const { data } = await this.axios.get(`${this.url}/${id}`);
      return data.data;
    } catch (error) {
      throw error;
    }
  }

  async postProduct(payload) {
    try {
      const { data } = await this.axios.post(this.url, payload);
      return data.data;
    } catch (error) {
      throw error;
    }
  }
}

const productApi = new ProductAPI(localAPI, "/products");

export default productApi;
