import classes from './Navbar.module.css'


const Navbar = () => {


  return (
    <nav className={ classes['nav'] }>
      <header>
        <div className={`flex ${classes['nav__header']}`}>
          <form action="" className={ classes["nav__form"] }>
            <button className={ `button ${classes['nav-button']}` }>Search</button>
          </form>
          <h2 className="heading-secondary">Candles Logo</h2>
          <h4 className="cart-icon">Cart Icon</h4>
        </div>
      </header>

      <ul className={`${classes['nav__link-list']} flex`}>
        <li className="nav-list_item"><a href="/" className="nav-link">Home</a></li>
        <li className="nav-list_item"><a href="/" className="nav-link">Catalog</a></li>
        <li className="nav-list_item"><a href="/" className="nav-link">About Us</a></li>
        <li className="nav-list_item"><a href="/" className="nav-link">Contact</a></li>
      </ul>

    </nav>
  )
}
export default Navbar

export const Menu = () => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#wgpt3">What is GPT3?</a></p>
    <p><a href="#possibility">Open AI</a></p>
    <p><a href="#features">Case Studies</a></p>
    <p><a href="#blog">Library</a></p>
  </>
);