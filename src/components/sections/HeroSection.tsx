import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen md:h-[90vh] w-full bg-[#171717] text-white flex items-center overflow-hidden px-6 py-0 lg:px-20">
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:grid lg:grid-cols-2 gap-16 lg:gap-12 items-center mt-10 md:mt-20">
        
        {/* Left Content */}
        <div className="z-10 flex flex-col items-center text-center lg:items-start lg:text-left w-full mt-20 md:mt-0">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight">
            We help BAMS colleges <br className="hidden sm:block" />
            <span className="relative inline-block px-1 mt-1 lg:mt-0">
              
              {/* Animated 3-Stroke Highlight */}
              <div className="absolute inset-0 -z-10 h-full w-full">
                {/* Stroke 1: Left to Right */}
                <motion.span 
                  initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} 
                  transition={{ duration: 0.4, ease: "linear", delay: 0.2 }}
                  className="absolute top-[10%] left-0 w-full h-[40%] bg-primary origin-left rounded-md -rotate-1"
                ></motion.span>
                
                {/* Stroke 2: Right to Left */}
                <motion.span 
                  initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} 
                  transition={{ duration: 0.4, ease: "linear", delay: 0.45 }}
                  className="absolute top-[35%] right-0 w-[98%] h-[40%] bg-primary origin-right rounded-md rotate-1"
                ></motion.span>
                
                {/* Stroke 3: Left to Right */}
                <motion.span 
                  initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} 
                  transition={{ duration: 0.4, ease: "linear", delay: 0.7 }}
                  className="absolute bottom-[5%] left-0 w-[96%] h-[35%] bg-primary origin-left rounded-md -rotate-[0.5deg]"
                ></motion.span>
              </div>

              <span className="relative text-black">fill seats faster</span>
            </span>{" "}
            <br className="block sm:hidden" />
            with CareerKick
          </h1>

          <p className="mt-8 text-gray-300 text-base md:text-lg max-w-lg leading-relaxed">
            Strategy, NEET funnel marketing, and LMS automation built for Ayurveda colleges to convert enquiries into confirmed BAMS admissions.
          </p>

          <div className="mt-10 flex flex-col lg:flex-row items-center gap-4 w-full sm:w-[80%] lg:w-auto">
            <button className="w-[70vw] lg:w-auto bg-primary text-black font-bold py-4 lg:py-3 px-8 rounded-xl lg:rounded-lg hover:brightness-110 transition-colors">
              Book a demo
            </button>
            <button className="w-full lg:w-auto text-gray-300 hover:text-white transition-colors font-medium py-3">
              View case studies
            </button>
          </div>
        </div>

        {/* Right Side - Phone Mockup */}
        <div className="relative flex justify-center items-end h-[520px] md:h-[700px] w-full mt-0 md:mt-20 overflow-hidden">
          <div className="relative w-full h-full max-w-[400px] lg:max-w-[380px] translate-y-16 md:translate-y-28 lg:translate-y-32">
            {/* Your SVG Phone Frame */}
            <div 
              className="absolute inset-0 mx-auto h-full w-full pointer-events-none z-20 invert filter"
              style={{
              backgroundImage: `url("data:image/svg+xml;base64,PHN2ZwogICAgICB3aWR0aD0iNDIxIgogICAgICBoZWlnaHQ9Ijg1MiIKICAgICAgdmlld0JveD0iMCAwIDQyMSA4NTIiCiAgICAgIGZpbGw9Im5vbmUiCiAgICAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgID4KICAgICAgPHBhdGgKICAgICAgICBmaWxsLXJ1bGU9ImV2ZW5vZGQiCiAgICAgICAgY2xpcC1ydWxlPSJldmVub2RkIgogICAgICAgIGQ9Ik03MyAwSDM0OEMzODYuNjYgMCA0MTggMzEuMzQwMSA0MTggNzBWNzgyQzQxOCA4MjAuNjYgMzg2LjY2IDg1MiAzNDggODUySDczQzM0LjM0MDEgODUyIDMgODIwLjY2IDMgNzgyVjcwQzMgMzEuMzQwMSAzNC4zNDAxIDAgNzMgMFpNMzQ4IDZINzNDMzcuNjUzOCA2IDkgMzQuNjUzOCA5IDcwVjc4MkM5IDgxNy4zNDYgMzcuNjUzOCA4NDYgNzMgODQ2SDM0OEMzODMuMzQ2IDg0NiA0MTIgODE3LjM0NiA0MTIgNzgyVjcwQzQxMiAzNC42NTM4IDM4My4zNDYgNiAzNDggNloiCiAgICAgICAgZmlsbD0iYmxhY2siCiAgICAgIC8+CiAgICAgIDxyZWN0CiAgICAgICAgeD0iMzE4IgogICAgICAgIHdpZHRoPSIxMCIKICAgICAgICBoZWlnaHQ9IjYiCiAgICAgICAgZmlsbD0iYmxhY2siCiAgICAgICAgZmlsbC1vcGFjaXR5PSIwLjIiCiAgICAgIC8+CiAgICAgIDxyZWN0CiAgICAgICAgeD0iOTMiCiAgICAgICAgeT0iODQ2IgogICAgICAgIHdpZHRoPSIxMCIKICAgICAgICBoZWlnaHQ9IjYiCiAgICAgICAgZmlsbD0iYmxhY2siCiAgICAgICAgZmlsbC1vcGFjaXR5PSIwLjIiCiAgICAgIC8+CiAgICAgIDxyZWN0CiAgICAgICAgeD0iMyIKICAgICAgICB5PSI5MCIKICAgICAgICB3aWR0aD0iNiIKICAgICAgICBoZWlnaHQ9IjEwIgogICAgICAgIGZpbGw9ImJsYWNrIgogICAgICAgIGZpbGwtb3BhY2l0eT0iMC4yIgogICAgICAvPgogICAgICA8cmVjdAogICAgICAgIHg9IjQxMiIKICAgICAgICB5PSI5MCIKICAgICAgICB3aWR0aD0iNiIKICAgICAgICBoZWlnaHQ9IjEwIgogICAgICAgIGZpbGw9ImJsYWNrIgogICAgICAgIGZpbGwtb3BhY2l0eT0iMC4yIgogICAgICAvPgogICAgICA8cmVjdAogICAgICAgIHg9IjMiCiAgICAgICAgeT0iNzUyIgogICAgICAgIHdpZHRoPSI2IgogICAgICAgIGhlaWdodD0iMTAiCiAgICAgICAgZmlsbD0iYmxhY2siCiAgICAgICAgZmlsbC1vcGFjaXR5PSIwLjIiCiAgICAgIC8+CiAgICAgIDxyZWN0CiAgICAgICAgeD0iNDEyIgogICAgICAgIHk9Ijc1MiIKICAgICAgICB3aWR0aD0iNiIKICAgICAgICBoZWlnaHQ9IjEwIgogICAgICAgIGZpbGw9ImJsYWNrIgogICAgICAgIGZpbGwtb3BhY2l0eT0iMC4yIgogICAgICAvPgogICAgICA8cGF0aAogICAgICAgIGZpbGwtcnVsZT0iZXZlbm9kZCIKICAgICAgICBjbGlwLXJ1bGU9ImV2ZW5vZGQiCiAgICAgICAgZD0iTTQxNy45NzEgMjY2SDQxOC45ODFDNDIwLjA5NiAyNjYgNDIxIDI2Ni44OTUgNDIxIDI2OFYzNjRDNDIxIDM2NS4xMDUgNDIwLjA5NiAzNjYgNDE4Ljk4MSAzNjZINDE3Ljk3MVYyNjZaIgogICAgICAgIGZpbGw9ImJsYWNrIgogICAgICAvPgogICAgICA8cGF0aAogICAgICAgIGZpbGwtcnVsZT0iZXZlbm9kZCIKICAgICAgICBjbGlwLXJ1bGU9ImV2ZW5vZGQiCiAgICAgICAgZD0iTTAgMzAyQzAgMzAwLjg5NSAwLjkwNDAyIDMwMCAyLjAxOTE4IDMwMEgzLjAyODc4VjM2M0gyLjAxOTE4QzAuOTA0MDIgMzYzIDAgMzYyLjEwNSAwIDM2MVYzMDJaIgogICAgICAgIGZpbGw9ImJsYWNrIgogICAgICAvPgogICAgICA8cGF0aAogICAgICAgIGZpbGwtcnVsZT0iZXZlbm9kZCIKICAgICAgICBjbGlwLXJ1bGU9ImV2ZW5vZGQiCiAgICAgICAgZD0iTTAgMjIzQzAgMjIxLjg5NSAwLjkwNDAyIDIyMSAyLjAxOTE4IDIyMUgzLjAyODc4VjI4NEcyLjAxOTE4QzAuOTA0MDIgMjg0IDAgMjgzLjEwNSAwIDI4MlYyMjNaIgogICAgICAgIGZpbGw9ImJsYWNrIgogICAgICAvPgogICAgICA8cGF0aAogICAgICAgIGZpbGwtcnVsZT0iZXZlbm9kZCIKICAgICAgICBjbGlwLXJ1bGU9ImV2ZW5vZGQiCiAgICAgICAgZD0iTTAgMTYyQzAgMTYwLjg5NSAwLjkwNDAyIDE2MCAyLjAxOTE4IDE2MEgzLjAyODc4VjE5M0gyLjAxOTE4QzAuOTA0MDIgMTkzIDAgMTkyLjEwNSAwIDE5MVYxNjJaIgogICAgICAgIGZpbGw9ImJsYWNrIgogICAgICAvPgogICAgPC9zdmc+Cg==")`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            ></div>

            {/* Screen Content (Chat UI) */}
         {/* Screen Content (Single Image) */}
<div className="w-full max-w-[250px] lg:max-w-[320px] bg-[#262626] h-[520px] lg:h-[630px] rounded-[35px] lg:rounded-[45px] overflow-hidden shadow-2xl relative z-10 mt-1 md:mt-2 mx-auto">
  
  <img 
    src="/hero.png" 
    alt="App Preview"
    className="w-full h-full object-cover"
  />

</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;




// import React from 'react';
// import { motion } from 'framer-motion';

// const HeroSection = () => {
//   return (
//     <section className="relative min-h-screen md:h-[90vh] w-full bg-[#171717] text-white flex items-center overflow-hidden px-6 py-20 lg:py-0 lg:px-20">
//       <div className="max-w-7xl mx-auto w-full flex flex-col lg:grid lg:grid-cols-2 gap-16 lg:gap-12 items-center mt-10 md:mt-20">
        
//         {/* Left Content */}
//         <div className="z-10 flex flex-col items-center text-center lg:items-start lg:text-left w-full">
//           <h1 className="text-3xl sm:text-5xl md:text-5xl font-bold leading-tight tracking-tight">
//             We help BAMS colleges <br className="hidden sm:block" />
//             <span className="relative inline-block px-1 mt-1 lg:mt-0">
              
//               {/* Animated 3-Stroke Highlight */}
//               <div className="absolute inset-0 -z-10 h-full w-full">
//                 {/* Stroke 1: Left to Right */}
//                 <motion.span 
//                   initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} 
//                   transition={{ duration: 0.25, ease: "linear", delay: 0.2 }}
//                   className="absolute top-[5%] left-0 w-full h-[40%] bg-primary origin-left rounded-md -rotate-1"
//                 ></motion.span>
                
//                 {/* Stroke 2: Right to Left */}
//                 <motion.span 
//                   initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} 
//                   transition={{ duration: 0.25, ease: "linear", delay: 0.45 }}
//                   className="absolute top-[35%] right-0 w-[98%] h-[40%] bg-primary origin-right rounded-md rotate-1"
//                 ></motion.span>
                
//                 {/* Stroke 3: Left to Right */}
//                 <motion.span 
//                   initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} 
//                   transition={{ duration: 0.25, ease: "linear", delay: 0.7 }}
//                   className="absolute bottom-[5%] left-0 w-[96%] h-[35%] bg-primary origin-left rounded-md -rotate-[0.5deg]"
//                 ></motion.span>
//               </div>

//               <span className="relative text-black">fill seats faster</span>
//             </span>{" "}
//             <br className="block sm:hidden" />
//             with CareerKick
//           </h1>

//           <p className="mt-8 text-gray-300 text-base md:text-lg max-w-lg leading-relaxed">
//             Strategy, NEET funnel marketing, and LMS automation built for Ayurveda colleges to convert enquiries into confirmed BAMS admissions.
//           </p>

//           <div className="mt-10 flex flex-col lg:flex-row items-center gap-4 w-full sm:w-[80%] lg:w-auto">
//             <button className="w-[70vw] lg:w-auto bg-primary text-black font-bold py-4 lg:py-3 px-8 rounded-xl lg:rounded-lg hover:brightness-110 transition-colors">
//               Book a demo
//             </button>
//             <button className="w-full lg:w-auto text-gray-300 hover:text-white transition-colors font-medium py-3">
//               View case studies
//             </button>
//           </div>
//         </div>

//         {/* Right Side - Phone Mockup */}
//         <div className="relative flex justify-center items-end h-[520px] md:h-[700px] w-full mt-10 md:mt-20 overflow-hidden">
//           <div className="relative w-full h-full max-w-[400px] lg:max-w-[380px] translate-y-16 md:translate-y-28 lg:translate-y-32">
//             {/* Phone Frame */}
//             <div className="mx-auto h-full w-full max-w-[260px] lg:max-w-[350px] bg-white rounded-[38px] lg:rounded-[48px] shadow-2xl p-3 lg:p-2">
//               <div className="w-full h-full rounded-[30px] lg:rounded-[40px] overflow-hidden bg-neutral-100">
//                 <img
//                   src="/mobile.png"
//                   alt="mobile screen preview"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default HeroSection;

