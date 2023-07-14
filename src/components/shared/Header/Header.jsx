import { Button, IconButton, MobileNav, Navbar, Typography } from '@material-tailwind/react';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
    }, []);

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <Link to="#" className="flex items-center">
                    Services
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <Link to='/price' className="flex items-center">
                    Price
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <Link to='/about-us' className="flex items-center">
                    About-Us
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <Link to='#' className="flex items-center">
                    Docs
                </Link>
            </Typography>
        </ul>
    );
    return (
        <div className='bg-yellow-500'>
            <Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4 border border-red-100/90 bg-yellow-300">
                <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
                    <div className=" -mt-16 w-48 h-7 ">
                        <Link to='/'><img src="/src/assets/logoim.png" alt="" /></Link>
                    </div>
                    <div className="hidden lg:block">{navList}</div>
                    <Button variant="gradient" size="sm" className="hidden lg:inline-block">
                        <span>Buy Now</span>
                    </Button>
                    <IconButton
                        variant="text"
                        className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                        ripple={false}
                        onClick={() => setOpenNav(!openNav)}
                    >
                        {openNav ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                className="h-6 w-6"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </IconButton>
                </div>
                <MobileNav open={openNav}>
                    <div className="container mx-auto">
                        {navList}
                        <Button variant="gradient" size="sm" fullWidth className="mb-2">
                            <span>Buy Now</span>
                        </Button>
                    </div>
                </MobileNav>
            </Navbar>

        </div>
    );
};

export default Header;