import { brainwaveWhiteSymbol, gradient, play } from "../../assets";
import ChatBubbleWing from "../../assets/svg/ChatBubbleWing";
import { useTypewriter } from 'react-simple-typewriter';
import { useState } from 'react';

export const Gradient = () => {
  return (
    <div className="absolute top-0 -left-[10rem] w-[56.625rem] h-[56.625rem] opacity-50 mix-blend-color-dodge pointer-events-none">
      <img
        className="absolute top-1/2 left-1/2 w-[79.5625rem] max-w-[79.5625rem] h-[88.5625rem] -translate-x-1/2 -translate-y-1/2"
        src={gradient}
        width={1417}
        height={1417}
        alt="Gradient"
      />
    </div>
  );
};

export const PhotoChatMessage = () => {
  const [typeEffect, count] = useTypewriter({
    words: [' enhance your photo'],
    loop: 0,
    typeSpeed: 150,
    deleteSpeed: 80,
    delaySpeed: 500,
  })

  console.log('PhotoChatMessage:', { typeEffect, count });

  return (
    <div className="absolute top-8 right-8 max-w-[17.5rem] py-6 px-8 bg-black rounded-t-xl rounded-bl-xl font-code text-base lg:top-16 lg:right-[8.75rem] lg:max-w-[17.5rem]">
      Hey Brainwave, 
      <span>{typeEffect}</span>
      <ChatBubbleWing className="absolute left-full bottom-0" />
    </div>
  );
};

export const VideoChatMessage = () => {
  const [typeEffect, count] = useTypewriter({
    words: [' Video generated!'],
    loop:{},
    typeSpeed: 100,
    deleteSpeed: 0,
    delaySpeed: 500,
  })

  console.log('VideoChatMessage:', { typeEffect, count });

  return (
    <div className="absolute top-8 left-[3.125rem] w-full max-w-[14rem] pt-2.5 pr-2.5 pb-7 pl-5 bg-n-6 rounded-t-xl rounded-br-xl font-code text-base md:max-w-[17.5rem]"
    style={{ minHeight: '4rem' }}>
      <span>{typeEffect}</span>
      <div className="absolute left-5 -bottom-[1.125rem] flex items-center justify-center w-[2.25rem] h-[2.25rem] bg-color-1 rounded-[0.75rem]">
        <img
          src={brainwaveWhiteSymbol}
          width={26}
          height={26}
          alt="Brainwave"
        />
      </div>
      <p className="tagline absolute right-2.5 bottom-1 text-[0.625rem] text-n-3 uppercase">
        just now
      </p>
      <ChatBubbleWing
        className="absolute right-full bottom-0 -scale-x-100"
        pathClassName="fill-n-6"
      />
    </div>
  );
};

export const VideoBar = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true); 
    console.log('Animation started');
  };

  const handleAnimationEnd = () => {
    setIsPlaying(false);
    console.log('Animation ended, switching to play icon');
  };

  return (
    <div className="absolute left-0 bottom-0 w-full flex items-center p-6">
      
      {isPlaying ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="object-contain mr-3 cursor-pointer"
          onClick={() => setIsPlaying(false)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 5.25v13.5m-7.5-13.5v13.5"
          />
        </svg>
      ) : (
        <img
          src={play}
          width={24}
          height={24}
          alt="Play"
          className="object-contain mr-3 cursor-pointer"
          onClick={handlePlayClick}
        />
      )}

      <div className="flex-1 bg-[#D9D9D9]">
        <div
          className={`w-full h-0.5 bg-color-1 shadow-custom-white ${
            isPlaying ? 'animate-videoBar' : ''
          }`}
          onAnimationEnd={handleAnimationEnd}
        ></div>
      </div>
    </div>
  );
};