/* eslint-disable @typescript-eslint/no-empty-function */
import { User } from '@/domain/users/users';
import { useRouter } from 'next/router';
import React, { ReactNode, createContext, useEffect, useState } from 'react';
import { Credencials, authService } from '@/services/auth/authService';
import { tokenService } from '@/services/auth/tokenService';

type Props = {
  children: ReactNode;
};

type AuthContextProps = {
  currentUser?: Credencials | false;
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
        .then(async (response) => {
          console.log('response', response);
          try {
            const user = await authService.getSession();
            setCurrentUser(user);
            router.push('/');
          } catch (error) {
            setCurrentUser(false);
          }
        })
        .catch((error) => {
          alert(error.message);
          console.log(error);
        });
    } finally {
      setLoading(false);
    }
  };

  const signout = async () => {
    try {
      setLoading(true);
      tokenService.delete();
      setCurrentUser(false);
      router.push('/login');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    authService
      .getSession()
      .then((user) => {
        setCurrentUser(user);
      })
      .catch(() => {
        setCurrentUser(false);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        loading,
        signin,
        signout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const AuthConsumer = AuthContext.Consumer;

export default AuthContext;
