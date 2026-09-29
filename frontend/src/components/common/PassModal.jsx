import { useState, useEffect } from 'react';
import { generateTicketId, launchConfetti } from '../../utils/helpers.js';

export default function PassModal({ isOpen, passType, onClose, onShowToast }) {
  const [selectedPass, setSelectedPass] = useState(passType || 'full');
  const [qty, setQty] = useState(1);
  const [step, setStep] = useState(1);
  const [ticket, setTicket] = useState({ id: '', text: '' });

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    college: '',
    email: '',
  });

  useEffect(() => {
    if (passType) {
      setSelectedPass(passType);
    }
  }, [passType]);

  if (!isOpen) return null;

  function changeQty(delta) {
    if (selectedPass === 'squad') return;
    setQty((prev) => Math.max(1, Math.min(10, prev + delta)));
  }

  function handleSelectPass(type) {
    setSelectedPass(type);
    if (type === 'squad') setQty(1);
  }

  function confirmBooking(e) {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.email.trim()) {
      onShowToast?.('Please fill out all required fields.', 'error');
      return;
    }

    const newTicketId = generateTicketId();
    const label =
      selectedPass === 'day1'
        ? 'Day 1 Free Pass (Bhangra Night)'
        : selectedPass === 'day2'
        ? 'Day 2 Free Pass (DJ Night)'
        : selectedPass === 'full'
        ? 'Full 3-Day Free Entry Pass'
        : 'Squad Free Pass (4 People)';

    setTicket({
      id: newTicketId,
      text: `${label} × ${selectedPass === 'squad' ? 1 : qty}`,
    });

    setStep(2);
    launchConfetti();
  }

  function resetAndClose() {
    setStep(1);
    setQty(1);
    setFormData({ name: '', phone: '', college: '', email: '' });
    onClose();
  }

  return (
    <div
      id="passModal"
      className="fixed inset-0 z-[95] flex items-center justify-center p-4 modal-bg"
      onClick={(e) => {
        if (e.target === e.currentTarget) resetAndClose();
      }}
    >
      <div className="modal-panel bg-ivory border-[3px] border-charcoal hard-lg w-full max-w-lg max-h-[92vh] overflow-y-auto">
        {step === 1 ? (
          <div id="passStep1">
            <div className="bg-charcoal text-ivory p-5 flex justify-between items-center border-b-[3px] border-charcoal sticky top-0 z-10">
              <div>
                <div className="font-grotesk font-bold text-[10px] tracking-[.3em] text-mustard">
                  OORJA 2026 • 100% FREE ENTRY
                </div>
                <div className="font-display text-2xl">GET YOUR FREE PASS</div>
              </div>
              <button
                onClick={resetAndClose}
                className="w-10 h-10 bg-terracotta border-2 border-ivory flex items-center justify-center hover:bg-ivory hover:text-charcoal transition-colors"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div className="p-6">
              <label className="font-grotesk font-bold text-xs tracking-widest">
                1. CHOOSE FREE PASS TYPE
              </label>
              <div className="grid grid-cols-3 gap-2 mt-2" id="passTypes">
                <button
                  type="button"
                  onClick={() => handleSelectPass('day1')}
                  className={`pass-opt border-[2.5px] border-charcoal p-3 text-center transition-all ${
                    selectedPass === 'day1'
                      ? 'bg-charcoal text-ivory'
                      : 'bg-paper hover:bg-cream'
                  }`}
                >
                  <div className="font-grotesk font-bold text-xs">DAY 1</div>
                  <div className="font-display text-xl text-olive">FREE</div>
                  <div className="text-[10px] font-bold text-smoke">BHANGRA</div>
                </button>
                <button
                  type="button"
                  onClick={() => handleSelectPass('day2')}
                  className={`pass-opt border-[2.5px] border-charcoal p-3 text-center transition-all ${
                    selectedPass === 'day2'
                      ? 'bg-charcoal text-ivory'
                      : 'bg-paper hover:bg-cream'
                  }`}
                >
                  <div className="font-grotesk font-bold text-xs">DAY 2</div>
                  <div className="font-display text-xl text-olive">FREE</div>
                  <div className="text-[10px] font-bold text-smoke">DJ NIGHT</div>
                </button>
                <button
                  type="button"
                  onClick={() => handleSelectPass('full')}
                  className={`pass-opt border-[2.5px] border-charcoal p-3 text-center transition-all ${
                    selectedPass === 'full'
                      ? 'bg-charcoal text-ivory border-mustard'
                      : 'bg-paper hover:bg-cream'
                  }`}
                >
                  <div className="font-grotesk font-bold text-xs text-mustard">
                    ALL 3 NIGHTS
                  </div>
                  <div className="font-display text-xl text-mustard">FREE</div>
                  <div className="text-[10px] font-bold">ALL ACCESS</div>
                </button>
              </div>

              <button
                type="button"
                onClick={() => handleSelectPass('squad')}
                className={`pass-opt w-full mt-2 border-[2.5px] border-charcoal p-3 text-center transition-all flex justify-between items-center px-5 ${
                  selectedPass === 'squad'
                    ? 'bg-charcoal text-ivory'
                    : 'bg-paper hover:bg-cream'
                }`}
              >
                <span className="font-grotesk font-bold text-sm">
                  SQUAD FREE PASS × 4 PEOPLE
                </span>
                <span className="font-display text-2xl text-olive">FREE</span>
              </button>

              <div className="grid grid-cols-2 gap-4 mt-5">
                <div>
                  <label className="font-grotesk font-bold text-xs tracking-widest">
                    QUANTITY
                  </label>
                  <div className="flex items-center border-[2.5px] border-charcoal bg-paper mt-2">
                    <button
                      type="button"
                      onClick={() => changeQty(-1)}
                      disabled={selectedPass === 'squad'}
                      className="w-10 h-11 font-bold text-lg hover:bg-cream disabled:opacity-40"
                    >
                      −
                    </button>
                    <span className="flex-1 text-center font-display text-xl">
                      {selectedPass === 'squad' ? 1 : qty}
                    </span>
                    <button
                      type="button"
                      onClick={() => changeQty(1)}
                      disabled={selectedPass === 'squad'}
                      className="w-10 h-11 font-bold text-lg hover:bg-cream disabled:opacity-40"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div>
                  <label className="font-grotesk font-bold text-xs tracking-widest">
                    TOTAL COST
                  </label>
                  <div className="mt-2 h-11 border-[2.5px] border-charcoal bg-mustard flex items-center justify-center font-display text-2xl text-charcoal">
                    ₹0 (FREE)
                  </div>
                </div>
              </div>

              <form onSubmit={confirmBooking} className="mt-4 space-y-3">
                <input
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  type="text"
                  placeholder="Full name *"
                  className="w-full border-[2.5px] border-charcoal bg-paper px-4 py-3 text-sm font-semibold"
                />
                <div className="grid grid-cols-2 gap-3">
                  <input
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    type="tel"
                    placeholder="Phone *"
                    className="border-[2.5px] border-charcoal bg-paper px-4 py-3 text-sm font-semibold"
                  />
                  <input
                    required
                    value={formData.college}
                    onChange={(e) =>
                      setFormData({ ...formData, college: e.target.value })
                    }
                    type="text"
                    placeholder="College *"
                    className="border-[2.5px] border-charcoal bg-paper px-4 py-3 text-sm font-semibold"
                  />
                </div>
                <input
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  type="email"
                  placeholder="Email *"
                  className="w-full border-[2.5px] border-charcoal bg-paper px-4 py-3 text-sm font-semibold"
                />
                <button type="submit" className="btn btn-terra w-full py-4 mt-5 text-sm">
                  Claim Free Pass <i className="fa-solid fa-ticket"></i>
                </button>
              </form>
              <p className="text-[11px] text-center text-smoke mt-2">
                100% Free Entry for All Students &amp; Visitors • Valid College/Govt ID mandatory at gate
              </p>
            </div>
          </div>
        ) : (
          <div id="passStep2" className="p-8 text-center">
            <div className="w-20 h-20 bg-olive text-ivory rounded-full border-[3px] border-charcoal hard mx-auto flex items-center justify-center text-3xl">
              <i className="fa-solid fa-check"></i>
            </div>
            <h3 className="font-display text-4xl mt-5">YOU'RE IN! (FREE ENTRY)</h3>
            <p className="text-smoke mt-2">
              Show this free ticket pass ID at the gate with your college ID.
            </p>
            <div className="mt-5 bg-charcoal text-ivory border-[3px] border-charcoal p-5 ticket-notch">
              <div className="font-grotesk text-[10px] tracking-[.3em] text-mustard">
                OORJA 2026 • FREE ADMIT
              </div>
              <div id="ticketId" className="font-display text-3xl tracking-widest mt-1">
                {ticket.id}
              </div>
              <div id="ticketDetail" className="text-sm text-ivory/70 mt-1">
                {ticket.text}
              </div>
            </div>
            <button
              onClick={() => {
                resetAndClose();
                onShowToast?.('Free pass details sent to your email!', 'success');
              }}
              className="btn btn-charcoal w-full py-3.5 mt-6 text-sm"
            >
              Done — See You At OORJA!
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
