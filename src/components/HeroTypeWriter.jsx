import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const HeroTypeWriter = ({ words, speed, theme }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  const prefix = "a ";
  const currentWord = prefix + words[currentWordIndex];
  const typingDelay = speed;
  const deletingDelay = speed / 2;
  const pauseBeforeDelete = 1000;
  const pauseBeforeTyping = 500;

  useEffect(() => {
    let timeout;

    const handleType = () => {
      if (!isDeleting) {
        if (charIndex < currentWord.length) {
          setCurrentText(currentWord.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          timeout = setTimeout(() => setIsDeleting(true), pauseBeforeDelete);
          return;
        }
      } else {
        if (charIndex > prefix.length) {
          setCurrentText(currentWord.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
          timeout = setTimeout(() => setCharIndex(0), pauseBeforeTyping);
          return;
        }
      }

      timeout = setTimeout(handleType, isDeleting ? deletingDelay : typingDelay);
    };

    timeout = setTimeout(handleType, typingDelay);

    return () => clearTimeout(timeout);
  }, [charIndex, currentWord, isDeleting, typingDelay, deletingDelay, pauseBeforeDelete, pauseBeforeTyping, words.length]);

  return (
    <div>
      <span
        className={`tracking-wider text-transparent bg-clip-text bg-gradient-to-r 
        ${theme === 'theme2' ? 'from-primary-green to-secondary-green' : 'from-primary-pink to-secondary-pink'}`}
      >
        {currentText}
      </span>
    </div>
  );
};

HeroTypeWriter.propTypes = {
  words: PropTypes.arrayOf(PropTypes.string).isRequired,
  speed: PropTypes.number.isRequired,
  theme: PropTypes.string.isRequired,
};

export default HeroTypeWriter;
