function Image({ src, alt, className = '' }) {
    const baseStyle = 'w-full h-56 object-cover rounded-lg'

    return <img src={src} alt={alt} className={`${baseStyle} ${className}`} />
}

export default Image