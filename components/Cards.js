const Cards = () => {

    return (
        <div className="pt-28 mx-auto">
            <h3 className="text-3xl font-bold text-center pb-10">What we offer</h3>
            <div className="mt-6 flex md:flex-row flex-col mx-auto justify-center items-center gap-8 w-full">
                <div className="bg-[#FBED04] p-4 rounded-md w-3/5 md:w-[18rem] h-[20'rem] border cursor-pointer hover:shadow-xl duration-500 ease-out">
                    <p className="font-bold text-center mb-2 text-lg">A Digital Marketing Plan</p>
                    <p className="text-justify text-base">A Digital Marketing plan is a proposal that reflects the objectives, mission, vision, principles,
                     and values of the company/institution/organization. 
                    The strategy is outlined in close coordination with your communication and marketing team or with the person responsible for that area.</p>
                </div>

                <div className="bg-[#FBED04] p-4 rounded-md w-3/5 md:w-[18rem] h-[20rem] border cursor-pointer hover:shadow-xl duration-500 ease-out">
                    <p className="font-bold text-center mb-2 text-lg">Content Producer</p>
                    <p className="text-base text-justify">A content producer on stand-by will implement the agreed content according to guidelines and a pre-defined action schedule.
                     The above contact person will be the focal point with the company/institution/organization.</p>
                </div>

                <div className="bg-[#FBED04] p-4 rounded-md w-3/5 md:w-[18rem] h-[20rem] border cursor-pointer hover:shadow-xl duration-500 ease-out">
                    <p className="font-bold text-center mb-2 text-lg">A Designer</p>
                    <p className="text-base text-justify">A designer is available, responsible for the conception and design of the graphic arts that accompanies various publications.</p>
                </div>
            </div>
        </div>
    );
}

export default Cards;