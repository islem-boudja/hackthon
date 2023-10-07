
import Image from "next/image"
import Card from "./Card"

const AboutUs = () => {
return (
    <div>
        <div className='flex justify-center gap-3 pt-10'>
            <h1 className=" font-bold text-xl text-center pt-1">About Us</h1>
            <Image src={'/x.svg'}
            alt="Picture of the author"
            width={20}
            height={20}/>
            <p className=" text-sm">Coding enthusiasts from ESTIN, we're passionate computer science students <br />
on a mission to provide valuable data insights and foster a vibrant data community</p>
            </div>
            <div className=" flex w-full flex-col px-28">
            <div className=" flex w-full justify-center mt-10">
                <Card name="abderaouf zakhref" skills=" flutter developer , Ui Ux & Graphics designer" />
                <Card name="abderaouf zakhref" skills="flutter developer , back-end Developer" />
                <Card name="abderaouf zakhref" skills="flutter developer , Ui Ux & Graphics designe" />
            </div>
            <div className=" flex  justify-center mt-5">
                <Card name="abderaouf zakhref" skills="flutter developer , Ui Ux & Graphics designe" />
                <Card name="abderaouf zakhref" skills="flutter developer , Ui Ux & Graphics designe" />
            </div>
            </div>

    </div>
)
}

export default AboutUs
