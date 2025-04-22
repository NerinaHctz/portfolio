function List({ items, className = '', itemClassName = '' }) {
    return <ul className={`list-disc pl-5 ${className}`}>
        {items.map((item, index) => (
            <li key={index} className={`mt-2 text-lg text-gray-400 ${itemClassName}`}>
                {item}
            </li>
        ))}
    </ul>
}

export default List