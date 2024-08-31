import React, { useState } from 'react';



export const Form = () => {

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: '',
    resume: null,
  });


  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "resume") {
        setFormData({
            ...formData,
            resume: files[0],
        });
    } else {
        setFormData({
            ...formData,
            [name]: value,
        });
    }
}


const handleSubmit = async (e) => {
  e.preventDefault();
  const formDataWithFile = new FormData();

  formDataWithFile.append("username", formData.username);
  formDataWithFile.append("email", formData.email);
  formDataWithFile.append("phone", formData.phone);
  formDataWithFile.append("resume", formData.resume);  // Handle file upload

  try {
      const response = await fetch(`http://localhost:5000/api/form`, {
          method: "POST",
          body: formDataWithFile,  // Send FormData directly
      });

      if (response.ok) {
          setFormData({
              username: "",
              email: "",
              phone: '',
              resume: null,
          });
          alert("Application submitted successfully");
      } else {
          alert("Failed to submit application");
      }
  } catch (error) {
      console.log("Error submitting application:", error);
      alert("Failed to submit application");
  }
};


  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Job Application</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        <div>
          <label htmlFor="resume" className="block text-sm font-medium text-gray-700">
            Upload Resume
          </label>
          <input
            type="file"
            id="resume"
            name="resume"
            accept=".pdf,.doc,.docx"
            onChange={handleChange}
            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
            required
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
};


