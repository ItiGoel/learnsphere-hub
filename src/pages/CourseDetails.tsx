import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Star, Clock, Users, Award, BookOpen, CheckCircle2, PlayCircle } from "lucide-react";

const CourseDetails = () => {
  const { id } = useParams();

  // Mock data - in real app, fetch based on ID
  const course = {
    id: 1,
    title: "Web Development Masterclass",
    description:
      "Dive deep into modern web development with this comprehensive masterclass. Learn React, Node.js, Express, MongoDB, and more. Build real-world projects and launch your career as a full-stack developer.",
    fullDescription:
      "This course takes you from a complete beginner to an advanced full-stack developer. You'll learn the latest web technologies including React for building interactive user interfaces, Node.js and Express for server-side development, and MongoDB for database management. Throughout the course, you'll build 10+ real-world projects including e-commerce sites, social media platforms, and SaaS applications.",
    instructor: {
      name: "John Doe",
      title: "Senior Full-Stack Developer",
      bio: "10+ years of experience in web development. Worked at top tech companies including Google and Microsoft.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    },
    rating: 4.8,
    students: 12450,
    duration: "40 hours",
    price: 99,
    category: "Web Development",
    difficulty: "Intermediate",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=600&fit=crop",
    features: [
      "40 hours of on-demand video",
      "50+ downloadable resources",
      "Lifetime access",
      "Access on mobile and TV",
      "Certificate of completion",
      "Direct support from instructor",
    ],
    whatYouWillLearn: [
      "Build full-stack web applications from scratch",
      "Master React for frontend development",
      "Learn Node.js and Express for backend",
      "Work with MongoDB database",
      "Implement user authentication and authorization",
      "Deploy applications to cloud platforms",
      "Write clean, maintainable code",
      "Build responsive, mobile-first designs",
    ],
    whyTakeCourse: [
      "Learn from an industry expert with 10+ years experience",
      "Build a portfolio of 10+ real-world projects",
      "Get job-ready skills for full-stack developer roles",
      "Join a community of 12,000+ active learners",
      "Receive personalized feedback on your code",
      "Access to exclusive job placement resources",
    ],
    certificates: true,
    goodies: [
      "Project source code",
      "Design templates",
      "Cheat sheets and quick references",
      "Interview preparation guide",
    ],
    relatedQuizzes: [
      { id: 1, title: "JavaScript Fundamentals Quiz", difficulty: "Beginner" },
      { id: 2, title: "React Advanced Concepts", difficulty: "Intermediate" },
      { id: 3, title: "Node.js & Express Test", difficulty: "Intermediate" },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <div className="relative pt-24 pb-12 px-4 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-6">
              <div className="space-y-2">
                <Badge variant="secondary">{course.category}</Badge>
                <h1 className="text-4xl font-bold">{course.title}</h1>
                <p className="text-xl text-muted-foreground">{course.description}</p>
              </div>

              <div className="flex flex-wrap items-center gap-6 text-sm">
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">{course.rating}</span>
                  <span className="text-muted-foreground">({course.students.toLocaleString()} students)</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <span>{course.duration}</span>
                </div>
                <Badge
                  variant={
                    course.difficulty === "Beginner" ? "secondary" : course.difficulty === "Intermediate" ? "default" : "destructive"
                  }
                >
                  {course.difficulty}
                </Badge>
              </div>

              <div className="flex items-center gap-4">
                <img src={course.instructor.image} alt={course.instructor.name} className="w-12 h-12 rounded-full" />
                <div>
                  <p className="font-semibold">{course.instructor.name}</p>
                  <p className="text-sm text-muted-foreground">{course.instructor.title}</p>
                </div>
              </div>
            </div>

            {/* Right - Course Card */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <PlayCircle className="h-16 w-16 text-white" />
                  </div>
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="text-center">
                    <span className="text-4xl font-bold text-primary">${course.price}</span>
                  </div>
                  <Button className="w-full" size="lg">
                    Enroll Now
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">30-day money-back guarantee</p>
                  <Separator />
                  <div className="space-y-2">
                    <h4 className="font-semibold">This course includes:</h4>
                    <ul className="space-y-2 text-sm">
                      {course.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-12 px-4">
        <div className="container mx-auto max-w-5xl space-y-12">
          {/* What You'll Learn */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                What You'll Learn
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.whatYouWillLearn.map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Course Description */}
          <Card>
            <CardHeader>
              <CardTitle>Course Description</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p className="text-foreground">{course.fullDescription}</p>
            </CardContent>
          </Card>

          {/* Why Take This Course */}
          <Card>
            <CardHeader>
              <CardTitle>Why Take This Course?</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {course.whyTakeCourse.map((reason, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Instructor */}
          <Card>
            <CardHeader>
              <CardTitle>About the Instructor</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-start gap-4">
                <img src={course.instructor.image} alt={course.instructor.name} className="w-24 h-24 rounded-full" />
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{course.instructor.name}</h3>
                  <p className="text-muted-foreground">{course.instructor.title}</p>
                  <p>{course.instructor.bio}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{course.students.toLocaleString()} students</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Certificates & Goodies */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Certificate
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  {course.certificates
                    ? "Earn a certificate of completion that you can share on LinkedIn and your resume."
                    : "No certificate offered for this course."}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Bonus Materials</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {course.goodies.map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-success" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Related Quizzes */}
          <Card>
            <CardHeader>
              <CardTitle>Related Quizzes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {course.relatedQuizzes.map((quiz) => (
                  <Link
                    key={quiz.id}
                    to={`/quizzes/${quiz.id}`}
                    className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-secondary transition-colors"
                  >
                    <span className="font-medium">{quiz.title}</span>
                    <Badge variant={quiz.difficulty === "Beginner" ? "secondary" : "default"}>{quiz.difficulty}</Badge>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CourseDetails;
