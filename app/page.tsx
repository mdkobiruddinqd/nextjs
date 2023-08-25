// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-gray-400 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        {/* {Navbar} */}
        <nav className="bg-white p-2 flex justify-between text-gray-500">
          <a href="#" className="font-bold mt-2 text-gray-500 text-2xl">
            OpenTable
          </a>
          <div>
            <div className="flex">
              <button className="btn btn-success mr-2">Sign in</button>
              <button className="btn btn-neutral">Sign up</button>
            </div>
          </div>
        </nav>
        <main>
          {/* Header */}
          <div className="h-64 bg-gradient-to-r from-[#0f1f47] to-[#5f6984]">
            <div className="text-center">
              <h1 className="text-white text-5xl font-bold mb-2 pt-12">
                Find your table for any occasion
              </h1>
            </div>
            <div className="text-left py-3 m-auto flex justify-center">
              <input
                className="text-gray-700 bg-gray-300 rounded text-lg py-2 px-5 w-[450px]"
                type="text"
                placeholder={"State, City or Town"}
              ></input>
              <button className="btn btn-error ml-3">Let's go</button>
            </div>
          </div>
          {/* /Header */}
        </main>
        {/* cards */}
        <div className="flex flex-wrap py-3 px-36 mt-10">
          <div className="bg-gray-800 w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer">
            <img src="img-2.webp" alt="" className="w-full h-36"></img>

            <div className="py-3 px-3">
              <h3 className="text-blue-100 font-bold text-md">
                Milestones Grill
              </h3>
              <div className="font-bold flex items-start pt-1">
                <p className="text-xl text-orange-500">*****</p>
                <p className="text-sm ml-3 text-gray-400">77 reviews</p>
              </div>
            </div>
          </div>
        </div>
        {/* cards */}
      </main>
    </main>
  );
}
