import Image from "next/image"
import DatasetTabs from "./DatasetTabs"
import { Button } from "./ui/button"
import FourthSection from "./FourthSection"
import VideoSection from "./VideoSection"
const ThirdSection = () => {
return (
    <div className=' relative third-section bg-body-bg'>
        <div className=' container flex flex-col gap-3 items-center'>
            <div className='flex justify-center gap-3 pt-10'>
            <h1 className=" font-bold text-xl text-center pt-1"> Explore Data</h1>
            <Image src={'/x.svg'}
            alt="Picture of the author"
            width={20}
            height={20}/>
            <p className=" text-sm">Our team has meticulously compiled a diverse collection of data sets for you to explore. <br />
Feel free to delve into each of them and uncover valuable insights across various domains.</p>
            </div>
            <div className="px-5 flex flex-col items-center gap-10">
                <DatasetTabs />
            </div>
        
    </div>
    <FourthSection />
    <VideoSection />
    </div>
)
}

export default ThirdSection
