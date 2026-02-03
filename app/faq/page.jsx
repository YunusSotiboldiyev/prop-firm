"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import { ChevronDown } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const faqs = [
  { question: "Is real money required?", answer: "No.At The Prop, traders never deposit real money. All accounts are simulated (demo) and used only to evaluate trading skills." },
  { question: "How does payout work?", answer: "Traders must pass the challenge evaluation.There are no minimum or maximum trading day requirements.A consistency rule applies — trading must be stable and controlled.Profits can be withdrawn after 21 trading days." },
  { question: "What are the risk limits?", answer: `Strict risk rules apply:1-Step Challenge Daily Loss: 3% Max Loss: 7% 2-Step Challenge Daily Loss: 4% Max Loss: 10% Funded Account Daily Loss: 2% Max Loss: 4% Any risk rule violation results in account termination.` },
  { question: "Which strategies are prohibited?", answer: "The following are strictly prohibited:High-Frequency Trading (HFT) Arbitrage Latency abuse Bots, exploits, or system manipulationCritical rule:Any trade closed in less than 1 minute is not allowed." },
  { question: "Can I trade during news events?", answer: "Trading is not allowed 15 minutes before and 15 minutes after major economic news.News trading is strongly discouraged due to:High volatilitySpread widening and slippageIncreased riskStable, low-risk trading is recommended." },
  { question: "Which trading platforms are supported?", answer: " Coming soon: MT5 All trades are executed using real market data." },
  { question: "Profit split & payout timing", answer: "Profit Split: Up to 80% First 21 payouts: 80%, depending on account type Payouts:Available every 14 trading days Processed within a maximum of 12 hours" },
  { question: "Copy trading & maximum capital", answer: "Copy trading & maximum capital Copy trading is not allowed, including: Account-to-account copying Signal services Third-party account management" },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <>
      <Navbar />

      <section className="w-full bg-gradient-to-b from-indigo-600 to-indigo-700 text-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center text-4xl md:text-5xl font-bold mb-12"
          >
            FAQ
          </motion.h2>

          <div className="space-y-2">
            {faqs.map((item, index) => (
              <div key={index} className="border-b border-white/10">
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full flex items-center justify-between py-6 text-left"
                >
                  <span className="text-base md:text-lg font-medium">
                    {item.question}
                  </span>

                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* <ChevronDown className="w-5 h-5" />Z^ */}🔽
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-sm md:text-base text-white/70">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
