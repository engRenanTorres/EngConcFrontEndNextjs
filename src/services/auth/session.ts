import { authService } from './authService';

export default function withSession(
  func: (ctx: unknown) => { props: { session: object } },
) {
  return async (ctx: any) => {
    try {
      const session = await authService.getSession(ctx);
      const contextWithSession = {
        ...ctx,
        req: {
          ...ctx.req,
          session: session,
        },
      };
      return func(contextWithSession);
    } catch (error) {
      return {
        redirect: {
          permanent: false,
          destination: '/login',
        },
      };
    }
  };
}
