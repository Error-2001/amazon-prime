const Header = () => {
  return (
    // <div className="bg-black ">
    //   <div className="flex px-52 items-center w-screen py-3">
    //     <p className="font-bold text-white text-xl">prime video</p>
    //     <div className="flex text-white px-24 items-center">
    //       <p className="mr-8 font-bold">Home</p>
    //       <p className="mr-8 font-bold">Store</p>
    //       <p className="mr-8 font-bold">Live TV</p>
    //       <p className="mr-8 font-bold">Categories</p>
    //     </div>
    //   </div>
    // </div>
    <div className="lg:px-56 md:px-24 sm:px-0 bg-black">
      <div className="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-3 gap-4 py-5 bg-black">
        <div className="flex justify-center text-[#AAAAAA] font-semibold">
          Home
        </div>
        <div className=" flex justify-center text-[#AAAAAA] font-semibold">
          Store
        </div>
        <div className=" flex justify-center text-[#AAAAAA] font-semibold">
          Live TV
        </div>
        <div className=" flex justify-center text-[#AAAAAA] font-semibold">
          Categories
        </div>
      </div>
    </div>
  );
};
export default Header;
