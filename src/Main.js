import React from 'react'
import Links from './Links'
import Profile from './Profile'
import Projects from './Projects'
import Skills from './Skills'
import Tech from './Tech'

const Main = () => {
    return (
        <>
            <div className='bg-[#131415] max-w-2xl mx-auto text-white h-auto'>
                <Profile />
                <Links />
                <Skills />
                <Tech />
                <Projects />
            </div>
        </>
    )
}

export default Main