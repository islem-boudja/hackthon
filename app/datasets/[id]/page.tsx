import { DatasetT } from "@/Types";
import { GetDatasetByid } from "@/api";
import ArticlePageTitles from "@/components/Title";
import Link from "next/link";
export default async function Page({ params }: { params: {_id: string } }) {
    const data : DatasetT  = await GetDatasetByid(params._id);
    console.log(data);
    return (  
        <div className=" mt-10">
            <div className="flex gap-3 text-[24px] font-[500] mb-[10px] text-secondary-font">
            Posted by {data?.authorTitle} on {data?.dateModified}  
            </div>
            <ArticlePageTitles title={data?.title}/>
            <div className=" font-medium mx-20 leading-7">
            {data?.description}
            <p className=" py-10 text-3xl font-semibold">Data Links</p>
            <div className=" flex mt-3">
                <div className=" flex flex-col flex-1">
                    
                    <div className=" flex flex-col gap-3">
                    {data?.datasetsDescription.map((des) => (
                        <p>{des}</p>
                    ))}
                    </div>
                </div>
                <div className=" flex flex-col flex-1">
                    <div className=" flex flex-col gap-3">
                    {data?.dataLinks.map((link) => (
                        <Link href={link} className=" rounded-2xl bg-btn translate-x-3 w-fit px-3 h-7">
                            Go to
                        </Link>
                    ))}
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}


// export default function Page() {
//     return (
//         <>
//             hello world
//         </>
//     );
// }
