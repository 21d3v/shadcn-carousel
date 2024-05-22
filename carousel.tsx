'use client'
import * as React from "react";
import Image from "next/image";

import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

import { Icon } from "@iconify/react/dist/iconify.js";

const staticImages = [
  "/images/image1.jpg",
  "/images/image2.jpg",
  "/images/image3.jpg",
  "/images/image4.jpg",
  "/images/image5.jpg",
  "/images/image6.jpg",
  "/images/image7.jpg",
  "/images/image8.jpg",
  "/images/image9.jpg",
];

export default function Carousel() {
  const [selectedImage, setSelectedImage] = React.useState(staticImages[0]);
  const [selectedImageIndex, setSelectedImageIndex] = React.useState(0);

  const handleNext = () => {
    const nextIndex = (selectedImageIndex + 1) % staticImages.length;
    setSelectedImage(staticImages[nextIndex]);
    setSelectedImageIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = (selectedImageIndex - 1 + staticImages.length) % staticImages.length;
    setSelectedImage(staticImages[prevIndex]);
    setSelectedImageIndex(prevIndex);
  };

  return (
    <div className="w-[40vw] sm:w-full sm:px-4 mx-auto pt-6">
      <span className='text-2xl font-medium' style={{ color: 'var(--foreground)' }}>Scrollbar</span>
      <ScrollArea className="whitespace-nowrap rounded-md border shadow-inner mt-2" style={{ backgroundColor: 'var(--background)', backdropFilter: 'blur(10px)', borderColor: 'var(--border)' }}>
        <div className="flex p-8 ">
          {staticImages.map((image, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <figure className="shrink-0">
                  <div className="overflow-hidden border shadow-2xl rounded-md mr-4" style={{ borderColor: 'var(--border)' }}>
                    <div className="relative shadow-lg">
                      <Image
                        src={image}
                        alt={`Image ${index + 1}`}
                        className="aspect-square h-fit w-fit object-cover transition-opacity opacity-0 duration-100 cursor-pointer"
                        width={100}
                        height={100}
                        onClick={() => {
                          setSelectedImage(image);
                          setSelectedImageIndex(index);
                        }}
                        onLoad={(event) => {
                          const target = event.target as HTMLImageElement;
                          target.classList.remove('opacity-0');
                        }}
                      />
                    </div>
                  </div>
                </figure>
              </DialogTrigger>
              <DialogContent className="grid-rows-carousel h-[90%] max-w-[85%] p-2" style={{ color: 'var(--foreground)', backgroundColor: 'var(--card)', backdropFilter: 'blur(20px)' }}>
                <DialogHeader className="mx-auto h-12">
                  <span className="text-2xl font-light my-auto">{selectedImageIndex + 1}/{staticImages.length}</span>
                </DialogHeader>
                <div className="flex flex-col h-full justify-between items-center">
                  <div className="relative w-full h-full">
                    <Image
                      src={selectedImage}
                      alt="Selected Image"
                      fill={true}
                      className="max-h-[95%] max-w-full object-contain transition-opacity opacity-0 duration-75 m-auto"
                      onLoad={(event) => {
                        const target = event.target as HTMLImageElement;
                        target.classList.remove('opacity-0');
                      }}
                    />
                  </div>
                  <div className="flex gap-2 justify-between items-center">
                    <Button variant='outline' className="cursor-pointer" onClick={handlePrev}>
                      <Icon icon='ooui:previous-ltr' width='14' height='14' />
                      Indietro
                    </Button>
                    <Button variant='outline' className="cursor-pointer" onClick={handleNext}>
                      Avanti
                      <Icon icon='ooui:previous-rtl' width='14' height='14' />
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        <ScrollBar orientation="horizontal" className="scrollbar-thumb scrollbar-track"/>
      </ScrollArea>
    </div>
  );
}