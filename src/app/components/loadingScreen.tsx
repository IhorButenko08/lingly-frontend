import Image from "next/image";
import logo from "@/assets/img/logo.png";
import spinner from "@/assets/img/spinner.gif";

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white font-gilory">
      <div className="p-32 sm:p-16 md:p-24 lg:p-32 border border-Border/Primary rounded-md">
        <div className="w-full flex justify-center">
          <Image src={logo} alt="Logo" width={88} height={88} />
        </div>
        <div className="flex justify-center mt-4">
          <span className="text-Text/Black text-3xl sm:text-xl md:text-2xl lg:text-3xl font-bold">
            Lingly
          </span>
        </div>
        <div className="flex justify-center mt-8">
          <Image src={spinner} alt="Loading spinner" width={32} height={32} />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
