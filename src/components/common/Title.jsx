function Title({ level = 1, children, className = '' }) {
    const Tag = `h${level}`
    const baseStyles = {
        1: 'text-5xl font-extrabold text-pink-500 tracking-wide font-molle',
        2: 'text-4xl font-bold text-pink-400 tracking-wide',
        3: 'text-3xl font-semibold text-pink-300',
        4: 'text-2xl font-medium text-pink-200',
        5: 'text-xl font-medium text-pink-100',
        6: 'text-lg font-normal text-pink-100',
    }

    return <Tag className={`${baseStyles[level]} ${className}`}>{children}</Tag>
}

export default Title