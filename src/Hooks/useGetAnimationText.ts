import { useEffect, useState } from "react";

const useGetAnimationText = (texts: string[]) => {
  const Texts = texts;
  const [startText, setStartText] = useState("");
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    let currentIndex = 1;
    const interval = setInterval(async () => {
      if (currentIndex <= Texts[textIndex].length) {
        setStartText(Texts[textIndex].slice(0, currentIndex));
        currentIndex++;
      } else {
        currentIndex = 1;
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return { startText };
};

export default useGetAnimationText;
