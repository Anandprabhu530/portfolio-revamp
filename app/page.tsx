import {skills} from "./constant";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex w-full border-b border-neutral-700 items-center justify-center p-4 text-xl font-bold">
        Portfolio
      </div>
      <div className="p-4 flex border-b border-neutral-700">
        <div className="flex gap-2 pr-2">
          <div className="h-[40px] w-[40px] rounded-full">
            <Image
              src={"/profile.png"}
              className="rounded-full h-full w-full"
              width={40}
              height={50}
              alt="profile_image"
            />
          </div>
        </div>
        <div>
          <div className="flex items-center">
            Anand Prabhu
            <div className="pl-2 text-sm flex items-center text-neutral-400">
              Coimbatore,TN, India
            </div>
          </div>
          <div className="pt-2">Hi there!</div>
          <div className="text-neutral-100 flex gap-1 font-normal">
            I am a Software Engineer with a Masters in Computer Science.
          </div>
          <div className="">
            Trying out new stuff Everyday. If I&apos;m not coding, I&apos;m
            probably pedaling out somewhere...
          </div>

          <div>
            <div className="pt-2">Langauages</div>
            <div className="flex flex-wrap gap-2 pt-1 items-center pb-4">
              {skills.Language.map((skill, index) => (
                <div
                  className={`bg-[#3b2754] px-3 py-1 text-base rounded-lg text-[#bc92f4]`}
                  key={index}
                >
                  {skill.name}
                </div>
              ))}
            </div>
            <div>Frontend</div>
            <div className="flex flex-wrap gap-2 pt-1 items-center pb-4">
              {skills.Frameworks.map((skill, index) => (
                <div
                  className={`bg-[#275428] px-3 py-1 text-base rounded-lg text-[#92f4a4]`}
                  key={index}
                >
                  {skill.name}
                </div>
              ))}
            </div>
            <div>Backend</div>
            <div className="flex flex-wrap gap-2 pt-1 items-center">
              {skills.Backend.map((skill, index) => (
                <div
                  className={`bg-[#545227] px-3 py-1 text-base rounded-lg text-[#e2f492]`}
                  key={index}
                >
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
