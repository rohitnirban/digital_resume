import React from 'react'

const Tech = () => {
    return (
        <>
            <div className='h-auto mx-2 p-2'>
                <div className="text-2xl font-[700]">Tech Stuff</div>
                <div className='flex flex-wrap justify-between items-center py-6 gap-3'>
                    <p className='border border-[#2b3031] text-[#adb0b1] text-sm p-2 rounded'>HTML, CSS, JavaScript, Node.js</p>
                    <p className='border border-[#2b3031] text-[#adb0b1] text-sm p-2 rounded'>React.js, Bootstrap, Tailwind CSS</p>
                    <p className='border border-[#2b3031] text-[#adb0b1] text-sm p-2 rounded'>Express, RestFull API, MongoDB</p>
                    <p className='border border-[#2b3031] text-[#adb0b1] text-sm p-2 rounded'>Vercel, Heroku, Netlify</p>
                </div>
            </div>
        </>
    )
}

export default Tech