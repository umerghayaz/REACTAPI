import './App.css';
import React, { useEffect,useState } from 'react';
import axios from 'axios';

function App() {
  const [myData, setMyData] = useState([]);
  const[isError,setIserror]=useState("");
// useEffect(()=>{
//   axios.get('https://jsonplaceholder.typicode.com/posts')
//   .then((res) => setMyData(res.data))
//   .catch((error)=>setIserror(error.message));
// },[]);
const getMyPostData = async () => {
  try {
    const res = await axios.get("https://api.github.com/users");
    setMyData(res.data);
  } catch (error) {
    setIserror(error.message);
  }
  
};
useEffect(() => {
  getMyPostData();
}, [])
  return (
    <>
    <h1>axios</h1>
    <div className="grid">
    {isError !== "" && <h2>{isError}</h2>}
        {myData.map((data) => (
            <div key={data.id} className="card">
              <h2>{data.login}</h2>
              <p>{data.node_id}</p>
            </div>
          )
        )}
        {/* {
        myData.map((employee) =>
          <li>{employee.title}</li>
          ) } */}
      </div>
    </>
  );
}

export default App;
