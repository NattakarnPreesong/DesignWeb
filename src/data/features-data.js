import { useTranslation } from "react-i18next";
import {
  ComputerDesktopIcon,
  BookmarkSquareIcon,
  BanknotesIcon,
  ChatBubbleLeftRightIcon,
  FolderOpenIcon,
} from "@heroicons/react/24/solid";

export const featuresData = [
  {
    color: "blue-gray",
    title: "IT System",
    icon: ComputerDesktopIcon,
    key: "ITSystem",
    href: '/Service',
  },
  {
    color: "blue-gray",
    title: "e-Tax Invoice & e-Receipt",
    icon: BookmarkSquareIcon,
    key: "ETaxInvoice",
  },
  {
    color: "blue-gray",
    title: "Website & Online marketing",
    icon: BanknotesIcon,
    key: "WebsiteMarketing",
    href: '/Marketing',
  },
  {
    color: "blue-gray",
    title: "Consult",
    icon: ChatBubbleLeftRightIcon,
    key: "Consult",
  },
  {
    color: "blue-gray",
    title: "MyLogStar",
    icon: FolderOpenIcon,
    key: "MyLogStar",
  },
];

export const getTranslatedFeaturesData = () => {
  const [t] = useTranslation("global");

  return featuresData.map((feature) => ({
    ...feature,
    title: t(feature.title),
  }));
};