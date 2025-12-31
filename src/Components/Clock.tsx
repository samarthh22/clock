import { DateTime } from "luxon";
import { useEffect, useState } from "react";

function useDate(zone: string) {
  const [time, setTime] = useState(() =>
    zone === "default"
      ? DateTime.now().setZone("UTC")
      : DateTime.now().setZone(zone)
  );

  useEffect(() => {
    const id = setInterval(() => {
      setTime(
        zone === "default"
          ? DateTime.now().setZone("UTC")
          : DateTime.now().setZone(zone)
      );
    }, 1000);

    return () => clearInterval(id);
  }, [zone]);

  return time;
}

export default function Clock() {
  const [zone, setZone] = useState("default");
  const time = useDate(zone);

  const hh = String(time.hour).padStart(2, "0");
  const mm = String(time.minute).padStart(2, "0");
  const ss = String(time.second).padStart(2, "0");

  return (
    <div className='bg-black flex-1 flex flex-col'>
      <div className='p-3'>
        <select
          className='bg-white text-black font-sans rounded-xl p-3'
          value={zone}
          onChange={(e) => setZone(e.target.value)}
        >
          <option value='default'>Select the time zone</option>
          <option value='America/New_York'>Eastern</option>
          <option value='America/Chicago'>Central</option>
          <option value='America/Denver'>Mountain</option>
          <option value='America/Los_Angeles'>Pacific</option>
          <option value='America/Anchorage'>Alaska</option>
          <option value='Pacific/Honolulu'>Hawaii</option>
          <option value='Asia/Kolkata'>India</option>
          <option value='Europe/London'>United Kingdom</option>
          <option value='Europe/Paris'>France</option>
          <option value='Europe/Berlin'>Germany</option>
          <option value='Europe/Moscow'>Moscow</option>
          <option value='Asia/Shanghai'>Shanghai</option>
          <option value='Asia/Tokyo'>Japan</option>
          <option value='Asia/Seoul'>South Korea</option>
        </select>
      </div>

      {/* Fills remaining height below header */}
      <div className='flex-1 flex flex-col items-center justify-center text-white'>
        <div className='text-8xl font-bold'>
          {hh}:{mm}:{ss}
        </div>

        <div className='text-2xl text-gray-400 mt-2'>
          {time.day}
          {time.day === 1
            ? "st"
            : time.day === 2
            ? "nd"
            : time.day === 3
            ? "rd"
            : "th"}{" "}
          {time.monthLong}, {time.year} — {time.weekdayLong}
        </div>
      </div>
    </div>
  );
}
