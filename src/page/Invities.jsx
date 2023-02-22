import React, { useState } from "react";
import { SearchOutlined ,FilterOutlined } from '@ant-design/icons';
import Data from "../Data";

function Invities() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pagePerData] = useState(10);

  const indexOfLastPage = currentPage * pagePerData;
  const indexOfFirstPage = indexOfLastPage - pagePerData;
  const currentData = Data.slice(indexOfFirstPage, indexOfLastPage);
  const totalData = Data.length;
  const paginate = (page) => setCurrentPage(page);

  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalData / pagePerData); i++) {
    pageNumber.push(i);
  }

  const[inputData,setInputData]=useState("")

  const handleChange =(e)=>{
    setInputData(e.target.value);
  }
  const filterData =()=>{
    return currentData.filter(item =>item.name[0].includes(inputData))
  }

  return (
    <>
      <div className="container-fluid ful-table">
        <div className="search-box">
            <FilterOutlined  className='icon'/>
            <input type="text" placeholder="Search Candidates" onChange={handleChange}/>
            <SearchOutlined className='icon'/>
        </div>
          
        <table class="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Age</th>
              <th>Location</th>
              <th>Company</th>
              <th>Skills</th>
            </tr>
          </thead>
          {filterData().map((e) => {
            const { id, name, age, location, company, skills } = e;

            return (
              <>
                <tbody>
                  <tr key={id}>
                    <td>{name}</td>
                    <td>{age}</td>
                    <td>{location}</td>
                    <td>{company}</td>
                    <td>{skills}</td>
                  </tr>
                </tbody>
              </>
            );
          })}
        </table>

        <div className="pagination-box">
          <label>{Data.length}/ Pages</label>
           <span className="button-box">
          <button  
            onClick={() => {
              if (currentPage > 1) setCurrentPage(currentPage - 1);
            }}
            disabled={currentPage === 1}
          >
            &laquo;
          </button>
          {pageNumber.map((page) => {
            return (
              <>
                <button onClick={() => paginate(page)}>{page}</button>
              </>
            );
          })}
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={Data.length < currentPage * 10}
          >
            &raquo;
          </button>
          </span>

          Go to Page<button onClick={()=>setCurrentPage(1)}>1</button>
          </div>
        </div>
      
    </>
  );
}

export default Invities;
