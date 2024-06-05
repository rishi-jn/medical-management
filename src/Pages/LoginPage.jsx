import React from 'react'
import { useState } from 'react';
export default function LoginPage() {
  const [placement, setPlacement] = useState('Nurse');
  const [formValue, setFormValue] = useState({ ID: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [forgetPassword, setForgetPassword] = useState({ type: '', email: '' });
  const [forgetLoading, setForgetLoading] = useState(false);

  const handlePlacementChange = (e) => {
    setPlacement(e.target.value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Handle form submission logic
    setLoading(false);
  };

  const showDrawer = () => {
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  const handleForgetPasswordChange = (e) => {
    const { name, value } = e.target;
    setForgetPassword({ ...forgetPassword, [name]: value });
  };

  const handleChangePassword = () => {
    setForgetLoading(true);
    // Handle change password logic
    setForgetLoading(false);
  };
  return (
    <div className="flex h-screen items-center justify-center bg-blue-200">
      <div className="flex w-4/5 max-w-4xl bg-white shadow-lg">
        <div className="w-1/2 flex items-center justify-center bg-blue-100">
          <img src={require("../images/profile.jpg")} alt="banner" className="max-w-full " />
        </div>
        <div className="w-1/2 p-8">
          <h1 className="text-3xl mb-6 text-center">Login</h1>
          <div className="mb-4 flex justify-around">
            {['Receptionist', 'Doctor', 'Patient'].map(role => (
              <label key={role} className="cursor-pointer">
                <input
                  type="radio"
                  name="userType"
                  value={role}
                  checked={placement === role}
                  onChange={handlePlacementChange}
                  className="hidden"
                />
                <span className={`py-2 px-4 border rounded ${placement === role ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}>
                  {role}
                </span>
              </label>
            ))}
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <h3 className="mb-2">{placement} ID</h3>
              <input
                type="number"
                name="ID"
                value={formValue.ID}
                onChange={handleChange}
                required
                className="w-full mb-4 p-2 border rounded"
              />
              <h3 className="mb-2">Password</h3>
              <input
                type="password"
                name="password"
                value={formValue.password}
                onChange={handleChange}
                required
                className="w-full mb-4 p-2 border rounded"
              />
              <button
                type="submit"
                className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                {loading ? 'Loading...' : 'Submit'}
              </button>
              <p className="mt-4 text-center">
                Forget Password?{' '}
                <span
                  className="text-blue-500 cursor-pointer"
                  onClick={showDrawer}
                >
                  Get it on Email!
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>

      {drawerOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-blue-200 p-8 rounded-lg shadow-lg relative">
            <button
              className="absolute top-2 right-2 text-xl"
              onClick={closeDrawer}
            >
              &times;
            </button>
            <h2 className="mb-4 text-2xl">Forget Password</h2>
            <div className="mb-4">
              <label className="block mb-2 text-lg">Choose Type</label>
              <select
                name="type"
                value={forgetPassword.type}
                onChange={handleForgetPasswordChange}
                required
                className="w-full p-2 border rounded"
              >
                <option value="">User Type</option>
                <option value="nurse">Nurse</option>
                <option value="doctor">Doctor</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-lg">Enter Email</label>
              <input
                type="email"
                placeholder="example@mail.com"
                name="email"
                value={forgetPassword.email}
                onChange={handleForgetPasswordChange}
                required
                className="w-full p-2 border rounded bg-gray-200"
              />
            </div>
            <button
              className="w-full py-2 bg-blue-500 text-white rounded hover:bg-red-600"
              onClick={handleChangePassword}
            >
              {forgetLoading ? 'Loading...' : 'Send Mail'}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
