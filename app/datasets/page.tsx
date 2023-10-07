import { DatasetT } from "@/Types";
import { GetallDatasets } from "@/api"
import Dataset from "@/components/Dataset"
const page = async () => {
  const data : Array<DatasetT> =  await GetallDatasets();

  return (
    <div className=" pt-20">
      <p className=" text-6xl font-bold pl-10">DATA SETS :</p>
        {data?.map((dataset : DatasetT) => (
          <div className=" py-10">
            <Dataset key={dataset._id} data={dataset} />
            </div>
        ))}
    </div>
  )
}

export default page
