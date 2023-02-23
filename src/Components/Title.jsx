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
          <img src={background}  className='w-auto h-full lg:object-contain object-cover lg:pt-28 pt-0' alt="Colorful buildings"></img>
          <span className='absolute lg:top-0 top-20'>
          <h1 className='font-extrabold text-white lg:text-5xl md:text-3xl text-3xl z-10 relative lg:mt-24 lg:mb-8 mb-4'>Hack the North</h1>
          <TextTransition springConfig={presets.gentle} className='relative'>
                  <h1 className='font-extrabold text-transparent lg:text-9xl md:text-7xl text-4xl bg-clip-text bg-gradient-to-r from-pink to-yellow whitespace-nowrap'>{TEXTS[index % TEXTS.length]}</h1>
              </TextTransition>
          </span>
      </div>
  )
}

export default Title;