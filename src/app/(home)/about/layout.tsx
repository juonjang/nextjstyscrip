
import {Kanit } from "next/font/google";

const kanit = Kanit({ subsets: ["thai"],
weight:['100','200','300','500','700'] });

export const metadata = {
  title: "about hisData",
  description: "Generated HisData",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    
     <div>
         
        <h3 className={kanit.className}>Layout About</h3>
        <hr />
        {children}
       
    
     </div>

  );
}
