import React from 'react'

const ListEmployee = ({ employee,selectEmployee, deleteEmployee }) => {
    return (
        <div className='scrollbar p-4 flex flex-col gap-5 w-1/2 max-h-[80vh] overflow-y-auto'>
            {
                employee.map((emp, index) => {
                    return (
                        <div key={emp.id} className='flex w-full bg-stone-300 drop-shadow-lg px-4 py-2 rounded-md'>
                            <div className='text-xl w-[90%] cursor-pointer' onClick={()=> selectEmployee(index)}>
                                {emp.name}
                            </div>
                            <div className='w-[10%] flex justify-end'>
                                <i className="bi bi-trash-fill text-xl text-red-600 cursor-pointer"
                                    onClick={()=>deleteEmployee(emp.id)}
                                ></i>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ListEmployee
