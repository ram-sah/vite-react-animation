/* eslint-disable react/prop-types */
import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { AiOutlineDownload } from "react-icons/ai";
import { IoCloseOutline } from "react-icons/io5";
import { motion } from "framer-motion"
const Card = ({ data,reference }) => {
    return (

        <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragElastic={1} className=' flex-shrink-0 relative w-60 h-72 bg-zinc-900/90 text-white rounded-[40px] px-8 py-10 overflow-hidden '>
            <FaFileAlt />
            <p className=' text-sm mt-8 font-semibold leading-tight'>{data.desc} </p>
            <div className="footer absolute bottom-0 w-full left-0 ">
                <div className=' flex item-center justify-between mb-3  px-8 py-3'>
                    <h5>{data.filesize} </h5>
                    <span className=' w-7 h-7 justify-center rounded-full bg-zinc-600 flex items-center '>
                        {data.close ? <IoCloseOutline /> : <AiOutlineDownload size='.8em' color='#fff' /> }

                    </span>
                </div>
                {data.tag.isOpen ? <div className={`tag w-full ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} py-3 flex justify-center items-center`} >
                    <h3 className=' text-sm font-semibold'>{data.tag.tagTitle}</h3>
                </div>
                 : null }

            </div>
        </motion.div>
    )
}
export default Card
