import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { 
  Lock, Unlock, Home, Eye, ShieldCheck, ShieldAlert, MessageSquare, 
  MapPin, Globe, Calendar, RefreshCw, ExternalLink 
} from "lucide-react";

interface VisitorLog {
  id?: string;
  ip: string;
  country: string;
  city: string;
  region: string;
  latitude: string;
  longitude: string;
  user_agent: string;
  consent_action: "accept" | "reject";
  timestamp: string;
}

interface ContactMessage {
  id?: string;
  name: string;
  email: string;
  message: string;
  visitor_log_id?: string | null;
  timestamp: string;
}

interface AnalyticsStats {
  totalPageviews: number;
  accepts: number;
  rejects: number;
  visitors: VisitorLog[];
  messages: ContactMessage[];
}

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [passcode, setPasscode] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [stats, setStats] = useState<AnalyticsStats | null>(null);
  const [activeTab, setActiveTab] = useState<"visitors" | "messages">("visitors");

  // Check if we already have the passcode in session
  useEffect(() => {
    const savedPasscode = sessionStorage.getItem("admin_passcode");
    if (savedPasscode) {
      fetchStats(savedPasscode);
    }
  }, []);

  const fetchStats = async (codeToUse: string) => {
    setLoading(true);
    setErrorMsg("");
    try {
      const apiUrl = import.meta.env.VITE_API_URL || "";
      const res = await fetch(`${apiUrl}/api/admin/stats`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${codeToUse}`,
        },
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setStats(data.stats);
        setIsAuthorized(true);
        sessionStorage.setItem("admin_passcode", codeToUse);
      } else {
        setErrorMsg(data.error || "Incorrect passcode!");
        sessionStorage.removeItem("admin_passcode");
      }
    } catch (err) {
      console.error(err);
      setErrorMsg("Failed to connect to stats API.");
    } finally {
      setLoading(false);
    }
  };

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (!passcode) return;
    fetchStats(passcode);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("admin_passcode");
    setIsAuthorized(false);
    setStats(null);
    setPasscode("");
  };

  const getOptInRate = () => {
    if (!stats || stats.totalPageviews === 0) return 0;
    return Math.round((stats.accepts / stats.totalPageviews) * 100);
  };

  const formatDate = (dateStr: string) => {
    try {
      const d = new Date(dateStr);
      return d.toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch {
      return dateStr;
    }
  };

  // 1. Password Entry screen
  if (!isAuthorized) {
    return (
      <div className="min-h-screen bg-light-blue bg-grid flex items-center justify-center p-4">
        <div className="nachotopia-card bg-white w-full max-w-md overflow-hidden animate-slide-up">
          {/* Header */}
          <div className="bg-peach px-6 py-4 border-b-3 border-[#2A1B28] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3.5 h-3.5 rounded-full bg-rose-400 border-2 border-[#2A1B28]" />
              <div className="w-3.5 h-3.5 rounded-full bg-pink-300 border-2 border-[#2A1B28]" />
              <div className="w-3.5 h-3.5 rounded-full bg-amber-300 border-2 border-[#2A1B28]" />
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 bg-white rounded-xl text-xs font-bold text-[#2A1B28] border-2 border-[#2A1B28] shadow-[2px_2px_0px_0px_#2A1B28]">
              <Lock className="w-3.5 h-3.5" />
              <span>Admin Gatekeeper</span>
            </div>
            <div className="w-8" />
          </div>

          {/* Form Content */}
          <div className="p-8">
            <div className="text-center mb-6">
              <div className="inline-flex p-4 bg-yellow-soft border-3 border-[#2A1B28] rounded-2xl shadow-[4px_4px_0px_0px_#2A1B28] mb-4">
                <Lock className="w-8 h-8 text-[#2A1B28]" />
              </div>
              <h2 className="text-xl font-black text-[#2A1B28]" style={{ fontFamily: "'Fredoka', sans-serif" }}>
                Secret Analytics Vault
              </h2>
              <p className="text-xs text-[#2A1B28]/70 mt-1 font-semibold" style={{ fontFamily: "'Quicksand', sans-serif" }}>
                Please enter your passcode to view visitor statistics.
              </p>
            </div>

            <form onSubmit={handleUnlock} className="space-y-4">
              <div>
                <input
                  type="password"
                  placeholder="Passcode..."
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  disabled={loading}
                  required
                  className="w-full px-4 py-3 bg-white border-3 border-[#2A1B28] rounded-2xl font-black text-center text-[#2A1B28] placeholder-slate-400 focus:outline-none focus:bg-peach/10 shadow-[2px_2px_0px_0px_#2A1B28]"
                  style={{ fontFamily: "'Fredoka', sans-serif" }}
                />
              </div>

              {errorMsg && (
                <p className="text-xs font-bold text-red-500 text-center">{errorMsg}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 p-3 bg-mint border-3 border-[#2A1B28] rounded-2xl shadow-[4px_4px_0px_0px_#2A1B28] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0px_0px_#2A1B28] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all text-sm font-black text-[#2A1B28]"
                style={{ fontFamily: "'Fredoka', sans-serif" }}
              >
                <span>{loading ? "Verifying..." : "Unlock Vault ✿"}</span>
                <Unlock className="w-4 h-4" />
              </button>
            </form>

            <button
              onClick={() => navigate("/")}
              className="mt-6 w-full flex items-center justify-center gap-1.5 text-xs font-bold text-[#2A1B28]/70 hover:text-pink-500 transition-colors"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Back to Portfolio</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // 2. Full Admin Dashboard Screen
  return (
    <div className="min-h-screen bg-light-blue bg-grid p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Navigation / Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-white border-3 border-[#2A1B28] rounded-2xl p-4 shadow-[4px_4px_0px_0px_#2A1B28]">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate("/")}
              className="p-2 bg-peach border-2 border-[#2A1B28] rounded-xl hover:translate-y-[-1px] transition-all shadow-[2px_2px_0px_0px_#2A1B28]"
            >
              <Home className="w-5 h-5 text-[#2A1B28]" />
            </button>
            <div>
              <h1 className="text-xl sm:text-2xl font-black text-[#2A1B28]" style={{ fontFamily: "'Fredoka', sans-serif" }}>
                Secret Garden Dashboard 🦋
              </h1>
              <p className="text-xs text-[#2A1B28]/70 font-semibold" style={{ fontFamily: "'Quicksand', sans-serif" }}>
                Real-time visitor logs and contact form analytics
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={() => fetchStats(sessionStorage.getItem("admin_passcode") || "")}
              disabled={loading}
              className="p-2 bg-yellow-soft border-2 border-[#2A1B28] rounded-xl hover:translate-y-[-1px] transition-all shadow-[2px_2px_0px_0px_#2A1B28] flex items-center gap-1 text-xs font-bold text-[#2A1B28]"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
              <span>Refresh</span>
            </button>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-pink-soft border-2 border-[#2A1B28] rounded-xl hover:translate-y-[-1px] transition-all shadow-[2px_2px_0px_0px_#2A1B28] text-xs font-bold text-[#2A1B28]"
            >
              Lock Vault
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Card 1: Total Visits */}
          <div className="nachotopia-card bg-white p-6 flex items-center gap-4 border-3 border-[#2A1B28] rounded-2xl shadow-[4px_4px_0px_0px_#2A1B28]">
            <div className="p-4 bg-lilac border-2 border-[#2A1B28] rounded-2xl shadow-[2px_2px_0px_0px_#2A1B28]">
              <Eye className="w-7 h-7 text-[#2A1B28]" />
            </div>
            <div>
              <p className="text-xs text-[#2A1B28]/60 font-bold uppercase tracking-wider">Total Pageviews</p>
              <h3 className="text-2xl font-black text-[#2A1B28]" style={{ fontFamily: "'Fredoka', sans-serif" }}>
                {stats?.totalPageviews || 0}
              </h3>
            </div>
          </div>

          {/* Card 2: Cookie Opt-in Rate */}
          <div className="nachotopia-card bg-white p-6 flex items-center gap-4 border-3 border-[#2A1B28] rounded-2xl shadow-[4px_4px_0px_0px_#2A1B28]">
            <div className="p-4 bg-mint border-2 border-[#2A1B28] rounded-2xl shadow-[2px_2px_0px_0px_#2A1B28]">
              <ShieldCheck className="w-7 h-7 text-[#2A1B28]" />
            </div>
            <div>
              <p className="text-xs text-[#2A1B28]/60 font-bold uppercase tracking-wider">Opt-In Consent</p>
              <h3 className="text-2xl font-black text-[#2A1B28]" style={{ fontFamily: "'Fredoka', sans-serif" }}>
                {getOptInRate()}% <span className="text-xs font-normal text-[#2A1B28]/70">({stats?.accepts || 0} accepted)</span>
              </h3>
            </div>
          </div>

          {/* Card 3: Contact Messages */}
          <div className="nachotopia-card bg-white p-6 flex items-center gap-4 border-3 border-[#2A1B28] rounded-2xl shadow-[4px_4px_0px_0px_#2A1B28]">
            <div className="p-4 bg-peach border-2 border-[#2A1B28] rounded-2xl shadow-[2px_2px_0px_0px_#2A1B28]">
              <MessageSquare className="w-7 h-7 text-[#2A1B28]" />
            </div>
            <div>
              <p className="text-xs text-[#2A1B28]/60 font-bold uppercase tracking-wider">Form Messages</p>
              <h3 className="text-2xl font-black text-[#2A1B28]" style={{ fontFamily: "'Fredoka', sans-serif" }}>
                {stats?.messages.length || 0}
              </h3>
            </div>
          </div>
        </div>

        {/* Tab Selection */}
        <div className="bg-white border-3 border-[#2A1B28] rounded-2xl p-2 shadow-[4px_4px_0px_0px_#2A1B28] flex gap-2">
          <button
            onClick={() => setActiveTab("visitors")}
            className={`flex-1 py-3 px-4 rounded-xl text-sm font-black border-2 transition-all flex justify-center items-center gap-2 ${
              activeTab === "visitors"
                ? "bg-[#2A1B28] text-white border-[#2A1B28]"
                : "bg-white text-[#2A1B28] border-transparent hover:bg-slate-50"
            }`}
            style={{ fontFamily: "'Fredoka', sans-serif" }}
          >
            <Globe className="w-4 h-4" />
            <span>Visitor Logs ({stats?.visitors.length || 0})</span>
          </button>
          <button
            onClick={() => setActiveTab("messages")}
            className={`flex-1 py-3 px-4 rounded-xl text-sm font-black border-2 transition-all flex justify-center items-center gap-2 ${
              activeTab === "messages"
                ? "bg-[#2A1B28] text-white border-[#2A1B28]"
                : "bg-white text-[#2A1B28] border-transparent hover:bg-slate-50"
            }`}
            style={{ fontFamily: "'Fredoka', sans-serif" }}
          >
            <MessageSquare className="w-4 h-4" />
            <span>Form Messages ({stats?.messages.length || 0})</span>
          </button>
        </div>

        {/* Content Table / Cards */}
        {activeTab === "visitors" ? (
          <div className="bg-white border-3 border-[#2A1B28] rounded-2xl p-6 shadow-[6px_6px_0px_0px_#2A1B28] overflow-hidden">
            <h3 className="text-lg font-black text-[#2A1B28] mb-4 flex items-center gap-2" style={{ fontFamily: "'Fredoka', sans-serif" }}>
              Recent Visitor Activity
            </h3>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm text-[#2A1B28]">
                <thead>
                  <tr className="border-b-3 border-[#2A1B28] text-xs font-black uppercase tracking-wider">
                    <th className="pb-3 pr-4">Location</th>
                    <th className="pb-3 px-4">IP Address</th>
                    <th className="pb-3 px-4">Choice</th>
                    <th className="pb-3 px-4">Browser/Device</th>
                    <th className="pb-3 pl-4">Timestamp</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#2A1B28]/10 font-medium">
                  {stats?.visitors && stats.visitors.length > 0 ? (
                    stats.visitors.map((visitor, i) => (
                      <tr key={i} className="hover:bg-slate-50 transition-colors">
                        <td className="py-4 pr-4 flex items-start gap-2">
                          <MapPin className="w-4 h-4 text-pink-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-black text-xs sm:text-sm">
                              {visitor.city}, {visitor.region}
                            </p>
                            <p className="text-[10px] text-[#2A1B28]/60 font-bold uppercase flex items-center gap-1">
                              {visitor.country}
                              <a
                                href={`https://www.google.com/maps?q=${visitor.latitude},${visitor.longitude}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-pink-500 hover:text-pink-600 inline-flex items-center gap-0.5 lowercase font-bold"
                              >
                                (map <ExternalLink className="w-2.5 h-2.5" />)
                              </a>
                            </p>
                          </div>
                        </td>
                        <td className="py-4 px-4 font-mono text-xs font-bold">{visitor.ip}</td>
                        <td className="py-4 px-4">
                          {visitor.consent_action === "accept" ? (
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-mint/40 text-emerald-800 border-2 border-emerald-600 rounded-full text-xs font-black">
                              <ShieldCheck className="w-3.5 h-3.5" />
                              <span>Opt-in</span>
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-pink-soft text-rose-800 border-2 border-rose-600 rounded-full text-xs font-black">
                              <ShieldAlert className="w-3.5 h-3.5" />
                              <span>Opt-out</span>
                            </span>
                          )}
                        </td>
                        <td className="py-4 px-4 text-xs text-[#2A1B28]/80 max-w-[200px] truncate" title={visitor.user_agent}>
                          {visitor.user_agent}
                        </td>
                        <td className="py-4 pl-4 text-xs font-bold text-[#2A1B28]/60">
                          {formatDate(visitor.timestamp)}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={5} className="py-8 text-center text-[#2A1B28]/60 font-bold">
                        No visitor logs recorded yet.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="bg-white border-3 border-[#2A1B28] rounded-2xl p-6 shadow-[6px_6px_0px_0px_#2A1B28]">
            <h3 className="text-lg font-black text-[#2A1B28] mb-6 flex items-center gap-2" style={{ fontFamily: "'Fredoka', sans-serif" }}>
              Contact Form Submissions
            </h3>

            <div className="space-y-6">
              {stats?.messages && stats.messages.length > 0 ? (
                stats.messages.map((msg, i) => (
                  <div 
                    key={i} 
                    className="border-3 border-[#2A1B28] rounded-2xl p-5 bg-white shadow-[4px_4px_0px_0px_#2A1B28] hover:translate-y-[-1px] hover:shadow-[5px_5px_0px_0px_#2A1B28] transition-all flex flex-col gap-3"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b-2 border-dashed border-[#2A1B28]/10 pb-3">
                      <div>
                        <h4 className="font-black text-sm sm:text-base text-[#2A1B28]" style={{ fontFamily: "'Fredoka', sans-serif" }}>
                          {msg.name}
                        </h4>
                        <a 
                          href={`mailto:${msg.email}`} 
                          className="text-xs font-bold text-pink-500 hover:text-pink-600 underline"
                        >
                          {msg.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-[#2A1B28]/60 font-bold">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{formatDate(msg.timestamp)}</span>
                      </div>
                    </div>
                    
                    <p className="text-sm font-semibold text-[#2A1B28]/90 whitespace-pre-wrap leading-relaxed" style={{ fontFamily: "'Quicksand', sans-serif" }}>
                      {msg.message}
                    </p>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-[#2A1B28]/60 font-bold">
                  No contact messages received yet.
                </div>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
