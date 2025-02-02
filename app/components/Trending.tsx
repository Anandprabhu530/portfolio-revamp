import Link from "next/link";

const Trending = () => {
  return (
    <div className="h-[300px] lg:min-h-screen md:min-h-screen p-4">
      <div className="px-4 pt-4 pb-2 border border-neutral-700 rounded-xl">
        <div className="text-xl font-semibold pb-4">Socials</div>
        <div className="flex justify-between w-full my-4">
          <div>X</div>
          <Link
            href="https://x.com/Anandpr23840931"
            target="_blank"
            className="px-4 hover:bg-neutral-200 cursor-pointer text-sm font-sans flex font-semibold bg-white text-black rounded-full py-1"
          >
            Follow
          </Link>
        </div>
        <div className="flex justify-between w-full my-4">
          <div>LinkedIn</div>
          <Link
            href="https://www.linkedin.com/in/anandprabhur"
            target="_blank"
            className="px-4 hover:bg-neutral-200 cursor-pointer text-sm font-sans flex font-semibold bg-white text-black rounded-full py-1"
          >
            Follow
          </Link>
        </div>
        <div className="flex justify-between w-full my-4">
          <div>Github</div>
          <Link
            href="https://github.com/anandprabhu530"
            target="_blank"
            className="px-4 hover:bg-neutral-200 cursor-pointer text-sm font-sans flex font-semibold bg-white text-black rounded-full py-1"
          >
            Follow
          </Link>
        </div>
      </div>
      <Link
        target="__blank"
        href="https://drive.google.com/file/d/1M_1G0qkxryZPOK_Ub4fpsbUKE0uc8c3I/view?usp=sharing"
        className="px-4 mt-6 p-4 border border-neutral-700 rounded-xl flex items-center justify-center text-lg"
      >
        Resume
      </Link>
    </div>
  );
};

export default Trending;
