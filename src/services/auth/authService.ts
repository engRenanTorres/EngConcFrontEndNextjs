import { HttpClient } from '@/utils/httpClient/httpClient';
import { tokenService } from './tokenService';

type LoginBody = { email: string; password: string };
type loginResponse = { token: string };

export const authService = {
  async login({ email, password }: LoginBody) {
    return HttpClient<LoginBody>(
      'POST',
      process.env.NEXT_PUBLIC_BACKEND_DEV + '/api/auth/login',
      {
        body: { email, password },
      },
    ).then((response) => {
      if (!response.ok) throw new Error('Usuário ou senha inválidos');
      const body = response.body as loginResponse;
      if (body.token) tokenService.save(body.token);
      console.log(body);
    });
  },
};
