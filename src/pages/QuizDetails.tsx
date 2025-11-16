import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Clock, Target, Trophy, Award, CheckCircle2, AlertCircle, Calendar, PlayCircle } from "lucide-react";

const QuizDetails = () => {
  const { id } = useParams();

  // Mock data
  const quiz = {
    id: 1,
    title: "JavaScript Fundamentals",
    description: "Test your knowledge of JavaScript basics including variables, functions, and data types. This comprehensive quiz covers all essential concepts needed for modern web development.",
    category: "Web Development",
    difficulty: "Beginner",
    duration: "15 minutes",
    questions: 20,
    totalMarks: 100,
    passingMarks: 60,
    reward: "Certificate",
    participants: 5420,
    averageScore: 72,
    questionTypes: ["Multiple Choice", "True/False", "Fill in the Blanks"],
    topics: [
      "Variables and Data Types",
      "Functions and Scope",
      "Arrays and Objects",
      "Control Flow",
      "DOM Manipulation",
      "ES6+ Features",
    ],
    rules: [
      "You have 15 minutes to complete all 20 questions",
      "Each question carries 5 marks",
      "No negative marking for wrong answers",
      "You can skip questions and return to them later",
      "Once submitted, answers cannot be changed",
      "Minimum 60% required to pass and earn certificate",
      "Browser refresh will restart the quiz",
      "No external help or resources allowed",
    ],
    resultDeclaration: "Results will be declared immediately after submission. You will receive instant feedback on your performance along with correct answers and explanations.",
    prerequisites: ["Basic understanding of programming", "HTML and CSS knowledge recommended"],
    benefits: [
      "Earn a verified certificate upon passing",
      "Get detailed performance analytics",
      "Identify your strengths and weaknesses",
      "Compare your score with other participants",
      "Access to solution explanations",
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <div className="pt-24 pb-12 px-4 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="secondary">{quiz.category}</Badge>
              <Badge
                variant={
                  quiz.difficulty === "Beginner" ? "secondary" : quiz.difficulty === "Intermediate" ? "default" : "destructive"
                }
              >
                {quiz.difficulty}
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">{quiz.title}</h1>
            <p className="text-xl text-muted-foreground">{quiz.description}</p>

            <div className="flex flex-wrap items-center gap-6 text-sm pt-4">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-muted-foreground" />
                <span className="font-semibold">{quiz.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="h-5 w-5 text-muted-foreground" />
                <span className="font-semibold">{quiz.questions} Questions</span>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-muted-foreground" />
                <span className="font-semibold">{quiz.totalMarks} Marks</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-muted-foreground" />
                <span className="font-semibold">{quiz.reward}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-12 px-4">
        <div className="container mx-auto max-w-4xl space-y-8">
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="text-3xl font-bold text-primary mb-1">{quiz.participants.toLocaleString()}</div>
                <p className="text-sm text-muted-foreground">Total Participants</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="text-3xl font-bold text-primary mb-1">{quiz.averageScore}%</div>
                <p className="text-sm text-muted-foreground">Average Score</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="text-3xl font-bold text-primary mb-1">{quiz.passingMarks}%</div>
                <p className="text-sm text-muted-foreground">Passing Score</p>
              </CardContent>
            </Card>
          </div>

          {/* Quiz Overview */}
          <Card>
            <CardHeader>
              <CardTitle>Quiz Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold mb-3">Question Types</h3>
                <div className="flex flex-wrap gap-2">
                  {quiz.questionTypes.map((type, index) => (
                    <Badge key={index} variant="outline">
                      {type}
                    </Badge>
                  ))}
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-semibold mb-3">Topics Covered</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {quiz.topics.map((topic, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-success" />
                      <span className="text-sm">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-semibold mb-3">Prerequisites</h3>
                <ul className="space-y-2">
                  {quiz.prerequisites.map((prereq, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{prereq}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Rules & Guidelines */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5" />
                Rules & Guidelines
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {quiz.rules.map((rule, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-semibold">
                      {index + 1}
                    </span>
                    <span className="text-sm">{rule}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Result Declaration */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Result Declaration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>{quiz.resultDeclaration}</p>
            </CardContent>
          </Card>

          {/* Benefits */}
          <Card>
            <CardHeader>
              <CardTitle>What You'll Get</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {quiz.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Start Quiz CTA */}
          <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
            <CardContent className="p-8 text-center space-y-4">
              <h3 className="text-2xl font-bold">Ready to Start?</h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                Make sure you have {quiz.duration} of uninterrupted time. Good luck!
              </p>
              <Link to="/auth">
                <Button size="lg" className="gap-2">
                  <PlayCircle className="h-5 w-5" />
                  Start Quiz
                </Button>
              </Link>
              <p className="text-xs text-muted-foreground">You need to login to start the quiz</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default QuizDetails;
