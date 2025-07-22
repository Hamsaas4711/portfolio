import './PixelLoader.css';
import { useEffect, useState } from 'react';

function PixelLoader({ onFinish }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onFinish, 300); // slight delay for smooth exit
          return 100;
        }
        return prev + 2;
      });
    }, 30);
  }, [onFinish]);

  return (
    <div className="pixel-loader-screen">
      <div className="pixel-loader-frame">
        <div className="pixel-loader-fill" style={{ width: `${progress}%` }} />
         <div className="pixel-corner-bottom-left"></div>
      <div className="pixel-corner-bottom-right"></div>
      </div>
      <p className="pixel-loader-text">Loading...</p>
    </div>
  );
}

export default PixelLoader;
