"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export type ModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
  showCloseButton?: boolean;
  closeOnBackdropClick?: boolean;
  closeOnEscape?: boolean;
};

export function Modal({
  open,
  onClose,
  title,
  description,
  children,
  className,
  contentClassName,
  showCloseButton = true,
  closeOnBackdropClick = true,
  closeOnEscape = true,
}: ModalProps) {
  useEffect(() => {
    if (!open || !closeOnEscape) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [closeOnEscape, onClose, open]);

  useEffect(() => {
    if (!open) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6",
        className
      )}
      aria-hidden={!open}
    >
      <button
        type="button"
        aria-label="Close modal backdrop"
        className="absolute inset-0 cursor-default bg-slate-950/60 backdrop-blur-sm"
        onClick={closeOnBackdropClick ? onClose : undefined}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        aria-describedby={description ? "modal-description" : undefined}
        className={cn(
          "relative z-10 w-full max-w-lg overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl",
          contentClassName
        )}
      >
        <div className="flex items-start justify-between gap-4 border-b border-slate-200 px-5 py-4 sm:px-6">
          <div className="space-y-1">
            <h2 id="modal-title" className="text-lg font-semibold text-slate-900">
              {title}
            </h2>
            {description ? (
              <p id="modal-description" className="text-sm leading-6 text-slate-600">
                {description}
              </p>
            ) : null}
          </div>

          {showCloseButton ? (
            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          ) : null}
        </div>

        <div className="px-5 py-5 sm:px-6 sm:py-6">{children}</div>
      </div>
    </div>
  );
}

export default Modal;
