import { Link } from "react-router-dom";
import useTitle from "../../Componets/Hook/useTitle";
import "./Style.css"
import { useState } from "react";

export const HomePage = () => {
  const title = useTitle("home");
  const [Search, SetSearch] = useState("")
  return (
    <div className="wrapper">
      <div className="wrapper-inner">
        <div className="header flex border-b-2 border-gray-500">
          <div className="right flex ">
            <div className="logo">
              <img
                className="bg-black w-32  "
                alt="codegap-logo"
                src="logos/code-gap-logo.png"
              />
            </div>
            <div class="dropdown bg-black relative inline-block">
              <button class="dropbtn text-white font-bolder p-2 text-base border-0">دسته بندی</button>
              <div class="dropdown-content hidden absolute bg-black min-w-40 z-10">
                <Link className="text-white hidden no-underline">خانه </Link>
                <Link className="text-white hidden no-underline">شهر ها</Link>
                <Link className="text-white hidden no-underline">رویداد ها</Link>
                <Link className="text-white hidden no-underline">پادکست ها</Link>
                <Link className="text-white hidden no-underline">وبلاگ</Link>
                <Link className="text-white hidden no-underline">تماس با ما </Link>
              </div>
            </div>
          </div>
          <div className="left">
            <input onChange={(e) => SetSearch(e.target.value)} />
            <img className="w-4" src="icons/search_icon.png" alt="search-icon" />
          </div>

        </div>
        <div className="header_bottom">
          <Link>خانه</Link>
          <Link>شهر ها</Link>
          <Link>رویداد ها</Link>
          <Link>پادکست</Link>
          <Link>وبلاگ</Link>
          <div className="profile">
            <Link>
              <img src="icons/profile_icon.png" alt="profile" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
