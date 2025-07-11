import ImageElement from "../../../CommonComponent/ImageElement/ImageElement"

const Author = ({ name, image, date, readTime}) => {
    return <div className="flex items-center space-x-4">
    {/* <ImageElement src={image} alt="Author Image" className="w-12 h-12 rounded-full object-cover" /> */}
    <div>
        <p className="text-base font-semibold">{name}</p>
        <p className="text-sm font-normal">{date}&nbsp; {readTime ? <span>· {readTime}</span> : null}</p>
    </div>
</div>
}

export default Author;