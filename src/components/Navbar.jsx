import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const navLinks = [
    { name: '首页', path: '/' },
    { name: '关于我', path: '/about' },
    { name: '项目库', path: '/projects' },
    { name: '联系我', path: '/contact' }
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-primary tracking-wider">
          谢林芸 <span className="text-accent text-sm font-normal">Portfolio</span>
        </Link>
        <div className="flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                location.pathname === link.path ? 'text-accent border-b-2 border-accent pb-1' : 'text-slate-600'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;