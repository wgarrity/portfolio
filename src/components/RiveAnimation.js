// RiveAnimation.js
import React from "react";
import { useRive } from "@rive-app/react-canvas";

const RiveAnimation = ({ riveSrc, style }) => {
  const { RiveComponent, rive } = useRive({
    src: riveSrc,
    stateMachines: ["State Machine 1"], // Adjust if your state machine name is different
    autoplay: true,
  });

    // Handle Click Event
    const handleClick = () => {
        if (rive) {
          const inputs = rive.stateMachineInputs("State Machine 1");
          const input = inputs.find((i) => i.name === "ClickTrigger");
          if (input) input.fire();
        }
      };

      // Handle Hover Events
      const handleMouseEnter = () => {
        if (rive) {
          const inputs = rive.stateMachineInputs("State Machine 1");
          const input = inputs.find((i) => i.name === "HoverTrigger");
          if (input) input.value = true;
        }
      };

      const handleMouseLeave = () => {
        if (rive) {
          const inputs = rive.stateMachineInputs("State Machine 1");
          const input = inputs.find((i) => i.name === "HoverTrigger");
          if (input) input.value = false;
        }
      };

  return (
    <div
    onClick={handleClick}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    >
        <RiveComponent style={style} />
    </div>
  );
};

export default RiveAnimation;