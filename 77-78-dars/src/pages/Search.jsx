import React, { useEffect, useState } from 'react'
import useApi from '../hooks/useApi'
import Content from './Content'

const Search = () => {
  const [text, setText] = useState('')
  const {getApi, data, setPage, page} = useApi()
  useEffect(() =>{
    const getData = setTimeout(() => {
      getApi(`search/multi?query=${text}`)
    }, 1500);
    return() => clearTimeout(getData)
  }, [text])
  return (
    <div className='search container'>
      <input type="text" className='search-inp' value={text} onChange={(e)=>setText(e.target.value)} />
      <Content data={data}/>
    </div>
  )
}

export default Search