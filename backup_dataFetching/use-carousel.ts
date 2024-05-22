// // Custom hook for logic
// import { useState, useEffect, useCallback } from 'react';
// import { announces } from "@prisma/client";

// type AnnounceWithIndex = announces & {
//   [key: string]: any;
// };

// export function useCarousel(announce: announces) {
//   const [selectedImage, setSelectedImage] = useState('');
//   const [selectedImageIndex, setSelectedImageIndex] = useState(0);
//   const [fetchedImages, setFetchedImages] = useState<string[]>([]);
//   const [hasImages, setHasImages] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   const fetchImages = async (announce: announces) => {
//     setIsLoading(true);
//     try {
//       let url = '/api/images/announceImages?';
//       for (const key in announce) {
//         const announceKey = key as keyof typeof announce;
//         if (announceKey.startsWith('immagine') && announce[announceKey]) {
//           url += `${announceKey}=${announce[announceKey]}&`;
//         }
//       }
//       const response = await fetch(url);
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       const images = await response.json();
//       setFetchedImages(images);
//       setSelectedImage(images[0]);
//     } catch (error) {
//       console.error('Failed to fetch images:', error);
//     }
//     setIsLoading(false);
//   };

//   useEffect(() => {
//     fetchImages(announce);
//   }, [announce]);

//   const handleNext = useCallback(() => {
//     const nextIndex = (selectedImageIndex + 1) % fetchedImages.length;
//     setSelectedImage(fetchedImages[nextIndex]);
//     setSelectedImageIndex(nextIndex);
//   }, [selectedImageIndex, fetchedImages]);

//   const handlePrev = useCallback(() => {
//     const prevIndex = (selectedImageIndex - 1 + fetchedImages.length) % fetchedImages.length;
//     setSelectedImage(fetchedImages[prevIndex]);
//     setSelectedImageIndex(prevIndex);
//   }, [selectedImageIndex, fetchedImages]);

//   useEffect(() => {
//     let hasData = false;
//     const announceWithIndex = announce as AnnounceWithIndex;
//     for (const key in announceWithIndex) {
//       if (key.startsWith('immagine_') && announceWithIndex[key] && announceWithIndex[key].length > 0) {
//         hasData = true;
//         break;
//       }
//     }
//     setHasImages(hasData);
//   }, [announce]);

//   return {
//     selectedImage,
//     selectedImageIndex,
//     fetchedImages,
//     hasImages,
//     isLoading,
//     handleNext,
//     handlePrev,
//     setSelectedImage,
//     setSelectedImageIndex
//   };
// }
