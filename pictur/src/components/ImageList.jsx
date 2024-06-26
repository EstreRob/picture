import React from 'react'
import ImageShow from './ImageShow'


function ImageList({images}) {

  const renderImage = images.map((image) => {
    return <ImageShow key={image.id} image={image}/>
})

  return (
    <div className='image-list'>
      {renderImage}
    </div>
  )
}

export default ImageList