/* This is a simplest way to create BaseService class based approach */

/* normmay we should get from .env file but this is a fake but so I kept it here */
const BASE_URL = "https://fakestoreapi.com";

class BaseService {
  constructor() {
    this.baseURL = BASE_URL;
  }

  async makeRequest(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;

    try {
      const response = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
          ...options.headers,
        },
        ...options,
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();

      return data;
    } catch (error) {
      console.error(`API request failed:`, error);
      throw new Error(`Failed to fetch data: ${error.message}`);
    }
  }
}

export default BaseService;
