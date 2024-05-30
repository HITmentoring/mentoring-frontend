import React from 'react';
import { Link } from "react-router-dom";

const Table = ({ from, to, columns, rows, onDelete }) => {

  return (
    <div className="overflow-x-auto">
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
