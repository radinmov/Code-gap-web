import { Link } from "react-router-dom";
import { useState } from "react";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { Modal } from "../Modal/Modal";
export default function Header({send}) {
    const [modalOpen, setModalOpen] = useState(false)
    const [Search, SetSearch] = useState(null);
    return (
        <div className="wrapper-inner flex justify-center">
            <div className="header_father w-8/12">
                <div className="header flex  justify-between border-b-2 border-gray-500 h-2/5">
                    <div className="right flex">
                        <Link to={"/"} className="logo flex items-center">
                            <img
                                className="w-48"
                                alt="codegap-logo"
                                src="logos/code-gap-logo.png"
                            />
                        </Link>
                        <div class="dropdown flex relative inline-block">
                            <button class="dropbtn text-white bg-none font-bolder p-2 text-base border-0">دسته بندی</button>
                            <div class="dropdown-content hidden absolute bg-black min-w-40 z-10">
                                <Link className="text-white hidden no-underline bg-white text-black">برنامه نویسی  </Link>
                                <Link className="text-white hidden no-underline bg-white text-black">شبکه </Link>
                                <Link className="text-white hidden no-underline bg-white text-black">هوش مصنوعی </Link>
                            </div>
                        </div>
                    </div>
                    <div className="left w-2/4 flex items-center">
                        <input placeholder="جستجو..." className=" w-4/5 h-2/5 rounded-lg" onChange={(e) => SetSearch(e.target.value)} />
                    </div>
                </div>
                <div className="header_bottom m-3.5  flex justify-between ">
                    <div className="right flex gap-16 flex-row-reverse" >
                        <Link>وبلاگ</Link>
                        <Link>پادکست</Link>
                        <Link>رویداد ها</Link>
                        <Link>شهر ها</Link>
                        <Link to={"/"}>خانه</Link>
                    </div>
                    <div className="left" >
                        <button onClick={() => setModalOpen(true)}>                 
                       <div className="profile">
                            <div className="text-white w-10 h-10">
                                <UserCircleIcon />
                            </div>
                        </div>
                        </button>
                        <button onClick={() => setModalOpen(false)}>colse</button>
                        {modalOpen && (
                            <Modal />
                            
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}