"use client";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const rules = [
  {
    title: "Follow All Trading Conditions",
    text: "All provided trading rules and conditions must be strictly followed. Any violation of the stated rules will result in account termination.",
  },
  {
    title: "No Trading During News Events",
    text: "Opening or closing trades during high-impact news events is strictly prohibited.",
  },
  {
    title: "Risk Limit Per Trade",
    text: "Risking more than 1% of the account balance in a single trade is not allowed.",
  },
  {
    title: "No Martingale Strategy",
    text: "The use of martingale or grid-based strategies is strictly forbidden.",
  },
  {
    title: "No Account Flipping (Aggressive Trading)",
    text: "Aggressive account growth strategies or rapid account flipping are not permitted.",
  },
  {
    title: "No Hedging",
    text: "Opening buy and sell positions simultaneously on the same instrument is not allowed.",
  },
  {
    title: "Consistent Trading Required",
    text: "Traders must maintain consistent and disciplined trading behavior at all times.",
  },
  {
    title: "No Weekend Trade Carryover",
    text: "Trades must not be held or carried over from one trading week to another.",
  },
  {
    title: "News Time Protection Rule",
    text: "All positions must be closed at least 15 minutes before a news event and may only be reopened 15 minutes after the news release.",
  },
];

export default function Page() {
  return (
    <>
      <Navbar />

      <section className="w-full bg-gradient-to-b from-indigo-600 to-indigo-700 text-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center text-4xl md:text-5xl font-bold mb-14"
          >
            Trading Rules
          </motion.h1>

          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.12 },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {rules.map((rule, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
                className="rounded-xl bg-white/10 backdrop-blur-md border border-white/15 p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-500 font-semibold">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      {rule.title}
                    </h3>
                    <p className="text-sm text-white/80 leading-relaxed">
                      {rule.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
