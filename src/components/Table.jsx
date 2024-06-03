import { useState } from 'react';
import { Link } from "react-router-dom";

const Table = ({ from, to, columns, rows, onDelete }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredRows = rows.filter(row =>
    columns.some(col => row[col].toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="overflow-x-auto">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center border border-gray-300 rounded-md shadow-sm">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="px-4 py-2 bg-gray-100 rounded-r-md hover:bg-gray-200 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-600"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.9 14.32a8 8 0 111.414-1.414l4.386 4.386a1 1 0 01-1.414 1.414l-4.386-4.386zM8 14a6 6 0 100-12 6 6 0 000 12z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <Link to={`/${from}/create-${to}`}>
          <button
            // onClick={onCreate}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Create
          </button>
        </Link>
      </div>

      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            {columns.map((col, index) => (
              <th
                key={index}
                className="px-4 py-2 border-b-2 border-gray-300 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
              >
                {col}
              </th>
            ))}
            <th
              className="px-4 py-2 border-b-2 border-gray-300 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider"
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-100">
              {columns.map((col, colIndex) => (
                <td
                  key={colIndex}
                  className="px-4 py-2 border-b border-gray-200 text-sm"
                >
                  {row[col]}
                </td>
              ))}
              <td className="px-4 py-2 border-b border-gray-200 text-sm text-center">
                <div className="inline-flex space-x-2">
                  <Link to={`/${from}/edit-${to}`}
                    state={row}>
                    <button
                      className="bg-blue-500 text-white px-3 py-1 rounded text-xs  w-16 hover:bg-blue-700"
                    >
                      Edit
                    </button>
                  </Link>
                  <button
                    onClick={() => onDelete(row)}
                    className="bg-red-500 text-white px-3 py-1 rounded text-xs  w-16 hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
