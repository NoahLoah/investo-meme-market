
import { useState, useEffect } from 'react';

interface Meme {
  id: number;
  name: string;
  price: number;
  change: number;
  image: string;
}

export const usePriceUpdates = (initialMemes: Meme[]) => {
  const [memes, setMemes] = useState(initialMemes);

  useEffect(() => {
    const interval = setInterval(() => {
      setMemes(prevMemes => 
        prevMemes.map(meme => {
          // Random price change between -5% and +5%
          const changePercent = (Math.random() - 0.5) * 10;
          const newPrice = Math.max(1, meme.price * (1 + changePercent / 100));
          const newChange = ((newPrice - meme.price) / meme.price) * 100;
          
          return {
            ...meme,
            price: Math.round(newPrice),
            change: newChange
          };
        })
      );
    }, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return memes;
};
