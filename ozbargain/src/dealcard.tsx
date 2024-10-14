import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";

export function DealCard({ Title, Img, Time, comments }) {
  return (
    <Card
      shadow={false}
      className="relative grid h-[20rem] w-full max-w-[18rem] items-end justify-center overflow-hidden text-center"
      style={{cursor:"pointer"}}
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center"
        style={{ backgroundImage: `url('${Img}')` }}
      >
        <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
      </CardHeader>
      <CardBody className="relative py-2 px-2 md:px-2">
        <Typography
          variant="h5"
          color="white"
          className="mb-6 font-medium leading-[1.5]"
        >
          {Title}
        </Typography>
        <Typography variant="h5" className="mb-4 text-gray-400">
          {Time} Ago
        </Typography>
        <Typography variant="h5" className="mb-4 text-gray-400">
          {comments} comments
        </Typography>
        {/* <Avatar
          size="xl"
          variant="circular"
          alt="Profile picture"
          className="border-2 border-white"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
        /> */}
      </CardBody>
    </Card>
  );
}
