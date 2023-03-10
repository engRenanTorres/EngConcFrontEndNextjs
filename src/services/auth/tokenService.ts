import nookies from 'nookies';

const ACCESS_TOKEN_KEY = 'QSATKSO';

const ONE_YEAR = 60 * 60 * 24 * 360; //seconds

export const tokenService = {
  save(accessToken: string, ctx: any = null) {
    globalThis?.localStorage?.setItem(ACCESS_TOKEN_KEY, accessToken);
    nookies.set(ctx, ACCESS_TOKEN_KEY, accessToken, {
      maxAge: ONE_YEAR,
      path: '/',
    });
  },
  get(ctx: any = null) {
    const cookies = nookies.get(ctx);
    return cookies[ACCESS_TOKEN_KEY] || '';
    //return globalThis?.localStorage?.getItem(ACCESS_TOKEN_KEY);
  },
  async delete(ctx: any = null) {
    await nookies.destroy(ctx, ACCESS_TOKEN_KEY);
    //globalThis?.localStorage?.removeItem(ACCESS_TOKEN_KEY);
  },
};
