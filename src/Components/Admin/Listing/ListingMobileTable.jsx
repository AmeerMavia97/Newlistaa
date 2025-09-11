import { useEffect, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronsDown, ExternalLink, ChartNoAxesCombined, Edit, Trash2, Lock, Eye, TextSearch } from "lucide-react";
import Spinner from "../../Spinner/Spinner";
import TruncatedText from "../../TruncatedText/TruncatedText";
import clsx from "clsx";

export default function ListingMobileTable({
    loading,
    items = [],
    navigate,
    Islocked,
    onEdit,
    onDelete,
}) {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState(null);

    const openSheet = (item) => {
        setActive(item);
        setOpen(true);
    };
    const closeSheet = () => setOpen(false);

    // prevent background scroll when sheet is open
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

    if (!items.length) {
        return (
            <div className="flex h-40 items-center justify-center text-gray-500 font-semibold">
                No listings found.
            </div>
        );
    }

    return (
        <section className="flex flex-col overflow-hidden relative">
            {/* Header */}
            <div className="bg-black w-full flex justify-between rounded-t-[13px] items-center px-3.5 py-3.5">
                <h1 className="text-white font-Urbanist text-[16px] sm:text-[17px] font-bold">
                    Property Name
                </h1>
                <div className="flex items-center gap-3">
                    <h1 className="text-white hidden sm:block font-Urbanist text-[16px] sm:text-[17px] font-bold">
                    Status
                </h1>
                <h1 onClick={() =>
                      setSortByViews((prev) => (prev === "desc" ? "asc" : "desc"))
                    } className="text-white  font-Urbanist text-[16px] px-1 sm:text-[17px] lg:text-[19px] font-bold">
                    View
                </h1>
                <TextSearch className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                </div>
            </div>

            {/* List */}
            <ul className="divide-y divide-gray-200 bg-white min-h-[60vh]">
                {items.map((item) => (
                    <li key={item.id} className="border-b border-[#dadada]">
                        <button
                            onClick={() => openSheet(item)}
                            className="w-full flex items-center justify-between px-3.5 py-4 active:bg-gray-50"
                        >
                            <div className="text-left w-[74%] pr-2">
                                <div className="text-[15px] sm:text-[17px] leading-[19px] font-[800] text-[#2c2a2a] font-Urbanist">
                                    <TruncatedText text={item.property_name || "—"} maxLength={48} />
                                </div>
                                <div className="mt-0.5 text-[12.5px] text-gray-500 font-Urbanist">
                                    <TruncatedText text={item.property_type || "—"} maxLength={24} />
                                </div>
                            </div>

                            <div className="pr-5 font-Urbanist font-semibold">
                                 {item.views_count}
                            </div>

                            <ChevronsDown className="w-6 h-6 text-black" />
                        </button>
                    </li>
                ))}
            </ul>

            {/* Bottom Sheet */}
            <div className={`fixed inset-0 z-[70] justify-center flex flex-col items-center ${open ? "" : "pointer-events-none"}`}>
                {/* Backdrop */}
                <div
                    className={`absolute inset-0 bg-black/50 transition-opacity duration-200 ${open ? "opacity-100" : "opacity-0"}`}
                    onClick={closeSheet}
                />
                {/* Panel */}
                <div
                    className={`absolute left-0 right-0 bottom-0 max-h-[85vh] min-h-[50vh] 
          bg-white rounded-t-2xl shadow-2xl transition-transform duration-300
          ${open ? "translate-y-0" : "translate-y-full"}`}
                >
                    <div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mt-3" />
                    <div className="p-4">
                        {active && (
                            <SheetContent
                                item={active}
                                Islocked={Islocked}
                                navigate={navigate}
                                onEdit={onEdit}
                                onDelete={onDelete}
                                onClose={closeSheet}
                            />
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ---------- Helpers ---------- */

function StatusPill({ status }) {
    const pill = statusToPill(status);
    return (
        <span
            className={clsx(
                "inline-flex items-center gap-2 px-3 py-1 rounded-full text-[12px] font-semibold",
                pill.className
            )}
        >
            <span className={clsx("h-2 w-2 rounded-full", pill.dot)} />
            {status || "—"}
        </span>
    );
}

function statusToPill(status) {
    // Mirrors your desktop dot colors: Available (green), Loss (red), else blue
    if (status === "Available") {
        return { className: "bg-green-100 text-green-700", dot: "bg-[#02E327]" };
    }
    if (status === "Loss") {
        return { className: "bg-red-100 text-red-700", dot: "bg-[#E31D1C]" };
    }
    return { className: "bg-blue-100 text-blue-700", dot: "bg-[#4379EE]" };
}

function formatPrice(item) {
    if (item.listing_type === "For Sale") return item.sale_price ?? "—";
    if (item.listing_type === "For Lease") return item.lease_rate ?? "—";
    if (item.listing_type === "Both (For Sale & For Lease)") {
        const sale = item.sale_price ?? "—";
        const lease = item.lease_rate ?? "—";
        return `${sale} / sale · ${lease} / lease`;
    }
    return "—";
}

/* ---------- Bottom Sheet Content ---------- */

function SheetContent({ item, Islocked, navigate, onEdit, onDelete, onClose }) {
    return (
        <div>
            <div className="flex items-start justify-between gap-3">
                <div>
                    <h3 className="text-[20px] leading-[26px] font-Urbanist font-[800] text-gray-900">
                        {item.property_name || "—"}
                    </h3>
                    <p className="text-[13.5px] text-gray-500 font-Urbanist">
                        {item.property_type || "—"}
                    </p>
                </div>
                <button onClick={onClose} aria-label="Close">
                    <XMarkIcon className="w-6 h-6 text-gray-400" />
                </button>
            </div>

            {/* Details grid */}
            <div className="mt-4 grid grid-cols-2 gap-3 text-[14px]">
                <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-gray-500">Price</div>
                    <div className="font-bold text-gray-900">
                        <TruncatedText text={formatPrice(item)} maxLength={26} />
                    </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-gray-500">Status</div>
                    <div className="mt-1"><StatusPill status={item.listing_status} /></div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-gray-500">Date Listed</div>
                    <div className="font-semibold text-gray-900">
                        {new Date(item.created_at).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                        })}
                    </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-gray-500">Views</div>
                    <div className="font-semibold text-gray-900">{item.views_count || 0}</div>
                </div>
            </div>

            {/* Actions */}
            <div className="mt-5 grid grid-cols-2 gap-3">
                {/* View listing */}
                <button
                    onClick={() => {
                        navigate(`/properties/${item.id}`);
                        onClose();
                    }}
                    className="flex items-center justify-center gap-2 bg-gray-900 text-white py-2 rounded-lg font-semibold"
                >
                    <Eye className="w-4 h-4" />
                    View
                </button>

                {/* Analytics (locked if Islocked) */}
                {Islocked ? (
                    <button
                        disabled
                        className="flex items-center justify-center gap-2 bg-gray-200 text-gray-600 py-2 rounded-lg font-semibold cursor-not-allowed"
                    >
                        <Lock className="w-4 h-4 text-red-600" />
                        Analytics
                    </button>
                ) : (
                    <button
                        onClick={() => {
                            navigate(`/admin/analytics/${item.id}`);
                            onClose();
                        }}
                        className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-semibold"
                    >
                        <ChartNoAxesCombined className="w-4 h-4" />
                        Analytics
                    </button>
                )}

                {/* Edit */}
                <button
                    onClick={async () => {
                        await onEdit?.(item.id);
                        onClose();
                    }}
                    className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold col-span-1"
                >
                    <Edit className="w-4 h-4" />
                    Edit
                </button>

                {/* Delete */}
                <button
                    onClick={async () => {
                        await onDelete?.(item.id);
                        onClose();
                    }}
                    className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-semibold col-span-1"
                >
                    <Trash2 className="w-4 h-4" />
                    Delete
                </button>
            </div>

            {/* Deep link (optional) */}
            <div className="mt-3 flex items-center gap-2 text-[14px] font-Urbanist">
                <span className="text-gray-600">Open detail:</span>
                <button
                    onClick={() => {
                        navigate(`/properties/${item.id}`);
                        onClose();
                    }}
                    className="text-indigo-600 underline flex items-center gap-1"
                >
                    <ExternalLink className="w-4 h-4" /> Property page
                </button>
            </div>
        </div>
    );
}
