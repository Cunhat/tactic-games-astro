import * as React from "react";
import { Icons } from "./Icons";
import { cn } from "../lib/utils";

export const Navbar = () => {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [show]);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <nav className="p-3 top-0 sticky z-50 w-full bg-black sm:gap-24 justify-center flex">
      <div className="container flex w-full justify-between sm:justify-center items-center">
        <a href="/" aria-label="main-icon">
          <img src="/img/logo.png" alt="logo-img" width="60" height="60" />
        </a>
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
              className="h-8 w-8 absolute top-3 right-3"
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
    <li className="text-3xl sm:text-lg font-semibold font-kanit text-center hover:cursor-pointer hover:text-primary">
      <a href="/" aria-label="Inicío">
        Inicío
      </a>
    </li>
    <li className="text-3xl sm:text-lg font-semibold font-kanit text-center hover:cursor-pointer hover:text-primary">
      <a href="/inscricoes" aria-label="Inscrições">
        Inscrições
      </a>
    </li>
    <li className="text-3xl sm:text-lg font-semibold font-kanit text-center hover:cursor-pointer hover:text-primary">
      <a href="/regulamento" aria-label="Regulamento">
        Regulamento
      </a>
    </li>
    {/* <li className="text-3xl sm:text-lg font-semibold text-center hover:cursor-pointer hover:text-primary">
      <a href="/galeria">GALERIA</a>
    </li> */}
  </ul>
);
