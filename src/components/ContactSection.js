
const team = [
  {
    name: "Jimmy Le",
    role: "Frontend Developer",
    linkedin: "https://www.linkedin.com/in/le-jimmy",
    image: "https://via.placeholder.com/150"
  },
  {
    name: "Brian Feldman",
    role: "Frontend Developer",
    linkedin: "https://www.linkedin.com/in/brian-feldman-3/",
    image: "https://via.placeholder.com/150"
  },
  {
    name: "Kandy Weber",
    role: "Backend Engineer",
    linkedin: "https://www.linkedin.com/in/kandyweber/",
    image: "https://via.placeholder.com/150"
  },
  {
    name: "Bryce Loomis",
    role: "Backend Engineer",
    linkedin: "https://www.linkedin.com/in/bryceloomis/",
    image: "https://via.placeholder.com/150"
  }
];

function ContactSection() {
  return (
    <section className="bg-light py-5">
      <div className="container">
        <h2 className="text-center mb-4">Our Team</h2>
        <div className="row">
          {team.map((member, idx) => (
            <div className="col-md-6 mb-4" key={idx}>
              <div className="card h-100 text-center">
                <img
                  src={member.image}
                  className="card-img-top"
                  alt={`${member.name}'s profile`}
                />
                <div className="card-body">
                  <h5 className="card-title">{member.name}</h5>
                  <p className="card-text">{member.role}</p>
                  <a 
                    href={member.linkedin} 
                    className="btn btn-primary" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    {/* Simple LinkedIn text button */}
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
