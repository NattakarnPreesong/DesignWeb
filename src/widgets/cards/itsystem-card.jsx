import PropTypes from "prop-types";
import {
  Card,
  CardBody,
  Typography,
  IconButton,
} from "@material-tailwind/react";

export function ItSystemCard({ color, icon, title }) {
  return (
    <Card className="shadow-lg shadow-gray-500/10 rounded-full">
      <CardBody className="px-8 text-center">
        <IconButton
          variant="gradient"
          size="lg"
          color={color}
          className="pointer-events-none mb-6 rounded-full"
        >
          {icon}
        </IconButton>
        <Typography variant="h5" className="mb-2" color="blue-gray">
          {title}
        </Typography>
      </CardBody>
    </Card>
  );
}

ItSystemCard.defaultProps = {
  color: "blue",
};

ItSystemCard.propTypes = {
  color: PropTypes.oneOf([
    "blue-gray",
    "gray",
    "brown",
    "deep-orange",
    "orange",
    "amber",
    "yellow",
    "lime",
    "light-green",
    "green",
    "teal",
    "cyan",
    "light-blue",
    "blue",
    "indigo",
    "deep-purple",
    "purple",
    "pink",
    "red",
  ]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
};

ItSystemCard.displayName = "/src/widgets/layout/itsystem-card.jsx";

export default ItSystemCard;
