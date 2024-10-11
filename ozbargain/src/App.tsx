import { Typography, Card } from "@material-tailwind/react";
import { Header } from "./header";
import { Sidebar } from "./sidebar";
import { CarouselSlides } from "./carousel";
import { Chategories } from "./chategories";
import { NewDeals } from "./newdeals"


export default function App() {
  return (
    <div>
        <Header/>
      <div>
        <Sidebar/>
        <Typography
        variant="h3"
        className="ml-5 mt-20"
        >
          New Deals
        </Typography>
        <div className="ml-5 mt-5">
          <NewDeals/>
        </div>
        <Typography
        variant="h3"
        className="ml-5 mt-20"
        >
          Deals Chategories
        </Typography>
        <div className="ml-5 mt-5">
          <Chategories/>
        </div>
        
        <div className="m-5">
          <CarouselSlides/>
        </div>

      </div>
    </div>
  );
}
