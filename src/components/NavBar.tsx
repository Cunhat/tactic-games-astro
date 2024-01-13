import * as React from "react";
import { Icons } from "./Icons";
import { cn } from "../lib/utils";

export const Navbar = () => {
  const [show, setShow] = React.useState(false);

  const handleClick = () => {
    setShow(!show);
    console.log(show);
  };

  return (
    <nav className="p-3 top-0 z-50 w-full bg-black sm:gap-24 justify-center flex">
      <div className="container flex w-full justify-between sm:justify-center items-center">
        <img src="/img/logo.png" alt="logo-img" width="60" height="60" />
        <Icons.menu className="h-8 w-8 sm:hidden" onClick={handleClick} />
        {show && (
          <div className="pt-[20%] p-4 absolute z-50 top-0 left-0 right-0 bottom-0 bg-black h-screen w-screen flex flex-col gap-[10%] items-center">
            <img
              src="/img/logo.png"
              width={"70%"}
              height={"auto"}
              alt="logo-img"
            />

            <Icons.close
              className="h-8 w-8 absolute top-4 right-4"
              onClick={() => setShow(!show)}
            />
            <ListOfPages />
          </div>
        )}
        <ListOfPages className="hidden sm:flex sm:ml-auto sm:items-center" />
        <div className="hidden sm:block sm:ml-auto"></div>
      </div>
    </nav>
  );
};

const ListOfPages: React.FC<React.HTMLAttributes<HTMLUListElement>> = ({
  className,
  ...props
}) => (
  <ul
    className={cn(
      "flex flex-col gap-[5%] h-full sm:flex-row sm:gap-6 ",
      className
    )}
    {...props}
  >
    <li className="text-3xl sm:text-lg font-semibold text-center hover:cursor-pointer hover:text-primary">
      INÍCIO
    </li>
    <li className="text-3xl sm:text-lg font-semibold text-center hover:cursor-pointer hover:text-primary">
      INSCRIÇÕES
    </li>
    <li className="text-3xl sm:text-lg font-semibold text-center hover:cursor-pointer hover:text-primary">
      REGULAMENTO
    </li>
    <li className="text-3xl sm:text-lg font-semibold text-center hover:cursor-pointer hover:text-primary">
      GALERIA
    </li>
  </ul>
);
