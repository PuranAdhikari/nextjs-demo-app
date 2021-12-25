import Product from "./product"

export default function ProductList({products}) {
    if (!products) return null

    return (
        <div className={"row"}>
            {products.map((product) => (
                <div key={product.id} className={"col-lg-3 col-md-4 col-sm-2 col-xs-1"}>
                    <p>
                        <Product {...product} />
                    </p>
                </div>
            ))}
        </div>
    )
}
