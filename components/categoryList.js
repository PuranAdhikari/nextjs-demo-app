import Link from "next/link"

import Category from "./category";
import utilStyles from "../styles/utils.module.css";

export default function CategoryList({categories}) {
    if (!categories) return null

    return (
        <ul className={`${utilStyles.catNav}`}>
            {categories.map((category) => (
                <li key={category}>
                    <Link href={`/category/${category}`}>
                        <a>
                            <Category category={category} />
                        </a>
                    </Link>
                </li>
            ))}
        </ul>
    )
}
