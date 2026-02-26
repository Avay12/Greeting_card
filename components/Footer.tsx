"use client";

import React from "react";
import Image from "next/image";
import Newsletter from "@/components/Newsletter";

export default function Footer() {
  return (
    <div className="footer-wrapper">
      <footer className="footer">
        <Newsletter />
        <div className="container">
          <div className="footer__wrapper">
            <div className="footer__social">
              <h2 className="hidden-xs footer__header">Connect With Us!</h2>
              <a href="https://www.facebook.com/americangreetingsdigital"><Image src="https://images.contentstack.io/v3/assets/bltcbd0de6834ffd7a9/blt9d1b0588484e7294/63beb4f961259e109adc2c47/facebook.svg" alt="Facebook" width="33" height="33" /></a>
              <a href="https://www.instagram.com/americangreetingsdigital/"><Image src="https://images.contentstack.io/v3/assets/bltcbd0de6834ffd7a9/blt16fd81b6fe6f6982/63beb4f91930de5d35758ced/instagram.svg" alt="Instagram" width="33" height="33" /></a>
              <a href="https://www.tiktok.com/@americangreetingsdigital"><Image src="https://images.contentstack.io/v3/assets/bltcbd0de6834ffd7a9/bltd61d4eec9b278f06/65d6325ad12bfb8bbf693d01/TikTok-Social-Icon-Mono-White.svg" alt="TikTok" width="117" height="117" /></a>
              <a href="https://www.pinterest.com/amgreetings/"><Image src="https://images.contentstack.io/v3/assets/bltcbd0de6834ffd7a9/blt0f49d8cc141ff2e2/63beb736ade3a64c67747063/pinterest.svg" alt="Pinterest" width="33" height="33" /></a>
            </div>
          </div>
          <div className="footer__main">
            <div className="footer__column" aria-label="Download the App">
              <h2 className="footer__title hidden-sm">Download the App!</h2>
              <div className="app-icons">
                 <div className="app-store-icon">
                    <a href="https://apps.apple.com/us/app/american-greetings-ecards/id1612834659" target="_blank" aria-label="Download on the App Store">
                       {/* SVG omitted for brevity, keeping it clean */}
                       <Image src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" width={135} height={40}/>
                    </a>
                 </div>
                 <div className="google-play-icon">
                    <a href="https://play.google.com/store/apps/details?id=com.americangreetings.ecards" target="_blank" aria-label="Get it on Google Play">
                       <Image src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Get it on Google Play" width={135} height={40} />
                    </a>
                 </div>
              </div>
            </div>
            <div className="footer__column">
              <h2 className="footer__title">Top Categories</h2>
              <ul aria-label="Top Categories">
                <li><a href="/ecards">Ecards</a></li>
                <li><a href="/ecards/birthday">Birthday Ecards</a></li>
                <li><a href="/ecards/smashups">SmashUps™</a></li>
                <li><a href="/ecards/creatacard">Creatacard™</a></li>
                <li><a href="/digital-gifts">Digital Gifts</a></li>
                <li><a href="/gift-cards">Gift Cards</a></li>
                <li><a href="/occasion-holiday">Occasions</a></li>
                <li><a href="/ecards/holidays">Holidays</a></li>
              </ul>
            </div>
            <div className="footer__column">
              <h2 className="footer__title">Resources</h2>
              <ul aria-label="Resources">
                <li><a href="/privacy-policy#California_Residents">CA Residents - Privacy Notice</a></li>
                <li><a href="https://ak.imgag.com/imgag/product/siteassets/general/3491840/document.pdf">Code of Business Conduct & Ethics</a></li>
                <li><a href="/giveaways">Giveaways</a></li>
                <li><a href="/inspiration">Blog & Inspiration </a></li>
                <li><a href="/member-benefits">Member Benefits</a></li>
                <li><a href="/promotions">Promo Codes</a></li>
              </ul>
            </div>
            <div className="footer__column">
              <h2 className="footer__title">Our Company</h2>
              <ul aria-label="Our Company">
                <li><a href="https://corporate.americangreetings.com/">Corporate Home</a></li>
                <li><a href="https://corporate.americangreetings.com/about-us/">About Us</a></li>
                <li><a href="https://corporate.americangreetings.com/careers/">Careers</a></li>
                <li><a href="https://corporate.americangreetings.com/latest-news/">News</a></li>
              </ul>
            </div>
            <div className="footer__column">
              <h2 className="footer__title">Our Friends</h2>
              <ul aria-label="Our Friends">
                <li><a href="https://www.bluemountain.com/">Bluemountain.com</a></li>
              </ul>
            </div>
          </div>
          <div className="footer__site-links">
            <div className="footer__logo visible-xs">
              <a aria-label="American Greetings Logo, homepage" href="https://www.americangreetings.com">
                <svg xmlns="http://www.w3.org/2000/svg" width="46" height="52" fill="none" viewBox="0 0 46 52">
                  <path fill="#D50032" d="M26.193 25.022c-2.052 0-4.282-.377-6.297-1.064-4.998-1.967-6.174-4.81-5.779-8.246.79-3.925 4.236-5.694 8.537-5.789.734 0 1.506.057 2.269.18 3.124.489 4.348 2.296 4.461 3.83.141 2.015-1.402 3.803-3.934 4.575-.725.217-4.236.65-5.422-2.014-.79-1.798.509-3.022.509-3.022s-2.438.31-2.852 2.466c-.264 1.393.131 2.457 1.195 3.493.988.96 2.852 1.863 5.28 1.863 1.807 0 4.735-.555 6.975-4.31.291 2.447.047 5.346-.546 7.05-.038.122-.085.235-.132.348-1.148.367-2.805.63-4.273.63l.01.01ZM3.378 23.149c1.666 2.07 7.652 6.005 8.405 6.551-.085-.546-.235-1.29-.33-1.845-.828-4.876-1.769-10.41.283-14.58C13.543 9.593 17.6 7.39 22.57 7.39h.31c3.718.085 6.692 1.403 8.622 3.813 2.795 3.501 2.513 7.935 1.76 11.898 2.598-1.968 3.896-4.67 3.68-7.832C35.116.802 17.383.02 17.383.02 7.313-.355 1.128 4.427.103 12.343c-.405 3.276.329 7.578 3.284 10.807h-.01Zm35.531-12.011c1.487 3.859.744 8.98-1.948 11.832-.395.499-4.763 4.556-10.42 4.716-.922.028-2.004.038-2.993-.085-4.367-.555-8.028-2.363-10.419-5.12.386 3.21 1.092 6.41 1.807 9.403 4.057 2.918 6.429 6.43 7.812 10.185 3.069-8.142 8.293-10.27 13.535-14.148 1.167-.866 2.428-1.76 3.586-2.664 2.127-1.666 4.208-4.029 4.942-6.683 1.176-4.245.922-8.255-1.497-11.974-2.927-4.499-8.292-6.043-13.3-5.46-.235.03-.47.057-.705.095 5.308 2.41 7.774 5.516 9.59 9.903h.01Zm5.506 13.253c-.79.97-1.93 1.996-3.134 2.88-1.082.791-2.155 1.544-3.2 2.279-2.523 1.77-4.913 3.436-7.229 5.563-4.226 3.906-6.645 9.46-6.55 15.146V52s10.626.056 17.092-10.533c3.35-5.516 3.19-11.014 3.012-17.076h.01ZM4.103 41.467C10.578 52.057 21.195 52 21.195 52v-1.741c.094-5.686-2.325-11.24-6.55-15.146-2.307-2.127-4.697-3.803-7.23-5.563a137.844 137.844 0 0 1-3.2-2.278c-1.204-.876-2.343-1.911-3.134-2.88-.178 6.06-.339 11.558 3.012 17.074h.01Z"></path>
                </svg>
              </a>
            </div>
            <ul className="footer__bottom-link" aria-label="Site links">
              <li><a href="/contact-us">Contact Us</a></li>
              <li><a href="/faq">FAQs</a></li>
              <li><a href="/terms-of-service">Terms of Service</a></li>
              <li><a href="/policy-overview">Policies</a></li>
              <li><a href="/myaccount/data-rights">Do Not Sell or Share My Info</a></li>
              <li><a href="/email-protection">Email Protection</a></li>
            </ul>
          </div>
          <div className="footer__copyright">
            <p data-cy="footer-copyright">AmericanGreetings.com is a service of American Greetings Corporation. Copyright © 2026 AGC, LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
