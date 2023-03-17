import Sidebar from '@/components/global/Sidebar';
import Topbar from '@/components/global/Topbar';
import { GlobalStyles } from '@/styles/global-styles';
import createCache from '@emotion/cache';
import { CacheProvider, EmotionCache } from '@emotion/react';
import type { AppProps } from 'next/app';
import { ThemeProvider as NextThemeProvider } from 'next-themes';
import PageProvider from '@/utils/theme/PageProvider';
import { AuthProvider } from '@/contexts/AuthContext';
import Sidebar2 from '@/components/global/Sidebar2';

const clientSideEmotionCache = createCache({ key: 'css', prepend: true });

interface MyAppProps extends AppProps {
  emotionCahche?: EmotionCache;
}

export default function App(props: MyAppProps) {
  const {
    Component,
    pageProps,
    emotionCahche = clientSideEmotionCache,
  } = props;
  return (
    <NextThemeProvider>
      <AuthProvider>
        <CacheProvider value={emotionCahche}>
          <PageProvider>
            <div className='app'>
              <Sidebar />
              <div className='content-page'>
                <Topbar />
                <Component {...pageProps} />
              </div>
              <GlobalStyles />
            </div>
          </PageProvider>
        </CacheProvider>
      </AuthProvider>
    </NextThemeProvider>
  );
}
