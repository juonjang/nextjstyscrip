import { FaHome} from "react-icons/fa"
// import AppHeader from '@/client-components/AppHeader'
import styles from './page.module.css'
import Link from "next/link";
import { Button } from '@mantine/core';
import HomeContent from "./ui/HomePage";

export default function HomePage() {
  return (
    <main >
       <HomeContent/>
    </main>
  );
}
