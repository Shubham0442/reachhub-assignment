import React from "react";

const Button = ({
  onClick,
  title,
  type = null,
  bg = "#4f46e5",
  color = "#fff",
  variant="filled"
}) => {
  return (
    <div className="button-container w-full h-10 text-base font-semibold">
      <button
        className={"w-full h-full bg-[#4f46e5] rounded-md " + (variant === "outlined" ? "border-2": "")}
        onClick={onClick}
        type={type}
        style={{ backgroundColor: bg, color }}
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
