import Link from "next/link"
import BlogList from "./BlogList";

const Footer : React.FC = () => {
    return (
        <footer>
            <nav>
                <BlogList/>
            </nav>
        </footer>
    );
};

export default Footer;