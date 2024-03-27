import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import { useRouter } from "next/router"

const BlogImagePage : React.FC = () =>{
    const router = useRouter();
    const {id} = router.query as {id : string};
    const imageUrl = `https://picsum.photos/seed/${id}/1024/768`;

    return(
        <>
            <Header/>
            <div style={{ textAlign: 'center' }}>
                <h1>BLog Image - {id}</h1>
                <img src={imageUrl} alt={`Blog ${id}` } style = {{maxWidth: '100%'}} />
            </div>
            <Footer/>
        </>
    )
}

export default BlogImagePage;