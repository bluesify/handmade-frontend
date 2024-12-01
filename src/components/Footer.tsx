import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="py-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 bg-gray-100 text-sm mt-24">
      {/* TOP */}
      <div className="flex flex-col md:flex-row justify-between gap-24">
        {/* LEFT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <Link href="/">
            <div className="text-2xl tracking-wide">HANDMADE</div>
          </Link>
          <p>
            200, Əliyar Əliyev 8, Bakı, AZ1033
          </p>
          <span className="font-semibold">hello@handmade.dev</span>
          <span className="font-semibold">+994515995211</span>
          <div className="flex gap-6">
            <Image src="/facebook.png" alt="" width={16} height={16} />
            <Image src="/instagram.png" alt="" width={16} height={16} />
            <Image src="/youtube.png" alt="" width={16} height={16} />
            <Image src="/pinterest.png" alt="" width={16} height={16} />
            <Image src="/x.png" alt="" width={16} height={16} />
          </div>
        </div>
        {/* CENTER */}
        <div className="hidden lg:flex justify-between w-1/2">
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">Şirkət</h1>
            <div className="flex flex-col gap-6">
              <Link href="">Haqqımızda</Link>
              <Link href="">Satıcı ol</Link>
              <Link href="">Təkliflər</Link>
              <Link href="">Bloq</Link>
              <Link href="">Əlaqə</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">Mağaza</h1>
            <div className="flex flex-col gap-6">
              <Link href="">Yeni məhsullar</Link>
              <Link href="">Aksesuarlar</Link>
              <Link href="">Geyim</Link>
              <Link href="">Şəxsi-qulluq</Link>
              <Link href="">Bütün məhsullar</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">Dəstək</h1>
            <div className="flex flex-col gap-6">
              <Link href="">Hesab</Link>
              <Link href="">Mağazalar</Link>
              <Link href="">Vakansiyalar</Link>
              <Link href="">Müştəri xidməti</Link>
              <Link href="">Qaydalar və şərtlər</Link>
            </div>
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <h1 className="font-medium text-lg">Abunə ol</h1>
          <p>
          Ən son trendlər, endirimlər və daha çoxu barədə ilk məlumatı əldə edin!
          </p>
          <div className="flex">
            <input
              type="text"
              placeholder="E-poçt ünvanı"
              className="p-4 w-3/4"
            />
            <button className="w-1/4 bg-lama text-white">Qoşul</button>
          </div>
          <span className="font-semibold">Təhlükəsiz Ödənişlər</span>
          <div className="flex justify-between">
            <Image src="/discover.png" alt="" width={40} height={20} />
            <Image src="/skrill.png" alt="" width={40} height={20} />
            <Image src="/paypal.png" alt="" width={40} height={20} />
            <Image src="/mastercard.png" alt="" width={40} height={20} />
            <Image src="/visa.png" alt="" width={40} height={20} />
          </div>
        </div>
      </div>
      {/* BOTTOM */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
        <div className="">© 2024 Handmade.az</div>
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="">
            <span className="text-gray-500 mr-4">Dil</span>
            <span className="font-medium">Azərbaycan | Azərbaycanca</span>
          </div>
          <div className="">
            <span className="text-gray-500 mr-4">Valyuta</span>
            <span className="font-medium">$ USD</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
