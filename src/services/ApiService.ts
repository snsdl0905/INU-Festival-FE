import axios from 'axios';

const API_BASE_URL = 'http://ec2-3-35-50-94.ap-northeast-2.compute.amazonaws.com:4000';

export default class ApiService {
  private instance = axios.create({
    baseURL: API_BASE_URL,
  });

  private accessToken = '';

  private code = '';

  setAccessToken(accessToken: string) {
    if (accessToken === this.accessToken) {
      return;
    }

    const authorization = accessToken ? `Bearer ${accessToken}` : undefined;

    this.instance = axios.create({
      baseURL: API_BASE_URL,
      headers: { Authorization: authorization },
    });

    this.accessToken = accessToken;
  }

  // 로그아웃
  // async logout(): Promise<void> {
  //   await this.instance.delete('/sesstion');
  // }

  async fetchCurrentUser(): Promise<{
    id: string;
    name: string;
  }> {
    const { data } = await this.instance.get('/login/me');
    const { id, name } = data;
    return { id, name };
  }

  async lmsLogin({ email, password }: {
        email: string;
        password: string;
      }): Promise<string> {
    const studentId = email;
    const { data } = await this.instance.post('/login/lms', { studentId, password });
    const { accessToken } = data;
    return accessToken;
  }

  async kakaoLogin() {
    const { data } = await this.instance.post('/auth/kakao');
    const { accessToken } = data;
    return accessToken;
  }
}

export const apiService = new ApiService();
