import {skills} from "./constant";

export default function Home() {
  return (
    <div className="border-2 border-red-500">
      <div className="flex w-full border-b border-neutral-400 items-center justify-center p-4 text-xl font-semibold">
        Portfolio
      </div>
      <div className="p-2 border-2 border-yellow-400 flex">
        <div className="flex gap-2 pr-2">
          <div className="h-[40px] w-[40px] rounded-full border-2 border-white"></div>
        </div>
        <div>
          <div className="">Anand Prabhu</div>
          <div className="pt-2">Hi there!</div>
          <div className="">
            Trying out new stuff Everyday. If I&apos;m not coding, I&apos;m
            probably pedaling out somewhere...
          </div>
          <div className="flex flex-wrap gap-4 pt-2">
            {skills.map((skill, index) => (
              <div
                className={`bg-[${skill.color}] px-4 py-1 rounded-2xl `}
                key={index}
              >
                {skill.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
