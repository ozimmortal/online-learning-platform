export function StatsSection() {
  const stats = [
    { value: "100+", label: "Courses" },
    { value: "50k+", label: "Students" },
    { value: "95%", label: "Success Rate" },
    { value: "4.8", label: "Average Rating" },
  ];

  return (
    <section className="bg-green-600 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className="text-4xl font-bold text-white">{stat.value}</div>
              <div className="text-green-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}