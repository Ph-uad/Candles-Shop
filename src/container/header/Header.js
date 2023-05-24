import { Hero1, Hero2, Hero3, Hero4 } from '../../assets';
import classes from './Header.module.css';


const Header = () => (
  <header className={ classes['header'] }>
    <div className={`flex ${classes['header__container']} `}>
      <figure className={ classes['header__figure'] }>
        <img src={Hero1} alt="candle exhibitions" />
      </figure>
      <figure className={ classes['header__figure'] }>
        <img src={Hero2} alt="candle exhibitions" />
      </figure>
      <figure className={ classes['header__figure'] }>
        <img src={Hero3} alt="candle exhibitions" />
      </figure>
      <figure className={ classes['header__figure'] }>
        <img src={Hero4} alt="candle exhibitions" />
      </figure>
    </div>
  </header>
)

export default Header