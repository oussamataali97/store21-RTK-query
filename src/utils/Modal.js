import React, { useEffect } from 'react'
import { useGetSingleProductQuery } from '../productslice/productSlice'
import { getSpecificProducts } from '../userSlice/userSlice'
import { useDispatch } from 'react-redux'

const Modal = ({setShowModal,data2}) => {

  return (
    <>
    <div className="justify-center items-center w-screen h-screen  flex overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-5xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Your product Cart have {data2?.carts[0]?.products.length} Products
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}

<div class="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
  <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
    <thead class="bg-gray-50">
      <tr>
        <th scope="col" class="px-6 py-4 font-medium text-gray-900">Title</th>
        <th scope="col" class="px-6 py-4 font-medium text-gray-900">Price</th>
        <th scope="col" class="px-6 py-4 font-medium text-gray-900">Quantity</th>
        <th scope="col" class="px-6 py-4 font-medium text-gray-900">Total</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-100 border-t border-gray-100">
{data2?.carts[0]?.products.map(product=>{

    return (
          <tr class="hover:bg-gray-50">

   <th class="flex gap-3 px-6 py-4 font-normal text-gray-900">
   <div class="relative h-10 w-10">
     <img
       class="h-full w-full rounded-full object-cover object-center"
       src="https://random.imagecdn.app/500/150"
       alt=""
     />
     <span class="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
   </div>
   <div class="text-sm">
     <div class="font-medium text-gray-700">{product?.title}</div>
     <div class="text-gray-400">jobs@sailboatui.com</div>
   </div>
 </th>
 <td class="px-6 py-4">
   <span
     class="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600"
   >
     <span class="h-1.5 w-1.5 rounded-full bg-green-600"></span>
    {product?.price}$
   </span>
 </td>
 <td class="px-6 py-4">{product?.quantity}</td>
 <td class="px-6 py-4">{product?.total} $</td>


</tr>
    )
})}

<tr className='bg-gray-100'>

        <th scope="col" class="px-6 py-4 font-medium text-gray-900">Total</th>
        <th scope="col" class="px-6 py-4 font-medium text-gray-900"></th>
        <th scope="col" class="px-6 py-4 font-medium text-gray-900">{data2?.carts[0]?.totalQuantity}</th>
        <th scope="col" class="px-6 py-4 font-medium text-gray-900">{data2?.carts[0]?.total} $</th>
      </tr>

    </tbody>
  </table>
</div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
  )
}

export default Modal