import ProductList from "../../components/productList";
import Layout from '../../components/layout'
import CategoryList from "../../components/categoryList";
import utilStyles from "../../styles/utils.module.css";

export async function getStaticProps({params}) {
    const {slug} = params

    const res1 = await fetch('https://fakestoreapi.com/products/category/' + slug)
    const res2 = await fetch('https://fakestoreapi.com/products/categories')
    const products = await res1.json()
    const categories = await res2.json()
    return {
        props: {
            products: products,
            category: slug,
            categories: categories
        }
    }
}

export async function getStaticPaths() {
    const res = await fetch('https://fakestoreapi.com/products/categories')
    const categories = await res.json()

    return {
        paths: categories.map((category) => ({
            params: {
                slug: category
            }
        })),
        fallback: false
    }
}

export default function CategoryPage({category, products, categories}) {
    return (
        <Layout>
            <CategoryList categories={categories}/>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <div className={"row"}>
                    <h3 className={"text-center text-decoration-underline mb-5"}>{category}</h3>
                    <ProductList products={products}/>
                </div>
            </section>
        </Layout>

    )
}
