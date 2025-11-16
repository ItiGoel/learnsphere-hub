import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";
import { Clock, Trophy, Target, Filter, Award } from "lucide-react";

const Quizzes = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedDifficulties, setSelectedDifficulties] = useState<string[]>([]);
  const [selectedRewards, setSelectedRewards] = useState<string[]>([]);

  const quizzes = [
    {
      id: 1,
      title: "JavaScript Fundamentals",
      description: "Test your knowledge of JavaScript basics including variables, functions, and data types",
      category: "Web Development",
      difficulty: "Beginner",
      duration: "15 minutes",
      questions: 20,
      totalMarks: 100,
      reward: "Certificate",
      participants: 5420,
    },
    {
      id: 2,
      title: "React Advanced Concepts",
      description: "Challenge yourself with advanced React patterns, hooks, and performance optimization",
      category: "Web Development",
      difficulty: "Advanced",
      duration: "30 minutes",
      questions: 25,
      totalMarks: 150,
      reward: "Badge + Certificate",
      participants: 2180,
    },
    {
      id: 3,
      title: "Python Data Structures",
      description: "Master Python lists, dictionaries, sets, and tuples with practical questions",
      category: "Data Science",
      difficulty: "Intermediate",
      duration: "20 minutes",
      questions: 18,
      totalMarks: 120,
      reward: "Certificate",
      participants: 3890,
    },
    {
      id: 4,
      title: "SQL Query Mastery",
      description: "Test your SQL skills with complex queries, joins, and database optimization",
      category: "Database",
      difficulty: "Advanced",
      duration: "25 minutes",
      questions: 15,
      totalMarks: 100,
      reward: "Premium Badge",
      participants: 1560,
    },
    {
      id: 5,
      title: "UI/UX Design Principles",
      description: "Evaluate your understanding of design fundamentals and user experience",
      category: "Design",
      difficulty: "Beginner",
      duration: "15 minutes",
      questions: 20,
      totalMarks: 80,
      reward: "Certificate",
      participants: 4320,
    },
    {
      id: 6,
      title: "Cloud Computing Basics",
      description: "Learn about cloud platforms, services, and deployment strategies",
      category: "Cloud Computing",
      difficulty: "Intermediate",
      duration: "20 minutes",
      questions: 22,
      totalMarks: 110,
      reward: "Badge + Certificate",
      participants: 2890,
    },
  ];

  const categories = ["Web Development", "Data Science", "Database", "Design", "Cloud Computing"];
  const difficulties = ["Beginner", "Intermediate", "Advanced"];
  const rewards = ["Certificate", "Badge", "Premium Badge"];

  const toggleFilter = (value: string, selected: string[], setSelected: (values: string[]) => void) => {
    if (selected.includes(value)) {
      setSelected(selected.filter((item) => item !== value));
    } else {
      setSelected([...selected, value]);
    }
  };

  const filteredQuizzes = quizzes.filter((quiz) => {
    const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(quiz.category);
    const difficultyMatch = selectedDifficulties.length === 0 || selectedDifficulties.includes(quiz.difficulty);
    const rewardMatch = selectedRewards.length === 0 || selectedRewards.some((reward) => quiz.reward.includes(reward));

    return categoryMatch && difficultyMatch && rewardMatch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-24 pb-12 px-4">
        <div className="container mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Quizzes</h1>
            <p className="text-muted-foreground">Challenge yourself and test your knowledge</p>
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

                  {/* Rewards Filter */}
                  <div>
                    <h3 className="font-semibold mb-3">Rewards</h3>
                    <div className="space-y-2">
                      {rewards.map((reward) => (
                        <div key={reward} className="flex items-center gap-2">
                          <Checkbox
                            id={`reward-${reward}`}
                            checked={selectedRewards.includes(reward)}
                            onCheckedChange={() => toggleFilter(reward, selectedRewards, setSelectedRewards)}
                          />
                          <label htmlFor={`reward-${reward}`} className="text-sm cursor-pointer">
                            {reward}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </aside>

            {/* Quizzes Grid */}
            <div className="flex-1">
              <div className="mb-4 text-muted-foreground">
                Showing {filteredQuizzes.length} quiz{filteredQuizzes.length !== 1 ? "zes" : ""}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredQuizzes.map((quiz) => (
                  <Card key={quiz.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <Badge variant="secondary">{quiz.category}</Badge>
                        <Badge
                          variant={
                            quiz.difficulty === "Beginner" ? "secondary" : quiz.difficulty === "Intermediate" ? "default" : "destructive"
                          }
                        >
                          {quiz.difficulty}
                        </Badge>
                      </div>
                      <CardTitle className="line-clamp-1">{quiz.title}</CardTitle>
                      <CardDescription className="line-clamp-2">{quiz.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>{quiz.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Target className="h-4 w-4" />
                          <span>{quiz.questions} questions</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Trophy className="h-4 w-4" />
                          <span>{quiz.totalMarks} marks</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Award className="h-4 w-4" />
                          <span>{quiz.reward}</span>
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {quiz.participants.toLocaleString()} participants
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link to={`/quizzes/${quiz.id}`} className="w-full">
                        <Button className="w-full">View Details</Button>
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

export default Quizzes;
