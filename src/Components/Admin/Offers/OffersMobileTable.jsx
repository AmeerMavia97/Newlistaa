import { useEffect, useState } from "react";
import { ChevronRightIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Spinner from "../../Spinner/Spinner"; // adjust if your path differs
import clsx from "clsx";
import { Check, ChevronDown, ChevronsDown, Hourglass, ListCollapse, TextSearch, X } from "lucide-react";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/20/solid";
import TruncatedText from "../../TruncatedText/TruncatedText";

export default function OffersMobileTable({
    tab,
    loading,
    paginatedOffers = [],
    statusStyles,
    handleAction,
    AddtoNetwork,
    navigate,
}) {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState(null);

    const openSheet = (item) => {
        setActive(item);
        setOpen(true);
    };
    const closeSheet = () => setOpen(false);

    useEffect(() => {
        const prev = document.body.style.overflow;
        document.body.style.overflow = open ? "hidden" : prev || "";
        return () => (document.body.style.overflow = prev || "");
    }, [open]);

    if (loading) {
        return (
            <div className="flex h-[60vh] items-center justify-center">
                <Spinner style={"w-12 h-14 text-PurpleColor"} />
            </div>
        );
    }

    if (!paginatedOffers.length) {
        return (
            <div className="flex h-40 items-center justify-center text-gray-500 font-semibold">
                No Offer Found
            </div>
        );
    }

    return (
        <>
            <div className="bg-black w-full flex justify-between items-center px-3.5 py-3.5">
                <h1 className="text-white font-Urbanist text-[16px] sm:text-[17px] lg:text-[19px] font-bold">
                    {tab === "sent" ? "Property" : "From / Property"}
                </h1>
                <div className="flex items-center gap-6 sm:gap-12 lg:gap-12.5">
                    <h1 className="text-white font-Urbanist text-[16px] sm:text-[17px] lg:text-[19px] sm:block font-bold">Status</h1>
                    <h1 className="text-white font-Urbanist text-[16px] sm:text-[17px] lg:text-[19px] hidden sm:block font-bold">Action</h1>
                    <h1><TextSearch className="text-white w-5 h-5 sm:w-6 sm:h-6" /></h1>
                </div>
            </div>

            <ul className="divide-y divide-gray-200 bg-white min-h-[60vh]">
                {paginatedOffers.map((item) => {
                    const primary =
                        tab === "sent"
                            ? item?.property?.property_name
                            : `${item?.user?.first_name} ${item?.user?.last_name}`;
                    const secondary =
                        tab !== "sent" ? item?.property?.property_name : null;

                    return (
                        <li key={item.id} className="border-b-[1px] border-[#dadada]">
                            <button
                                onClick={() => openSheet(item)}
                                className="w-full flex items-center justify-between px-3.5 py-4 active:bg-gray-50"
                            >
                                <div className="text-left w-[80%] pr-2">
                                    <div className="text-[15px] sm:text-[17px] lg:text-[18.3px] w-[100%] leading-[19px] font-[700] text-[#2c2a2a] font-Urbanist">
                                        <TruncatedText text={primary || "—"} maxLength={47} />
                                    </div>
                                    {secondary && (
                                        <div className="text-[13px] sm:text-[14px] lg:text-[15px] text-gray-500 font-Urbanist"><TruncatedText text={secondary} maxLength={20} /></div>
                                    )}
                                </div>

                                <div className="pr-2 lg:pr-4">
                                    <span
                                        className={clsx(
                                            " inline-flex px-3 py-1 rounded-full text-[11.5px] lg:text-[13.5px] font-semibold",
                                            statusStyles[item.status]
                                        )}
                                    >
                                        {item.status?.charAt(0).toUpperCase() + item.status?.slice(1)}
                                    </span>
                                </div>

                                <div className="hidden sm:block">
                                    <div className="px-5  lg:px-6 text-center">
                                        {item.status === "pending" ? (
                                            tab === "received" ? (
                                                <div className="flex justify-center gap-1 px-3">
                                                    <button
                                                        onClick={() => handleAction(item.id, "accept")}
                                                        title="Accept"
                                                    >
                                                        <CheckCircleIcon className="w-7 h-7 text-green-600 hover:text-green-700 cursor-pointer" />
                                                    </button>
                                                    <button
                                                        onClick={() => handleAction(item.id, "Declined")}
                                                        title="Declined"
                                                    >
                                                        <XCircleIcon className="w-7 h-7 text-red-600 hover:text-red-700 cursor-pointer" />
                                                    </button>
                                                </div>
                                            ) : <span className="text-gray-500 px-8">—</span>
                                        ) : item.status === "accepted" ? (
                                            item.connection_status === "accepted" ? (
                                                <button
                                                    onClick={() => {
                                                        const user =
                                                            tab === "received" ? item.user : item.owner;
                                                        navigate("/admin/inbox", {
                                                            state: {
                                                                userId: user?.id,
                                                                userName: `${user?.first_name} ${user?.last_name}`,
                                                            },
                                                        });
                                                    }}
                                                    className="text-[13.5px] lg:text-[14.5px] bg-purple-600 text-white px-3 pt-0.5 pb-1 rounded-full hover:bg-purple-700 font-medium cursor-pointer hover-btn hover-btn-purple"
                                                >
                                                    <span>Message</span>
                                                </button>
                                            ) : item.connection_status === "pending" ? (
                                                <button
                                                    disabled
                                                    className="text-[13.5px] lg:text-[14.5px] bg-gray-300 text-gray-700 px-3 py-1 rounded-full font-medium cursor-not-allowed"
                                                >
                                                    Pending
                                                </button>
                                            ) : (
                                                <button
                                                    onClick={() => {
                                                        AddtoNetwork(
                                                            tab === "received" ? item.user : item.owner
                                                        );
                                                    }}
                                                    className="text-[13.5px] lg:text-[14.5px] bg-purple-600 text-white px-3 py-1 rounded-full hover:bg-purple-700 font-medium cursor-pointer hover-btn hover-btn-purple"
                                                >
                                                    <span>Add Network</span>
                                                </button>
                                            )
                                        ) : (
                                            <span className="text-gray-500 px-8">—</span>
                                        )}
                                    </div>
                                </div>
                                <div>
                                    <ChevronsDown className="w-6 h-6 text-black" />
                                </div>
                            </button>
                        </li>
                    );
                })}
            </ul>

            {/* Bottom Sheet */}
            <div className={`fixed inset-0 z-[70] ${open ? "" : "pointer-events-none"}`}>
                {/* Backdrop */}
                <div
                    className={`absolute inset-0 bg-black/50 transition-opacity duration-200 ${open ? "opacity-100" : "opacity-0"
                        }`}
                    onClick={closeSheet}
                />
                {/* Panel */}
                <div
                    className={`absolute left-0 right-0 bottom-0 max-h-[85vh] min-h-[50vh] 
            bg-white rounded-t-2xl shadow-2xl transition-transform duration-300 
            ${open ? "translate-y-0" : "translate-y-full"}`}
                >
                    <div className="w-12  h-1.5 bg-gray-300 rounded-full mx-auto mt-4" />
                    <div className="p-4">
                        {active && (
                            <SheetContent
                                tab={tab}
                                item={active}
                                statusStyles={statusStyles}
                                handleAction={handleAction}
                                AddtoNetwork={AddtoNetwork}
                                navigate={navigate}
                                onClose={closeSheet}
                            />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

function SheetContent({
    tab,
    item,
    statusStyles,
    handleAction,
    AddtoNetwork,
    navigate,
    onClose,
}) {
    const primary =
        tab === "sent"
            ? item?.property?.property_name
            : `${item?.user?.first_name} ${item?.user?.last_name}`;

    return (
        <div>
            <div className="flex items-start justify-between gap-3">
                <div>
                    <h3 className="text-[20px] font-Urbanist font-[800] text-gray-900">
                        From {primary || "—"}
                    </h3>
                    {tab !== "sent" && item?.property?.property_name && (
                        <p className="text-[13px] text-gray-500 font-Urbanist">
                            {item.property.property_name}
                        </p>
                    )}
                </div>
                <button onClick={onClose} aria-label="Close">
                    <XMarkIcon className="w-6 h-6 text-gray-400" />
                </button>
            </div>

            <div>
                <div>
                    <div className="font-Urbanist text-[17px] font-bold"><span>Amount</span>: <span className="">${item.amount}</span></div>
                    <div className="text-gray-500">Amount: ${item.amount}</div>
                </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 text-[14px]">
                <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-gray-500">Amount</div>
                    <div className="font-bold text-gray-900">${item.amount}</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-gray-500">Date</div>
                    <div className="font-semibold text-gray-900">
                        {new Date(item.created_at).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                        })}
                    </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 col-span-2">
                    <div className="text-gray-500">Status</div>
                    <span
                        className={clsx(
                            "mt-1 inline-flex px-3 py-1 rounded-full text-[13px] font-semibold",
                            statusStyles[item.status]
                        )}
                    >
                        {item.status?.charAt(0).toUpperCase() + item.status?.slice(1)}
                    </span>
                </div>
            </div>

            <div className="mt-5">
                {/* Actions mirror desktop logic */}
                {item.status === "pending" ? (
                    tab === "received" ? (
                        <div className="flex gap-3">
                            <button
                                onClick={() => {
                                    handleAction(item.id, "accept");
                                    onClose();
                                }}
                                className="flex-1 bg-green-600 text-white py-2 rounded-lg font-semibold"
                            >
                                Accept
                            </button>
                            <button
                                onClick={() => {
                                    handleAction(item.id, "Declined");
                                    onClose();
                                }}
                                className="flex-1 bg-red-600 text-white py-2 rounded-lg font-semibold"
                            >
                                Decline
                            </button>
                        </div>
                    ) : (
                        <div className="text-center text-gray-500">No actions</div>
                    )
                ) : item.status === "accepted" ? (
                    item.connection_status === "accepted" ? (
                        <button
                            onClick={() => {
                                const user = tab === "received" ? item.user : item.owner;
                                navigate("/admin/inbox", {
                                    state: {
                                        userId: user?.id,
                                        userName: `${user?.first_name} ${user?.last_name}`,
                                    },
                                });
                                onClose();
                            }}
                            className="w-full bg-purple-600 text-white py-2 rounded-lg font-semibold"
                        >
                            Message
                        </button>
                    ) : item.connection_status === "pending" ? (
                        <button
                            disabled
                            className="w-full bg-gray-300 text-gray-700 py-2 rounded-lg font-semibold cursor-not-allowed"
                        >
                            Pending
                        </button>
                    ) : (
                        <button
                            onClick={() => {
                                AddtoNetwork(tab === "received" ? item.user : item.owner);
                                onClose();
                            }}
                            className="w-full bg-purple-600 text-white py-2 rounded-lg font-semibold"
                        >
                            Add Network
                        </button>
                    )
                ) : (
                    <div className="text-center text-gray-500">—</div>
                )}
            </div>
        </div>
    );
}
