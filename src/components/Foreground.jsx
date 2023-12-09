/* eslint-disable react/jsx-key */
import React from 'react'
import Card from './Card'
import { useRef } from 'react'

const Foreground = () => {

        const ref = useRef();
        const data = [
        {
            desc: "This is React using vite creating card for display",
            filesize: ".9mb",
            close: true,
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" }
        },
        {
            desc: "lore Is not working for paragraph.",
            filesize: ".8mb",
            close: false,
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" }
        },
        {
            desc: "React and vite creating card for display",
            filesize: ".4mb",
            close: true,
            tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" }
        }
    ]
    return (
            <div ref={ref} className=" z-[3] fixed top-0 left-0 w-full h-full flex gap-6 p-5 flex-wrap">

              {data.map((item, index)=>(
                <Card data={item} reference={ref} />
              ))}
            </div>
    )
}

export default Foreground
