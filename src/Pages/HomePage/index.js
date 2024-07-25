import { Link } from "react-router-dom";
import useTitle from "../../Componets/Hook/useTitle";
import "./Style.css"
import { useState } from "react";

export const HomePage = () => {
  const title = useTitle("home");
  const [Search, SetSearch] = useState("")
  return (
    <div className="wrapper">
      <div className="wrapper-inner flex justify-center">
        <div className="header_father w-8/12">
          <div className="header flex flex-row-reverse justify-between border-b-2 border-gray-500 h-2/5">
            <div className="right flex flex-row-reverse">
              <div className="logo">
                {/* <img
                  className="bg-black w-32  "
                  alt="codegap-logo"
                  src="logos/code-gap-logo.png"
                /> */}
              </div>
              <div class="dropdown bg-black relative inline-block">
                <button class="dropbtn text-white bg-none font-bolder p-2 text-base border-0">دسته بندی</button>
                <div class="dropdown-content hidden absolute bg-black min-w-40 z-10">
                  <Link className="text-white hidden no-underline text-right bg-white text-black">برنامه نویسی  </Link>
                  <Link className="text-white hidden no-underline text-right bg-white text-black">شبکه </Link>
                  <Link className="text-white hidden no-underline text-right bg-white text-black">هوش مصنوعی </Link>
                </div>
              </div>
            </div>
            <div className="left  flex flex-row-reverse">
              <input placeholder="جستجو" className="text-right rounded-md outline-0 bg-gray-100  " onChange={(e) => SetSearch(e.target.value)} />
              <img className="bg-green-700" src="icons/search_icon.png" alt="search-icon" />
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
                  <img
                    className="w-8"
                    src="icons/profile_icon.png"
                    alt="profile" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div className="starting">
          <div className="d-right">
                <p>اشتراک گذاری تجربه‌ها در کد  گپ</p>
                <p>فرصت خودابرازی و به اشتراک گذاری تجربه خودتان یا شنیدن تجربه‌های دیگران را در یک دورهمی دوستانه به دست بیاورید</p>
                <div className="button_ads flex">
                <button>درباره کد گپ</button>
                <button>شرکت در کدگپ</button>
                
                </div>
          </div>
          <div className="d-left">
            <img src="https://asrdidani.net/wp-content/uploads/2024/06/Home1.png" alt="ad_img" />
          </div>
        </div>
        <div className="supoorted_city">
           <img alt="city_icon_tabriz" src="https://asrdidani.net/wp-content/uploads/2024/06/Untitled-1-32.png" />
           <p>تبریز</p>
        </div>
    </div>
  );
};
