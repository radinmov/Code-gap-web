import { Link } from "react-router-dom";
import useTitle from "../../Componets/Hook/useTitle";
import "./Style.css";
import PrimaryLayout from "../../Componets/Layout/PriarmyLayout";

export const HomePage = () => {
  const title = useTitle("جایی برای اشتراک گذاشتن تحربه ها در کد گپ");

  return (
    <PrimaryLayout>
      <div className="wrapper px-4">
        <div className="starting h-auto lg:h-2/5 flex flex-col lg:flex-row items-center justify-around">
          <div className="d-right m-10 lg:m-20 w-full lg:w-4/12">
            <p className="co m-4 text-2xl lg:text-4xl">اشتراک گذاری تجربه‌ها </p>
            <span className="m-4 text-fuchsia-600 text-3xl lg:text-5xl">در کد گپ</span>
            <p className="mt-4 text-center lg:text-left">
              فرصت خودابرازی و به اشتراک گذاری تجربه خودتان یا شنیدن تجربه‌های
              دیگران را در یک دورهمی دوستانه به دست بیاورید
            </p>
            <div className="button_ads mt-10 flex flex-col lg:flex-row justify-around">
              <button className="w-full lg:w-56 h-10 rounded-md border-2 border-white mb-4 lg:mb-0">
                درباره کد گپ
              </button>
              <button className="w-full lg:w-56 h-10 rounded-md b">
                شرکت در کدگپ
              </button>
            </div>
          </div>
          <div className="d-left w-full lg:w-auto mt-10 lg:mt-0 flex justify-center lg:justify-end">
            <img className="w-32 lg:w-auto" alt="code-gap-logo" src="logos/code-gap-logo.png" />
          </div>
        </div>
        <Link to={"/citys"}>
          <div className="supoorted_city mt-12 text-center">
            <p className="text-2xl lg:text-4xl">
              شهر های میزبان <span> کد گپ </span>
            </p>
            <img
              className="w-1/2 lg:w-1/4 mx-auto"
              alt="city_icon_tabriz"
              src="https://asrdidani.net/wp-content/uploads/2024/06/Untitled-1-32.png"
            />
          </div>
        </Link>

      </div>
    </PrimaryLayout>
  );
};
