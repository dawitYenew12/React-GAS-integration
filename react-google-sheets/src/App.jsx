import React, { useState } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    setLoading(true);
    google.script.run.withSuccessHandler((result) => {
      setData(result);
      setLoading(false);
    }).getSheetData();
  };

  return (
    <div className="App flex justify-center items-center flex-col mt-20">
      <h1 className="text-4xl font-normal text-cyan-50">Google Sheets Data</h1>
      <button
        className="bg-red-500 hover:bg-red-600 px-8 py-2 mt-4 rounded-md text-white font-normal text-xl"
        onClick={fetchData}
      >
        Fetch Data from Sheet
      </button>
      <h2 className="text-2xl font-normal text-cyan-50 mt-4">Email:</h2>
      
      {loading ? (
        <div className="mt-4 text-lg font-medium text-gray-500">
          Loading data, please wait...
        </div>
      ) : (
        <ul className="bg-gray-100 border p-4 w-1/3 flex flex-col justify-center text-cyan-950 rounded-md">
          {data.map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
