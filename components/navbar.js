import Link from "next/link"
import Image from "next/image";

const Navbar = () => {
    return (
        <div className={"row"}>
            <div className={"logo col-md-3"}>
                <Link href={"/"}>
                    <a href={"#"}>
                        <Image
                            priority
                            src="/images/logo.png"
                            height={40}
                            width={128}
                            alt={"logo"}
                        />
                    </a>
                </Link>
            </div>
        </div>
    );
}

export default Navbar;
