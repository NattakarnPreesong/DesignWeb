import { Cog8ToothIcon ,ComputerDesktopIcon, CommandLineIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/solid";

export const itsystemData = [
  {
    color: "blue-gray",
    title: "Maintainance",
    icon: Cog8ToothIcon,
    key: "Maintainance",
    
  }, 
  {
    color: "blue-gray",
    title: "System Development",
    icon: CommandLineIcon,
    href: '/',
    key: "SystemDevelopment",
  },
  {
    color: "blue-gray",
    title: "IT Support & Help Desk",
    icon: WrenchScrewdriverIcon,
    key: "ITSupport&HelpDesk",
  },
 
  {
    color: "blue-gray",
    title: "Product management system",
    icon: ComputerDesktopIcon,
    key: "Productmanagementsystem",
  },

];

export const getTranslatedItsystemData = () => {
  const [t] = useTranslation("global");

  return itsystemData.map((feature) => ({
    ...feature,
    title: t(feature.title),
  }));
};