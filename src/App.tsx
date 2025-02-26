import "./App.css";
import MainCard from "./MainCard";
const App = () => {
  return (
    <main className="flex flex-row min-h-screen justify-center items-center">
      <div className="h-screen w-full grid grid-rows-1 grid-cols-1 lg:grid-cols-3 sm:grid-cols-1">        
        <div className="hidden lg:block col-span-2 bg-white-500"></div>
        <div className="p-8 bg-red-900 text-white">
            <div className = "flex">
              <MainCard/>
            </div>
        </div>
      </div>
    </main>
  )
}

export default App