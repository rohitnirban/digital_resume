import React from 'react'
import rohit from './images/rohit.jpg'

const Profile = () => {
    return (
        <>
            <div className='text-white flex-col justify-around items-center text-center mb-10 mx-2 p-2'>
                <div className="py-10">
                    <img src={rohit} alt="Rohit" className='w-56 sm:w-64 rounded-full mx-auto' />
                </div>
                <div className="right">
                    <div className="text-5xl font-[700] ">Rohit Yadav</div>
                    <div className="text-[#adb0b1] text-base my-4"><span className='text-blue-600'>Full Stack Web Developer</span> passionate about creating innovative web solutions also stay up-to-date with the <span className='text-blue-600'>latest technologies</span> and leverage my skills to build <span className='text-blue-600'>robust web applications</span></div>
                    <a href="https://www.royad.ga" className="hover:text-blue-600 duration-500">👉 royad.ga</a>
                </div>
            </div>
        </>
    )
}

export default Profile