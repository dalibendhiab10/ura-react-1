/* eslint-disable react/prop-types */
const Productcardmobile = ({ className = "", imgSrc = "/0018.png", altText = "product", productTitle = "Micropelette" }) => (
    <>
        <div className={`flex flex-col ${className}`}>
            <div className="product-card-menu-mobile flex flex-col items-center  round-[40px]" >
                <img src={imgSrc} alt={altText} className="image-product-card w-70 h-80" />
            </div>
            <div className="text-white bg-mobile-card product-detail-mobile">
                <p>{productTitle}</p>
            </div>
        </div>
    </>
)
export default Productcardmobile;