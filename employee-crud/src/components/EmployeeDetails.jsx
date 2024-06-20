import React from 'react'

const EmployeeDetails = ({ empDetails }) => {
    return (
        <div className='w-1/2 bg-gray-100 flex flex-col gap-4 items-center py-4 text-xl rounded-md'>
            <div className='w-60 h-60'>
                <img className='w-full h-full object-cover shadow-inner' src={empDetails.img_url} alt=""  />
            </div>
            <div>
                <span className='font-semibold'>NAME :</span> {empDetails.name}
            </div>
            <div>
                <span className='font-semibold'>ID :</span> {empDetails.id}
            </div>
            <div>
                <span className='font-semibold'>ADDRESS :</span> {empDetails.address}
            </div>
        </div>
    )
}

export default EmployeeDetails
