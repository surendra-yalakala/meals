"use client";
import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const imageIpRef = useRef();
  const [pickedImage, setPickedImage] = useState();

  function handlePickCLick() {
    imageIpRef.current.click();
  }

  function handleChangeImage(event) {
    const file = event.target.files[0];
    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = (url) => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No Image Picked yet!!</p>}
          {pickedImage && (
            <Image
              src={pickedImage}
              alt="The Image selected by the user"
              fill
            />
          )}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageIpRef}
          onChange={handleChangeImage}
          required
        />
        <button
          className={classes.button}
          type="button"
          onClick={handlePickCLick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
