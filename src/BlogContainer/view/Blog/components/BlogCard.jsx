import { useNavigate } from "react-router-dom";
import ImageElement from "../../../CommonComponent/ImageElement/ImageElement"
import { navigateAction } from "../../../utils";

const BlogCard = ({ image, title, slug = "" }) => {
    const navigate = useNavigate();
    
    return <div className="bg-white text-center cursor-pointer" onClick={() => navigateAction(`/blog${slug ? `/${slug}` : ""}`, navigate)}>
    <ImageElement className="w-full h-48 object-cover" src={image} alt={title} />
    <h3 className="text-2xl font-medium py-3 px-4">{title}</h3>
</div>
}

export default BlogCard;