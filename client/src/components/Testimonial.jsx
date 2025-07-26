import React from 'react';

const Testimonial = () => {
  return (
    <div className="flex flex-col items-center text-slate-800 py-10 px-4 text-center">
      <h2 className="text-3xl font-bold mb-2">
        Our Happy Customers
      </h2>
      <p className="text-base text-slate-500 max-w-md mb-10">
        "We make sure our customers are happy and ensure their ride is smooth".
      </p>

      <div className="flex flex-wrap justify-center items-center gap-6">
        {[
          {
            name: 'Ronak',
            img: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200',
          },
          {
            name: 'Subhranshu',
            img: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200',
          },
          {
            name: 'Ommkar',
            img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop',
          },
          {
            name: 'Pritam',
            img: 'https://randomuser.me/api/portraits/men/75.jpg',
          },
        ].map((client, index) => (
          <div key={index} className="relative group flex flex-col items-center">
            <p className="opacity-0 scale-90 group-hover:scale-100 group-hover:opacity-100 transition duration-300 mb-3 px-2 py-1 text-sm font-medium">
              {client.name}
            </p>
            <img
              src={client.img}
              alt={client.name}
              className="w-20 h-20 rounded-full border-4 border-white hover:-translate-y-1 transition hover:scale-110 shadow-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
