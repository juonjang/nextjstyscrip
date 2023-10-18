
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

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
         
        <h3>Layout About</h3>
        <hr />
        {children}
       
    
     </div>

  );
}
