import logo from "../../../constant/logo";
import { shareUrl } from "../../../constant/url";
import ImageElement from "../../../CommonComponent/ImageElement/ImageElement";

const SharePost = ({ showLabel }) => {
    const { instaBlack, twitterBlack } = logo;
    return <div className="flex mt-4 sm:mt-0">
        <a href={shareUrl.insta} target="_blank" className="w-1/2 rounded-l-sm border border-[#EAEAEA] py-2 px-4 flex justify-center items-center shadow-sm">
            <ImageElement src={instaBlack} alt="Social Network" className="w-5 h-5 object-contain" />
            {showLabel ? <span className="ml-4 text-base font-medium block hidden sm:block">Share on Instagram</span> : null}
        </a>
        <a href={shareUrl.twitter} target="_blank" className="w-1/2 rounded-r-sm border border-[#EAEAEA] py-2 px-4 flex justify-center items-center shadow-sm">
            <ImageElement src={twitterBlack} alt="Social Network" className="w-5 h-5 object-contain" />
            {showLabel ? <span className="ml-4 text-base font-medium block hidden sm:block">Share on Twitter</span> : null}
        </a>
    </div>
}

export default SharePost;