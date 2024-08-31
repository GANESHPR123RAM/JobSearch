// src/JobList.js
import React from 'react';
import { NavLink } from "react-router-dom";


const mockJobs = [
    { id: 1, title: 'Software Engineer', company: 'Google', location: 'Mountain View, CA' },
    { id: 2, title: 'Product Manager', company: 'Facebook', location: 'Menlo Park, CA' },
    { id: 3, title: 'Data Scientist', company: 'Apple', location: 'Cupertino, CA' },
    { id: 4, title: 'Webdevelopment', company: 'Kudosware', location: 'Work from home' },

];
export const JobList = () => {
    return (
        <>
            <div className=" min-h-screen max-w-2xl mx-auto mt-8">
                {mockJobs.length > 0 ? (
                    mockJobs.map((job) => (
                        <>
                            <div key={job.id} className="bg-white p-4 rounded-md shadow-md mb-4">
                                <h3 className="text-xl font-bold">{job.title}</h3>
                                <p className="text-gray-700">{job.company}</p>
                                <p className="text-gray-500">{job.location}</p>
                                <div className=" flex justify-between align-middle items-start pt-5 ">
                                    <p className=' px-5 py-1  bg-slate-200 rounded-xl '>  2 weeks ago</p>
                                    <NavLink to="/Form" >
                                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Apply Now</button>
                                    </NavLink> 
                                </div>
                            </div>

                        </>
                    ))
                ) : (
                    <p className="text-center text-gray-500">No jobs found.</p>
                )}
            </div>
        </>
    )
}