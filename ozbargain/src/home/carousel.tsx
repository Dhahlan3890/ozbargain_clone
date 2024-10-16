import { Carousel, Typography, Button } from "@material-tailwind/react";
import Deals from "../assets/new_deal.jpg"
 
export function CarouselSlides() {
  return (
    <Carousel className="rounded-xl" autoplay={true} loop={true} placeholder={null}>
      <div className="relative h-full w-full">
        <img
          src={Deals}
          style={{height:"600px"}}
          alt="image 1"
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              placeholder={null}
            >
              The Beauty of Nature
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
              placeholder={null}
            >
              It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts, as for that subtle something, that quality
              of air that emanation from old trees, that so wonderfully changes
              and renews a weary spirit.
            </Typography>
            <div className="flex justify-center gap-2">
              <Button size="lg" color="white" placeholder={null}>
                Explore
              </Button>
              <Button size="lg" color="white" variant="text" placeholder={null}>
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src={Deals}
          style={{height:"600px"}}
          alt="image 1"
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              placeholder={null}
            >
              The Beauty of Nature
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
              placeholder={null}
            >
              It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts, as for that subtle something, that quality
              of air that emanation from old trees, that so wonderfully changes
              and renews a weary spirit.
            </Typography>
            <div className="flex justify-center gap-2">
              <Button size="lg" color="white" placeholder={null}>
                Explore
              </Button>
              <Button size="lg" color="white" variant="text" placeholder={null}>
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src={Deals}
          style={{height:"600px"}}
          alt="image 1"
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              placeholder={null}
            >
              The Beauty of Nature
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
              placeholder={null}
            >
              It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts, as for that subtle something, that quality
              of air that emanation from old trees, that so wonderfully changes
              and renews a weary spirit.
            </Typography>
            <div className="flex justify-center gap-2">
              <Button size="lg" color="white" placeholder={null}>
                Explore
              </Button>
              <Button size="lg" color="white" variant="text" placeholder={null}>
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
      
    </Carousel>
  );
}