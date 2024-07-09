"use client"

import {useRef,useEffect} from 'react';
import gsap,{Power4} from 'gsap';
function Loading(){
    //   let loading_screen = useRef(null)
  let logo_1 = useRef(null)
  let logo_2 = useRef(null)
  let logo_3 = useRef(null)
  let logo_4 = useRef(null)
  let logo_5 = useRef(null)
  let logo_6 = useRef(null)
  const timeline = gsap.timeline()
  useEffect(()=>{
    timeline.from(logo_1,{
      opacity:0,
      duration:.5,
      skewX:10,
      y:-200,
      ease:Power4.easeInOut,
    });
    timeline.from(logo_2,{
      opacity:0,
      duration:.5,
      skewX:10,
      x:200,
      ease:Power4.easeInOut,
    }, "-=.2");
     timeline.from(logo_3,{
      opacity:0,
      duration: .5,
      skewX:10,
      y:200,
      ease:Power4.easeInOut,
    }, "-=.2");
     timeline.from(logo_4,{
      opacity:0,
      duration: .5,
      skewX:10,
      x:-200,
      ease:Power4.easeInOut,
    }, "-=.2");
     timeline.from(logo_5,{
      opacity:0,
      duration: .5,
      skewX:10,
      y:-200,
      ease:Power4.easeInOut,
    }, "-=.2");
     timeline.from(logo_6,{
      opacity:0,
      duration: .5,
      skewX:10,
      x:200,
      ease:Power4.easeInOut,
    }, "-=.2");
    timeline.from(logo_2,{
      delay:0.1,
      duration:0.5,
      opacity:0,
      ease:Power4.easeInOut,
      x:-200
    });
    timeline.to(logo_5,{
      duration: .5,
      opacity:0,
      ease:Power4.easeInOut,
      x:300,
    },"-=.2");
        timeline.to(logo_3,{
      duration: .5,
      opacity:0,
      ease:Power4.easeInOut,
      x:-300,
    },"-=.2");
        timeline.to(logo_6,{
      duration: .5,
      opacity:0,
      ease:Power4.easeInOut,
      x:300,
    },"-=.2");
        timeline.to(logo_4,{
      duration: .5,
      opacity:0,
      ease:Power4.easeInOut,
      x:-300,
    },"-=.2");
    timeline.to(logo_1,{
      fontSize:"2vmax",
      ease:Power4.easeInOut
    })
  }
  )
  return (
     <div className='text-[#e7e7e7] uppercase'>
      {/* ref={(el) => (loading_screen = el)} */}
      <div className='fixed top-0 left-0 h-screen w-full z-50 bg-[#101010]'>
        <div>
          <div className='flex absolute items-center justify-center w-full h-screen'>
            <div ref={(el) => (logo_1 = el)} className='font-semibold text-[#e7e7e7] text-[6vmax] md:text-[10.1vmax] mix-blend-difference leading-none'>
              BOT JUNGLE
            </div>
          </div>
          <div className='flex absolute items-center justify-center w-full h-screen'>
            <div ref={(el) => (logo_2 = el)} className='font-semibold text-[#01ff01] text-[6.1vmax] md:text-[10.2vmax] mix-blend-difference leading-none'>
              BOT JUNGLE
            </div>
          </div><div className='flex absolute items-center justify-center w-full h-screen'>
            <div ref={(el) => (logo_3 = el)} className='font-semibold text-[#fc1f1f] text-[6.2vmax] md:text-[10.3vmax] mix-blend-difference leading-none'>
              BOT JUNGLE
            </div>
          </div><div className='flex absolute items-center justify-center w-full h-screen'>
            <div ref={(el) => (logo_4 = el)} className='font-semibold text-[#8cf7f7] text-[6.3vmax] md:text-[10.4vmax] mix-blend-difference leading-none'>
              BOT JUNGLE
            </div>
          </div><div className='flex absolute items-center justify-center w-full h-screen'>
            <div ref={(el) => (logo_5 = el)} className='font-semibold text-[#4254f8] text-[6.4vmax] md:text-[10.5vmax] mix-blend-difference leading-none'>
              BOT JUNGLE
            </div>
          </div><div className='flex absolute items-center justify-center w-full h-screen'>
            <div ref={(el) => (logo_6 = el)} className='font-semibold text-[#ac00ac] text-[6.5vmax] md:text-[10.6vmax] mix-blend-difference leading-none'>
              BOT JUNGLE
            </div>
          </div>
        </div>
      </div>
     </div>
  )
}
export default Loading