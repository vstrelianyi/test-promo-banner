import { Metadata, } from 'next';

import TableStations from '@/components/TableStations/TableStations';
import stations from '@/constants/stations.json';

export const revalidate = 60;

export default async function PageStations() {
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

                <TableStations stations={ stations } />
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