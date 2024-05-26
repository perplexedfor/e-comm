import service from '../../../public/service.png';
import email from '../../../public/email.png';
import location from '../../../public/location.png';
import Image from 'next/image';

export default function Subfooter() {
    return (
<div className="flex flex-col sm:flex-row w-full items-center border-t  min-h-[300px]">
        <div className="w-[100%] sm:w-[35%] min-h-[300px] bg-slate-200 p-10">
        <div className="text-6xl">
            Eletrax
        </div>
        <div className="text-wrap">
        Manufacturing of the offered products is done as per the set industry standards, by our well trained professionals, employing the highest grade raw materials and progressive machines. Offered products are highly appreciated across the market for their features like optimum quality and reliable performance.
        </div>
        </div>
        <div className="w-[100%] sm:w-[65%] min-h-[300px] bg-transparent bg-[url('/background3.png')] bg-cover  p-10 text-blue-800">
        <div className="text-3xl py-3">Contact Us</div>
        <div className="flex py-3">
            <div>
            <Image src={service} alt="service" objectFit="cover" width={25}/>
            </div>
            <div className="flex flex-row">
            <div className="px-2">+91 9810339372</div>
            <div className="px-2">+91 9354342750</div>
            </div>
        </div>
        <div className="flex py-3">
            <Image src={email} alt="email" objectFit="cover" width={25}/>
            <div className="px-2">eletrax@gmail.com</div>
        </div>
        <div className="flex py-3">
            <Image src={location} alt="location" objectFit="cover" width={25}/>
            <div></div>
        </div>
        </div>
</div> )
}