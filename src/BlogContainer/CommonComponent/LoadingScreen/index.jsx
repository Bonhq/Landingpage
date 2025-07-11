const LoadingScreen = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white transition-colors duration-500">
            <div className={`animate-spin rounded-full h-10 w-10 border-t-4 border-black`}></div>
        </div>
    );
};

export default LoadingScreen;