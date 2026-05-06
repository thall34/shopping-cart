import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div>
      <h1>Error, page couldn't be found.</h1>
      <Link to="/">Return to Home Page</Link>
    </div>
  );
};

export default ErrorPage;