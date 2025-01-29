import Autoplay from "embla-carousel-autoplay";

import beachPhoto from "~/assets/beach.jpg";
import boatPhoto from "~/assets/boat.jpg";
import cityPhoto from "~/assets/city.jpg";
import naturePhoto from "~/assets/nature.jpg";
import parisPhoto from "~/assets/paris.jpg";

import { cn } from "~/lib/utils";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";

export function DestinationsCarousel({ className }: { className?: string }) {
  const images = [beachPhoto, boatPhoto, naturePhoto, parisPhoto, cityPhoto];

  return (
    <Carousel
      plugins={[Autoplay({ delay: 2000 })]}
      opts={{
        loop: true,
      }}
      className={cn("mx-auto w-full rounded-lg px-6", className)}
    >
      <div className="overflow-hidden rounded-lg">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem
              key={`${image}-${index}`}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <img
                src={image}
                className="aspect-video w-full rounded-lg object-cover"
                alt={`Destination ${index + 1}`}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </div>

      <div className="absolute top-1/2 left-2 flex items-center justify-center">
        <CarouselPrevious className="relative left-0 translate-x-0 hover:translate-x-0" />
      </div>

      <div className="absolute top-1/2 right-2 flex items-center justify-center">
        <CarouselNext className="relative right-0 translate-x-0 hover:translate-x-0" />
      </div>
    </Carousel>
  );
}
