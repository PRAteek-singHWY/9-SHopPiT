import React from "react";
import { easing } from "maath";
import { useSnapshot } from "valtio";
import { useFrame } from "@react-three/fiber";
//Decal is mesh or texture
//GLTF is basically the 3d model
//and the etxture all form drei
import { Decal, useGLTF, useTexture } from "@react-three/drei";
import state from "../store";

const Shirt = () => {
    // ⭐️⭐️⭐️ state //
    const snap = useSnapshot(state);

    const { nodes, materials } = useGLTF("/shirt_baked.glb");
    //tetxure to be applied to shirt

    const logoTexture = useTexture(snap.logoDecal);
    const fullTexture = useTexture(snap.fullDecal);

    useFrame((state, delta) =>
        easing.dampC(materials.lambert1.color, snap.color, 0.25, delta)
    );

    //converting the current state from javascript to json string and then passing that state as key to group to handle and track whenever state changes
    const stateString = JSON.stringify(snap);

    return (
        <group key={stateString}>
            {/*⭐️ ⭐️ ⭐️ In Three.js, a mesh is an object used to represent 3D geometry in a scene. It is a combination of a geometry and a material. The geometry defines the shape and structure of the object, such as its vertices, faces, and UV coordinates. The material determines how the surface of the geometry is rendered, including its color, texture, and other visual properties. */}

            {/*⭐️ ⭐️ ⭐️ In Three.js, a decal is a way to apply an image or texture onto a 3D model in a specific location. It is typically used to add details, logos, labels, or other visual elements to the surface of a model. */}
            <mesh
                castShadow
                // geometry like male t-shirt
                geometry={nodes.T_Shirt_male.geometry}
                material={materials.lambert1}
                material-roughness={1}
                dispose={null}
            >
                {snap.isFullTexture && (
                    //then use FullDecal from state

                    <Decal
                        position={[0, 0, 0]}
                        rotation={[0, 0, 0]}
                        scale={1}
                        map={fullTexture}
                    />
                )}

                {snap.isLogoTexture && (
                    //then use LogoDecal from state

                    <Decal
                        position={[0, 0.04, 0.15]}
                        rotation={[0, 0, 0]}
                        scale={0.15}
                        map={logoTexture}
                        // chnage the quality
                        map-anisotropy={16}
                        // This depthTest When Enabled ensures that objects closer to the camera are rendered in front of objects that are farther away, creating the illusion of proper depth perception
                        depthTest={false}
                        depthWrite={true}
                    />
                )}
            </mesh>
        </group>
    );
};

export default Shirt;
