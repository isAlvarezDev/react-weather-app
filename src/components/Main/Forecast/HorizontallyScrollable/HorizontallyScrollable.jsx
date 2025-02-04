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
  return (
    <article className={className} ref={scrollRef} onMouseDown={handleMouseDown}>
      {children}
    </article>
  );
};
