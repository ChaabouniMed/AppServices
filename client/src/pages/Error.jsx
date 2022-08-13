import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div style={{margin :"100px 0 0 50px"}}>
      <h2>404</h2>
      <p>page not found</p>
      <Link to='/' ><p style={{color :"black"}}> back home</p></Link>
    </div>
  );
};
export default Error;
