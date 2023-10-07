"use client"
import { Button } from "./ui/button"
import { useRouter } from 'next/navigation'
const Custombutton = ({_id} : {_id : string | undefined}) => {
    const router = useRouter()
const HandleClick = () => {
    router.push(`/datasets/${_id}`);

}
return (
<Button className=" absolute rounded-2xl bg-btn  w-[297px] z-10 bottom-3 left-1/2 -translate-x-1/2" onClick={HandleClick}>explore</Button>
)
}

export default Custombutton
