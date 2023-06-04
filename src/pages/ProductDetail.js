import React from 'react'
import { useParams } from 'react-router-dom'
import { TailSpin } from 'react-loader-spinner'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import "react-image-gallery/styles/css/image-gallery.css";

import ImageGallery from 'react-image-gallery';


// Import Swiper styles
import 'swiper/css'

import { useGetSingleProductQuery } from '../productslice/productSlice'
const ProductDetail = () => {

    const {id}=useParams()
    const {data,error,isLoading}=useGetSingleProductQuery(id)
    console.log(data)
    const images1 = [
        {
          original: `${data?.images[0]}`,
          thumbnail: `${data?.images[0]}`,
        },
        {
            original: `${data?.images[1]}`,
            thumbnail: `${data?.images[1]}`,
        },
        {
            original: `${data?.images[2]}`,
          thumbnail: `${data?.images[2]}`,
        },
        {
            original: `${data?.images[3]}`,
          thumbnail: `${data?.images[3]}`,
        },
      ];
    if(isLoading){
        return (
            <div className="w-full h-screen flex justify-center items-center overflow-hidden">
       <TailSpin
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="tail-spin-loading"
  radius="1"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
          </div>
        )
    }

    if(data){


  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
    <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
      <div className="flex flex-col justify-center">
        <div className="max-w-xl mb-6">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
          {data.title}

          </h2>
          <p className="text-base text-gray-700 md:text-lg">
          { data.description}
          </p>
          <h2 className="py-3 max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
          Price :
              <span className="relative px-1">
                <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400" />
                <span className="relative inline-block text-deep-purple-accent-400">
                  {data?.price}$
                </span>
              </span>
            </h2>
        </div>
        <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
          <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
            <div className="h-full p-5 border border-l-0 rounded-r">
              <h6 className="mb-2 font-semibold leading-5">
                I'll be sure to note that in my log
              </h6>
              <p className="text-sm text-gray-900">
                Lookout flogging bilge rat main sheet bilge water nipper fluke
                to go on account heave down.
              </p>
            </div>
          </div>
          <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
            <div className="h-full p-5 border border-l-0 rounded-r">
              <h6 className="mb-2 font-semibold leading-5">
                A business big enough that it could be listed
              </h6>
              <p className="text-sm text-gray-900">
                Those options are already baked in with this model shoot me an
                email clear.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
       {/*  <img
          className="object-cover w-full rounded shadow-lg sm:h-64"
          src={data.images[0]}
          alt=""
        />
        <div className="flex gap- py-2">
        <Swiper
      spaceBetween={0}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
        {data.images.map((image,index)=>(
            <SwiperSlide>
                 <img
                 key={index}
                 className="w-full h-32 object-cover border rounded-lg"
                 src={image}
                 alt="picture"
               />
               </SwiperSlide>
        ))}
        </Swiper>
        </div> */}

        <ImageGallery items={images1} />;
      </div>
    </div>
  </div>
  )
}
}

export default ProductDetail