// import ImageGallery from 'react-image-gallery'

import Image from 'next/image'
import Carousel from 'nuka-carousel/lib/carousel'
import { useState } from 'react'

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1013/1000/600/',
    thumbnail: 'https://picsum.photos/id/1013/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1012/1000/600/',
    thumbnail: 'https://picsum.photos/id/1012/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1011/1000/600/',
    thumbnail: 'https://picsum.photos/id/1011/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1016/1000/600/',
    thumbnail: 'https://picsum.photos/id/1016/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
]

export default function Products() {
  const [index, setIndex] = useState(0)
  return (
    <div style={{ textAlign: 'center' }}>
      <Carousel animation="fade" autoplay withoutControls slideIndex={index}>
        {images.map((item) => (
          <Image
            key={item.original}
            src={item.original}
            alt="images"
            width={900}
            height={500}
          />
        ))}
      </Carousel>
      <div style={{ display: 'flex' }}>
        {images.map((item, idx) => (
          <div key={idx} onClick={() => setIndex(idx)}>
            <Image src={item.original} alt="images" width={100} height={60} />
          </div>
        ))}
      </div>
    </div>
  )
}
