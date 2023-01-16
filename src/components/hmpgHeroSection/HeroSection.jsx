import React from 'react';
import background from './background.svg'
import illustration from './illustration.svg'

const HeroSec = () => {
return(
<div data-testid="HeroSec" className='bg-cover bg-no-repeat top-0 h-screen flex items-center' style={{backgroundImage:`url(${background})`}}>
    <div className='flex flex-row sm:flex-col-reverse mx-36 justify-evenly lg:mx-10'>  
        <div className='flex-col mt-10'>
            <p className='text-6xl lg:text-4xl sm:text-2xl text-slate-800'>
                WE ARE HERE TO
            </p>
            <p className='text-8xl lg:text-6xl sm:text-4xl sm:ml-16'>
                HELP
            </p>
            <button
                type="button"
                    className="mt-10 sm:ml-8 text-center rounded-md transition duration-250 flex items-center justify-center h-1/4 w-1/2 bg-[#2DD3E3] hover:bg-cyan-500">
                <p className="mx-28 text-2xl lg:text-lg sm:text-lg flex text-center uppercase">
                    book an appointment
                </p>
            </button>
        </div>
        <img className='flex laptop:w-1/2 laptop:ml-32 lg:w-2/5 sm:ml-14 sm:w-1/2' src={illustration} alt='illustration' />
    </div>  
</div>

)
}

export default HeroSec;