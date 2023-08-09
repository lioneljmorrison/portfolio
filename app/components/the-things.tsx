import Link from 'next/link';
import { Things } from '../interfaces';
import Image from 'next/image';

export default function TheThings({ data }: { data?: Things }) {
  const labels: string[] = ['item', 'item', 'item', 'item', 'item'];
  const links: string[] = ['link', 'link'];

  return (
    <div className="bg-gray-700 text-slate-400">
      <div className="max-w-7xl">
        <div className="max-w-lg mx-auto">
          <div className="text-2xl text-slate-300 py-5">Stuff that I've Built</div>
          {labels.map((project: any, idx: number) => (
            <div key={idx} className="flex">
              <Image
                src="https://kaiwagyu.com/wp-content/uploads/2022/12/Ora-King-1.jpeg"
                width={500}
                height={250}
                alt="Alt Text"
                loading="lazy"
              ></Image>
              <div className="flex flex-col space-x-5 text-xs">
                <div className="p-3 pr-0 text-right text-lg text-slate-300">Project Name</div>
                <div className="p-3 pr-0 max-w-full text-left bg-gray-800 rounded">TL;DR</div>
                <div className="flex flex-row-reverse py-3">
                  {labels.map((label: string, idx: number) => (
                    <div className="text-xs py-1 px-2 m-1 bg-gray-800 border-gray-900 rounded" key={idx}>
                      {label}
                    </div>
                  ))}
                </div>
                <div className="flex flex-row-reverse py-3">
                  {links.map((link: string, idx: number) => (
                    <Link href="#" className="text-xs py-1 px-2 m-1 hover:underline" key={idx}>
                      {link}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
