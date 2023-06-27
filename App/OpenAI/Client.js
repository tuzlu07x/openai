import axios from "axios";

export default class Client {
  constructor(bearerToken, openAIOrganization, baseUrl) {
    this.bearerToken = bearerToken;
    this.openAIOrganization = openAIOrganization;
    this.baseUrl = baseUrl;
  }

  async post(data) {
    try {
      const response = await axios.post(
        this.baseUrl + "v1/chat/completions",
        data,
        {
          headers: {
            Authorization: `Bearer ${this.bearerToken}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("İstek gönderirken bir hata oluştu:", error);
      throw error;
    }
  }
}
