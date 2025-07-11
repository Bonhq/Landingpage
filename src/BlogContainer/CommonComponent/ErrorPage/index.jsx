import { useNavigate } from "react-router-dom";
import ImageElement from "../ImageElement/ImageElement";
import logo from "../../constant/logo";

const ErrorPage = () => {
    const { errorImg } = logo;
    const navigate =  useNavigate();

    return (
        <section className="flex items-center justify-center min-h-screen bg-gray-100 px-6">
            <div className="container mx-auto pt-35 pb-30 md:flex items-center justify-center text-center lg:text-left">
                
                {/* Image Section */}
                <div className="md:w-1/2 flex justify-center">
                    <ImageElement src={errorImg} className="w-[450px] md:h-[440px] max-w-full"
                    alt="Error Image" />
                </div>

                {/* Text Section */}
                <div className="md:w-1/2 flex flex-col items-center md:items-start mt-8 md:mt-4 md:ml-8">
                    <h1 className="text-3xl md:text-4xl md:text-start font-semibold text-gray-800">
                        Sorry, this page isn't available!
                    </h1>
                    <p className="mt-4 md:pr-10 md:text-start text-gray-600">
                        The page you were looking for could not be found. It might have been removed, renamed, or never existed.
                    </p>
                    <span onClick={() => navigate("/", { replace: true })} className="mt-6 px-6 py-3 cursor-pointer bg-black text-white rounded-lg shadow-md hover:bg-gray-800 transition">
                        Back to Home
                    </span>
                </div>
            </div>
        </section>
    );
};

export default ErrorPage;