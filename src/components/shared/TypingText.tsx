import { Typography, TypographyProps } from "@mui/material";
import { useEffect, useState } from "react";

const TypingText = ({
  delay = 100,
  children = "Typing",
  ...props
}: TypographyProps & { delay?: number; children: string }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentIndex < children.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + children[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, children]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prevShowCursor) => !prevShowCursor);
    }, 500); // Blink every 500ms

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <Typography {...props}>
      {currentText}
      <span className="cursor" style={{ opacity: showCursor ? 1 : 0 }}>
        |
      </span>
    </Typography>
  );
};

export default TypingText;
