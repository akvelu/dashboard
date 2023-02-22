import React from 'react';

function Masterlist() {
    return (
        <>
        <div className='container-master'>
        <div className='fileupload-con'>
          <h5>Upload a file from your computer</h5>
          <label htmlFor="files">Choose file : </label>
          <input type='file' />
        </div>
        <div className='instr-con'>
            <h5>Download template</h5>
            <h6>Instrctions</h6>
            <ul>
                <li>File formate should be .csv</li>
                <li>File size shouldn't exceed 3 MB</li>
            </ul>
        </div>
        </div>
        </>
    );
}

export default Masterlist;