
import './Error.css'
import { PiSmileySad } from "react-icons/pi";
const Error = () => {
  return (
    <div className="error-container">
    <h4><PiSmileySad /></h4>
     <h5>404</h5>
     <p>Page not found!</p>
     <p>The page you are looking for doesn&apos;t exist or an error occured.</p>
     <p></p>
    </div>
  )
}

export default Error

