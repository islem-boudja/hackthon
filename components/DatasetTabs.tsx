import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Dataset from "./Dataset"
import { GetPopularDatasets } from "@/api"
import { DatasetT } from "@/Types";
const DatasetTabs = async () => {
    const datasets : Array<DatasetT> = await GetPopularDatasets();
    const data1 = datasets.splice(0,3);
    const data2 = datasets.splice(0,3);
return (
<Tabs defaultValue="Trending Datasets" className=" mt-6 z-10">
<TabsList className=" flex items-center mb-12">
    <TabsTrigger value="Trending Datasets">Trending Datasets</TabsTrigger>
    <TabsTrigger value="Latest Datasets">Latest Datasets</TabsTrigger>

</TabsList>
    <TabsContent value="Trending Datasets">
        <div className="flex justify-between w-full lg:flex-row sm:flex-col sm:gap-4">
            {data1.map((dataset : DatasetT , index) => (
                <Dataset key={dataset._id} data={dataset}/>
            ))}
        </div>
    </TabsContent>
    <TabsContent value="Latest Datasets">
        <div className="flex justify-between w-full lg:flex-row sm:flex-col sm:gap-4 data-grid">
        {data2.map((dataset) => (
                <Dataset key={dataset._id} data={dataset}/>
            ))}
        </div>
    </TabsContent>

</Tabs>
)
}

export default DatasetTabs
