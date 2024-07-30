import { Link } from "react-router-dom";
import useTitle from "../../Componets/Hook/useTitle";
import "./Style.css"
import { useState } from "react";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import PrimaryLayout from "../../Componets/Layout/PriarmyLayout";

export const HomePage = () => {
  const title = useTitle("جایی برای اشتراک گذاشتن تحربه ها در کد گپ");

  return (
    <PrimaryLayout >
    <div className="wrapper">
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
    <div className="catogry">
    <p className=" text-4xl">آخرین های <span> کد گپ </span></p>
      <div className="catogry_inner">
          <div className="prog">برنامه نویسی</div>
          <div className="int">شبکه  </div>
          <div className="int_2">شبکه سازی  </div>
          <div className="ai">برنامه نویسی</div>
      </div>
    </div>
    </PrimaryLayout>
  );
};