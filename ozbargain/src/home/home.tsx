import { Typography, Card } from "@material-tailwind/react";
import { Header } from "./header";
import { Sidebar } from "./sidebar";
import { CarouselSlides } from "./carousel";
import { Chategories } from "./chategories";
import { NewDeals } from "./newdeals"
import { CompGallery } from "./competitions";
import { Footer } from "./footer";


export default function Home() {
  return (
    <div>
        <Header/>
      <div>
        <Sidebar/>
        <Typography
          variant="h3"
          className="ml-5 mt-20"
          placeholder={null}
        >
          New Deals
        </Typography>
        <div className="ml-5 mt-5">
          <NewDeals/>
        </div>
        <Typography
        variant="h3"
        className="ml-5 mt-20"
        placeholder={null}
        >
          Deals Chategories
        </Typography>
        <div className="ml-5 mt-5">
          <Chategories/>
        </div>

        <div className="flex justify-center">
          <Typography
          variant="h3"
          className="mt-20"
          placeholder={null}
          >
            Competitions
          </Typography>
        </div>
        <div className="flex justify-center">
        <Typography variant="h5" className="m-4 text-gray-400" placeholder={null}>
          Check out what's getting the most on OZBargain right now
        </Typography>
        </div>
        <div className="flex justify-center mt-5">
          <CompGallery/>
        </div>

        <div className="flex justify-center">
          <Typography
          variant="h3"
          className="mt-20"
          placeholder={null}
          >
            Why Us
          </Typography>
        </div>
        <div className="flex justify-center">
        <Typography variant="h5" className="mb-4 text-gray-400" placeholder={null}>
        Explore about us and join with us
        </Typography>
        </div>
        
        <div className="m-5">
          <CarouselSlides/>
        </div>

        <Footer/>

      </div>
    </div>
  );
}
