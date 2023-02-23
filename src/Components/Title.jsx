import React from 'react'
import TextTransition, { presets } from "react-text-transition";
import background from '../Resources/background.jpg';

export const Title = () => {
    // Code responsible for a text slideshow effect in the header
    const TEXTS = [
        "EVENTS",
        "WORKSHOPS",
        "TECH-TALKS",
        "ACTIVITIES"
    ];
    const [index, setIndex] = React.useState(0);
    React.useEffect(() => {
        const intervalId = setInterval(() =>
            setIndex(index => index + 1), 3000 // Slideshow toggles in intervals of 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);
  return (
      <div className="relative h-screen">
          <img src={background} className='w-auto h-full absolute top-0' alt="Colorful buildings"></img>
          <h1 className='font-extrabold text-white text-5xl z-10 relative mt-24 mb-8'>Hack the North</h1>
          <TextTransition springConfig={presets.gentle}>
              <h1 className='font-extrabold text-transparent text-9xl bg-clip-text bg-gradient-to-r from-pink to-yellow'>{TEXTS[index % TEXTS.length]}</h1>
          </TextTransition>
      </div>
  )
}

export default Title;