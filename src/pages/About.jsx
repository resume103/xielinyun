import FadeInSection from '../components/FadeInSection';

const About = () => {
  return (
    // 增加一个极淡的背景色，衬托白色卡片，增加层次感
    <div className="bg-slate-50/50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 pt-24 pb-20">
        
        {/* 1. 核心亮点 (Bento Box 设计升级) */}
        <FadeInSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            
            {/* 教育主卡片 (升级为更圆润的弧度，增强渐变质感) */}
            <div className="col-span-2 bg-gradient-to-br from-primary to-slate-800 p-10 rounded-[2rem] text-white flex flex-col justify-center shadow-xl shadow-primary/10 relative overflow-hidden group">
              {/* 增加一个淡雅的背景装饰，减少单调感 */}
              <div className="absolute -bottom-10 -right-10 text-white/5 text-9xl font-black group-hover:scale-110 transition-transform duration-500">Edu</div>
              
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-2 tracking-tight">重庆工商大学</h2>
                <p className="text-slate-300 mb-6 font-medium">会计学（本科） | 2022.09 - 2026.06</p>
                <div className="flex flex-wrap gap-2.5">
                  {['ACCA (6/13)', '初级会计', '雅思 6.5', '英语六级'].map(tag => (
                    <span key={tag} className="px-3.5 py-1.5 bg-white/10 backdrop-blur-md text-sm rounded-full border border-white/20 font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* 数据指标卡片 (增加微浮雕感和 Hover 动效) */}
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col justify-center items-center text-center hover:-translate-y-2 hover:shadow-lg hover:border-accent/20 transition-all duration-300 cursor-default group">
              <div className="text-5xl font-black text-accent mb-2.5 group-hover:scale-110 transition-transform">Top 5%</div>
              <div className="text-base text-slate-500 font-semibold tracking-tight">专业排名 (GPA 89.73)</div>
            </div>

            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col justify-center items-center text-center hover:-translate-y-2 hover:shadow-lg hover:border-primary/20 transition-all duration-300 cursor-default group">
              <div className="text-5xl font-black text-primary mb-2.5 group-hover:scale-110 transition-transform">4段</div>
              <div className="text-base text-slate-500 font-semibold tracking-tight">名企核心财务实习</div>
            </div>

          </div>
        </FadeInSection>

        {/* 2. 职业经历部分标题 (应用商务高光菱形) */}
        <FadeInSection delay={100}>
          <h2 className="text-3xl font-bold text-primary mb-10 flex items-center gap-4">
            <span className="w-3 h-3 bg-accent transform rotate-45 rounded-sm shadow-sm shrink-0"></span>
            职业经历视界
          </h2>
        </FadeInSection>

        {/* 3. 可视化经历卡片库 */}
        <div className="space-y-8">
          
          {/* 吉利实习 (重构数据区，增加微色彩) */}
          <FadeInSection delay={150}>
            <div className="bg-white rounded-[2rem] p-10 shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 group">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 border-b border-slate-100 pb-6">
                <div>
                  <h3 className="text-2xl font-bold text-primary group-hover:text-accent transition-colors">吉利控股集团</h3>
                  <p className="text-accent font-semibold mt-1.5 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    财务部实习生 
                    <span className="text-slate-400 font-normal ml-1">| 2025.06 - 2025.09</span>
                  </p>
                </div>
                <div className="flex gap-2.5">
                  <span className="px-4 py-1.5 bg-blue-50 text-blue-700 text-xs font-bold rounded-xl border border-blue-100">损益优化</span>
                  <span className="px-4 py-1.5 bg-indigo-50 text-indigo-700 text-xs font-bold rounded-xl border border-indigo-100">业财分析</span>
                </div>
              </div>

              {/* 数据指标区 (升级为带背景色的精致小卡片) */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-8">
                <div className="bg-emerald-50/50 p-5 rounded-2xl border border-emerald-100 hover:bg-emerald-50 transition-colors">
                  <div className="text-3xl font-black text-emerald-600">-15%</div>
                  <div className="text-xs text-slate-600 mt-2 font-medium">项目成本降低</div>
                </div>
                <div className="bg-blue-50/50 p-5 rounded-2xl border border-blue-100 hover:bg-blue-50 transition-colors">
                  <div className="text-3xl font-black text-blue-600">+7%</div>
                  <div className="text-xs text-slate-600 mt-2 font-medium">预期利润增长</div>
                </div>
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 hover:bg-slate-100 transition-colors">
                  <div className="text-3xl font-black text-primary">700+</div>
                  <div className="text-xs text-slate-600 mt-2 font-medium">采购单据审核处理</div>
                </div>
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 hover:bg-slate-100 transition-colors">
                  <div className="text-3xl font-black text-primary">-40%</div>
                  <div className="text-xs text-slate-600 mt-2 font-medium">单笔费用处理时长缩短</div>
                </div>
              </div>
              
              <p className="text-slate-600 text-sm leading-relaxed bg-slate-50 px-6 py-4 rounded-xl border border-slate-100">
                分析制造成本与三费，通过比对 ROI、NPV 等数据模型识别异常，成功推动项目扭亏为盈。结合四大区域数据输出有效销售建议，并主导优化 ERP 系统入账流程。
              </p>
            </div>
          </FadeInSection>

          {/* 天职实习 (重构业绩要点为精致的网格标签) */}
          <FadeInSection delay={200}>
            <div className="bg-white rounded-[2rem] p-10 shadow-sm border border-slate-100 hover:shadow-xl hover:border-orange-100 transition-all duration-300 group">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 border-b border-slate-100 pb-6">
                <div>
                  <h3 className="text-2xl font-bold text-primary group-hover:text-orange-600 transition-colors">天职国际会计师事务所</h3>
                  <p className="text-accent font-semibold mt-1.5 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                    审计部实习生 
                    <span className="text-slate-400 font-normal ml-1">| 2024.12 - 2025.03</span>
                  </p>
                </div>
                <div className="flex gap-2.5">
                  <span className="px-4 py-1.5 bg-orange-50 text-orange-700 text-xs font-bold rounded-xl border border-orange-100">底稿编制</span>
                  <span className="px-4 py-1.5 bg-rose-50 text-rose-700 text-xs font-bold rounded-xl border border-rose-100">数据分析</span>
                </div>
              </div>

              {/* 业绩要点重构：使用 2 列网格代替原本的 flex 布局，看起来更有分量 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {[
                  { icon: '📝', text: '编制调整分录 14 条' },
                  { icon: '🔢', text: '调整科目金额 40+ 项' },
                  { icon: '🤝', text: '函证与合同核对 200+ 项' },
                  { icon: '📊', text: 'SAP/NC 系统数据清洗与可视化' }
                ].map(item => (
                  <div key={item.text} className="flex items-center gap-3 bg-slate-50 px-5 py-3 rounded-xl border border-slate-100 group-hover:border-slate-200 transition-colors">
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-sm font-semibold text-slate-700">{item.text}</span>
                  </div>
                ))}
              </div>

              <p className="text-slate-600 text-sm leading-relaxed px-2">
                深入参与审计一线工作，独立完成 TB 表制作及收支类底稿编制，并利用系统数据产出可视化分析报告。
              </p>
            </div>
          </FadeInSection>

          {/* 高顿/中铁 (双栏布局优化) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeInSection delay={250}>
              <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100 h-full hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group">
                <h3 className="text-xl font-bold text-primary mb-1.5">上海高顿教育</h3>
                <p className="text-sm text-accent font-medium mb-6 flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                  市场部实习生 | 2024.07 - 09
                </p>
                <div className="space-y-3.5 bg-slate-50 p-5 rounded-2xl border border-slate-100">
                  <div className="flex justify-between items-center border-b border-slate-100 pb-2.5">
                    <span className="text-sm text-slate-500 font-medium">客户注册量增长</span>
                    <span className="font-extrabold text-emerald-600 text-lg">+40%</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-slate-100 pb-2.5">
                    <span className="text-sm text-slate-500 font-medium">客户留存率提升</span>
                    <span className="font-extrabold text-blue-600 text-lg">+25%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-500 font-medium">有效客户反馈转化</span>
                    <span className="font-extrabold text-primary text-lg">80%</span>
                  </div>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection delay={300}>
              <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100 h-full hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group">
                <h3 className="text-xl font-bold text-primary mb-1.5">中国中铁股份</h3>
                <p className="text-sm text-accent font-medium mb-6 flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1"></path></svg>
                  财务部实习生 | 2023.01 - 02
                </p>
                <div className="flex flex-wrap gap-2.5 mt-2 mb-5">
                  {['工程概算核算', '项目成本分析', '预算追踪与控制'].map(item => (
                    <span key={item} className="px-3 py-1.5 bg-slate-50 text-slate-600 text-xs font-semibold rounded-lg border border-slate-100">
                      {item}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-slate-500 mt-4 leading-relaxed bg-slate-50 px-4 py-3 rounded-lg border border-slate-100">
                  协助对比实际与预算成本，定位偏差原因并提出成本优化策略，保障项目经济效益。
                </p>
              </div>
            </FadeInSection>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;