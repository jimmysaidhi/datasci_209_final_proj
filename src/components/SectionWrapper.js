function SectionWrapper({ id, title, children }) {
  return (
    <section
      id={id}
      style={{
        padding: '4rem 1.5rem',
        borderBottom: '5px solid #334155',
        overflowX: 'auto' // allow horizontal scrolling if needed
      }}
    >
      <div
        style={{
          maxWidth: '100%',
          margin: '1 auto',
          overflowX: 'auto'
        }}
      >
        {title && <h2 className="mb-4 text-left">{title}</h2>}
        {children}
      </div>
    </section>
  );
}


export default SectionWrapper;

