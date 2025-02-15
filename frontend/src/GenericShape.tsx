import React, { useEffect, useRef } from "react";
import p5 from "p5";

type GenericProps = {
  shapeType: string;
};

export default function Generic({ shapeType }: GenericProps) {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Generate random rotation speeds between 0.005 and 0.015
    const rotationX = Math.random() * 0.01 + 0.005;
    const rotationY = Math.random() * 0.01 + 0.005;
    const rotationZ = Math.random() * 0.01 + 0.005;

    const sketch = (p) => {
      p.setup = () => {
        p.createCanvas(200, 200, p.WEBGL).parent(canvasRef.current);
      };

      p.draw = () => {
        p.push();
        p.background("#282c34");
        p.normalMaterial();
        p.rotateZ(p.frameCount * rotationZ);
        p.rotateY(p.frameCount * rotationY);
        p.rotateX(p.frameCount * rotationX);
        switch (shapeType) {
          case "ellipsoid":
            p.ellipsoid(30, 40, 40);
            break;
          case "torus":
            p.torus(50, 20);
            break;
          case "cylinder":
            p.cylinder(70, 70);
            break;
          case "cone":
            p.cone(50, 70);
            break;
          case "box":
            p.box(70, 70, 70);
            break;
          case "plane":
            p.plane(70);
            break;
          default:
            p.cylinder(70, 70);
        }
        p.pop();
      };
    };

    new p5(sketch);
  }, [shapeType]);

  return <div ref={canvasRef}></div>;
}
