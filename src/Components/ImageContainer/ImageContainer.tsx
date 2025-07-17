import React, { useState } from 'react';
import { StyledIcons, ImageModalOverlay, ImageModalContent } from './ImageContainer.styles';
type ImageGridProps = {
  images: string[]; // array of image URLs (2 or 3)
};

const ImageGrid: React.FC<ImageGridProps> = ({ images }) => {
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);

  const handleImageClick = (src: string) => {
    setEnlargedImage(src);
  };

  const handleClose = () => {
    setEnlargedImage(null);
  };

  const greaterthanthree = images.length > 2
  console.log('greaterthanthree', greaterthanthree)


  return (
    <>
      <StyledIcons greaterthanthree={greaterthanthree}>
        {images.map((src) => (
          <img key={src} src={src} alt="icon" onClick={() => handleImageClick(src)} />
        ))}
      </StyledIcons>

      {enlargedImage && (
        <ImageModalOverlay onClick={handleClose}>
          <ImageModalContent src={enlargedImage} alt="Enlarged" />
        </ImageModalOverlay>
      )}
    </>
  );
};

export default ImageGrid;