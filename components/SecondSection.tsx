import Image from "next/image"
import ArticleTabs from "./ArticleTabs"
const SecondSection = () => {

return (
    <div className=' second-section h-[100dvh] bg-body-bg relative z-10'>
        <div className=' container flex flex-col gap-3 items-center'>
            <div className='flex justify-center gap-3 pt-10'>
            <h1 className=" font-bold text-xl text-center pt-1"> Explore Our Articles</h1>
            <Image src={'/x.svg'}
            alt="Picture of the author"
            width={20}
            height={20}/>
            <p className=" text-sm">Our team has carefully curated a collection of informative articles for you to dive into. <br />
            Feel free to explore each of them and discover valuable insights on a variety of topics.</p>
            </div>
            <ArticleTabs />
            <div className="dot-container">
                <div className="dot first"></div>
                <div className="dot second"></div>
                <div className="dot third"></div>
                <div className="dot fourth"></div>
                <div className="dot fifth"></div>
                <div className="dot sixth"></div>
                <div className="dot seventh"></div>
                <div className="dot eighth"></div>
            </div>
        </div>
    </div>
)
}

export default SecondSection
