import {useState , useEffect} from 'react'
import './App.css';
import {fetchAllData} from './Component/Api/Api.js';
import Table from './Component/Table.js';
import Loader from './Component/Loader';
const App = () => {
  const [employeeData, setEmployeeData] = useState([]);

  useEffect(() => {
    fetchAllData()
      .then(data => {
        if(data.length>0){

          setEmployeeData(data);
        }
        // console.log(data)
      })
      .catch(err => {
        console.log('Error fetching data:', err);
      });
  }, []);

  return (
    <>

    {employeeData.length ? <div className="App container">
      <div>
        <h2 >Employees Details Table</h2>
      </div>
      <div className='container'>
      
      <Table data={employeeData}/>
      </div>
    </div> : <Loader/> }
    </>
  );
};

export default App;