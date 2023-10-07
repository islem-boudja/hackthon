import React from "react";
import imge from '../public/img.svg'
const RelatedArticlesCard = ({title="title",description="this is a description"}) => {
    return(
        <div className="flex items-center rounded-[10px] gap-[21px] border border-[#41EAD4] border-solid pl-[20px] ]">
            <div className="flex flex-col gap-[27px] py-[35px]">
                <h1 className="text-white text-[18px] font-[600] tracking-[-0.4px] w-[80%]">{title}</h1>
                <p>{description}</p>
            </div>
            <div className="">
                <img src={imge} alt="" className=" rounded-r-[10px]  object-cover"/>
            </div>
        </div>
    )
}
export default RelatedArticlesCard;