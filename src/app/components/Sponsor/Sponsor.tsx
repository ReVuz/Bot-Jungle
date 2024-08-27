import React from 'react'
import { GlareCard } from './glare-card'

const Sponsor = () => {
  return (
     <div className="relative z-20 py-8 lg:py-8 max-w-7xl mx-auto" id="sponsors">
      <div className="px-8 mt-8 mb-16">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-white">
          Sponsors
        </h4>

        <p className="text-sm lg:text-base  max-w-3xl  my-4 mx-auto text-center font-normal text-neutral-300">
          Each sponsors are the backbone of the event. They help us to make the event successful.
        </p>
      </div>
<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 mt-8">
  <GlareCard className="flex flex-col items-center justify-center">
    <p className="text-white font-bold text-xl md:text-4xl">IEEE</p>
  </GlareCard>
  <GlareCard className="flex flex-col items-center justify-center">
    <p className="text-white font-bold text-xl md:text-4xl">Inker Robotics</p>
  </GlareCard>
  <GlareCard className="flex flex-col items-center justify-center">
    <p className="text-white font-bold text-xl md:text-4xl">Alstom</p>
  </GlareCard>
</div>
</div>
  )
}

export default Sponsor