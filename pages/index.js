import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import favicon from "C:\\Users\\jovee\\Desktop\\PROgrammingnot\\GSHEETS\\favicon.jpeg";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Cool API</title>
        <meta charSet="utf-8" />

      </Head>
      <Image src={favicon} width={150} height={150} className="his"></Image>
      <h1>My Cool API</h1>
      <hr></hr>
      <h2>Usage</h2>
      <p>First, install the stuff and open your terminal. Then navigate to holy-sheet and run the server.</p>

      <kbd>
      npm run dev
      <br></br><br></br>
      yarn dev
      </kbd>

      <p>Now open <a href="http://localhost:300">host 3000</a> in your browser and fetch data with /posts/the row you want to use</p>
    </div>
  )
};