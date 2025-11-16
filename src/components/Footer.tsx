import { GraduationCap, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 font-bold text-xl text-primary">
              <GraduationCap className="h-8 w-8" />
              <span>LearnHub</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Empowering learners worldwide with quality education and engaging content.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/courses" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/quizzes" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Quizzes
                </Link>
              </li>
              <li>
                <Link to="/competitions" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Competitions
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">Help Center</li>
              <li className="text-sm text-muted-foreground">Terms of Service</li>
              <li className="text-sm text-muted-foreground">Privacy Policy</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>support@learnhub.com</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>123 Education St, Learning City</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} LearnHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
