import { BookOpen, Users, Award, Clock } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Expert-Led Courses",
    description: "Learn from industry professionals with years of experience"
  },
  {
    icon: Users,
    title: "Community Learning",
    description: "Join a community of learners and share knowledge"
  },
  {
    icon: Award,
    title: "Certified Programs",
    description: "Earn recognized certificates upon course completion"
  },
  {
    icon: Clock,
    title: "Flexible Learning",
    description: "Study at your own pace, anywhere, anytime"
  }
];

export function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Why Choose <span className="text-green-600">EduPro</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 border-2 border-green-100 rounded-lg hover:border-green-200 transition-colors">
              <feature.icon className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}