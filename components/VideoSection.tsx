import Image from 'next/image'
import { Button } from './ui/button'
import TypePipe from './TypePipe';
const VideoSection = () => {
return (

<div className="flex flex-col  h-[90dvh] relative">
<div className='flex justify-center gap-3 pt-10 z-10'>
            <h1 className=" font-bold text-xl text-center pt-1"> Explore Data</h1>
            <Image src={'/x.svg'}
            alt="Picture of the author"
            width={20}
            height={20}/>
            <p className=" text-sm">Our team has meticulously compiled a diverse collection of data sets for you to explore. <br />
Feel free to delve into each of them and uncover valuable insights across various domains.</p>
            </div>
    <div className=" flex flex-col justify-center items-center mt-10 translate-y-1/2 ">
        <h4 className=" text-2xl font-semibold pt-3 text-white h-5 z-10"><TypePipe fulltext="FOR MORE DATA CHECK OUR COMMUNITY"/></h4>
        
    </div>
    <div className=' flex justify-center items-center'>
    <Button className=" rounded-2xl bg-btn  w-[297px]  mt-20 z-10 ">Join Us</Button>
    </div>
    </div>
);
};


export default VideoSection
