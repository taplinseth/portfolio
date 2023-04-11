import React, { useEffect } from "react";
import styles from "../styles/Carousel.module.css";

const Carousel = () => {
  useEffect(() => {
    carouselRUN();
  }, []);

  function carouselRUN() {
    const carousel = document.getElementById("carousel");
    const scene = document.getElementById("scene");
    const carousel_items_Arrey = document.getElementsByClassName(styles.carousel_item);
    const carousel_btn = document.getElementById("carousel_btn");
    const n = carousel_items_Arrey.length;
    let curr_carousel_items_Arrey = 0;
    const theta = (Math.PI * 2) / n;
    let interval = null;
    const autoCarousel = carousel.dataset.auto;

    setupCarousel(n, parseFloat(getComputedStyle(carousel_items_Arrey[0]).width));
    window.addEventListener("resize", function () {
      clearInterval(interval);
      setupCarousel(n, parseFloat(getComputedStyle(carousel_items_Arrey[0]).width));
    });
    setupNavigation();

    function setupCarousel(n, width) {
        const apothem = width / (2 * Math.tan(Math.PI / n));
        const radius = apothem / Math.cos(Math.PI / n);
      
        scene.style.transformOrigin = `50% 50% -${radius}px`;
        scene.style.transform = `translateZ(-${apothem}px)`;
      
        for (let i = 0; i < n; i++) {
          carousel_items_Arrey[i].style.transformOrigin = `50% 50% -${radius}px`;
          carousel_items_Arrey[i].style.transform = `rotateY(${i * theta}rad) translateZ(${apothem}px)`;
        }
      
        if (autoCarousel === "true") {
          setCarouselInterval();
        }
      }
      
      
      

    function setCarouselInterval() {
      interval = setInterval(function () {
        curr_carousel_items_Arrey++;
        scene.style.transform = `rotateY(${curr_carousel_items_Arrey * -theta}rad)`;
      }, 3000);
    }

    function setupNavigation() {
      carousel_btn.addEventListener("click", function (e) {
        e.stopPropagation();
        const target = e.target;

        if (target.classList.contains("next")) {
          curr_carousel_items_Arrey++;
        } else if (target.classList.contains("prev")) {
          curr_carousel_items_Arrey--;
        }
        clearInterval(interval);
        scene.style.transform = `rotateY(${curr_carousel_items_Arrey * -theta}rad)`;

        if (autoCarousel === "true") {
          setTimeout(setCarouselInterval(), 3000);
        }
      });
    }
  }

  // Add your carousel items and other HTML code here
  return (
    <div>
      {/* Carousel container */}
      <div className={styles.carouselContainer}>

      <div id="carousel" className={styles.carousel}>
        <div id="scene" className={styles.scene}>
          {/* Carousel items */}
          <img
          className={styles.carousel_item}
          src="/projectScreenshots/artistPortfolio.png"
          alt="Item 1"
        />
        <img
          className={styles.carousel_item}
          src="/projectScreenshots/coinWatcher.png"
          alt="Item 2"
        />
        <img
          className={styles.carousel_item}
          src="/projectScreenshots/devJobs.png"
          alt="Item 3"
        />
                <img
          className={styles.carousel_item}
          src="/projectScreenshots/mustache.png"
          alt="Item 2"
        />
          {/* Add more carousel items */}
        </div>
      </div>
      {/* Navigation buttons */}
      <div id="carousel_btn" className={styles.carousel_btn}>
        <div className="btn prev">Prev</div>
        <div className="btn next">Next</div>
      </div>
    </div>
      </div>
  );
};

export default Carousel;
