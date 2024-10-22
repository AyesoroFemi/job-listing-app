import { useNavigate } from "react-router"

function NotFound() {
    const navigate =useNavigate("/")

  return (
    <div>
        <h1>The resource you are looking for is not found</h1>
        <button onClick={() => navigate()}>Go Back</button>
    </div>
  )
}

export default NotFound