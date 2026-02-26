"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Swiper from "swiper";
import { Navigation, A11y } from "swiper/modules";

const categories = [
  {
    id: 1,
    title: "Birthdays",
    link: "/ecards/birthday",
    img: "https://images.contentstack.io/v3/assets/bltcbd0de6834ffd7a9/blt4ff10beab7c96f99/6627f05eac4b000597c425b7/Birthday.jpg",
    hoverImg: "https://images.contentstack.io/v3/assets/bltcbd0de6834ffd7a9/blt025cad129bc3707f/6627f05e700d6c640ea67bd5/Birthday_HOVER.gif",
  },
  {
    id: 2,
    title: "Thank You",
    link: "/ecards/thank-you",
    img: "https://images.contentstack.io/v3/assets/bltcbd0de6834ffd7a9/blt3c7900a6eb974287/66294eaa24e1812d47acee34/Thank-You.jpg",
    hoverImg: "https://images.contentstack.io/v3/assets/bltcbd0de6834ffd7a9/bltda130b1b5c3cdea4/66294eaa33301d2b76892e6c/Thank-You_HOVER.gif",
  },
  {
    id: 3,
    title: "Anniversary",
    link: "/ecards/anniversary",
    img: "https://images.contentstack.io/v3/assets/bltcbd0de6834ffd7a9/bltaf858bf36728bb1f/66295128ac4b004216c4337d/Anniversary.jpg",
    hoverImg: "https://images.contentstack.io/v3/assets/bltcbd0de6834ffd7a9/bltb47dae52ed0161f2/66295083e7ce95dc20deaa30/Anniversary_HOVER.gif",
  },
  {
    id: 4,
    title: "Get Well",
    link: "/ecards/get-well",
    img: "https://images.contentstack.io/v3/assets/bltcbd0de6834ffd7a9/blt9d4aa6cd079f83a6/6629606b81c8847bd23804bd/Get_Well.jpg",
    hoverImg: "https://images.contentstack.io/v3/assets/bltcbd0de6834ffd7a9/blt969f8cea9fe4054c/6629606bb0544112cc9a064a/Get_Well_HOVER.gif",
  },
  {
    id: 5,
    title: "Thinking of You",
    link: "/ecards/thinking-of-you",
    img: "https://images.contentstack.io/v3/assets/bltcbd0de6834ffd7a9/blt2ff424a706f1ff37/6627f522a9b0ab7fb7b91ba8/Thinking-of-You.jpg",
    hoverImg: "https://images.contentstack.io/v3/assets/bltcbd0de6834ffd7a9/blt8cf1f16d1b1243fb/6627f52285518cadcc5577df/Thinking-of-You_HOVER.gif",
  },
  {
    id: 6,
    title: "Sympathy",
    link: "/ecards/sympathy",
    img: "https://images.contentstack.io/v3/assets/bltcbd0de6834ffd7a9/blt4db3ac6fb052e7af/662a9844fb977cda2e36c410/Sympathy.jpg",
    hoverImg: "https://images.contentstack.io/v3/assets/bltcbd0de6834ffd7a9/blta90b6b88e2543e55/662a9845a9b0aba539b9332c/Sympathy_HOVER.gif",
  },
  {
    id: 7,
    title: "New",
    link: "/new/ecards",
    img: "https://images.contentstack.io/v3/assets/bltcbd0de6834ffd7a9/bltd719e362573c0e8d/68f7bdfb1ace634b9d67447a/New_(1).jpg",
    hoverImg: "https://images.contentstack.io/v3/assets/bltcbd0de6834ffd7a9/bltd719e362573c0e8d/68f7bdfb1ace634b9d67447a/New_(1).jpg",
  },
  {
    id: 8,
    title: "Congrats",
    link: "/ecards/congrats",
    img: "https://images.contentstack.io/v3/assets/bltcbd0de6834ffd7a9/blt773dd13aa20bdf71/6629599d4da2a9ff53ff3180/Congrats.jpg",
    hoverImg: "https://images.contentstack.io/v3/assets/bltcbd0de6834ffd7a9/blt362c3296e03f1928/6629599d85518c7c285585d3/Congrats_HOVER.gif",
  },
  {
    id: 9,
    title: "Miss You",
    link: "/ecards/miss-you",
    img: "https://images.contentstack.io/v3/assets/bltcbd0de6834ffd7a9/blt1011f0574abea215/662967d858ce880716c30c23/Miss-You.jpg",
    hoverImg: "https://images.contentstack.io/v3/assets/bltcbd0de6834ffd7a9/blt4712fa4ab8a3f304/662967d8c9de4635a6d49810/Miss-You_HOVER.gif",
  },
  {
    id: 10,
    title: "Wedding",
    link: "/ecards/wedding-and-engagement",
    img: "https://images.contentstack.io/v3/assets/bltcbd0de6834ffd7a9/blt325f842226c99899/6627f3bdb05441d73099f79d/Wedding.jpg",
    hoverImg: "https://images.contentstack.io/v3/assets/bltcbd0de6834ffd7a9/blta98db3c73ec53beb/6627f3bd24e181b35dace0d9/Wedding_HOVER.gif",
  },
  {
    id: 11,
    title: "Retirement",
    link: "/ecards/retirement",
    img: "https://images.contentstack.io/v3/assets/bltcbd0de6834ffd7a9/blt529ef08bf7011808/66296df5cac8485a3028e2a9/Retirement.jpg",
    hoverImg: "https://images.contentstack.io/v3/assets/bltcbd0de6834ffd7a9/blte8d6a6379a615ccb/66296df658ce886855c30c5a/Retirement_HOVER.gif",
  },
  {
    id: 12,
    title: "New Baby",
    link: "/ecards/baby",
    img: "https://images.contentstack.io/v3/assets/bltcbd0de6834ffd7a9/bltcf0f4b64ff748f79/662954f9a9b0ab78a4b92918/Baby.jpg",
    hoverImg: "https://images.contentstack.io/v3/assets/bltcbd0de6834ffd7a9/blt2b044c6dc12dce71/662954f94da2a903cbff3134/Baby_HOVER.gif",
  }
];

export default function CategoryHighlights() {
  useEffect(() => {
    // Desktop Swiper
    const swiperDesktop = new Swiper("#carousel-instance-1 .swiper", {
      modules: [Navigation, A11y],
      slidesPerView: "auto",
      navigation: {
        nextEl: "#carousel-instance-1 .carousel__button.--next",
        prevEl: "#carousel-instance-1 .carousel__button.--prev",
        disabledClass: "--disabled",
      },
    });

    // Mobile Swiper
    const swiperMobile = new Swiper("#carousel-instance-2 .swiper", {
      modules: [Navigation, A11y],
      slidesPerView: "auto",
      navigation: {
        nextEl: "#carousel-instance-2 .carousel__button.--next",
        prevEl: "#carousel-instance-2 .carousel__button.--prev",
        disabledClass: "--disabled",
      },
    });

    return () => {
      swiperDesktop.destroy();
      swiperMobile.destroy();
    };
  }, []);

  return (
    <>
      <section aria-label="Category Highlights Carousel - Desktop" className="--spacing-0-top hidden-xs" style={{backgroundColor: "#ffffff"}}>
          <div className="container">
              <div className="layout">
                  <div className="layout__item">
                          <div className="text-block --align-center carousel__head --contain-width">
                              <h2>Moments You’ll Never Miss Again</h2>
                          </div>
      {/*  Carousel reference  */}
      <div data-type="--category-highlights" className="carousel --category-highlights --darker --init" id="carousel-instance-1" style={{"--slide-height": "130px"} as React.CSSProperties}>
              <div className="carousel__overlay" aria-hidden="true" data-ignore-inert="true">
                  <button type="button" className="carousel__button --prev --disabled" aria-label="previous slide" tabIndex={-1}>
                      <span className="css-icon --arrow --back"></span>
                  </button>
              </div>
          <div className="carousel__slider swiper">
              <ul className="carousel__items swiper-wrapper" aria-live="polite">
                {categories.map((category) => (
                  <li key={category.id} className="carousel__item swiper-slide" aria-label={category.title}>
                    <div className="category-highlight-item">
                        <a href={category.link} aria-label={category.title} className="category-highlight-item__link">
                            <div className="category-highlight-item__holder">
                            <div className="category-highlight-item__front">
                                <Image src={category.img} style={{"--img-height": "260", "--img-width": "260"} as React.CSSProperties} width={260} height={260} alt="" unoptimized />
                            </div>
                            <div className="category-highlight-item__rollover">
                                <Image src={category.hoverImg} style={{"--img-height": "260", "--img-width": "260"} as React.CSSProperties} width={260} height={260} alt="" unoptimized />
                            </div>
                            </div>
                            <div className="category-highlight-item__title">
                                <p>{category.title}</p>
                            </div>
                        </a>
                    </div>
                  </li>
                ))}
              </ul>
          <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
          <div className="carousel__overlay" aria-hidden="true" data-ignore-inert="true">
              <button type="button" className="carousel__button --next" aria-label="next slide" tabIndex={-1}>
                  <span className="css-icon --arrow"></span>
              </button>
          </div>
      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Carousel block */}
      <section aria-label="Category Highlights Carousel - Mobile" className="--spacing-0-top visible-xs" style={{backgroundColor: "#ffffff"}}>
          <div className="container">
              <div className="layout">
                  <div className="layout__item">
      {/*  Carousel reference  */}
      <div data-type="--category-highlights" className="carousel --category-highlights --darker" id="carousel-instance-2">
              <div className="carousel__overlay" aria-hidden="true" data-ignore-inert="true">
                  <button type="button" className="carousel__button --prev --disabled" aria-label="previous slide" tabIndex={-1}>
                      <span className="css-icon --arrow --back"></span>
                  </button>
              </div>
          <div className="carousel__slider swiper">
              <ul className="carousel__items swiper-wrapper">
                {categories.map((category) => (
                  <li key={category.id} className="carousel__item swiper-slide">
                    <div className="category-highlight-item">
                        <a href={category.link} aria-label={category.title} className="category-highlight-item__link">
                            <div className="category-highlight-item__holder">
                            <div className="category-highlight-item__front">
                                <Image src={category.img} style={{"--img-height": "260", "--img-width": "260"} as React.CSSProperties} width={260} height={260} alt="" unoptimized />
                            </div>
                            <div className="category-highlight-item__rollover">
                                <Image src={category.hoverImg} style={{"--img-height": "260", "--img-width": "260"} as React.CSSProperties} width={260} height={260} alt="" unoptimized />
                            </div>
                            </div>
                            <div className="category-highlight-item__title">
                                <p>{category.title}</p>
                            </div>
                        </a>
                    </div>
                  </li>
                ))}
              </ul>
          </div>
          <div className="carousel__overlay" aria-hidden="true" data-ignore-inert="true">
              <button type="button" className="carousel__button --next" aria-label="next slide" tabIndex={-1}>
                  <span className="css-icon --arrow"></span>
              </button>
          </div>
      </div>
                  </div>
              </div>
          </div>
      </section>
    </>
  );
}
