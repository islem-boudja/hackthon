import axios from 'axios';
const api = "https://simultaneousseveralcgi.aceiny.repl.co"
export const GetPopularArticles = async () => {
    const response = await axios.get(
        api+'/api/v1/articles?limit=4',
    );
    return response.data.Article;
    }

    export const GetPopularDatasets = async () => {
        const response = await axios.get(
            api+'/api/v1/datasets?limit=6',
        );
        return response.data.datasets;
        }
    
    export const GetArticleByid = async (_id : string) => {
        const response = await axios.get(
        api+'/api/v1/articles/'+ _id,
        );
        console.log(response.data.article);
        return response.data.article;
        }
        export const GetDatasetByid = async (_id : string) => {
            const response = await axios.get(
            api+'/api/v1/datasets/'+_id,
            );
            
            return response.data.Dataset;
            }
        
            export const GetallDatasets = async () => {
                const response = await axios.get(
                api+'/api/v1/datasets',
                );
                
                return response.data.datasets;
                }




                export const GetallArticles = async () => {
                    const response = await axios.get(
                    api+'/api/v1/articles',
                    );
                    console.log(response.data.Article); 
                    return response.data.Article;
                    }