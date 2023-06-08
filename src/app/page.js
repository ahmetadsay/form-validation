'use client'

import { useState } from 'react';
import { useForm } from 'react-hook-form';

const Home = () => {
  const { register, handleSubmit, errors } = useForm();
  const [formData, setFormData] = useState(null);

  const onSubmit = (data) => {
    setFormData(data);
  };

  return (
    <div className="max-w-md mx-auto p-4">
      {formData && (
        <div className="bg-gray-200 p-4 mb-4">
          <h2 className="text-lg font-semibold mb-2">Form Data:</h2>
          <p className="mb-2">
            <span className="font-semibold">Name:</span> {formData.name}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Email:</span> {formData.email}
          </p>
          <p>
            <span className="font-semibold">Message:</span> {formData.message}
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="name" className="block font-semibold mb-1">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
            {...register('name', { required: 'Name is required' })}
          />
          {errors?.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block font-semibold mb-1">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
          />
          {errors?.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block font-semibold mb-1">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
            {...register('message', { required: 'Message is required' })}
          ></textarea>
          {errors?.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="checkbox" className="flex items-center">
            <input
              type="checkbox"
              id="checkbox"
              name="checkbox"
              className="mr-2"
              {...register('checkbox')}
            />
            <span>Checkbox</span>
          </label>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Home;
