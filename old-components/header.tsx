import Link from "next/link";

const Header = () => (
  <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
    <Link href="/" passHref>
      <a href="dummy" className="hover:underline">
        Blog
      </a>
    </Link>
    .
  </h2>
);

export default Header;
