import { loading } from "../assets";
import { useTypewriter } from "react-simple-typewriter";

const Generating = ({ className }) => {
  
  const [text, count] = useTypewriter({
    words: [' AI is generating...'], 
    loop: true,
    typeSpeed: 80,
    deleteSpeed: 0,
    delaySpeed: 500,
  });

  console.log('Generating:', { text, count });

  return (
    <div
      className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${
        className || ""
      } text-base`}
    >
      <img
        className="w-5 h-5 mr-4 rounded-full animate-spin-slow"
        src={loading}
        alt="Loading"
      />
      <span>{text}</span>
    </div>
  );
};

export default Generating;