import React from 'react';

const team = [
  {
    name: "Jimmy Le",
    linkedin: "https://www.linkedin.com/in/le-jimmy",
    image: "/images/jimmy_pic.jpeg"
  },
 {
    name: "Brian Feldman",
    linkedin: "https://www.linkedin.com/in/brian-feldman-3/",
    image: "https://api.dicebear.com/7.x/fun-emoji/svg?seed=BrianFeldman"
  },
  {
    name: "Kandy Webber",
    linkedin: "https://www.linkedin.com/in/kandyweber/",
    image: "https://api.dicebear.com/7.x/fun-emoji/svg?seed=KandyWebber"
  },
  {
    name: "Bryce Loomis",
    linkedin: "https://www.linkedin.com/in/bryceloomis/",
    image: "https://api.dicebear.com/7.x/fun-emoji/svg?seed=BryceLoomis"
  }
];

function ContactSection() {
  return (
    <section id="contact">
      <div className="container">
        <h2 className="text-center mb-4">Our Team</h2>
        <div className="row">
          {team.map((member, idx) => (
            <div className="col-md-6 mb-4" key={idx}>
              <div className="card h-100 text-center">
                <div className="d-flex justify-content-center mt-4">
                  <img
                    src={member.image}
                    alt={`${member.name}'s profile`}
                    style={{
                      width: '100px',
                      height: '100px',
                      objectFit: 'cover',
                      borderRadius: '50%'
                    }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{member.name}</h5>
                  <a
                    href={member.linkedin}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
