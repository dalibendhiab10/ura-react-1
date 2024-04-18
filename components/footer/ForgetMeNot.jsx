
const Forget = () => {
    return (
        <>
        
            <div className="flex flex-col footer-left g-y-logo pt-[4%] pr-[7.4%]">
                <img src="assets/logo-black.svg" className="adress-logo" alt="logo" />
                <div className="flex flex-col gap-y-4">
                    <p className="text-main-color footer-title">Address</p>
                    <p className="adress-content">223229, Minsk region, Chervensky district,
                        <br />Smilovichsky s/s, ag. Zapolye, st.
                        <br />Sadovaya 10, room 1,
                    </p>
                </div>

            </div>
            <div className="footer-left flex flex-col gap-y-4 m-l-8rem pt-[4%] forgot-tab">
                <p className="footer-title text-main-color">Forget-Me-Not</p>
                <div className="flex flex-col g-y-22">
                    <a className="adress-content" href=""> Products</a>
                    <a className="adress-content" href="">Raw Materials</a>
                    <a className="adress-content" href="">Our Process</a>
                    <a className="adress-content" href="">Company</a>
                    <a className="adress-content" href="">Contacts</a>
                </div>

            </div>

        </>
    )
}
export default Forget;