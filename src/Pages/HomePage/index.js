import { Link } from "react-router-dom";
import useTitle from "../../Componets/Hook/useTitle";
import "./Style.css"
import { useState } from "react";
import { UserCircleIcon } from  "@heroicons/react/24/solid";

export const HomePage = () => {
  const title = useTitle("home");
  const [Search, SetSearch] = useState("")
  return (
    <div className="wrapper">
      <div className="wrapper-inner flex justify-center">
        <div className="header_father w-8/12">
          <div className="header flex flex-row-reverse justify-between border-b-2 border-gray-500 h-2/5">
            <div className="right flex  flex-row-reverse">
              <div className="logo flex items-center">
                <img
                  className=" w-32  "
                  alt="codegap-logo"
                  src="logos/code-gap-logo.png"
                />
              </div>
              <div class="dropdown bg-black flex relative inline-block">
                <button class="dropbtn text-white bg-none font-bolder p-2 text-base border-0">دسته بندی</button>
                <div class="dropdown-content hidden absolute bg-black min-w-40 z-10">
                  <Link className="text-white hidden no-underline text-right bg-white text-black">برنامه نویسی  </Link>
                  <Link className="text-white hidden no-underline text-right bg-white text-black">شبکه </Link>
                  <Link className="text-white hidden no-underline text-right bg-white text-black">هوش مصنوعی </Link>
                </div>
              </div>
            </div>
            <div className="left  w-2/4  flex items-center flex-row-reverse">
              <input placeholder="جستجو" className="text-right w-4/5 bg-gray-100  " onChange={(e) => SetSearch(e.target.value)} />
            </div>

          </div>
          <div className="header_bottom flex justify-between flex-row-reverse">
            <div className="right flex gap-3 flex-row-reverse" >
              <Link to={"/"}>خانه</Link>
              <Link>شهر ها</Link>
              <Link>رویداد ها</Link>
              <Link>پادکست</Link>
              <Link>وبلاگ</Link>
            </div>
            <div className="left" >
              <div className="profile">
                <Link to={"/register"}>
                    <div className="text-white w-8 h-8">
                    <UserCircleIcon />
                    </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div className="starting h-2/5 items-center  flex flex-row-reverse text-right">
          <div className="d-right m-20 w-2/5">
                <p className="co text-4xl ">اشتراک گذاری تجربه‌ها </p>
                <span className=" text-fuchsia-600 text-3xl">در کد  گپ</span>
                <p>فرصت خودابرازی و به اشتراک گذاری تجربه خودتان یا شنیدن تجربه‌های دیگران را در یک دورهمی دوستانه به دست بیاورید</p>
                <div className="button_ads flex justify-around">
                <button className="w-28 h-10 rounded-md h-5 border-2 border-white">درباره کد گپ</button>
                <button className="w-28 h-10 rounded-md h-5 bg-green-600">شرکت در کدگپ</button>
                
                </div>
          </div>
          <div className="d-left w-3/4">
              <img alt="code-gap-logo" src="logos/code-gap-logo.png" />
          </div>
        </div>
        <div className="supoorted_city">
           <img alt="city_icon_tabriz" src="https://asrdidani.net/wp-content/uploads/2024/06/Untitled-1-32.png" />
           <p>تبریز</p>
        </div>
    </div>
  );
};
