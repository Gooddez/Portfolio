const About = () => {
    return (
        <section
            id="about"
            aria-labelledby="about-heading"
            className="flex min-h-[calc(100svh-4rem)] w-full items-center px-6 py-12 sm:px-10 sm:py-16"
        >
            <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
                <div>
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-(--color-accent)">
                        A little about me
                    </p>
                    <h2
                        id="about-heading"
                        className="text-3xl font-bold leading-tight text-(--color-text) sm:text-4xl"
                    >
                        Curious by nature, <span className="text-(--color-primary)">builder by choice.</span>
                    </h2>
                </div>

                <div className="space-y-5 text-base leading-8 text-(--color-text-muted) sm:text-lg">
                    <p>
                        I’m Nattachai Kaewchum, a Data Science and Business Analytics student
                        with a strong interest in full-stack development. I enjoy taking an idea
                        from an early sketch to a working application people can use.
                    </p>
                    <p>
                        I like working across the whole process: shaping a clear interface,
                        building the logic behind it, and connecting the data that makes it
                        useful. Bringing software and data together lets me solve problems from
                        more than one angle.
                    </p>
                    <p>
                        I’m always learning, experimenting, and looking for thoughtful ways to
                        make digital products more practical and approachable.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
