/* eslint-disable @typescript-eslint/no-empty-function */
import { User } from '@/domain/users/users';
import { useRouter } from 'next/router';
import React, { ReactNode, createContext, useState } from 'react';
import { auth } from '../config/firebaseConfig';
import { signOut } from 'firebase/auth';
import { authService } from '@/services/auth/authService';

type Props = {
  children: ReactNode;
};

type AuthContextProps = {
  currentUser?: User | false;
  loading: boolean;
  signin: (email: string, password: string) => void;
  signout: () => void;
};

const AuthContext = createContext<AuthContextProps>({
  currentUser: false,
  loading: false,
  signin: (email: string, password: string) => {},
  signout: () => {},
});

export const AuthProvider: React.FC<Props> = ({ children }: Props) => {
  const [currentUser, setCurrentUser] = useState<any>(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const signin = async (email: string, password: string) => {
    try {
      setLoading(true);
      return await authService
        .login({ email, password })
        .then((response) => {
          //setCurrentUser(response.user);
          console.log('response', response);
          router.push('/');
        })
        .catch((error) => alert(error.message));
    } finally {
      setLoading(false);
    }
  };

  const signout = async () => {
    try {
      setLoading(true);
      router.push('/');

      return await signOut(auth).then(() => setCurrentUser(false));
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{ currentUser: currentUser, loading, signin, signout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const AuthConsumer = AuthContext.Consumer;

export default AuthContext;
