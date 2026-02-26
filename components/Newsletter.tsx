"use client";

import React from "react";

export default function Newsletter() {
  return (
    <section className="footer-newsletter None" style={{"--newsletter-background-override": "#f6f4f4"} as React.CSSProperties}>
      <div className="container">
        <div className="footer-newsletter__content">
          <form className="form --all-required --fields-ready --init" id="newsletter-form" aria-labelledby="newsletter-form-title" data-action-label="Nesletter Subscription" action="javascript:void(0)" data-endpoint="https://www.americangreetings.com/newsletter/subscribe" method="POST" data-csrf-protect="" data-recaptcha-protect="">
            <div className="form__wrapper" aria-hidden="false">
              <input type="hidden" name="origpqsn" value="5030" />
              <input type="hidden" name="origpq" value="%7B%225030%22%3A%20%7B%22questionNumber%22%3A%205030%2C%20%22pageNumber%22%3A%204000%2C%20%22defaultChecked%22%3A%201%2C%20%22source%22%3A%20%22AG%22%2C%20%22startDate%22%3A%20%2205/03/2024%2008%3A29%22%2C%20%22endDate%22%3A%20%2201/01/2038%2000%3A00%22%2C%20%22questionHTML%22%3A%20%22Keep%20me%20up%20to%20date%20on%20the%20newest%20products%2C%20special%20offers%2C%20and%20more%20from%20American%20Greetings%21%22%2C%20%22modifiers%22%3A%20%5B%7B%22modifierNumber%22%3A%201%2C%20%22modifierDescription%22%3A%20%22Do%20not%20precheck%20if%20unchecked%20in%20past%22%7D%5D%2C%20%22permissions%22%3A%20%5B%7B%22sitegroup%22%3A%20561319985%2C%20%22customernumber%22%3A%20null%2C%20%22emailaddress%22%3A%20null%2C%20%22permissionNumber%22%3A%202000%2C%20%22isnewsletter%22%3A%201%2C%20%22prechecked%22%3A%200%2C%20%22result%22%3A%20null%2C%20%22attrCode%22%3A%20%22%22%2C%20%22description%22%3A%20%22AmericanGreetings.com%20Newsletter%22%2C%20%22source%22%3A%20%22AG%22%7D%5D%2C%20%22pqsn%22%3A%205030%7D%7D" />
              <input type="hidden" name="partner_id" value="" />
              <input type="hidden" name="pqsn" value="5030" />
              <div className="layout">
                <div className="layout__item">
                  <h2 id="newsletter-form-title">Sign up for American Greetings Emails</h2>
                  <div aria-live="polite" data-ignore-inert="true" aria-relevant="additions text" className="form__errors --empty" data-form="newsletter-form" data-last-height="16" style={{"--js-height": "16px"} as React.CSSProperties}>
                    <div>
                      <p className="sr-only"></p>
                      <div className="form__errors-list"></div>
                    </div>
                  </div>
                </div>
                <div className="layout__item">
                  <div className="layout --newsletter-fields-layout">
                    <div className="layout__item">
                      <div className="field">
                        <div className="field__header">
                          <label className="field__label" htmlFor="newsletter-form-newsletter_first_name">
                            First Name
                          </label>
                        </div>
                        <div className="field__wrapper">
                          <div className="field__input">
                            <input type="text" name="newsletter_first_name" autoComplete="given-name" maxLength={40} data-name="First Name" id="newsletter-form-newsletter_first_name" spellCheck={false} />
                          </div>
                        </div>
                        <span className="field__output --empty" aria-hidden="true" inert={true} data-last-height="0" style={{"--js-height": "0px"} as React.CSSProperties}><div className="error-wrapper"></div></span>
                      </div>
                    </div>
                    <div className="layout__item">
                      <div className="field">
                        <div className="field__header">
                          <label className="field__label" htmlFor="newsletter-form-newsletter_last_name">
                            Last Name
                          </label>
                        </div>
                        <div className="field__wrapper">
                          <div className="field__input">
                            <input type="text" name="newsletter_last_name" autoComplete="family-name" maxLength={40} data-name="Last Name" id="newsletter-form-newsletter_last_name" spellCheck={false} />
                          </div>
                        </div>
                        <span className="field__output --empty" aria-hidden="true" inert={true} data-last-height="0" style={{"--js-height": "0px"} as React.CSSProperties}><div className="error-wrapper"></div></span>
                      </div>
                    </div>
                    <div className="layout__item">
                      <div className="field --required">
                        <div className="field__header">
                          <label className="field__label" htmlFor="newsletter-form-newsletter_email">
                            Email <span className="field__label-required" aria-hidden="true" inert={true}>(required)</span>
                          </label>
                        </div>
                        <div className="field__wrapper">
                          <div className="field__input">
                            <input type="email" name="newsletter_email" autoComplete="email" maxLength={255} data-name="Email" required={true} id="newsletter-form-newsletter_email" spellCheck={false} aria-required="true" />
                          </div>
                        </div>
                        <span className="field__output --empty" aria-hidden="true" inert={true} data-last-height="0" style={{"--js-height": "0px"} as React.CSSProperties}><div className="error-wrapper"></div></span>
                      </div>
                    </div>
                    <div className="layout__item --submit">
                      <button type="submit" className="btn --submit" aria-label="Sign Up" aria-describedby="newsletter-form-legal">
                        <span className="btn__text">Sign Up</span>
                        <span className="btn__overlay">
                          <div className="css-icon --loader">
                            <span className="glow"></span>
                          </div>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="terms-text text-block --lighter --smaller">
                <p id="newsletter-form-legal">By clicking &quot;Sign up&quot;, you agree to receive emails from AmericanGreetings.com and accept our <a href="/terms-of-service" target="_self" style={{"textAlign": "center"} as React.CSSProperties}>Terms of Service</a>, <a href="/policy-overview" target="_self" style={{"textAlign": "center"} as React.CSSProperties}>Privacy Policy</a> and <a href="/cookies" target="_self" style={{"textAlign": "center"} as React.CSSProperties}>Cookies Policy</a>.</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
