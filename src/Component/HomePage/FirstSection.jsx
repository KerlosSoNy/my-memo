
export default function FirstSection(){
    const today = new Date()
    const month = today.getMonth()+1;
    const year = today.getFullYear();
    const thisDay = today.getDate();
    const currentDate = thisDay + "/" + month +"/" +year
    return(
        <div className=" overflow-hidden">
            <img src="https://media.king5.com/assets/KING/images/c691a165-e0e1-4d81-a4be-ebf2c6ac51ff/c691a165-e0e1-4d81-a4be-ebf2c6ac51ff_1920x1080.jpg" alt="" className="lg:h-[47rem] md:h-[38rem] h-[30rem] w-[100%] absolute z-0" />
    
            <div className="relative lg:mt-48 md:mt-28 mt-32 lg:ms-24 md:ms-24 ms-4 me-4 lg:bg-transparent md:bg-transparent bg-black/20 p-2 rounded-3xl lg:text-start md:text-start text-center">
                <p className="lg:text-6xl md:text-3xl text-3xl   font-semibold mb-3">Find your doctor and</p>
                <p className="lg:text-6xl md:text-3xl text-3xl   font-semibold mb-6">make an appointment</p>
            <span className="text-white text-md font-semibold block mb-1">Select prefered doctor and time slot to</span>
                <span className="text-white text-md font-semibold block">book appointment or consultation</span>
            </div>

            <div className="bg-white relative mt-5 lg:ms-24 md:ms-24 ms-4 lg:w-1/2 md:w-3/4 w-[92%] p-2 pb-4 rounded-lg">
                <h1 className="font-semibold ms-5 my-4 pb-2">Book Appointment Now</h1>
                <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 mb-4 lg:ms-5 md:ms-5 ms-2     gap-10 justify-center align-middle justify-items-center ">

                    <div className="grid grid-flow-row justify-center text-center justify-items-center border-2 p-2 py-4 rounded-lg shadow-lg w-3/4">
                        <div className="bg-[#8257f8] rounded-full w-8 h-8 mb-5 ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mt-1 ms-1 text-white w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>
                        </div>
                        <span className="block">Location</span>
                        <span>٥ شارع أحمد عبد النبى, النزهة الجديدة</span>
                    </div>

                    <div className="grid grid-flow-row justify-center text-center justify-items-center border-2 px-4 py-4 rounded-lg shadow-lg me-4 w-3/4">
                        <div className="mb-2 mt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                        </svg>
                        </div>
                        <span className="block mt-4">Appointment</span>
                        <span>{currentDate}</span>
                    </div>

                    <div className="w-[100%]">
                    <button 
                    className=" justify-center align-middle bg-[#8257f8] px-3 lg:mt-12 md:mt-12 mt-10 lg:ms-2 md:ms-7 ms-[70%] rounded-lg text-white lg:w-[50%] md:w-[60%] w-[80%] lg:h-[35%] md:h-[35%] h-[60%]">
                       <div className="grid grid-flow-col">
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" className="inline" />
                        </svg><span className=" font-medium">Search</span>
                       </div>
                       </button>
                    </div>
                </div>
            </div>
        </div>
    )
}