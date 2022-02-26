import cls from "./navigation.module.scss";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/Images/Logo.png";

export default function Navigation() {
  const navLinks = [
    { title: "Team", href: "/team" },
    { title: "Location", href: "/location" },
    { title: "Students", href: "/students" },
    { title: "Jobs", href: "/jobs" },
  ];
  return (
    <div className={cls.navbar}>
      <div className={cls.logo}>
        <Link href="/">
          <Image
            className={cls.logoImg}
            src={logo}
            alt={"logo nolbir"}
            width={80}
            height={80}
          />
        </Link>
        <h1 className={cls.careers}>Careers</h1>
      </div>
      <nav className={cls.navLinks}>
        {navLinks?.map((link, index) => (
          <Link key={index} href={link.href} passhref>
            <a className={cls.link}>{link.title}</a>
          </Link>
        ))}
      </nav>
    </div>
  );
}
