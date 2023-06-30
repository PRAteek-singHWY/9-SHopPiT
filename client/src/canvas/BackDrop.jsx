//this is basically the {shirt-color's likewise} shadow behind the the shirt that we gonna see
import React, { useRef } from "react";
import { easing } from "maath";
import { useFrame } from "@react-three/fiber";
//drei provides many hleper utilitty funvtions to reuse on our 3d models
import { AccumulativeShadows, RandomizedLight } from "@react-three/drei";
const BackDrop = () => {
    //using useRef beacuse we need to refer to that shadow later
    const shadows = useRef();
    return (
        <AccumulativeShadows
            //giving refernce
            ref={shadows}
            //smooth-put the edges of shadow with time
            temporal
            //frames will render in 60 frames
            frames={60}
            alphaTest={0.85}
            scale={10}
            //angle of rotation
            rotation={[Math.PI / 2, 0, 0]}
            position={[0, 0, -0.14]}
        >
            {/* //light source in 3-d scene */}
            <RandomizedLight
                amount={4}
                radius={9}
                intensity={0.55}
                ambient={0.25}
                position={[5, 5, -10]}
            />

            <RandomizedLight
                amount={4}
                radius={5}
                intensity={0.35}
                ambient={0.38}
                position={[-5, 5, -9]}
            />
        </AccumulativeShadows>
    );
};

export default BackDrop;
