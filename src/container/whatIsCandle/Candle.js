import { Owner } from '../../assets'
import classes from './Canle.module.css'

const Candle = () => {
  return (
    <div className={`${classes['candle']} flex`}>
        <figure className={`figure ${classes['candle__photo']}`}>
            <img className='image' src={Owner} alt="The CEO of Candles" />
        </figure>
        <div className={classes["candle__content"]}>
            <h2 contentEditable>Your name</h2>
            <p contentEditable spellCheck={false}>This is supposed to be about the owner of the product. It's a message from the the owner to the customer, precise and empathatic. I'm going on blah balh blah balha blah bljha blah blag and a whole bunch of these words.</p>
        </div>
    </div>
  )
}

export default Candle