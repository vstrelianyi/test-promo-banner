import { Metadata, } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound, redirect, } from 'next/navigation';

import Phone from '@/components/Phone/Phone';
import stations from '@/constants/stations.json';

import { TStation, } from '@/types/TStation';

export const revalidate = 60;

type TParams = Promise<{ 'station-id' : string, }>;

const PageStation = async ( { params, } : { params : TParams, }, ) => {
  const { 'station-id': stationId, } = await params;
  const station : TStation | undefined = stations.find( ( station, ) => station.id === Number( stationId, ), );

  if ( !station ) {
    redirect( '/', );
    // return notFound();
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="container">
        <main className="flex flex-col">

          <section className="hidden md:flex w-full bg-blue border-[1px] border-[#BFDBFE] rounded-[16px] px-[50px]">

            { /* COL1 */ }
            <div className="flex gap-[24px] items-center shrink-0 grow-0 py-[74px]">
              <Image
                src="/images/qr-code.png"
                alt="logo"
                width={ 108 }
                height={ 108 }
              />
              <div className="flex flex-col gap-[10px]">
                <Image
                  src="/images/btn-appstore.png"
                  alt="logo"
                  width={ 162 }
                  height={ 48 }
                />
                <Image
                  src="/images/btn-googleplay.png"
                  alt="logo"
                  width={ 162 }
                  height={ 48 }
                />
              </div>
            </div>

            { /* COL2 */ }
            <div className="shrink-0 grow-0 relative w-[184px] mx-[75px]">
              <Phone
                className="absolute bottom-0 left-0"
                station={ station }
              />
              { /* <div className="image-wrapper absolute bottom-0 left-0">
								<Image
									src="/images/phone.png"
									alt="logo"
									width={ 200 }
									height={ 431 }
								/>
							</div> */ }
            </div>

            { /* COL3 */ }
            <div className="flex flex-col justify-center items-end gap-[10px] py-[74px]">
              <h1 className="text-[28px] font-bold text-primary">
                Continue listening through the app
              </h1>
              <p className="text-right"><b>{ station.title }</b> broadcasts are available on our  mobile app. Listening to the live broadcast provides an immediate solution anywhere and in any situation.</p>
              <Link
                className="flex items-center gap-[10px] hover:underline"
                href="/"
              >
                <svg
                  width="8"
                  height="14"
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.99996 1.66669L1.66663 7.00002L6.99996 12.3334"
                    stroke="#111827"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="font-[600]">More information</span>
              </Link>
            </div>

          </section>

        </main>
      </div>
    </div>
  );
};

export default PageStation;

export async function generateStaticParams() {
  return stations.map( ( station, ) => ( {
    'station-id': station.id.toString(),
  } ), );
}

export async function generateMetadata ( { params, } : { params : TParams, }, ) : Promise<Metadata> {
  const {
    'station-id': stationId,
  } = await params;

  const station = stations.find( ( station, ) => station.id === Number( stationId, ), );

  return {
    title: `${ station?.title }`,
    description: `Listen to ${ station?.title }`,
    openGraph: {
      title: `${ station?.title }`,
      description: `Listen to ${ station?.title }`,
    },
    // alternates: {
    //   canonical: '',
    // },
  };
}