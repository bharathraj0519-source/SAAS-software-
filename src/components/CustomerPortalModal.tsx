import React, { useState, useEffect } from 'react';
import {
  X,
  User,
  Shield,
  Lock,
  Mail,
  CheckCircle2,
  Clock,
  FileText,
  DollarSign,
  Download,
  Phone,
  Layers,
  Sparkles,
  Bot,
  Globe,
  TrendingUp,
  LogOut,
  ChevronRight,
  Filter,
} from 'lucide-react';
import { storageService } from '../services/storageService';
import type { ProjectEnquiry, AdminSettings } from '../types';

interface CustomerPortalModalProps {
  initialMode: 'user' | 'admin';
  onClose: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const CustomerPortalModal: React.FC<CustomerPortalModalProps> = ({
  initialMode,
  onClose,
  onNavigateSection,
}) => {
  const [currentMode, setCurrentMode] = useState<'user' | 'admin'>(initialMode);
  const [adminAuthenticated, setAdminAuthenticated] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');
  const [authError, setAuthError] = useState('');

  const [enquiries, setEnquiries] = useState<ProjectEnquiry[]>([]);
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [adminSettings] = useState<AdminSettings>(storageService.getAdminSettings());
  const [customerEmail] = useState('founder@innovate.co');
  const [activeCustomerTab, setActiveCustomerTab] = useState<'overview' | 'subscriptions' | 'enquiries'>('overview');

  useEffect(() => {
    setEnquiries(storageService.getEnquiries());
  }, []);

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminPassword === 'blazebyte2026' || adminPassword === 'admin') {
      setAdminAuthenticated(true);
      setAuthError('');
    } else {
      setAuthError('Invalid Admin Passkey. Hint: blazebyte2026');
    }
  };

  const handleUpdateStatus = (id: string, newStatus: ProjectEnquiry['status']) => {
    storageService.updateEnquiryStatus(id, newStatus);
    setEnquiries(storageService.getEnquiries());
  };

  const handleExportEnquiries = () => {
    const jsonStr = JSON.stringify(enquiries, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `blazebyte-enquiries-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const filteredEnquiries = statusFilter === 'All'
    ? enquiries
    : enquiries.filter((item) => item.status === statusFilter);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#181e29] border border-[#2391FF]/30 rounded-2xl w-full max-w-4xl h-[90vh] max-h-[750px] shadow-2xl flex flex-col overflow-hidden relative">
        {/* Header Bar */}
        <div className="px-6 py-4 bg-[#141822] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#202734] border border-[#2391FF]/40 flex items-center justify-center p-1">
              <img
                src="/assets/blazebyte-logo.png"
                alt="BlazeByte"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="text-base font-bold text-white font-['Barlow'] flex items-center gap-2">
                <span>BlazeByte Management Console</span>
                <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded bg-[#2391FF]/20 text-[#2391FF] border border-[#2391FF]/30">
                  {currentMode === 'admin' ? 'Administrative Suite' : 'Customer Workspace'}
                </span>
              </div>
              <div className="text-xs text-[#B7B09E]">
                {currentMode === 'admin'
                  ? 'Role-based access & lead management'
                  : 'Subscription overview & active requests'}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Mode Switcher */}
            <div className="inline-flex items-center p-1 bg-[#202734] rounded-xl border border-white/10">
              <button
                onClick={() => setCurrentMode('user')}
                className={`px-3 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                  currentMode === 'user'
                    ? 'bg-[#2391FF] text-white'
                    : 'text-[#B7B09E] hover:text-white'
                }`}
              >
                <User className="w-3.5 h-3.5" />
                <span>Customer</span>
              </button>
              <button
                onClick={() => setCurrentMode('admin')}
                className={`px-3 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                  currentMode === 'admin'
                    ? 'bg-[#2391FF] text-white'
                    : 'text-[#B7B09E] hover:text-white'
                }`}
              >
                <Shield className="w-3.5 h-3.5" />
                <span>Admin</span>
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-[#B7B09E] hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 bg-[#181e29]">
          {/* USER MODE */}
          {currentMode === 'user' && (
            <div className="space-y-6">
              {/* Account Overview Header */}
              <div className="glass-card p-6 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#2391FF] to-[#005bb5] flex items-center justify-center text-white text-xl font-bold font-['Barlow'] shadow-lg shadow-[#2391FF]/25">
                    AR
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white font-['Barlow']">
                      Arun Kumar (Aura Logistics)
                    </h3>
                    <div className="text-xs text-[#B7B09E] flex items-center gap-2 mt-0.5">
                      <Mail className="w-3.5 h-3.5 text-[#2391FF]" />
                      <span>{customerEmail}</span>
                      <span>•</span>
                      <span className="text-emerald-400 font-medium">Account Active</span>
                    </div>
                  </div>
                </div>

                <div className="text-right sm:text-left">
                  <span className="text-xs text-[#B7B09E] block">Active Primary Plan:</span>
                  <span className="text-sm font-bold text-white px-3 py-1 rounded-lg bg-[#2391FF]/20 text-[#2391FF] border border-[#2391FF]/30 inline-block mt-1">
                    AI Chatbot Plus Tier
                  </span>
                </div>
              </div>

              {/* Customer Workspace Navigation Tabs */}
              <div className="flex items-center gap-2 border-b border-white/10 pb-3">
                {[
                  { id: 'overview', label: 'Dashboard Overview' },
                  { id: 'subscriptions', label: 'Subscriptions & Services' },
                  { id: 'enquiries', label: 'Submitted Project Requests' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveCustomerTab(tab.id as any)}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                      activeCustomerTab === tab.id
                        ? 'bg-[#2391FF] text-white shadow-md shadow-[#2391FF]/20'
                        : 'text-[#B7B09E] hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab 1: Overview */}
              {activeCustomerTab === 'overview' && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <div className="glass-card p-5 rounded-xl border border-white/5">
                    <div className="flex items-center justify-between text-xs text-[#B7B09E] mb-2">
                      <span>Chatbot Allowance</span>
                      <Bot className="w-4 h-4 text-[#2391FF]" />
                    </div>
                    <div className="text-2xl font-bold text-white font-['Barlow']">
                      1,842 / 2,500
                    </div>
                    <div className="text-[11px] text-[#B7B09E] mt-1">
                      73% utilized this monthly cycle
                    </div>
                    <div className="w-full bg-[#202734] h-1.5 rounded-full mt-3 overflow-hidden">
                      <div className="bg-[#2391FF] h-full w-[73%]"></div>
                    </div>
                  </div>

                  <div className="glass-card p-5 rounded-xl border border-white/5">
                    <div className="flex items-center justify-between text-xs text-[#B7B09E] mb-2">
                      <span>Website Status</span>
                      <Globe className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div className="text-2xl font-bold text-white font-['Barlow']">
                      99.98% Uptime
                    </div>
                    <div className="text-[11px] text-emerald-400 mt-1 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Cloudflare Edge Active</span>
                    </div>
                  </div>

                  <div className="glass-card p-5 rounded-xl border border-white/5">
                    <div className="flex items-center justify-between text-xs text-[#B7B09E] mb-2">
                      <span>SEO Crawl Audit</span>
                      <TrendingUp className="w-4 h-4 text-[#2391FF]" />
                    </div>
                    <div className="text-2xl font-bold text-white font-['Barlow']">
                      94 Health Score
                    </div>
                    <div className="text-[11px] text-[#B7B09E] mt-1">
                      27 Scanned • 18 Discovered
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 2: Subscriptions */}
              {activeCustomerTab === 'subscriptions' && (
                <div className="space-y-4">
                  <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white text-base font-['Barlow']">
                          AI Chatbot Plus Plan
                        </span>
                        <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                          Active
                        </span>
                      </div>
                      <div className="text-xs text-[#B7B09E] mt-1">
                        Renewal Date: 1st of next month • WhatsApp lead route active
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        onClose();
                        onNavigateSection('chatbot');
                      }}
                      className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-white/5 hover:bg-[#2391FF] border border-white/10 hover:border-[#2391FF] transition-all"
                    >
                      Manage Plan
                    </button>
                  </div>
                </div>
              )}

              {/* Tab 3: Enquiries */}
              {activeCustomerTab === 'enquiries' && (
                <div className="space-y-3">
                  <div className="text-xs text-[#B7B09E]">
                    Your recent requests and custom plan configurations:
                  </div>
                  {enquiries.slice(0, 2).map((enq) => (
                    <div
                      key={enq.id}
                      className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2 text-xs"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-white font-mono text-sm">{enq.id}</span>
                        <span className="px-2 py-0.5 rounded bg-[#2391FF]/10 text-[#2391FF] font-semibold text-[10px]">
                          {enq.status}
                        </span>
                      </div>
                      <div className="text-white font-medium">{enq.projectType || enq.selectedPlanName}</div>
                      <div className="text-[#B7B09E]">{enq.description}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* ADMIN MODE */}
          {currentMode === 'admin' && (
            <div>
              {!adminAuthenticated ? (
                <div className="max-w-md mx-auto py-12 text-center space-y-5">
                  <div className="w-16 h-16 rounded-2xl bg-[#2391FF]/10 border border-[#2391FF]/30 flex items-center justify-center text-[#2391FF] mx-auto shadow-lg shadow-[#2391FF]/10">
                    <Lock className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white font-['Barlow']">
                      BlazeByte Admin Authentication
                    </h3>
                    <p className="text-xs text-[#B7B09E] mt-1">
                      Enter administrative credentials to inspect client enquiries and system controls.
                    </p>
                  </div>

                  {authError && (
                    <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-xs text-red-400">
                      {authError}
                    </div>
                  )}

                  <form onSubmit={handleAdminLogin} className="space-y-4 text-left">
                    <div>
                      <label className="text-xs font-semibold text-white block mb-1">
                        Admin Passkey
                      </label>
                      <input
                        type="password"
                        required
                        value={adminPassword}
                        onChange={(e) => setAdminPassword(e.target.value)}
                        placeholder="Enter admin password (hint: blazebyte2026)"
                        className="w-full bg-[#202734] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#2391FF]"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl text-xs font-semibold text-white bg-[#2391FF] hover:bg-[#3ea0ff] transition-all shadow-md shadow-[#2391FF]/25 cursor-pointer"
                    >
                      Authenticate Admin Console
                    </button>
                  </form>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Admin Controls Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10">
                    <div>
                      <h3 className="text-lg font-bold text-white font-['Barlow']">
                        Client Inquiries & Custom Proposals
                      </h3>
                      <div className="text-xs text-[#B7B09E]">
                        Total Submissions: {enquiries.length} records recorded
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      {/* Filter by status */}
                      <select
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                        className="bg-[#202734] border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-[#2391FF]"
                      >
                        <option value="All">All Statuses</option>
                        <option value="New">New</option>
                        <option value="In Review">In Review</option>
                        <option value="Contacted">Contacted</option>
                        <option value="Archived">Archived</option>
                      </select>

                      <button
                        onClick={handleExportEnquiries}
                        className="px-3.5 py-1.5 rounded-lg text-xs font-medium text-white bg-white/5 hover:bg-white/10 border border-white/10 flex items-center gap-1.5 cursor-pointer"
                        title="Export JSON Records"
                      >
                        <Download className="w-3.5 h-3.5 text-[#2391FF]" />
                        <span>Export JSON</span>
                      </button>

                      <button
                        onClick={() => setAdminAuthenticated(false)}
                        className="p-1.5 rounded-lg text-[#B7B09E] hover:text-white bg-white/5 hover:bg-white/10"
                        title="Lock Admin Session"
                      >
                        <LogOut className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Enquiries Management Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead>
                        <tr className="border-b border-white/10 text-white">
                          <th className="py-2.5 px-3 font-semibold">Ref ID</th>
                          <th className="py-2.5 px-3 font-semibold">Client / Venture</th>
                          <th className="py-2.5 px-3 font-semibold">Contact (Phone/Mail)</th>
                          <th className="py-2.5 px-3 font-semibold">Requested Scope</th>
                          <th className="py-2.5 px-3 font-semibold">Budget</th>
                          <th className="py-2.5 px-3 font-semibold">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5 text-[#B7B09E]">
                        {filteredEnquiries.map((enq) => (
                          <tr key={enq.id} className="hover:bg-white/[0.02]">
                            <td className="py-3 px-3 font-mono font-medium text-[#2391FF]">
                              {enq.id}
                            </td>
                            <td className="py-3 px-3">
                              <div className="font-semibold text-white">{enq.name}</div>
                              {enq.company && (
                                <div className="text-[10px] text-[#B7B09E]">{enq.company}</div>
                              )}
                            </td>
                            <td className="py-3 px-3">
                              <a
                                href={`https://wa.me/${enq.phone.replace(/[^0-9]/g, '')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-emerald-400 flex items-center gap-1"
                              >
                                <Phone className="w-3 h-3 text-emerald-400" />
                                <span>{enq.phone}</span>
                              </a>
                              <div className="text-[10px] text-[#B7B09E]">{enq.email}</div>
                            </td>
                            <td className="py-3 px-3 max-w-xs">
                              <div className="text-white font-medium truncate">
                                {enq.projectType || enq.selectedPlanName || 'General Enquiry'}
                              </div>
                              <div className="text-[10px] text-[#B7B09E] truncate">
                                {enq.description}
                              </div>
                            </td>
                            <td className="py-3 px-3 text-white">
                              {enq.budgetRange || 'Retainer'}
                            </td>
                            <td className="py-3 px-3">
                              <select
                                value={enq.status}
                                onChange={(e) =>
                                  handleUpdateStatus(enq.id, e.target.value as any)
                                }
                                className={`px-2 py-1 rounded text-[10px] font-semibold border focus:outline-none ${
                                  enq.status === 'New'
                                    ? 'bg-[#2391FF]/20 text-[#2391FF] border-[#2391FF]/40'
                                    : enq.status === 'In Review'
                                    ? 'bg-amber-500/20 text-amber-400 border-amber-500/40'
                                    : enq.status === 'Contacted'
                                    ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40'
                                    : 'bg-white/10 text-[#B7B09E] border-white/20'
                                }`}
                              >
                                <option value="New" className="bg-[#181e29] text-white">
                                  New
                                </option>
                                <option value="In Review" className="bg-[#181e29] text-white">
                                  In Review
                                </option>
                                <option value="Contacted" className="bg-[#181e29] text-white">
                                  Contacted
                                </option>
                                <option value="Archived" className="bg-[#181e29] text-white">
                                  Archived
                                </option>
                              </select>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
