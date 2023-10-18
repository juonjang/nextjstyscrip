 import "../globals.css";
import { Inter,Kanit,Sarabun } from "next/font/google";

const sarabun = Sarabun({ subsets: ["thai"],
weight:['100','200','300'] });
const kanit = Kanit({ subsets: ["thai"],weight:['100','200','300','500','700'] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={sarabun.className}>
        <h1>Header สวัสดี</h1>
        <hr />
        {children}
        <hr />
        <h4>...........Footer..........</h4>
      </body>
    </html>
  );
}
