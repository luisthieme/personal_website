export default function Home() {
  return (
    <div>
      <div className="w-fit mx-auto mt-[10%] mb-[3%]">
        <div className="max-w-[370px] mx-auto mt-1/5 bg-no-repeat bg-[center_right] bg-contain bg-[url('/static/images/jumping_luis.PNG')] h-[280px]">
          <h1 className="w-fit p-2 mx-auto my-auto bg-gradient-to-r from-[#bdc3c7] to-[#2c3e50] bg-clip-text text-transparent text-8xl font-extrabold">
            Hey,
          </h1>
          <h1 className="w-fit p-2 mx-auto my-auto bg-gradient-to-r from-[#bdc3c7] to-[#2c3e50] bg-clip-text text-transparent text-8xl font-extrabold">
            Im Luis
          </h1>
        </div>
      </div>
      <p className="mx-auto w-3/5 text-center font-bold text-gray-300">
        Hey there, Im Luis, a software engineer based in Germany. I am all about
        coding, problem-solving, and creating cool digital stuff. Whether it is
        building nifty code, working on exciting projects, or just hanging out
        with the tech crowd, I am all in. Lets keep innovating and making tech
        magic happen!
      </p>
      <img src="/static/images/jumping_luis.png" alt="luis" />
    </div>
  );
}
