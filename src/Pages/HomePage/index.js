import { Link } from "react-router-dom";
import useTitle from "../../Componets/Hook/useTitle";
import "./Style.css"
import { useState } from "react";
import { UserCircleIcon } from "@heroicons/react/24/solid";

export const HomePage = () => {
  const title = useTitle("home");
  const [Search, SetSearch] = useState("")
  return (
    <div className="wrapper">
      <div className="wrapper-inner flex justify-center">
        <div className="header_father w-8/12">
          <div className="header flex  justify-between border-b-2 border-gray-500 h-2/5">
            <div className="right flex">
              <div className="logo flex items-center">
                <img
                  className="w-48"
                  alt="codegap-logo"
                  src="logos/code-gap-logo.png"
                />
              </div>
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
              <div className="profile">
                <Link to={"/register"}>
                  <div className="text-white w-10 h-10">
                    <UserCircleIcon />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="starting h-2/5 items-center justify-around flex">
        <div className="d-right m-20 w-4/12">
          <p className="co  m-4 text-4xl ">اشتراک گذاری تجربه‌ها </p>
          <span className="m-4 text-fuchsia-600 text-5xl">در کد  گپ</span>
          <p className="mt-4">فرصت خودابرازی و به اشتراک گذاری تجربه خودتان یا شنیدن تجربه‌های دیگران را در یک دورهمی دوستانه به دست بیاورید</p>
          <div className="button_ads mt-10 flex justify-around">
            <button className="w-56  h-10 rounded-md  border-2 border-white">درباره کد گپ</button>
            <button className="w-56  h-10 rounded-md  b">شرکت در کدگپ</button>
          </div>
        </div>
        <div className="d-left ">
          <img alt="code-gap-logo" src="logos/code-gap-logo.png" />
        </div>
      </div>
      <Link to={"/citys"} >
      <div className="supoorted_city mt-12">
        <p className="text-center text-4xl">شهر های میزبان <span> کد گپ </span></p>
        <img className="w-1/4" alt="city_icon_tabriz" src="https://asrdidani.net/wp-content/uploads/2024/06/Untitled-1-32.png" />
      </div>
      </Link>
      <div className="lasts_code_gap">
        <p className=" text-4xl">آخرین های <span> کد گپ </span></p>
      </div>
    </div>
  );
};
// for correting commmit of 1.0. to 1.0.5