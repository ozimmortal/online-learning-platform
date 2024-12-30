export function StatsSection() {
  return (
    <div className="bg-green-600 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-4xl font-bold text-white">100+</div>
            <div className="text-green-100">Courses</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-white">50k+</div>
            <div className="text-green-100">Students</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-white">95%</div>
            <div className="text-green-100">Success Rate</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-white">4.8</div>
            <div className="text-green-100">Average Rating</div>
          </div>
        </div>
      </div>
    </div>
  );
}