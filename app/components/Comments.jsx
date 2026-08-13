"use client";

import { motion } from "framer-motion";

const comments = [
  {
    name: "Trading Master",
    country: "UZ",
    text: "EkvatorProp bilan trading qilish juda qulay. Shartlari aniq va payout jarayoni yaxshi.",
    rating: 5,
  },
  {
    name: "Alex Trader",
    country: "US",
    text: "One of the best prop firms I have tried. Challenge conditions are fair.",
    rating: 5,
  },
  {
    name: "Ronaldo",
    country: "ET",
    text: "Please add MT5 platform 😭 Overall the prop firm is very good.",
    rating: 5,
  },
  {
    name: "Shuhrat Abdullayev",
    country: "UZ",
    text: "GOOD PROP FIRM. Conditions are simple and comfortable for traders.",
    rating: 5,
  },
  {
    name: "Forex King",
    country: "UK",
    text: "Fast support and clear trading rules. I really like EkvatorProp.",
    rating: 5,
  },
  {
    name: "Muhammad",
    country: "UZ",
    text: "Challenge oldim va juda yaxshi tajriba bo'ldi. Risk management shartlari yaxshi.",
    rating: 5,
  },
  {
    name: "Daniel",
    country: "DE",
    text: "Very clean platform and professional support. Definitely worth trying.",
    rating: 5,
  },
  {
    name: "Bekzod Trader",
    country: "UZ",
    text: "Payout oldim, hammasi muammosiz o'tdi. EkvatorProp menga yoqdi.",
    rating: 5,
  },
  {
    name: "Smart Trader",
    country: "CA",
    text: "The rules are easy to understand and the pricing is competitive.",
    rating: 4,
  },
  {
    name: "CryptoBoy",
    country: "UZ",
    text: "Trading conditions are excellent. Support team responds quickly.",
    rating: 5,
  },
  {
    name: "Michael",
    country: "AU",
    text: "Good prop firm for both new and experienced traders. Recommended.",
    rating: 5,
  },
  {
    name: "Javohir",
    country: "UZ",
    text: "EkvatorProp challenge juda yaxshi. Profit target ham normal.",
    rating: 5,
  },
  {
    name: "Trader X",
    country: "TR",
    text: "I like the simple dashboard and transparent rules. Great experience.",
    rating: 5,
  },
  {
    name: "Sardor",
    country: "UZ",
    text: "Support juda tez javob beradi. Trading uchun yaxshi prop firma.",
    rating: 5,
  },
  {
    name: "David",
    country: "UK",
    text: "Passed my challenge and received my first payout. Great service!",
    rating: 5,
  },
  {
    name: "Nasir",
    country: "AE",
    text: "Very good spreads and comfortable trading conditions.",
    rating: 4,
  },
  {
    name: "Akmal",
    country: "UZ",
    text: "Challenge narxlari yaxshi, qoidalari ham juda tushunarli.",
    rating: 5,
  },
  {
    name: "Forex Hunter",
    country: "IN",
    text: "EkvatorProp is becoming one of my favorite prop firms.",
    rating: 5,
  },
  {
    name: "Otabek",
    country: "UZ",
    text: "Payout va support bo'yicha hozircha juda yaxshi tajriba.",
    rating: 5,
  },
  {
    name: "Trader Pro",
    country: "US",
    text: "Solid prop firm with fair rules and a nice trading environment.",
    rating: 5,
  },
];

function Stars({ rating }) {
  return (
    <div className="flex items-center gap-1 ">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`flex h-7 w-7 items-center justify-center rounded-md text-sm ${
            star <= rating
              ? "bg-indigo-500 text-white"
              : "bg-indigo-600 text-zinc-500"
          }`}
        >
          ★
        </span>
      ))}
    </div>
  );
}

function CommentCard({ comment }) {
  return (
    <div className="w-[380px] shrink-0 rounded-2xl border border-indigo-500/20 from-indigo-600 via-indigo-900 to-indigo-700 opacity-90 p-7 shadow-[0_0_30px_rgba(99,102,241,0.06)]">
      <Stars rating={comment.rating} />

      <p className="mt-6 min-h-[72px] text-lg font-semibold leading-7 text-white">
        {comment.text}
      </p>

      <div className="mt-7 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 font-bold text-white">
            {comment.name.charAt(0)}
          </div>

          <div>
            <p className="font-medium text-zinc-200">
              {comment.name}
            </p>

            <p className="text-sm uppercase text-zinc-500">
              {comment.country}
            </p>
          </div>
        </div>

        <span className="text-sm text-indigo-400">
          EkvatorProp
        </span>
      </div>
    </div>
  );
}

export default function Comments() {
  // Ikki marta render qilish seamless infinite animation uchun.
  const duplicatedComments = [...comments, ...comments];

  return (
    <section className="w-full overflow-hidden from-indigo-600 via-indigo-900 to-indigo-700 opacity-90 py-10">
      {/* Header */}
      <div className="mb-8 flex items-center justify-center gap-3">
        <div className="flex gap-1">
          <span className="text-2xl text-indigo-500">★</span>
          <span className="text-2xl text-indigo-500">★</span>
          <span className="text-2xl text-indigo-500">★</span>
          <span className="text-2xl text-indigo-400">★</span>
          <span className="text-2xl text-zinc-700">★</span>
        </div>

        <span className="text-xl font-bold text-white">
          4.7
        </span>

        <span className="text-zinc-500">
          / 5 · 120 reviews
        </span>

        <span className="ml-2 text-indigo-500">★</span>

        <span className="font-semibold text-zinc-300">
          EkvatorProp
        </span>
      </div>

      {/* Carousel */}
      <div className="relative">
        {/* chap/o'ng tomondagi gradient */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32  " />

        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 " />

        <motion.div
          className="flex w-max gap-6"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            x: {
              duration: 70,
              repeat: Infinity,
              ease: "linear",
            },
          }}
          whileHover={{
            animationPlayState: "paused",
          }}
        >
          {duplicatedComments.map((comment, index) => (
            <CommentCard
              key={`${comment.name}-${index}`}
              comment={comment}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}