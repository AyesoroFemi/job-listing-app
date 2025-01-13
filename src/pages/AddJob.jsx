/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

function AddJob({ addJob, deleteJob}) {
  const [title, setTitle] = useState("");
  const [jobType, setJobType] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [companyPhone, setCompanyPhone] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");

  const navigate = useNavigate()
deleteJob()

//   const getPostJobData = localStorage.getItem("jobs")
//   console.log(JSON.parse(getPostJobData))


  const handleSubmit = (e) => {
    e.preventDefault();
    const job = {
      title: title,
      type:jobType,
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
    addJob(job);
    toast.success("Job Added Successfully")
    navigate("/")

  };

  return (
    <div>
      <div>
        <label htmlFor="">Title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
        />
      </div>
      <div>
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
      <div>
        <label htmlFor="">Description</label>
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
        />
      </div>
      <div>
        <label htmlFor="">Location</label>
        <input
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          type="text"
        />
      </div>
      <div>
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
      <div>
        <label htmlFor="">Company Name</label>
        <input
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          type="text"
        />
      </div>
      <div>
        <label htmlFor="">Company Description</label>
        <input
          value={companyDescription}
          onChange={(e) => setCompanyDescription(e.target.value)}
          type="text"
        />
      </div>
      <div>
        <label htmlFor="">Company Email </label>
        <input
          value={companyEmail}
          onChange={(e) => setCompanyEmail(e.target.value)}
          type="text"
        />
      </div>
      <div>
        <label htmlFor="">Company Phone </label>
        <input
          value={companyPhone}
          onChange={(e) => setCompanyPhone(e.target.value)}
          type="text"
        />
      </div>
      <button onClick={handleSubmit} type="submit">
        Submit
      </button>
    </div>
  );
}

export default AddJob;
