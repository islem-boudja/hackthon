import React from "react";
import img from '@/public/Divider.svg'
import {AiOutlineInstagram} from 'react-icons/ai'
import {FiFacebook} from 'react-icons/fi'
import logo from '@/public/logo.svg'
const data = [{
    title : "about us",
    data : [{
        name : "about us",
        link : "/about-us"
    },{
        name : "terms",
        link : "/terms"
    },{
        name : "copyright",
        link : "/copyright"
    }]
} ,  {
title : "Community",
data : [{
    name : "Posts",
    link : "/posts"
},{
    name : "Questions",
    link : "/Questions"
},{
    name : "Contribute",
    link : "/contribute"
}]}, {
    title : "contact us",
    data : [{
        name : "contact us",
        link : "/contact-us"
    },{
        name : "support",
        link : "/support"
    },{
        name : "sponsorships",
        link : "/sponsorships"
    }]
}  ]
const Footer = () => {
    return (
        <div className="flex flex-col w-[100%] justify-center bg-[#011627] text-white pt-24">
            <div className="flex justify-around">
                <div className="flex items-start gap-[140px]">
                    {data.map((item,index) => {
                        return(<div className="flex flex-col gap-[16px]">
                        <p className="font-[700] text-[18px]">{item.title}</p>
                        <img src={img} alt="" />
                        <div className="font-[400] text-[15px] flex flex-col gap-[16px]">
                            {item.data.map((item,index) => {
                                return(<p>{item.name}</p>)
                            })}
                        </div>
                    </div>)
                    })}
                </div>
                <div className="flex flex-col gap-[16px]">
                        <img src={img} alt="" />
                        <div className="font-[400]text-[15px] flex gap-[16px]">
                            <AiOutlineInstagram className="text-[#41EAD4] text-[26px]"/>
                            <FiFacebook className="text-[#41EAD4] text-[26px]"/>
                        </div>
                    </div>
            </div>
            <div className="flex flex-col items-center justify-center mt-[65px]">
                <p className="font-[400] text-[12px]">Copyright © DataMAP 2024. All rights reserved.</p>
                <img src={logo} alt="" className="mt-[39px]"/>
            </div>
        </div>
    )
}
export default Footer;