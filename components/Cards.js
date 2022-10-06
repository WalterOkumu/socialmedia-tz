const Cards = () => {

    return (
        <div className="pt-40 mx-auto">
            <h3 className="text-3xl font-bold text-center pb-10"> What we offer </h3>
            <div className="mt-8 flex flex-wrap md:flex-nowrap md:flex-row mx-auto justify-center items-center gap-16 md:w-3/4 w-1/2">
                <div className="bg-[#FBED04] p-4 rounded-md w-[16rem] border cursor-pointer hover:shadow-xl duration-500 ease-out">
                    <p className="font-bold text-center mb-2 text-[1.3rem]">A Digital Marketing Plan</p>
                    <p className="text-justify">A Digital Marketing plan is a proposal that reflects the objectives, mission, vision, principles,
                     and values of the company/institution/organization. 
                    The strategy is outlined in close coordination with your communication and marketing team or with the person responsible for that area.</p>
                </div>

                <div className="bg-[#FBED04] p-4 rounded-md w-[16rem] border cursor-pointer hover:shadow-xl duration-500 ease-out">
                    <p className="font-bold text-center mb-2 text-[1.3rem]">Content Producer</p>
                    <p className="text-justify">A content producer on stand-by will implement the agreed content according to guidelines and a pre-defined action schedule.
                     The above contact person will be the focal point with the company/institution/organization.</p>
                </div>

                <div className="bg-[#FBED04] p-4 rounded-md w-[16rem] border cursor-pointer hover:shadow-xl duration-500 ease-out">
                    <p className="font-bold text-center mb-9 text-[1.3rem]">A Designer</p>
                    <p className="text-justify">A designer is available, responsible for the conception and design of the graphic arts that accompanies various publications.</p>
                </div>
            </div>
        </div>
    );
}

export default Cards;