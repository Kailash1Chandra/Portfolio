const certificates = [
  {
    namee: "Introduction to Generative AI",
    imgPath: "/aii.png",
    link: "https://coursera.org/verify/DM9VWL8A4FBX",
  },
  {
    namee: "Introduction to Large Language Models",
    imgPath: "/new.png",
    link: "https://coursera.org/verify/659WYXNNTGKY",
  },
  {
    namee: "The Bits and Bytes of Computer Networking",
    imgPath: "/bit.png",
    link: "https://coursera.org/verify/BNGNYR74363Y",
  },
  {
    namee: " Data Structures and Algorithms - Self Paced",
    imgPath: "/gfg.png",
    link: "https://media.geeksforgeeks.org/courses/certificates/f54a1d4787c2d68a31591ec80ac47631.pdf",
  },
];

const Certificates = () => {
  return (
    <div
      id="certificate"
      className="flex-center section-padding bg-black text-center"
    >
      <h1 style={{ color: "white", fontSize: "35px" }}>
        <b>My Certifications</b>
      </h1>
      <div className="w-full h-full md:px-10 px-5">
        <br />
        <br />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {certificates.map((cert) => (
            <div
              key={cert.namee}
              className="card-border bg-brown p-4 rounded-xl shadow-md hover:shadow-lg transition duration-300"
            >
              <a href={cert.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={cert.imgPath}
                  alt={cert.namee}
                  className="w-full h-48 object-contain mb-3 hover:scale-105 transition-transform duration-300"
                />
              </a>
              <p className="font-medium text-gray-700">{cert.namee}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;
