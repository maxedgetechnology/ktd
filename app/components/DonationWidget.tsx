"use client";

import { useState } from "react";
import { Heart, ShieldCheck, Info } from "lucide-react";

export default function DonationWidget() {
  const [frequency, setFrequency] = useState<"one-time" | "monthly">("one-time");
  const [selectedAmount, setSelectedAmount] = useState<number>(50);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [allocation, setAllocation] = useState<string>("general");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const amounts = [25, 50, 100, 250];

  const handleAmountClick = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomChange = (val: string) => {
    setCustomAmount(val);
    setSelectedAmount(0);
  };

  const activeAmount = selectedAmount || parseFloat(customAmount) || 0;

  // Real-time calculation of impact based on amount
  const getImpactStatement = (amount: number) => {
    if (amount <= 0) return "Choose an amount to see how you will help protect young girls and support survivors.";
    if (amount < 25) return `Provides direct support towards printing multilingual safety posters in community safe spaces.`;
    if (amount >= 25 && amount < 50) return `Funds a set of educational workshop materials and multi-language warning posters for UK diaspora outreach.`;
    if (amount >= 50 && amount < 100) return `Supports grassroots awareness campaigns in Sierra Leone to educate local communities and advocate for zero tolerance.`;
    if (amount >= 100 && amount < 250) return `Provides professional survivor circle counseling space and refreshments for bi-weekly London support groups.`;
    return `Sponsors a comprehensive community-wide FGM abolition campaign and educational workshop to protect vulnerable girls.`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 4000);
  };

  return (
    <div id="donate-section" className="bg-white border border-brand-gray-border rounded-3xl p-6 shadow-xl relative overflow-hidden transition-all duration-300 hover:shadow-2xl">
      
      {/* Small top accent ribbon */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-terracotta via-gold to-terracotta" />

      {/* Widget Header (like Airbnb price header) */}
      <div className="flex items-baseline justify-between mb-6">
        <div>
          <span className="text-2xl font-extrabold text-zinc-900">Support KDLK</span>
          <span className="text-zinc-500 text-sm ml-1.5">/ impact direct</span>
        </div>
        <div className="text-terracotta flex items-center gap-1 text-xs font-bold uppercase tracking-wider bg-terracotta-light px-2.5 py-1 rounded-full">
          <Heart className="h-3 w-3 fill-terracotta" /> Secure
        </div>
      </div>

      {isSubmitted ? (
        <div className="py-12 text-center animate-in fade-in zoom-in-95 duration-300">
          <div className="h-16 w-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-3xl mb-4">
            ✓
          </div>
          <h3 className="text-lg font-bold text-zinc-900">Thank you for your support!</h3>
          <p className="text-sm text-zinc-600 mt-2 px-4">
            You are helping preserve West African heritage while keeping girls safe. 
            A mock secure transaction of <span className="font-bold text-terracotta">${activeAmount}</span> was initiated.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="mt-6 text-xs text-zinc-500 underline hover:text-zinc-800"
          >
            Make another contribution
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Frequency Selector tabs */}
          <div className="flex bg-zinc-100 p-1 rounded-xl">
            <button
              type="button"
              onClick={() => setFrequency("one-time")}
              className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                frequency === "one-time"
                  ? "bg-white text-zinc-900 shadow-sm"
                  : "text-zinc-500 hover:text-zinc-800"
              }`}
            >
              One-time
            </button>
            <button
              type="button"
              onClick={() => setFrequency("monthly")}
              className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                frequency === "monthly"
                  ? "bg-white text-zinc-900 shadow-sm"
                  : "text-zinc-500 hover:text-zinc-800"
              }`}
            >
              Monthly
            </button>
          </div>

          {/* Airbnb Form Block: Check-In/Check-Out Grid Style */}
          <div className="border border-brand-gray-border rounded-2xl overflow-hidden shadow-sm">
            {/* Top Grid Option: Allocation */}
            <div className="p-3 border-b border-brand-gray-border bg-zinc-50/50">
              <label className="block text-[10px] font-extrabold uppercase text-zinc-500 tracking-wider">
                Direct Donation For
              </label>
              <select
                value={allocation}
                onChange={(e) => setAllocation(e.target.value)}
                className="w-full bg-transparent border-0 p-0 text-sm font-semibold text-zinc-800 focus:ring-0 cursor-pointer mt-1 focus:outline-none"
              >
                <option value="general">General Support (Where Needed Most)</option>
                <option value="abolition">Zero Tolerance Advocacy</option>
                <option value="diaspora">Diaspora Outreach & Education</option>
                <option value="circles">Survivor Circles & Healing Groups</option>
              </select>
            </div>

            {/* Bottom Grid Option: Custom Amount or Preset Selected */}
            <div className="p-3 bg-white">
              <label className="block text-[10px] font-extrabold uppercase text-zinc-500 tracking-wider mb-2">
                Select Amount
              </label>
              <div className="grid grid-cols-4 gap-2 mb-2">
                {amounts.map((amount) => (
                  <button
                    key={amount}
                    type="button"
                    onClick={() => handleAmountClick(amount)}
                    className={`py-2 text-sm font-bold rounded-xl border transition-all cursor-pointer ${
                      selectedAmount === amount
                        ? "bg-terracotta text-white border-terracotta shadow-sm"
                        : "border-brand-gray-border hover:border-zinc-800 text-zinc-700 bg-white"
                    }`}
                  >
                    ${amount}
                  </button>
                ))}
              </div>
              <div className="relative mt-2">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 font-bold text-sm">$</span>
                <input
                  type="number"
                  placeholder="Custom amount"
                  value={customAmount}
                  onChange={(e) => handleCustomChange(e.target.value)}
                  className="w-full pl-7 pr-3 py-2 border border-brand-gray-border rounded-xl text-sm font-semibold text-zinc-800 focus:outline-none focus:border-zinc-800"
                  min="5"
                />
              </div>
            </div>
          </div>

          {/* Dynamic Impact Statement Section */}
          <div className="bg-brand-gray-light p-4 rounded-2xl border border-brand-gray-border flex items-start gap-3">
            <Info className="h-4.5 w-4.5 text-zinc-500 shrink-0 mt-0.5" />
            <div>
              <p className="text-[10px] font-extrabold text-zinc-500 uppercase tracking-widest">Tangible Impact</p>
              <p className="text-xs text-zinc-700 font-medium mt-1 leading-normal">
                {getImpactStatement(activeAmount)}
              </p>
            </div>
          </div>

          {/* Secure Donation Button (Airbnb gradient button) */}
          <button
            type="submit"
            disabled={activeAmount <= 0}
            className="w-full py-4.5 rounded-xl bg-gradient-to-r from-terracotta to-[#FF4A3B] text-white text-base font-bold shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-50 disabled:scale-100 disabled:pointer-events-none cursor-pointer"
          >
            Make a Secure Donation
          </button>

          {/* Under Button details (Airbnb style breakdown details) */}
          <div className="text-center space-y-2.5 pt-2">
            <p className="text-xs text-zinc-500 font-medium">
              100% of your contributions go directly toward community programs.
            </p>
            <div className="flex items-center justify-center gap-1.5 text-[11px] text-zinc-400 font-bold">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
              <span>SSL Encryption Enabled • Tax Deductible</span>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
