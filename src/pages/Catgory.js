
import { useGetCategoriesQuery } from "../productslice/productSlice"
import { Link } from "react-router-dom"
export default function Catgory() {

    const {data} = useGetCategoriesQuery()

    console.log(data)
    return (
      <>
      <div className="buttons flex flex-wrap gap-3 mx-6">
        {data?.map((element,index)=>(
            <Link to={`/category/${element}`} key={index} className=" inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none"> {element}</Link>
        ))}
      </div>
        {/* Product List Section: Categories Grid */}
        {data && (
       <div className="bg-white dark:text-gray-100 dark:bg-gray-900">
       <div className="container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-16">
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
           <Link to={`/category/${data[0]}`} className="sm:col-span-2 md:col-span-1 block group relative transition ease-out active:opacity-75 overflow-hidden">
             <img src="https://cdn.tailkit.com/media/placeholders/photo-PDX_a_82obo-700x700.jpg" alt="Product Image" className="transform transition ease-out group-hover:scale-110" />
             <div className="absolute inset-0 bg-black bg-opacity-25 transition ease-out group-hover:bg-opacity-0" />
             <div className="p-4 flex items-center justify-center absolute inset-0">
               <div className="py-3 px-4 bg-white bg-opacity-95 rounded-3xl text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:text-white group-hover:bg-blue-600 dark:bg-gray-900/90 dark:border-gray-800">
                 Electronics
               </div>
             </div>
           </Link>
           <Link to={`/category/${data[1]}`} className="block group relative transition ease-out active:opacity-75 overflow-hidden">
             <img src="https://cdn.tailkit.com/media/placeholders/photo-1SAnrIxw5OY-700x700.jpg" alt="Product Image" className="transform transition ease-out group-hover:scale-110" />
             <div className="absolute inset-0 bg-black bg-opacity-25 transition ease-out group-hover:bg-opacity-0" />
             <div className="p-4 flex items-center justify-center absolute inset-0">
               <div className="py-3 px-4 bg-white bg-opacity-95 rounded-3xl text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:text-white group-hover:bg-blue-600 dark:bg-gray-900/90 dark:border-gray-800">
                 Computers
               </div>
             </div>
           </Link>
           <Link to={`/category/${data[8]}`} className="block group relative transition ease-out active:opacity-75 overflow-hidden">
             <img src="https://cdn.tailkit.com/media/placeholders/photo-gUPiTDBdRe4-700x700.jpg" alt="Product Image" className="transform transition ease-out group-hover:scale-110" />
             <div className="absolute inset-0 bg-black bg-opacity-25 transition ease-out group-hover:bg-opacity-0" />
             <div className="p-4 flex items-center justify-center absolute inset-0">
               <div className="py-3 px-4 bg-white bg-opacity-95 rounded-3xl text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:text-white group-hover:bg-blue-600 dark:bg-gray-900/90 dark:border-gray-800">
                 Clothes
               </div>
             </div>
           </Link>
           <Link to={`/category/${data[5]}`} className="sm:col-span-2 md:col-span-1 block group relative transition ease-out active:opacity-75 overflow-hidden">
             <img src="https://cdn.tailkit.com/media/placeholders/photo-ALpEkP29Eys-700x700.jpg" alt="Product Image" className="transform transition ease-out group-hover:scale-110" />
             <div className="absolute inset-0 bg-black bg-opacity-25 transition ease-out group-hover:bg-opacity-0" />
             <div className="p-4 flex items-center justify-center absolute inset-0">
               <div className="py-3 px-4 bg-white bg-opacity-95 rounded-3xl text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:text-white group-hover:bg-blue-600 dark:bg-gray-900/90 dark:border-gray-800">
                 Smart Home
               </div>
             </div>
           </Link>
           <Link to={`/category/${data[11]}`} className="block group relative transition ease-out active:opacity-75 overflow-hidden">
             <img src="https://cdn.tailkit.com/media/placeholders/photo-164_6wVEHfI-700x700.jpg" alt="Product Image" className="transform transition ease-out group-hover:scale-110" />
             <div className="absolute inset-0 bg-black bg-opacity-25 transition ease-out group-hover:bg-opacity-0" />
             <div className="p-4 flex items-center justify-center absolute inset-0">
               <div className="py-3 px-4 bg-white bg-opacity-95 rounded-3xl text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:text-white group-hover:bg-blue-600 dark:bg-gray-900/90 dark:border-gray-800">
                 Shoes
               </div>
             </div>
           </Link>
           <Link to={`/category/${data[12]}`} className="block group relative transition ease-out active:opacity-75 overflow-hidden">
             <img src="https://cdn.tailkit.com/media/placeholders/photo-wW7XbWYoqK8-700x700.jpg" alt="Product Image" className="transform transition ease-out group-hover:scale-110" />
             <div className="absolute inset-0 bg-black bg-opacity-25 transition ease-out group-hover:bg-opacity-0" />
             <div className="p-4 flex items-center justify-center absolute inset-0">
               <div className="py-3 px-4 bg-white bg-opacity-95 rounded-3xl text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:text-white group-hover:bg-blue-600 dark:bg-gray-900/90 dark:border-gray-800">
                 Wearables
               </div>
             </div>
           </Link>
         </div>
       </div>
     </div>
        )}

        {/* END Product List Section: Categories Grid */}
      </>
    )
  }