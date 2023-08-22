
import "./CarouselProduct.css";
interface ProdProps{
    logolink:string,
    productlink: string,
    productDesc: string,
}
function CarouselProduct({logolink, productlink, productDesc}: ProdProps){
    return(
        <>
        <div id="containerDiv">
            <div id="logoTextDiv">
            <img src={logolink} id="logo"></img>
            <p id="productDesc">{productDesc}</p>
            </div>
            <img src={productlink} id="productImg"></img>
        </div>
        </>
    );

}
export default CarouselProduct;