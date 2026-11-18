const Navbar = () => {
    const sections = ["Home", "About", "Skills", "Projects", "Contact"];

    return (
        <header className="w-full">
            <nav className="relative flex w-full items-center justify-center gap-5 px-6 py-5 font-(--font-sans) text-(--color-text) sm:gap-8">
                {sections.map((section) => (
                    <a
                        key={section}
                        href={`#${section.toLowerCase()}`}
                        className="text-sm text-(--color-text-muted) transition-colors hover:text-(--color-text) sm:text-base"
                    >
                        {section}
                    </a>
                ))}
                <span
                    aria-hidden="true"
                    className="navbar-bottom-line pointer-events-none absolute inset-x-0 bottom-0 h-px"
                />
            </nav>
        </header>
    );
};

export default Navbar;
