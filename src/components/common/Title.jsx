function Title({ level = 1, children, className = '' }) {
    const Tag = `h${level}`
    const baseStyles = {
        1: 'text-5xl font-extrabold',
        2: 'text-4xl font-bold',
        3: 'text-3xl font-semibold',
        4: 'text-2xl font-medium',
        5: 'text-xl font-medium',
        6: 'text-lg font-normal',
    }

    return <Tag className={`${baseStyles[level]} ${className}`}>{children}</Tag>
}

export default Title