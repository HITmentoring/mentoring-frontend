
import { useEffect, useState } from 'react';

// eslint-disable-next-line react/prop-types
const NoticeCard = ({ title, description }) => {
  const [blink, setBlink] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setBlink((prevBlink) => !prevBlink);
    }, 1000); // Blink every second

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`p-3 border rounded-lg shadow-lg bg-white ${blink ? 'bg-red-100' : ''}`}>
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold">{title}</h3>
        {blink && <div className="w-3 h-3 bg-red-500 rounded-full"></div>} {/* Red dot for live update */}
      </div>
      <p className="mt-2">{description}</p>
    </div>
  );
};

export default NoticeCard;
