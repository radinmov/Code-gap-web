import { Link } from "react-router-dom";
import useTitle from "../../Componets/Hook/useTitle";
import "./Style.css"

export const HomePage = () => {
  const title = useTitle("home");
  return (
    <div className="wrapper">
      <div className="wrapper-inner">
        <div className="header border-b-2 border-gray-500">
        <div className="right">
          <div className="logo">
            <img
              alt="codegap-logo"
              src="https://asrdidani.net/wp-content/uploads/2023/05/asr-logo.png"
            />
          </div>
          <div class="dropdown">
            <button class="dropbtn">دسته بندی</button>
            <div class="dropdown-content">
              <Link>خانه </Link>
              <Link>شهر ها</Link>
              <Link>رویداد ها</Link>
              <Link>پادکست ها</Link>
              <Link>وبلاگ</Link>
              <Link>تماس با ما </Link>
            </div>
          </div>
        </div>
        <div className="left">
            <input  />
            <img src="icons/search_icon.png" alt="search-icon" />
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
