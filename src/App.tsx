import "./App.css";
import MainCard from "./MainCard";
const App = () => {
  return (
    <main className="flex flex-row min-h-screen justify-center items-center">
      <div className="bgwhite h-screen w-full grid grid-rows-1 grid-cols-1 lg:grid-cols-3 md:grid-cols-1">       
        <div className="p-8 bg-red-900 min-h-screen min-w-120 text-white scroll-smooth tracking-tight">
            <div className = "flex">
              <MainCard/>
            </div>
        </div>
        <div className="lg:block hidden col-span-2 max-w-700  scroll-smooth tracking-tight">
          <div className="flex flex-row min-h-screen justify-center items-center">
            <div className="h-80 w-60">
              <h1 className="text-6xl">something will go here</h1>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App