const Footer = () => (
    <footer className="border-t border-(--color-border) px-6 py-6 sm:px-10">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 text-sm text-(--color-text-subtle) sm:flex-row">
            <p>© {new Date().getFullYear()} Nattachai Kaewchum</p>
            <div className="flex items-center gap-3">
                <a
                    href="https://github.com/Gooddez"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Visit Nattachai Kaewchum on GitHub"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-(--color-border) text-(--color-text-muted) transition-colors hover:border-(--color-border-strong) hover:text-(--color-text)"
                >
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                        <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.08c-3.1.67-3.76-1.32-3.76-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.7 2.62 1.21 3.26.93.1-.72.39-1.21.71-1.49-2.47-.28-5.07-1.24-5.07-5.5 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.06 1.15a10.65 10.65 0 0 1 5.57 0c2.12-1.44 3.06-1.15 3.06-1.15.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3.01 0 4.27-2.6 5.21-5.08 5.48.4.35.76 1.02.76 2.06v3.06c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
                    </svg>
                </a>
                <a
                    href="#home"
                    aria-label="Back to top"
                    className="group inline-flex items-center gap-2 rounded-full border border-(--color-border) px-4 py-2 text-(--color-text-muted) transition-colors hover:border-(--color-border-strong) hover:text-(--color-text)"
                >
                    Back to top
                    <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 transition-transform group-hover:-translate-y-0.5"
                    >
                        <path d="m6 14 6-6 6 6" />
                    </svg>
                </a>
            </div>
        </div>
    </footer>
);

export default Footer;
