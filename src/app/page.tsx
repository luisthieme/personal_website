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
        <div className="desktop:hidden max-w-[370px] mx-auto mt-1/5 bg-no-repeat bg-[center_right] bg-contain bg-jumping_luis h-[280px]">
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
        Whether it&apos;s building nifty code, working on exciting projects, or
        just hanging out with the tech crowd, I&apos;m all in.
      </p>
      <h2 className="mx-auto w-3/5 text-center text-lg font-extrabold text-gray-300">
        Let&apos;s keep innovating and making tech magic happen!
      </h2>
    </div>
  );
}
