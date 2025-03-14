// RiveBackground.js
import React from "react";
import { useRive } from "@rive-app/react-canvas";

const RiveBackground = ({ riveSrc, style, className }) => {
    const { RiveComponent } = useRive({
        src: riveSrc,
        autoplay: true,
    });

    return <RiveComponent className={className} style={style} />;
};

export default RiveBackground;