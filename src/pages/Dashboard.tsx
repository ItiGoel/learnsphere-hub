import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Trophy, Award, TrendingUp, Clock, CheckCircle2 } from "lucide-react";

const Dashboard = () => {
  const user = {
    name: "John Doe",
    email: "john@example.com",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    joinDate: "January 2024",
    totalCourses: 5,
    completedCourses: 2,
    inProgressCourses: 3,
    quizzesTaken: 12,
    averageScore: 85,
    certificatesEarned: 2,
  };

  const enrolledCourses = [
    {
      id: 1,
      title: "Web Development Masterclass",
      progress: 65,
      category: "Web Development",
      lastAccessed: "2 hours ago",
      instructor: "John Doe",
    },
    {
      id: 2,
      title: "Data Science Fundamentals",
      progress: 40,
      category: "Data Science",
      lastAccessed: "1 day ago",
      instructor: "Jane Smith",
    },
    {
      id: 3,
      title: "Digital Marketing Pro",
      progress: 100,
      category: "Marketing",
      lastAccessed: "3 days ago",
      instructor: "Mike Johnson",
    },
  ];

  const recentQuizzes = [
    { id: 1, title: "JavaScript Fundamentals", score: 90, totalMarks: 100, date: "2024-01-20", status: "Passed" },
    { id: 2, title: "React Advanced Concepts", score: 85, totalMarks: 100, date: "2024-01-18", status: "Passed" },
    { id: 3, title: "Python Data Structures", score: 75, totalMarks: 100, date: "2024-01-15", status: "Passed" },
  ];

  const certificates = [
    { id: 1, course: "Digital Marketing Pro", issueDate: "2024-01-22", credentialId: "CERT-2024-001" },
    { id: 2, course: "UI/UX Design Essentials", issueDate: "2024-01-10", credentialId: "CERT-2024-002" },
  ];

  const activities = [
    { id: 1, type: "course", title: "Completed 'Web Development Masterclass' Module 5", time: "2 hours ago" },
    { id: 2, type: "quiz", title: "Scored 90% in JavaScript Fundamentals Quiz", time: "1 day ago" },
    { id: 3, type: "certificate", title: "Earned certificate for Digital Marketing Pro", time: "2 days ago" },
    { id: 4, type: "course", title: "Enrolled in Data Science Fundamentals", time: "3 days ago" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-24 pb-12 px-4">
        <div className="container mx-auto">
          {/* Profile Header */}
          <div className="mb-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback>{user.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 text-center md:text-left">
                    <h1 className="text-3xl font-bold mb-2">{user.name}</h1>
                    <p className="text-muted-foreground mb-4">{user.email}</p>
                    <p className="text-sm text-muted-foreground">Member since {user.joinDate}</p>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">{user.totalCourses}</div>
                      <div className="text-xs text-muted-foreground">Courses</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">{user.quizzesTaken}</div>
                      <div className="text-xs text-muted-foreground">Quizzes</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">{user.averageScore}%</div>
                      <div className="text-xs text-muted-foreground">Avg Score</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">{user.certificatesEarned}</div>
                      <div className="text-xs text-muted-foreground">Certificates</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Dashboard Tabs */}
          <Tabs defaultValue="courses" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4 max-w-2xl">
              <TabsTrigger value="courses">Courses</TabsTrigger>
              <TabsTrigger value="quizzes">Quizzes</TabsTrigger>
              <TabsTrigger value="certificates">Certificates</TabsTrigger>
              <TabsTrigger value="activity">Activity</TabsTrigger>
            </TabsList>

            {/* Courses Tab */}
            <TabsContent value="courses" className="space-y-4">
              <div className="grid gap-4">
                {enrolledCourses.map((course) => (
                  <Card key={course.id}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="mb-2">{course.title}</CardTitle>
                          <CardDescription>By {course.instructor}</CardDescription>
                        </div>
                        <Badge variant="secondary">{course.category}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Progress</span>
                          <span className="font-semibold">{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} />
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>Last accessed {course.lastAccessed}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Quizzes Tab */}
            <TabsContent value="quizzes" className="space-y-4">
              <div className="grid gap-4">
                {recentQuizzes.map((quiz) => (
                  <Card key={quiz.id}>
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <h3 className="font-semibold">{quiz.title}</h3>
                          <p className="text-sm text-muted-foreground">{quiz.date}</p>
                        </div>
                        <div className="text-right space-y-1">
                          <div className="text-2xl font-bold text-primary">
                            {quiz.score}/{quiz.totalMarks}
                          </div>
                          <Badge variant={quiz.status === "Passed" ? "default" : "destructive"} className="bg-success">
                            <CheckCircle2 className="h-3 w-3 mr-1" />
                            {quiz.status}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Certificates Tab */}
            <TabsContent value="certificates" className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                {certificates.map((cert) => (
                  <Card key={cert.id}>
                    <CardHeader>
                      <div className="flex items-start gap-3">
                        <div className="p-3 bg-accent/10 rounded-lg">
                          <Award className="h-6 w-6 text-accent" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-lg mb-2">{cert.course}</CardTitle>
                          <CardDescription>Issued on {cert.issueDate}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">Credential ID: {cert.credentialId}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Activity Tab */}
            <TabsContent value="activity" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Recent Activity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {activities.map((activity) => (
                      <div key={activity.id} className="flex items-start gap-4 pb-4 border-b border-border last:border-0 last:pb-0">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          {activity.type === "course" && <BookOpen className="h-4 w-4 text-primary" />}
                          {activity.type === "quiz" && <Trophy className="h-4 w-4 text-primary" />}
                          {activity.type === "certificate" && <Award className="h-4 w-4 text-primary" />}
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">{activity.title}</p>
                          <p className="text-sm text-muted-foreground">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
