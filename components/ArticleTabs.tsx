import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { GetPopularArticles } from "@/api"
import { ArticleT } from "@/Types"
import Article from "./Article"
const ArticleTabs = async () => {
    try {
    const articles: ArticleT[] | null = await GetPopularArticles();


    if (Array.isArray(articles)) {
        return (
        <Tabs defaultValue="Italy Sea Level Rise Insights" className="mt-5 z-10">
            <TabsList className="flex items-center">
            {articles.map((article) => (
                <TabsTrigger value={article.title} key={article._id}>
                {article.title}
                </TabsTrigger>
            ))}
            </TabsList>
            {articles.map((article) => (
            <TabsContent value={article.title} key={article._id}>
                <div className='flex pt-10 gap-3'>
                <div className='image-container w-1/2 h-[400px]'>
                <img src="/article.png" alt="Picture of the author" className=' h-[400px] z-10' />
                </div>
                <Article article={article} />
                </div>
            </TabsContent>
            ))}
        </Tabs>
        );
    } else {

        return <p>No articles available.</p>;
    }
    } catch (error) {
      // Handle any errors from GetPopularArticles() here
    console.error("Error fetching articles:", error);
    return <p>Error fetching articles.</p>;
    }
};

export default ArticleTabs;