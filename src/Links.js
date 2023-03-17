import React from 'react'
import resume from './assets/resume.pdf'

const Links = () => {
    return (
        <div className='flex flex-wrap justify-around items-center mx-2 p-2'>
            <a href="https://www.linkedin.com/in/rohitnirban" target = "_blank" className='text-sm text-[#adb0b1] hover:text-blue-600 duration-500 m-2 sm:m-0' rel="noreferrer">Linkedin</a>
            <a href="https://www.github.com/rohitnirban" target = "_blank" className='text-sm text-[#adb0b1] hover:text-blue-600 duration-500 m-2 sm:m-0' rel="noreferrer">Github</a>
            <a href={resume} target = "_blank" className='text-sm text-[#adb0b1] hover:text-blue-600 duration-500 m-2 sm:m-0' rel="noreferrer">Download Resume</a>
        </div>
    )
}

export default Links
