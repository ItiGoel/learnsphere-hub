import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { BookOpen, Trophy, Brain, ArrowRight, Star, Clock, Users } from "lucide-react";

const Index = () => {
  const popularCourses = [
    {
      id: 1,
      title: "Web Development Masterclass",
      description: "Learn modern web development from scratch",
      instructor: "John Doe",
      rating: 4.8,
      students: 12450,
      duration: "40 hours",
      price: "$99",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
    },
    {
      id: 2,
      title: "Data Science Fundamentals",
      description: "Master data analysis and machine learning",
      instructor: "Jane Smith",
      rating: 4.9,
      students: 8920,
      duration: "35 hours",
      price: "$129",
      category: "Data Science",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    },
    {
      id: 3,
      title: "Digital Marketing Pro",
      description: "Complete guide to digital marketing strategies",
      instructor: "Mike Johnson",
      rating: 4.7,
      students: 6780,
      duration: "25 hours",
      price: "$79",
      category: "Marketing",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    },
  ];

  const features = [
    {
      icon: BookOpen,
      title: "Expert-Led Courses",
      description: "Learn from industry professionals with real-world experience",
    },
    {
      icon: Brain,
      title: "Interactive Quizzes",
      description: "Test your knowledge with challenging quizzes and get instant feedback",
    },
    {
      icon: Trophy,
      title: "Competitions & Rewards",
      description: "Participate in competitions and win exciting prizes",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            "Education is the most powerful weapon which you can use to change the world"
          </h1>
          <p className="text-xl text-muted-foreground mb-4">- Nelson Mandela</p>
          <p className="text-lg text-foreground mb-8 max-w-2xl mx-auto">
            Welcome to LearnHub, your gateway to unlimited learning. Explore thousands of courses,
            challenge yourself with quizzes, and compete with learners worldwide.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/courses">
              <Button size="lg" className="gap-2">
                Browse Courses <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/quizzes">
              <Button size="lg" variant="outline" className="gap-2">
                Take a Quiz <Brain className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-secondary">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose LearnHub?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="text-center border-border hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Courses Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold">Popular Courses</h2>
            <Link to="/courses">
              <Button variant="outline" className="gap-2">
                View All <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularCourses.map((course) => (
              <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                  <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">
                    {course.category}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="line-clamp-1">{course.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{course.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>{course.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{course.students.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">By {course.instructor}</p>
                </CardContent>
                <CardFooter className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">{course.price}</span>
                  <Link to={`/courses/${course.id}`}>
                    <Button>View Details</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
