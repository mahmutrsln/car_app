import Home from '../components/Home'
import MyProjects from '../components/MyProjects'
import About from '../components/About'
import Products from '../components/product/Products'
import NotFound from '../components/base/NotFound'
import ProductDetail from '../components/product/ProductDetail'
import Search from '../components/Search'

const links =[
    {link: "/", title: "Home", component: Home,isExact: true, isLink:true},
    {link: "/ara", title: "Arama", component: Search, isExact: false, isLink:false},
    {link: "/myprojects", title: "My Projects", component: MyProjects, isExact: true, isLink:true},
    {link: "/urunler/:productID", title: "Cars", component: ProductDetail, isExact: false, isLink:false},
    {link: "/about", title: "About", component: About, isExact: false, isLink:true},
    {link: "/products", title: "All Cars", component: Products, isExact: false, isLink:true},
    {link: "", title: "404", component: NotFound, isExact: false, isLink:false}
]



export default links