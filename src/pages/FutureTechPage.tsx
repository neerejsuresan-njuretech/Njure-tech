import { Sparkles, Code, Cloud, Cpu, ArrowRight, CheckCircle2, Check } from 'lucide-react';
import { FUTURE_ROADMAP, COMPANY_INFO } from '../data/companyData';
import { InteractivePipeline3D } from '../components/3d/InteractivePipeline3D';
import { TiltCard } from '../components/motion/TiltCard';

import { useNavigate } from 'react-router-dom';

interface FutureTechPageProps {
  onNavigate?: (page: string) => void;
}

export const FutureTechPage: React.FC<FutureTechPageProps> = ({ onNavigate }) => {
  const navigate = useNavigate();

  const handleNav = (target: string) => {
    if (onNavigate) onNavigate(target);
    const PATH_MAP: Record<string, string> = {
      'services': '/services',
      'contact': '/contact',
      'home': '/',
    };
    navigate(PATH_MAP[target] || (target.startsWith('/') ? target : `/${target}`));
  };
  return (
    <div className="bg-slate-50 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-2">
            Technology Roadmap
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-4">
            Future Digital Engineering
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            While our active operations focus exclusively on high-touch BPO, {COMPANY_INFO.name} is engineering a phased technology expansion to automate customer workflows via <strong className="font-mono text-blue-700">{COMPANY_INFO.domain}</strong>.
          </p>
        </div>

        {/* Philosophy Card */}
        <div className="bg-white p-8 rounded-lg border border-slate-200 shadow-2xs mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-3">
            Operations First, Automation Second
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed max-w-3xl">
            Pure technology companies often build software in an echo chamber, disconnected from the messy reality of front-line customer support calls, delayed shipments, and complex invoice disputes.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed max-w-3xl mt-3">
            By running hands-on BPO teams today, our operational specialists document exact friction points across helpdesks and spreadsheets. This real-world operational ground truth directly guides our upcoming digital engineering toolsets, API connectors, and automated workflow copilots.
          </p>
        </div>

        {/* Interactive 3D Automation Pipeline Simulation */}
        <div className="mb-16">
          <div className="mb-4">
            <h2 className="text-xl font-bold text-slate-900 mb-1">
              Real-Time Workflow Automation Architecture
            </h2>
            <p className="text-xs text-slate-600">
              Interactive 3D simulation of our upcoming event-driven integration layer connecting customer channels, data extraction, and partner pods.
            </p>
          </div>
          <InteractivePipeline3D />
        </div>

        {/* Roadmap Items */}
        <div className="space-y-8 mb-16">
          <h2 className="text-2xl font-bold text-slate-900">Planned Technology Disciplines</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FUTURE_ROADMAP.map((item, idx) => (
              <TiltCard key={item.id} className="h-full">
                <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-2xs flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded bg-blue-50 text-blue-700 flex items-center justify-center">
                        {idx === 0 && <Code className="w-5 h-5" />}
                        {idx === 1 && <Cloud className="w-5 h-5" />}
                        {idx === 2 && <Cpu className="w-5 h-5" />}
                      </div>
                      <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded">
                        {item.status}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-6">{item.description}</p>

                    <div className="space-y-2 mb-4">
                      <div className="text-[11px] font-semibold text-slate-400 uppercase">Target Capabilities:</div>
                      <ul className="space-y-1.5">
                        {item.capabilities.map((cap, i) => (
                          <li key={i} className="text-xs text-slate-700 flex items-start gap-1.5">
                            <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                            <span>{cap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 text-xs text-slate-400 font-mono">
                    Phased rollout under {COMPANY_INFO.domain}
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>

        {/* Current Operations Callout */}
        <div className="bg-slate-100 border border-slate-200 p-8 rounded-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">
              Need reliable customer support or data operations right now?
            </h3>
            <p className="text-xs text-slate-600">
              Our BPO services are live and accepting new client accounts from our central operations floor.
            </p>
          </div>
          <button
            onClick={() => handleNav('services')}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-blue-700 hover:bg-blue-800 rounded-md transition-colors cursor-pointer shrink-0"
          >
            <span>View Active BPO Services</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
