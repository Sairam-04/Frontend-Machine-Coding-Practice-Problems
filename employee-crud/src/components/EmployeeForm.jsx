import React, { useState } from "react";

const EmployeeForm = ({addEmpClick, addEmployee}) => {
  const [emp, setEmp] = useState({
    id: "",
    name: "",
    address: "",
    img_url: "",
  });

  const handleChange = (e) =>{
    const {name, value} = e.target;
    setEmp({...emp, [name]:value})
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    addEmployee(emp);
    console.log(emp);
    addEmpClick();
  }
  return (
    <form className="w-1/2 absolute z-20 drop-shadow-2xl h-fit top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-100
                    flex flex-col gap-3 px-4 py-3 rounded-lg"
      onSubmit={handleSubmit}
    >
      <div className="flex justify-between w-full">
        <div className="text-2xl font-semibold">Add Employee Information</div>
        <div className="text-red-600 cursor-pointer font-bold hover:bg-red-500 hover:text-white px-2 py-1 rounded-sm" 
          onClick={()=>addEmpClick()}
        ><i className="bi bi-x-lg text-2xl"></i></div>
      </div>
      <div className="w-full h-[2px] bg-black my-1"></div>
      <div className="flex flex-col gap-4 w-full">
        <div className="flex w-full items-center">
          <label htmlFor="id" className="w-2/5 text-xl">ID</label>
          <input type="text" name="id" className="w-2/5 p-2 rounded-md text-xl"
            value={emp.id} onChange={handleChange}
          />
        </div>
        <div className="flex w-full items-center">
          <label htmlFor="name" className="w-2/5 text-xl">NAME</label>
          <input type="text" name="name" className="w-2/5 p-2 rounded-md text-xl" 
            value={emp.name} onChange={handleChange}
          />
        </div>
        <div className="flex w-full items-center">
          <label htmlFor="image_url" className="w-2/5 text-xl">IMAGE URL</label>
          <input type="text" name="img_url" className="w-2/5 p-2 rounded-md text-xl" 
            value={emp.img_url} onChange={handleChange}
          />
        </div>
        <div className="flex w-full items-center">
          <label htmlFor="address" className="w-2/5 text-xl">ADDRESS</label>
          <input type="text" name="address" className="w-2/5 p-2 rounded-md text-xl"  
            value={emp.address} onChange={handleChange}
          />
        </div>
      </div>
      <div className="w-full h-[2px] bg-black my-1"></div>
      <div className="flex justify-end">
        <button type="submit" className="bg-green-400 text-xl text-black px-5 py-2 rounded-lg">
          Submit
        </button>
      </div>
    </form>
  );
};

export default EmployeeForm;
