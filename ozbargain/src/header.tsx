import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Input,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";

import WelcomeImg from "./assets/welcome_image.jpg";
import "./home.css";
 
const nestedMenuItems = [
  {
    title: "Creative",
  },
  {
    title: "Guessing",
  },
  {
    title: "Instan win",
  },
  {
    title: "Daily Entry",
  },
  {
    title: "Lucky Draw",
  },
];
 
function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [openNestedMenu, setopenNestedMenu] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = nestedMenuItems.map(({ title }, key) => (
    <a href="#" key={key}>
      <MenuItem>{title}</MenuItem>
    </a>
  ));
 
  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-white"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Competitions
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden rounded-xl lg:block">
          <Menu
            placement="right-start"
            allowHover
            offset={15}
            open={openNestedMenu}
            handler={setopenNestedMenu}
          >
            <MenuHandler className="flex items-center justify-between">
              <MenuItem>
                Catogory
                <ChevronUpIcon
                  strokeWidth={2.5}
                  className={`h-3.5 w-3.5 transition-transform ${
                    isMenuOpen ? "rotate-90" : ""
                  }`}
                />
              </MenuItem>
            </MenuHandler>
            <MenuList className="rounded-xl">{renderItems}</MenuList>
          </Menu>
          <MenuItem>Popular</MenuItem>
          <MenuItem>Recent</MenuItem>
          <MenuItem>Winners</MenuItem>
          <MenuItem>Closed</MenuItem>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>
          <Menu
            placement="bottom"
            allowHover
            offset={6}
            open={openNestedMenu}
            handler={setopenNestedMenu}
          >
            <MenuHandler className="flex items-center justify-between">
              <MenuItem>
                Figma
                <ChevronUpIcon
                  strokeWidth={2.5}
                  className={`h-3.5 w-3.5 transition-transform ${
                    isMenuOpen ? "rotate-90" : ""
                  }`}
                />
              </MenuItem>
            </MenuHandler>
            <MenuList className="block rounded-xl lg:hidden">
              {renderItems}
            </MenuList>
          </Menu>
          <MenuItem>React</MenuItem>
          <MenuItem>TailwindCSS</MenuItem>
        </Collapse>
      </div>
    </React.Fragment>
  );
}

// const DealnestedMenuItems = [
//     {
//       title: "Creative",
//     },
//     {
//       title: "Guessing",
//     },
//     {
//       title: "Instan win",
//     },
//     {
//       title: "Daily Entry",
//     },
//     {
//       title: "Lucky Draw",
//     },
//   ];
   
  function DealNavListMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [openNestedMenu, setopenNestedMenu] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const renderItems = nestedMenuItems.map(({ title }, key) => (
      <a href="#" key={key}>
        <MenuItem>{title}</MenuItem>
      </a>
    ));
   
    return (
      <React.Fragment>
        <Menu
          open={isMenuOpen}
          handler={setIsMenuOpen}
          placement="bottom"
          allowHover={true}
        >
          <MenuHandler>
            <Typography as="div" variant="small" className="font-medium">
              <ListItem
                className="flex items-center gap-2 py-2 pr-4 font-medium text-white"
                selected={isMenuOpen || isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen((cur) => !cur)}
              >
                Deals
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`hidden h-3 w-3 transition-transform lg:block ${
                    isMenuOpen ? "rotate-180" : ""
                  }`}
                />
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`block h-3 w-3 transition-transform lg:hidden ${
                    isMobileMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </ListItem>
            </Typography>
          </MenuHandler>
          <MenuList className="hidden rounded-xl lg:block">
            {/* <Menu
              placement="right-start"
              allowHover
              offset={15}
              open={openNestedMenu}
              handler={setopenNestedMenu}
            >
              <MenuHandler className="flex items-center justify-between">
                <MenuItem>
                  Catogory
                  <ChevronUpIcon
                    strokeWidth={2.5}
                    className={`h-3.5 w-3.5 transition-transform ${
                      isMenuOpen ? "rotate-90" : ""
                    }`}
                  />
                </MenuItem>
              </MenuHandler>
              <MenuList className="rounded-xl">{renderItems}</MenuList>
            </Menu> */}
            <MenuItem>New</MenuItem>
            <MenuItem>Freebies</MenuItem>
            <MenuItem>Popular</MenuItem>
            <MenuItem>Stores</MenuItem>
            <MenuItem>Expiring Soon</MenuItem>
          </MenuList>
        </Menu>
        <div className="block lg:hidden">
          <Collapse open={isMobileMenuOpen}>
            <Menu
              placement="bottom"
              allowHover
              offset={6}
              open={openNestedMenu}
              handler={setopenNestedMenu}
            >
              <MenuHandler className="flex items-center justify-between">
                <MenuItem>
                  Figma
                  <ChevronUpIcon
                    strokeWidth={2.5}
                    className={`h-3.5 w-3.5 transition-transform ${
                      isMenuOpen ? "rotate-90" : ""
                    }`}
                  />
                </MenuItem>
              </MenuHandler>
              <MenuList className="block rounded-xl lg:hidden">
                {renderItems}
              </MenuList>
            </Menu>
            <MenuItem>React</MenuItem>
            <MenuItem>TailwindCSS</MenuItem>
          </Collapse>
        </div>
      </React.Fragment>
    );
  }


  const ForumnestedMenuItems = [
    {
      title: "Creative",
    },
    {
      title: "Guessing",
    },
    {
      title: "Instan win",
    },
    {
      title: "Daily Entry",
    },
    {
      title: "Lucky Draw",
    },
  ];
   
  function ForumNavListMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [openNestedMenu, setopenNestedMenu] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const renderItems = nestedMenuItems.map(({ title }, key) => (
      <a href="#" key={key}>
        <MenuItem>{title}</MenuItem>
      </a>
    ));
   
    return (
      <React.Fragment>
        <Menu
          open={isMenuOpen}
          handler={setIsMenuOpen}
          placement="bottom"
          allowHover={true}
        >
          <MenuHandler>
            <Typography as="div" variant="small" className="font-medium">
              <ListItem
                className="flex items-center gap-2 py-2 pr-4 font-medium text-white"
                selected={isMenuOpen || isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen((cur) => !cur)}
              >
                Forums
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`hidden h-3 w-3 transition-transform lg:block ${
                    isMenuOpen ? "rotate-180" : ""
                  }`}
                />
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`block h-3 w-3 transition-transform lg:hidden ${
                    isMobileMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </ListItem>
            </Typography>
          </MenuHandler>
          <MenuList className="hidden rounded-xl lg:block">
            {/* <Menu
              placement="right-start"
              allowHover
              offset={15}
              open={openNestedMenu}
              handler={setopenNestedMenu}
            >
              <MenuHandler className="flex items-center justify-between">
                <MenuItem>
                  Catogory
                  <ChevronUpIcon
                    strokeWidth={2.5}
                    className={`h-3.5 w-3.5 transition-transform ${
                      isMenuOpen ? "rotate-90" : ""
                    }`}
                  />
                </MenuItem>
              </MenuHandler>
              <MenuList className="rounded-xl">{renderItems}</MenuList>
            </Menu> */}
            <MenuItem>New</MenuItem>
            <MenuItem>Hot</MenuItem>
            <MenuItem>Unanswered</MenuItem>
            <MenuItem>Polls</MenuItem>
          </MenuList>
        </Menu>
        <div className="block lg:hidden">
          <Collapse open={isMobileMenuOpen}>
            <Menu
              placement="bottom"
              allowHover
              offset={6}
              open={openNestedMenu}
              handler={setopenNestedMenu}
            >
              <MenuHandler className="flex items-center justify-between">
                <MenuItem>
                  Figma
                  <ChevronUpIcon
                    strokeWidth={2.5}
                    className={`h-3.5 w-3.5 transition-transform ${
                      isMenuOpen ? "rotate-90" : ""
                    }`}
                  />
                </MenuItem>
              </MenuHandler>
              <MenuList className="block rounded-xl lg:hidden">
                {renderItems}
              </MenuList>
            </Menu>
            <MenuItem>React</MenuItem>
            <MenuItem>TailwindCSS</MenuItem>
          </Collapse>
        </div>
      </React.Fragment>
    );
  }

 
function NavList() {
  return (
    <List className="mb-6 mt-4 p-0 lg:mb-0 lg:mt-0 lg:flex-row lg:p-1">
        <DealNavListMenu />
      <Typography
        as="a"
        href="#"
        variant="small"
        color="white"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">Live</ListItem>
      </Typography>
      <ForumNavListMenu />

      {/* <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          Account
        </ListItem>
      </Typography> */}
      <NavListMenu />
      <Typography
        as="a"
        href="#"
        variant="small"
        color="white"
        className="font-medium"
      >
        {/* <ListItem className="flex items-center gap-2 py-2 pr-4">Docs</ListItem> */}
      </Typography>
    </List>
  );
}
 
export function Header() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  return (
    <div className="relative">
    <Navbar className="mx-auto max-w-screen-3xl px-4 py-2 rounded-none shadow-none absolute" color="transparent" >
      <div className="flex items-center justify-between text-white">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 lg:ml-2"
          color="black"
        >
          OzBargain Clone
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden gap-2 lg:flex">
          <Button size="sm">Get Started</Button>
          <Button variant="outlined" size="sm" color="white">
            Log In
          </Button>
        </div>
        <IconButton
          variant="text"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          <Button size="sm" fullWidth>
            Get Started
          </Button>
          <Button variant="outlined" size="sm" color="white" fullWidth >
            Log In
          </Button>
        </div>
      </Collapse>
    </Navbar>

    <div className="relative h-full w-full" style={{zIndex:"-1"}}>
      <div id="welcomeimage" style={{height:"500px"}} >
    <img
      src={WelcomeImg}
      alt="image 1"
      className="h-full w-full object-cover"
      
    />
    </div>
    <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/42">
      <div className="w-3/4 md:w-2/4 mr-auto ml-20" style={{marginLeft: window.innerWidth > 440 ? "50px" : "auto"}} id="welcomefont">
          <div style={{fontFamily:'Harmond, sans-sarif', fontSize: window.innerWidth > 440 ? "80px" : "60px"}}>Deals</div>
          <div style={{fontFamily:'Harmond, sans-sarif', fontSize: window.innerWidth > 440 ? "40px" : "30px", marginLeft: window.innerWidth > 440 ? "100px" : "50px"}}>of the</div>
          <div style={{fontFamily:'Harmond, sans-sarif', fontSize: window.innerWidth > 440 ? "80px" : "60px", marginLeft: window.innerWidth > 440 ? "120px" : "60px"}}>Future</div>
        {/* <Typography
          variant="h1"
          color="white"
          className="mb-4 text-3xl md:text-4xl lg:text-5xl"
        >
          The Beauty of Nature
        </Typography>
        <Typography
          variant="lead"
          color="white"
          className="mb-12 opacity-80"
        >
          It is not so much for its beauty that the forest makes a claim
          upon men&apos;s hearts, as for that subtle something, that quality
          of air that emanation from old trees, that so wonderfully changes
          and renews a weary spirit.
        </Typography> */}
        
        </div>
 
    </div>
    </div>

    </div>
  );
}