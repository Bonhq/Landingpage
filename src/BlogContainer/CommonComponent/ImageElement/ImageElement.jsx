import React from "react";

function ImageElement({alt, className = "", src, ...rest}){
   return <img src={src} alt={alt} className={`max-w-full ${className}`} {...rest} />;
}

export default ImageElement;