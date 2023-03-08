import { FormEventHandler, useCallback } from 'react';
import useAuth from '@/utils/hooks/useAuth';

interface eventTarget extends HTMLFormControlsCollection {
  email: HTMLInputElement;
  password: HTMLInputElement;
}

const Login = () => {
  const { signin } = useAuth();
  const handleLogin: FormEventHandler<HTMLFormElement> = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const { email, password } = (event.target as HTMLFormElement)
        .elements as eventTarget;
      try {
        signin(email.value, password.value);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    [],
  );

  //if (currentUser) return router.push('/');
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label>
          Email
          <input name='email' type='email' placeholder='Email...' />
        </label>
        <label>
          Password
          <input name='password' type='password' placeholder='Password...' />
        </label>
        <button type='submit'>Login</button>
      </form>
    </div>
  );
};

export default Login;
