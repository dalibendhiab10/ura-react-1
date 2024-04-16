/* eslint-disable react/prop-types */
const ProductCard = ({classProd,titleProd}) => {
    return (
        <div className={`product-card ${classProd}`}>
            <img src="" />
            <h3>asdasdasdasd</h3>
            <div className="product-card-glass">
                <p className="product-card-glass-text">{titleProd}</p>
            </div>
        </div>
    );
}
export default ProductCard;