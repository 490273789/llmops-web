import type { FC } from 'react';
import { ConfigProvider, theme, App as AntdApp } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import { AppRouter } from '@/router';
import { useThemeStore } from '@/stores';

import '@/styles/index.scss';

const App: FC = () => {
  const { resolvedTheme } = useThemeStore();

  return (
    <ConfigProvider
      locale={zhCN}
      theme={{
        zeroRuntime: true,
        hashed: true,
        algorithm: resolvedTheme === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm,
        token: {
          colorPrimary: '#6366f1',
          borderRadius: 6,
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
        },
      }}
    >
      <AntdApp>
        <AppRouter />
      </AntdApp>
    </ConfigProvider>
  );
};

export default App;
