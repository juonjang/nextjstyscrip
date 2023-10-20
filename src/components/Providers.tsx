"use client";
import '@mantine/core/styles.css';
import { MantineProvider, createTheme } from '@mantine/core';
import { Kanit,Sarabun } from "next/font/google";
import { useServerInsertedHTML } from 'next/navigation';



const sarabun = Sarabun({ subsets: ["thai"],
weight:['100','200','300'] });
const kanit = Kanit({ subsets: ["thai"],weight:['100','200','300','500','700'] });


const theme = createTheme({
  fontFamily: kanit.style.fontFamily
});


export default function Providers({children}:{children:React.ReactNode}){
  useServerInsertedHTML (()=>(
    <style
    dangerouslySetInnerHTML={{__html:Object.values('')}}
    />
  ))
    return (
        <MantineProvider theme={theme}>
          {children}
        </MantineProvider>
      );
}