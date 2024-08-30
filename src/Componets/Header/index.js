import { Link } from "react-router-dom";
import { useState } from "react";
import { UserCircleIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Modal from '../Modal';


export default function Header() {
    const [Email, SetEmail] = useState(null);
    const [Mob, SetMob] = useState(null);
    const [Pass, SetPass] = useState(null);
    const [RePass, SetRePass] = useState(null);
    const [open, setOpen] = useState(false);
    const [Search, SetSearch] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="wrapper-inner flex justify-center">
            <div className="header_father w-full lg:w-8/12 px-4">
                <div className="header flex justify-between items-center border-b-2 border-gray-500 py-4">
                    <div className="flex items-center">
                        <Link to={"/"} className={`logo ${menuOpen ? "hidden" : "block"}`}>
                            <img
                                className="w-32 lg:w-48"
                                alt="codegap-logo"
                                src="logos/code-gap-logo.png"
                            />
                        </Link>
                    </div>
                    <div className="lg:hidden">
                        <button onClick={() => setMenuOpen(!menuOpen)}>
                            {menuOpen ? (
                                <XMarkIcon className="w-8 h-8 text-white" />
                            ) : (
                                <Bars3Icon className="w-8 h-8 text-white" />
                            )}
                        </button>
                    </div>
                    <div className={`lg:flex lg:items-center ${menuOpen ? "block" : "hidden"} lg:block`}>
                        <div className="right flex flex-col lg:flex-row items-center">
                            <div className="dropdown relative inline-block lg:ml-4">
                                <button className="dropbtn text-white font-bolder p-2 text-base border-0">
                                    دسته بندی
                                </button>
                                <div className="dropdown-content hidden absolute bg-black min-w-40 z-10">
                                    <Link className="text-black no-underline bg-white p-2 block">
                                        برنامه نویسی
                                    </Link>
                                    <Link className="text-black no-underline bg-white p-2 block">
                                        شبکه
                                    </Link>
                                    <Link className="text-black no-underline bg-white p-2 block">
                                        هوش مصنوعی
                                    </Link>
                                </div>
                            </div>
                            <input
                                placeholder="جستجو..."
                                className="w-full lg:w-4/5 h-10 rounded-lg px-4 mt-4 lg:mt-0"
                                onChange={(e) => SetSearch(e.target.value)}
                            />
                        </div>
                        <div className="header_bottom flex flex-col lg:flex-row justify-between mt-4 lg:mt-0">
                            <div className="right flex gap-4 lg:gap-16 flex-row-reverse">
                                <Link>وبلاگ</Link>
                                <Link>پادکست</Link>
                                <Link>رویداد ها</Link>
                                <Link>شهر ها</Link>
                                <Link to={"/"}>خانه</Link>
                            </div>
                            <div className="left flex justify-end mt-4 lg:mt-0">
                                <button onClick={() => setOpen(true)}>
                                    <div className="profile">
                                        <div className="text-white w-10 h-10">
                                            <UserCircleIcon />
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal open={open} onClose={() => setOpen(false)}>
                    <div className="container-modal-login p-4">
                        <p className="text-black font-bold text-3xl text-center">Register</p>
                        <div className="container-modal-inner block">
                            <div>
                                <input className="block w-full p-2 rounded-md m-2" placeholder="شماره موبایل" type="text" onChange={(e) => SetMob(e.target.value)} />
                                <input className="block w-full p-2 rounded-md m-2" placeholder="ایمیل" type="Email" onChange={(e) => SetEmail(e.target.value)} />
                                <input className="block w-full p-2 rounded-md m-2" placeholder="رمز عبور " type="Password" onChange={(e) => SetPass(e.target.value)} />
                                <input className="block w-full p-2 rounded-md m-2" placeholder="رمز عبور تکرار" type="text" onChange={(e) => SetRePass(e.target.value)} />
                            </div>
                            <button
                                className="btn bg-black text-white w-full rounded-md m-2"
                                onClick={() => setOpen(false)}
                            >
                                لغو
                            </button>
                            <button
                                className="btn bg-black text-white w-full rounded-md m-2"
                                onClick={() => setOpen(false)}
                            >
                                ثبت
                            </button>
                        </div>
                    </div>
                </Modal>
            </div>
        </div>
    );
}
