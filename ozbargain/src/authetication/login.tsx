import {
    Card,
    CardHeader,
    CardBody,
  } from "@material-tailwind/react";

import { useState } from "react";

import { Typography, Input, Button } from "@material-tailwind/react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import { Fade } from "react-awesome-reveal";
   
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
          className="m-0 w-2/5 shrink-0 rounded-r-none"
        >
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody className="w-full" placeholder={null}>
        <section className="grid text-center h-screen w-full items-center p-8">
            <div>
                <Typography variant="h3" color="blue-gray" className="mb-2" placeholder={null}>
                Sign In
                </Typography>
                <Typography className="mb-16 text-gray-600 font-normal text-[18px]" placeholder={null}>
                Enter your email and password to sign in
                </Typography>
                <form action="#" className="mx-auto max-w-[24rem] text-left">
                <div className="mb-6">
                    <label htmlFor="email">
                    <Typography
                        variant="small"
                        className="mb-2 block font-medium text-gray-900"
                        placeholder={null}
                    >
                        Your Email
                    </Typography>
                    </label>
                    <Input
                    crossOrigin={null}
                    id="email"
                    color="gray"
                    size="lg"
                    type="email"
                    name="email"
                    placeholder="name@mail.com"
                    className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                    labelProps={{
                        className: "hidden",
                    }}
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="password">
                    <Typography
                        variant="small"
                        className="mb-2 block font-medium text-gray-900"
                        placeholder={null}
                    >
                        Password
                    </Typography>
                    </label>
                    <Input
                    crossOrigin={null}
                    size="lg"
                    placeholder="********"
                    labelProps={{
                        className: "hidden",
                    }}
                    className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                    type={passwordShown ? "text" : "password"}
                    icon={
                        <i onClick={togglePasswordVisiblity}>
                        {passwordShown ? (
                            <EyeIcon className="h-5 w-5" />
                        ) : (
                            <EyeSlashIcon className="h-5 w-5" />
                        )}
                        </i>
                    }
                    />
                </div>
                <Button color="gray" size="lg" className="mt-6" fullWidth placeholder={null}>
                    sign in
                </Button>
                <div className="!mt-4 flex justify-end">
                    <Typography
                    as="a"
                    href="#"
                    color="blue-gray"
                    variant="small"
                    className="font-medium"
                    placeholder={null}
                    >
                    Forgot password
                    </Typography>
                </div>
                <Button
                    variant="outlined"
                    size="lg"
                    className="mt-6 flex h-12 items-center justify-center gap-2"
                    fullWidth placeholder={null}
                >
                    <img
                    src={`https://www.material-tailwind.com/logos/logo-google.png`}
                    alt="google"
                    className="h-6 w-6"
                    />{" "}
                    sign in with google
                </Button>
                <Typography
                    variant="small"
                    color="gray"
                    className="!mt-4 text-center font-normal"
                    placeholder={null}
                >
                    Not registered?{" "}
                    <a href="#" className="font-medium text-gray-900">
                    Create account
                    </a>
                </Typography>
                </form>
            </div>
            </section>
          
        </CardBody>
      </Card>
    </Fade>
    );
  }
