import classes from './Product.module.css'

const Product = ({ img, price, name, cta }) => {
    return (
        <div className={ classes['product'] }>
            <figure className="fugure">
                <img src={ img } alt="" />
                <figcaption className="label--item text-center">{ name }</figcaption>
                <figcaption className="label--price text-center">${ price }</figcaption>
            </figure>
            { cta &&
                <button>
                    Buy Now
                </button>
            }
        </div>
    )
}

export default Product