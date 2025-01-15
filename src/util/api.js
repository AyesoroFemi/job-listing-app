export const fetchJobs = async () => {
  const res = await fetch("http://localhost:3000/jobs", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) {
    throw new Error("Error fetching data");
  }
  return await res.json();
};

export const jobListing = async ({ params }) => {
  const res = await fetch(`http://localhost:3000/jobs/${params.id}`);
  return await res.json();
};


export const addJob = async (newJob) => {
  const res = await fetch("http://localhost:3000/jobs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newJob),
  });
  return await res();
};


export async function deleteJob(id) {
  const res = await fetch(`http://localhost:3000/jobs/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) {
    throw new Error ("Could not be deleted!!!")
  }
//   return res;
}

export const updateJob = async (job) => {
  const res = await fetch(`http://localhost:3000/jobs/${job.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(job),
  });
  if (!res.ok) {
    throw new Error("Could not be deleted!!!");
  }
};