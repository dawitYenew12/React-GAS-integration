import React, { useState } from 'react';

function App() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    google.script.run.withSuccessHandler((result) => {
      setData(result);
    }).getSheetData();
  };

  return (
    <div className="App flex justify-center items-center flex-col mt-20">
      <h1 className='text-4xl font-normal'>Google Sheets Data</h1>
      <button className='bg-blue-500 px-4 py-2 mt-4 rounded-md' onClick={fetchData}>Fetch Data from Sheet</button>
      <ul className='bg-gray-50 border p-4 mt-4 w-1/3 flex flex-col justify-center'> 
        {data.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
