import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import SectionLogin from '../components/Molecules/SectionLogin';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CRM Kab</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <SectionLogin />
      </main>

      <footer className={styles.footer}>
        <a href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer">
          Copyright ComJob 2021 {' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
