import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useSnapshot } from "valtio";
import state from "../store";

const CameraRig = ({ children }) => {
    const group = useRef();
    //setting up rotation
    const snap = useSnapshot(state);

    // USE-FRAME //

    //1->this hook allows you to execute the code on every rendered component like run different effects update controls etc/..

    //2-> The useFrame hook in @react-three/fiber allows you to execute code on every rendered frame of your 3D scene

    //3-> The term "rendered component" can be understood as a component that has been mounted and is currently being displayed in the scene. It implies that the component has gone through the rendering process and its corresponding 3D objects have been created, positioned, and set up for rendering.

    // 4->The useFrame hook allows you to execute code on each rendered frame of these components, giving you the opportunity to update and manipulate the properties of the 3D objects they represent.

    useFrame((state, delta) => {
        const isBreakPoint = window.innerWidth <= 2500;
        const isMobile = window.innerWidth <= 600;
     
        //set the initial position of the model

        // In the given code, [ targetPosition ] is an array representing the desired position of the model's camera. It consists of three values: [-0.4, 0, 2].

        // Each value in the array corresponds to a specific coordinate in 3D space: [x, y, z]. The values determine the position of the camera along the  [--X,-Y,-and-Z--] axes, respectively.

        //this is the current intial position of the 3-D model

        //⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️//
        // WHAT'S IN ARRAY [] is down here
        //1-> the X, Y, and Z coordinates represent different directions and orientations.

        //2-> X-Axis: The X-axis represents the horizontal direction. Positive values move the object to the right, and negative values move it to the left.

        //3-> Y-Axis: The Y-axis represents the vertical direction. Positive values move the object upwards, and negative values move it downwards.

        //4-> Z-Axis: The Z-axis represents the depth or distance from the viewer. Positive values move the object away from the viewer (further into the scene), and negative values move it closer to the viewer.

        //5-> By manipulating the X, Y, and Z values of the target position, you can control the position of your 3D shirt model in the scene.

        //6-> For example:

        //7-> If you set targetPosition to [0, 0, 0], it means the shirt model will be positioned at the center of the scene.

        //8-> If you set targetPosition to [1, 0, -2], it means the shirt model will be positioned 1 unit to the right along the X-axis, at the same height along the Y-axis, and 2 units closer to the viewer along the Z-axis.
        //9-> By adjusting these values, you can move the shirt model to different positions within the 3D scene, allowing you to control its placement and orientation
        //⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️//

        let targetPosition = [-0.4, 0, 2];

        // IF ON HOME PAGE
        if (snap.intro) {
            if (isBreakPoint) targetPosition = [0, 0, 1.8];
            if (isMobile) targetPosition = [0, 0, 2.5];
        }

        // // IF ON CUSTOMISE PAGE
        else {
            if (isMobile) targetPosition = [0, 0, 1.8];
            else targetPosition = [0, 0, 1.5];
        }

        // SET MODEL ROTATION SMOOTHLY
        // [ stating camera position, for the target, smooth time, delta ]

        //delta is the measure of time diffrence b/w current and previous frames
        // By incorporating the delta value into the easing functions, the transitions will occur smoothly over time, regardless of the frame rate.
        easing.damp3(state.camera.position, targetPosition, 0.25, delta);

        //set model rotation smoothly
        // MAKING THE 3D MODEL MOVE
        easing.dampE(
            group.current.rotation,
            [state.pointer.y / 10, -state.pointer.x / 5, 0],
            0.25,
            delta
        );
    });
    return <group ref={group}>{children}</group>;
};
export default CameraRig;
