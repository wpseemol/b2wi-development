import { GoMail } from 'react-icons/go';
import { PiPhoneCallLight } from 'react-icons/pi';
import { TfiLocationPin } from 'react-icons/tfi';

export default function ContactInfoSection() {
    return (
        <div className="bg-primaryColor p-5 h-full">
            <div className="text-white space-y-2">
                <h2 className="text-[28px] font-bold">Contact Info</h2>
                {/* location  */}

                <div className="flex gap-3 items-center">
                    <span className="w-14 h-14 bg-neutral-50 rounded-full text-black flex justify-center items-center text-2xl">
                        <TfiLocationPin className="group-hover:scale-105 duration-100" />
                    </span>
                    <div className="text-nowrap">
                        <h3 className=" font-medium">Location</h3>
                        <p className="font-medium">Banani, Dhaka, Bangladesh</p>
                    </div>
                </div>
                {/* location  */}
                {/* email */}
                <div className="flex gap-3 items-center">
                    <span className="w-14 h-14 bg-neutral-50 rounded-full text-black flex justify-center items-center text-2xl">
                        <GoMail className="group-hover:scale-105 duration-100" />
                    </span>
                    <div className="text-nowrap">
                        <h3 className=" font-medium">Email</h3>
                        <p className="font-medium">⁠b2winitiative@gmail.com</p>
                    </div>
                </div>
                {/* email */}

                <div className="flex gap-3 items-center">
                    <span className="w-14 h-14 bg-neutral-50 rounded-full text-black flex justify-center items-center text-2xl">
                        <PiPhoneCallLight className="group-hover:scale-105 duration-100" />
                    </span>
                    <div className="text-nowrap">
                        <h3 className=" font-medium">Phone No</h3>
                        <p className="font-medium">+8801685456708</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
