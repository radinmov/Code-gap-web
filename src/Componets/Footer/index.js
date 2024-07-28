import "./Style.css"
export const Footer = () => {
    return (
        <div className="ali w-full h-96">
            <div className="wrapper_inner2 w-3/5 flex">
                <div className="column-1">
                    <img className="w-96 h-80" src="logos/code-gap-logo.png" />
                    <p>اشتراک گذاری تجربه‌ها در کدگپ</p>
                </div>
                <div className="column-2">
                    <p className="text-black text-2xl">ایران</p>
                    <p>تبریز</p>
                    <p>تهران</p>
                </div>
                <div className="column-3">
                    <p className="text-black text-2xl">درباره</p>
                    <p>درباره ما </p>
                    <p>تماس با ما</p>
                    <p>قوانین و مقرارت</p>
                    <p>سوالات متدواول </p>
                    <p>سیاست و حفظ حریم شخصی </p>
                </div>
                <div className="column-4">
                    <p className="text-black text-2xl">امکانات</p>
                    <p>ثبت نام و ورود </p>
                    <p>حمایت از کدگپ</p>
                    <p>همکاری در برگزاری ایونت ها </p>
                    <p>کدگپ در شهر شما</p>
                    <p>پیشنهاد راهبری </p>
                </div>
            </div>
            <div className="copy_right">
                <div className="right">
                    <p> همه حقوق این وب سایت متعلق است به کدگپ @۲۰۲۴</p>
                </div>
                <div className="left">
                    <p>شبکه های اجتماعی کدگپ</p>
                </div>
            </div>
        </div>
    )
}
