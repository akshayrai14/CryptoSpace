import React, { useState } from 'react'
import { Typography,Select,Row,Col,Avatar,Card } from 'antd'
import moment from 'moment/moment'
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'
import { useGetCryptosQuery } from '../services/cryptoapi'
useGetCryptosQuery
const { Text,Title} = Typography;
const {Option}=Select;
const demoimgurl="https://images.yourstory.com/cs/121/19c095909df611ec900713db340225f3/DS12-1655796073110.png?w=1152&fm=auto&ar=2:1&mode=crop&crop=faces"

function News({simplified}) {
  
  const [newsCategory,setnewsCategory] = useState('Cryptocurrency');
  const { data} = useGetCryptosQuery(100);
  const { data: cryptoNews}=useGetCryptoNewsQuery({newsCategory,count: simplified ? 6 : 12})
  if(!cryptoNews?.value)return 'Loading...';
  return (
    <Row gutter={[24,24]}>
      {!simplified && (
        <Col span={24}>
          <Select 
              showSearch
              className='select-news'
              placeholder="Select a Crypto"
              optionFilterProp='children'
              onChange={(value)=>setnewsCategory(value)}
              filterOption={(input,option)=>option.children.toLowerCase().indexOf(input.toLowerCase()) > 0}
              ><Option value='Cryptocurrency'>Cryptocurrency</Option>
              {data?.data?.coins.map((coin)=> <Option value={coin.name}>{coin.name}</Option>)}
              </Select>
        </Col>
      )

      }
      {
        cryptoNews.value.map((news,i)=>(
          <Col xs={24} sm={12} lg={8} key={i}>
            <Card hoverable className='news-card'>
              <a href={news.url} target="_blank" rel="noreferrer">
                <div className='news-image-container'>
                  <Title className='news-title' level={4}>{news.name}</Title>
                  <img 
                  style={{maxWidth:'200px',maxHeight:'100px'}}
                  src={news?.image?.thumbnail?.contentUrl || demoimgurl} alt='news'/>
                </div>
                <p>{news.description >100 ? `${news.description.substring(0,100)}...` : news.description}</p>
                <div className='provider-container'>
                  <div>
                    <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoimgurl} alt='news'/>
                    <Text className='provider-namee'>{news.provider[0].name}</Text>
                  </div>
                  <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
                </div>
              </a>
            </Card>
          </Col>
        ))
      }
    </Row>
  )
}

export default News
