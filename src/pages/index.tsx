import Head from "next/head";
import styles from "@component/styles/Home.module.css";
import ParticleBackground from "../components/ParticleBackground";
import Navbar from "../components/Navbar";
import AboutMe from "../components/AboutMe";
import Carousel from "../components/Carousel";


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
        <section className={styles.leftMain}></section>
        <section className={styles.middleMain}>
          <div>
            <h1>Hi, my name is Seth Taplin.</h1>
            <p>
              I am a software engineer specializing in full-stack development.
              <br></br>I build things for the web.<br></br>
              Contact me below to get in touch about your site.
            </p>
          </div>
          <div className={styles.aboutMe}>
            <AboutMe />
          </div>
          <div className={styles.carousel}>
            <Carousel />
          </div>
        </section>
        <section className={styles.rightMain}></section>
      </main>
    </>
  );
}
