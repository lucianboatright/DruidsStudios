import React from 'react';
import { Grid, Image } from './ImageContainer.styles';

type ImageGridProps = {
  images: string[]; // array of image URLs (2 or 3)
};

const ImageGrid: React.FC<ImageGridProps> = ({ images }) => {
  const [img1, img2, img3] = images;

  return (
    <Grid>
      {img1 && <Image src={img1} alt="Image 1" />}
      {img2 && <Image src={img2} alt="Image 2" />}
      {img3 && <Image src={img3} alt="Image 3" />}
    </Grid>
  );
};

export default ImageGrid;