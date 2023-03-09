import { HttpClient, HttpClientGet } from '@/utils/httpClient/httpClient';
import { tokenService } from './tokenService';
import { access } from 'fs';

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
  async getSession(ctx: any) {
    const accessToken = tokenService.get(ctx);
    return HttpClientGet(
      process.env.NEXT_PUBLIC_BACKEND_DEV + '/api/auth/session',
      {},
      accessToken,
    ).then((response) => {
      if (!response.ok) {
        throw new Error('Não Autorizado');
      }
      const body = response.body as Body;
      return body.credencials ? body.credencials : '';
    });
  },
};

type Body = {
  valid: boolean;
  credencials: {
    id: string;
    name: string;
    email: string;
    roles: number;
  };
};
