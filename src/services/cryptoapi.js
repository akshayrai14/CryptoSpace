import { createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
    'X-RapidAPI-Key': '3a2c9f5e70msh4fd22237ba94150p1b8d77jsn9bed91208b46',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';


//this will add /coins to the url so that the api endpoint changes ,it also needs header so we make a function to add that

const createRequest =(url)=>({url,headers 
:cryptoApiHeaders})

export const cryptoapi = createApi({
    reducerPath: 'crytpoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder)=>({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`)
        }),
        getCryptoHistory: builder.query({
            query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
        }),
        //we can now add as many endpoints as we need after this point , the rest of the code remains the same for all the endpoints
    })
});


export const {
    useGetCryptosQuery,useGetCryptoDetailsQuery,
    useGetCryptoHistoryQuery,
} = cryptoapi;
