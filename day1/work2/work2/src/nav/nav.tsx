import React from 'react'

export default function nav() {
  return (
    <div>
         <div className='flex bg-bgcol1 relative z-10 bg-opacity-50 rounded-md text-white  md:px-8 flex-col font-font1 sm:flex-row sm:justify-between items-center text-center justify-center py-2 max-w-[1240px] mx-auto'>
            <h1 className='flex justify-center items-center text-[25px]'>
                trillitech</h1>
            <ul className='flex flex-col sm:flex-row justify-between items-center sm:justify-center gap-1 md:gap-6 text-[13px] sm: uppercase'>
                <li>Expertise</li>
                <li>Projects</li>
                <li>Team</li>
                <li>Careers</li>
                <li>Insights</li>
                <li>contact </li>
            </ul>
        </div>
    </div>
  )
}
