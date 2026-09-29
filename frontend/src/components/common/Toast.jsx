import { useEffect, useRef } from 'react';

/**
 * Toast notification system.
 * Usage: pass a `toasts` array and a `removeToast` callback.
 */
export function ToastContainer({ toasts }) {
  return (
    <div id="toastWrap" className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[99] flex flex-col gap-2 items-center w-[92%] max-w-md">
      {toasts.map((t) => (
        <Toast key={t.id} toast={t} />
      ))}
    </div>
  );
}

function Toast({ toast }) {
  const ref = useRef(null);

  useEffect(() => {
    // Apply entrance animation class
    if (ref.current) ref.current.classList.add('toast');
  }, []);

  const isSuccess = toast.type === 'success';
  return (
    <div
      ref={ref}
      className={`toast w-full flex items-center gap-3 px-5 py-3.5 border-[2.5px] border-charcoal hard-sm font-grotesk font-bold text-sm ${isSuccess ? 'bg-olive text-ivory' : 'bg-terracotta text-ivory'}`}
    >
      <span className={`w-8 h-8 shrink-0 bg-ivory ${isSuccess ? 'text-olive' : 'text-terracotta'} rounded-full flex items-center justify-center`}>
        <i className={`fa-solid ${isSuccess ? 'fa-check' : 'fa-triangle-exclamation'}`}></i>
      </span>
      <span>{toast.msg}</span>
    </div>
  );
}
