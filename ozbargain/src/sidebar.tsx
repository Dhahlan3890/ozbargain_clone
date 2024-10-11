import React from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon, ArrowRightIcon } from "@heroicons/react/24/outline";


// import React from "react";
import {
  Drawer,
  Button,
  IconButton,
} from "@material-tailwind/react";
 
// export function DrawerPlacement() {
//   const [openTop, setOpenTop] = React.useState(false);
//   const [openRight, setOpenRight] = React.useState(false);
//   const [openBottom, setOpenBottom] = React.useState(false);
//   const [openLeft, setOpenLeft] = React.useState(false);
 
//   const openDrawerTop = () => setOpenTop(true);
//   const closeDrawerTop = () => setOpenTop(false);
//   const openDrawerRight = () => setOpenRight(true);
//   const closeDrawerRight = () => setOpenRight(false);
//   const openDrawerBottom = () => setOpenBottom(true);
//   const closeDrawerBottom = () => setOpenBottom(false);
//   const openDrawerLeft = () => setOpenLeft(true);
//   const closeDrawerLeft = () => setOpenLeft(false);
 
//   return (
//     <React.Fragment>
//       <div className="flex flex-wrap gap-4">
//         <Button onClick={openDrawerTop}>Open Drawer Top</Button>
//         <Button onClick={openDrawerRight}>Open Drawer Right</Button>
//         <Button onClick={openDrawerBottom}>Open Drawer Bottom</Button>
//         <Button onClick={openDrawerLeft}>Open Drawer Left</Button>
//       </div>
//        <Drawer
//         placement="top"
//         open={openTop}
//         onClose={closeDrawerTop}
//         className="p-4"
//       >
//         <div className="mb-6 flex items-center justify-between">
//           <Typography variant="h5" color="blue-gray">
//             Material Tailwind
//           </Typography>
//           <IconButton variant="text" color="blue-gray" onClick={closeDrawerTop}>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={2}
//               stroke="currentColor"
//               className="h-5 w-5"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           </IconButton>
//         </div>
//         <Typography color="gray" className="mb-8 pr-4 font-normal">
//           Material Tailwind features multiple React and HTML components, all
//           written with Tailwind CSS classes and Material Design guidelines.
//         </Typography>
//         <div className="flex gap-2">
//           <Button size="sm" variant="outlined">
//             Documentation
//           </Button>
//           <Button size="sm">Get Started</Button>
//         </div>
//       </Drawer>
//       <Drawer
//         placement="right"
//         open={openRight}
//         onClose={closeDrawerRight}
//         className="p-4"
//       >
//         <div className="mb-6 flex items-center justify-between">
//           <Typography variant="h5" color="blue-gray">
//             Material Tailwind
//           </Typography>
//           <IconButton
//             variant="text"
//             color="blue-gray"
//             onClick={closeDrawerRight}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={2}
//               stroke="currentColor"
//               className="h-5 w-5"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           </IconButton>
//         </div>
//         <Typography color="gray" className="mb-8 pr-4 font-normal">
//           Material Tailwind features multiple React and HTML components, all
//           written with Tailwind CSS classes and Material Design guidelines.
//         </Typography>
//         <div className="flex gap-2">
//           <Button size="sm" variant="outlined">
//             Documentation
//           </Button>
//           <Button size="sm">Get Started</Button>
//         </div>
//       </Drawer>
//       <Drawer
//         placement="bottom"
//         open={openBottom}
//         onClose={closeDrawerBottom}
//         className="p-4"
//       >
//         <div className="mb-6 flex items-center justify-between">
//           <Typography variant="h5" color="blue-gray">
//             Material Tailwind
//           </Typography>
//           <IconButton
//             variant="text"
//             color="blue-gray"
//             onClick={closeDrawerBottom}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={2}
//               stroke="currentColor"
//               className="h-5 w-5"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           </IconButton>
//         </div>
//         <Typography color="gray" className="mb-8 pr-4 font-normal">
//           Material Tailwind features multiple React and HTML components, all
//           written with Tailwind CSS classes and Material Design guidelines.
//         </Typography>
//         <div className="flex gap-2">
//           <Button size="sm" variant="outlined">
//             Documentation
//           </Button>
//           <Button size="sm">Get Started</Button>
//         </div>
//       </Drawer>
//       <Drawer
//         placement="left"
//         open={openLeft}
//         onClose={closeDrawerLeft}
//         className="p-4"
//       >
//         <div className="mb-6 flex items-center justify-between">
//           <Typography variant="h5" color="blue-gray">
//             Material Tailwind
//           </Typography>
//           <IconButton
//             variant="text"
//             color="blue-gray"
//             onClick={closeDrawerLeft}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={2}
//               stroke="currentColor"
//               className="h-5 w-5"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           </IconButton>
//         </div>
//         <Typography color="gray" className="mb-8 pr-4 font-normal">
//           Material Tailwind features multiple React and HTML components, all
//           written with Tailwind CSS classes and Material Design guidelines.
//         </Typography>
//         <div className="flex gap-2">
//           <Button size="sm" variant="outlined">
//             Documentation
//           </Button>
//           <Button size="sm">Get Started</Button>
//         </div>
//       </Drawer>
//     </React.Fragment>
//   );
// }





 
export function Sidebar() {
  const [open, setOpen] = React.useState(0);
//   const [openTop, setOpenTop] = React.useState(false);
//   const [openRight, setOpenRight] = React.useState(false);
//   const [openBottom, setOpenBottom] = React.useState(false);
  const [openLeft, setOpenLeft] = React.useState(false);
 
//   const openDrawerTop = () => setOpenTop(true);
//   const closeDrawerTop = () => setOpenTop(false);
//   const openDrawerRight = () => setOpenRight(true);
//   const closeDrawerRight = () => setOpenRight(false);
//   const openDrawerBottom = () => setOpenBottom(true);
//   const closeDrawerBottom = () => setOpenBottom(false);
  const openDrawerLeft = () => setOpenLeft(true);
  const closeDrawerLeft = () => setOpenLeft(false);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  return (
    <>
    <button onClick={openDrawerLeft} className="shadow animate-bounce" style={{position:"fixed", top:"5rem"}}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
    </svg>
    </button>
    <div onMouseEnter={openDrawerLeft} style={{ position: 'fixed', left: 0, top: 0, height: '100vh', width: '2rem'}}></div>
    <Drawer
    onMouseLeave={closeDrawerLeft}
        placement="left"
        open={openLeft}
        onClose={closeDrawerLeft}
        className="p-4"
      >
    <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
        <IconButton
        variant="text"
        color="blue-gray"
        onClick={closeDrawerLeft}
        >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-5 w-5"
        >
            <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
            />
        </svg>
        </IconButton>
      {/* <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          Sidebar
        </Typography>
      </div> */}
      <List>
        <Accordion
          open={open === 1}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 1}>
            <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3">
              <ListItemPrefix>
                <PresentationChartBarIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal">
                Deals Categories
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Automotives
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Books and magazines
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Computing
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Education
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Entertainment
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Fashion and design
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Financial
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Gaming
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 2}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""}`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 2}>
            <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-3">
              <ListItemPrefix>
                <ShoppingBagIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal">
                Discussion Categories
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Automotve
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Computing
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Education & Work
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Electrical and Electronics
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Entertainment
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Fashion
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Financial
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Gaming
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Health
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>
        <hr className="my-2 border-blue-gray-50" />
        <ListItem>
          <ListItemPrefix>
            <InboxIcon className="h-5 w-5" />
          </ListItemPrefix>
          Inbox
          <ListItemSuffix>
            <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
          </ListItemSuffix>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5" />
          </ListItemPrefix>
          Profile
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          Settings
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List>
    </Card>
    </Drawer>
    </>
  );
}