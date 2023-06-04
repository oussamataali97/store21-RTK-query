import { useGetAllProductsQuery } from "../productslice/productSlice";
import { useEffect,useState } from "react";
import { TailSpin } from 'react-loader-spinner'
import { Link } from "react-router-dom";

function Products (){
    const [pro,setPro]=useState([])
    const {isLoading,error, data}=useGetAllProductsQuery()
    console.log(error)
console.log(data)



    console.log(pro,'object')
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
    } else

    if (error){
        return (
            <p>{error.error} </p>
        )
    }

    else if(data){






    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">

        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Brand new
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="7b568941-9ed0-4f49-85a0-5e21ca6c7ad6"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#7b568941-9ed0-4f49-85a0-5e21ca6c7ad6)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative"></span>
            </span>{' '}
            Browse New Products
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </p>
        </div>
        <div className="grid gap-5 row-gap-5 mb-8 lg:grid-cols-4 sm:grid-cols-2">
{data.products && data.products?.map(product=>(
      <Link
      key={product.id}
      to={`/product/${product.id}`}
      aria-label="View Item"
      className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
    >
      <div className="flex flex-col h-full">
        <img
          src={product?.images[0]}
          className="object-contain w-full h-48"
          alt=""
        />
        <div className="flex-grow border border-t-0 rounded-b">
          <div className="p-5">
            <h6 className="mb-2 font-semibold leading-5">
               {product?.title}
            </h6>
            <p className="text-sm text-gray-900">
             {product?.description}
            </p>
          </div>
        </div>
      </div>
    </Link>

))}





        </div>
            <div className="text-center">
          <a
            href="/"
            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
          >
            Learn more
          </a>

        </div>
      </div>
    );
  };
}


  export default Products