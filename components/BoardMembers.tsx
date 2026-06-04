const boardMembers = [
  {
    id: 1,
    name: " Kamsani Mahesh Kumar",
    designation: "Managing Director",
      image: "/switchhealthimages/Mahesh.png",
  },
  {
    id: 2,
    name: " Seesa Sai Kumar",
    designation: "Managing Director",
    image: "/switchhealthimages/Sai.jpeg",
  },
];

export default function BoardMembers() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0F4C81]">
            Board Of Directors
          </h2>
          <p className="mt-3 text-gray-600">
            Meet the leadership team guiding our vision and growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {boardMembers.map((member) => (
            <div
              key={member.id}
              className="bg-[#0F4C81] rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-[450px] object-cover hover:scale-105 transition duration-500  rounded-full "
                />
              </div>

              <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold text-white">
                  {member.name}
                </h3>
                <p className="text-white font-medium mt-2">
                  {member.designation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

