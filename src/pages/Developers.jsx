import Layout from "../components/Layout";

const Developers = () => {
  const developers = [
    {
      name: "Adrian Ortega",
      role: "Lead Developer / Project Manager",
    },
    {
      name: "Venn Angelo Rocafort",
      role: "Frontend Developer",
    },
    {
      name: "Jannrey Salioa",
      role: "UI/UX Designer",
    },
    {
      name: "Raphael Lan Gonzaga",
      role: "Backend Logic Developer",
    },
  ];

  return (
    <Layout>
      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">
            Developers Page
          </h1>
          <p className="text-gray-600 mb-6">
            Meet the team who developed this Todo List Website
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {developers.map((dev, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-6 bg-gray-50"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {dev.name}
                </h3>
                <p className="text-blue-600 font-medium">{dev.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Developers;
