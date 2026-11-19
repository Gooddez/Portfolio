const projects = [
    {
        number: "01",
        name: "Cafe Kiosk Ordering System",
        category: "University project · Year 2",
        description:
            "A self-service cafe ordering system with separate customer, cashier, and barista interfaces. Built the Express backend and REST APIs, connected the EJS frontend to SQLite, and designed the database for menus, orders, and customizable options.",
        technologies: ["Node.js", "Express", "EJS", "SQLite", "REST APIs"],
        link: "https://github.com/Gooddez/Web-Programming-Project",
    },
    {
        number: "02",
        name: "BI Agent",
        category: "University project · Year 2",
        description:
            "An AI-powered business intelligence assistant that turns text or voice questions into SQL queries, interactive charts, data insights, and plain-language explanations. Built with a multi-step agent pipeline connected to SQL Server.",
        technologies: ["Python", "FastAPI", "Google ADK", "Gemini", "SQL Server"],
        link: "https://github.com/Gooddez/bi-project",
    },
    {
        number: "03",
        name: "CUCUMBER · Curriculum Assistant",
        category: "University project · Year 3",
        description:
            "A Thai-language assistant for asking questions about university curricula and browsing course information. Built a React and FastAPI app with Gemini and retrieval-augmented generation, plus an OCR pipeline that extracts curriculum data into a SQLite vector database. Answers rely on verified course evidence and ask for clarification when details are unclear.",
        technologies: ["React", "FastAPI", "Gemini", "RAG", "EasyOCR", "SQLite"],
        link: "https://github.com/SalapaoXN/isd-2026-curriculum_2_cucumber",
    },
];

const Projects = () => (
    <section
        id="projects"
        aria-labelledby="projects-heading"
        className="w-full px-6 py-16 sm:px-10 sm:py-20"
    >
        <div className="mx-auto w-full max-w-6xl">
            <div className="mb-10 max-w-2xl">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-(--color-accent)">
                    Selected work
                </p>
                <h2 id="projects-heading" className="text-3xl font-bold leading-tight text-(--color-text) sm:text-4xl">
                    Projects
                </h2>
                <p className="mt-4 text-base leading-7 text-(--color-text-muted)">
                    A few things I’ve been building and learning along the way.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <article
                        key={project.number}
                        className="group flex min-h-72 flex-col rounded-2xl border border-(--color-border) bg-(--color-surface) p-6 transition-colors hover:border-(--color-border-strong)"
                    >
                        <div className="mb-8 flex items-center justify-between">
                            <span className="text-sm font-semibold tracking-[0.15em] text-(--color-accent)">
                                {project.number}
                            </span>
                            <span className="rounded-full border border-(--color-border) px-3 py-1 text-xs text-(--color-text-subtle)">
                                {project.category}
                            </span>
                        </div>

                        <h3 className="text-xl font-semibold text-(--color-text)">{project.name}</h3>
                        <p className="mt-3 flex-1 text-sm leading-6 text-(--color-text-muted)">
                            {project.description}
                        </p>

                        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
                            {project.technologies.map((technology) => (
                                <li
                                    key={technology}
                                    className="rounded-md bg-(--color-accent-soft) px-2.5 py-1 text-xs text-(--color-text-muted)"
                                >
                                    {technology}
                                </li>
                            ))}
                        </ul>

                        <a
                            href={project.link}
                            aria-label={`View ${project.name} on GitHub`}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-(--color-accent) transition-colors hover:text-(--color-text)"
                        >
                            View project <span aria-hidden="true">↗</span>
                        </a>
                    </article>
                ))}
            </div>
        </div>
    </section>
);

export default Projects;
