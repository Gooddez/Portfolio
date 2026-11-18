const Hero = () => {
    return (
        <section
            id="home"
            aria-label="Introduction"
            className="flex min-h-[calc(100vh-4rem)] w-full flex-col items-center justify-center gap-10 px-6 py-12 sm:px-10 lg:flex-row lg:gap-16"
        >
            <img
                src="/images/profile.webp"
                alt="Profile portrait"
                className="aspect-square w-3/5 rounded-full object-cover object-top sm:w-1/2 lg:w-[25%]"
            />
            <div className="max-w-xl text-center lg:text-left">
                <h1 className="text-4xl font-bold leading-tight text-(--color-text) sm:text-5xl lg:text-6xl">
                    Hello, I&apos;m <span className="text-(--color-primary)">Nattachai Kaewchum</span>
                </h1>
                <p className="mt-6 text-lg leading-relaxed text-(--color-text-subtle)">
                    Full-Stack Developer | Data Science and Business Analytics Student
                </p>
                <p className="mt-6 text-lg leading-relaxed text-(--color-text-muted)">
                    I build practical web applications, from user interfaces to backend APIs and databases. I’m interested in creating useful products that bring software development and data together.
                </p>
            </div>
        </section>
    );
};

export default Hero;
