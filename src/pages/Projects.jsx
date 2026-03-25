import FadeInSection from '../components/FadeInSection';

const Projects = () => {
    return (
        <div className="max-w-6xl mx-auto px-6 pt-24 pb-20">

            {/* 页面头部 */}
            <FadeInSection>
                <div className="mb-16 md:w-2/3">
                    <h2 className="text-4xl font-bold text-primary mb-4">商业项目与实践</h2>
                    <p className="text-lg text-slate-500 leading-relaxed">
                        将扎实的财务逻辑与敏锐的商业洞察相结合，通过数据分析驱动策略落地，实现企业与客户资产的可量化增长。
                    </p>
                </div>
            </FadeInSection>

            {/* 1. 旗舰案例 (全宽横向卡片，视觉拉满) */}
            <FadeInSection delay={100}>
                <div className="mb-12 relative bg-white rounded-[2rem] shadow-sm border border-slate-100 overflow-hidden group hover:shadow-xl transition-shadow duration-500">
                    <div className="flex flex-col lg:flex-row">
                        {/* 左侧文字区 */}
                        <div className="lg:w-1/2 p-10 lg:p-14 flex flex-col justify-center relative z-10">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-accent rounded-full text-sm font-bold w-max mb-6 border border-blue-100">
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
                                </span>
                                核心商业案例
                            </div>

                            <h3 className="text-3xl font-bold text-primary mb-2">百年六合 · 品牌战略策划</h3>
                            <p className="text-slate-500 font-medium mb-8">全国商业精英品牌策划大赛 | 队长 · 优秀企业奖</p>

                            <div className="grid grid-cols-2 gap-6 mb-8">
                                <div className="border-l-4 border-emerald-500 pl-4">
                                    <div className="text-3xl font-black text-primary">+20%</div>
                                    <div className="text-sm text-slate-500 mt-1">企业销售额增长</div>
                                </div>
                                <div className="border-l-4 border-accent pl-4">
                                    <div className="text-3xl font-black text-primary">0 to 1</div>
                                    <div className="text-sm text-slate-500 mt-1">打通线上电商渠道</div>
                                </div>
                            </div>

                            <ul className="space-y-3 mb-8">
                                <li className="flex items-start gap-3 text-slate-600">
                                    <svg className="w-5 h-5 text-accent mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    <span>以文化叙事为锚点挖掘品牌历史价值，重塑营销宣传体系。</span>
                                </li>
                                <li className="flex items-start gap-3 text-slate-600">
                                    <svg className="w-5 h-5 text-accent mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    <span>深度剖析南充与苏杭绸缎共异性，输出竞品差距分析及落地方案。</span>
                                </li>
                            </ul>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {['品牌策划', '竞品分析', '电商运营'].map(tag => (
                                    <span key={tag} className="px-3 py-1.5 bg-slate-50 text-slate-600 text-xs font-semibold rounded-lg border border-slate-200">{tag}</span>
                                ))}
                            </div>
                        </div>

                        {/* 右侧大图区 */}
                        <div className="lg:w-1/2 h-80 lg:h-auto relative overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200"
                                alt="品牌策划"
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            {/* 渐变遮罩让融合更自然 */}
                            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/20 to-transparent lg:block hidden"></div>
                        </div>
                    </div>
                </div>
            </FadeInSection>

            {/* 2. 双列矩阵 (另外两个项目) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">

                {/* 保诚项目 */}
                <FadeInSection delay={150}>
                    <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                        <div className="flex justify-between items-start mb-6">
                            <div className="w-14 h-14 rounded-2xl bg-blue-50 text-accent flex items-center justify-center mb-4">
                                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                            </div>
                            <span className="bg-emerald-50 text-emerald-600 font-bold px-3 py-1 rounded-full text-sm">资产增值 +10%</span>
                        </div>
                        <h3 className="text-2xl font-bold text-primary mb-1">英国保诚实训项目</h3>
                        <p className="text-slate-400 text-sm mb-6">财务体检与资产规划 | 2023.08 - 2023.09</p>

                        <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
                            运用问卷全面掌握客户家庭财务状况与风险偏好。结合金融产品收益率，量身定制包含稳健与进取产品的分散资产配置方案。
                        </p>

                        <div className="pt-6 border-t border-slate-100">
                            <div className="text-sm text-slate-500 mb-3 font-semibold">核心产出</div>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-slate-50 text-slate-600 text-xs rounded-md">财务体检报告</span>
                                <span className="px-3 py-1 bg-slate-50 text-slate-600 text-xs rounded-md">投资分散策略</span>
                                <span className="px-3 py-1 bg-slate-50 text-slate-600 text-xs rounded-md">可视化收益追踪</span>
                            </div>
                        </div>
                    </div>
                </FadeInSection>

                {/* 跨境电商项目 */}
                <FadeInSection delay={200}>
                    <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                        <div className="flex justify-between items-start mb-6">
                            <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
                            </div>
                            <span className="bg-blue-50 text-blue-600 font-bold px-3 py-1 rounded-full text-sm">粉丝增长 +40%</span>
                        </div>
                        <h3 className="text-2xl font-bold text-primary mb-1">跨境电商出海策划</h3>
                        <p className="text-slate-400 text-sm mb-6">全国商业精英大赛 | 队长 | 2022.09 - 2023.04</p>

                        <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
                            横纵向结合深度分析茶颜悦色可延伸产品线及 SKU，洞察海外市场需求制定出海打品策略。策划并运营海外品牌社群，实时优化营销动作。
                        </p>

                        <div className="pt-6 border-t border-slate-100">
                            <div className="text-sm text-slate-500 mb-3 font-semibold">核心产出</div>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-slate-50 text-slate-600 text-xs rounded-md">出海可行性分析</span>
                                <span className="px-3 py-1 bg-slate-50 text-slate-600 text-xs rounded-md">爆款引流方案</span>
                                <span className="px-3 py-1 bg-slate-50 text-slate-600 text-xs rounded-md">海外社群搭建</span>
                            </div>
                        </div>
                    </div>
                </FadeInSection>

            </div>

            {/* 3. 商业分析能力拆解矩阵 (这个模块能极大增强专业感和页面厚度) */}
            {/* 3. 商业分析能力拆解矩阵 */}
            <FadeInSection delay={250}>
                <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-3">
                    <span className="w-2.5 h-2.5 bg-accent transform rotate-45 rounded-sm shadow-sm"></span>核心商业分析技能
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

                    {/* 能力 1：财务建模 (专业蓝) */}
                    <div className="bg-blue-50/60 border border-blue-100 hover:bg-blue-50 hover:border-blue-200 p-6 rounded-3xl flex flex-col justify-between transition-colors duration-300 group cursor-default">
                        <div className="w-12 h-12 rounded-2xl bg-white text-blue-600 flex items-center justify-center shadow-sm mb-5 group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                        </div>
                        <div>
                            <div className="font-bold text-slate-800 text-sm md:text-base">财务建模与测算</div>
                            <div className="text-xs text-slate-500 mt-1.5 font-medium">ROI / NPV / PI</div>
                        </div>
                    </div>

                    {/* 能力 2：市场洞察 (增长绿) */}
                    <div className="bg-emerald-50/60 border border-emerald-100 hover:bg-emerald-50 hover:border-emerald-200 p-6 rounded-3xl flex flex-col justify-between transition-colors duration-300 group cursor-default">
                        <div className="w-12 h-12 rounded-2xl bg-white text-emerald-600 flex items-center justify-center shadow-sm mb-5 group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path></svg>
                        </div>
                        <div>
                            <div className="font-bold text-slate-800 text-sm md:text-base">竞品与市场洞察</div>
                            <div className="text-xs text-slate-500 mt-1.5 font-medium">定性定量市场调研</div>
                        </div>
                    </div>

                    {/* 能力 3：数据分析 (洞察紫) */}
                    <div className="bg-indigo-50/60 border border-indigo-100 hover:bg-indigo-50 hover:border-indigo-200 p-6 rounded-3xl flex flex-col justify-between transition-colors duration-300 group cursor-default">
                        <div className="w-12 h-12 rounded-2xl bg-white text-indigo-600 flex items-center justify-center shadow-sm mb-5 group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path></svg>
                        </div>
                        <div>
                            <div className="font-bold text-slate-800 text-sm md:text-base">数据分析与可视化</div>
                            <div className="text-xs text-slate-500 mt-1.5 font-medium">Tableau / 动态追踪</div>
                        </div>
                    </div>

                    {/* 能力 4：战略策划 (战略橙) */}
                    <div className="bg-orange-50/60 border border-orange-100 hover:bg-orange-50 hover:border-orange-200 p-6 rounded-3xl flex flex-col justify-between transition-colors duration-300 group cursor-default">
                        <div className="w-12 h-12 rounded-2xl bg-white text-orange-600 flex items-center justify-center shadow-sm mb-5 group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        </div>
                        <div>
                            <div className="font-bold text-slate-800 text-sm md:text-base">战略增长策划</div>
                            <div className="text-xs text-slate-500 mt-1.5 font-medium">渠道拓展 / 资产配置</div>
                        </div>
                    </div>

                </div>
            </FadeInSection>

        </div>
    );
};

export default Projects;