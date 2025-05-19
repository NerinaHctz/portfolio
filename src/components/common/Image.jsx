function Image({ src, alt, className = '' }) {
    const baseStyle = 'object-cover rounded-lg'

    return <img src={src} alt={alt} className={`${baseStyle} ${className}`} />
}

export default Image