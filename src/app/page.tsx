import { FaHome} from "react-icons/fa"
import AppHeader from '@/client-components/AppHeader'
import styles from './page.module.css'
import Link from "next/link";

export default function Home() {
  return (
    <main >
      <div>
        <Link href={"/about"}>about</Link>
      </div>
      <p className="header">สวัสดี  Hospital</p>
      <p>{process.env.DB_USER}</p>
      <p>{process.env.DB_PASSWORD}</p>
      <FaHome size={50}/>
      <AppHeader />
      <p className={styles.title}> NB-Hospital</p>
    </main>
  );
}
