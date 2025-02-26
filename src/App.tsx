import "./App.css";
import MainCard from "./MainCard";
const App = () => {
  return (
    <main className="flex flex-row min-h-screen justify-center items-center">
      <div className="h-screen w-full grid grid-rows-1 grid-cols-1 lg:grid-cols-3 md:grid-cols-1">       
        <div className="p-8 bg-red-900 min-w-120 text-white scroll-smooth tracking-tight">
            <div className = "flex">
              <MainCard/>
            </div>
        </div>
        <div className="lg:block col-span-2 bg-white-500 scroll-smooth tracking-tight"></div>
      </div>
    </main>
  )
}

export default App