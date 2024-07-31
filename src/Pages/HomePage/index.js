import { Link } from "react-router-dom";
import useTitle from "../../Componets/Hook/useTitle";
import "./Style.css";
import PrimaryLayout from "../../Componets/Layout/PriarmyLayout";

export const HomePage = () => {
  const title = useTitle("جایی برای اشتراک گذاشتن تحربه ها در کد گپ");

  return (
    <PrimaryLayout>
      <div className="wrapper">
        <div className="starting h-2/5 items-center justify-around flex">
          <div className="d-right m-20 w-4/12">
            <p className="co  m-4 text-4xl ">اشتراک گذاری تجربه‌ها </p>
            <span className="m-4 text-fuchsia-600 text-5xl">در کد گپ</span>
            <p className="mt-4">
              فرصت خودابرازی و به اشتراک گذاری تجربه خودتان یا شنیدن تجربه‌های
              دیگران را در یک دورهمی دوستانه به دست بیاورید
            </p>
            <div className="button_ads mt-10 flex justify-around">
              <button className="w-56  h-10 rounded-md  border-2 border-white">
                درباره کد گپ
              </button>
              <button className="w-56  h-10 rounded-md  b">شرکت در کدگپ</button>
            </div>
          </div>
          <div className="d-left ">
            <img alt="code-gap-logo" src="logos/code-gap-logo.png" />
          </div>
        </div>
        <Link to={"/citys"}>
          <div className="supoorted_city mt-12">
            <p className="text-center text-4xl">
              شهر های میزبان <span> کد گپ </span>
            </p>
            <img
              className="w-1/4"
              alt="city_icon_tabriz"
              src="https://asrdidani.net/wp-content/uploads/2024/06/Untitled-1-32.png"
            />
          </div>
        </Link>
        <div className="lasts_code_gap">
          <p className=" text-4xl">
            آخرین های <span> کد گپ </span>
          </p>
        </div>
        <div className="catogry p-14">
          <p className="text-4xl ">دسته بندی رویداد</p>
          <div className="catogry_inner flex w-9/12 ">
            <button className="prog w-96 h-36 text-black rounded-md">
              برنامه نویسی
            </button>
            <button className="int w-96 h-36 text-black rounded-md">
              شبکه
            </button>
            <button className="int_2 w-96 h-36 text-black rounded-md">
              شبکه سازی
            </button>
            <button className="ai w-96 h-36 text-black rounded-md">
              هوش مصنوعی
            </button>
          </div>
        </div>
        <div className="events_iran flex w-full h-80">
          <div className="right">
            <img
              className="w-72"
              alt="pepople"
              src="https://asrdidani.net/wp-content/uploads/2024/06/S-2-2048x1079.png"
            />
          </div>
          <div className="left">
            <p>یک رویداد بین الملی برای تمامی ایرانیان</p>
            <p>
              در کد گپ سعی میکنیم به دوستانمان قدرت خود ابرازی بدهیم که تجربه
              هایشان را با یکدیگر در میان بگذارند{" "}
            </p>
            <button className="text-black bg-white rounded-md">
              حمایت ازکد گپ
            </button>
          </div>
        </div>
      </div>
    </PrimaryLayout>
  );
};
