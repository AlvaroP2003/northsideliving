


export default function Home() {
    return (
        <>
            <style>
                 {`
                @keyframes slideIn {
                    0% {
                        transform: translateX(-40px);
                        opacity: 0;
                    }
                    100% {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
                .slide-in {
                    animation: slideIn .7s ease forwards;
                }
                `}
            </style>
            <section className="relative bg-[url('/Images/home_sml.jpeg')] lg:bg-[url('/Images/home.jpg')] bg-cover bg-center h-[90vh] flex items-center justify-center lg:justify-start lg:p-15 lg:[85vh]">
                <div className="bg-black/10 absolute inset-0"></div>
                <div className="slide-in bg-white flex flex-col w-fit gap-5 p-10 rounded-2xl">
                    <h1 className="font-montserrat text-2xl lg:text-5xl lg:w-[350px]">Find your perfect home</h1>
                    <p className="w-[300px] lg:text-lg text-gray-800">Discover properties tailored to your lifestyle, with expert guidance every step of the way.</p>

                    <div className="flex flex-col gap-2.5">
                        <button className="bg-[#C9B99F] text-white font-semibold h-[50px] w-[200px] rounded-lg cursor-pointer hover:bg-[#9c7b5c] transition-all">Browse Listings</button>
                        <button className="text-[#C9B99F] font-semibold border-2 border-[#C9B99F] h-[50px] w-[200px] rounded-lg cursor-pointer hover:bg-[#C9B99F] hover:text-white transition-all">Contact Me</button>
                    </div>
                </div>
            </section>
        </>
    )
}