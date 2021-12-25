import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import ProductList from '../components/productList'
import CategoryList from "../components/categoryList";

export async function getStaticProps() {
    const res1 = await fetch('https://fakestoreapi.com/products')
    const res2 = await fetch('https://fakestoreapi.com/products/categories')
    const products = await res1.json()
    const categories = await res2.json()
    return {
        props: {
            products: products,
            categories: categories
        }
    }
}

export default function Home({products, categories}) {
    return (
        <Layout home>
            <CategoryList categories={categories}/>

            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <div className={"row"}>
                    <h3 className={"text-center text-decoration-underline mb-5"}>All Products</h3>
                    <ProductList products={products}/>
                </div>
            </section>
        </Layout>
    )
}
