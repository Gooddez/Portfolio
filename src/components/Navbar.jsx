import { useEffect, useState } from "react";

const Navbar = () => {
    const sections = ["Home", "About", "Skills", "Projects", "Contact"];
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const updateActiveSection = () => {
            const marker = window.innerHeight * 0.4;
            let currentSection = sections[0].toLowerCase();

            sections.forEach((section) => {
                const element = document.getElementById(section.toLowerCase());
                if (element && element.getBoundingClientRect().top <= marker) {
                    currentSection = section.toLowerCase();
                }
            });

            setActiveSection(currentSection);
        };

        updateActiveSection();
        window.addEventListener("scroll", updateActiveSection, { passive: true });
        window.addEventListener("resize", updateActiveSection);

        return () => {
            window.removeEventListener("scroll", updateActiveSection);
            window.removeEventListener("resize", updateActiveSection);
        };
    });

    return (
        <header className="sticky top-0 z-50 h-16 w-full bg-(--color-background)/90 backdrop-blur-md">
            <nav className="relative flex h-full w-full items-center justify-center gap-5 px-6 font-(--font-sans) text-(--color-text) sm:gap-8">
                <span
                    aria-hidden="true"
                    className="navbar-bottom-line pointer-events-none absolute inset-x-0 top-0 h-px"
                />
                {sections.map((section) => (
                    <a
                        key={section}
                        href={`#${section.toLowerCase()}`}
                        aria-current={activeSection === section.toLowerCase() ? "location" : undefined}
                        className={`group relative inline-flex h-full items-center text-sm transition-colors sm:text-base ${
                            activeSection === section.toLowerCase()
                                ? "font-semibold text-(--color-text)"
                                : "text-(--color-text-muted) hover:text-(--color-text)"
                        }`}
                    >
                        {section}
                        {activeSection === section.toLowerCase() && (
                            <>
                                <span
                                    aria-hidden="true"
                                    className="pointer-events-none absolute inset-x-2 bottom-0 h-6 bg-linear-to-t from-(--color-accent)/30 to-transparent opacity-80 blur-md"
                                />
                                <span
                                    aria-hidden="true"
                                    className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 bg-(--color-accent) shadow-[0_0_10px_var(--color-accent)]"
                                />
                            </>
                        )}
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
