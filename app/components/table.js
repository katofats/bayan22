import React from 'react'

const Table = () => {
  return (
    <div className="relative overflow-x-auto">
      <div className="w-full">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-800">
          <thead className="bg-gradient-to-r from-blue-500 to-blue-600">
            <tr>
              <th className="px-4 py-4 text-sm font-semibold text-white">No.</th>
              <th className="px-4 py-4 text-sm font-semibold text-white">Names</th>
              <th className="px-4 py-4 text-sm font-semibold text-white">Signatures</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            <tr className="hover:bg-gray-50 transition duration-150">
              <td className="px-4 py-3 text-sm">1.</td>
              <td className="px-4 py-3 text-sm font-medium">Latifah Nagayonga</td>
              <td className="px-4 py-3 text-sm"></td>
            </tr>
            <tr className="hover:bg-gray-50 transition duration-150">
              <td className="px-4 py-3 text-sm">2.</td>
              <td className="px-4 py-3 text-sm font-medium">Gayonga HABIBU</td>
              <td className="px-4 py-3 text-sm"></td>
            </tr>
            <tr className="hover:bg-gray-50 transition duration-150">
              <td className="px-4 py-3 text-sm">3.</td>
              <td className="px-4 py-3 text-sm font-medium">Muhamad Kazibwe</td>
              <td className="px-4 py-3 text-sm"></td>
            </tr>
            <tr className="hover:bg-gray-50 transition duration-150">
              <td className="px-4 py-3 text-sm">4.</td>
              <td className="px-4 py-3 text-sm font-medium">Nanyonga Saudah</td>
              <td className="px-4 py-3 text-sm"></td>
            </tr>
            <tr className="hover:bg-gray-50 transition duration-150">
              <td className="px-4 py-3 text-sm">5.</td>
              <td className="px-4 py-3 text-sm font-medium">HATIMU Muyanja</td>
              <td className="px-4 py-3 text-sm"></td>
            </tr>
            <tr className="hover:bg-gray-50 transition duration-150">
              <td className="px-4 py-3 text-sm">6.</td>
              <td className="px-4 py-3 text-sm font-medium">Daddy Ahmed Gayonga</td>
              <td className="px-4 py-3 text-sm"></td>
            </tr>
            <tr className="hover:bg-gray-50 transition duration-150">
              <td className="px-4 py-3 text-sm">7.</td>
              <td className="px-4 py-3 text-sm font-medium">Daddy Muhamad Mayega</td>
              <td className="px-4 py-3 text-sm"></td>
            </tr>
            <tr className="hover:bg-gray-50 transition duration-150">
              <td className="px-4 py-3 text-sm">8.</td>
              <td className="px-4 py-3 text-sm font-medium">Abdul HAMID Kyeyune Jr</td>
              <td className="px-4 py-3 text-sm"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Table
