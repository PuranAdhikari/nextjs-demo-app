import Image from "next/image";
import utilStyles from "../styles/utils.module.css";

export default function Product(product, index) {
    return (
        <div key={index}>
            <Image
                priority
                src={product.image}
                className={utilStyles.borderCircle}
                height={144}
                width={144}
                alt={product.title}
            />
            <p className={utilStyles.listItem} key={product.id}>
                {product.title}
                <br/>
                {product.price}
            </p>
        </div>
    );
}
