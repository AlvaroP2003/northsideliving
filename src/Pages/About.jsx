


export default function About() {
    return (
        <section className="flex flex-col gap-20 p-10 lg:p-20">
            <div className="flex gap-10 flex-col mx-auto lg:flex-row">
                <img className='w-[400px] rounded-xl' src="Images/about.webp"/>
                <div className="flex flex-col gap-5 w-[fit] lg:w-[400px]">
                    <h1 className="signature text-6xl text-center lg:text-8xl lg:text-start">Hello</h1>
                    <p className="text-gray-500 text-sm leading-loose text-center lg:text-start">As a dedicated real estate agent, my goal is to make your buying, selling, or investing experience seamless, rewarding, and stress-free. With a deep understanding of the local market and a genuine commitment to personalized service, I strive to help you find the perfect property and secure the best possible deal for your home.
                        <br/>Whether you’re a first-time buyer, a seasoned investor, or planning a relocation, I’m here to guide you through every step of the journey — offering expert advice, reliable support, and a client-first approach that puts your goals at the center of everything I do.</p>
                </div>
            </div>

            <div className="flex flex-col items-center gap-5">
                <h2 className="text-gray-600 font-semibold">REGISTERED WITH:</h2>
                <div className="grid grid-cols-2 lg:flex lg:gap-1">
                    <img className='w-[150px] lg:w-[250px]' src="Images/ppra-01.webp"/>
                    <img className='w-[150px] lg:w-[250px]' src="Images/ieasa-01.webp"/>
                    <img className='w-[150px] lg:w-[250px]' src="Images/rebosa-01.webp"/>
                    <img className='w-[150px] lg:w-[250px]' src="Images/sacbw-01.webp"/>
                </div>
            </div>
        </section>
    )
}