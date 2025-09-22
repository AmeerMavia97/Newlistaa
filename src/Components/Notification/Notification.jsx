import { BellIcon } from "lucide-react";
import React, { useState } from "react";

const items = [
    { id: "254845", name: "Jonathon Smith", avatar: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=200", action: "Place an order", ago: "9 hours ago", highlight: true },
    { id: "254845-2", name: "Jonathon Smith", avatar: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=200", action: "Place an order", ago: "9 hours ago", highlight: true },
    { id: "478541", name: "Jonathon Smith", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200", action: "Place an order", ago: "9 hours ago" },
    { id: "26448", name: "Jonathon Smith", avatar: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=200", action: "Place an order", ago: "9 hours ago", orangeDot: true },
    { id: "365481", name: "Jonathon Smith", avatar: "https://images.unsplash.com/photo-1541534401786-2077eed87a72?q=80&w=200", action: "Cancel an order", ago: "9 hours ago" },
];

const Notification = () => {
    const [OpenPopup, setOpenPopup] = useState(false);

    return (
        <>
            <button
                onClick={() => setOpenPopup((prev) => !prev)}
                className="p-2 mx-1 cursor-pointer bg-[#f2f2f2] relative text-[#000] rounded-lg"
            >
                <span className="sr-only">View notifications</span>
                <BellIcon className="max-[380px]:w-5.5 h-6 w-6" aria-hidden="true" />
                <span className="absolute font-Inter bg-[#ea7d39] rounded-full text-white text-[9px] top-1 right-1.5 flex items-center justify-center h-4 w-4 leading-none">
                    10
                </span>
            </button>

            {OpenPopup && (
                <div
                    className="
            absolute right-17 sm:right-26 min-[1780px]:right-[10%] top-29
            w-60 sm:w-64 bg-white shadow-xl rounded-lg p-5 z-50
            origin-top-right
            animate-[pop_180ms_cubic-bezier(0.2,0.7,0.3,1)_both]
          "
                >
                    {/* little pointer */}
                    <div className="bg-white w-4 h-6 -z-10 rotate-45 absolute right-8 sm:right-5 shadow-2xl -top-2" />
                    <p className="font-semibold text-[18px] sm:text-lg font-Poppins mb-2">Notifications</p>

                    <ul className="h-[260px] sm:h-[280px] overflow-y-scroll custom-scrollbar">
                        {items.map((item, i) => (
                            <li
                                key={item.id}
                                className="
                  flex items-center pt-2 pb-3.5 gap-3 mb-2 border-b border-[#e8e8e8]
                  animate-[rowIn_220ms_ease-out_both]
                "
                                style={{ animationDelay: `${60 + i * 40}ms` }}
                            >
                                <img
                                    src={item.avatar}
                                    alt={item.name}
                                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-[5px] object-cover"
                                />
                                <span className="absolute font-Inter bg-[#ea7d39] rounded-full text-white text-[9px] top-1 border-white border-[2px] left-8.5 flex items-center justify-center h-3 w-3 leading-none">
                                </span>
                                <div className="flex flex-col">
                                    <span className="text-[14px] sm:text-[15px] font-Urbanist font-semibold">{item.name}</span>
                                    <span className="text-[10px] sm:text-[11px] font-Inter text-gray-500">{item.ago}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            <style>{`
        @keyframes pop {
          0% { opacity: 0; transform: scale(0.95) translateY(6px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes rowIn {
          0% { opacity: 0; transform: translateY(6px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
        </>
    );
};

export default Notification;
