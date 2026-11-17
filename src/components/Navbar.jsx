const Navbar = () => {
    const sections = ["Home", "About", "Skills", "Projects", "Contact"];

    return (
        <header className="w-full">
            <nav className="relative flex w-full items-center justify-center gap-8 px-6 py-5 font-[var(--font-sans)] text-[var(--color-text)] sm:gap-12 lg:gap-16">
                {sections.map((section) => (
                    <a
                        key={section}
                        href={`#${section.toLowerCase()}`}
                        className="text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)] sm:text-base"
                    >
                        {section}
                    </a>
                ))}
                <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-[linear-gradient(90deg,transparent_0%,var(--color-border)_20%,var(--color-border-strong)_50%,var(--color-border)_80%,transparent_100%)]"
                />
            </nav>
        </header>
    );
};

export default Navbar;
