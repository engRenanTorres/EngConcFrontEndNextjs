import { auth } from '@/config/firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { FormEventHandler, useCallback } from 'react';

interface eventTarget extends HTMLFormControlsCollection {
  email: HTMLInputElement;
  password: HTMLInputElement;
}

const SignUp = ({ history }: any) => {
  const handleSignUp: FormEventHandler<HTMLFormElement> = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const { email, password } = (event.target as HTMLFormElement)
        .elements as eventTarget;
      try {
        await createUserWithEmailAndPassword(auth, email.value, password.value);
        //history.push('/');
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    [],
  );

  return (
    <div>
      <h1>Sign up</h1>
      <form onSubmit={handleSignUp}>
        <label>
          Email
          <input name='email' type='email' placeholder='Email...' />
        </label>
        <label>
          Password
          <input name='password' type='password' placeholder='Password...' />
        </label>
        <button type='submit'>Sign up</button>
      </form>
    </div>
  );
};

export default SignUp;
