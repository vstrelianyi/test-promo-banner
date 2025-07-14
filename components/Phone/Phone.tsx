'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, } from 'react';
import { BiDotsVerticalRounded, } from 'react-icons/bi';
import { FaSignal, FaWifi, } from 'react-icons/fa';
import { FaChromecast, } from 'react-icons/fa';
import { FaRegMoon, } from 'react-icons/fa';
import { FaChevronLeft, FaChevronRight, } from 'react-icons/fa';
import { FaChevronDown, } from 'react-icons/fa6';
import { FcLike, } from 'react-icons/fc';
import { IoIosBatteryFull, } from 'react-icons/io';
import { IoShareSocialOutline, } from 'react-icons/io5';

import { cn, } from '@/utils/cn';

import { TStation, } from '@/types/TStation';

interface TPropsPhone {
  className : string;
  station : TStation;
}
const Phone = ( { className, station, } : TPropsPhone, ) => {
  return (
    <div
      className={ cn(
        'Phone w-[200px] h-[350px] bg-black rounded-t-[24px] py-[20px] px-[10px]',
        'relative',
        'flex flex-col justify-start items-center',
        className,
      ) }
    >

      { /* PHONE TOP */ }
      <div className="flex justify-between items-center mb-[20px] px-[20px] w-full">
        <span className="text-white text-[10px] font-[600]">9:41</span>
        <div className="flex items-center gap-[5px]">
          <FaSignal
            color="white"
            size={ 10 }
          />
          <FaWifi
            color="white"
            size={ 10 }
          />
          <IoIosBatteryFull
            color="white"
            size={ 15 }
          />
        </div>
      </div>

      { /* PHONE CONTROLS */ }
      <div className="flex justify-between items-center w-full">
        <BiDotsVerticalRounded
          color="white"
          size={ 15 }
        />
        <div className="flex items-center gap-[10px]">
          <FaChromecast
            color="white"
            size={ 15 }
          />
          <FaRegMoon
            color="white"
            size={ 15 }
          />
          <IoShareSocialOutline
            color="white"
            size={ 15 }
          />
          <FcLike
            color="white"
            size={ 15 }
          />
        </div>
        <FaChevronDown
          color="white"
          size={ 10 }
        />
      </div>

      { /* PHONE MAIN */ }
      <div className="PhoneMain flex flex-col justify-center items-center pt-[30px] mb-[10px] w-full">
        <span className="text-white text-[18px] font-[600] text-center mb-[20px] truncate max-w-[180px]">{ station.title }</span>
        <div className="flex justify-between items-center w-full">
          <Link
            className="cursor-pointer"
            href={ `/${ station.id - 1 }` }
          >
            <FaChevronLeft
              color="white"
              size={ 20 }
            />
          </Link>
          <Image
            src={ station.logo }
            alt={ station.title }
            width={ 100 }
            height={ 100 }
          />
          <Link
            className="cursor-pointer"
            href={ `/${ station.id + 1 }` }
          >
            <FaChevronRight
              color="white"
              size={ 20 }
            />
          </Link>
        </div>
      </div>

      { /* PHONE BOTTOM */ }
      <Image
        className="mb-[20px]"
        src="/images/phone-volume.png"
        alt="phone-bottom"
        width={ 140 }
        height={ 16 }
      />

      <Image
        src="/images/phone-controls.png"
        alt={ station.title }
        width={ 140 }
        height={ 48 }
      />

      { /* STATIONLOGO */ }
      <svg
        width="88"
        height="88"
        viewBox="0 0 88 88"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-[50px] right-[-60px]"
      >
        <rect
          width="88"
          height="88"
          rx="8"
          fill={ station.color ?? '#000000' }
        />
        <path
          d="M42.404 53.6391H22.5586L24.8462 44.8888H27.8202L32.7959 25.844H29.8219L32.1096 17.0938H51.955C53.7279 17.0938 55.3865 17.1223 56.902 17.1795C58.4176 17.2367 59.6758 17.3225 60.7339 17.4369C61.7919 17.5513 62.7356 17.6943 63.5934 17.8944C65.9955 18.4378 67.7684 19.6102 68.8836 21.4403C69.9989 23.299 70.2562 25.4723 69.5985 28.0173C69.1124 29.9046 68.1687 31.6204 66.7961 33.1646C65.4236 34.6801 63.8508 35.7954 62.0493 36.5389L64.9088 44.8888H67.5396L65.252 53.6391H52.098L48.0374 38.7407H43.5478L41.9465 44.9174H44.6917L42.404 53.6391ZM47.0937 25.1292L45.2636 32.0779H46.8363C48.8952 32.0779 50.325 32.0207 51.0971 31.9063C51.9264 31.792 52.6699 31.4202 53.3562 30.8483C54.0425 30.305 54.5 29.5615 54.7574 28.6178C55.0147 27.6742 54.9289 26.9307 54.5286 26.3588C54.1282 25.7869 53.5277 25.4437 52.7271 25.3007C51.955 25.1863 50.4966 25.1292 48.3519 25.1292H47.0937Z"
          fill="white"
        />
        <path
          d="M54.1303 64.1596C54.1017 64.3312 53.9301 64.4742 53.7585 64.4742H52.7577C52.4717 64.4742 52.2715 64.131 52.4145 63.8737C52.6719 63.4161 53.0436 63.1016 53.4726 63.1016C53.9301 63.1302 54.2447 63.5877 54.1303 64.1596Z"
          fill="white"
        />
        <path
          d="M21.5259 56.4961L17.7227 70.794H60.4733L64.2765 56.4961H21.5259ZM33.2215 68.2204H25.2719C25.0718 68.2204 24.9288 67.9916 24.9574 67.7914L25.3577 66.1901C25.3863 66.0471 25.5007 65.9327 25.6437 65.9327H25.9582C26.1012 65.9327 26.2156 65.8183 26.2442 65.7039L27.2736 61.5575C27.3308 61.3574 27.1592 61.1858 26.9591 61.1858C26.7875 61.1858 26.6445 61.0428 26.6445 60.8712C26.6445 60.8427 26.6445 60.8141 26.6731 60.7855L27.0449 59.5844C27.0735 59.4415 27.2164 59.3843 27.3308 59.3843H31.8203C32.0205 59.3843 32.1635 59.5844 32.1063 59.7846L31.7346 60.957C31.706 61.1 31.563 61.1286 31.4486 61.1286H31.0769C30.9339 61.1286 30.8195 61.2716 30.7623 61.4146L29.7329 65.5895C29.6757 65.7897 29.8186 65.9899 30.0188 65.9899H31.5058C31.6488 65.9899 31.7632 65.8755 31.8203 65.7611L32.0777 64.7889C32.1063 64.6459 32.2493 64.5601 32.3923 64.5601H33.9078C34.108 64.5601 34.251 64.7317 34.2224 64.9318L33.4503 68.0202C33.4789 68.0774 33.3645 68.2204 33.2215 68.2204ZM39.5412 62.2152L38.5403 65.9327H39.0837L38.6261 67.9916C38.5975 68.106 38.5117 68.2204 38.3974 68.2204H34.4512C34.2796 68.2204 34.1652 68.0202 34.2224 67.8772L34.5941 66.1615C34.6227 66.0471 34.7085 65.9613 34.8515 65.9613H35.1089C35.2232 65.9613 35.309 65.8755 35.3376 65.7897L35.7666 64.4457C35.8237 64.2741 35.7094 64.1312 35.5378 64.1312C35.3948 64.1312 35.2804 64.0168 35.2804 63.8738C35.2804 63.8452 35.2804 63.8452 35.2804 63.8166L35.6808 62.1295C35.7094 62.0151 35.7951 61.9579 35.9095 61.9579H39.3124C39.484 61.9293 39.5984 62.0723 39.5412 62.2152ZM40.1131 60.2135C39.9701 60.8141 39.198 61.3002 38.0542 61.3002C36.9676 61.3002 36.3671 60.8998 36.5672 60.2135C36.7102 59.613 37.5967 59.1269 38.6261 59.1269C39.6556 59.1269 40.2561 59.5844 40.1131 60.2135ZM48.3773 64.2169H48.1485C48.0627 64.2169 47.9769 64.1884 47.9197 64.2741L44.6884 68.106C44.6312 68.1632 44.5454 68.249 44.4597 68.249H42.2292C42.0862 68.249 41.9718 68.106 41.9146 67.963L40.7994 64.3599C40.7708 64.2169 40.6278 64.1312 40.5134 64.1312C40.3419 64.1312 40.1989 63.9882 40.1989 63.8166C40.1989 63.788 40.1989 63.7594 40.1989 63.7308L40.5706 62.1867C40.5992 62.0437 40.7422 61.9579 40.8852 61.9579H44.6884C44.8886 61.9579 45.0316 62.1295 45.003 62.3296L44.6312 63.9596C44.6026 64.1026 44.4597 64.2455 44.3167 64.2455H44.2309C44.0307 64.2455 43.8877 64.3599 43.9163 64.5601L44.1451 65.7611C44.2023 66.0185 44.5454 66.1615 44.717 65.9327L46.0038 64.2455H45.7751C45.5749 64.2455 45.4319 63.9882 45.4605 63.788L45.8322 62.2152C45.8608 62.0723 46.0038 61.9579 46.1468 61.9579H48.749C48.9492 61.9579 49.0922 62.1295 49.0636 62.3296L48.6918 63.9596C48.6346 64.0454 48.5202 64.2169 48.3773 64.2169ZM56.956 65.275C56.9274 65.4752 56.7558 65.6467 56.5556 65.6467H52.2377C52.0375 65.6467 51.8659 65.7325 51.8373 65.9327C51.8088 66.1329 51.8373 66.2758 51.8945 66.4188C52.0089 66.7334 52.2663 66.9335 52.6952 66.9335C53.067 66.9335 53.4101 66.6762 53.6961 66.333C53.7819 66.2187 53.8962 66.1901 54.0392 66.1901L55.6692 66.3616C55.755 66.3616 55.8121 66.3902 55.8693 66.4474C56.0409 66.5904 56.0695 66.8764 55.8979 67.0479C55.0401 67.82 53.8104 68.249 52.3521 68.249C49.2351 68.249 48.4345 66.7334 48.8634 65.0748C48.9778 64.5887 49.2065 64.1598 49.4925 63.7594C50.379 62.6156 51.9517 61.9293 53.7247 61.9293C55.0687 61.9293 56.3269 62.444 56.7844 63.5307C57.0418 63.9882 57.099 64.5601 56.956 65.275Z"
          fill="white"
        />
        <defs>
          <linearGradient
            id="paint0_linear_0_631"
            x1="44"
            y1="0"
            x2="44"
            y2="88"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4F46E5"/>
            <stop
              offset="1"
              stopColor="#453EC9"
            />
          </linearGradient>
        </defs>
      </svg>

    </div>
  );
};

export default Phone;