// AgreementModal.jsx
import React, { useEffect, useRef } from "react";

export default function AgreementModal({
  open,
  title = "Important Notice",
  subtitle = "Please review and accept the terms below to continue.",
  children,
  agreed,
  onAgreedChange,
  confirmLabel = "Agree & Continue",
  cancelLabel = "Cancel",
  loading = false,
  onConfirm,
  onCancel,
  closeOnBackdropClick = true,
  ariaTitleId = "agreement-title",
  ariaDescId = "agreement-desc",
}) {
  const panelRef = useRef(null);

  // ESC to close
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onCancel && onCancel();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onCancel]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby={ariaTitleId}
      aria-describedby={ariaDescId}
      onClick={() => {
        if (closeOnBackdropClick && onCancel) onCancel();
      }}
    >
      {/* Panel */}
      <div
        ref={panelRef}
        onClick={(e) => e.stopPropagation()}
        className="
          relative w-[92%] max-w-2xl md:max-w-3xl
          rounded-2xl bg-white shadow-2xl ring-1 ring-black/5
          animate-[pop_180ms_cubic-bezier(0.2,0.7,0.3,1)_both]
        "
      >
        {/* Header */}
        <div className="rounded-t-2xl bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-5 text-white">
          <div className="flex items-start gap-3">
            <div className="shrink-0 grid h-10 w-10 place-items-center rounded-full bg-white/20">
              {/* shield/alert icon */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-white">
                <path d="M12 3l7 4v5c0 5-3.5 9-7 9s-7-4-7-9V7l7-4z" stroke="currentColor" strokeWidth="1.8"/>
                <path d="M12 8v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                <circle cx="12" cy="15.5" r="1" fill="currentColor"/>
              </svg>
            </div>
            <div className="min-w-0">
              <h2 id={ariaTitleId} className="font-Urbanist text-2xl font-semibold leading-7">
                {title}
              </h2>
              {subtitle ? <p className="mt-1 text-sm/5 text-white/80">{subtitle}</p> : null}
            </div>
          </div>

          {/* Close */}
          <button
            onClick={onCancel}
            className="absolute right-4 top-4 rounded-full p-2 text-white/90 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40"
            aria-label="Close"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="px-6 pt-6 pb-3">
          <div id={ariaDescId} className="rounded-xl border border-slate-200 bg-slate-50/70 p-4">
            {children}
          </div>

          {/* Agreement checkbox */}
          <label className="mt-6 flex items-start gap-3">
            <input
              type="checkbox"
              checked={!!agreed}
              onChange={(e) => onAgreedChange && onAgreedChange(e.target.checked)}
              className="
                mt-0.5 h-5 w-5 shrink-0 cursor-pointer appearance-none rounded
                border border-slate-300 outline-none
                checked:border-violet-600 checked:bg-violet-600
                focus:ring-2 focus:ring-violet-300
              "
            />
            <span className="font-Inter text-[14px] font-medium text-slate-700">
              I have read and agree to the notice and related terms.
            </span>
          </label>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 mt-2 flex items-center justify-end gap-3 rounded-b-2xl border-t bg-slate-50/60 px-6 py-4">
          <button
            onClick={onCancel}
            className="font-Urbanist text-[14px] font-semibold inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-200"
          >
            {cancelLabel}
          </button>
          <button
            onClick={onConfirm}
            disabled={!agreed || loading}
            className="
              font-Urbanist text-[14px] font-semibold inline-flex items-center justify-center rounded-lg
              bg-gradient-to-r from-indigo-600 to-violet-600 px-4 py-2.5 text-white
              hover:from-indigo-500 hover:to-violet-500
              disabled:cursor-not-allowed disabled:opacity-60
              focus:outline-none focus:ring-2 focus:ring-violet-300
            "
          >
            {loading ? "Processing..." : confirmLabel}
          </button>
        </div>
      </div>

      {/* keyframes */}
      <style>{`
        @keyframes pop {
          0% { opacity: 0; transform: scale(.98) translateY(6px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </div>
  );
}
