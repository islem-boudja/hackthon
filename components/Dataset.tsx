import { DatasetT } from "@/Types"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import CustomdatasetButton from "./CustomdatasetButton"
const Dataset = ( {key , data} : {key :  string , data : DatasetT}) => {
return (
    <div className=' border-2 rounded-3xl  border-secondary-font mx-5 min-h-[220px] px-5 flex-1 pb-5 relative'>
        <div className="flex  justify-between py-5">
            <h1 className="text-xl font-bold ">{data.title}</h1>
            <Avatar>
<AvatarImage src={data.authorImage} />
<AvatarFallback>CN</AvatarFallback>
</Avatar>
        </div>
        <div className=" flex flex-col pb-20">
            <p className=' text-secondary-font text-sm font-semibold pb-1'>Uploaded By {data.authorTitle} </p>
            <p >Usability : {data.usability} </p>
            <p>Uploaded on {data.dateModified[0]}</p>
        </div>
        <CustomdatasetButton _id={data._id} />
    </div>
)
}

export default Dataset
