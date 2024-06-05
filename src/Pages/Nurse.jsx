import React from 'react'

export default function Nurse() {
  return (
    <div className="h-screen w-64 bg-blue-300 text-black fixed">
    <div className="p-4">
      <h1 className="text-xl font-bold">Receptionist</h1>
    </div>
    <nav className="mt-4">
      <ul>
        <li className="px-4 py-2 hover:bg-gray-700 border-b-2  border-black">
          <a href="#">Sign up Doctor</a>
        </li>
        <li className="px-4 py-2 hover:bg-gray-700 border-b-2 border-black">
          <a href="#">Sign up Patient</a>
        </li>
      </ul>
    </nav>
  </div>
  )
}
