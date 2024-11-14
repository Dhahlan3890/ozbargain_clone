import {
    Card,
    CardHeader,
    CardBody,
  } from "@material-tailwind/react";

import { useState } from "react";

import { Typography, Input, Button } from "@material-tailwind/react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import LoginImage from "../assets/login_image.jpg"
   
  export function Login() {
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);

    return (
    <Fade duration={2000}>
      <Card className="w-full flex-row" placeholder={null}>
        <CardHeader
        placeholder={null}
          shadow={false}
          floated={false}
          className="m-0 w-1/2 shrink-0 rounded-r-none"
        >
            <div className="h-screen">
            <div
            className="ml-3 pt-5"
            style={{fontFamily:"DMSans, sans-sarif", fontSize:"24px", color:"black", fontWeight:"600"}}
            >
            OZBARGAIN CLONE
            </div>
            <section className="grid text-center h-screen w-full items-center">
            <div>
                <Typography variant="h4" color="blue-gray" className="mb-2" placeholder={null}>
                Welcome Back
                </Typography>
                <Typography className="mb-8 text-gray-600 font-normal text-[16px]" placeholder={null}>
                Please enter your Details
                </Typography>
                <form action="#" className="mx-auto max-w-[20rem] text-left">
                <div className="mb-4">
                    <label htmlFor="email">
                    <Typography
                        variant="small"
                        className="mb-1 block font-medium text-gray-900"
                        placeholder={null}
                    >
                        Your Email
                    </Typography>
                    </label>
                    <Input
                    crossOrigin={null}
                    id="email"
                    color="gray"
                    size="md"
                    type="email"
                    name="email"
                    placeholder="name@mail.com"
                    className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                    labelProps={{
                        className: "hidden",
                    }}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password">
                    <Typography
                        variant="small"
                        className="mb-1 block font-medium text-gray-900"
                        placeholder={null}
                    >
                        Password
                    </Typography>
                    </label>
                    <Input
                    crossOrigin={null}
                    size="md"
                    placeholder="********"
                    labelProps={{
                        className: "hidden",
                    }}
                    className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                    type={passwordShown ? "text" : "password"}
                    icon={
                        <i onClick={togglePasswordVisiblity}>
                        {passwordShown ? (
                            <EyeIcon className="h-4 w-4" />
                        ) : (
                            <EyeSlashIcon className="h-4 w-4" />
                        )}
                        </i>
                    }
                    />
                </div>
                <Button color="gray" size="md" className="mt-4" fullWidth placeholder={null}>
                    sign in
                </Button>
                <div className="!mt-2 flex justify-end">
                    <Typography
                    as="a"
                    href="#"
                    color="blue-gray"
                    variant="small"
                    className="font-medium text-sm"
                    placeholder={null}
                    >
                    Forgot password
                    </Typography>
                </div>
                <Button
                    variant="outlined"
                    size="md"
                    className="mt-4 flex h-10 items-center justify-center gap-2"
                    fullWidth placeholder={null}
                >
                    <img
                    src={`https://www.material-tailwind.com/logos/logo-google.png`}
                    alt="google"
                    className="h-5 w-5"
                    />{" "}
                    sign in with google
                </Button>
                <Typography
                    variant="small"
                    color="gray"
                    className="!mt-3 text-center font-normal text-sm"
                    placeholder={null}
                >
                    Not registered?{" "}
                    <Link to="/signup" className="font-medium text-gray-900 hover:text-gray-700 transition-colors">
                    Create account
                    </Link>
                </Typography>
                </form>
            </div>
            </section>
            </div>
          
        </CardHeader>
        <CardBody className="w-full m-0 p-2" placeholder={null}>
        <img
            src={LoginImage}
            alt="card-image"
            className="h-full w-full object-cover"
            loading="lazy"
            style={{borderRadius:"5px"}}
          />
          
        </CardBody>
      </Card>
    </Fade>
    );
  }
