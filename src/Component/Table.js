import React, { useEffect, useState } from "react";

const Table = ({ data }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [ageRang , setAgeRange] = useState([])

  useEffect(()=>{
setFilteredData(data)
createAgeRange()
  },[data])

  function createAgeRange(){
    const oldAge = Math.max(...data.map((employee) => employee.employee_age));
  const highestRangeLimit = Math.ceil(oldAge / 20) * 20;
  console.log(highestRangeLimit,'highest')
  const ages = [];
  for (let i = 0; i < highestRangeLimit; i += 20) {
    if(i==0){
      ages.push(`${i}-${i + 20}`);
    }else{
      ages.push(`${i+1}-${i+ 20}`);
    }
  }
  // console.log(ages)
  setAgeRange(ages)
  
  }

  const ageChangeHandler = (e) => {
    const selectedRange = e.target.value;
    const minAge = selectedRange.split('-')[0]
    const maxAge = selectedRange.split('-')[1]
    
    if(!isNaN(minAge) && !isNaN(maxAge)){
      const filtered = data.filter(
        (employee) =>
          employee.employee_age >= minAge && employee.employee_age < maxAge
      );
      setFilteredData(filtered);
    }else{
      setFilteredData(data)
    }
  };

const sortHandler=(e)=>{
  e.preventDefault()
  let value = e.target.value
  if(value=='asec'){
    const sortData = [...filteredData].sort((a, b) => a.employee_salary - b.employee_salary);
    setFilteredData(sortData);
  }else if(value=='dsec'){
    const sortData= [...filteredData].sort((a, b) => b.employee_salary - a.employee_salary);
    setFilteredData(sortData);
  }else{
    setFilteredData(data)
  }
}


  return (
    <div>
      <div className="d-flex justify-content-between">
<div className="sort">
  <label className="sort-label">Sort By Salary</label>
  <select className="select sort-option" onClick={sortHandler}>
    <option >Reset</option>
    <option value='asec'>Low To High</option>
      <option value='dsec'>High to Low</option>
  </select>
      </div>
      <div className="age">
      <label className="age-label">Filter By Age</label>
      <select className="select age-option" onChange={ageChangeHandler}>
      <option>Reset</option>
      
      {
        ageRang.map((item,ind)=>{
          return (<option key={ind+1} value={item}>{item}</option>)
        })
      }
      
      </select>
      </div>
      </div>
      <table class="table table-striped border border-gray rounded">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Emp-Id</th>
            <th scope="col">Name</th>
            <th scope="col">Salary</th>
            <th scope="col">Age</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, ind) => {
            return (
              <tr key={ind + 2}>
                <th>{item.id}</th>
                <td>{item.employee_name}</td>
                <td>{item.employee_salary}</td>
                <td>{item.employee_age}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
