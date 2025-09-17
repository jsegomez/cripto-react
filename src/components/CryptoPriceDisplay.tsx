import { useCryptoStore } from "../store/store"
import Loding from "./Loding";

export default function CryptoPriceDisplay() {
    const { cryptoPrice, isPending } = useCryptoStore();


    
    if(isPending) return (
        <div className="loading-component">
            <Loding />
        </div>
    )
    return (
        <>
            {
                cryptoPrice ?
                (
                    <div className="result-wrapper">
                        <h2>Cotización</h2>
                        <div className="result">
                            <img
                                src={`https://cryptocompare.com/${cryptoPrice.IMAGEURL}`}
                                alt="currency-image"                                
                            />
                            
                            <div>
                                <p>El precio es de: <span>{ cryptoPrice?.PRICE }</span></p>
                                <p>Precio más alto del día: <span>{ cryptoPrice?.HIGHDAY }</span></p>
                                <p>Precio más bajo del día: <span>{ cryptoPrice?.LOWDAY }</span></p>
                                <p>Variación últimas 24hrs: <span>{ cryptoPrice?.CHANGEPCT24HOUR }</span></p>
                                <p>Última actualización: <span>{ cryptoPrice?.LASTUPDATE }</span></p>

                            </div>
                        </div>
                    </div>
                ) : ( <p>Selecciona una moneda</p> )
            }
        </>
    )
}
