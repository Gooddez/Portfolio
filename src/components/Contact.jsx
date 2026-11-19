const contactMethods = [
    {
        label: "Email",
        value: "nattachaikaewchum.work@gmail.com",
        href: "mailto:nattachaikaewchum.work@gmail.com",
        detail: "For opportunities and inquiries",
        icon: "email",
    },
    {
        label: "Phone",
        value: "065 027 4061",
        href: "tel:+66650274061",
        detail: "Available by phone",
        icon: "phone",
    },
    {
        label: "LinkedIn",
        value: "Connect with me",
        href: "https://www.linkedin.com/in/nattachai-kaewchum-5b753444b",
        detail: "View my experience and connect",
        icon: "linkedin",
    }
];

const icons = {
    email: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
    phone: <path d="M7 3h3l2 5-2.5 1.5a14 14 0 0 0 5 5L16 12l5 2v3c0 1.1-.9 2-2 2C10.6 19 5 13.4 5 5c0-1.1.9-2 2-2Z" />,
    linkedin: <><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M8 10v7M8 7v.01M12 17v-4a3 3 0 0 1 6 0v4M12 10v7" /></>,
};

const Contact = () => (
    <section
        id="contact"
        aria-labelledby="contact-heading"
        className="w-full px-6 py-16 sm:px-10 sm:py-20"
    >
        <div className="mx-auto w-full max-w-6xl">
            <div className="mb-10 max-w-2xl">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-(--color-accent)">
                    Get in touch
                </p>
                <h2 id="contact-heading" className="text-3xl font-bold leading-tight text-(--color-text) sm:text-4xl">
                    Let’s connect
                </h2>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {contactMethods.map((method) => (
                    <a
                        key={method.label}
                        href={method.href}
                        target={method.href.startsWith("https:") ? "_blank" : undefined}
                        rel={method.href.startsWith("https:") ? "noreferrer" : undefined}
                        className="group flex min-h-56 flex-col rounded-xl border border-(--color-border) bg-(--color-surface)/70 p-6 transition duration-200 hover:-translate-y-1 hover:border-(--color-border-strong) hover:bg-(--color-surface)"
                    >
                        <div className="mb-6 flex items-center justify-between">
                            <span className="grid h-11 w-11 place-items-center rounded-lg border border-(--color-border) bg-(--color-accent-soft) text-(--color-accent)">
                                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                                    {icons[method.icon]}
                                </svg>
                            </span>
                            <span aria-hidden="true" className="text-lg text-(--color-text-subtle) transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
                        </div>
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-(--color-text-subtle)">
                            {method.label}
                        </p>
                        <p className="mt-2 warp-break-words text-base font-semibold text-(--color-text) transition-colors group-hover:text-(--color-accent)">
                            {method.value}
                        </p>
                        <p className="mt-auto pt-4 text-sm text-(--color-text-muted)">{method.detail}</p>
                    </a>
                ))}
            </div>
        </div>
    </section>
);

export default Contact;
