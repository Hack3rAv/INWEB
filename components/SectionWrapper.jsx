export default function SectionWrapper({ children, className = "" }) {
    return (
        <section className={`section-wrapper ${className}`}>
            {children}
        </section>
    );
}
