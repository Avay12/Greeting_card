"use client";
import React from "react";
import Image from "next/image";

interface Product {
  id: string;
  model: string;
  name: string;
  href: string;
  imageSrc: string;
  hoverImageSrc?: string; // Some might have hover images? The previous code didn't show them for these, but good to have.
  badges: string[]; // "new", "foil", "custom-song", "music-choice"
  ariaLabel: string;
}

const primaryTabProducts: Product[] = [
  {
    id: "3563107",
    model: "ecard",
    name: "Sprinkled With Birthday Cheer",
    href: "https://www.americangreetings.com/ecards/birthday/sprinkled-with-birthday-cheer/card-3563107",
    imageSrc: "https://ak.imgag.com/imgag/product/flash/3563107/master_380x304.jpg",
    badges: ["new"],
    ariaLabel: "Sprinkled With Birthday Cheer, New",
  },
  {
    id: "3563101",
    model: "ecard",
    name: "Birthday Love",
    href: "https://www.americangreetings.com/ecards/birthday/birthday-love/card-3563101",
    imageSrc: "https://ak.imgag.com/imgag/product/flash/3563101/master_380x304.jpg",
    badges: ["new"],
    ariaLabel: "Birthday Love, New",
  },
  {
    id: "3562817",
    model: "creatacard",
    name: "You Rock! Birthday",
    href: "https://www.americangreetings.com/ecards/birthday/you-rock-birthday/card-3562817",
    imageSrc: "https://ak.imgag.com/imgag/product/unifiedbuilder/3562817/master_380x304.png",
    badges: ["new", "foil", "custom-song"],
    ariaLabel: "You Rock! Birthday, New, Foil, Custom Song",
  },
  {
    id: "3560695",
    model: "smashup",
    name: "'Love Train' Anniversary SmashUp (Personalize)",
    href: "https://www.americangreetings.com/ecards/anniversary/love-train-anniversary-smashup-personalize/card-3560695",
    imageSrc: "https://ak.imgag.com/imgag/product/expressions/3560695/img/master_380x304.jpg",
    badges: ["new"],
    ariaLabel: "'Love Train' Anniversary SmashUp (Personalize), New",
  },
  {
    id: "3562812",
    model: "creatacard",
    name: "Be My Valentine (Personalize)",
    href: "https://www.americangreetings.com/ecards/valentines-day/be-my-valentine-personalize/card-3562812",
    imageSrc: "https://ak.imgag.com/imgag/product/unifiedbuilder/3562812/master_380x304.png",
    badges: ["new", "music-choice", "custom-song"],
    ariaLabel: "Be My Valentine (Personalize), New, Music Choice, Custom Song",
  },
  {
    id: "3563593",
    model: "ecard",
    name: "A Good Nap Heals",
    href: "https://www.americangreetings.com/ecards/get-well/a-good-nap-heals/card-3563593",
    imageSrc: "https://ak.imgag.com/imgag/product/flash/3563593/master_380x304.jpg",
    badges: [],
    ariaLabel: "A Good Nap Heals",
  },
  {
    id: "3562834",
    model: "creatacard",
    name: "Heart Banner Valentine Add-a-Photo",
    href: "https://www.americangreetings.com/ecards/valentines-day/heart-banner-valentine-add-a-photo/card-3562834",
    imageSrc: "https://ak.imgag.com/imgag/product/unifiedbuilder/3562834/master_380x304.png",
    badges: ["new"],
    ariaLabel: "Heart Banner Valentine Add-a-Photo, New",
  },
  {
    id: "3563774",
    model: "creatacard",
    name: "Sweet Valentine Birthday",
    href: "https://www.americangreetings.com/ecards/birthday/sweet-valentine-birthday/card-3563774",
    imageSrc: "https://ak.imgag.com/imgag/product/unifiedbuilder/3563774/master_380x304.png",
    badges: ["new", "foil"],
    ariaLabel: "Sweet Valentine Birthday, New, Foil",
  },
  {
    id: "3560703",
    model: "interactive",
    name: "Crystal Ball Birthday (Personalize)",
    href: "https://www.americangreetings.com/ecards/birthday/crystal-ball-birthday-personalize/card-3560703",
    imageSrc: "https://ak.imgag.com/imgag/product/expressions/3560703/master_380x304.jpg",
    badges: [],
    ariaLabel: "Crystal Ball Birthday (Personalize)",
  },
];

const thirdTabProducts: Product[] = [
  {
    id: "3553376",
    model: "smashup",
    name: "You Go Together Anniversary (Personalize)",
    href: "https://www.americangreetings.com/ecards/anniversary/you-go-together-anniversary-personalize/card-3553376",
    imageSrc: "https://ak.imgag.com/imgag/product/expressions/3553376/img/master_380x304.jpg",
    badges: [],
    ariaLabel: "You Go Together Anniversary (Personalize)",
  },
  {
    id: "3562413",
    model: "creatacard",
    name: "Loving Anniversary Wishes",
    href: "https://www.americangreetings.com/ecards/anniversary/loving-anniversary-wishes/card-3562413",
    imageSrc: "https://ak.imgag.com/imgag/product/unifiedbuilder/3562413/master_380x304.png",
    badges: ["foil"],
    ariaLabel: "Loving Anniversary Wishes, Foil",
  },
  {
    id: "3519460",
    model: "smashup",
    name: "You Sexy Thing Anniversary Smashup",
    href: "https://www.americangreetings.com/ecards/anniversary/you-sexy-thing-anniversary-smashup/card-3519460",
    imageSrc: "https://ak.imgag.com/imgag/product/expressions/3519460/master_380x304.jpg",
    badges: [],
    ariaLabel: "You Sexy Thing Anniversary Smashup",
  },
  {
    id: "3545912",
    model: "ecard",
    name: "Warmest Anniversary Wishes",
    href: "https://www.americangreetings.com/ecards/anniversary/warmest-anniversary-wishes/card-3545912",
    imageSrc: "https://ak.imgag.com/imgag/product/flash/3545912/master_380x304.jpg",
    badges: [],
    ariaLabel: "Warmest Anniversary Wishes, Custom Song",
  },
  {
    id: "3510761",
    model: "ecard",
    name: "Every Day of My Life Anniversary Ecard",
    href: "https://www.americangreetings.com/ecards/anniversary/every-day-of-my-life-anniversary-ecard/card-3510761",
    imageSrc: "https://ak.imgag.com/imgag/product/flash/3510761/master_380x304.jpg",
    badges: [],
    ariaLabel: "Every Day of My Life Anniversary Ecard, Custom Song",
  },
  {
    id: "3554216",
    model: "creatacard",
    name: "Meant For Each Other",
    href: "https://www.americangreetings.com/ecards/anniversary/meant-for-each-other/card-3554216",
    imageSrc: "https://ak.imgag.com/imgag/product/unifiedbuilder/3554216/master_380x304.png",
    badges: [],
    ariaLabel: "Meant For Each Other",
  },
  {
    id: "3515654",
    model: "smashup",
    name: "Hamster Love Soul Song (Personalize Lyrics)",
    href: "https://www.americangreetings.com/ecards/love/hamster-love-soul-song-personalize-lyrics/card-3515654",
    imageSrc: "https://ak.imgag.com/imgag/product/expressions/3515654/master_380x304.jpg",
    badges: [],
    ariaLabel: "Hamster Love Soul Song (Personalize Lyrics), Custom Song",
  },
  {
    id: "3530028",
    model: "creatacard",
    name: "I Still Do",
    href: "https://www.americangreetings.com/ecards/anniversary/i-still-do/card-3530028",
    imageSrc: "https://ak.imgag.com/imgag/product/unifiedbuilder/3530028/master_380x304.png",
    badges: ["custom-song"],
    ariaLabel: "I Still Do, Custom Song",
  },
];

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="product-thumbs__container">
      <div
        className="product"
        data-id={product.id}
        data-product-model={product.model}
        data-cnstrc-item-id={product.id}
        data-cnstrc-item-name={product.name}
      >
        <a
          href={product.href}
          aria-label={product.ariaLabel}
          className="product__link"
          tabIndex={-1}
        ></a>
        <div className="product__image">
          <div className="product__overlay">
            {product.badges.map((badge) => (
              <span key={badge} className={`badge --${badge === "music-choice" ? "music" : badge}`}>
                <span className="badge__wrapper">
                  <span className="badge__icon"></span>
                  <span className="badge__text" aria-hidden="true" inert={true}>
                    {badge.replace("-", " ")}
                  </span>
                </span>
              </span>
            ))}
          </div>
          <div className="product__img">
            <Image
              src={product.imageSrc}
              style={{"--img-height": "360", "--img-width": "450"} as React.CSSProperties}
              width={450}
              height={360}
              alt=""
            />
          </div>
          <div className="product__favorites">
            <button
              type="button"
              data-cnstrc-btn="like"
              data-product-title={product.name}
              className="btn --mini --filled-white --icon-only add-to-favorites "
              data-product-id={product.id}
              aria-label={`Not\u00A0saved, ${product.name} to favorites.`}
              tabIndex={-1}
            >
              <span className="btn__icon add-to-favorites__icon">
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    className="add-to-favorites__fill"
                    fill="#D50032"
                    d="M13.066 1.618C10.342 1.618 9 4.302 9 4.302S7.658 1.618 4.934 1.618C2.722 1.618.97 3.469.946 5.679.9 10.264 4.584 13.526 8.622 16.267a.67.67 0 0 0 .756 0c4.038-2.741 7.721-6.003 7.676-10.588-.022-2.21-1.775-4.061-3.988-4.061Z"
                  ></path>
                  <path
                    className="add-to-favorites__outline"
                    fill="#D50032"
                    fillRule="evenodd"
                    d="M7.926 2.899A5.763 5.763 0 0 1 9 4.302s.356-.712 1.074-1.403c.676-.65 1.671-1.281 2.992-1.281 2.213 0 3.966 1.851 3.988 4.061.045 4.585-3.638 7.847-7.676 10.588a.67.67 0 0 1-.756 0C4.584 13.526.9 10.264.946 5.68c.023-2.21 1.776-4.061 3.988-4.061 1.32 0 2.316.63 2.992 1.28Zm-5.33 2.797C2.561 9.154 5.21 11.874 9 14.524c3.79-2.65 6.438-5.37 6.404-8.829-.014-1.367-1.09-2.427-2.338-2.427-.777 0-1.4.374-1.892.863a4.426 4.426 0 0 0-.679.876l-.024.042-.576 1.154a1 1 0 0 1-1.79 0L7.53 5.049a3.536 3.536 0 0 0-.152-.25 4.423 4.423 0 0 0-.551-.668c-.492-.489-1.115-.863-1.892-.863-1.246 0-2.324 1.06-2.338 2.428Z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
              <span className="btn__overlay">
                <div className="css-icon --loader">
                  <span className="glow"></span>
                </div>
              </span>
            </button>
          </div>
        </div>
        <div className="product__actions">
          <button
            type="button"
            className="btn --mini --filled-white dialog-trigger --inner-loader"
            aria-haspopup="dialog"
            aria-label={`Preview ${product.name}`}
            data-product-id={product.id}
            data-product-title={product.name}
            tabIndex={-1}
          >
            <span className="btn__text">Preview</span>
            <span className="btn__overlay">
              <div className="css-icon --loader">
                <span className="glow"></span>
              </div>
            </span>
          </button>
          <button
            type="button"
            data-cnstrc-btn="like"
            data-product-title={product.name}
            className="btn --mini --filled-white --icon-only add-to-favorites "
            data-product-id={product.id}
            aria-label={`Not\u00A0saved, ${product.name} to favorites.`}
            tabIndex={-1}
          >
            <span className="btn__icon add-to-favorites__icon">
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  className="add-to-favorites__fill"
                  fill="#D50032"
                  d="M13.066 1.618C10.342 1.618 9 4.302 9 4.302S7.658 1.618 4.934 1.618C2.722 1.618.97 3.469.946 5.679.9 10.264 4.584 13.526 8.622 16.267a.67.67 0 0 0 .756 0c4.038-2.741 7.721-6.003 7.676-10.588-.022-2.21-1.775-4.061-3.988-4.061Z"
                ></path>
                <path
                  className="add-to-favorites__outline"
                  fill="#D50032"
                  fillRule="evenodd"
                  d="M7.926 2.899A5.763 5.763 0 0 1 9 4.302s.356-.712 1.074-1.403c.676-.65 1.671-1.281 2.992-1.281 2.213 0 3.966 1.851 3.988 4.061.045 4.585-3.638 7.847-7.676 10.588a.67.67 0 0 1-.756 0C4.584 13.526.9 10.264.946 5.68c.023-2.21 1.776-4.061 3.988-4.061 1.32 0 2.316.63 2.992 1.28Zm-5.33 2.797C2.561 9.154 5.21 11.874 9 14.524c3.79-2.65 6.438-5.37 6.404-8.829-.014-1.367-1.09-2.427-2.338-2.427-.777 0-1.4.374-1.892.863a4.426 4.426 0 0 0-.679.876l-.024.042-.576 1.154a1 1 0 0 1-1.79 0L7.53 5.049a3.536 3.536 0 0 0-.152-.25 4.423 4.423 0 0 0-.551-.668c-.492-.489-1.115-.863-1.892-.863-1.246 0-2.324 1.06-2.338 2.428Z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <span className="btn__overlay">
              <div className="css-icon --loader">
                <span className="glow"></span>
              </div>
            </span>
          </button>
        </div>
        <div className="product__title" aria-hidden="true" inert={true}>
          {product.name}
        </div>
      </div>
    </div>
  );
};

export default function ProductTabs() {
  return (
    <section
      aria-label="Ecards - MEMBERS"
      className="tabbed-products --bg-grey --underline --align-center"
    >
      <div className="container">
        <div className="layout">
          <div className="layout__item">
            <div className="text-block --align-center">
              <h2>Welcome Back! You Have Unlimited Ecards to Send.</h2>
            </div>
          </div>
          <div className="layout__item">
            <div className="tabs" data-default="primary-tab" id="tab-instance">
              <div className="tabs__control --mb-space-large">
                <div className="tabs__tablist" role="tablist">
                  <button
                    type="button"
                    value="primary-tab"
                    role="tab"
                    className="tabs__tab --active"
                    aria-selected="true"
                    aria-controls="tab-instance-primary-tab"
                  >
                    New &amp; Popular
                  </button>
                  <button
                    type="button"
                    value="third-tab"
                    role="tab"
                    className="tabs__tab"
                    aria-selected="false"
                    aria-controls="tab-instance-third-tab"
                  >
                    Anniversary
                  </button>
                </div>
              </div>
              <div className="tabs__panels --offset --lazy-easing">
                <div className="tabs__wrapper">
                  {/* Primary Tab Panel */}
                  <div
                    role="tabpanel"
                    data-name="primary-tab"
                    className="tabs__panel --active"
                    aria-hidden="false"
                    id="tab-instance-primary-tab"
                  >
                    <div className="tabs__inner">
                      <div className="tabs__subtext text-block --align-center">
                        <p></p>
                      </div>
                      <div className="layout__item primary-tab-products">
                        <div
                          data-type="--product-thumbs"
                          className="carousel --product-thumbs --init"
                          id="carousel-instance-3"
                          style={{ "--slide-height": "217px" } as React.CSSProperties}
                        >
                          <div
                            className="carousel__overlay"
                            aria-hidden="true"
                            data-ignore-inert="true"
                          >
                            <button
                              type="button"
                              className="carousel__button --prev --disabled"
                              disabled={true}
                              aria-label="previous slide"
                              tabIndex={-1}
                              aria-controls="swiper-wrapper-5eff2416be7e4216"
                              aria-disabled="true"
                            >
                              <span className="css-icon --arrow --back"></span>
                            </button>
                          </div>
                          <div className="carousel__slider swiper swiper-initialized swiper-horizontal swiper-backface-hidden">
                            <ul
                              className="carousel__items swiper-wrapper"
                              id="swiper-wrapper-5eff2416be7e4216"
                              aria-live="polite"
                              style={{ transform: "translate3d(0px, 0px, 0px)" }}
                            >
                              {primaryTabProducts.map((product, index) => (
                                <li
                                  key={product.id}
                                  className={`carousel__item swiper-slide product-thumbs ${index === 0 ? "swiper-slide-active" : index === 1 ? "swiper-slide-next" : ""}`}
                                  aria-label={`${index + 1} / ${primaryTabProducts.length}`}
                                  data-index={index}
                                >
                                  <ProductCard product={product} />
                                </li>
                              ))}
                            </ul>
                            <span
                              className="swiper-notification"
                              aria-live="assertive"
                              aria-atomic="true"
                            ></span>
                          </div>
                          <div
                            className="carousel__overlay"
                            aria-hidden="true"
                            data-ignore-inert="true"
                          >
                            <button
                              type="button"
                              className="carousel__button --next"
                              aria-label="next slide"
                              tabIndex={-1}
                              aria-controls="swiper-wrapper-5eff2416be7e4216"
                              aria-disabled="false"
                            >
                              <span className="css-icon --arrow"></span>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="text-block --align-center --spacing-top">
                        <a href="/new/ecards" className="btn">
                          Browse all New
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Third Tab Panel */}
                  <div
                    role="tabpanel"
                    data-name="third-tab"
                    className="tabs__panel"
                    aria-hidden="true"
                    inert={true}
                    id="tab-instance-third-tab"
                  >
                    <div className="tabs__inner">
                      <div className="tabs__subtext text-block --align-center">
                        <p></p>
                      </div>
                      <div className="layout__item third-tab-products">
                        <div
                          data-type="--product-thumbs"
                          className="carousel --product-thumbs"
                          id="carousel-instance-4"
                        >
                          <div
                            className="carousel__overlay"
                            aria-hidden="true"
                            data-ignore-inert="true"
                          >
                            <button
                              type="button"
                              className="carousel__button --prev --disabled"
                              disabled={true}
                              aria-label="previous slide"
                              tabIndex={-1}
                            >
                              <span className="css-icon --arrow --back"></span>
                            </button>
                          </div>
                          <div className="carousel__slider swiper">
                            <ul className="carousel__items swiper-wrapper">
                              {thirdTabProducts.map((product) => (
                                <li key={product.id} className="carousel__item swiper-slide product-thumbs">
                                  <ProductCard product={product} />
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div
                            className="carousel__overlay"
                            aria-hidden="true"
                            data-ignore-inert="true"
                          >
                            <button
                              type="button"
                              className="carousel__button --next"
                              aria-label="next slide"
                              tabIndex={-1}
                            >
                              <span className="css-icon --arrow"></span>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="text-block --align-center --spacing-top">
                        <a href="/ecards/anniversary" className="btn" tabIndex={-1}>
                          Browse all Anniversary
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
