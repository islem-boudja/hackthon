import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const Card = ({name , skills} : {name :string , skills : string }) => {
return (
    <div className=' border-2 rounded-3xl  border-secondary-font mx-5 min-h-[180px] px-5 w-60'>
        <div className="flex  justify-between py-5">
            <h1 className="text-xl font-bold ">{name}</h1>
            <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
        </div>
        <div className="">

            <p className='text-sm pb-1'>{skills}</p>
        </div>

    </div>
)
}

export default Card
