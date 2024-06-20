import { useState } from 'react'
import './App.css'
import ListEmployee from './components/ListEmployee'
import EmployeeDetails from './components/EmployeeDetails'
import EmployeeForm from './components/EmployeeForm'

function App() {
  const [employee, setEmployee] = useState([
    {
      id: "NHI634",
      name: "Sairam",
      address: "Hyderabad",
      img_url: "https://cdn-icons-png.flaticon.com/512/21/21104.png"
    },
    {
      id: "NHI643",
      name: "Charan",
      address: "Hyderabad",
      img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSppkoKsaYMuIoNLDH7O8ePOacLPG1mKXtEng&s"
    },
    {
      id: "NHI642",
      name: "Omer",
      address: "Hyderabad",
      img_url: "https://cdn-icons-png.flaticon.com/512/21/21104.png"
    },
    {
      id: "NHI576",
      name: "Rakesh",
      address: "Hyderabad",
      img_url: "https://cdn-icons-png.flaticon.com/512/21/21104.png"
    }
  ])
  const [selectedEmp, setSelectedEmp] = useState(0);
  const [addEmp, setAddEmp] = useState(false);
  const addEmpClick = () => {
    setAddEmp(!addEmp);
  }
  const addEmployee = (data) =>{
    setEmployee([...employee, data]);
    console.log(employee)
  }
  const selectEmployee = (index) => {
    setSelectedEmp(index);
    console.log(employee)

  }
  const deleteEmployee = (id) => {
    setEmployee((prevEmp) => prevEmp.filter((emp) => emp.id !== id))
    setSelectedEmp(0)
  }
  return (
    <>
      <div className={`h-screen relative w-full flex flex-col gap-10 p-10 z-0 bg-neutral-300 ${addEmp ? "blur-sm":""}`}>
        <div className='flex justify-end'>
          <button className='bg-cyan-600 text-white px-5 py-2 rounded-lg hover:scale-105 hover:text-neutral-300'
            onClick={() => addEmpClick()}
          >Add Employee</button>
        </div>


        <div className='flex w-full bg-white drop-shadow-lg rounded-lg min-h-[30vh]'>
          {employee.length > 0 ? (
            <>
              <ListEmployee employee={employee} selectEmployee={selectEmployee} deleteEmployee={deleteEmployee} />
              <EmployeeDetails empDetails={employee[selectedEmp]} />
            </>
          ) : (
            <div className='text-2xl flex justify-center items-center w-full'>There are no Employees Data to Show ... </div>
          )
          }
        </div>
        {
          addEmp && (
            <div className='absolute z-10 h-screen w-full bg-transparent top-0 left-0 overflow-hidden'></div>
          )
        }
      </div>
      {
        addEmp && (
          <EmployeeForm addEmpClick={addEmpClick} addEmployee={addEmployee} />
        )
      }
    </>
  )
}

export default App
