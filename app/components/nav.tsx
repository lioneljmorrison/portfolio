'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function MainNav() {
  const [display, setDisplay] = useState(false);
  const [displayCss, setDisplayCss] = useState('hidden');

  function mobileMenuIconClick() {
    setDisplay((prevDisplay) => !prevDisplay);
    setDisplayCss(display ? 'hidden' : 'md:hidden');
    console.log(displayCss);
  }

  return (
    <nav className="bg-gray-800 text-slate-50">
      <div className="max-w-7xl mx-auto py-4 px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div>Portfolio</div>
          <div className="hidden md:flex items-center space-x-5 text-sm">
            <Link
              href=""
              className="py-1 px-2 hover:bg-gray-700 transition transition-duration-300 rounded"
            >
              About Me
            </Link>
            <Link
              href=""
              className="py-1 px-2 hover:bg-gray-700 transition transition-duration-300 rounded"
            >
              Somethings I've Built
            </Link>
            <Link
              href=""
              className="py-1 px-2 hover:bg-gray-700 transition transition-duration-300 rounded"
            >
              Other Note Worthy Projects
            </Link>
            <Link
              href=""
              className="py-1 px-2 hover:bg-gray-700 transition transition-duration-300 rounded"
            >
              Contact
            </Link>
            <Link
              href=""
              className="bg-blue-400 hover:bg-blue-300 text-blue-800 hover:text-blue-700 rounded shadow py-1 px-2 transition transition-duration-300"
            >
              Resume
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={mobileMenuIconClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`${displayCss} px-4 transition transition-duration-300`}>
        <Link
          href=""
          className="block py-3 px-3 text-sm hover:bg-gray-700 text-right"
        >
          Somethings I've Built
        </Link>
        <Link
          href=""
          className="block py-3 px-3 text-sm hover:bg-gray-700 text-right"
        >
          About Me
        </Link>
        <Link
          href=""
          className="block py-3 px-3 text-sm hover:bg-gray-700 text-right"
        >
          Other Note Worthy Projects
        </Link>
        <Link
          href=""
          className="block py-3 px-3 text-sm hover:bg-gray-700 text-right"
        >
          Contact
        </Link>
        <Link
          href=""
          className="block py-3 px-3 text-sm hover:bg-gray-700 text-right"
        >
          Resume
        </Link>
      </div>
    </nav>
  );
}
