import React from 'react'
import { useParams } from 'react-router'


function CameraCard({ imgArray }) {
  const [index, setIndex] = React.useState(0)
  const { day } = useParams()

  // * Reset each card back to index 0 when url changes
  React.useEffect(() => {
    setIndex(0)
  }, [day])

  // * Use index as a click counter to inform which image to display
  const handleClick = (e) => {
    if (e.target.id === 'left' && index > 0) {
      setIndex(index - 1)
    } else if (e.target.id === 'right' && index < imgArray.length - 1) {
      setIndex(index + 1)
    }
  }

  return (
    <div className='card is-flex-direction-column column'>
      <div className='is-flex is-justify-content-center'>
        <img
          className='image card-image'
          src={
            imgArray.length > 0 ?
              imgArray[index].img_src :
              'https://media2.giphy.com/media/l1J9EdzfOSgfyueLm/giphy.gif'
          }
        />
      </div>
      <div className="arrows columns is-gapless">
        <button
          id='left'
          className='button is-pulled-left'
          onClick={handleClick}
        >
          {'<'}
        </button>
        <p className="column has-text-centered">
          {imgArray.length > 0 ? `${index + 1} / ${imgArray.length}` : 'No Signal'}
        </p>
        <button
          id='right'
          className='button is-pulled-right'
          onClick={handleClick}
        >
          {'>'}
        </button>
      </div>
    </div >
  )
}

export default CameraCard