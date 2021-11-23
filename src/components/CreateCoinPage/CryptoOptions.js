import {useEffect, useState} from "react";
import {cryptoOptions} from "../../data/CreateCoinAvailableCryptos";


export const CryptoOptions = ({selectedCrypto, setSelectedCrypto, routeId }) => {
    const [selectedPage, setSelectedPage] = useState( 1)
    const NEXT_PAGE = "nextPage"
    const PREVIOUS_PAGE = "prevousPage"


    useEffect(() => {
        cryptoOptions.forEach((crypto, index) => {
            if (crypto.name === routeId) {
                setSelectedPage(Math.ceil((index + 1) / 10))
            }
        })
    }, [routeId])

    function setPage(action) {
        if (action === NEXT_PAGE) {
            if (selectedPage < Math.ceil(cryptoOptions.length / 10)) {
                setSelectedPage(selectedPage + 1)
            }
        } else if (action === PREVIOUS_PAGE) {
            if (selectedPage > 1) {
                setSelectedPage(selectedPage - 1)
            }
        }

    }

    return (
        <div className="grid grid-cols-1 xl:grid-cols-2 justify-items-center gap-y-4 py-4 px-1 text-sm">
            <div className="xl:col-start-2 xl:col-end-3 justify-self-end w-11/12 flex justify-end">
                <button
                    className="m-1 px-2 border-2 border-gray-200 rounded text-gray-100 hover:bg-gray-100 hover:text-gray-900 duration-300"
                    onClick={() => setPage(PREVIOUS_PAGE)}>{"<"}</button>
                <button
                    className="m-1 px-2 border-2 border-gray-200 rounded text-gray-100 hover:bg-gray-100 hover:text-gray-900 duration-300"
                    onClick={() => setPage(NEXT_PAGE)}>>
                </button>
            </div>

            {cryptoOptions.map((crypto, index) => {
                let minIndex = 0
                if (selectedPage > 1) {
                    for (let i = 1; i < selectedPage; i++) {
                        minIndex += 10
                    }
                }
                if (index >= minIndex && index < Math.ceil(selectedPage * 10)) {
                    return (
                        <button
                            key={crypto?.name}
                            className="w-11/12
                    justify-center sm:justify-start
                    flex items-center
                    border-2 border-gray-200
                    py-1 pl-2 md:pl-4 md:py-2 md:mx-4
                    break-words
                    min-w-min
                    break-all
                    text-gray-100
                    hover:bg-gray-100
                    hover:text-gray-900
                    duration-300
                    rounded
                    " style={{...(selectedCrypto?.name===crypto?.name?{backgroundColor: "#F3F4F6", color: "black"}:{})}} onClick={() => setSelectedCrypto(crypto)}>
                            <img src={crypto?.icon} style={{height: "20px", objectFit: "cover"}} alt={"Icon"} className="mr-1"/>
                            <p>{crypto?.name}</p>
                        </button>
                    )

                }
                return null
            })
            }

        </div>)
}