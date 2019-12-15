import React from 'react'
import Link from 'gatsby-link'

import "./site-footer.scss"

const SiteFooter = () => (
  <div className="site-footer">
    <div className="site-footer__inner">
      <h2 className="site-footer__heading">
          Site footer
      </h2>
      <div className="contact-footer">
        <form action="">
          <div className="form-group">
            <label htmlFor="">Name</label>
            <input type="text"/>
          </div>
          <div className="form-group">
            <label htmlFor="email">email address</label>
            <input type="email" name="" id="email"/>
          </div>
          <div className="form-group">
            <p>Select a maintenance drone:</p>

            <div>
              <input type="radio" id="huey" name="drone" value="huey" />
              <label for="huey">Huey</label>
            </div>

            <div>
              <input type="radio" id="dewey" name="drone" value="dewey" />
              <label for="dewey">Dewey</label>
            </div>

            <div>
              <input type="radio" id="louie" name="drone" value="louie" />
              <label for="louie">Louie</label>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="discription">Discription</label>
            <input type="text" name="" id=""/>
          </div>
          <div className="form-group">
            <input type="submit" value="Send"/>
          </div>
        </form>
      </div>
    </div>
  </div>
)

export default SiteFooter;
