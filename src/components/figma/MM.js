import React from "react";

// Statistic Item Component
function StatisticItem({ value, suffix, description }) {
  return (
    <div className="flex relative flex-col flex-1 gap-2.5 items-start py-12 max-md:py-10 max-sm:py-8">
      <div className="relative w-full text-4xl font-bold tracking-tighter text-yellow-400 leading-[60px] max-md:text-3xl max-sm:text-2xl max-sm:tracking-tighter">
        <span className="text-white">{value}</span>
        <span className="text-yellow-400">{suffix}</span>
      </div>
      <p className="relative w-full text-lg tracking-tight leading-7 text-neutral-400 max-md:text-base max-sm:text-sm max-sm:tracking-tight">
        {description}
      </p>
    </div>
  );
}

// Statistics Section Component
function StatisticsSection() {
  const statistics = [
    { value: "300", suffix: "+", description: "Resources available" },
    { value: "12k", suffix: "+", description: "Total Downloads" },
    { value: "10k", suffix: "+", description: "Active Users" }
  ];

  return (
    <section className="flex relative gap-12 items-start pr-5 pl-40 w-full border border-neutral-800 max-md:gap-8 max-md:pl-20 max-sm:flex-col max-sm:gap-5 max-sm:px-5">
      {statistics.map((stat, index) => (
        <React.Fragment key={index}>
          <StatisticItem
            value={stat.value}
            suffix={stat.suffix}
            description={stat.description}
          />
          {index < statistics.length - 1 && (
            <div className="relative w-px bg-neutral-800 h-[197px] max-md:h-[157px] max-sm:w-full max-sm:h-px" />
          )}
        </React.Fragment>
      ))}
    </section>
  );
}

// Hero Section Component
function HeroSection() {
  return (
    <header className="flex relative flex-col gap-8 items-start px-40 w-full max-md:px-20 max-sm:gap-5 max-sm:px-5">
      <p className="relative text-3xl tracking-tighter leading-9 text-stone-500 max-md:text-2xl max-sm:text-xl max-sm:tracking-tight">
        Your Journey to Tomorrow Begins Here
      </p>
      <div className="flex relative flex-col gap-5 items-start w-full">
        <h1 className="relative w-full text-7xl tracking-tighter text-white leading-[84px] max-md:text-5xl max-md:tracking-tighter max-sm:text-3xl max-sm:tracking-tighter">
          Explore the Frontiers of Artificial Intelligence
        </h1>
        <p className="relative w-full text-lg tracking-tight leading-7 text-zinc-500 max-md:text-base max-sm:text-sm max-sm:tracking-tight">
          Welcome to the epicenter of AI innovation. FutureTech AI News is your passport
          to a world where machines think, learn, and reshape the future. Join us on this
          visionary expedition into the heart of AI.
        </p>
      </div>
    </header>
  );
}

// Main Page Component
function App() {
  return (
    <main className="flex relative flex-col flex-1 gap-24 items-start pt-36 max-md:gap-16 max-md:pt-24 max-sm:gap-10 max-sm:pt-16 min-h-screen bg-black text-white">
      <HeroSection />
      <StatisticsSection />
    </main>
  );
}

export default App;
