import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Trophy, Calendar, Users, DollarSign, Filter, Clock } from "lucide-react";

const Competitions = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedDifficulties, setSelectedDifficulties] = useState<string[]>([]);
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);

  const competitions = [
    {
      id: 1,
      title: "Web Development Challenge 2024",
      description: "Build a full-stack e-commerce application with modern technologies",
      category: "Web Development",
      difficulty: "Advanced",
      prize: "$5,000",
      participants: 850,
      startDate: "2024-02-01",
      endDate: "2024-03-15",
      status: "Upcoming",
      duration: "6 weeks",
    },
    {
      id: 2,
      title: "Data Science Sprint",
      description: "Analyze real-world datasets and build predictive models",
      category: "Data Science",
      difficulty: "Intermediate",
      prize: "$3,000",
      participants: 1200,
      startDate: "2024-01-15",
      endDate: "2024-02-28",
      status: "Active",
      duration: "4 weeks",
    },
    {
      id: 3,
      title: "UI/UX Design Contest",
      description: "Create an innovative mobile app design for healthcare",
      category: "Design",
      difficulty: "Beginner",
      prize: "$2,000",
      participants: 620,
      startDate: "2024-01-20",
      endDate: "2024-02-20",
      status: "Active",
      duration: "4 weeks",
    },
    {
      id: 4,
      title: "AI/ML Innovation Challenge",
      description: "Develop AI solutions for climate change prediction",
      category: "Machine Learning",
      difficulty: "Advanced",
      prize: "$10,000",
      participants: 450,
      startDate: "2024-02-10",
      endDate: "2024-04-10",
      status: "Upcoming",
      duration: "8 weeks",
    },
    {
      id: 5,
      title: "Mobile App Hackathon",
      description: "Create a social impact mobile application in 48 hours",
      category: "Mobile Development",
      difficulty: "Intermediate",
      prize: "$4,000",
      participants: 980,
      startDate: "2023-12-01",
      endDate: "2023-12-15",
      status: "Ended",
      duration: "2 weeks",
    },
    {
      id: 6,
      title: "Cybersecurity CTF",
      description: "Capture the flag competition testing security skills",
      category: "Security",
      difficulty: "Advanced",
      prize: "$6,000",
      participants: 720,
      startDate: "2024-01-25",
      endDate: "2024-02-25",
      status: "Active",
      duration: "4 weeks",
    },
  ];

  const categories = ["Web Development", "Data Science", "Design", "Machine Learning", "Mobile Development", "Security"];
  const difficulties = ["Beginner", "Intermediate", "Advanced"];
  const statuses = ["Active", "Upcoming", "Ended"];

  const toggleFilter = (value: string, selected: string[], setSelected: (values: string[]) => void) => {
    if (selected.includes(value)) {
      setSelected(selected.filter((item) => item !== value));
    } else {
      setSelected([...selected, value]);
    }
  };

  const filteredCompetitions = competitions.filter((comp) => {
    const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(comp.category);
    const difficultyMatch = selectedDifficulties.length === 0 || selectedDifficulties.includes(comp.difficulty);
    const statusMatch = selectedStatuses.length === 0 || selectedStatuses.includes(comp.status);

    return categoryMatch && difficultyMatch && statusMatch;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-success text-success-foreground";
      case "Upcoming":
        return "bg-primary text-primary-foreground";
      case "Ended":
        return "bg-muted text-muted-foreground";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-24 pb-12 px-4">
        <div className="container mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Competitions</h1>
            <p className="text-muted-foreground">Compete with the best and win exciting prizes</p>
          </div>

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
                  {/* Status Filter */}
                  <div>
                    <h3 className="font-semibold mb-3">Status</h3>
                    <div className="space-y-2">
                      {statuses.map((status) => (
                        <div key={status} className="flex items-center gap-2">
                          <Checkbox
                            id={`status-${status}`}
                            checked={selectedStatuses.includes(status)}
                            onCheckedChange={() => toggleFilter(status, selectedStatuses, setSelectedStatuses)}
                          />
                          <label htmlFor={`status-${status}`} className="text-sm cursor-pointer">
                            {status}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

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
                </CardContent>
              </Card>
            </aside>

            {/* Competitions Grid */}
            <div className="flex-1">
              <div className="mb-4 text-muted-foreground">
                Showing {filteredCompetitions.length} competition{filteredCompetitions.length !== 1 ? "s" : ""}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredCompetitions.map((comp) => (
                  <Card key={comp.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <Badge variant="secondary">{comp.category}</Badge>
                        <Badge className={getStatusColor(comp.status)}>{comp.status}</Badge>
                      </div>
                      <CardTitle className="line-clamp-1">{comp.title}</CardTitle>
                      <CardDescription className="line-clamp-2">{comp.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-accent/10 rounded-lg">
                        <div className="flex items-center gap-2">
                          <Trophy className="h-5 w-5 text-accent" />
                          <span className="font-semibold">Prize Pool</span>
                        </div>
                        <span className="text-xl font-bold text-accent">{comp.prize}</span>
                      </div>

                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Users className="h-4 w-4" />
                          <span>{comp.participants} participants</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>{comp.duration}</span>
                        </div>
                      </div>

                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>Start: {new Date(comp.startDate).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>End: {new Date(comp.endDate).toLocaleDateString()}</span>
                        </div>
                      </div>

                      <Badge
                        variant={
                          comp.difficulty === "Beginner" ? "secondary" : comp.difficulty === "Intermediate" ? "default" : "destructive"
                        }
                      >
                        {comp.difficulty}
                      </Badge>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" disabled={comp.status === "Ended"}>
                        {comp.status === "Active" ? "Join Now" : comp.status === "Upcoming" ? "Register" : "View Results"}
                      </Button>
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

export default Competitions;
