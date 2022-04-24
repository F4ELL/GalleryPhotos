import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { basicAxios } from '../PlaceholderAPI'
import './Home.css'

type TAlbum = {
    userId: number,
    id: number,
    title: string
}

const Home = () => {

    const [ albumsList, setAlbumsList ] = useState<TAlbum[]>([])

    useEffect(() => {
        const getList = async () => {
            const result = await basicAxios('albums')

            setAlbumsList(result)            
        }         
        getList()
    }, [])

  return (
    <div className='albumsList--area'>
        {albumsList.map((item, key) => (
            <div key={key} className='albumsList--item'>
                <Link to={`/albums/${item.id}`} className='albumsList--title'>{item.title}</Link>
            </div>
        ))}
    </div>
  )
}

export default Home