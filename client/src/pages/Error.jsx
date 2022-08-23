import { Link } from 'react-router-dom';

const Error = ({currentUser}) => {
  return (
    <div style={{margin :"100px 0 0 50px"}}>
      <h2>404</h2>
      <p>page not found</p>
      {/* <Link to='/' ><p style={{color :"black"}}> back home</p></Link> */}
      {(JSON.stringify(currentUser) == JSON.stringify({})) ? 
      <Link to='/' ><p style={{color :"black", borderBottom :"1px solid black",display:"inline-block"}}> 
      back home</p></Link> : <Link to='/profile' >
        <p style={{color :"black", borderBottom :"1px solid black",display:"inline-block"}}> back profile</p></Link>}
    </div>
  );
};
export default Error;
