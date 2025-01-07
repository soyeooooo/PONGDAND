import '@/app/globals.css';
import BottomNavbar from './_component/BottomNavbar';
import ClientThemeProvider from './ClientThemeProvider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <ClientThemeProvider>
          <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <main style={{ flex: 1 }}>
              {children}
            </main>
            <BottomNavbar />
          </div>
        </ClientThemeProvider>
      </body>
    </html>
  );
}
