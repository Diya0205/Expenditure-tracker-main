import { Inter, Ubuntu } from "next/font/google";
import "./globals.css";
import {  ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster"
const ubuntu = Ubuntu({ weight: "400", subsets: ["latin"]});

export const metadata = {
  title: "Expenses Tracker",
  description: "Track your expenses with ease",
};

export default function RootLayout({ children }) {
  return (
    
      <ClerkProvider>
        <html lang='en'>
          <body className={ubuntu.className}><Toaster />
            {children}
          </body>
        </html>
      </ClerkProvider> 
  );
}
