import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Input,
    Button,
} from "@material-tailwind/react";
import { useState } from "react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import LoginImage from "../assets/login_image.jpg";

export function Signup() {
    const [passwordShown, setPasswordShown] = useState(false);
    const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);
    const toggleConfirmPasswordVisiblity = () => setConfirmPasswordShown((cur) => !cur);

    return (
        <Fade duration={1000} triggerOnce>
            <Card className="w-full flex-row" placeholder={null}>
                <CardHeader
                    placeholder={null}
                    shadow={false}
                    floated={false}
                    className="m-0 w-1/2 shrink-0 rounded-r-none"
                >
                    <img
                        src={LoginImage}
                        alt="card-image"
                        className="h-full w-full object-cover"
                        loading="lazy"
                    />
                    
                </CardHeader>
                <CardBody className="w-full m-0" placeholder={null}>
                        
                        <section className="grid text-center h-screen w-full items-center">
                            <div>
                                <Typography variant="h4" color="blue-gray" className="mb-2" placeholder={null}>
                                    Create Account
                                </Typography>
                                <Typography className="mb-8 text-gray-600 font-normal text-[16px]" placeholder={null}>
                                    Enter your details to register
                                </Typography>
                                <form action="#" className="mx-auto max-w-[20rem] text-left">
                                    <div className="mb-4">
                                        <label htmlFor="name">
                                            <Typography variant="small" className="mb-1 block font-medium text-gray-900" placeholder={null}>
                                                Full Name
                                            </Typography>
                                        </label>
                                        <Input
                                            crossOrigin={null}
                                            id="name"
                                            color="gray"
                                            size="md"
                                            type="text"
                                            placeholder="John Doe"
                                            className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                                            labelProps={{
                                                className: "hidden",
                                            }}
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="email">
                                            <Typography variant="small" className="mb-1 block font-medium text-gray-900" placeholder={null}>
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
                                            <Typography variant="small" className="mb-1 block font-medium text-gray-900" placeholder={null}>
                                                Password
                                            </Typography>
                                        </label>
                                        <Input
                                            crossOrigin={null}
                                            size="md"
                                            type={passwordShown ? "text" : "password"}
                                            name="password"
                                            placeholder="Enter your password"
                                            className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                                            labelProps={{
                                                className: "hidden",
                                            }}
                                            endAdornment={
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
                                    <div className="mb-4">
                                        <label htmlFor="confirmPassword">
                                            <Typography variant="small" className="mb-1 block font-medium text-gray-900" placeholder={null}>
                                                Confirm Password
                                            </Typography>
                                        </label>
                                        <Input
                                            crossOrigin={null}
                                            size="md"
                                            type={confirmPasswordShown ? "text" : "password"}
                                            name="confirmPassword"
                                            placeholder="Confirm your password"
                                            className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                                            labelProps={{
                                                className: "hidden",
                                            }}
                                            endAdornment={
                                                <i onClick={toggleConfirmPasswordVisiblity}>
                                                    {confirmPasswordShown ? (
                                                        <EyeIcon className="h-4 w-4" />
                                                    ) : (
                                                        <EyeSlashIcon className="h-4 w-4" />
                                                    )}
                                                </i>
                                            }
                                        />
                                    </div>
                                    <Button color="gray" size="md" className="mt-4" fullWidth placeholder={null}>
                                        Sign up
                                    </Button>
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
                                        />
                                        sign up with google
                                    </Button>
                                    <Typography
                                        variant="small"
                                        color="gray"
                                        className="!mt-3 text-center font-normal text-sm"
                                        placeholder={null}
                                    >
                                        Already have an account?{" "}
                                        <Link to="/login" className="font-medium text-gray-900 hover:text-gray-700 transition-colors">
                                            Sign in
                                        </Link>
                                    </Typography>
                                </form>
                            </div>
                        </section>

                    
                </CardBody>
            </Card>
        </Fade>
    );
}
