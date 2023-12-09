import React from 'react'

const Background = () => {
    return (
        <>
            <div className=' fixed w-full h-screen z-[2]'>
                <h1 className=' text-[10vw] leading-none tracking-tighter absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 font-semibold'>Hello</h1>
                <div className=" absolute top-[5%] w-full py-10 flex justify-center text-zinc-400 font-semibold text-xl ">Hello There to move these cards just drag them them</div>

            </div>
        </>
    )
}

export default Background
