import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import SectionDash from '../components/Molecules/SectionDash';
import Navb from '../components/Atomes/navbar';

export default function test() {
  return (
    <div>
      <Head>
        <title>CRM Kab</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto overflow: auto;"> 
       <div>
            <Navb/>
        </div>
      <div className="container-fluid">
          
            <SectionDash />
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
