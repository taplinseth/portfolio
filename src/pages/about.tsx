import Head from 'next/head';

type Props = {};

const About: React.FC<Props> = () => {
  return (
    <>
      <Head>
        <title>About | Seth Taplin</title>
      </Head>

      <main>
        <h1>About Me</h1>
        <p>
          Hi, I'm Seth Taplin. I'm a software developer with experience in JavaScript, Python, and Java. 
        </p>
        <p>
          I have a Bachelor's degree in Computer Science from XYZ University and have worked on several projects ranging from web development to data analysis.
        </p>
      </main>
    </>
  );
};

export default About;
