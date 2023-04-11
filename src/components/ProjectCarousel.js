import React from 'react';
import PropTypes from 'prop-types';
import projects from './Projects';
import styles from '../styles/Carousel.module.css';

function ProjectCarousel() {
  const images = projects.map((project) => project.image);

  const n = images.length;
  const theta = (2 * Math.PI) / n;
  let currImageIndex = 0;
  let intervalId = null;

  React.useEffect(() => {
    setupCarousel(n, parseFloat(getComputedStyle(document.querySelector(`.${styles.carouselItem}`)).width));
    window.addEventListener('resize', handleResize);
    setupNavigation();

    if (carousel.dataset.auto === 'true') {
      setCarouselInterval();
    }

    return () => {
      clearInterval(intervalId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function handleResize() {
    clearInterval(intervalId);
    setupCarousel(n, parseFloat(getComputedStyle(document.querySelector(`.${styles.carouselItem}`)).width));
  }

  function setupCarousel(n, width) {
    const apothem = width / (2 * Math.tan(Math.PI / n));
    const scene = document.querySelector(`.${styles.scene}`);
    scene.style.transformOrigin = `50% 50% ${-apothem}px`;
  
    for (let i = 0; i < n; i++) {
      const carouselItem = document.querySelector(`.${styles[`carouselItem-${i}`]}`);
      carouselItem.style.transformOrigin = `50% 50% ${-apothem}px`;
      carouselItem.style.transform = `rotateY(${i * theta}rad)`;
    }
  }
  

  function setCarouselInterval() {
    intervalId = setInterval(() => {
      currImageIndex = (currImageIndex + 1) % n;
      const scene = document.querySelector(`.${styles.scene}`);
      scene.style.transform = `rotateY(${currImageIndex * -theta}rad)`;
    }, 3000);
  }

  function setupNavigation() {
    const nextBtn = document.querySelector(`.${styles.next}`);
    const prevBtn = document.querySelector(`.${styles.prev}`);

    nextBtn.addEventListener('click', handleNextClick, true);
    prevBtn.addEventListener('click', handlePrevClick, true);
  }

  function handleNextClick(e) {
    e.stopPropagation();
    currImageIndex = (currImageIndex + 1) % n;
    clearInterval(intervalId);

    const scene = document.querySelector(`.${styles.scene}`);
    scene.style.transform = `rotateY(${currImageIndex * -theta}rad)`;

    if (carousel.dataset.auto === 'true') {
      setTimeout(setCarouselInterval, 3000);
    }
  }

  function handlePrevClick(e) {
    e.stopPropagation();
    currImageIndex = (currImageIndex - 1 + n) % n;
    clearInterval(intervalId);

    const scene = document.querySelector(`.${styles.scene}`);
    scene.style.transform = `rotateY(${currImageIndex * -theta}rad)`;

    if (carousel.dataset.auto === 'true') {
      setTimeout(setCarouselInterval, 3000);
    }
  }

  return (
    <div id="carousel" className={styles.carousel} data-auto="true">
      <div className={styles.scene}>
        {images.map((image, index) => (
          <div key={index} className={`${styles.carouselItem} ${styles[`carouselItem-${index}`]}`}>
            <img src={image} alt={`Carousel image ${index}`} />
          </div>
        ))}
     
     </div>
      <div id="carousel_btn" className={styles.carouselBtn}>
        <button className={styles.prev}>Prev</button>
        <button className={styles.next}>Next</button>
      </div>
    </div>
  );
}

export default ProjectCarousel;