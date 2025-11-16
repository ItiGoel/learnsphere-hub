import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";
import { Star, Clock, Users, Filter } from "lucide-react";

const Courses = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedDifficulties, setSelectedDifficulties] = useState<string[]>([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<string[]>([]);

  const courses = [
    {
      id: 1,
      title: "Web Development Masterclass",
      description: "Learn modern web development from scratch with React, Node.js, and MongoDB",
      instructor: "John Doe",
      rating: 4.8,
      students: 12450,
      duration: "40 hours",
      price: 0,
      category: "Web Development",
      difficulty: "Intermediate",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
    },
    {
      id: 2,
      title: "Data Science Fundamentals",
      description: "Master data analysis, visualization, and machine learning with Python",
      instructor: "Jane Smith",
      rating: 4.9,
      students: 8920,
      duration: "35 hours",
      price: 0,
      category: "Data Science",
      difficulty: "Advanced",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    },
    {
      id: 3,
      title: "Digital Marketing Pro",
      description: "Complete guide to SEO, social media marketing, and content strategy",
      instructor: "Mike Johnson",
      rating: 4.7,
      students: 6780,
      duration: "25 hours",
      price: 0,
      category: "Marketing",
      difficulty: "Beginner",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    },
    {
      id: 4,
      title: "Mobile App Development",
      description: "Build iOS and Android apps with React Native",
      instructor: "Sarah Lee",
      rating: 4.6,
      students: 5430,
      duration: "45 hours",
      price: 0,
      category: "Mobile Development",
      difficulty: "Intermediate",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
    },
    {
      id: 5,
      title: "UI/UX Design Essentials",
      description: "Learn user interface and experience design principles",
      instructor: "Emily Chen",
      rating: 4.8,
      students: 9120,
      duration: "30 hours",
      price: 0,
      category: "Design",
      difficulty: "Beginner",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
    },
    {
      id: 6,
      title: "Cloud Computing with AWS",
      description: "Master Amazon Web Services and cloud infrastructure",
      instructor: "David Park",
      rating: 4.9,
      students: 7650,
      duration: "50 hours",
      price: 0,
      category: "Cloud Computing",
      difficulty: "Advanced",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
    },
  ];

  const categories = ["Web Development", "Data Science", "Marketing", "Mobile Development", "Design", "Cloud Computing"];
  const difficulties = ["Beginner", "Intermediate", "Advanced"];
  const priceRanges = ["Free", "$1-$50", "$51-$100", "$100+"];

  const toggleFilter = (value: string, selected: string[], setSelected: (values: string[]) => void) => {
    if (selected.includes(value)) {
      setSelected(selected.filter((item) => item !== value));
    } else {
      setSelected([...selected, value]);
    }
  };

  const filteredCourses = courses.filter((course) => {
    const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(course.category);
    const difficultyMatch = selectedDifficulties.length === 0 || selectedDifficulties.includes(course.difficulty);
    
    let priceMatch = selectedPriceRanges.length === 0;
    if (selectedPriceRanges.includes("Free") && course.price === 0) priceMatch = true;
    if (selectedPriceRanges.includes("$1-$50") && course.price > 0 && course.price <= 50) priceMatch = true;
    if (selectedPriceRanges.includes("$51-$100") && course.price > 50 && course.price <= 100) priceMatch = true;
    if (selectedPriceRanges.includes("$100+") && course.price > 100) priceMatch = true;

    return categoryMatch && difficultyMatch && priceMatch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-24 pb-12 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-8">All Courses</h1>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <aside className="lg:w-64 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Filter className="h-5 w-5" />
                    Filters
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Category Filter */}
                  <div>
                    <h3 className="font-semibold mb-3">Category</h3>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <div key={category} className="flex items-center gap-2">
                          <Checkbox
                            id={`cat-${category}`}
                            checked={selectedCategories.includes(category)}
                            onCheckedChange={() => toggleFilter(category, selectedCategories, setSelectedCategories)}
                          />
                          <label htmlFor={`cat-${category}`} className="text-sm cursor-pointer">
                            {category}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Difficulty Filter */}
                  <div>
                    <h3 className="font-semibold mb-3">Difficulty</h3>
                    <div className="space-y-2">
                      {difficulties.map((difficulty) => (
                        <div key={difficulty} className="flex items-center gap-2">
                          <Checkbox
                            id={`diff-${difficulty}`}
                            checked={selectedDifficulties.includes(difficulty)}
                            onCheckedChange={() => toggleFilter(difficulty, selectedDifficulties, setSelectedDifficulties)}
                          />
                          <label htmlFor={`diff-${difficulty}`} className="text-sm cursor-pointer">
                            {difficulty}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price Filter */}
                  <div>
                    <h3 className="font-semibold mb-3">Price</h3>
                    <div className="space-y-2">
                      {priceRanges.map((range) => (
                        <div key={range} className="flex items-center gap-2">
                          <Checkbox
                            id={`price-${range}`}
                            checked={selectedPriceRanges.includes(range)}
                            onCheckedChange={() => toggleFilter(range, selectedPriceRanges, setSelectedPriceRanges)}
                          />
                          <label htmlFor={`price-${range}`} className="text-sm cursor-pointer">
                            {range}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </aside>

            {/* Courses Grid */}
            <div className="flex-1">
              <div className="mb-4 text-muted-foreground">
                Showing {filteredCourses.length} course{filteredCourses.length !== 1 ? "s" : ""}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredCourses.map((course) => (
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
                      <Badge
                        className="absolute top-3 left-3"
                        variant={
                          course.difficulty === "Beginner" ? "secondary" : course.difficulty === "Intermediate" ? "default" : "destructive"
                        }
                      >
                        {course.difficulty}
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
                      <span className="text-2xl font-bold text-primary">
                        {course.price === 0 ? "Free" : `$${course.price}`}
                      </span>
                      <Link to={`/courses/${course.id}`}>
                        <Button>View Details</Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Courses;
