function Paragraph({ children, className = '' }) {
    const baseStyle = 'text-lg text-gray-400 leading-relaxed'

    return <p className={`${baseStyle} ${className}`}>{children}</p>
}

export default Paragraph