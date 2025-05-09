import React from "react";

const services = [
  {
    id: 1,
    title: "Web Design",
    description:
      "Creating intuitive and visually stunning digital experiences that captivate users. I focus on creating accessible and engaging interfaces that align with your brand identity.",
  },
  {
    id: 2,
    title: "Frontend Development",
    description:
      "Bringing designs to life with clean, efficient code to build interactive and responsive user interfaces. I specialize in creating seamless and engaging experiences across all devices.",
  },
  {
    id: 3,
    title: "Backend Development",
    description:
      "Architecting and implementing robust server-side logic and efficient database systems to power your applications. I ensure scalability, security, and seamless data management for optimal performance.",
  },
];
const Service = () => {
  return (
    <div className="bg-black text-white py-20" id="service">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">
          My Area of Interest
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform 
              transition-transform duration-300 hover:scale-105"
            >
              <div
                className="text-right text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-600 to-blue-400"
              >
                {service.id}
              </div>
              <h3
                className="mt-2 text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-400 to-blue-500"
              >
                {service.title}
              </h3>
              <p className="mt-2 text-gray-300">{service.description}</p>
              <a
                href="#"
                className="mt-4 inline-block text-green-400 hover:text-blue-500"
              ></a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
