import Link from 'next/link';
import { useState } from 'react';

export default function HomePage() {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., API call)
    console.log(formData);
    window.location.href = '/success';
  };

  return (
    <div className="flex min-h-screen flex-col justify-center items-center">
      <h1 className="text-2xl font-bold mb-4">Register</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border p-2 rounded w-full"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          className="border p-2 rounded w-full"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="border p-2 rounded w-full"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <div className="flex justify-between">
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Register
          </button>
          <Link href="/forgot-password" className="text-blue-500">
            Forgot Password?
          </Link>
        </div>
      </form>
    </div>
  );
}
