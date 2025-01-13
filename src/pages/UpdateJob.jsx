/* eslint-disable react/prop-types */
// import { useEffect, useState } from "react";
import { useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";

function UpdateJob({updateJob}) {
    const data = useLoaderData()
    console.log(data)

  // const [job, setJob] = useState({});

  const [title, setTitle] = useState(data.title);
  const [jobType, setJobType] = useState(data.type);
  const [description, setDescription] = useState(data.description);
  const [location, setLocation] = useState(data.location);
  const [salary, setSalary] = useState(data.salary);
  const [companyName, setCompanyName] = useState(data.company.name);
  const [companyEmail, setCompanyEmail] = useState(data.company.contactEmail);
  const [companyPhone, setCompanyPhone] = useState(data.company.contactPhone);
  const [companyDescription, setCompanyDescription] = useState(data.company.description);

  const { id } = useParams();

  const navigate = useNavigate();


  // const fetchJob = async (id) => {
  //   const res = await fetch(`http://localhost:3000/jobs/${id}`);
  //   const data = await res.json();
  //   console.log(data)
  //   // setJob(data);
  //   setTitle(data?.title);
  //   setJobType(data?.type);
  //   setDescription(data?.description);
  //   setLocation(data?.location);
  //   setSalary(data?.salary);
  //   setCompanyName(data?.company?.name);
  //   setCompanyEmail(data?.company?.contactEmail);
  //   setCompanyPhone(data?.company?.contactPhone);
  //   setCompanyDescription(data?.company?.description);
  // };

//   useEffect(() => {
//     fetchJob(id);
//   }, []);


  

  const handleJobUpdate = () => {
    const body = {
      id,
      title: title,
      type: jobType,
      description: description,
      location: location,
      salary,
      company: {
        name: companyName,
        description: companyDescription,
        contactEmail: companyEmail,
        contactPhone: companyPhone,
      },
    };

    console.log(body);

   updateJob(body)

    toast.success("Job Updated Successfully")
    navigate("/")
  };


  return (
    <div>
      <div className="input-container">
        <label htmlFor="">Title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
        />
      </div>
      <div className="input-container">
        <label htmlFor="">Job Type</label>
        <select
          value={jobType}
          onChange={(e) => setJobType(e.target.value)}
          name=""
          id=""
        >
          <option value="Full-Time">Full-Time</option>
          <option value="Part-Time">Part-Time</option>
          <option value="Remote-Time">Remote</option>
        </select>
      </div>
      <div className="input-container">
        <label htmlFor="">Description</label>
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
        />
      </div>
      <div className="input-container">
        <label htmlFor="">Location</label>
        <input
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          type="text"
        />
      </div>
      <div className="input-container">
        <label htmlFor="">Salary</label>
        <select
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          name=""
          id=""
        >
          <option value="Under $50k">Under $50</option>
          <option value="60K - $70K">60K - $70K</option>
          <option value="$70K - $80K">$70K - $80K</option>
          <option value="$100K - $110K">$100K - $110K</option>
        </select>
      </div>
      <div className="input-container">
        <label htmlFor="">Company Name</label>
        <input
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          type="text"
        />
      </div>
      <div className="input-container">
        <label htmlFor="">Company Description</label>
        <input
          value={companyDescription}
          onChange={(e) => setCompanyDescription(e.target.value)}
          type="text"
        />
      </div>
      <div className="input-container">
        <label htmlFor="">Company Email </label>
        <input
          value={companyEmail}
          onChange={(e) => setCompanyEmail(e.target.value)}
          type="text"
        />
      </div>
      <div className="input-container">
        <label htmlFor="">Company Phone </label>
        <input
          value={companyPhone}
          onChange={(e) => setCompanyPhone(e.target.value)}
          type="text"
        />
      </div>
      <button onClick={handleJobUpdate} type="submit">
        Update Job
      </button>
    </div>
  );
}

export default UpdateJob;
