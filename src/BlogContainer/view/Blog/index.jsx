import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';
import Footer from "../../CommonComponent/Footer/Footer";
import Header from "../../CommonComponent/Header/Header";
import ErrorPage from "../../CommonComponent/ErrorPage";
import LoadingScreen from "../../CommonComponent/LoadingScreen";
import ImageElement from "../../CommonComponent/ImageElement/ImageElement";
import logo from "../../constant/logo";
import BlogCard from "./components/BlogCard";
import { getBlogs } from "../../actions/blog";

const BlogHome = ({ blogData }) => {
    const { blogBnr } = logo;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBlogs());
    }, []);

    return (
        <>
            <Header isDarkLogo={true} />
            {blogData?.request ? <LoadingScreen /> : blogData?.blogs?.length > 0 ? <div className="flex justify-center md-p-0 pt-0 pb-30 bg-white">
                <div className="container flex flex-col items-center md:px-30">
                    <div className="w-full flex flex-col items-center overflow-hidden">
                        <ImageElement src={blogBnr} alt={"blog-image"} className={'w-full'} />
                        <div className="mt-4 px-4 text-center">
                            <h1 className="md:text-[4.2rem] text-[36px] leading-[1] font-bold my-10">Credit is broken. We're fixing it and sharing everything along the way.</h1>
                            {/* <p className="md:text-2xl text-[20px] mt-[40px]">Why Bon for credit cards now?</p> */}
                        </div>
                    </div>

                    {blogData?.blogs?.length ? <>
                        <div className="md:w-4/5 w-full h-[2px] md:my-20 my-10 bg-[#000]"></div>

                        <div className="max-w-3xl mx-auto px-4">
                            {/* Section Header */}
                            <h2 className="text-4xl font-bold text-center text-[#000] font-bold md:mb-8 mb-4"> All blogs </h2>

                            {/* Blog List - Two Columns */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {blogData?.blogs?.map((blog, index) => <BlogCard key={index} {...blog} />)}
                            </div>
                        </div>
                    </> : null}
                </div>
            </div> : <ErrorPage /> }
            <Footer />
        </>
    )
}

export default BlogHome;