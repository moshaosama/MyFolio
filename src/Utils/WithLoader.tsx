import { useEffect, useState } from "react";
import { RingLoader } from "react-spinners";

const WithLoader = (Component: any) => {
  return () => {
    const [isLoader, setIsLoader] = useState(false);
    useEffect(() => {
      const handleLoader = async () => {
        setIsLoader(true);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setIsLoader(false);
      };
      handleLoader();
    }, []);

    return isLoader ? (
      <>
        <div className="h-[100vh] flex justify-center items-center bg-[#2f3237]">
          <RingLoader color="white" />
        </div>
      </>
    ) : (
      <Component />
    );
  };
};

export default WithLoader;
