import react from "react";

const ArticlePageTitles = ({title = "this is a title"}) => {
    return (
        <div className="border-b border-[#41EAD4] border-solid pb-[12px] px-[12px] mb-[59px]">
            <p className="font-[600] text-[50px] tracking-[-1px]">{title}</p>
        </div>
    )
}
export default ArticlePageTitles;