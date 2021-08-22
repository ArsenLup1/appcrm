import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import Navb from '../components/Atomes/navbar';
import MoleculeRdvFormation from '../components/Molecules/MoleculeRdv';

export default function rdv() {
  return (
    <div>
      <Head>
        <title>CRM Kab</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container overflow: auto; mx-auto"> 
            <Navb/>
      <div className="container mt-3">
            <MoleculeRdvFormation />
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
