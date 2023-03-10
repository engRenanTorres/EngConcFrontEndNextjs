import { Header } from '@/components/global/Header';
import withSession from '@/services/auth/session';

export default function Dashboard(props: React.ReactNode) {
  return (
    <>
      <main>
        <Header title={'DashBoard'} subtitle={''} />
        <h1>oi</h1>
      </main>
    </>
  );
}

export const getServerSideProps = withSession((ctx: any) => {
  const context = ctx as unknown as ContextReq;
  return {
    props: {
      session: context.req.session,
    },
  };
});

type ContextReq = {
  req: { session: object };
};
