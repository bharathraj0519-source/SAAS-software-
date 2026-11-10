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
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="portal-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div className="glass-panel border border-sky-400/30 rounded-2xl w-full max-w-4xl h-[90vh] max-h-[750px] shadow-2xl flex flex-col overflow-hidden relative">
        {/* Header Bar */}
        <div className="px-6 py-4 bg-slate-100/90 dark:bg-[#141822] border-b border-slate-200 dark:border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-slate-200 dark:bg-[#202734] border border-sky-400/40 flex items-center justify-center p-1">
              <img
                src="/assets/blazebyte-logo.png"
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div id="portal-modal-title" className="text-base font-bold text-[var(--text-heading)] font-['Barlow'] flex items-center gap-2">
                <span>BlazeByte Management Console</span>
                <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded bg-sky-500/10 text-sky-700 dark:text-[#2391FF] border border-sky-500/20">
                  {currentMode === 'admin' ? 'Administrative Suite' : 'Customer Workspace'}
                </span>
              </div>
              <div className="text-xs text-[var(--muted)]">
                {currentMode === 'admin'
                  ? 'Role-based access & lead management'
                  : 'Subscription overview & active requests'}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Mode Switcher */}
            <div role="group" aria-label="Console mode selector" className="inline-flex items-center p-1 bg-slate-200/80 dark:bg-[#202734] rounded-xl border border-slate-300 dark:border-white/10">
              <button
                type="button"
                aria-pressed={currentMode === 'user'}
                onClick={() => setCurrentMode('user')}
                className={`px-3 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                  currentMode === 'user'
                    ? 'bg-sky-600 dark:bg-[#2391FF] text-white shadow-sm'
                    : 'text-[var(--muted)] hover:text-[var(--text-heading)]'
                }`}
              >
                <User className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Customer</span>
              </button>
              <button
                type="button"
                aria-pressed={currentMode === 'admin'}
                onClick={() => setCurrentMode('admin')}
                className={`px-3 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                  currentMode === 'admin'
                    ? 'bg-sky-600 dark:bg-[#2391FF] text-white shadow-sm'
                    : 'text-[var(--muted)] hover:text-[var(--text-heading)]'
                }`}
              >
                <Shield className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Admin</span>
              </button>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close dialog"
              className="p-2 rounded-xl bg-slate-200/80 hover:bg-slate-300 dark:bg-white/5 dark:hover:bg-white/10 text-[var(--muted)] hover:text-[var(--text-heading)] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 bg-transparent">
          {/* USER MODE */}
          {currentMode === 'user' && (
            <div className="space-y-6">
              {/* Account Overview Header */}
              <div className="glass-card p-6 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-sky-600 to-blue-700 flex items-center justify-center text-white text-xl font-bold font-['Barlow'] shadow-lg shadow-sky-600/25">
                    AR
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--text-heading)] font-['Barlow']">
                      Arun Kumar (Aura Logistics)
                    </h3>
                    <div className="text-xs text-[var(--muted)] flex items-center gap-2 mt-0.5">
                      <Mail className="w-3.5 h-3.5 text-sky-600 dark:text-[#2391FF]" aria-hidden="true" />
                      <span>{customerEmail}</span>
                      <span>•</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-medium">Account Active</span>
                    </div>
                  </div>
                </div>

                <div className="text-right sm:text-left">
                  <span className="text-xs text-[var(--muted)] block">Active Primary Plan:</span>
                  <span className="text-sm font-bold text-sky-700 dark:text-[#2391FF] px-3 py-1 rounded-lg bg-sky-500/10 border border-sky-500/20 inline-block mt-1">
                    AI Chatbot Plus Tier
                  </span>
                </div>
              </div>

              {/* Customer Workspace Navigation Tabs */}
              <div role="tablist" aria-label="Customer portal tabs" className="flex items-center gap-2 border-b border-slate-200 dark:border-white/10 pb-3">
                {[
                  { id: 'overview', label: 'Dashboard Overview' },
                  { id: 'subscriptions', label: 'Subscriptions & Services' },
                  { id: 'enquiries', label: 'Submitted Project Requests' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    role="tab"
                    id={`tab-cust-${tab.id}`}
                    aria-selected={activeCustomerTab === tab.id}
                    onClick={() => setActiveCustomerTab(tab.id as any)}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                      activeCustomerTab === tab.id
                        ? 'bg-sky-600 dark:bg-[#2391FF] text-white shadow-md shadow-sky-600/20'
                        : 'text-[var(--muted)] hover:text-[var(--text-heading)] hover:bg-black/5 dark:hover:bg-white/5'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab 1: Overview */}
              {activeCustomerTab === 'overview' && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <div className="glass-card p-5 rounded-xl border border-slate-200 dark:border-white/5">
                    <div className="flex items-center justify-between text-xs text-[var(--muted)] mb-2">
                      <span>Chatbot Allowance</span>
                      <Bot className="w-4 h-4 text-sky-600 dark:text-[#2391FF]" aria-hidden="true" />
                    </div>
                    <div className="text-2xl font-bold text-[var(--text-heading)] font-['Barlow']">
                      1,842 / 2,500
                    </div>
                    <div className="text-[11px] text-[var(--muted)] mt-1">
                      73% utilized this monthly cycle
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-[#202734] h-1.5 rounded-full mt-3 overflow-hidden">
                      <div className="bg-sky-600 dark:bg-[#2391FF] h-full w-[73%]"></div>
                    </div>
                  </div>

                  <div className="glass-card p-5 rounded-xl border border-slate-200 dark:border-white/5">
                    <div className="flex items-center justify-between text-xs text-[var(--muted)] mb-2">
                      <span>Website Status</span>
                      <Globe className="w-4 h-4 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                    </div>
                    <div className="text-2xl font-bold text-[var(--text-heading)] font-['Barlow']">
                      99.98% Uptime
                    </div>
                    <div className="text-[11px] text-emerald-600 dark:text-emerald-400 mt-1 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Cloudflare Edge Active</span>
                    </div>
                  </div>

                  <div className="glass-card p-5 rounded-xl border border-slate-200 dark:border-white/5">
                    <div className="flex items-center justify-between text-xs text-[var(--muted)] mb-2">
                      <span>SEO Crawl Audit</span>
                      <TrendingUp className="w-4 h-4 text-sky-600 dark:text-[#2391FF]" aria-hidden="true" />
                    </div>
                    <div className="text-2xl font-bold text-[var(--text-heading)] font-['Barlow']">
                      94 Health Score
                    </div>
                    <div className="text-[11px] text-[var(--muted)] mt-1">
                      27 Scanned • 18 Discovered
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 2: Subscriptions */}
              {activeCustomerTab === 'subscriptions' && (
                <div className="space-y-4">
                  <div className="p-5 rounded-xl bg-slate-100/80 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-[var(--text-heading)] text-base font-['Barlow']">
                          AI Chatbot Plus Plan
                        </span>
                        <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30">
                          Active
                        </span>
                      </div>
                      <div className="text-xs text-[var(--muted)] mt-1">
                        Renewal Date: 1st of next month • WhatsApp lead route active
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        onClose();
                        onNavigateSection('chatbot');
                      }}
                      className="px-4 py-2 rounded-xl text-xs font-semibold text-[var(--text-heading)] bg-black/5 dark:bg-white/5 hover:bg-sky-600 hover:text-white border border-slate-300 dark:border-white/10 transition-all cursor-pointer"
                    >
                      Manage Plan
                    </button>
                  </div>
                </div>
              )}

              {/* Tab 3: Enquiries */}
              {activeCustomerTab === 'enquiries' && (
                <div className="space-y-3">
                  <div className="text-xs text-[var(--muted)]">
                    Your recent requests and custom plan configurations:
                  </div>
                  {enquiries.slice(0, 2).map((enq) => (
                    <div
                      key={enq.id}
                      className="p-4 rounded-xl bg-slate-100/80 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 space-y-2 text-xs"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-[var(--text-heading)] font-mono text-sm">{enq.id}</span>
                        <span className="px-2 py-0.5 rounded bg-sky-500/10 text-sky-700 dark:text-[#2391FF] font-semibold text-[10px]">
                          {enq.status}
                        </span>
                      </div>
                      <div className="text-[var(--text-heading)] font-medium">{enq.projectType || enq.selectedPlanName}</div>
                      <div className="text-[var(--muted)]">{enq.description}</div>
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
                  <div className="w-16 h-16 rounded-2xl bg-sky-500/10 border border-sky-400/30 flex items-center justify-center text-sky-600 dark:text-[#2391FF] mx-auto shadow-lg shadow-sky-500/10">
                    <Lock className="w-8 h-8" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[var(--text-heading)] font-['Barlow']">
                      BlazeByte Admin Authentication
                    </h3>
                    <p className="text-xs text-[var(--muted)] mt-1">
                      Enter administrative credentials to inspect client enquiries and system controls.
                    </p>
                  </div>

                  {authError && (
                    <div role="alert" className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-xs text-red-600 dark:text-red-400">
                      {authError}
                    </div>
                  )}

                  <form onSubmit={handleAdminLogin} className="space-y-4 text-left">
                    <div>
                      <label htmlFor="admin-passkey" className="text-xs font-semibold text-[var(--text-heading)] block mb-1">
                        Admin Passkey
                      </label>
                      <input
                        id="admin-passkey"
                        type="password"
                        required
                        aria-required="true"
                        value={adminPassword}
                        onChange={(e) => setAdminPassword(e.target.value)}
                        placeholder="Enter admin password (hint: blazebyte2026)"
                        className="w-full bg-white dark:bg-[#202734] border border-slate-300 dark:border-white/10 rounded-xl px-4 py-2.5 text-sm text-[var(--text)] focus:outline-none focus:border-sky-500"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 transition-all shadow-md shadow-sky-600/25 cursor-pointer"
                    >
                      Authenticate Admin Console
                    </button>
                  </form>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Admin Controls Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-white/10">
                    <div>
                      <h3 className="text-lg font-bold text-[var(--text-heading)] font-['Barlow']">
                        Client Inquiries & Custom Proposals
                      </h3>
                      <div className="text-xs text-[var(--muted)]">
                        Total Submissions: {enquiries.length} records recorded
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      {/* Filter by status */}
                      <label htmlFor="admin-status-filter" className="sr-only">Filter enquiries by status</label>
                      <select
                        id="admin-status-filter"
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                        className="bg-white dark:bg-[#202734] border border-slate-300 dark:border-white/10 rounded-lg px-3 py-1.5 text-xs text-[var(--text)] focus:outline-none focus:border-sky-500"
                      >
                        <option value="All">All Statuses</option>
                        <option value="New">New</option>
                        <option value="In Review">In Review</option>
                        <option value="Contacted">Contacted</option>
                        <option value="Archived">Archived</option>
                      </select>

                      <button
                        type="button"
                        onClick={handleExportEnquiries}
                        className="px-3.5 py-1.5 rounded-lg text-xs font-medium text-[var(--text-heading)] bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 border border-slate-300 dark:border-white/10 flex items-center gap-1.5 cursor-pointer"
                        title="Export JSON Records"
                      >
                        <Download className="w-3.5 h-3.5 text-sky-600 dark:text-[#2391FF]" aria-hidden="true" />
                        <span>Export JSON</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setAdminAuthenticated(false)}
                        className="p-1.5 rounded-lg text-[var(--muted)] hover:text-[var(--text-heading)] bg-black/5 dark:bg-white/5 cursor-pointer"
                        aria-label="Lock Admin Session"
                        title="Lock Admin Session"
                      >
                        <LogOut className="w-4 h-4" aria-hidden="true" />
                      </button>
                    </div>
                  </div>

                  {/* Enquiries Management Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs" aria-label="Customer inquiries management">
                      <thead>
                        <tr className="border-b border-slate-200 dark:border-white/10 text-[var(--text-heading)]">
                          <th scope="col" className="py-2.5 px-3 font-semibold">Ref ID</th>
                          <th scope="col" className="py-2.5 px-3 font-semibold">Client / Venture</th>
                          <th scope="col" className="py-2.5 px-3 font-semibold">Contact (Phone/Mail)</th>
                          <th scope="col" className="py-2.5 px-3 font-semibold">Requested Scope</th>
                          <th scope="col" className="py-2.5 px-3 font-semibold">Budget</th>
                          <th scope="col" className="py-2.5 px-3 font-semibold">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 dark:divide-white/5 text-[var(--muted)]">
                        {filteredEnquiries.map((enq) => (
                          <tr key={enq.id} className="hover:bg-black/[0.02] dark:hover:bg-white/[0.02]">
                            <td className="py-3 px-3 font-mono font-medium text-sky-700 dark:text-[#2391FF]">
                              {enq.id}
                            </td>
                            <td className="py-3 px-3">
                              <div className="font-semibold text-[var(--text-heading)]">{enq.name}</div>
                              {enq.company && (
                                <div className="text-[10px] text-[var(--muted)]">{enq.company}</div>
                              )}
                            </td>
                            <td className="py-3 px-3">
                              <a
                                href={`https://wa.me/${enq.phone.replace(/[^0-9]/g, '')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[var(--text-heading)] hover:text-emerald-600 flex items-center gap-1"
                              >
                                <Phone className="w-3 h-3 text-emerald-600" aria-hidden="true" />
                                <span>{enq.phone}</span>
                              </a>
                              <div className="text-[10px] text-[var(--muted)]">{enq.email}</div>
                            </td>
                            <td className="py-3 px-3 max-w-xs">
                              <div className="text-[var(--text-heading)] font-medium truncate">
                                {enq.projectType || enq.selectedPlanName || 'General Enquiry'}
                              </div>
                              <div className="text-[10px] text-[var(--muted)] truncate">
                                {enq.description}
                              </div>
                            </td>
                            <td className="py-3 px-3 text-[var(--text-heading)]">
                              {enq.budgetRange || 'Retainer'}
                            </td>
                            <td className="py-3 px-3">
                              <select
                                aria-label={`Status for enquiry ${enq.id}`}
                                value={enq.status}
                                onChange={(e) =>
                                  handleUpdateStatus(enq.id, e.target.value as any)
                                }
                                className={`px-2 py-1 rounded text-[10px] font-semibold border focus:outline-none ${
                                  enq.status === 'New'
                                    ? 'bg-sky-500/10 text-sky-700 dark:text-[#2391FF] border-sky-500/30'
                                    : enq.status === 'In Review'
                                    ? 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/30'
                                    : enq.status === 'Contacted'
                                    ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/30'
                                    : 'bg-black/5 text-[var(--muted)] border-slate-300'
                                }`}
                              >
                                <option value="New">New</option>
                                <option value="In Review">In Review</option>
                                <option value="Contacted">Contacted</option>
                                <option value="Archived">Archived</option>
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
