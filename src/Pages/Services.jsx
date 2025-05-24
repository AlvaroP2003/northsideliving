


export default function Services() {

const servicesData = [
    {
        number: '01',
        heading: 'For Sellers',
        intro: 'Our services help streamline the selling process and maximize your return.',
        body: [
            'Success starts with accurate pricing and an effective marketing strategy.',
            'Advertise your property through print and online portals.',
            'Professional valuations to determine the best listing price.',
            'High-quality photography and walkthrough videos.',
            'Open houses and private showings to attract buyers.'
        ]
    },

    {
        number: '02',
        heading: 'For Buyers',
        intro: 'We help you find the right home, secure financing, and navigate the buying process.',
        body: [
            'Access to listings that match your preferences, with expert guidance.',
            'Mortgage and financing assistance every step of the way.',
            'Legal and transactional support for a smooth purchase.',
            'We ensure a stress-free and enjoyable buying experience.'
        ]
    },

    {
        number: '03',
        heading: 'For Landlords',
        intro: 'We offer high-quality property management solutions tailored to landlords.',
        body: [
            'Strategic marketing through print and online platforms to attract ideal tenants.',
            'Thorough tenant screening with credit and affordability checks.',
            'Automated rent collection systems for hassle-free payments.',
            'Coordinated maintenance and reliable repair services.',
            'Legal compliance support, including lease agreements and eviction procedures.'
        ]
    },

    {
        number: '04',
        heading: 'For Tenants',
        intro: 'We make renting easy with access to quality listings and reliable support.',
        body: [
            'Browse a wide selection of rental properties.',
            'Fair and transparent rental agreements.',
            'Prompt assistance with queries and tenancy concerns.',
            'Clear property visuals with professional photos and walkthroughs.',
            'Attend open houses or private viewings with ease.'
        ]
    },
];



    return (
        <section className="bg-[url('/Images/services.webp')] bg-cover bg-center h-fit flex flex-col justify-center items-center gap-5 lg:h-[85vh] py-10">
            <div>
                <div className="flex flex-wrap justify-center gap-5">
                    {servicesData.map((card,index) => (
                        <div key={index} className="cursor-default flex flex-col gap-3 bg-white rounded-xl p-7 w-[350px] border border-gray-100 shadow-lg">
                            <h2 className="text-[#C9B99F] text-2xl font-semibold">{card.number}</h2>
                            <h3 className="text-[#C9B99F] text-xl font-semibold">{card.heading}</h3>
                            <p className="text-sm text-gray-600 font-semibold">{card.intro}</p>
                            <ul className="flex flex-col gap-1 text-sm text-gray-600 list-disc px-5">
                                {card.body.map((item,index) => (
                                    <li key={index}>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex bg-white rounded-xl py-3 lg:p-5">
                    <img className="w-[100px] lg:w-[150px] border-r-2 border-gray-200 px-3 lg:px-5" src="Images/property24-01.webp"/>
                    <img className="w-[100px] lg:w-[150px] border-r-2 border-gray-200 px-3 lg:px-5" src="Images/private_property-01.webp"/>
                    <img className="w-[100px] lg:w-[150px] border-r-2 border-gray-200 px-3 lg:px-5" src="Images/payprop-01.webp"/>
                    <img className="w-[100px] lg:w-[150px] px-3 lg:px-5" src="Images/betterbond-01.webp"/>
                </div>
        </section>
    )
}