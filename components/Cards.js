const Cards = () => {

    return (
        <div className="pt-28 mx-auto">
            <h3 className="text-3xl font-bold text-center pb-10">Tunachowahakikishia wateja wetu </h3>
            <div className="mt-6 flex md:flex-row flex-col mx-auto justify-center items-center gap-8 w-full">
                <div className="bg-[#FBED04] p-4 text-center leading-relaxed rounded-md w-3/5 md:w-[18rem] h-[20rem] border cursor-pointer hover:shadow-xl duration-500 ease-out">
                    <p className="font-bold mb-2 text-lg">Mpango wa Uuzaji wa Dijitali </p>
                    <p className="text-base">
                        Mpango wa Uuzaji wa Kidijitali ni pendekezo linaloakisi malengo, dhamira, maono, kanuni na maadili ya kampuni yako(taasisi/shirika). Mkakati umeainishwa kwa uratibu wa karibu na timu yako ya mawasiliano na uuzaji au na mtu anayehusika na eneo hilo.
                    </p>
                </div>

                <div className="bg-[#FBED04] p-4 text-center rounded-md w-3/5 md:w-[18rem] h-[20rem] border cursor-pointer hover:shadow-xl duration-500 ease-out">
                    <p className="font-bold text-center leading-relaxed mb-2 text-lg">Mtayarishaji wa Maudhui </p>
                    <p className="text-base">
                        Pata mtayarishaji wa maudhui aliyehitimu ambaye atatekeleza maudhui yaliyokubaliwa, kulingana na miongozo iliyoainishwa na ratiba ya hatua iliyobainishwa mapema. 
                    </p>
                </div>

                <div className="bg-[#FBED04] p-4 text-center rounded-md w-3/5 md:w-[18rem] h-[20rem] border cursor-pointer hover:shadow-xl duration-500 ease-out">
                    <p className="font-bold text-center leading-relaxed mb-2 text-lg">Mbunifu </p>
                    <p className="text-base">
                        Tutakuambatanisha na mbunifu anayehusika na utungaji na muundo wa sanaa za picha zinazoambatana na machapisho mbalimbali. 
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Cards;