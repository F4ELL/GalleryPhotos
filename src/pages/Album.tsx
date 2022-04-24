import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { basicAxios } from '../PlaceholderAPI'
import './Album.css'

export type TPhotoInfo = {
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
}

const Album = () => {

    const [ currentAlbum, setCurrentAlbum ] = useState<TPhotoInfo[]>([])

    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const getPhotos = async () => {
            const result = await basicAxios(`albums/${params.albumId}/photos`)

            setCurrentAlbum(result)
        }
        getPhotos()
    }, [])

    const handleBackButton = () => {
        navigate(-1)
    }

  return (
    <div>
        <div className='album--btn'>
            <button onClick={handleBackButton}>Voltar</button>
        </div>
        <div className='album--title'>
            <h2>ALOOOOOOOOOOO</h2>
        </div>
        <div className='album--container'>
            {currentAlbum.map((item, key) => (
                <div key={key} className='album--area'>
                    <Link to={`/photos/${item.id}`}>
                        <img src={item.thumbnailUrl} alt={item.title} className='album--image'/>
                    </Link>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Album