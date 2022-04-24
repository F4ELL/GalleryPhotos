import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { basicAxios } from '../PlaceholderAPI'
import { TPhotoInfo } from './Album'
import './Photos.css'

const Photos = () => {

    const [ photo, setPhoto ] = useState<TPhotoInfo>()

    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const getPhotoInfo = async () => {
            const result = await basicAxios(`photos/${params.photoId}`)

            setPhoto(result)
            console.log(result)            
        }
        getPhotoInfo()
    }, [])

    const handleBackButton = () => {
        navigate(-1)
    }

  return (
    <div>
        <div className='photo--btn'>
            <button onClick={handleBackButton}>Voltar</button>
        </div>
        <div className='photo--title'>
            <h2>{photo?.title}</h2>
        </div>
        <div className='photo--area'>
            <img src={photo?.url} alt={photo?.title} />
        </div>
    </div>
  )
}

export default Photos