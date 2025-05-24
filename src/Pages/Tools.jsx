
import { NotebookPen,Calculator,BookOpenCheck,ExternalLink } from "lucide-react"

export default function Tools() {

    const toolData = [
        {
            icon: <NotebookPen size={40} className="stroke-[#C9B99F] group-hover:stroke-white transition-colors" strokeWidth={1.5} />,
            heading:'Transfer Process',
            text:'Understand the step-by-step journey of buying or selling a property. This guide walks you through the entire transfer process — from offer to registration — so you know exactly what to expect at every stage.'
        },
           {
             icon: <Calculator size={40} className="stroke-[#C9B99F] group-hover:stroke-white transition-colors" strokeWidth={1.5} />,
            heading:'Betterbonds Calculator',
            text:'Estimate your monthly bond repayments in seconds. Use the BetterBond calculator to get a clear idea of what you can afford and compare financing options before making an offer.',
        },
           {
             icon: <BookOpenCheck size={40} className="stroke-[#C9B99F] group-hover:stroke-white transition-colors" strokeWidth={1.5} />,
            heading:"Betterbonds Buyers' Guide",
            text:"A practical, easy-to-follow guide for first-time and seasoned buyers. The BetterBond Buyers' Guide covers everything from securing finance to finalizing your deal — helping you make smart, confident property decisions.",
        },
    ]

    return (
        <section className="flex py-10 justify-center bg-[url('/Images/tools.jpg')] bg-cover bg-center h-fit lg:h-[85vh] lg:items-center">
            <div className="flex flex-wrap justify-center gap-5">
                {toolData.map((card, index) => (
                    <div key={index} className="cursor-default group flex flex-col gap-3 p-7.5 bg-white border border-gray-100 shadow-lg rounded-2xl max-w-[400px] h-fit hover:bg-[#C9B99F] hover:border-[#C9B99F] transform hover:translate-y-[-10px] transition-all">
                        {card.icon}
                        <h1 className="text-xl font-semibold text-[#C9B99F] group-hover:text-white">{card.heading}</h1>
                        <p className="h-[125px] text-gray-600 text-sm leading-relaxed group-hover:text-white">{card.text}</p>
                        <a href="#" className="flex items-center justify-end gap-2.5 text-[#C9B99F] text-sm font-semibold group-hover:text-white">
                            Read More <ExternalLink size={18} />
                        </a>
                    </div>
                ))}
            </div>
        </section>
    )
}