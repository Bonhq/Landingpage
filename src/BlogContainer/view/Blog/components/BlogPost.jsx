import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../../CommonComponent/Footer/Footer";
import Header from "../../../CommonComponent/Header/Header";
import ImageElement from "../../../CommonComponent/ImageElement/ImageElement";
import logo from "../../../constant/logo";
import BlogCard from "./BlogCard";
import { formattedDate, parseHTML } from "../../../utils";
import Author from "./Author";
import SharePost from "./SharePost";
import LoadingScreen from "../../../CommonComponent/LoadingScreen";
import ErrorPage from "../../../CommonComponent/ErrorPage";

const BlogPost = ({ blogData }) => {
    const [data, setData] = useState({
        blogs: [],
        selectedBlog: {}
    });
    const { postId } = useParams();
    const { eyeImg, authorImg } = logo;
    const { blogs, selectedBlog } = data;

    useEffect(() => {
        let selected = {};
        const otherblogs = [];
        blogData?.blogs?.forEach(item => {
            if (item.slug == postId) selected = item;
            else otherblogs.push(item);
        });
        setData(prev => ({ ...prev, blogs: otherblogs, selectedBlog: selected }));
    }, [blogData?.blogs, postId]);

    return <>
        <Header isDarkLogo={true} />
        {blogData?.request ? <LoadingScreen /> : selectedBlog?.title ? <div className="md-p-0 pt-4 pb-20 bg-white">
            <div className="flex items-center justify-center">
                <div className="container md:px-30 px-4">
                    <div className="text-center mb-20">
                        <h1 className="md:text-[4.2rem] text-[40px] leading-[1] font-bold">{selectedBlog?.title ?? ""}</h1>
                        {selectedBlog?.description ? <p className="md:text-2xl text-[20px] mt-10">{selectedBlog?.description ?? ""}</p> : null}
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center overflow-hidden w-full h-auto">
                <ImageElement src={selectedBlog?.image ?? ""} alt={"blog-image"} className={'w-full'} />
            </div>

            <div className="">
                <div className="lg:px-[120px] px-4">
                    <div className="w-full h-[2px] my-2 bg-[#000]"></div>
                    <div className="sm:flex justify-between items-center py-4 w-full">
                        <Author name={`${selectedBlog?.author?.first_name ?? ""} ${selectedBlog?.author?.last_name ?? ""}`} image={authorImg} date={formattedDate(selectedBlog?.published_at ?? "")} />
                        {/* <SharePost showLabel={false} /> */}
                    </div>

                    {selectedBlog?.content ? <div className="blog-article">
                        {parseHTML(selectedBlog?.content ?? "")}

                        <p>Thanks for reading, <br /> {selectedBlog?.author?.first_name ?? ""} {selectedBlog?.author?.last_name ?? ""}</p>
                    </div> : null}
                    {/* <div className="mt-6">
                        <SharePost showLabel={true} />
                    </div> */}

                    {/* <p className="py-6 text-xl/8 font-normal">Tags: <span className="underline"><a href="https://google.com">credit card</a></span>, <span className="underline"><a href="https://google.com">AI</a></span></p> */}

                    <div className="w-full border-t-2 border-dotted border-[#000] mt-10 mb-40"></div>
                </div>
            </div>

            {blogs.length ? <>
                <div className="relative w-full border-t-2 border-[#000] flex justify-center">
                    <ImageElement src={eyeImg} alt={"eye-image"} className={'h-18 w-auto absolute -top-9 px-2'} />
                </div>

                <div className="flex items-center justify-center mt-16 mb-6">
                    <div className="container md:px-30 px-4">
                        <h2 className="text-4xl font-bold text-center text-[#000] font-bold md:mb-8 mb-4"> What to read next </h2>

                        {/* Blog List - Three Columns */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {blogs.map((blog, index) => <BlogCard key={index} {...blog} />)}
                        </div>
                    </div>
                </div>
            </> : null}
        </div> : <ErrorPage />}
        <Footer />
    </>
}

export default BlogPost;