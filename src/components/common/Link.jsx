function Link({ href, children, className = '', target = '_self', rel = '' }) {
    const baseStyle = 'text-pink-500 hover:text-pink-400 font-semibold transition w-fit'

    return (
        <a
            href={href}
            target={target}
            rel={rel || (target === '_blank' ? 'noopener noreferrer' : '')}
            className={`${baseStyle} ${className}`}
        >
            {children}
        </a>
    )
}

export default Link