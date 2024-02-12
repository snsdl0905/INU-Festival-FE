import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

export default class ApiService {
  private instance = axios.create({
    baseURL: API_BASE_URL,
  });

  async login({ email, password }: {
        email: string;
        password: string;
      }): Promise<string> {
    const { data } = await this.instance.post('/session', { email, password });
    const { accessToken } = data;
    return accessToken;
  }
}
