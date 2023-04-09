import Head from "next/head";
import styles from "@component/styles/Home.module.css";
import ParticleBackground from "../components/ParticleBackground";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Seth Taplin</title>
        <meta
          name="description"
          content="Portfolio Website Created by Seth Taplin"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icons8-backend-development-96.png" />
      </Head>

      <ParticleBackground />
      <main className={styles.main}>
        <header>
          <h1>Seth Taplin</h1>
          <p>Full-Stack Developer</p>
        </header>
        <section className={styles.technologies}>
          <div className={styles.techHeaderContainer}>
            <p className={styles.techHeader}>Technologies</p>
          </div>
          <div className={styles.techs}>
            <p>HTML/CSS</p>
            <p>Javascript</p>
            <p>Typescript</p>
            <p>Python</p>
            <p>React.js</p>
            <p>Next.js</p>
            <p>Node.js</p>
            <p>MySql</p>
            <p>MongoDB</p>
          </div>
        </section>
        <Navbar />
      </main>
    </>
  );
}
