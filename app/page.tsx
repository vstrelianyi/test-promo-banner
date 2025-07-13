import { Metadata, } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import stations from '@/constants/stations.json';

export default function PageStations() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="container">
        <main className="flex flex-col">

          { /* Stations Table */ }
          <section className="mt-8 w-full">
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">All Stations</h2>
              </div>
              <div className="overflow-x-auto">
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
              </div>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}

export async function generateMetadata () : Promise<Metadata> {
  return {
    title: 'Stations',
    description: 'Listen to Stations',
    openGraph: {
      title: 'Stations',
      description: 'Listen to Stations',
    },
    // alternates: {
    //   canonical: '',
    // },
  };
}