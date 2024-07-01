
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel";
import { TabsTrigger } from "@radix-ui/react-tabs";

export function MobileDisplayTabList({ tablist }: { tablist: { name: string; label: string }[] }) {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
        dragFree: true,
      }}
      className='w-full'
    >
      <CarouselContent>
        {tablist.map((tab, index) => (
          <CarouselItem key={index} className='basis-1/3 md:basis-1/2 lg:basis-1/3'>
            <TabsTrigger value={tab.name}>{tab.label}</TabsTrigger>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/*<CarouselPrevious />
      <CarouselNext />*/}
    </Carousel>
  );
}
