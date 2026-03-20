import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen md:h-[90vh] w-full bg-[#171717] text-white flex items-center overflow-hidden px-6 py-20 lg:py-0 lg:px-20">
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:grid lg:grid-cols-2 gap-16 lg:gap-12 items-center mt-10  md:mt-20">
        
        {/* Left Content */}
        <div className="z-10 flex flex-col items-center text-center lg:items-start lg:text-left w-full">
          <h1 className="text-3xl sm:text-5xl md:text-5xl font-bold leading-tight tracking-tight">
            Your favourite <br className="hidden sm:block" />
            <span className="relative inline-block px-1 mt-1 lg:mt-0">
              
              {/* Animated 3-Stroke Highlight */}
              <div className="absolute inset-0 -z-10 h-full w-full">
                {/* Stroke 1: Left to Right */}
                <motion.span 
                  initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} 
                  transition={{ duration: 0.25, ease: "linear", delay: 0.2 }}
                  className="absolute top-[5%] left-0 w-full h-[40%] bg-[#EAB308] origin-left rounded-md -rotate-1"
                ></motion.span>
                
                {/* Stroke 2: Right to Left */}
                <motion.span 
                  initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} 
                  transition={{ duration: 0.25, ease: "linear", delay: 0.45 }}
                  className="absolute top-[35%] right-0 w-[98%] h-[40%] bg-[#EAB308] origin-right rounded-md rotate-1"
                ></motion.span>
                
                {/* Stroke 3: Left to Right */}
                <motion.span 
                  initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} 
                  transition={{ duration: 0.25, ease: "linear", delay: 0.7 }}
                  className="absolute bottom-[5%] left-0 w-[96%] h-[35%] bg-[#EAB308] origin-left rounded-md -rotate-[0.5deg]"
                ></motion.span>
              </div>

              <span className="relative text-black">productivity tool</span>
            </span>{" "}
            <br className="block sm:hidden" />
            is now <br />
            <span className="relative inline-block mt-1 lg:mt-0">
              available for mobile
              
              {/* Animated Hand-drawn underline SVG */}
              <svg className="absolute -bottom-2 lg:-bottom-3 left-0 w-full h-3 text-[#EAB308]" viewBox="0 0 300 12" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path 
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 1 }} // Delays until 3 strokes finish
                  d="M2 10C50 3 150 3 298 10" 
                  stroke="currentColor" 
                  strokeWidth="4" 
                  strokeLinecap="round" 
                />
              </svg>
            </span>
          </h1>

          <p className="mt-8 text-gray-400 text-base md:text-lg max-w-lg leading-relaxed">
            Aceternity AI bring you the best productivity tools for your desktop, now available on mobile. 
            Download the app now to avail additional <span className="text-gray-200 border-b border-[#EAB308]">20% discount</span> and take your productivity to the next level.
          </p>

          <div className="mt-10 flex flex-col lg:flex-row items-center gap-4 w-full sm:w-[80%] lg:w-auto">
            <button className="w-[70vw] lg:w-auto bg-[#EAB308] text-black font-bold py-4 lg:py-3 px-8 rounded-xl lg:rounded-lg hover:bg-yellow-500 transition-colors">
              Get the app
            </button>
            <button className="w-full lg:w-auto text-gray-300 hover:text-white transition-colors font-medium py-3">
              Read changelog
            </button>
          </div>
        </div>

        {/* Right Side - Phone Mockup */}
        <div className="relative flex justify-center items-end h-[520px] md:h-[700px] w-full mt-10 md:mt-20 overflow-hidden">
          <div className="relative w-full h-full max-w-[340px] lg:max-w-[380px] translate-y-16 md:translate-y-28 lg:translate-y-32">
            {/* Your SVG Phone Frame */}
            <div 
              className="absolute inset-0 mx-auto h-full w-full pointer-events-none z-20 invert filter"
              style={{
               backgroundImage: `url("data:image/svg+xml;base64,IDxzdmcKICAgICAgd2lkdGg9IjQyMSIKICAgICAgaGVpZ2h0PSI4NTIiCiAgICAgIHZpZXdCb3g9IjAgMCA0MjEgODUyIgogICAgICBmaWxsPSJub25lIgogICAgICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgICA+CiAgICAgIDxwYXRoCiAgICAgICAgZmlsbC1ydWxlPSJldmVub2RkIgogICAgICAgIGNsaXAtcnVsZT0iZXZlbm9kZCIKICAgICAgICBkPSJNNzMgMEgzNDhDMzg2LjY2IDAgNDE4IDMxLjM0MDEgNDE4IDcwVjc4MkM0MTggODIwLjY2IDM4Ni42NiA4NTIgMzQ4IDg1Mkg3M0MzNC4zNDAxIDg1MiAzIDgyMC42NiAzIDc4MlY3MEMzIDMxLjM0MDEgMzQuMzQwMSAwIDczIDBaTTM0OCA2SDczQzM3LjY1MzggNiA5IDM0LjY1MzggOSA3MFY3ODJDOSA4MTcuMzQ2IDM3LjY1MzggODQ2IDczIDg0NkgzNDhDMzgzLjM0NiA4NDYgNDEyIDgxNy4zNDYgNDEyIDc4MlY3MEM0MTIgMzQuNjUzOCAzODMuMzQ2IDYgMzQ4IDZaIgogICAgICAgIGZpbGw9ImJsYWNrIgogICAgICAvPgogICAgICA8cmVjdAogICAgICAgIHg9IjMxOCIKICAgICAgICB3aWR0aD0iMTAiCiAgICAgICAgaGVpZ2h0PSI2IgogICAgICAgIGZpbGw9ImJsYWNrIgogICAgICAgIGZpbGwtb3BhY2l0eT0iMC4yIgogICAgICAvPgogICAgICA8cmVjdAogICAgICAgIHg9IjkzIgogICAgICAgIHk9Ijg0NiIKICAgICAgICB3aWR0aD0iMTAiCiAgICAgICAgaGVpZ2h0PSI2IgogICAgICAgIGZpbGw9ImJsYWNrIgogICAgICAgIGZpbGwtb3BhY2l0eT0iMC4yIgogICAgICAvPgogICAgICA8cmVjdAogICAgICAgIHg9IjMiCiAgICAgICAgeT0iOTAiCiAgICAgICAgd2lkdGg9IjYiCiAgICAgICAgaGVpZ2h0PSIxMCIKICAgICAgICBmaWxsPSJibGFjayIKICAgICAgICBmaWxsLW9wYWNpdHk9IjAuMiIKICAgICAgLz4KICAgICAgPHJlY3QKICAgICAgICB4PSI0MTIiCiAgICAgICAgeT0iOTAiCiAgICAgICAgd2lkdGg9IjYiCiAgICAgICAgaGVpZ2h0PSIxMCIKICAgICAgICBmaWxsPSJibGFjayIKICAgICAgICBmaWxsLW9wYWNpdHk9IjAuMiIKICAgICAgLz4KICAgICAgPHJlY3QKICAgICAgICB4PSIzIgogICAgICAgIHk9Ijc1MiIKICAgICAgICB3aWR0aD0iNiIKICAgICAgICBoZWlnaHQ9IjEwIgogICAgICAgIGZpbGw9ImJsYWNrIgogICAgICAgIGZpbGwtb3BhY2l0eT0iMC4yIgogICAgICAvPgogICAgICA8cmVjdAogICAgICAgIHg9IjQxMiIKICAgICAgICB5PSI3NTIiCiAgICAgICAgd2lkdGg9IjYiCiAgICAgICAgaGVpZ2h0PSIxMCIKICAgICAgICBmaWxsPSJibGFjayIKICAgICAgICBmaWxsLW9wYWNpdHk9IjAuMiIKICAgICAgLz4KICAgICAgPHBhdGgKICAgICAgICBmaWxsLXJ1bGU9ImV2ZW5vZGQiCiAgICAgICAgY2xpcC1ydWxlPSJldmVub2RkIgogICAgICAgIGQ9Ik00MTcuOTcxIDI2Nkg0MTguOTgxQzQyMC4wOTYgMjY2IDQyMSAyNjYuODk1IDQyMSAyNjhWMzY0QzQyMSAzNjUuMTA1IDQyMC4wOTYgMzY2IDQxOC45ODEgMzY2SDQxNy45NzFWMjY2WiIKICAgICAgICBmaWxsPSJibGFjayIKICAgICAgLz4KICAgICAgPHBhdGgKICAgICAgICBmaWxsLXJ1bGU9ImV2ZW5vZGQiCiAgICAgICAgY2xpcC1ydWxlPSJldmVub2RkIgogICAgICAgIGQ9Ik0wIDMwMkMwIDMwMC44OTUgMC45MDQwMiAzMDAgMi4wMTkxOCAzMDBIMy4wMjg3OFYzNjNIMi4wMTkxOEMwLjkwNDAyIDM2MyAwIDM2Mi4xMDUgMCAzNjFWMzAyWiIKICAgICAgICBmaWxsPSJibGFjayIKICAgICAgLz4KICAgICAgPHBhdGgKICAgICAgICBmaWxsLXJ1bGU9ImV2ZW5vZGQiCiAgICAgICAgY2xpcC1ydWxlPSJldmVub2RkIgogICAgICAgIGQ9Ik0wIDIyM0MwIDIyMS44OTUgMC45MDQwMiAyMjEgMi4wMTkxOCAyMjFIMy4wMjg3OFYyODRHMi4wMTkxOEMwLjkwNDAyIDI4NCAwIDI4My4xMDUgMCAyODJWMjIzWiIKICAgICAgICBmaWxsPSJibGFjayIKICAgICAgLz4KICAgICAgPHBhdGgKICAgICAgICBmaWxsLXJ1bGU9ImV2ZW5vZGQiCiAgICAgICAgY2xpcC1ydWxlPSJldmVub2RkIgogICAgICAgIGQ9Ik0wIDE2MkMwIDE2MC44OTUgMC45MDQwMiAxNjAgMi4wMTkxOCAxNjBIMy4wMjg3OFYxOTNIMi4wMTkxOEMwLjkwNDAyIDE5MyAwIDE5Mi4xMDUgMCAxOTFWMTYyWiIKICAgICAgICBmaWxsPSJibGFjayIKICAgICAgLz4KICAgICAgPHJlY3QKICAgICAgICB4PSIxNTAiCiAgICAgICAgeT0iMzAiCiAgICAgICAgd2lkdGg9IjEyMCIKICAgICAgICBoZWlnaHQ9IjM1IgogICAgICAgIHJ4PSIxNy41IgogICAgICAgIGZpbGw9ImJsYWNrIgogICAgICAvPgogICAgICA8cmVjdAogICAgICAgIHg9IjI0NCIKICAgICAgICB5PSI0MSIKICAgICAgICB3aWR0aD0iMTMiCiAgICAgICAgaGVpZ2h0PSIxMyIKICAgICAgICByeD0iNi41IgogICAgICAgIGZpbGw9ImJsYWNrIgogICAgICAgIGZpbGwtb3BhY2l0eT0iMC4xIgogICAgICAvPgogICAgPC9zdmc+")`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            ></div>

            {/* Screen Content (Chat UI) */}
            <div className="w-full max-w-[290px] lg:max-w-[320px] bg-[#262626] h-[520px] lg:h-[630px] rounded-[35px] lg:rounded-[45px] overflow-hidden p-5 flex flex-col gap-4 shadow-2xl relative z-10 mt-2 mx-auto">
            
            <div className="bg-[#3b3b3b] p-3 rounded-xl rounded-tl-sm text-sm text-gray-200 self-start max-w-[85%] leading-snug">
              Hey! Please show me my latest images from my latest trip.
            </div>
            
            <div className="bg-[#3b3b3b] p-3 rounded-xl rounded-tl-sm text-sm text-gray-200 self-start max-w-[85%] leading-snug">
              Sure, here are the latest images from your trip to the island of deez nuts.
            </div>
            
            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-2 mt-2">
              <div className="h-28 lg:h-32 bg-blue-900 rounded-lg overflow-hidden">
                <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=300" alt="trip 1" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="h-28 lg:h-32 bg-green-900 rounded-lg overflow-hidden">
                <img src="https://images.unsplash.com/photo-1471922694854-ff1b63b20054?auto=format&fit=crop&w=300" alt="trip 2" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="h-28 lg:h-32 bg-orange-900 rounded-lg overflow-hidden">
                <img src="https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=300" alt="trip 3" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="h-28 lg:h-32 bg-teal-900 rounded-lg overflow-hidden">
                <img src="https://images.unsplash.com/photo-1506929113679-b62dec3efb3e?auto=format&fit=crop&w=300" alt="trip 4" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
            </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
