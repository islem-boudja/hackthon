"use client"
import { Button } from "./ui/button"
import { useRouter } from 'next/navigation'
const Custombutton = ({_id} : {_id : string | undefined}) => {
    const router = useRouter()
const HandleClick = () => {
    router.push(`/article/${_id}`);

}
return (
<Button className=" rounded-2xl bg-btn translate-x-3 w-[297px] z-10" onClick={HandleClick}>Click me</Button>
)
}

export default Custombutton
