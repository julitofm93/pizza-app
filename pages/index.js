import Head from 'next/head'
import Featured from '../components/Featured'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>RestoApp</title>
        <meta name="description" content="Aplicación para delivery" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured/>
    </div>
  )
}
