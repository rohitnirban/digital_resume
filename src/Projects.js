import React from 'react'

const Projects = () => {
    return (
        <>
            <div className='py-10 mx-2 p-2'>
                <div className="text-2xl font-[700]">Projects & Accomplishments</div>
                <ul className="list-none py-6">
                    <li className='border-t border-[#2b3031] py-4 my-2 hover:text-blue-600 duration-500'>
                        <a href="https://www.github.com/rohitnirban" target="_blank" rel="noreferrer">🏆 Built a URL Shortner with qr code generation and tracking links .</a>
                    </li>
                    <li className='border-t border-[#2b3031] py-4 my-2 hover:text-blue-600 duration-500'>
                        <a href="https://www.github.com/rohitnirban" target="_blank" rel="noreferrer">🏆 Documentation website - Lead team to re-build docs for agora.io</a>
                    </li>
                    <li className='border-t border-[#2b3031] py-4 my-2 hover:text-blue-600 duration-500'>
                        <a href="https://www.github.com/rohitnirban" target="_blank" rel="noreferrer">🏆 Ecommerce platform using paytm for payment integration</a>
                    </li>
                    <li className='border-t border-[#2b3031] py-4 my-2 hover:text-blue-600 duration-500'>
                        <a href="https://www.github.com/rohitnirban" target="_blank" rel="noreferrer">🏆 Social Network - open source project</a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Projects