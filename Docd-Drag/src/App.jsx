import Bg from './components/background';
import Foreground from './components/foreground';

const App = () => {
  return (
    <>
      <div className="relative h-screen w-full">
        <Bg />
        <Foreground />
      </div>
    </>
  );
};

export default App;
