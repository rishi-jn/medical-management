import React from 'react'

export default function Doctor() {
  return (
    <div>Doctor</div>
  )
}
// import React, { useState } from 'react'
// import { MdDashboard } from "react-icons/md";
// import { FaPrescriptionBottleAlt } from "react-icons/fa";
// import { MdAddToQueue } from "react-icons/md";
// import Dashboard from '../components/Dashboard';
// import Prescription from '../components/Prescription';
// import Queue from '../components/Queue';

// const features = [
//   {
//     name:"Dashboard",
//     logo: <MdDashboard/>  ,
//   },
//   {
//     name:"Prescription",
//     logo:<FaPrescriptionBottleAlt/>,
//   },
//   {
//     name:"Queue",
//     logo:<MdAddToQueue/>,
//   }
// ];

// export default function Doctor() {
//   const[active,setActive] = useState("Dashboard");
//   return (
//     <div className='flex items-center justify-center w-full'>
//           <div className='w-80 h-screen border-r border-r-black flex flex-col gap-4 mt-20'>
//              {
//               features.map((featureObj,index)=>(
//                 <button key={index} className='p-4 rounded-lg bg-purple-500 m-2 mx-4' onClick={()=>setActive(`${featureObj.name}`)}>
//                   <image src={featureObj.logo}/>
//                   <p>{featureObj.name}</p>
//                 </button>
//               ))
//              }
//           </div>


//           <div className='h-screen ml-5  flex gap-10 w-full mt-20'>
//              {
//                active == "Dashboard" ? (<Dashboard/>): active == "Prescription" ? (<Prescription/>):(<Queue/>)
//              }
//           </div>

//     </div>
//   )
// }