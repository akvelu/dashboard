import React from 'react';
import Data from '../Data'
 
function Invities() {
    return (
        <>
         <div className='container-fluid ful-table'>
         <table class="table table-striped">
     <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Location</th>
      <th scope="col">Company</th>
      <th scope="col">Skills</th>
    </tr>
  </thead>
    {Data.map(e=>{
        const{id,name,age,location,company,skills}=e

        return(
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
        )
    })}
</table>
         </div> 
        </>
    );
}

export default Invities;