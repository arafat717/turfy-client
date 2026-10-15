export default function TickerBar() {
  const tickerItems = [
    "5 ASIDE - 7 ASIDE - 11 ASIDE",
    "ALL TIME AVAILABILITY",
    "BOOK COURTS ONLINE",
    "CERTIFIED COACHES",
    "CITY TOURNAMENTS",
    "LIVE SCORE BOARDS",
  ];

  return (
    <div className="w-full overflow-hidden bg-[#9ecc00] py-3 text-neutral-900 font-black uppercase tracking-wider">
      {/* Inline Keyframes style tag */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          animation: marquee 80s linear infinite;
        }
      `}</style>

      <div className="flex w-max animate-infinite-scroll whitespace-nowrap hover:[animation-play-state:paused]">
        {[...tickerItems, ...tickerItems].map((item, index) => (
          <div key={index} className="flex items-center">
           <div className="mx-6 flex h-5 w-5 items-center justify-center rounded-full bg-white/20">
            <span className="h-2 w-2 rounded-full bg-white block" />
           </div>
            <span className="text-[20px] font-bold">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}