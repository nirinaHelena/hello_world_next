import Link from "next/link"
import BlogList from "./BlogList";

const Header : React.FC = () => {
    return (
        <header>
            <h1>BLOG</h1>
            <nav>
                <BlogList/>
            </nav>
        </header>
    );
};

export default Header;