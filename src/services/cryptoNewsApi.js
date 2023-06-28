import { createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoNewsHeader = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '3a2c9f5e70msh4fd22237ba94150p1b8d77jsn9bed91208b46',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com'

const createRequest =(url)=>({url,headers 
    :cryptoNewsHeader})

    export const cryptoNewsApi = createApi({
        reducerPath: 'crytpoNewsApi',
        baseQuery: fetchBaseQuery({baseUrl}),
        endpoints: (builder)=>({
            getCryptoNews: builder.query({
                query: ({newsCategory,count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
            })
            //we can now add as many endpoints as we need after this point , the rest of the code remains the same for all the endpoints
        })
    });


    export const {
        useGetCryptoNewsQuery,
    } = cryptoNewsApi;
    