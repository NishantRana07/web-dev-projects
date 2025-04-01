import Bg from './components/background'
const App =() =>
{
  return(
    <>
    <div className="relative h-scren w-full overflow-hidden">
      <Bg/>
      <div className="absolute h-screen w-full z-[2] top-0 bg-zinc-900/90"></div>
    </div>
    </>
  )
}

export default App;