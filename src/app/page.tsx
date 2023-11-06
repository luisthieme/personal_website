export default function Home() {
  return (
    <div>
      <div className="w-fit mx-auto mt-[10%] mb-[3%]">
        <div className="phone:hidden max-w-[490px] mx-auto mt-1/5 bg-no-repeat bg-[center_right_1rem] bg-contain bg-jumping_luis h-[280px]">
          <h1 className="w-fit p-2 mx-auto my-auto bg-gradient-to-r from-[#bdc3c7] to-[#2c3e50] bg-clip-text text-transparent text-9xl font-extrabold">
            Hey,
          </h1>
          <h1 className="w-fit p-2 mx-auto my-auto bg-gradient-to-r from-[#bdc3c7] to-[#2c3e50] bg-clip-text text-transparent text-9xl font-extrabold">
            I&apos;m Luis
          </h1>
        </div>
        <div className="desktop:hidden max-w-[380px] mx-auto mt-1/5 bg-no-repeat bg-[center_right] bg-contain bg-jumping_luis h-[280px]">
          <h1 className="w-fit p-2 mx-auto my-auto bg-gradient-to-r from-[#bdc3c7] to-[#2c3e50] bg-clip-text text-transparent text-8xl font-extrabold">
            Hey,
          </h1>
          <h1 className="w-fit p-2 mx-auto my-auto bg-gradient-to-r from-[#bdc3c7] to-[#2c3e50] bg-clip-text text-transparent text-8xl font-extrabold">
            I&apos;m Luis
          </h1>
        </div>
      </div>
      <p className="mx-auto w-3/5 text-center font-bold text-gray-400">
        Hey there, I&apos;m Luis, a software engineer based in Germany. I&apos;m
        all about coding, problem-solving, and creating cool digital stuff.
        Whether it&apos;s building buggy code or working on exciting projects,
        I&apos;m all in.
      </p>
      <h2 className="mx-auto w-3/5 text-center text-2xl phone:text-xl mt-8 font-extrabold text-gray-300">
        Let&apos;s keep innovating and making tech magic happen!
      </h2>
      <div className="border-b border-gray-400 mt-10"></div>
      <div className="bg-transparent mt-[3%] pb-20 pt-10 msm:pb-24 sm:pt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-xl font-semibold leading-8 text-gray-300">
            Follow me on my socials!
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center text-gray-300 gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-4 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <a
              href="https://github.com/luisthieme"
              className="col-span-2 max-h-12 w-full outline p-2 hover:outline-gray-100 object-contain lg:col-span-1 text-center text-xl font-extrabold">
              GitHub
            </a>
            <a className="col-span-2 max-h-12 w-full outline p-2 hover:outline-gray-100 object-contain lg:col-span-1 text-center text-xl font-extrabold">
              Instagram
            </a>
            <a className="col-span-2 col-start-2 max-h-12 w-full outline p-2 hover:outline-gray-100 object-contain lg:col-span-1 text-center text-xl font-extrabold">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
