import Link from 'next/link';

import { TStation, } from '@/types/TStation';

interface TPropsTableStations {
  stations : TStation[];
}
const TableStations = ( { stations, } : TPropsTableStations, ) => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            ID
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Station
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Color
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        { stations.map( ( station, ) => (
          <tr
            key={ station.id }
            className="hover:bg-gray-50"
          >
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              { station.id }
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              <Link href={ `/${ station.id }` }>{ station.title }</Link>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              { station.color ? (
                <div className="flex items-center">
                  <div
                    className="w-4 h-4 rounded-full mr-2"
                    style={ { backgroundColor: station.color, } }
                  ></div>
                  <span className="text-sm text-gray-500">{ station.color }</span>
                </div>
              ) : (
                <span className="text-sm text-gray-400">No color</span>
              ) }
            </td>
          </tr>
        ), ) }
      </tbody>
    </table>
  );
};

export default TableStations;