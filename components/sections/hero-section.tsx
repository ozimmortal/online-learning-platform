import { Button } from "@/components/ui/button";
import { HeroIllustration } from "@/components/illustrations/hero-illustration";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-green-50 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-8">
            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
              Learn and Grow with <span className="text-green-600">EduPro</span>
            </h1>
            <p className="text-xl text-gray-600">
              Unlock your potential with our expert-led courses. Learn at your own pace and achieve your goals.
            </p>
            <div className="flex gap-4">
              <Link href={"/auth/login"} className="bg-green-600 hover:bg-green-700">
                Get Started
              </Link>
              <Link href={"/courses"}>
                Browse Courses
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 h-[400px]">
            <HeroIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}