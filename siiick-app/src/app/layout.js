import localFont from "next/font/local";
import NavMenu from './components/navigation.js';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import "./globals.css";
import ResponsiveAppBar from "./components/appbar.js";
import FooterComponent from "./components/footer.js";
import PromoBanner from "./components/promoBanner.js";
import ShoppingBagProvider from "./context/ShoppingBagContext.js";



const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const theme = createTheme({
  palette: {
    primary: {
      light: '#c5eeca',
      main: '#10c64b',
      dark: '#00720e',
      contrastText: '#000',
    },
    secondary: {
      light: '#fb98d7',
      main: '#c6108c',
      dark: '#9d1082',
      contrastText: '#FFF',
    },
  },
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-100`}>
      <div className="flex flex-col h-screen bg-white">

        <ShoppingBagProvider>
          <ResponsiveAppBar />
          <PromoBanner />
          <main className="relative flex flex-col grow">
            {children}
          </main>
        </ShoppingBagProvider>
          <FooterComponent />
        </div>
      </body>
    </html>
  );
}
