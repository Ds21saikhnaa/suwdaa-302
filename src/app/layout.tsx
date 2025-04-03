import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import '@/styles/globals.scss';
import '@/styles/colors.scss';

import { Provider } from '@/components/ui/provider';
import { siteConfig } from '@/config';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: siteConfig.main.title,
  description: siteConfig.main.description,
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <div style={{ padding: '10px 0' }}>{children}</div>
        </Provider>
      </body>
    </html>
  );
}
