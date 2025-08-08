import BaseService from "../../../../shared/services/BaseService/BaseService";

class ProductsService extends BaseService {
  async getProducts() {
    return this.makeRequest("/products");
  }

  async getProduct(id) {
    return this.makeRequest(`/products/${id}`);
  }

  async getProductsByCategory(category) {
    return this.makeRequest(`/products/category/${category}`);
  }

  async getCategories() {
    return this.makeRequest("/products/categories");
  }
}

export default new ProductsService();
