'use client';

import { useEffect, useRef, useState, } from 'react';

import { cn, } from '@/utils/cn';

interface IPropsTextLoopedScroll {
  text : string
  className ?: string
  speed ?: number
  pauseOnHover ?: boolean
}

export default function TextLoopedScroll( { text, className, speed = 50, pauseOnHover = true, } : IPropsTextLoopedScroll, ) {
  const containerRef = useRef<HTMLDivElement>( null, );
  const textRef = useRef<HTMLSpanElement>( null, );
  const [ shouldScroll, setShouldScroll, ] = useState( false, );
  const [ animationDuration, setAnimationDuration, ] = useState( 0, );

  useEffect( () => {
    const checkOverflow = () => {
      if ( containerRef.current && textRef.current ) {
        const containerWidth = containerRef.current.offsetWidth;
        const textWidth = textRef.current.scrollWidth;

        if ( textWidth > containerWidth ) {
          setShouldScroll( true, );
          // Calculate animation duration based on text width and speed
          const duration = ( textWidth + containerWidth ) / speed;
          setAnimationDuration( duration, );
        } else {
          setShouldScroll( false, );
        }
      }
    };

    checkOverflow();
    window.addEventListener( 'resize', checkOverflow, );

    return () => window.removeEventListener( 'resize', checkOverflow, );
  }, [ text, speed, ], );

  return (
    <div
      ref={ containerRef }
      className={ cn( 'relative overflow-hidden whitespace-nowrap', className, ) }
    >
      { shouldScroll ? (
        <div
          className={ cn( 'flex animate-scroll-seamless', pauseOnHover && 'hover:animation-play-state-paused', ) }
          style={ {
            animationDuration: `${ animationDuration }s`,
          } }
        >
          <span
            ref={ textRef }
            className="flex-shrink-0 pr-8"
          >
            { text }
          </span>
          <span className="flex-shrink-0 pr-8">{ text }</span>
        </div>
      ) : (
        <span
          ref={ textRef }
          className="inline-block"
        >
          { text }
        </span>
      ) }

      <style jsx>{ `
        @keyframes scroll-seamless {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll-seamless {
          animation: scroll-seamless linear infinite;
        }
        .hover\\:animation-play-state-paused:hover {
          animation-play-state: paused;
        }
      ` }</style>
    </div>
  );
}