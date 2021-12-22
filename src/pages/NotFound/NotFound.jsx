import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <p>No movies here</p>
      <Link to="/">Go Home</Link>
    </div>
  );
};

export default NotFound;
