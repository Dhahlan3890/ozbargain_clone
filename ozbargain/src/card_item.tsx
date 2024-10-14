
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import PropTypes from 'prop-types';

interface BackgroundBlogCardProps {
  Heading: string;
  Name: string;
  Url: string;
}

function BackgroundBlogCard({ Heading, Name, Url }: BackgroundBlogCardProps) {
  return (
    <Card
      shadow={true}
      className="relative grid h-[14rem] w-full max-w-[20rem] items-end justify-center overflow-hidden text-center"
      style={{cursor:"pointer"}}
      placeholder={null}
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="absolute inset-0 m-0 h-full w-full rounded-none"
        placeholder={null}
        style={{ backgroundImage: `url(${Url})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
      </CardHeader>
      <CardBody className="relative py-14 px-6 md:px-12" placeholder={null}>
        <Typography
          variant="h5"
          color="white"
          className="mb-24 font-medium leading-[1.5]"
          placeholder={null}
        >
          {Heading}
        </Typography>
        <Typography variant="h5" className="mb-4 text-gray-400" placeholder={null}>
          {Name}
        </Typography>
      </CardBody>
    </Card>
  );
}

BackgroundBlogCard.propTypes = {
  Heading: PropTypes.string.isRequired,
  Name: PropTypes.string.isRequired,
  Url: PropTypes.string.isRequired,
};

BackgroundBlogCard.defaultProps = {
  Heading: 'Default Heading',
  Name: 'Default Name',
  Url: 'https://via.placeholder.com/150',
};

export default BackgroundBlogCard;