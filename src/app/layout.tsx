import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  manifest: "/manifest.json",
  metadataBase: new URL('https://pwa-fcm-ten.vercel.app'),
  title: "Create Next App",
  description: "Generated by create next app",
  openGraph:{
    title:'PWA TEST',
    description:'PWA & FCM 테스트',
    image:'https://pwa-fcm-ten.vercel.app/image/icon-512x512.png'    
  },
  twitter: {
    title:'PWA TEST',
    description:'PWA & FCM 테스트',
    image:'https://pwa-fcm-ten.vercel.app/image/icon-512x512.png' 
  },
  icons:{
    icon:'https://pwa-fcm-ten.vercel.app/image/favicon-16x16.png',
    apple:'https://pwa-fcm-ten.vercel.app/image/favicon-16x16.png',
    shortcut:'https://pwa-fcm-ten.vercel.app/image/favicon-1280x720.png',
    other:{
      rel:'apple-touch-icon-precomposed',
      url: '/icons/apple-touch-icon-57x57.png',
    }
  },
  keywords:['next','react','routing'],
  authors:[{name:'minkyu'}],
  robots:{
    index:false,
    follow:true,
    nocache:true,
    googlebot:{
      index:true,
      follow:false,
    }
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
