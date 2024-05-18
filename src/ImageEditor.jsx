import React, { useState } from "react";
import { Stage, Layer, Image } from "react-konva";
import { useDropzone } from "react-dropzone";

function ImageEditor() {
  const [images, setImages] = useState([]);
  const [imagePositions, setImagePositions] = useState({});

  const onDrop = (acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        const img = new window.Image();
        img.src = reader.result;
        img.onload = () => {
          setImages((prevImages) => [...prevImages, img]);
        };
      };
      reader.readAsDataURL(file);
    });
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleDragMove = (index, e) => {
    setImagePositions({
      ...imagePositions,
      [index]: { x: e.target.x(), y: e.target.y() },
    });
  };

  return (
    <div>
      <div
        {...getRootProps()}
        style={{ width: "100%", height: "50px", border: "1px dashed black" }}
      >
        <input {...getInputProps()} />
        <p>Drag & drop images here, or click to select images</p>
      </div>
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          {images.map((image, index) => (
            <Image
              key={index}
              image={image}
              x={imagePositions[index]?.x || 0}
              y={imagePositions[index]?.y || 0}
              draggable
              onDragMove={(e) => handleDragMove(index, e)}
            />
          ))}
        </Layer>
      </Stage>
    </div>
  );
}

export default ImageEditor;
