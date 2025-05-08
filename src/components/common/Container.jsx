function Container({ children, className = '' }) {
    return <div className={`max-w-screen ${className}`}>
        {children}
    </div>
}

export default Container