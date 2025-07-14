function SectionWrapper({ id, title, children }) {
  return (
    <section
      id={id}
      style={{ padding: '4rem 1.5rem', borderBottom: '1px solid #334155' }}
    >
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>
        {title && <h2 className="mb-4 text-center">{title}</h2>}
        {children}
      </div>
    </section>
  );
}

export default SectionWrapper;
