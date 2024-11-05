import { Button } from "@/components/ui/button";
import { GraduationCap, BookOpen, Users } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-secondary">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Transform Your Learning Experience
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Create, collaborate, and learn together. Manage your courses and notes
                with powerful AI-powered features.
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild size="lg">
                <Link href="/courses">Get Started</Link>
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="bg-primary/5 p-4 rounded-full">
                <GraduationCap className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold">Smart Course Management</h3>
              <p className="text-muted-foreground">
                Create and organize courses with ease. Add notes, resources, and
                collaborate with others.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="bg-primary/5 p-4 rounded-full">
                <BookOpen className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold">AI-Powered Notes</h3>
              <p className="text-muted-foreground">
                Upload images of your notes and let our AI extract text and generate
                summaries automatically.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="bg-primary/5 p-4 rounded-full">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold">Collaborative Learning</h3>
              <p className="text-muted-foreground">
                Share your courses and notes with others. Learn together and grow
                your knowledge.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}