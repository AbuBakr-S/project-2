import React from 'react'
import { useParams } from 'react-router-dom'

import Rover from '../assets/curiosity-rover.jpeg'
import CameraCard from './CameraCard'
import { getAllPhotos } from '../lib/api'


function Main() {
  const [allPhotos, setAllPhotos] = React.useState(null)
  const { day } = useParams()

  // * Fetch Data when the url changes
  React.useEffect(() => {
    // Get photos
    const getData = async () => {
      try {
        const res = await getAllPhotos(day)
        setAllPhotos(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [day])

  // * Get an array of sorted images
  const getImages = (camera) => {
    if (allPhotos) {
      let num = 0
      return (
        allPhotos.photos.filter((photo) => {
          if (photo.camera.name === camera && num < 100) {
            num += 1
            return photo.camera.name === camera
          }
        })
      )
    }
  }
  return (
    <>
      <h1 className="title is-1 has-text-centered">Curiosity</h1>
      <img className="rover image is-1x1" src={Rover} />
      <div className="camera-container columns">
        <div className="column camera-cards">
          <div className="camera">
            <h4 className='title is-4 has-text-centered'>FHAZ</h4>
            <CameraCard
              imgArray={allPhotos ? getImages('FHAZ') : []}
            />
          </div>
          <div className="camera">
            <h4 className='title is-4 has-text-centered'>RHAZ</h4>
            <CameraCard
              imgArray={allPhotos ? getImages('RHAZ') : []}
            />
          </div>
          <div className="camera">
            <h4 className='title is-4 has-text-centered'>MAST</h4>
            <CameraCard
              imgArray={allPhotos ? getImages('MAST') : []}
            />
          </div >
        </div>
        <div className="column camera-cards">
          <div className="camera">
            <h4 className='title is-4 has-text-centered'>CHEMCAM</h4>
            <CameraCard
              imgArray={allPhotos ? getImages('CHEMCAM') : []}
            />
          </div>
          <div className="camera">
            <h4 className='title is-4 has-text-centered'>MAHLI</h4>
            <CameraCard
              imgArray={allPhotos ? getImages('MAHLI') : []}
            />
          </div >
          <div className="camera">
            <h4 className='title is-4 has-text-centered'>NAVCAM</h4>
            <CameraCard
              imgArray={allPhotos ? getImages('NAVCAM') : []}
            />
          </div >
        </div >
      </div >
    </>
  )
}

export default Main