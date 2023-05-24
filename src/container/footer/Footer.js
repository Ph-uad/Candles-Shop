import React from 'react'
import classes from './Feature.module.css'

const Footer = () => {
  return (
    <footer className={ classes['footer'] }>
      <div className={ `${classes['footer__container']} container flex` }>
        <section className={ classes['footer__section-link'] }>
          <h3 className="heading__tertiary">
            Quick links
          </h3>
          <ul className={ `` }>
            <li className="nav-list_item"><a href="/" className="nav-link">Home</a></li>
            <li className="nav-list_item"><a href="/" className="nav-link">Catalog</a></li>
            <li className="nav-list_item"><a href="/" className="nav-link">About Us</a></li>
            <li className="nav-list_item"><a href="/" className="nav-link">Contact</a></li>
          </ul>
        </section>
        <section className="">
          <h3 className="heading__tertiary">
            About Us
          </h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore odit numquam dicta, aut rem similique! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, accusantium.</p>
        </section>
        <section className="">
          <h3 className="heading__tertiary">
            News Letter
          </h3>
          <form action="">
            <input type="text" />
            <br/>
            <button className='button' type="submit">Subscribe</button>
          </form>
        </section>
      </div>
    </footer>
  )
}

export default Footer