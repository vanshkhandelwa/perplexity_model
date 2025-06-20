const Header = () => {
    return (
        <header className="glass relative flex items-center justify-between px-10 py-6 shadow-lg z-20 mb-4" style={{background: 'linear-gradient(90deg, #5E50FA 0%, #14B8A6 100%)', borderBottom: '1.5px solid #e0e7ff'}}>
            <div className="flex items-center gap-3 relative">
                {/* Logo/Icon */}
                <div className="w-10 h-10 bg-white/80 rounded-full flex items-center justify-center shadow-md">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="14" cy="14" r="13" stroke="#5E50FA" strokeWidth="2" fill="#14B8A6"/>
                        <text x="50%" y="55%" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold" dy=".3em">P</text>
                    </svg>
                </div>
                <span className="font-extrabold text-white text-2xl tracking-tight drop-shadow-lg">Perplexity 2.0</span>
            </div>
            <nav className="flex items-center space-x-2">
                <a className="text-white/90 text-sm px-5 py-2 font-semibold hover:bg-white/20 rounded-xl transition-all duration-200 cursor-pointer">HOME</a>
                <a className="text-white bg-white/20 text-sm px-5 py-2 font-semibold rounded-xl shadow-md transition-all duration-200 cursor-pointer">CHAT</a>
                <a className="text-white/90 text-sm px-5 py-2 font-semibold hover:bg-white/20 rounded-xl transition-all duration-200 cursor-pointer">CONTACTS</a>
                <a className="text-white/90 text-sm px-5 py-2 font-semibold hover:bg-white/20 rounded-xl transition-all duration-200 cursor-pointer">SETTINGS</a>
            </nav>
        </header>
    )
}

export default Header