import { Link } from "react-router-dom";
import ThemeToggleButton from "./ThemeToggleButton";

const NavBar: React.FC = () => {
  return (
    <div className="bg-green-600 dark:bg-green-900 text-white p-4 flex justify-between items-center">
      <Link to='/' className="text-2xl dark:text-gray-200">Blog</Link>
      <ThemeToggleButton /> 
    </div>
  )
}

export default NavBar;