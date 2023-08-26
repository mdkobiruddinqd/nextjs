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

        {/* Header */}

        <div className="h-96 overflow-hidden">
          <div className="bg-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984] h-full">
            <h1 className="text-5xl text-white text-shadow text-center ">
              Milestones Grill (New York)
            </h1>
          </div>
        </div>
        {/* Description */}
        <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-9">
          <div className="bg-white w-[70%] rounded p-3 shadow">
            {/* Restaurant Navbar */}
            <nav className="flex text-md border-b pb-2 text-slate-600">
              <a href="#" className="mr-7">
                Overview
              </a>
              <a href="#" className="mr-7">
                Menu
              </a>
              <a href="#" className="mr-7">
                Photos
              </a>
              <a href="#" className="mr-7">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </main>
    </main>
  );
}
