import Image from "next/image"

const FourthSection = () => {
return (
<div className=' fourth-section bg-body-bg pb-5'>
<div className='container flex flex-col gap-10 items-center '>
            <div className='flex justify-center gap-3 pt-10 mb-24 '>
            <h1 className=" font-bold text-xl text-center pt-1">Resources</h1>
            <Image src={'/x.svg'}
            alt="Picture of the author"
            width={20}
            height={20}/>
            <p className=" text-sm">Here are the sources that we've curated, including datasets from NASA, Kaggle, and Data.gov...  <br />
Feel free to explore each of them to access valuable data across a wide range of topics.</p>
            </div>
            <Image src={'/logos.svg'} width={800} height={350} alt="" style={{zIndex : 10}} />

            </div>
    </div>
)
}

export default FourthSection
