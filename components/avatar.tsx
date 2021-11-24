import Image from "next/image";

type Props = {
  name: string;
  picture: string;
};

const Avatar = ({ name, picture }: Props) => (
  <div className="flex items-center">
    <div className="mr-4">
      <Image
        className="rounded-full mr-4"
        src={picture}
        alt={name}
        width="48"
        height="48"
      />
    </div>
    <div className="text-xl font-bold">{name}</div>
  </div>
);

export default Avatar;
