// import * as React from "react";
// import Image from "next/image";
// import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "@/app/components/ui/dialog";
// import { ScrollArea, ScrollBar } from "@/app/components/ui/scroll-area";
// import { Announces } from "@/app/data/announces";
// import { Button } from "@/app/components/ui/button";
// import { announces } from "@prisma/client";
// import { useCarousel } from "@/app/hooks/use-carousel";
// import { SkeletonAnnounceCarousel } from "../../ui/skeletons/CarouselSkeleton";
// import { Icon } from "@iconify/react/dist/iconify.js";

// export default function Carousel({ announce }: { announce: announces }) {
//   const {
//     selectedImage,
//     selectedImageIndex,
//     fetchedImages,
//     hasImages,
//     isLoading,
//     handleNext,
//     handlePrev,
//     setSelectedImage,
//     setSelectedImageIndex
//   } = useCarousel(announce);

//   return (
//     <div className="w-full sm:px-4 mx-auto pt-6"> 
//       <span className='text-2xl font-medium text-visal-white'>Fotografie</span>
//       {hasImages ? (
//         <ScrollArea className="whitespace-nowrap bg-visal-200/20 backdrop-blur-sm rounded-md border border-visal-bg2/80 shadow-inner mt-2">
//           <div className="flex p-4">
//             {isLoading ? (
//               <SkeletonAnnounceCarousel/>
//             ) : (
//               fetchedImages.map((image, index) => (
//                 <Dialog key={index}>
//                   <DialogTrigger asChild>
//                     <figure className="shrink-0">
//                       <div className="overflow-hidden border shadow-2xl border-visal-50/50 rounded-md mr-4">
//                         <div className="relative shadow-lg">
//                           <Image 
//                             src={image} 
//                             alt={`Image ${index+1}`}
//                             className="aspect-square h-fit w-fit object-cover transition-opacity opacity-0 duration-100 cursor-pointer"
//                             width={100}
//                             height={100}
//                             onClick={() => {
//                               setSelectedImage(image);
//                               setSelectedImageIndex(index);
//                             }}
//                             onLoadingComplete={(image) => { image.classList.remove('opacity-0'); }}
//                           />
//                         </div>
//                       </div>
//                     </figure>
//                   </DialogTrigger>
//                   <DialogContent className="grid-rows-carousel text-visal-txt bg-visal-bg2/90 backdrop-blur-2xl h-[90%] max-w-[85%] p-2 ">
//                     <DialogHeader className="mx-auto h-12">
//                       <span className="text-2xl font-light my-auto">{selectedImageIndex+1}/{fetchedImages.length}</span>
//                     </DialogHeader>
//                     <div className="flex flex-col h-full justify-between items-center" >
//                       <div className="relative w-full h-full">
//                         <Image 
//                           src={selectedImage} 
//                           alt="Selected Image" 
//                           fill={true} 
//                           className="max-h-[95%] max-w-full object-contain transision-opacity opacity-0 duration-75 m-auto" 
//                           onLoadingComplete={(image) => { image.classList.remove('opacity-0'); }}
//                         />
//                       </div>
//                       <div className="flex gap-2 justify-between items-center" >
//                         <Button variant='inverted' className="cursor-pointer" onClick={handlePrev}>
//                           <Icon icon='ooui:previous-ltr' width='14' height='14'/>
//                           Indietro
//                         </Button>
//                         <Button variant='inverted' className="cursor-pointer" onClick={handleNext}>
//                           Avanti
//                           <Icon icon='ooui:previous-rtl' width='14' height='14'/>
//                         </Button>
//                       </div>
//                     </div>
//                   </DialogContent>
//                   </Dialog>
//                 ))
//               )}
//             </div>
//           <ScrollBar orientation="horizontal"/>
//         </ScrollArea>
//       ) : (
//         <div className='flex items-center h-[5rem]'>
//           <span className=''>Nessuna immagine disponibile, clicca sull&apos;indirizzo per osservarlo su Maps!</span>
//         </div>
//       )}
//     </div>
//   );
// }
