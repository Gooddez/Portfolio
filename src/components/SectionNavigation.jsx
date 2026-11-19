import { useEffect, useState } from "react";

const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
];

const SectionNavigation = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const updateActiveSection = () => {
            const referencePosition = window.scrollY + window.innerHeight * 0.4;
            const positions = sections.map((section) => {
                const element = document.getElementById(section.id);
                return element ? element.getBoundingClientRect().top + window.scrollY : 0;
            });

            let progress = 0;
            for (let index = 0; index < positions.length - 1; index += 1) {
                if (referencePosition >= positions[index + 1]) {
                    progress = index + 1;
                    continue;
                }

                const sectionDistance = positions[index + 1] - positions[index];
                const sectionProgress = sectionDistance > 0
                    ? (referencePosition - positions[index]) / sectionDistance
                    : 0;
                progress = index + Math.max(0, Math.min(1, sectionProgress));
                break;
            }

            if (referencePosition >= positions[positions.length - 1]) {
                progress = positions.length - 1;
            }

            setScrollProgress(progress);
        };

        updateActiveSection();
        window.addEventListener("scroll", updateActiveSection, { passive: true });
        window.addEventListener("resize", updateActiveSection);

        return () => {
            window.removeEventListener("scroll", updateActiveSection);
            window.removeEventListener("resize", updateActiveSection);
        };
    }, []);

    return (
        <nav aria-label="Section navigation" className="fixed right-3 top-1/2 z-40 -translate-y-1/2 sm:right-6">
            <div className="flex flex-col items-center gap-1">
                {sections.map((section, index) => (
                    <a
                        key={section.id}
                        href={`#${section.id}`}
                        aria-label={`Go to ${section.label} section`}
                        aria-current={Math.round(scrollProgress) === index ? "location" : undefined}
                        className="group grid h-5 w-5 place-items-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-(--color-accent)"
                    >
                        <span
                            aria-hidden="true"
                            className="rounded-full transition-[width,height,background-color,opacity] duration-100 ease-out group-hover:bg-(--color-accent)"
                            style={{
                                width: `${5 + 8 * Math.max(0, 1 - Math.abs(scrollProgress - index))}px`,
                                height: `${5 + 8 * Math.max(0, 1 - Math.abs(scrollProgress - index))}px`,
                                backgroundColor: Math.abs(scrollProgress - index) < 0.85
                                    ? "var(--color-accent)"
                                    : "var(--color-text-subtle)",
                                opacity: 0.55 + 0.45 * Math.max(0, 1 - Math.abs(scrollProgress - index)),
                            }}
                        />
                    </a>
                ))}
            </div>
        </nav>
    );
};

export default SectionNavigation;
