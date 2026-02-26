"use client";

import React, { useState } from "react";
import Image from "next/image";
import { NAVIGATION_LINKS } from "@/lib/data/navigation";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpandedItem, setMobileExpandedItem] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleMobileItem = (index: number) => {
    if (mobileExpandedItem === index) {
      setMobileExpandedItem(null);
    } else {
      setMobileExpandedItem(index);
    }
  };

  return (
    <header className="header-wrapper --sticky-header">
      <div className="skip-links">
        <a className="menu-item__link" href="#main-content">
          <span>Skip to content</span>
        </a>
      </div>
      
      {/* Desktop Header */}
      <div className="header hidden-sm" data-cy="header">
        <div className="header__top">
          <div className="container">
            <div className="header__bar">
              <nav id="member-menu" className="menu --secondary --has-separators --white --right" aria-label="members menu">
                <ul className="menu__list">
                  <li className="menu-item">
                    <a className="menu-item__link" href="https://www.americangreetings.com/join">
                      <span>Join Today</span>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a className="menu-item__link" href="https://www.americangreetings.com/member-benefits">
                      <span>Member Benefits</span>
                    </a>
                  </li>
                  <li className="menu-item">
                    <button className="menu-item__link dialog-trigger" aria-label="Reminders Dialog" type="button" aria-haspopup="dialog" aria-controls="reminders-dialog">
                      <span>Reminders</span>
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className={`header__main ${hoveredIndex !== null ? "--menu-entered" : ""}`}>
          <div className="container --width-narrow">
            <div className="header__bar">
              <div className="header__logo">
                <a className="header-logo" aria-label="American Greetings Logo, homepage" aria-current="page" href="https://www.americangreetings.com">
                  <svg xmlns="http://www.w3.org/2000/svg" width="46" height="52" fill="none" viewBox="0 0 46 52">
                    <path fill="#D50032" d="M26.193 25.022c-2.052 0-4.282-.377-6.297-1.064-4.998-1.967-6.174-4.81-5.779-8.246.79-3.925 4.236-5.694 8.537-5.789.734 0 1.506.057 2.269.18 3.124.489 4.348 2.296 4.461 3.83.141 2.015-1.402 3.803-3.934 4.575-.725.217-4.236.65-5.422-2.014-.79-1.798.509-3.022.509-3.022s-2.438.31-2.852 2.466c-.264 1.393.131 2.457 1.195 3.493.988.96 2.852 1.863 5.28 1.863 1.807 0 4.735-.555 6.975-4.31.291 2.447.047 5.346-.546 7.05-.038.122-.085.235-.132.348-1.148.367-2.805.63-4.273.63l.01.01ZM3.378 23.149c1.666 2.07 7.652 6.005 8.405 6.551-.085-.546-.235-1.29-.33-1.845-.828-4.876-1.769-10.41.283-14.58C13.543 9.593 17.6 7.39 22.57 7.39h.31c3.718.085 6.692 1.403 8.622 3.813 2.795 3.501 2.513 7.935 1.76 11.898 2.598-1.968 3.896-4.67 3.68-7.832C35.116.802 17.383.02 17.383.02 7.313-.355 1.128 4.427.103 12.343c-.405 3.276.329 7.578 3.284 10.807h-.01Zm35.531-12.011c1.487 3.859.744 8.98-1.948 11.832-.395.499-4.763 4.556-10.42 4.716-.922.028-2.004.038-2.993-.085-4.367-.555-8.028-2.363-10.419-5.12.386 3.21 1.092 6.41 1.807 9.403 4.057 2.918 6.429 6.43 7.812 10.185 3.069-8.142 8.293-10.27 13.535-14.148 1.167-.866 2.428-1.76 3.586-2.664 2.127-1.666 4.208-4.029 4.942-6.683 1.176-4.245.922-8.255-1.497-11.974-2.927-4.499-8.292-6.043-13.3-5.46-.235.03-.47.057-.705.095 5.308 2.41 7.774 5.516 9.59 9.903h.01Zm5.506 13.253c-.79.97-1.93 1.996-3.134 2.88-1.082.791-2.155 1.544-3.2 2.279-2.523 1.77-4.913 3.436-7.229 5.563-4.226 3.906-6.645 9.46-6.55 15.146V52s10.626.056 17.092-10.533c3.35-5.516 3.19-11.014 3.012-17.076h.01ZM4.103 41.467C10.578 52.057 21.195 52 21.195 52v-1.741c.094-5.686-2.325-11.24-6.55-15.146-2.307-2.127-4.697-3.803-7.23-5.563a137.844 137.844 0 0 1-3.2-2.278c-1.204-.876-2.343-1.911-3.134-2.88-.178 6.06-.339 11.558 3.012 17.074h.01Z"></path>
                  </svg>
                </a>
              </div>
              <div className="header__menu">
                <nav id="primary-menu" className="menu --primary" aria-label="primary">
                  <ul className="menu__list" onMouseLeave={() => setHoveredIndex(null)}>
                    {NAVIGATION_LINKS.map((item, index) => (
                      <li 
                        key={index} 
                        className={`menu-item ${item.submenu ? "--has-submenu" : ""} ${hoveredIndex === index ? "--active" : ""}`} 
                        id={`submenu-item-${index}`}
                        onMouseEnter={() => setHoveredIndex(index)}
                      >
                        <span role="presentation" className="menu-item__inner">
                          {item.href ? (
                              <a className="menu-item__title" href={item.href}>{item.label}</a>
                          ) : (
                              <span aria-hidden="true" data-ignore-handle="" className="menu-item__title">{item.label}</span>
                          )}
                          {item.submenu && (
                            <>
                              <a className="menu-item__overlay" aria-label={item.label} href={item.href || "#"}></a>
                              <button aria-label={`${item.label} menu`} aria-expanded={hoveredIndex === index ? "true" : "false"} data-ignore-inert="true" className="menu-item__trigger"></button>
                            </>
                          )}
                        </span>
                        {item.submenu && (
                          <div role="menu" id={`${item.label.toLowerCase()}-submenu`} style={{"--max-rows": "8", backgroundColor: "white"} as React.CSSProperties} className="menu-item__submenu" aria-hidden={hoveredIndex !== index} aria-label={item.label}>
                            <div role="presentation" className="container --persistent">
                              <div role="presentation" className="submenu">
                                {item.submenu.columns.map((column, colIndex) => (
                                  <div key={colIndex} role="presentation" className={`submenu__column ${column.items.length > 0 ? "--column-divider-right" : ""} ${column.image ? "--image default" : ""} ${column.title === 'Collections' || column.title === 'More Digital Gifts' ? 'default' : ''}`}>
                                    {column.title && (
                                      <div aria-hidden="true" data-ignore-handle="" className="submenu__title">
                                        {column.title}
                                      </div>
                                    )}
                                    {column.items.length > 0 && (
                                      <ul role="group" className="submenu__menu" aria-label={`${column.title || item.label} ecards, ${colIndex + 1} of ${item.submenu?.columns.length} columns`}>
                                        {column.items.map((subItem, subIndex) => (
                                          <li key={subIndex} role="presentation">
                                            <a role="menuitem" href={subItem.href} className={subItem.isHighlighted ? "--highlighted" : ""} tabIndex={-1}>
                                              <span>{subItem.label}</span>
                                            </a>
                                          </li>
                                        ))}
                                      </ul>
                                    )}
                                    {column.image && (
                                      <div role="group" className="submenu__image-wrapper" aria-label={`Highlighted product, ${colIndex + 1} of ${item.submenu?.columns.length} columns`}>
                                        <a role="menuitem" href={column.image.href} className="submenu-media" aria-label={column.image.caption} tabIndex={-1}>
                                          <figure className="submenu-media__figure">
                                            <div className="submenu-media__image lazy-load-active">
                                              <Image 
                                                src={column.image.src} 
                                                className="lazy-load-active__img" 
                                                style={{"--img-width": `${column.image.width}`, "--img-height": `${column.image.height}`} as React.CSSProperties} 
                                                width={column.image.width} 
                                                height={column.image.height} 
                                                alt={column.image.alt} 
                                              />
                                              <span className="lazy-load-active__loader"></span>
                                            </div>
                                            <figcaption className="submenu-media__caption">
                                              {column.image.caption}
                                            </figcaption>
                                          </figure>
                                        </a>
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              <div className="header__secondary">
                <button type="button" className="dialog-trigger menu-button --search" aria-controls="search-dialog" aria-haspopup="dialog" aria-label="Search ecards">
                  <span className="menu-button__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path d="m18.872 18.106-2.684-2.675a6.25 6.25 0 0 0 1.334-3.867 6.314 6.314 0 1 0-6.314 6.314 6.25 6.25 0 0 0 3.867-1.334l2.676 2.683a.79.79 0 0 0 1.293-.257.79.79 0 0 0-.172-.864ZM6.473 11.564a4.735 4.735 0 1 1 9.47 0 4.735 4.735 0 0 1-9.47 0Z"></path>
                    </svg>
                  </span>
                </button>
                <button type="button" className="dialog-trigger menu-button --myaccount" aria-controls="myaccount-dialog" aria-label="My Account" aria-haspopup="dialog">
                  <span className="menu-button__text hidden-lg">My Account</span>
                  <span className="menu-button__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Zm3-15a3 3 0 1 1-6 0 3 3 0 1 1 6 0Zm-9 7.5c0-1.995 3.998-3 6-3s6 1.005 6 3V18H6v-1.5Z" clipRule="evenodd"></path>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

        {/* Mobile Header logic here - simplified for brevity in this step, expanding next */}
        <div className="header-mobile visible-sm" data-cy="header-mobile">
            <div className="header-mobile__bar">
                <div className="header-mobile__wrapper">
                    <div className="header-mobile__main">
                        <button type="button" className={`mobile-menu-button --mobile-menu ${mobileMenuOpen ? "is-active" : ""}`} aria-label="main menu" aria-expanded={mobileMenuOpen} onClick={toggleMobileMenu}>
                            <span className="mobile-menu-button__icon morphing-trigger">
                                <div><span></span><span></span><span></span></div>
                            </span>
                        </button>
                         <button type="button" className="dialog-trigger mobile-menu-button --search" aria-controls="search-dialog" aria-haspopup="dialog" aria-label="Search ecards">
                            <span className="mobile-menu-button__icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.767 22.534a7.767 7.767 0 1 0 0-15.534 7.767 7.767 0 0 0 0 15.534ZM25 25l-4.748-4.748"></path>
                                </svg>
                            </span>
                        </button>
                    </div>
                     <div className="header-mobile__logo">
                        <a className="header-logo" aria-label="American Greetings Logo, homepage" aria-current="page" href="https://www.americangreetings.com">
                        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="52" fill="none" viewBox="0 0 46 52">
                        <path fill="#D50032" d="M26.193 25.022c-2.052 0-4.282-.377-6.297-1.064-4.998-1.967-6.174-4.81-5.779-8.246.79-3.925 4.236-5.694 8.537-5.789.734 0 1.506.057 2.269.18 3.124.489 4.348 2.296 4.461 3.83.141 2.015-1.402 3.803-3.934 4.575-.725.217-4.236.65-5.422-2.014-.79-1.798.509-3.022.509-3.022s-2.438.31-2.852 2.466c-.264 1.393.131 2.457 1.195 3.493.988.96 2.852 1.863 5.28 1.863 1.807 0 4.735-.555 6.975-4.31.291 2.447.047 5.346-.546 7.05-.038.122-.085.235-.132.348-1.148.367-2.805.63-4.273.63l.01.01ZM3.378 23.149c1.666 2.07 7.652 6.005 8.405 6.551-.085-.546-.235-1.29-.33-1.845-.828-4.876-1.769-10.41.283-14.58C13.543 9.593 17.6 7.39 22.57 7.39h.31c3.718.085 6.692 1.403 8.622 3.813 2.795 3.501 2.513 7.935 1.76 11.898 2.598-1.968 3.896-4.67 3.68-7.832C35.116.802 17.383.02 17.383.02 7.313-.355 1.128 4.427.103 12.343c-.405 3.276.329 7.578 3.284 10.807h-.01Zm35.531-12.011c1.487 3.859.744 8.98-1.948 11.832-.395.499-4.763 4.556-10.42 4.716-.922.028-2.004.038-2.993-.085-4.367-.555-8.028-2.363-10.419-5.12.386 3.21 1.092 6.41 1.807 9.403 4.057 2.918 6.429 6.43 7.812 10.185 3.069-8.142 8.293-10.27 13.535-14.148 1.167-.866 2.428-1.76 3.586-2.664 2.127-1.666 4.208-4.029 4.942-6.683 1.176-4.245.922-8.255-1.497-11.974-2.927-4.499-8.292-6.043-13.3-5.46-.235.03-.47.057-.705.095 5.308 2.41 7.774 5.516 9.59 9.903h.01Zm5.506 13.253c-.79.97-1.93 1.996-3.134 2.88-1.082.791-2.155 1.544-3.2 2.279-2.523 1.77-4.913 3.436-7.229 5.563-4.226 3.906-6.645 9.46-6.55 15.146V52s10.626.056 17.092-10.533c3.35-5.516 3.19-11.014 3.012-17.076h.01ZM4.103 41.467C10.578 52.057 21.195 52 21.195 52v-1.741c.094-5.686-2.325-11.24-6.55-15.146-2.307-2.127-4.697-3.803-7.23-5.563a137.844 137.844 0 0 1-3.2-2.278c-1.204-.876-2.343-1.911-3.134-2.88-.178 6.06-.339 11.558 3.012 17.074h.01Z"></path>
                        </svg>
                        </a>
                    </div>
                    <div className="header-mobile__member">
                         <a aria-label="No favorites items" href="https://www.americangreetings.com/myaccount/favorites" className="account-favorites mobile-menu-button --favorites">
                            <span className="mobile-menu-button__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.795 8C17.583 8 16 11.273 16 11.273S14.417 8 11.205 8c-2.61 0-4.678 2.257-4.704 4.95-.055 5.591 4.29 9.567 9.054 12.908a.774.774 0 0 0 .89 0c4.763-3.34 9.108-7.317 9.055-12.908C25.473 10.258 23.405 8 20.794 8Z"></path>
                            </svg>
                            <span aria-hidden="true" className="account-favorites__counter mobile-menu-button__counter" inert={true}>0</span>
                            </span>
                        </a>
                         <button aria-label="My account" type="button" className="dialog-trigger mobile-menu-button --account" aria-controls="myaccount-dialog" aria-haspopup="dialog">
                            <span className="mobile-menu-button__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32">
                                <path fill="currentColor" fillRule="evenodd" d="M16 30c7.732 0 14-6.268 14-14S23.732 2 16 2 2 8.268 2 16s6.268 14 14 14Zm3.5-17.5c0 1.934-1.566 3.5-3.5 3.5a3.499 3.499 0 0 1-3.5-3.5c0-1.934 1.566-3.5 3.5-3.5s3.5 1.566 3.5 3.5ZM9 21.25c0-2.328 4.664-3.5 7-3.5 2.336 0 7 1.172 7 3.5V23H9v-1.75Z" clipRule="evenodd"></path>
                            </svg>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
             <div id="mobile-menu" aria-hidden={!mobileMenuOpen} className="mobile-menu" style={{ display: mobileMenuOpen ? "block" : "none" }}>
                <div className="mobile-menu__holder">
                    <div className="mobile-menu__wrapper">
                        <div className="mobile-menu__inner">
                            <div className="mobile-menu__backdrop" onClick={toggleMobileMenu}></div>
                            <div className="mobile-menu__content">
                                <nav className="mobile-menu__nav" aria-label="main mobile">
                                    <ul className="mobile-menu__list">
                                        <li className="mobile-menu-item">
                                            <button type="button" aria-expanded="false" aria-controls="#reminders-dialog" className="dialog-trigger mobile-menu-item__link" tabIndex={-1}> Reminders </button>
                                        </li>
                                        {NAVIGATION_LINKS.map((item, index) => (
                                          <li key={index} className={`mobile-menu-item ${item.submenu ? "--has-dropdown" : ""} ${mobileExpandedItem === index ? "is-open" : ""}`} id={`mobile-dropdown-item-${index}`}>
                                            {item.href && !item.submenu ? (
                                                 <a className="mobile-menu-item__link" href={item.href} tabIndex={-1}>{item.label}</a>
                                            ) : (
                                                <button aria-expanded={mobileExpandedItem === index} className="mobile-menu-item__link" tabIndex={-1} onClick={() => toggleMobileItem(index)}>
                                                    {item.label}
                                                    <span className="mobile-menu-item__arrow"></span>
                                                </button>
                                            )}
                                            
                                            {item.submenu && (
                                              <nav className="mobile-menu-item__dropdown mobile-dropdown" aria-label={item.label} aria-hidden={mobileExpandedItem !== index} data-last-height="0" style={{"--dropdown-height": mobileExpandedItem === index ? "auto" : "0px", display: mobileExpandedItem === index ? "block" : "none"} as React.CSSProperties}>
                                                <ul className="mobile-dropdown__list">
                                                  {item.submenu.columns.map((column, colIndex) => (
                                                      <React.Fragment key={colIndex}>
                                                         {column.items.map((subItem, subIndex) => (
                                                            <li key={subIndex} className="mobile-dropdown__item">
                                                              <a className="mobile-dropdown__link" href={subItem.href} tabIndex={-1}>{subItem.label}</a>
                                                            </li>
                                                          ))}
                                                      </React.Fragment>
                                                  ))}
                                                </ul>
                                              </nav>
                                            )}
                                          </li>
                                        ))}
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
        </div>
    </header>
  );
}
