import { Button } from "./ui/button"
import Image from 'next/image'
import {CiSearch} from 'react-icons/ci'
import Typepipe from "./TypePipe"

const MainSection = () => {
return (
    <div className=" main-section flex flex-col  h-[100dvh] relative">
    <div className=" flex justify-end mt-4 container">
        <CiSearch className=" text-white text-2xl h-full mr-2" />
        <Button className=" rounded-2xl bg-btn">Sign In</Button>
    </div>

    <div className=" flex flex-col justify-center items-center mt-10 translate-y-1/2 ">
        <Image src={'/logo.svg'} height={400} width={400} alt="" />
        <h4 className=" text-2xl font-semibold pt-3 text-white h-5"><Typepipe fulltext="Unlock the Power of Data for a Brighter Future"/></h4>
        <p className=" text-xl font-medium text-center pt-6 text-white">At DATA MAP, we believe that data has the potential to drive positive 
                <br /> change in our world. Our mission is to empower individuals, organizations, 
                <br />and communities to harness the full potential of data for societal benefit.</p>
                
    </div>
    </div>
)
}

export default MainSection
