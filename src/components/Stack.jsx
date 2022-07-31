export default function Stack({ Icon, name }) {
  return (
    <div className="border border-[#9c9c9c] rounded-md flex items-center w-[10rem] py-4 space-x-2 justify-center mr-4 my-4 cursor-pointer ">
      <div className=" hover:animate-ping flex items-center ">
        <Icon className="text-[#9c9c9c] text-xl   hover:text-white hover:transition delay-150 duration-300 ease-in-out  " />
        <p className="text-xl font-bold text-[#9c9c9c] hover:text-white hover:transition delay-150 duration-300 ease-in-out  pl-2">
          {name}
        </p>
      </div>
    </div>
  );
}
