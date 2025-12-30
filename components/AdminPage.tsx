
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard, 
  Users, 
  Briefcase, 
  Lightbulb, 
  MessageSquare, 
  Settings, 
  Plus, 
  Search, 
  MoreVertical, 
  ArrowUpRight, 
  CheckCircle2, 
  Clock, 
  AlertCircle,
  LogOut,
  ChevronRight,
  Edit,
  Trash2,
  FileText,
  Eye,
  Save,
  X,
  Image as ImageIcon,
  Globe,
  BellRing,
  ShieldCheck,
  BarChart3,
  Settings2,
  Upload,
  Info,
  Lock,
  ChevronDown,
  Filter,
  UserPlus,
  Mail,
  Key
} from 'lucide-react';
import { Button } from './ui/Button';
import { GenAIImage } from './GenAIImage';

interface AdminPageProps {
  onExit: () => void;
}

type AdminTab = 'dashboard' | 'leads' | 'portfolio' | 'insights' | 'faq' | 'settings';

// --- Utility Components ---

const Sparkline: React.FC<{ data: number[]; color: string }> = ({ data, color }) => {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const points = data.map((d, i) => {
    const x = (i / (data.length - 1)) * 100;
    const y = 100 - ((d - min) / range) * 80 - 10;
    return `${x},${y}`;
  }).join(' ');

  return (
    <svg viewBox="0 0 100 100" className={`w-full h-12 ${color}`}>
      <polyline
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        points={points}
      />
    </svg>
  );
};

const ColumnsIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3v18M3 3h18v18H3z" />
  </svg>
);

// --- Sub-Views ---

const AdminLogin: React.FC<{ onLogin: () => void }> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === 'yeomjw0907@onecation.co.kr' && password === 'Onecation2024!') {
      onLogin();
    } else {
      setError('이메일 또는 비밀번호가 올바르지 않습니다.');
    }
  };

  return (
    <div className="min-h-screen bg-obsidian flex items-center justify-center p-6 relative overflow-hidden font-sans">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.05),transparent_70%)]" />
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="w-full max-w-md relative z-10">
        <div className="bg-white/[0.03] border border-white/5 backdrop-blur-xl p-10 rounded-3xl shadow-2xl">
           <div className="flex flex-col items-center mb-10">
              <div className="w-16 h-16 rounded-full border border-gold flex items-center justify-center mb-6">
                 <Lock className="text-gold" size={32} />
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tighter uppercase">Admin Console</h2>
              <p className="text-white/40 text-xs mt-2 font-kor text-center leading-relaxed">YEOM JW님, 환영합니다.<br/>시스템 접근을 위해 인증을 진행해주세요.</p>
           </div>
           <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                 <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 ml-2">Email Address</label>
                 <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-gold transition-all" placeholder="admin@onecation.co.kr" />
                 </div>
              </div>
              <div className="space-y-2">
                 <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 ml-2">Password</label>
                 <div className="relative">
                    <Key className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-gold transition-all" placeholder="••••••••" />
                 </div>
              </div>
              {error && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-500 text-xs font-kor text-center">{error}</motion.p>}
              <button type="submit" className="w-full bg-gold text-obsidian font-bold py-4 rounded-2xl hover:bg-white transition-colors flex items-center justify-center gap-2">인증 및 로그인 <ArrowUpRight size={18} /></button>
           </form>
        </div>
      </motion.div>
    </div>
  );
};

const DashboardView: React.FC<{ onNavigateLeads: () => void }> = ({ onNavigateLeads }) => (
  <div className="space-y-8 font-kor">
     <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: '누적 리드', value: '42', change: '+12%', icon: Users, color: 'text-lime', trend: [30, 32, 28, 35, 38, 40, 42] },
          { label: '활성 프로젝트', value: '8', change: '안정적', icon: Briefcase, color: 'text-gold', trend: [5, 6, 6, 7, 7, 8, 8] },
          { label: '인사이트 조회', value: '1,240', change: '+24%', icon: Lightbulb, color: 'text-white', trend: [800, 950, 900, 1100, 1050, 1200, 1240] },
          { label: '성공률', value: '98%', change: '+1%', icon: CheckCircle2, color: 'text-lime', trend: [95, 96, 96, 97, 97, 98, 98] },
        ].map((stat, i) => (
          <div key={i} className="bg-white/[0.03] border border-white/5 p-6 rounded-2xl hover:border-gold/20 transition-all flex flex-col justify-between h-48 group">
             <div className="flex justify-between items-start">
                <div className={`p-2 rounded-lg bg-white/5 ${stat.color}`}>
                   <stat.icon size={20} />
                </div>
                <div className="text-right">
                   <span className={`text-xs font-bold ${stat.change.includes('+') ? 'text-lime' : 'text-white/40'}`}>{stat.change}</span>
                </div>
             </div>
             <div className="my-2 opacity-50 group-hover:opacity-100 transition-opacity"><Sparkline data={stat.trend} color={stat.color} /></div>
             <div>
                <h4 className="text-white/40 text-[10px] uppercase tracking-widest mb-1">{stat.label}</h4>
                <p className="text-3xl font-bold text-white tracking-tight">{stat.value}</p>
             </div>
          </div>
        ))}
     </div>
     <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white/[0.02] border border-white/5 rounded-3xl p-8">
           <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-bold">최근 문의 내역</h3>
              <Button variant="secondary" onClick={onNavigateLeads} className="text-xs px-4 py-2">CRM 상세 보기</Button>
           </div>
           <div className="space-y-4">
              {[
                { name: '삼성물산', project: '글로벌 포털 디자인', date: '2시간 전', status: '대기중' },
                { name: '현대자동차', project: '모빌리티 플랫폼', date: '5시간 전', status: '검토중' },
                { name: '아모레퍼시픽', project: '뷰티 SaaS MVP', date: '1일 전', status: '연락완료' },
              ].map((lead, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-transparent hover:border-white/10 transition-all cursor-pointer group" onClick={onNavigateLeads}>
                   <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center font-bold text-xs uppercase">{lead.name[0]}</div>
                      <div>
                         <h5 className="font-bold text-sm text-white group-hover:text-gold transition-colors">{lead.name}</h5>
                         <p className="text-white/30 text-xs">{lead.project}</p>
                      </div>
                   </div>
                   <div className="text-right">
                      <span className="block text-white/40 text-[10px] mb-1">{lead.date}</span>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full border ${lead.status === '대기중' ? 'border-orange-500/30 text-orange-500 bg-orange-500/5' : lead.status === '검토중' ? 'border-blue-500/30 text-blue-500 bg-blue-500/5' : 'border-lime/30 text-lime bg-lime/5'}`}>{lead.status}</span>
                   </div>
                </div>
              ))}
           </div>
        </div>
        <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8">
           <h3 className="text-xl font-bold mb-8">시스템 로그</h3>
           <div className="space-y-6">
              {[
                { label: '새 성공 사례 추가됨', time: '10분 전', icon: Plus },
                { label: 'FAQ 데이터베이스 동기화', time: '1시간 전', icon: Edit },
                { label: '클라우드 백업 완료', time: '2시간 전', icon: CheckCircle2 },
                { label: '트래픽 급증 경보', time: '4시간 전', icon: AlertCircle },
              ].map((activity, i) => (
                <div key={i} className="flex items-start gap-4">
                   <div className="p-2 rounded-lg bg-white/5 text-white/30"><activity.icon size={16} /></div>
                   <div><p className="text-sm font-medium text-white/80 leading-snug">{activity.label}</p><span className="text-[10px] text-white/30 font-mono uppercase">{activity.time}</span></div>
                </div>
              ))}
           </div>
        </div>
     </div>
  </div>
);

const LeadsView = () => {
  const [selectedLead, setSelectedLead] = useState<any>(null);
  const [filter, setFilter] = useState('All');
  const leads = [
    { name: '김민수', type: '프로젝트', info: '테크 스타트업', date: '2024.05.20', status: '대기중', email: 'minsu@tech.com', budget: '3~5천만원', service: 'Web Engineering', message: '혁신적인 핀테크 플랫폼 구축을 위한 파트너를 찾고 있습니다.' },
    { name: '이하나', type: '인재영입', info: '시니어 UI 디자이너', date: '2024.05.19', status: '검토중', email: 'hana@design.io', budget: 'N/A', service: 'Recruit', message: '원케이션의 Obsidian 에스테틱에 깊은 감명을 받았습니다.' },
    { name: '박준호', type: '프로젝트', info: '부동산 플랫폼', date: '2024.05.18', status: '완료', email: 'junho@land.kr', budget: '1억원 이상', service: 'App Platform', message: '프리미엄 주거 단지를 위한 통합 커뮤니티 앱 개발을 의뢰합니다.' },
  ];
  const filteredLeads = useMemo(() => filter === 'All' ? leads : leads.filter(l => l.type === filter || l.status === filter), [filter]);

  return (
    <div className="relative font-kor">
      <div className="bg-white/[0.02] border border-white/5 rounded-3xl overflow-hidden shadow-2xl">
        <div className="p-8 border-b border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
           <div><h3 className="text-xl font-bold">인입 문의 관리 (CRM)</h3><p className="text-white/30 text-xs mt-1">고객의 모든 인입 데이터를 한눈에 분석합니다.</p></div>
           <div className="flex gap-4">
              <div className="relative">
                 <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={14} />
                 <select value={filter} onChange={(e) => setFilter(e.target.value)} className="bg-white/5 border border-white/10 rounded-xl pl-9 pr-4 py-2.5 text-xs focus:outline-none focus:border-gold appearance-none cursor-pointer">
                   <option value="All" className="bg-obsidian">모든 문의</option>
                   <option value="프로젝트" className="bg-obsidian">프로젝트</option>
                   <option value="인재영입" className="bg-obsidian">인재영입</option>
                 </select>
              </div>
              <Button variant="secondary" className="text-xs px-6">내보내기</Button>
           </div>
        </div>
        <table className="w-full text-left">
           <thead>
              <tr className="bg-white/5 text-[10px] uppercase tracking-widest text-white/40">
                 <th className="px-8 py-4 font-bold">고객명</th>
                 <th className="px-8 py-4 font-bold">유형</th>
                 <th className="px-8 py-4 font-bold">회사/분야</th>
                 <th className="px-8 py-4 font-bold">일자</th>
                 <th className="px-8 py-4 font-bold">상태</th>
                 <th className="px-8 py-4 text-right">상세</th>
              </tr>
           </thead>
           <tbody className="divide-y divide-white/5">
              {filteredLeads.map((lead, i) => (
                 <tr key={i} className="hover:bg-white/[0.02] transition-colors group cursor-pointer" onClick={() => setSelectedLead(lead)}>
                    <td className="px-8 py-6"><span className="font-bold text-sm text-white group-hover:text-gold transition-colors">{lead.name}</span><p className="text-[10px] text-white/20 font-mono">{lead.email}</p></td>
                    <td className="px-8 py-6"><span className={`text-[10px] px-2 py-0.5 rounded-full border ${lead.type === '인재영입' ? 'border-lime/30 text-lime bg-lime/5' : 'border-gold/30 text-gold bg-gold/5'}`}>{lead.type}</span></td>
                    <td className="px-8 py-6 text-sm text-white/60">{lead.info}</td>
                    <td className="px-8 py-6 text-xs text-white/30 font-mono">{lead.date}</td>
                    <td className="px-8 py-6"><div className="flex items-center gap-2"><div className={`w-1.5 h-1.5 rounded-full ${lead.status === '대기중' ? 'bg-orange-500' : lead.status === '완료' ? 'bg-lime' : 'bg-blue-500'}`} /><span className="text-xs text-white/80">{lead.status}</span></div></td>
                    <td className="px-8 py-6 text-right text-white/20 group-hover:text-white transition-colors"><Eye size={18} className="inline" /></td>
                 </tr>
              ))}
           </tbody>
        </table>
      </div>
      <AnimatePresence>
        {selectedLead && (
          <div className="fixed inset-0 z-50 flex justify-end">
             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedLead(null)} className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
             <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', damping: 25, stiffness: 200 }} className="relative w-full max-w-lg bg-obsidian border-l border-white/10 h-full overflow-y-auto p-12 shadow-2xl">
                <button onClick={() => setSelectedLead(null)} className="absolute top-8 right-8 p-2 text-white/40 hover:text-white transition-colors"><X size={24} /></button>
                <span className="text-gold text-[10px] font-bold tracking-[0.3em] uppercase block mb-2">{selectedLead.type} 문의 상세</span>
                <h2 className="text-4xl font-bold text-white mb-10 tracking-tighter leading-none">{selectedLead.name}</h2>
                <div className="space-y-10">
                   <div className="grid grid-cols-2 gap-8">
                      <div><label className="text-[10px] text-white/30 uppercase tracking-widest block mb-1">Company</label><p className="font-bold">{selectedLead.info}</p></div>
                      <div><label className="text-[10px] text-white/30 uppercase tracking-widest block mb-1">Budget</label><p className="font-bold text-gold">{selectedLead.budget}</p></div>
                   </div>
                   <div className="h-[1px] bg-white/5" />
                   <div><label className="text-[10px] text-white/30 uppercase tracking-widest block mb-4">Message Content</label><div className="bg-white/5 border border-white/5 p-8 rounded-2xl leading-loose text-white/80 whitespace-pre-wrap italic italic">"{selectedLead.message}"</div></div>
                   <div className="pt-8 flex gap-4"><Button variant="primary" className="flex-grow">답변 발송</Button><Button variant="secondary" className="flex-grow border-white/10">메모 작성</Button></div>
                </div>
             </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Fixed missing closing brace above SystemSettingsView
const FAQManagerView = () => {
  const [isAdding, setIsAdding] = useState(false);
  const [faqs, setFaqs] = useState([
    { cat: '개발', q: '주요 기술 스택이 어떻게 되나요?', a: 'React, Next.js, Node.js를 기반으로 견고한 아키텍처를 구축합니다.' },
    { cat: '전략', q: '정부 지원사업 컨설팅 범위는?', a: '사업계획서 고도화부터 IR 피치덱까지 지원합니다.' },
  ]);
  const [newFaq, setNewFaq] = useState({ cat: '개발', q: '', a: '' });
  const handleAdd = () => { if (newFaq.q && newFaq.a) { setFaqs([...faqs, newFaq]); setIsAdding(false); setNewFaq({ cat: '개발', q: '', a: '' }); } };

  return (
    <div className="space-y-8 font-kor">
      <div className="flex justify-between items-center">
         <div><h3 className="text-xl font-bold">FAQ 데이터베이스</h3><p className="text-white/30 text-xs mt-1">자주 묻는 질문을 추가하고 편집합니다.</p></div>
         <Button variant="primary" onClick={() => setIsAdding(true)} className="text-xs flex items-center gap-2"><Plus size={16} /> FAQ 추가</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         {faqs.map((faq, i) => (
            <div key={i} className="p-8 bg-white/[0.03] border border-white/5 rounded-3xl flex flex-col gap-4 group hover:border-gold/30 transition-all">
               <div className="flex justify-between items-center"><span className="text-[10px] text-gold font-bold uppercase tracking-widest px-2 py-1 bg-gold/5 rounded border border-gold/10">{faq.cat}</span></div>
               <h4 className="font-bold text-white text-lg">Q: {faq.q}</h4><p className="text-sm text-white/40 leading-relaxed">A: {faq.a}</p>
            </div>
         ))}
      </div>
      <AnimatePresence>
         {isAdding && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
               <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsAdding(false)} className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
               <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="relative bg-obsidian border border-white/10 p-10 rounded-3xl w-full max-w-lg shadow-2xl">
                  <h3 className="text-2xl font-bold mb-8">FAQ 추가</h3>
                  <div className="space-y-4">
                     <select value={newFaq.cat} onChange={(e) => setNewFaq({...newFaq, cat: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-sm text-white focus:outline-none focus:border-gold">
                        <option className="bg-obsidian">개발</option><option className="bg-obsidian">디자인</option><option className="bg-obsidian">전략</option>
                     </select>
                     <input type="text" placeholder="질문" value={newFaq.q} onChange={(e) => setNewFaq({...newFaq, q: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-sm text-white" />
                     <textarea rows={4} placeholder="답변" value={newFaq.a} onChange={(e) => setNewFaq({...newFaq, a: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-sm text-white resize-none" />
                     <div className="flex gap-4 pt-4"><Button variant="secondary" onClick={() => setIsAdding(false)} className="flex-grow">취소</Button><Button variant="primary" onClick={handleAdd} className="flex-grow">저장</Button></div>
                  </div>
               </motion.div>
            </div>
         )}
      </AnimatePresence>
   </div>
  );
};

const SystemSettingsView = () => {
  const [admins, setAdmins] = useState([{ name: '염정원', email: 'yeomjw0907@onecation.co.kr', role: 'Super Admin' }]);
  const [isAddingAdmin, setIsAddingAdmin] = useState(false);
  const [newAdmin, setNewAdmin] = useState({ name: '', email: '', role: 'Admin' });

  return (
    <div className="max-w-5xl font-kor">
      <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 mb-8">
         <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
            <h3 className="text-xl font-bold">관리자 계정 관리</h3>
            <Button variant="secondary" onClick={() => setIsAddingAdmin(true)} className="text-xs">계정 추가</Button>
         </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {admins.map((admin, i) => (
               <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-2xl flex justify-between items-center">
                  <div className="flex items-center gap-4"><div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold font-bold text-xs uppercase">{admin.name[0]}</div><div><h5 className="font-bold text-sm">{admin.name}</h5><p className="text-[10px] text-white/30">{admin.email}</p></div></div>
                  <span className="text-[9px] px-2 py-0.5 bg-white/10 rounded-full uppercase">{admin.role}</span>
               </div>
            ))}
         </div>
      </div>
      <AnimatePresence>
         {isAddingAdmin && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
               <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsAddingAdmin(false)} className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
               <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="relative bg-obsidian border border-white/10 p-10 rounded-3xl w-full max-w-md shadow-2xl">
                  <h3 className="text-2xl font-bold mb-8 font-kor text-white">관리자 생성</h3>
                  <div className="space-y-4 font-kor">
                     <input type="text" placeholder="이름" value={newAdmin.name} onChange={(e) => setNewAdmin({...newAdmin, name: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-sm text-white" />
                     <input type="email" placeholder="이메일" value={newAdmin.email} onChange={(e) => setNewAdmin({...newAdmin, email: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-sm text-white" />
                     <div className="flex gap-4 pt-4"><Button variant="secondary" onClick={() => setIsAddingAdmin(false)} className="flex-grow">취소</Button><Button variant="primary" onClick={() => { setAdmins([...admins, newAdmin]); setIsAddingAdmin(false); }} className="flex-grow">생성</Button></div>
                  </div>
               </motion.div>
            </div>
         )}
      </AnimatePresence>
    </div>
  );
};

// Placeholder CMS Views
const PortfolioCMSView: React.FC<{ onAdd: () => void }> = ({ onAdd }) => (
  <div className="space-y-8 font-kor">
     <div className="flex justify-between items-center"><div><h3 className="text-xl font-bold">프로젝트 카탈로그</h3></div><Button variant="primary" onClick={onAdd} className="text-xs">+ 성공 사례 추가</Button></div>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <button onClick={onAdd} className="border-2 border-dashed border-white/5 rounded-2xl flex flex-col items-center justify-center gap-3 py-12 hover:bg-white/5 transition-all text-white/20 hover:text-gold"><Plus size={32} /><span className="text-xs font-bold uppercase tracking-widest">새 프로젝트 생성</span></button>
     </div>
  </div>
);

const InsightsCMSView: React.FC<{ onAdd: () => void }> = ({ onAdd }) => (
  <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 font-kor">
     <div className="flex justify-between items-center mb-10"><h3 className="text-xl font-bold">O-LAB 인사이트</h3><Button variant="primary" onClick={onAdd} className="text-xs">리포트 작성</Button></div>
     <div className="text-center py-20 text-white/20">데이터가 없습니다. 첫 인사이트를 작성해보세요.</div>
  </div>
);

const PostEditor: React.FC<{ type: 'portfolio' | 'insight'; onClose: () => void }> = ({ type, onClose }) => {
  return (
    <div className="max-w-4xl mx-auto font-kor py-20">
      <div className="flex justify-between items-center mb-12"><h2 className="text-3xl font-bold uppercase">{type} EDITOR</h2><button onClick={onClose}><X/></button></div>
      <div className="bg-white/5 p-12 rounded-3xl border border-white/10 text-center text-white/30">콘텐츠 에디터 모듈 로딩 중...</div>
    </div>
  );
};

// --- Main AdminPage Component ---

export const AdminPage: React.FC<AdminPageProps> = ({ onExit }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState<AdminTab>('dashboard');
  const [isEditing, setIsEditing] = useState(false);
  const [editType, setEditType] = useState<'portfolio' | 'insight' | null>(null);

  if (!isLoggedIn) {
    return <AdminLogin onLogin={() => setIsLoggedIn(true)} />;
  }

  const sidebarItems = [
    { id: 'dashboard', label: '대시보드', icon: LayoutDashboard },
    { id: 'leads', label: '문의 관리 (CRM)', icon: Users },
    { id: 'portfolio', label: '포트폴리오 (CMS)', icon: Briefcase },
    { id: 'insights', label: '인사이트 (O-LAB)', icon: Lightbulb },
    { id: 'faq', label: 'FAQ 관리', icon: MessageSquare },
    { id: 'settings', label: '시스템 설정', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white flex font-sans selection:bg-gold/30 selection:text-gold">
      <aside className={`w-64 border-r border-white/5 flex flex-col fixed h-full bg-obsidian z-30 transition-transform duration-500 ${isEditing ? '-translate-x-full' : 'translate-x-0'}`}>
        <div className="p-8 border-b border-white/5"><div className="flex items-center gap-3"><div className="w-8 h-8 rounded-full border border-gold flex items-center justify-center"><span className="text-gold text-[10px] font-bold">OC</span></div><span className="font-bold tracking-tighter text-lg uppercase">Admin Console</span></div></div>
        <nav className="flex-grow p-4 space-y-2 mt-4">
          {sidebarItems.map((item) => (
            <button key={item.id} onClick={() => setActiveTab(item.id as AdminTab)} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group ${activeTab === item.id ? 'bg-gold/10 text-gold border border-gold/20' : 'text-white/40 hover:text-white hover:bg-white/5 border border-transparent'}`}>
              <item.icon size={20} className={activeTab === item.id ? 'text-gold' : 'group-hover:text-white'} /><span className="font-medium text-sm font-kor">{item.label}</span>
              {activeTab === item.id && <motion.div layoutId="active-pill" className="ml-auto w-1 h-4 bg-gold rounded-full" />}
            </button>
          ))}
        </nav>
        <div className="p-6 border-t border-white/5"><button onClick={onExit} className="w-full flex items-center gap-3 px-4 py-3 text-white/40 hover:text-red-400 transition-colors"><LogOut size={20} /><span className="font-medium text-sm font-kor">관리자 종료</span></button></div>
      </aside>

      <main className={`flex-grow p-8 md:p-12 transition-all duration-500 ${isEditing ? 'ml-0' : 'ml-64'}`}>
         {!isEditing ? (
           <>
             <header className="flex justify-between items-center mb-12">
                <div><h1 className="text-3xl font-bold tracking-tight text-white mb-2 uppercase">{sidebarItems.find(i => i.id === activeTab)?.label}</h1><p className="text-white/40 text-sm font-kor">원케이션 관리 시스템에 접속 중입니다.</p></div>
                <div className="flex items-center gap-4"><div className="relative"><Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/20" size={16} /><input type="text" placeholder="검색..." className="bg-white/5 border border-white/10 rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-gold/50 w-64 transition-all font-kor" /></div><div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/20 flex items-center justify-center"><span className="text-gold font-bold text-xs uppercase">Admin</span></div></div>
             </header>
             <AnimatePresence mode="wait">
                <motion.div key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
                   {activeTab === 'dashboard' && <DashboardView onNavigateLeads={() => setActiveTab('leads')} />}
                   {activeTab === 'leads' && <LeadsView />}
                   {activeTab === 'portfolio' && <PortfolioCMSView onAdd={() => {setEditType('portfolio'); setIsEditing(true);}} />}
                   {activeTab === 'insights' && <InsightsCMSView onAdd={() => {setEditType('insight'); setIsEditing(true);}} />}
                   {activeTab === 'faq' && <FAQManagerView />}
                   {activeTab === 'settings' && <SystemSettingsView />}
                </motion.div>
             </AnimatePresence>
           </>
         ) : (
           <PostEditor type={editType!} onClose={() => setIsEditing(false)} />
         )}
      </main>
    </div>
  );
};
