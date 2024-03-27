import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Link from "next/link";
import { useRouter } from "next/router"
import BlogList from "../components/BlogList";

const BlogPage : React.FC = () =>{
    const router = useRouter();
    const {id} = router.query as {id : string};
    const imageUrl = `https://picsum.photos/seed/${id}/1024/768`;

    return(
        <>
            <Header/>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ marginRight: '20px' }}>
                    <h3>Blogs</h3>
                    <BlogList/>
                </div>
                <div>
                    <h1> Blog Post - {id}</h1>
                    <img src={imageUrl} alt={`Blog ${id}`} />
                    <p>Ceci est le contenu du blog numéro {id}</p>
                    <button>
                        <Link href={`/blog/${id}/image`}>Details</Link>
                    </button>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default BlogPage;