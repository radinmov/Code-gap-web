import { Link } from "react-router-dom";
import { useState } from "react";
import { UserCircleIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Modal from '../Modal';

export default function Header() {
    const [email, setEmail] = useState(null);
    const [mob, setMob] = useState(null);
    const [pass, setPass] = useState(null);
    const [rePass, setRePass] = useState(null);
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="wrapper-inner flex justify-center">
            <div className="header_father w-8/12">
                {/* Header Top Section */}
                <div className="header flex justify-between border-b-2 border-gray-500 h-2/5">
                    <div className="right flex">
                        <Link to={"/"} className="logo flex items-center">
                            <img
                                className="w-48"
                                alt="codegap-logo"
                                src="logos/code-gap-logo.png"
                            />
                        </Link>
                        <div className="dropdown flex relative inline-block">
                            <button className="dropbtn text-white bg-none font-bolder p-2 text-base border-0">دسته بندی</button>
                            <div className="dropdown-content hidden absolute bg-black min-w-40 z-10">
                                <Link className="text-white no-underline bg-white text-black">برنامه نویسی</Link>
                                <Link className="text-white no-underline bg-white text-black">شبکه</Link>
                                <Link className="text-white no-underline bg-white text-black">هوش مصنوعی</Link>
                            </div>
                        </div>
                    </div>
                    <div className="left w-2/4 flex items-center">
                        <input 
                            placeholder="جستجو..." 
                            className="w-4/5 h-2/5 rounded-lg" 
                            onChange={(e) => setSearch(e.target.value)} 
                        />
                    </div>
                </div>

                {/* Header Bottom Section */}
                <div className="header_bottom m-3.5 flex justify-between">
                    <div className="right flex gap-16 flex-row-reverse">
                        <Link to={"/"}>خانه</Link>
                        <Link>شهر ها</Link>
                        <Link>رویداد ها</Link>
                        <Link>پادکست</Link>
                        <Link>وبلاگ</Link>
                    </div>
                    <div className="left">
                        <button onClick={() => setOpen(true)}>
                            <div className="profile">
                                <UserCircleIcon className="text-white w-10 h-10" />
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Modal for Registration */}
            <Modal open={open} onClose={() => setOpen(false)}>
                <div className="container-modal-login p-4">
                    <p className="text-black font-bold text-3xl text-center">Register</p>
                    <div className="container-modal-inner block">
                        <div>
                            <input
                                className="block w-full p-2 rounded-md m-2"
                                placeholder="شماره موبایل"
                                type="text"
                                onChange={(e) => setMob(e.target.value)}
                            />
                            <input
                                className="block w-full p-2 rounded-md m-2"
                                placeholder="ایمیل"
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                className="block w-full p-2 rounded-md m-2"
                                placeholder="رمز عبور"
                                type="password"
                                onChange={(e) => setPass(e.target.value)}
                            />
                            <input
                                className="block w-full p-2 rounded-md m-2"
                                placeholder="رمز عبور تکرار"
                                type="password"
                                onChange={(e) => setRePass(e.target.value)}
                            />
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
    );
}
