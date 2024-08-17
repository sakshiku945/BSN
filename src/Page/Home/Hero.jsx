

const Hero = () => {
  return (
    <div
      className="relative w-full 2xl:h-[87vh] 3xl:h-[30rem]  bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/Asstes/banner-img1.jpg')" }}
    >
      <div className="flex flex-col justify-center items-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6 bg-slate-800/30 h-full">
        <div className="mt-8 flex max-w-max items-center space-x-2 rounded-full bg-gray-100 p-1">
          <div className="rounded-full bg-white p-1 px-10">
            
            <p className="text-sm font-medium">We&apos;re hiring</p>
          </div>
        </div>

        <h1 className="mt-8 text-3xl font-bold tracking-tight text-gray-100 md:text-4xl lg:text-6xl text-center">
          Welcome to the BSN
        </h1>
        <p className="mt-8 text-lg max-md:text-sm text-gray-200 md:w-[40%] text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          modi blanditiis dolores quasi eaque explicabo!
        </p>

        {/* Search bar  */}
        <form action="" className="mt-8 flex items-start gap-5">
          <div className="relative md:w-[30rem] w-[20rem] h-[50px]">
            <input
              type="text"
              className="w-full h-full border border-gray-400 pl-10 text-black rounded-full focus:outline-none"
              placeholder="Search Jobs..."
            />
            <button className="absolute top-0 h-full right-0 w-[70px] bg-[#308d46] rounded-tr-full rounded-br-full rounded-bl-full">
              <i className="fi fi-br-search text-xl text-gray-100"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;
