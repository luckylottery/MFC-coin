import {CryptoOptions} from "../components/CreateCoinPage/CryptoOptions";
import {CreateCoinForm} from "../components/CreateCoinPage/CreateCoinForm";
import {useEffect, useState} from "react";
import {cryptoOptions} from "../data/CreateCoinAvailableCryptos";

export const CreateCoinPage = ({selectedCrypto: selectedCryptoFromProps, match}) => {
    const [selectedCrypto, setSelectedCrypto] = useState(selectedCryptoFromProps ? selectedCryptoFromProps : cryptoOptions.filter((crypto) => crypto?.default)[0])
    const [routeId, setRouteId] = useState(null)
    useEffect(() => {
        if (match?.params?.crypto) {
            setRouteId(match.params.crypto)
            const defaultCrypto = cryptoOptions.filter((crypto) =>
                crypto.name === match.params.crypto
            )
            if (defaultCrypto[0]) {
                setSelectedCrypto(defaultCrypto[0])
            }

        }
    }, [match.params.crypto])

    return (
        <div className="grid grid-cols-6 py-6 mb-5" style={{minHeight: 'calc(100vh - 64px - 234px)'}}>
            <div className="grid grid-cols-6 col-start-2 col-end-6 grid-rows-formContainer sm:grid-rows-1">
                <div className=" bg-purple-900 col-start-1 col-end-7 sm:col-start-1 sm:col-end-3 sm:rounded-l-md">
                    <CryptoOptions selectedCrypto={selectedCrypto} setSelectedCrypto={setSelectedCrypto}
                                   routeId={routeId}/>
                </div>
                <div className="bg-gray-200 col-start-1 col-end-7 sm:col-start-3 sm:col-end-7 sm:rounded-r-md py-4">
                    <CreateCoinForm selectedCrypto={selectedCrypto}/>
                </div>
            </div>
        </div>)
}