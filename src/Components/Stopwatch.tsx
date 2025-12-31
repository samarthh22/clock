import { useRef, useState } from "react";
import { IoPlayOutline, IoStopOutline, IoReload } from "react-icons/io5";

const baseBtn =
  "m-2 px-5 py-3 rounded-full bg-gray-800 border border-gray-700 \
   text-gray-300 flex items-center justify-center shadow-sm \
   hover:bg-gray-700 hover:border-gray-600 active:scale-[0.98] \
   transition-all";

const Stopwatch = () => {
  const [isOn, setIsOn] = useState(false);
  const [totalSeconds, setTotalSeconds] = useState(0);
  const time = useRef(0);

  const startTimer = () => {
    if (!isOn) {
      setIsOn(true);
      let interval = setInterval(() => {
        setTotalSeconds((s) => s + 1);
      }, 1000);
      time.current = interval;
    }
  };

  const stopTimer = () => {
    if (isOn) {
      setIsOn(false);
      clearInterval(time.current);
    }
  };

  const resetTimer = () => {
    setIsOn(false);
    setTotalSeconds(0);
    clearInterval(time.current);
  };

  const hh = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
  const mm = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
  const ss = String(totalSeconds % 60).padStart(2, "0");

  return (
    <div className='bg-black text-white w-full flex-1 flex flex-col items-center justify-center'>
      <div className='text-8xl font-bold'>
        {hh}:{mm}:{ss}
      </div>

      <div className='flex items-center justify-around'>
        <button title='start' className={baseBtn} onClick={startTimer}>
          <IoPlayOutline />
        </button>
        <button title='stop' className={baseBtn} onClick={stopTimer}>
          <IoStopOutline />
        </button>
        <button title='reset' className={baseBtn} onClick={resetTimer}>
          <IoReload />
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
