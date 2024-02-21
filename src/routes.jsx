import {  Company, Contact, Home, NewRelease, ItSystem, Marketing } from "@/pages";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export const routes = [
  {
    name: "Home",
    path: "/Home",
    element: <Home />,
    hidden: true,
  },
  {
    name: "ItSystem",
    path: "/Service",
    element: <ItSystem />,
    hidden: true,
  },
  {
    name: "Marketing",
    path: "/Marketing",
    element: <Marketing />,
    hidden: true,
  },

  {
    name: "New Release",
    path: "/NewRelease",
    element: <NewRelease />,
  },
  {
    name: "Solution",
    icon: ChevronDownIcon,
    dropdown: [
      { name: "IT System", path: "/Service",  },
      { name: "Online Marketing", path: "/Marketing",  },
    ],
  },
  {
    name: "Company",
    path: "/Company",
    element: <Company />,
  },  
  {
    name: "Contact",
    path: "/Contact",
    element: <Contact />,
  }, 
];

export default routes;
