'use client';

import Link from 'next/link';
import { useState } from 'react';
import SectionHeader from './components/section-header';

export default function Contact({ anchor }: { anchor: string }) {
  const [display, setDisplay] = useState(false);
  const [displayModal, setDisplayModal] = useState('hidden');

  function processForm() {
    setDisplay((prevDisplay) => !prevDisplay);
    setDisplayModal(display ? 'block' : 'hidden');
  }

  return (
    <>
      <div
        className={`${displayModal} z-30 backdrop-blur-sm fixed inset-0 bg-gray-700 bg-opacity-80 overflow-y-auto h-full w-full`}
        id="my-modal"
      >
        <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
          <div className="mt-3 text-center">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
              <svg
                className="h-6 w-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">Message Sent!</h3>
            <div className="mt-2 px-7 py-3">
              <p className="text-sm text-gray-500">Thanks for reacing out</p>
            </div>
            <div className="items-center px-4 py-3">
              <button
                onClick={processForm}
                id="ok-btn"
                className="px-4 py-2 font-medium rounded-md w-full shadow-sm bg-blue-400 hover:bg-blue-300 text-blue-800 hover:text-blue-700"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      </div>

      <div id={anchor} className="max-w-prose mx-auto py-4 text-slate-400">
        <SectionHeader title="Contact"></SectionHeader>
        <form method="post" className="grid grid-cols-10 text-slate-400 text-sm">
          <label className="col-span-full py-1">Name</label>
          <input
            className="col-span-full rounded-lg text-slate-700 p-2"
            key="name"
            id="name"
            type="text"
            name="name"
          ></input>
          <label className="col-span-full mt-3 py-1">Email Address</label>
          <input
            className="col-span-full rounded-lg text-slate-700 p-2"
            key="email"
            id="email"
            type="email"
            name="email"
          ></input>
          <label className="col-span-full mt-3 py-1">Phone</label>
          <input
            className="col-span-full rounded-lg text-slate-700 p-2"
            key="phone"
            id="phone"
            type="tel"
            name="phone"
          ></input>
          <label className="col-span-full mt-3 py-1">Message</label>
          <textarea
            className="col-span-full rounded-lg text-slate-700 p-2"
            key="message"
            id="message"
            name="message"
          ></textarea>
          <Link
            href="#"
            onClick={processForm}
            className="col-span-full my-3 py-3 rounded-lg nav-button text-center"
            type="submit"
          >
            Submit
          </Link>
        </form>
      </div>
    </>
  );
}
