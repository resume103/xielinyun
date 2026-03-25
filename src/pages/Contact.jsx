import FadeInSection from '../components/FadeInSection';

const Contact = () => {
  return (
    // 极简高级浅色背景 + 动态弥散光斑
    <div className="min-h-screen pt-32 pb-20 px-6 flex items-center justify-center relative bg-slate-50 overflow-hidden">
      
      {/* 柔和的背景光晕动效 */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 10s infinite alternate;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
      
      {/* 背景光斑层 */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-[100px] opacity-40 animate-blob"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-[100px] opacity-40 animate-blob animation-delay-2000"></div>

      {/* 核心卡片容器 */}
      <div className="max-w-5xl w-full relative z-10">
        <FadeInSection>
          <div className="bg-white/80 backdrop-blur-2xl rounded-[2.5rem] shadow-2xl shadow-slate-200/50 overflow-hidden flex flex-col md:flex-row border border-white">
            
            {/* 左侧文字与联系信息区 */}
            <div className="p-10 lg:p-14 md:w-1/2 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-bold w-max mb-6">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                期待新的职业机会
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-700 mb-4 tracking-tight">
                随时保持联系。
              </h2>
              <p className="text-slate-500 mb-12 font-medium leading-relaxed">
                寻找财务分析、审计实习或全职机会。期待与您的团队共创价值，用数据驱动商业增长。
              </p>

              <div className="space-y-6">
                {/* 电话 */}
                <div className="flex items-center gap-5 group cursor-default">
                  <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-blue-500/30">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M20 10.999h2C22 5.869 18.127 2 12.99 2v2C17.052 4 20 6.943 20 10.999z" /><path d="M13 8c2.103 0 3 .897 3 3h2c0-3.225-1.775-5-5-5v2zm3.422 5.443a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a1 1 0 0 0-.086-1.391l-4.064-3.696z" /></svg>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 tracking-wider mb-1">联系电话</div>
                    <div className="font-semibold text-slate-800 text-lg">180 8131 1727</div>
                  </div>
                </div>

                {/* 邮箱 */}
                <div className="flex items-center gap-5 group cursor-default">
                  <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-indigo-500/30">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 tracking-wider mb-1">电子邮箱</div>
                    <div className="font-semibold text-slate-800 text-lg">1599824610@qq.com</div>
                  </div>
                </div>

                {/* 身份 */}
                <div className="flex items-center gap-5 group cursor-default">
                  <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-emerald-500/30">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 tracking-wider mb-1">社会职务</div>
                    <div className="font-semibold text-slate-800">共青团员 | 班长 / 学委</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 右侧暗黑质感色块：高级简历总结区 */}
            <div className="md:w-1/2 bg-[#090e1a] relative p-10 lg:p-14 text-white flex flex-col justify-center overflow-hidden">
              {/* 右侧的极简底纹 */}
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.05] z-0"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <span className="w-4 h-4 rounded-sm bg-accent transform rotate-45"></span>
                  核心竞争力
                </h3>
                
                <div className="space-y-8">
                  {/* 专业技能 (Chip 设计) */}
                  <div className="flex flex-col border-l-2 border-white/10 pl-5">
                    <span className="text-blue-400 font-bold text-sm mb-3 tracking-wider">财务与数据工具</span>
                    <div className="flex flex-wrap gap-2.5">
                      {['SAP', '用友 ERP', '金蝶', 'Tableau', 'SQL 基础', 'Office 高级应用'].map(skill => (
                        <span key={skill} className="px-3.5 py-1.5 bg-white/5 hover:bg-white/10 transition-colors border border-white/10 rounded-xl text-sm font-medium text-slate-200">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 证书执照 */}
                  <div className="flex flex-col border-l-2 border-white/10 pl-5">
                    <span className="text-indigo-400 font-bold text-sm mb-3 tracking-wider">专业资质证明</span>
                    <div className="flex flex-wrap gap-2.5">
                      <span className="px-3.5 py-1.5 bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 rounded-xl text-sm font-bold">ACCA (6/13)</span>
                      <span className="px-3.5 py-1.5 bg-white/5 border border-white/10 rounded-xl text-sm font-medium text-slate-200">初级会计资格证</span>
                      <span className="px-3.5 py-1.5 bg-white/5 border border-white/10 rounded-xl text-sm font-medium text-slate-200">雅思 6.5</span>
                      <span className="px-3.5 py-1.5 bg-white/5 border border-white/10 rounded-xl text-sm font-medium text-slate-200">英语六级</span>
                    </div>
                  </div>

                  {/* 奖项荣誉 */}
                  <div className="flex flex-col border-l-2 border-white/10 pl-5">
                    <span className="text-emerald-400 font-bold text-sm mb-3 tracking-wider">荣誉与奖项</span>
                    <ul className="space-y-2 text-slate-300 text-sm font-medium">
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-400 mt-0.5">✦</span> 全国商业精英挑战赛 <span className="text-white font-bold">国家二等奖 / 三等奖</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-400 mt-0.5">✦</span> 连续 3 年获 <span className="text-white font-bold">校级二等奖学金</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-400 mt-0.5">✦</span> 英国保诚理财大赛 <span className="text-white font-bold">一等奖</span> (校级先进荣誉7次)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
            </div>
            
          </div>
        </FadeInSection>
      </div>
    </div>
  );
};

export default Contact;