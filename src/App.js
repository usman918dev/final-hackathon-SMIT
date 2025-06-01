import React from "react";
import StatsSection from "./components/figma/M";

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
      <StatsSection />
    </main>
  );
}

export default App;

























// import React from 'react';

// const StatsSection = () => {
//   const handleNewsClick = () => {
//     console.log('News section clicked');
//   };

//   const handleExpertsClick = () => {
//     console.log('Experts section clicked');
//   };

//   const handleGlobalClick = () => {
//     console.log('Global section clicked');
//   };

//   const statsData = [
//     {
//       iconType: 'news',
//       title: 'Latest News Updates',
//       subtitle: 'Stay Current',
//       description: 'Over 1,000 articles published monthly',
//       onClick: handleNewsClick
//     },
//     {
//       iconType: 'experts',
//       title: 'Expert Contributors',
//       subtitle: 'Trusted Insights',
//       description: '50+ renowned AI experts on our team',
//       onClick: handleExpertsClick
//     },
//     {
//       iconType: 'global',
//       title: 'Global Readership',
//       subtitle: 'Worldwide Impact',
//       description: '2 million monthly readers',
//       onClick: handleGlobalClick
//     }
//   ];

//   return (
//     <section className="flex relative gap-20 items-start px-40 w-full border border-neutral-800 max-md:gap-10 max-md:px-20 max-sm:flex-col max-sm:gap-5 max-sm:px-5">
//       {statsData.map((stat, index) => (
//         <React.Fragment key={index}>
//           <StatCard
//             iconType={stat.iconType}
//             title={stat.title}
//             subtitle={stat.subtitle}
//             description={stat.description}
//             onButtonClick={stat.onClick}
//           />
//           {index < statsData.length - 1 && <Separator />}
//         </React.Fragment>
//       ))}
//     </section>
//   );
// };

// const StatCard = ({ iconType, title, subtitle, description, onButtonClick }) => {
//   return (
//     <article className="flex relative flex-col flex-1 gap-8 items-start py-12 rounded-xl max-md:py-10 max-sm:gap-5 max-sm:py-8">
//       <div className="flex relative flex-col gap-8 items-start w-full max-sm:gap-5">
//         <div>
//           <Icon type={iconType} className="w-[49.993px] max-sm:w-[40px] h-[50px] max-sm:h-[40px] relative" />
//         </div>
//         <div className="flex relative gap-5 items-center w-full max-sm:gap-4">
//           <div className="flex relative flex-col flex-1 gap-1 items-start">
//             <h3 className="relative w-full text-xl tracking-tight leading-8 text-white max-md:text-lg max-sm:text-base max-sm:tracking-tight">
//               {title}
//             </h3>
//             <p className="relative w-full text-lg tracking-tight leading-7 text-zinc-500 max-md:text-base max-sm:text-sm max-sm:tracking-tight">
//               {subtitle}
//             </p>
//           </div>
//           <ArrowButton onClick={onButtonClick} />
//         </div>
//       </div>
//       <p className="relative w-full text-xl tracking-tight leading-8 text-neutral-400 max-md:text-lg max-sm:text-base max-sm:tracking-tight">
//         {description}
//       </p>
//     </article>
//   );
// };

// const Separator = () => {
//   return (
//     <div className="relative w-px bg-neutral-800 h-[301px] max-md:h-[241px] max-sm:w-full max-sm:h-px" />
//   );
// };

// const ArrowButton = ({ onClick, className = "" }) => {
//   return (
//     <button
//       onClick={onClick}
//       className={`flex relative gap-2.5 items-start p-3.5 bg-yellow-400 rounded-[100px] max-sm:p-3 ${className}`}
//       aria-label="Learn more"
//     >
//       <svg
//         width="25"
//         height="25"
//         viewBox="0 0 25 25"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//         className="w-[24px] max-sm:w-[20px] h-[24px] max-sm:h-[20px] relative"
//       >
//         <path
//           fillRule="evenodd"
//           clipRule="evenodd"
//           d="M8.58325 4.25L19.8333 4.25C20.0322 4.25 20.2229 4.32902 20.3636 4.46967C20.5042 4.61032 20.5833 4.80109 20.5833 5V16.25C20.5833 16.6642 20.2475 17 19.8333 17C19.419 17 19.0833 16.6642 19.0833 16.25V6.81066L5.36358 20.5303C5.07069 20.8232 4.59582 20.8232 4.30292 20.5303C4.01003 20.2374 4.01003 19.7626 4.30292 19.4697L18.0226 5.75L8.58325 5.75C8.16904 5.75 7.83325 5.41421 7.83325 5C7.83325 4.58579 8.16904 4.25 8.58325 4.25Z"
//           fill="#141414"
//         />
//       </svg>
//     </button>
//   );
// };

// const Icon = ({ type, className = "" }) => {
//   const icons = {
//     news: (
//       <svg
//         width="50"
//         height="50"
//         viewBox="0 0 50 50"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//         className={className}
//       >
//         <path d="M28.9275 34.4167H21.1219V50H28.9275V34.4167Z" fill="#FFD11A" />
//         <path d="M28.9275 0H21.1219V15.5833H28.9275V0Z" fill="#FFD11A" />
//         <path d="M34.4097 21.0945V28.9001H49.993V21.0945H34.4097Z" fill="#FFD11A" />
//         <path d="M0 21.1016L0 28.9072H15.5833V21.1016H0Z" fill="#FFD11A" />
//         <path d="M34.4245 28.8769L28.9052 34.3962L39.9241 45.4151L45.4434 39.8958L34.4245 28.8769Z" fill="#404040" />
//         <path d="M10.0906 4.54558L4.57129 10.0649L15.5903 21.0839L21.1096 15.5646L10.0906 4.54558Z" fill="#404040" />
//         <path d="M28.886 15.5885L34.4053 21.1078L45.4243 10.0888L39.9049 4.56949L28.886 15.5885Z" fill="#404040" />
//         <path d="M4.55724 39.9197L10.0765 45.439L21.0955 34.4201L15.5762 28.9008L4.55724 39.9197Z" fill="#404040" />
//       </svg>
//     ),
//     experts: (
//       <svg
//         width="51"
//         height="50"
//         viewBox="0 0 51 50"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//         className={className}
//       >
//         <path d="M25.3335 35C25.3335 40.5228 29.8106 45 35.3335 45C40.8563 45 45.3335 40.5228 45.3335 35C45.3335 29.4772 40.8563 25 35.3335 25H25.3335V35Z" fill="#FFD11A" />
//         <path d="M25.3335 15C25.3335 9.47715 20.8563 5 15.3335 5C9.81065 5 5.3335 9.47715 5.3335 15C5.3335 20.5228 9.81065 25 15.3335 25H25.3335V15Z" fill="#FFD11A" />
//         <path fillRule="evenodd" clipRule="evenodd" d="M35.3335 5C29.8106 5 25.3335 9.47715 25.3335 15V25H35.3335C40.8563 25 45.3335 20.5228 45.3335 15C45.3335 9.47715 40.8563 5 35.3335 5ZM40.3335 15C40.3335 17.7614 38.0949 20 35.3335 20C32.5721 20 30.3335 17.7614 30.3335 15C30.3335 12.2386 32.5721 10 35.3335 10C38.0949 10 40.3335 12.2386 40.3335 15Z" fill="#404040" />
//         <path fillRule="evenodd" clipRule="evenodd" d="M15.3335 45C20.8563 45 25.3335 40.5228 25.3335 35V25H15.3335C9.81065 25 5.3335 29.4772 5.3335 35C5.3335 40.5228 9.81065 45 15.3335 45ZM20.3335 35C20.3335 37.7614 18.0949 40 15.3335 40C12.5721 40 10.3335 37.7614 10.3335 35C10.3335 32.2386 12.5721 30 15.3335 30C18.0949 30 20.3335 32.2386 20.3335 35Z" fill="#404040" />
//       </svg>
//     ),
//     global: (
//       <svg
//         width="50"
//         height="50"
//         viewBox="0 0 50 50"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//         className={className}
//       >
//         <circle cx="25" cy="25" r="25" fill="#FFD11A" />
//         <path d="M25 12C28.866 12 32 18.268 32 25C32 31.732 28.866 38 25 38C21.134 38 18 31.732 18 25C18 18.268 21.134 12 25 12Z" fill="#404040" />
//         <path d="M12 25H38" stroke="#404040" strokeWidth="2" />
//         <path d="M25 12V38" stroke="#404040" strokeWidth="2" />
//       </svg>
//     )
//   };

//   return icons[type] || null;
// };

// export default StatsSection;
