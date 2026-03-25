import FadeInSection from '../components/FadeInSection';
import { Link } from 'react-router-dom';
import xlyImg from '../assets/xly.jpg';

// 使用高质量的、 desaturated (去色) 的金融背景图，以更好地衬托出头像和徽章
const desaturatedBgImageUrl = 'https://online.champlain.edu/sites/online/files/styles/width_1600/public/2021-03/online-colleges-accounting-degree-blog5-1900x900.jpg?itok=7PERnqbu';

const Home = () => {
  return (
    // 1. 极深色背景底盘，配合溢出隐藏
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#090e1a]">
      
      {/* 定义保留的交互动画：星座颤动与星尘淡入 */}
      <style>{`
        @keyframes constellation-align {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(4px, -5px); }
          50% { transform: translate(-5px, 6px); }
          75% { transform: translate(6px, 4px); }
        }
        @keyframes text-stardust {
          0% { opacity: 0; transform: translateY(15px) scale(1.05); filter: blur(2px); }
          100% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
        }
        .animate-constellation {
          animation: constellation-align 20s ease-in-out infinite;
        }
        .stagger-text span {
          display: inline-block;
          animation: text-stardust 0.8s ease-out forwards;
        }
        .stagger-text span:nth-child(1) { animation-delay: 0.1s; }
        .stagger-text span:nth-child(2) { animation-delay: 0.2s; }
        .stagger-text span:nth-child(3) { animation-delay: 0.3s; }
      `}</style>
      
      {/* 2. 背景图片层：desaturated 且 low opacity，营造深邃质感 */}
      <div 
        className="absolute inset-0 z-0 desaturate-[60%] opacity-20 bg-cover bg-center" 
        style={{ backgroundImage: `url(${desaturatedBgImageUrl})` }}
      ></div>

      <div className="relative z-10 w-full max-w-5xl px-6 mx-auto">
        <div className="flex flex-col items-center justify-center text-center">
          
          {/* 3. 重塑的悬浮头像与数据徽章 (重点关注此处) */}
          <FadeInSection>
            <div className="relative mb-12 inline-block group">
              
              {/* 头像外圈商务渐变边框 */}
              <div className="relative z-10 p-1 bg-gradient-to-tr from-slate-600 via-slate-400 to-slate-700 rounded-full shadow-2xl transition-transform duration-500 group-hover:scale-105">
                <img 
                  src={xlyImg}
                  alt="谢林芸" 
                  className="w-44 h-44 md:w-48 md:h-48 rounded-full border-[6px] border-[#090e1a] object-cover"
                  onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400' }}
                />
              </div>

              {/* 悬浮玻璃态徽章 1 - 左侧 (Top 5% GPA) */}
              <div className="absolute bottom-4 -left-8 md:-left-16 z-20 bg-white/10 backdrop-blur-lg border border-white/10 px-4 py-2.5 rounded-2xl shadow-2xl animate-constellation hover:scale-105 hover:bg-white/15 transition-all">
                <div className="flex items-center gap-2.5">
                  {/* 使用绿色发光点点缀核心成就 */}
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
                  <span className="text-slate-100 text-xs font-bold tracking-wider">Top 5% GPA</span>
                </div>
              </div>

              {/* 悬浮玻璃态徽章 2 - 右侧 (4+ 核心实习) */}
              <div className="absolute top-4 -right-6 md:-right-12 z-20 bg-white/10 backdrop-blur-lg border border-white/10 px-4 py-2.5 rounded-2xl shadow-2xl animate-constellation hover:scale-105 hover:bg-white/15 transition-all" style={{ animationDelay: '3s' }}>
                <div className="flex items-center gap-2.5">
                  {/* 使用蓝色发光点点缀硬核经历 */}
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]"></span>
                  <span className="text-slate-100 text-xs font-bold tracking-wider">4+ 核心实习</span>
                </div>
              </div>
            </div>
          </FadeInSection>

         {/* 4. 标题与排版优化 */}
          <FadeInSection delay={150}>
            <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 mb-6 tracking-tight">
              谢林芸
            </h1>
            
            {/* 职业方向标签栏 */}
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mb-12">
              <span className="text-slate-400 md:text-lg font-medium flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 bg-slate-500 rounded-full"></span> 财务分析
              </span>
              <span className="text-slate-400 md:text-lg font-medium flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 bg-slate-500 rounded-full"></span> 审计
              </span>
              <span className="text-slate-400 md:text-lg font-medium flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 bg-slate-500 rounded-full"></span> 商业咨询
              </span>
            </div>
          </FadeInSection>
          
          {/* 5. 按钮区域 (主次分明，现代设计) */}
          <FadeInSection delay={300}>
            <div className="flex flex-col sm:flex-row justify-center gap-5">
              {/* 主按钮 - 克制的高级蓝 */}
              <Link to="/projects" className="group relative px-9 py-4 bg-blue-600 text-white font-bold rounded-full overflow-hidden shadow-lg hover:shadow-blue-500/25 hover:bg-blue-500 transition-all duration-300 hover:-translate-y-1">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  探索商业项目库
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
              </Link>
              
              {/* 次级按钮 - 极简线框 */}
              <Link to="/about" className="px-9 py-4 bg-transparent hover:bg-white/5 text-slate-300 font-medium border border-slate-700 rounded-full transition-all duration-300 hover:-translate-y-1 flex items-center justify-center">
                关于我的专业经历
              </Link>
            </div>
          </FadeInSection>

        </div>
      </div>
      
      {/* 底部极其克制的滚动提示线 (增添深邃留白感) */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-slate-700 to-transparent opacity-50"></div>
      </div>

    </div>
  );
};

export default Home;