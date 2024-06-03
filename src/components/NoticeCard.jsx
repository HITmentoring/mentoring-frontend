
import { useEffect, useState } from 'react';

const NoticeCard = ({ title, description }) => {
  const [blink, setBlink] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setBlink((prevBlink) => !prevBlink);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`p-3 border rounded-lg shadow-lg bg-white ${blink ? 'bg-red-100' : ''}`}>
      <div className="relative flex items-center justify-center">
        <h3 className="text-center text-xl font-bold">{title}</h3>
        {blink && <div className="absolute right-0 w-3 h-3 bg-red-500 rounded-full"></div>}
      </div>
      <p className="mt-2 text-left">{description}</p>
    </div>


  );
};

export default NoticeCard;
