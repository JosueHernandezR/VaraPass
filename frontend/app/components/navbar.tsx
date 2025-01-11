"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import ThemeSelector from "./theme_selector";
import { usePathname } from "next/navigation";
import { classNames } from "@/utils/tools";

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
  isVisible: boolean;
}

const initialNavigation = [
  { name: "Product", href: "#", current: false, isVisible: true },
  { name: "Features", href: "#", current: false, isVisible: true },
  { name: "Marketplace", href: "#", current: false, isVisible: true },
  { name: "Company", href: "#", current: false, isVisible: true },
];

export default function Navbar() {
  const [navigation, setNavigation] =
    useState<NavigationItem[]>(initialNavigation);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Disclosure
      as="nav"
      className={classNames(
        "fixed top-0 w-full z-50 transition-all",
        scrolled
          ? "bg-white/80 dark:bg-black/80 backdrop-blur shadow-md dark:bg-principal/80"
          : ""
      )}
    >
      {({ open }) => (
        <>
          <div className="w-full px-2 sm:px-6 lg:px-8 mx-0">
            <div className="relative flex h-16 items-center justify-between z-50 max-w-7xl mx-auto ">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Botón del menú móvil */}
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 ">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
              <div className="flex flex-1 items-center justify-center sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <a href="#" className="-m-1.5 p-1.5">
                    <span className="sr-only">Your Company</span>
                    <img
                      alt=""
                      src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                      className="h-8 w-auto"
                    />
                  </a>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map(
                      (item) =>
                        item.isVisible && (
                          <a
                            key={item.name}
                            href={`/${item.href}`}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </a>
                        )
                    )}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 gap-2">
                <ThemeSelector />
              </div>
            </div>
          </div>
          <DisclosurePanel className="sm:hidden bg-white dark:bg-principal/90 z-50">
            <div className="space-y-1 px-2 pb-3 pt-2 bg-white dark:bg-principal/90">
              {navigation.map(
                (item) =>
                  item.isVisible && (
                    <DisclosureButton
                      key={item.name}
                      as="a"
                      href={`/${item.href}`}
                      className={classNames(
                        item.current
                          ? "bg-principal/80 text-white"
                          : "text-principal hover:text-white hover:bg-principal/90 dark:text-white dark:hover:bg-principal/80 dark:hover:text-white",
                        "block rounded-md px-3 py-2 text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </DisclosureButton>
                  )
              )}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
    // <header className="bg-white dark:bg-black/90 fixed top-0 left-0 right-0 z-50 backdrop-blur-sm transition-shadow">
    //   <nav
    //     aria-label="Global"
    //     className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8"
    //   >
    //     <div className="flex lg:flex-1">
    //       <a href="#" className="-m-1.5 p-1.5">
    //         <span className="sr-only">Your Company</span>
    //         <img
    //           alt=""
    //           src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
    //           className="h-8 w-auto"
    //         />
    //       </a>
    //     </div>
    //     <div className="hidden lg:flex lg:gap-x-12">
    //       {navigation.map((item) => (
    //         <a
    //           key={item.name}
    //           href={item.href}
    //           className="text-sm/6 font-semibold"
    //         >
    //           {item.name}
    //         </a>
    //       ))}
    //     </div>
    //     <div className="flex flex-1 items-center justify-end gap-x-6">
    //       <a
    //         href="#"
    //         className="hidden text-sm/6 font-semibold lg:block"
    //       >
    //         Log in
    //       </a>
    //       <a
    //         href="#"
    //         className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    //       >
    //         Sign up
    //       </a>
    //     </div>
    //     <div>
    //         <ThemeSelector/>
    //     </div>
    //     <div className="flex lg:hidden">
    //       <button
    //         type="button"
    //         onClick={() => setMobileMenuOpen(true)}
    //         className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
    //       >
    //         <span className="sr-only">Open main menu</span>
    //         <Bars3Icon aria-hidden="true" className="size-6" />
    //       </button>
    //     </div>
    //   </nav>
    //   <Dialog
    //     open={mobileMenuOpen}
    //     onClose={setMobileMenuOpen}
    //     className="lg:hidden"
    //   >
    //     <div className="fixed inset-0 z-10" />
    //     <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
    //       <div className="flex items-center gap-x-6">
    //         <a href="#" className="-m-1.5 p-1.5">
    //           <span className="sr-only">Your Company</span>
    //           <img
    //             alt=""
    //             src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
    //             className="h-8 w-auto"
    //           />
    //         </a>
    //         <a
    //           href="#"
    //           className="ml-auto rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    //         >
    //           Sign up
    //         </a>
    //         <button
    //           type="button"
    //           onClick={() => setMobileMenuOpen(false)}
    //           className="-m-2.5 rounded-md p-2.5 text-gray-700"
    //         >
    //           <span className="sr-only">Close menu</span>
    //           <XMarkIcon aria-hidden="true" className="size-6" />
    //         </button>
    //       </div>
    //       <div className="mt-6 flow-root">
    //         <div className="-my-6 divide-y divide-gray-500/10">
    //           <div className="space-y-2 py-6">
    //             {navigation.map((item) => (
    //               <a
    //                 key={item.name}
    //                 href={item.href}
    //                 className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
    //               >
    //                 {item.name}
    //               </a>
    //             ))}
    //           </div>
    //           <div className="py-6">
    //             <a
    //               href="#"
    //               className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
    //             >
    //               Log in
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //     </DialogPanel>
    //   </Dialog>
    // </header>
  );
}
