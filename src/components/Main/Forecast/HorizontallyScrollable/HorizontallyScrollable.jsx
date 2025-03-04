import { useRef } from "react";

export const HorizontallyScrollable = ({ children, className = "" }) => {
  const scrollRef = useRef();

  const handleMouseDown = (event) => {
    const oldX = event.pageX;
    const scrollLeft = scrollRef.current.scrollLeft;

    const handleMouseMove = (event) => {
      const newX = event.pageX;
      const offset = newX - oldX;

      scrollRef.current.scrollLeft = scrollLeft - offset;
    };

    const handleMouseUp = () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  const handleTouchStart = (event) => {
    const touch = event.touches[0];
    const oldX = touch.pageX;
    const scrollLeft = scrollRef.current.scrollLeft;

    const handleTouchMove = (event) => {
      const touch = event.touches[0];
      const newX = touch.pageX;
      const offset = newX - oldX;

      scrollRef.current.scrollLeft = scrollLeft - offset;
    };

    const handleTouchEnd = () => {
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };

    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);
  }

  return (
    <article className={className} ref={scrollRef} onMouseDown={handleMouseDown} onTouchStart={handleTouchStart}>
      {children}
    </article>
  );
};
