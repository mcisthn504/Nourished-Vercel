import React, { createContext, useContext, useState } from "react";

const PhotoContext = createContext();

export const usePhotoContext = () => useContext(PhotoContext);

export const PhotoProvider = ({ children }) => {
  const [leftPhoto, setLeftPhoto] = useState(null);
  const [rightPhoto, setRightPhoto] = useState(null);

  return (
    <PhotoContext.Provider value={{ leftPhoto, setLeftPhoto, rightPhoto, setRightPhoto }}>
      {children}
    </PhotoContext.Provider>
  );
};
