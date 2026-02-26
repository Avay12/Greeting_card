"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Swiper from "swiper";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";

const slides = [
  {
    id: 1,
    desktopImg: "https://images.contentstack.io/v3/assets/bltcbd0de6834ffd7a9/bltce0eb7938b690c56/663cefdcaea329c98460eff9/MRCH.001_AmericanGreetings.com_AGR_Launch_Assets_AGR_Member_Benefits_Homepage_Banner_DESKTOP_Static.jpg",
    mobileImg: "https://images.contentstack.io/v3/assets/bltcbd0de6834ffd7a9/bltd4a87155a451f2d3/663ced9a44cc742149596203/MRCH.001_AmericanGreetings.com_AGR_Launch_Assets_AGR_Member_Benefits_Homepage_Banner_MOBILE_Static.jpg",
    alt: "Image showing a collection of cards you can send when becoming a member of American Greetings",
    heading: "The Thoughtfulness You’ve Always Trusted",
    subhead: "From timeless birthday wishes to festive holiday greetings, send meaningful ecards in minutes.",
    link: "/ecards",
    linkText: "Explore Ecards",
    styleClass: "--billboard-style-light",
    positionClass: "--billboard-left",
    buttonClass: "--light-transparent"
  },
  {
    id: 2,
    desktopImg: "https://images.contentstack.io/v3/assets/bltcbd0de6834ffd7a9/bltea53779bb525baae/695fc7f442e205aaac76f25d/MRCH.011_FY26_Everyday_AG_January_Merchandising_Homepage_Banner_DESKTOP.jpg",
    mobileImg: "https://images.contentstack.io/v3/assets/bltcbd0de6834ffd7a9/blta17920aeef8e66ac/695fc7f8620ac7e74c0995b9/MRCH.011_FY26_Everyday_AG_January_Merchandising_Homepage_Banner_MOBILE.jpg",
    alt: "Winter ecards in a winter scene",
    heading: "The Celebrations Don’t Stop in February",
    subhead: "Keep the kindness going with unlimited ecards for every winter and early spring occasion.",
    link: "/ecards",
    linkText: "Send an Ecard Today",
    styleClass: "--billboard-style-dark",
    positionClass: "--billboard-centered",
    buttonClass: ""
  }
];

export default function HeroCarousel() {
  const swiperRef = useRef<Swiper | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    swiperRef.current = new Swiper("#carousel-instance .swiper", {
      modules: [Navigation, Pagination, Autoplay, A11y],
      loop: true,
      autoplay: {
        delay: 8000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: "#carousel-instance .carousel__button.--next",
        prevEl: "#carousel-instance .carousel__button.--prev",
      },
      pagination: {
        el: "#carousel-instance .swiper-pagination",
        clickable: true,
        bulletClass: "carousel__bullet",
        bulletActiveClass: "--active-bullet",
      },
      on: {
        autoplayStart: () => setIsPlaying(true),
        autoplayStop: () => setIsPlaying(false),
      }
    });

    return () => {
      if (swiperRef.current) swiperRef.current.destroy();
    };
  }, []);

  const toggleAutoplay = () => {
    if (swiperRef.current && swiperRef.current.autoplay) {
      if (isPlaying) {
        swiperRef.current.autoplay.stop();
      } else {
        swiperRef.current.autoplay.start();
      }
    }
  };

  return (
    <section aria-label="Billboard Carousel" className="--spacing-025-top --spacing-0-sm-top --full-sm show-all" style={{ backgroundColor: "#ffffff" }}>
      <div className="container">
        <div className="layout">
          <div className="layout__item">
            {/* <!-- Carousel reference --> */}
            <div data-type="--billboard-banner" className="carousel --billboard-banner --lighter --init" id="carousel-instance">
              <div className="carousel__overlay">
                <button type="button" className="carousel__button --prev" aria-label="previous slide">
                  <span className="css-icon --arrow --back"></span>
                </button>
              </div>
              
              <div className="carousel__slider swiper">
                <ul className="carousel__items swiper-wrapper">
                  {slides.map((slide) => (
                    <li key={slide.id} className="carousel__item swiper-slide">
                      {/* <!--Billboard slide block--> */}
                      <div className="billboard-slide --desktop">
                        <div className="billboard-slide__img">
                          <Image
                            src={slide.desktopImg}
                            alt={slide.alt}
                            width={2360}
                            height={1010}
                            priority={slide.id === 1}
                            style={{ "--img-height": "1010", "--img-width": "2360", width: "100%", height: "auto", objectFit: "cover" } as React.CSSProperties}
                          />
                        </div>
                        <div className={`billboard-slide__overlay text-block ${slide.styleClass} ${slide.positionClass}`}>
                          <div className={`billboard-slide__backdrop ${slide.styleClass === "--billboard-style-dark" ? "--billboard-style-dark" : ""} --billboard-text-center`}>
                            <h1 className="billboard-slide__heading">{slide.heading}</h1>
                            <p className="billboard-slide__subhead">{slide.subhead}</p>
                            <a href={slide.link} className={`btn ${slide.buttonClass}`} tabIndex={-1}>{slide.linkText}</a>
                          </div>
                        </div>
                      </div>
                      <div className="billboard-slide --mobile">
                        <a className="billboard-slide__link" href={slide.link} tabIndex={-1}>
                          <div className="billboard-slide__img">
                            <Image
                              src={slide.mobileImg}
                              alt={slide.alt}
                              width={900}
                              height={588}
                              priority={slide.id === 1}
                              style={{ "--img-height": "588", "--img-width": "900", width: "100%", height: "auto", objectFit: "cover" } as React.CSSProperties}
                            />
                          </div>
                        </a>
                        <div className="text-block billboard-slide__content">
                          <h1 className="billboard-slide__heading">{slide.heading}</h1>
                          <p className="billboard-slide__subhead">{slide.subhead}</p>
                          <a href={slide.link} className="btn" tabIndex={-1}>{slide.linkText}</a>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
              </div>
              
              <div className="carousel__overlay">
                <button type="button" className="carousel__button --next" aria-label="next slide">
                  <span className="css-icon --arrow"></span>
                </button>
              </div>
              <div className="carousel__overlay">
                <button type="button" className="carousel__button --autoplay" aria-label={isPlaying ? "pause slider" : "play slider"} onClick={toggleAutoplay}>
                  <span className={`css-icon --play-pause ${isPlaying ? "--playing" : ""}`}></span>
                </button>
              </div>
              <div className="carousel__overlay carousel__pagination grid-visible-xs">
                <div className="swiper-pagination"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
