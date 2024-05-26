
import Link from "next/link"
import { ReactElement, ReactNode, SVGProps } from 'react';
import Image from 'next/image';
import service from '../../../public/service.png';
import email from '../../../public/email.png';
import location from '../../../public/location.png';
export default function Header(): ReactNode{
    return (<header className=" shadow-inner">
      <div className=" relative flex justify-between">
      <div className="w-[100%] lg:w-[25%] bg-slate-300 flex flex-col px-[28px] py-[18px]">
      <div className="text-xl font-bold tracking-tighter sm:text-5xl flex justify-center lg:justify-end"><div className="flex flex-col justify-between text-indigo-950">Eletra</div><span className="text-orange-700 text-4xl sm:text-6xl">X</span></div>
      <div className="flex justify-center lg:justify-end align-text-top">We make safe homes</div>
      </div>
      <div className="bg-gray-200 w-[75%] hidden lg:block">
        <div className="flex flex-row py-8 pl-4">
        <div className="flex px-8">
          <Image src={service} alt="service" objectFit="cover" width={25} className="py-4"/>
          <div className="p-4">+91 9810339372</div>
        </div>
        <div className="bg-gray-300 w-[1px]">
          </div>
        <div className="flex px-8">
          <Image src={email} alt="email" objectFit="cover" width={25} className="py-4"/>
          <div className="p-4">eletrax2024@gmail.com</div>
        </div>
        <div className="bg-gray-300 w-[1px]">
        </div>
        <div className="flex px-8"  >
          <Image src={location} alt="location" objectFit="cover" width={25} className="py-4"/>   
          <div className="pl-2 flex flex-col"><div>Plot no-12, khasra no-58, Milan garden E-block, Mandoli.</div><div>Delhi-110095</div></div>
        </div>
        </div>
      </div>
      </div>
      
    </header>)
}

