import React, { useEffect, useState } from 'react';

const PointTable = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:8080/match/point-table");
      const jsonData = await res.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Function to reshape the data into an array of objects
  const reshapeData = (data) => {
    const teams = [];
    for (let i = 0; i < data.length; i += 9) {
      const team = {
        name: data[i],
        matches: data[i + 1],
        won: data[i + 2],
        lost: data[i + 3],
        tied: data[i + 4],
        nr: data[i + 5],
        points: data[i + 6],
        nrr: data[i + 7],
      };
      teams.push(team);
    }
    return teams;
  };

  return (
    <div className='container'>
      <h1 className=' m-10 ml-20 text-3xl bg-black text-white rounded-md px-2 py-2 font-medium w-fit'>Point Table</h1>
      <section className="text-gray-950">
        <div className="container px-5 py-10 mx-auto">
          <div className="lg:w-2/3 w-full ml-10 overflow-auto">
            <table className="table-auto w-full text-left whitespace-no-wrap">
              <thead>
                <tr>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 font-bold  bg-slate-950 text-sm text-white bg-gray-100 rounded-tl rounded-bl">Team</th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 bg-slate-950 text-white ">Mat</th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 bg-slate-950  text-white">Won</th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 bg-slate-950 text-white">Lost</th>
                  <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br bg-slate-950 text-white ">Tied</th>
                  <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br bg-slate-950 text-white">NR</th>
                  <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br bg-slate-950 text-white">Pts</th>
                  <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br bg-slate-950 text-white">NRR</th>
                </tr>
              </thead>
              <tbody>
                {reshapeData(data).map((team, index) => (
                  <tr key={index}>
                    <td className="px-4 py-3">{team.name}</td>
                    <td className="px-4 py-3">{team.matches}</td>
                    <td className="px-4 py-3">{team.won}</td>
                    <td className="px-4 py-3">{team.lost}</td>
                    <td className="px-4 py-3">{team.tied}</td>
                    <td className="px-4 py-3">{team.nr}</td>
                    <td className="px-4 py-3">{team.points}</td>
                    <td className="px-4 py-3">{team.nrr}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PointTable;
