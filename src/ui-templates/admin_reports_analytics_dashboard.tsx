export default function AdminReportsAnalyticsDashboard() {
  return (
    <>
<aside className="fixed left-0 top-0 h-full w-72 bg-surface-container-low z-50 flex flex-col justify-between shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="flex flex-col flex-1 min-h-0 pt-6"><div className="px-6 pb-6 flex items-center gap-3"><img alt="Brand logo. - Primary color: #10b981
- Font: plusJakartaSans
- Mode: dark
- Roundness: rounded-md
" className="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1Vgr0DRvF6sQsNjTmXRPKmIT7nueBmM-lDL8uuGg4b9kzW8Z396dKB8uZxIPV3SCuNKOQ9uJT7C33fFqxicHpvUZVeZJlzM5hBRqrI49H03M4ePuuc-BvH_u61u8a1UDmr_FD--HLhLqCx7AG4_BIYN-9qEDF9bXDcBs2gsivlcHCqoezPKgzpGFJtnXR4TAJLb9wUnAQjDoMnExmbqZWPb-Bmk3s9kjNb4pEW0GleH5STJu5I5y8Fe-rU"><div className="flex flex-col"><span className="font-headline-md text-headline-md text-on-surface tracking-tight leading-none">Apex Nexus</span><div className="flex items-center gap-1.5 mt-1"><span className="inline-flex items-center px-1.5 py-0.5 rounded-full bg-primary-container/20 text-primary font-label-sm text-label-sm uppercase">FIPS 140-3</span><span className="font-code-sm text-code-sm text-on-surface-variant">v4.9.2</span></div></div></div><div className="overflow-y-auto flex-1 px-4 space-y-6"><div className="space-y-1"><div className="px-3 pb-2 font-label-sm text-label-sm uppercase tracking-wider text-outline">Main Console</div><nav className="space-y-1" data-active-classes="bg-primary-container text-on-primary-container font-medium rounded-lg shadow-[0_0_16px_rgba(16,185,129,0.25)]"><a className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="admin-dashboard" href="#"><span className="material-symbols-outlined text-[20px]">space_dashboard</span><span className="font-label-md text-label-md">Dashboard</span></a><a className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="purchases-and-entries" href="#"><span className="material-symbols-outlined text-[20px]">receipt_long</span><span className="font-label-md text-label-md">Purchases / Entries</span></a><a aria-current="page" className="flex items-center gap-3 px-3 py-2 transition-colors bg-primary-container text-on-primary-container font-medium rounded-lg shadow-[0_0_16px_rgba(16,185,129,0.25)]" data-path="admin-reports" href="#"><span className="material-symbols-outlined text-[20px]">analytics</span><span className="font-label-md text-label-md">Reports &amp; Analytics</span></a><a className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="supplier-catalog" href="#"><span className="material-symbols-outlined text-[20px]">corporate_fare</span><span className="font-label-md text-label-md">Supplier Catalog</span></a><a className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="product-master-catalog" href="#"><span className="material-symbols-outlined text-[20px]">inventory_2</span><span className="font-label-md text-label-md">Product Catalog</span></a></nav></div><div className="space-y-2"><div className="flex items-center justify-between px-3"><span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Active Suppliers</span><span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span></div><nav className="space-y-1" data-active-classes="bg-surface-container-high text-on-surface rounded-lg"><a className="flex items-center justify-between px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors group" data-path="nordic-freight-corp" href="#"><div className="flex items-center gap-2 truncate"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span><span className="font-body-sm text-body-sm truncate">Nordic Freight Corp</span></div><span className="inline-flex items-center px-2 py-0.5 rounded-full bg-primary-container/20 text-primary font-label-sm text-label-sm">+3 pending</span></a><a className="flex items-center justify-between px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors group" data-path="apex-microfab-inc" href="#"><div className="flex items-center gap-2 truncate"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span><span className="font-body-sm text-body-sm truncate">Apex Microfab Inc</span></div><span className="inline-flex items-center px-2 py-0.5 rounded-full bg-primary-container/20 text-primary font-label-sm text-label-sm">+1 pending</span></a><a className="flex items-center justify-between px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors group" data-path="vanguard-industrial" href="#"><div className="flex items-center gap-2 truncate"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span><span className="font-body-sm text-body-sm truncate">Vanguard Industrial</span></div><span className="inline-flex items-center px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">Synced</span></a><a className="flex items-center justify-between px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors group" data-path="aura-chemicals" href="#"><div className="flex items-center gap-2 truncate"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span><span className="font-body-sm text-body-sm truncate">Aura Chemicals</span></div><span className="inline-flex items-center px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">Synced</span></a></nav></div></div></div><div className="p-4 bg-surface-container-lowest mx-3 mb-4 rounded-xl flex flex-col gap-2.5"><div className="flex items-center justify-between"><div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-primary"></span><span className="font-code-sm text-code-sm text-on-surface font-semibold">Cluster 07-Virginia</span></div><span className="font-label-sm text-label-sm text-primary">Active</span></div><div className="flex items-center justify-between text-on-surface-variant"><span className="font-body-sm text-body-sm">TLS Security</span><span className="font-code-sm text-code-sm text-on-surface">TLS 1.3 Strict</span></div><div className="flex items-center justify-between text-on-surface-variant"><span className="font-body-sm text-body-sm">Gateway API</span><span className="font-label-sm text-label-sm text-primary">Operational</span></div></div></aside><div className="pl-72"><header className="fixed top-0 left-72 right-0 h-16 bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 flex items-center justify-between px-8"><div className="flex items-center gap-4 flex-1 max-w-md"><div className="relative w-full flex items-center"><span className="material-symbols-outlined absolute left-3 text-outline text-[18px]">search</span><input className="w-full h-10 pl-9 pr-12 rounded-lg bg-surface-container-high text-on-surface font-body-sm text-body-sm placeholder:text-outline focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Search entities, records, ledger (Press ⌘K)..." type="text" /><div className="absolute right-2.5 px-1.5 py-0.5 rounded bg-surface-container font-code-sm text-code-sm text-outline">⌘K</div></div></div><div className="flex items-center gap-4"><button className="relative p-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors" type="button"><span className="material-symbols-outlined text-[22px]">notifications</span><span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 rounded-full bg-primary ring-2 ring-surface shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span></button><div className="h-5 w-[1px] bg-surface-container-highest"></div><div className="flex items-center gap-3"><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><span className="material-symbols-outlined text-on-primary text-[18px]">person</span></div><div className="flex flex-col text-left"><span className="font-label-md text-label-md text-on-surface font-semibold leading-tight">Operations Lead</span><span className="font-label-sm text-label-sm text-primary">System Administrator</span></div></div><div className="h-5 w-[1px] bg-surface-container-highest"></div><a className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary-container/20 text-secondary hover:bg-secondary-container/30 transition-colors font-label-md text-label-md" data-path="supplier-portal" href="#"><span className="material-symbols-outlined text-[16px]">swap_horiz</span><span>Supplier Portal</span></a><a className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-on-surface-variant hover:text-error hover:bg-error-container/20 transition-colors font-label-md text-label-md" data-path="auth-login" href="#"><span className="material-symbols-outlined text-[16px]">logout</span><span>Sign Out</span></a></div></header><main className="w-full pt-16 bg-surface"><div className="flex flex-col w-full">
<div className="p-8 space-y-8 max-w-[1720px] mx-auto w-full">
{/*  Top Telemetry & Breadcrumb Row  */}
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
<div className="flex flex-wrap items-center gap-2 text-on-surface-variant font-code-sm text-code-sm">
<span className="hover:text-on-surface transition-colors cursor-pointer">Master Governance</span>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span className="hover:text-on-surface transition-colors cursor-pointer">Intelligence &amp; Audit</span>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span className="text-primary font-medium">Reports &amp; Analytics</span>
</div>
<div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-surface-container-high shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
</span>
<span className="font-code-sm text-code-sm text-on-surface">Cluster 07-Virginia: Analytics Engine Online</span>
<span className="text-outline">/</span>
<span className="font-label-sm text-label-sm text-primary">FIPS 140-3 Active</span>
<span className="text-outline">/</span>
<span className="font-code-sm text-code-sm text-on-surface-variant">Real-time Stream Synced</span>
</div>
</div>
{/*  Header Section  */}
<div className="flex flex-col xl:flex-row xl:items-end justify-between gap-6 pb-2">
<div className="space-y-1.5 max-w-3xl">
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
          Master Reports &amp; Financial Intelligence
        </h1>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
          Cross-supplier spend auditing, cryptographic consensus throughput, rate indexation variance, and regulatory export pipelines across distributed sovereign clusters.
        </p>
</div>
{/*  Action Controls  */}
<div className="flex flex-wrap items-center gap-3">
{/*  Date Selector  */}
<div className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-surface-container-high hover:bg-surface-bright transition-colors cursor-pointer shadow-sm">
<span className="material-symbols-outlined text-primary text-[18px]">calendar_today</span>
<span className="font-label-md text-label-md text-on-surface">Current Fiscal Q4 (Oct 1 - Dec 31, 2024)</span>
<span className="material-symbols-outlined text-outline text-[16px]">expand_more</span>
</div>
{/*  Comparison Toggle  */}
<div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-surface-container-high shadow-sm">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">vs Q3</span>
<button aria-pressed="true" className="w-8 h-4 bg-primary-container rounded-full relative flex items-center p-0.5 transition-colors" type="button">
<span className="w-3 h-3 rounded-full bg-surface shadow transform translate-x-4 transition-transform"></span>
</button>
</div>
{/*  Schedule Audit  */}
<button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-container-high text-on-surface hover:bg-surface-bright transition-colors font-label-md text-label-md shadow-sm" type="button">
<span className="material-symbols-outlined text-secondary text-[18px]">schedule</span>
<span>Schedule Automated Audit</span>
</button>
{/*  Export Dossier  */}
<button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-container text-on-primary-container hover:opacity-95 font-label-md text-label-md shadow-md transition-all" type="button">
<span className="material-symbols-outlined text-[18px]">file_download</span>
<span>Export Dossier (PDF/CSV/FIPS)</span>
</button>
</div>
</div>
{/*  Top KPI Row (4 Cards)  */}
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
{/*  KPI 1  */}
<div className="p-5 rounded-xl bg-surface-container shadow-md flex flex-col justify-between space-y-4">
<div className="flex items-start justify-between">
<div className="space-y-1">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Total Procurement Volume</span>
<div className="flex items-baseline gap-2">
<span className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">$8.42M</span>
<span className="font-code-sm text-code-sm text-primary font-semibold">+18.4% YoY</span>
</div>
</div>
<div className="p-2 rounded-lg bg-surface-container-high text-primary">
<span className="material-symbols-outlined text-[20px]">account_balance</span>
</div>
</div>
{/*  Mini Sparkline / Trend Graph  */}
<div className="space-y-2">
<div className="h-10 w-full flex items-end justify-between gap-1.5 pt-2">
<div className="flex-1 flex flex-col items-center gap-1 group">
<div className="w-full bg-surface-container-high group-hover:bg-primary/40 rounded-t h-4 transition-all"></div>
<span className="font-code-sm text-[10px] text-outline">Jul</span>
</div>
<div className="flex-1 flex flex-col items-center gap-1 group">
<div className="w-full bg-surface-container-high group-hover:bg-primary/50 rounded-t h-6 transition-all"></div>
<span className="font-code-sm text-[10px] text-outline">Aug</span>
</div>
<div className="flex-1 flex flex-col items-center gap-1 group">
<div className="w-full bg-surface-container-high group-hover:bg-primary/70 rounded-t h-7 transition-all"></div>
<span className="font-code-sm text-[10px] text-outline">Sep</span>
</div>
<div className="flex-1 flex flex-col items-center gap-1 group">
<div className="w-full bg-primary-container rounded-t h-9 transition-all"></div>
<span className="font-code-sm text-[10px] text-primary font-semibold">Oct</span>
</div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant truncate">
            Across 38 verified supply partners • Net 30 ACH settlement
          </p>
</div>
</div>
{/*  KPI 2  */}
<div className="p-5 rounded-xl bg-surface-container shadow-md flex flex-col justify-between space-y-4">
<div className="flex items-start justify-between">
<div className="space-y-1">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Avg Settlement Velocity</span>
<div className="flex items-baseline gap-2">
<span className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">1.6 Days</span>
<span className="font-code-sm text-code-sm text-on-surface-variant">Target &lt;2.0d</span>
</div>
</div>
<div className="p-2 rounded-lg bg-surface-container-high text-primary">
<span className="material-symbols-outlined text-[20px]">bolt</span>
</div>
</div>
<div className="space-y-2">
<div className="flex items-center justify-between">
<span className="px-2 py-0.5 rounded-full bg-primary-container/20 text-primary font-label-sm text-label-sm">
              98.8% Within SLA
            </span>
<span className="font-code-sm text-code-sm text-on-surface-variant">Δ -0.4d vs Target</span>
</div>
<div className="w-full h-1.5 bg-surface-container-high rounded-full overflow-hidden">
<div className="h-full bg-primary rounded-full" style="width: 82%;"></div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant truncate">
            28% faster than industry benchmark • 0 escrow breaches
          </p>
</div>
</div>
{/*  KPI 3  */}
<div className="p-5 rounded-xl bg-surface-container shadow-md flex flex-col justify-between space-y-4">
<div className="flex items-start justify-between">
<div className="space-y-1">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Cryptographic Quorum Yield</span>
<div className="flex items-baseline gap-2">
<span className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">99.4%</span>
<span className="font-code-sm text-code-sm text-secondary">Multi-Sig</span>
</div>
</div>
<div className="p-2 rounded-lg bg-surface-container-high text-secondary">
<span className="material-symbols-outlined text-[20px]">verified_user</span>
</div>
</div>
<div className="space-y-2">
<div className="flex items-center justify-between">
<span className="px-2 py-0.5 rounded-full bg-secondary-container/30 text-secondary font-label-sm text-label-sm">
              Zero Forensic Divergence
            </span>
<span className="font-code-sm text-code-sm text-on-surface-variant">2,884 Attestations</span>
</div>
<div className="w-full h-1.5 bg-surface-container-high rounded-full overflow-hidden">
<div className="h-full bg-secondary rounded-full" style="width: 99.4%;"></div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant truncate">
            412 entries attested • 2,884 node signatures verified
          </p>
</div>
</div>
{/*  KPI 4  */}
<div className="p-5 rounded-xl bg-surface-container shadow-md flex flex-col justify-between space-y-4">
<div className="flex items-start justify-between">
<div className="space-y-1">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Algorithmic Rate Variance</span>
<div className="flex items-baseline gap-2">
<span className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">-3.2%</span>
<span className="font-code-sm text-code-sm text-tertiary">Indexed</span>
</div>
</div>
<div className="p-2 rounded-lg bg-surface-container-high text-tertiary">
<span className="material-symbols-outlined text-[20px]">ssid_chart</span>
</div>
</div>
<div className="space-y-2">
<div className="flex items-center justify-between">
<span className="px-2 py-0.5 rounded-full bg-primary-container/20 text-primary font-label-sm text-label-sm">
              $274,500 Hedged Savings
            </span>
<span className="font-code-sm text-code-sm text-on-surface-variant">Tripartite Peg</span>
</div>
<div className="w-full h-1.5 bg-surface-container-high rounded-full overflow-hidden">
<div className="h-full bg-tertiary rounded-full" style="width: 74%;"></div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant truncate">
            Dynamic fuel &amp; grid indexation active • Tripartite peg verified
          </p>
</div>
</div>
</div>
{/*  Main Two-Column Analytics Layout  */}
<div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
{/*  LEFT COLUMN (65% -> 8 of 12 cols)  */}
<div className="xl:col-span-8 space-y-8 min-w-0">
{/*  CARD 1: Multi-Month Spend & Inbound Dispatches Trend Chart  */}
<div className="p-6 rounded-xl bg-surface-container shadow-md space-y-6">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div className="space-y-1">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-primary"></span>
<h2 className="font-headline-md text-headline-md text-on-surface">Multi-Month Spend &amp; Inbound Dispatches Trend</h2>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                Categorized capital commitment against target forecast envelopes.
              </p>
</div>
{/*  Granularity Tabs  */}
<div className="flex items-center p-1 rounded-lg bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">
<button className="px-3 py-1 rounded-md text-on-surface hover:text-on-surface transition-colors">Trailing 30D</button>
<button className="px-3 py-1 rounded-md bg-primary-container text-on-primary-container font-semibold transition-colors">Current Q4</button>
<button className="px-3 py-1 rounded-md hover:text-on-surface transition-colors">Year-to-Date</button>
<button className="px-3 py-1 rounded-md hover:text-on-surface transition-colors">Trailing 12M</button>
</div>
</div>
{/*  Synthetic Analytical SVG Chart  */}
<div className="space-y-4">
<div className="relative w-full h-72 bg-surface-container-low rounded-xl p-4 flex flex-col justify-between overflow-hidden">
{/*  Subtle Background Guidelines  */}
<div className="absolute inset-x-4 top-8 border-b border-surface-container-high/40 flex justify-between">
<span className="font-code-sm text-[10px] text-outline -translate-y-4">$3.5M</span>
</div>
<div className="absolute inset-x-4 top-24 border-b border-surface-container-high/40 flex justify-between">
<span className="font-code-sm text-[10px] text-outline -translate-y-4">$2.5M</span>
</div>
<div className="absolute inset-x-4 top-40 border-b border-surface-container-high/40 flex justify-between">
<span className="font-code-sm text-[10px] text-outline -translate-y-4">$1.5M</span>
</div>
<div className="absolute inset-x-4 top-56 border-b border-surface-container-high/40 flex justify-between">
<span className="font-code-sm text-[10px] text-outline -translate-y-4">$0.5M</span>
</div>
{/*  Inline SVG Graph (Stacked bars + settlement line projection)  */}
<svg className="w-full h-full relative z-10 overflow-visible" preserveAspectRatio="none" viewBox="0 0 700 220">
{/*  Stacked Bars (Month 1: Jul)  */}
<g className="transition-opacity hover:opacity-85 cursor-pointer">
<rect fill="#00b2d0" height="40" rx="2" width="46" x="50" y="160"></rect>
<rect fill="#3626ce" height="30" rx="2" width="46" x="50" y="130"></rect>
<rect fill="#4cd7f6" height="35" rx="2" width="46" x="50" y="95"></rect>
<rect fill="#10b981" height="50" rx="2" width="46" x="50" y="45"></rect>
</g>
{/*  Stacked Bars (Month 2: Aug)  */}
<g className="transition-opacity hover:opacity-85 cursor-pointer">
<rect fill="#00b2d0" height="50" rx="2" width="46" x="220" y="150"></rect>
<rect fill="#3626ce" height="35" rx="2" width="46" x="220" y="115"></rect>
<rect fill="#4cd7f6" height="40" rx="2" width="46" x="220" y="75"></rect>
<rect fill="#10b981" height="50" rx="2" width="46" x="220" y="25"></rect>
</g>
{/*  Stacked Bars (Month 3: Sep)  */}
<g className="transition-opacity hover:opacity-85 cursor-pointer">
<rect fill="#00b2d0" height="55" rx="2" width="46" x="390" y="145"></rect>
<rect fill="#3626ce" height="40" rx="2" width="46" x="390" y="105"></rect>
<rect fill="#4cd7f6" height="40" rx="2" width="46" x="390" y="65"></rect>
<rect fill="#10b981" height="47" rx="2" width="46" x="390" y="18"></rect>
</g>
{/*  Stacked Bars (Month 4: Current Oct - Active Spike)  */}
<g className="transition-opacity hover:opacity-85 cursor-pointer">
<rect fill="#00b2d0" height="60" rx="2" width="46" x="560" y="140"></rect>
<rect fill="#3626ce" height="45" rx="2" width="46" x="560" y="95"></rect>
<rect fill="#4cd7f6" height="45" rx="2" width="46" x="560" y="50"></rect>
<rect fill="#10b981" height="45" rx="2" width="46" x="560" y="5"></rect>
</g>
{/*  Budget Target Envelope Line (Dashed)  */}
<path d="M 40,35 L 210,30 L 380,24 L 550,15 L 680,12" fill="none" opacity="0.6" stroke="#bbcabf" stroke-dasharray="4 4" stroke-width="1.5"></path>
{/*  Settlement Velocity Line (Vibrant Cyan curve with markers)  */}
<path d="M 73,70 C 145,55 180,48 243,45 C 310,42 350,38 413,32 C 480,26 530,20 583,14" fill="none" stroke="#4cd7f6" stroke-width="2.5"></path>
<circle cx="73" cy="70" fill="#121318" r="4" stroke="#4cd7f6" stroke-width="2"></circle>
<circle cx="243" cy="45" fill="#121318" r="4" stroke="#4cd7f6" stroke-width="2"></circle>
<circle cx="413" cy="32" fill="#121318" r="4" stroke="#4cd7f6" stroke-width="2"></circle>
<circle cx="583" cy="14" fill="#4edea3" r="5" stroke="#121318" stroke-width="2"></circle>
</svg>
{/*  Month Bottom Labels  */}
<div className="flex justify-between px-10 text-on-surface-variant font-code-sm text-code-sm pt-2">
<span>Jul 2024</span>
<span>Aug 2024</span>
<span>Sep 2024</span>
<span className="text-primary font-semibold">Oct 2024 (Active)</span>
</div>
</div>
{/*  Chart Taxonomy Legend  */}
<div className="flex flex-wrap items-center justify-between gap-4 pt-1">
<div className="flex flex-wrap items-center gap-4 text-on-surface font-body-sm text-body-sm">
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-sm bg-primary-container"></span>
<span>Cryogenic Gas &amp; Storage ($3.4M)</span>
</div>
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-sm bg-tertiary"></span>
<span>HazMat Haulage ($2.8M)</span>
</div>
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-sm bg-secondary-container"></span>
<span>Secure Vaulting ($1.3M)</span>
</div>
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-sm bg-tertiary-container"></span>
<span>Precision Hardware ($0.92M)</span>
</div>
</div>
<div className="flex items-center gap-3 font-code-sm text-code-sm text-on-surface-variant">
<div className="flex items-center gap-1.5">
<span className="w-4 h-0.5 bg-outline"></span>
<span>Projected Limit</span>
</div>
<div className="flex items-center gap-1.5">
<span className="w-4 h-0.5 bg-tertiary"></span>
<span>Settlement Curve</span>
</div>
</div>
</div>
{/*  Anomaly / Peak Insight Banner  */}
<div className="p-3.5 rounded-lg bg-surface-container-high flex items-center gap-3">
<span className="material-symbols-outlined text-primary text-[20px] shrink-0">insights</span>
<p className="font-body-sm text-body-sm text-on-surface">
<strong className="text-primary font-semibold">Telemetry Insight:</strong> Peak dispatch volume detected on Oct 24 due to <span className="text-secondary font-medium">Project Borealis</span> cryogenic deliveries. All batches reconciled through 2,884 multi-sig consensus blocks.
              </p>
</div>
</div>
</div>
{/*  CARD 2: Supplier Spend & Fulfillment Matrix (Interactive Data Table)  */}
<div className="p-6 rounded-xl bg-surface-container shadow-md space-y-6">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div className="space-y-1">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[20px]">corporate_fare</span>
<h2 className="font-headline-md text-headline-md text-on-surface">Supply Partner Performance &amp; Financial Audit Ledger</h2>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                Audited transaction volume, SLA conformance, and cold-wallet signature verification.
              </p>
</div>
{/*  Quick Filter Chips  */}
<div className="flex flex-wrap items-center gap-2">
<button className="px-3 py-1 rounded-full bg-primary-container text-on-primary-container font-label-sm text-label-sm font-semibold">
                All Partners (38)
              </button>
<button className="px-3 py-1 rounded-full bg-surface-container-high text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm">
                Tier 1 Strategic (12)
              </button>
<button className="px-3 py-1 rounded-full bg-surface-container-high text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm">
                HazMat Certified (18)
              </button>
<button className="px-3 py-1 rounded-full bg-surface-container-high text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm">
                Flagged Discrepancy (0)
              </button>
</div>
</div>
{/*  Table Container  */}
<div className="overflow-x-auto">
<table className="w-full text-left font-body-sm text-body-sm">
<thead>
<tr className="bg-surface-container-low text-outline font-label-sm text-label-sm uppercase tracking-wider">
<th className="py-3 px-4 rounded-l-lg">Supplier &amp; DUNS</th>
<th className="py-3 px-3">Spend (Q4)</th>
<th className="py-3 px-3">Invoices</th>
<th className="py-3 px-3">SLA Delivery</th>
<th className="py-3 px-3">Cryptographic Integrity</th>
<th className="py-3 px-3">Avg Settlement</th>
<th className="py-3 px-3">Compliance Risk</th>
<th className="py-3 px-4 text-right rounded-r-lg">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-surface-container-high/40">
{/*  Row 1  */}
<tr className="hover:bg-surface-container-high/50 transition-colors group">
<td className="py-3.5 px-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-primary font-bold font-code-sm text-code-sm">
                        NF
                      </div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold group-hover:text-primary transition-colors">Nordic Freight Corp</span>
<span className="font-code-sm text-[11px] text-outline">VND-8841-NFC • Oslo</span>
</div>
</div>
</td>
<td className="py-3.5 px-3 font-code-sm text-on-surface font-medium">$1,424,800</td>
<td className="py-3.5 px-3 font-code-sm text-on-surface">18 Inv</td>
<td className="py-3.5 px-3">
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-primary"></span>
<span className="font-code-sm text-on-surface">100%</span>
</div>
</td>
<td className="py-3.5 px-3">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary-container/20 text-primary font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[13px]">verified</span> 100% Attested
                    </span>
</td>
<td className="py-3.5 px-3 font-code-sm text-on-surface">1.8 Days</td>
<td className="py-3.5 px-3">
<span className="inline-flex items-center px-2 py-0.5 rounded bg-surface-container-high text-primary font-code-sm text-[11px]">
                      Low (0.02)
                    </span>
</td>
<td className="py-3.5 px-4 text-right">
<button className="px-2.5 py-1 rounded bg-surface-container-high hover:bg-primary hover:text-on-primary font-label-sm text-label-sm text-on-surface transition-all">
                      Inspect
                    </button>
</td>
</tr>
{/*  Row 2  */}
<tr className="hover:bg-surface-container-high/50 transition-colors group">
<td className="py-3.5 px-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-primary font-bold font-code-sm text-code-sm">
                        AM
                      </div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold group-hover:text-primary transition-colors">Apex Microfab Inc</span>
<span className="font-code-sm text-[11px] text-outline">VND-9921-AMF • Austin</span>
</div>
</div>
</td>
<td className="py-3.5 px-3 font-code-sm text-on-surface font-medium">$2,180,500</td>
<td className="py-3.5 px-3 font-code-sm text-on-surface">24 Inv</td>
<td className="py-3.5 px-3">
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-primary"></span>
<span className="font-code-sm text-on-surface">99.2%</span>
</div>
</td>
<td className="py-3.5 px-3">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary-container/20 text-primary font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[13px]">verified</span> 100% Attested
                    </span>
</td>
<td className="py-3.5 px-3 font-code-sm text-on-surface">1.4 Days</td>
<td className="py-3.5 px-3">
<span className="inline-flex items-center px-2 py-0.5 rounded bg-surface-container-high text-primary font-code-sm text-[11px]">
                      Low (0.01)
                    </span>
</td>
<td className="py-3.5 px-4 text-right">
<button className="px-2.5 py-1 rounded bg-surface-container-high hover:bg-primary hover:text-on-primary font-label-sm text-label-sm text-on-surface transition-all">
                      Inspect
                    </button>
</td>
</tr>
{/*  Row 3  */}
<tr className="hover:bg-surface-container-high/50 transition-colors group">
<td className="py-3.5 px-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-secondary font-bold font-code-sm text-code-sm">
                        VI
                      </div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold group-hover:text-primary transition-colors">Vanguard Industrial</span>
<span className="font-code-sm text-[11px] text-outline">VND-6614-VGD • Frankfurt</span>
</div>
</div>
</td>
<td className="py-3.5 px-3 font-code-sm text-on-surface font-medium">$1,890,200</td>
<td className="py-3.5 px-3 font-code-sm text-on-surface">16 Inv</td>
<td className="py-3.5 px-3">
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span className="font-code-sm text-on-surface">97.8%</span>
</div>
</td>
<td className="py-3.5 px-3">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary-container/20 text-primary font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[13px]">verified</span> 100% Attested
                    </span>
</td>
<td className="py-3.5 px-3 font-code-sm text-on-surface">1.9 Days</td>
<td className="py-3.5 px-3">
<span className="inline-flex items-center px-2 py-0.5 rounded bg-surface-container-high text-secondary font-code-sm text-[11px]">
                      Medium (0.08)
                    </span>
</td>
<td className="py-3.5 px-4 text-right">
<button className="px-2.5 py-1 rounded bg-surface-container-high hover:bg-primary hover:text-on-primary font-label-sm text-label-sm text-on-surface transition-all">
                      Inspect
                    </button>
</td>
</tr>
{/*  Row 4  */}
<tr className="hover:bg-surface-container-high/50 transition-colors group">
<td className="py-3.5 px-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-primary font-bold font-code-sm text-code-sm">
                        AC
                      </div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold group-hover:text-primary transition-colors">Aura Chemicals</span>
<span className="font-code-sm text-[11px] text-outline">VND-3349-ACH • Zurich</span>
</div>
</div>
</td>
<td className="py-3.5 px-3 font-code-sm text-on-surface font-medium">$945,000</td>
<td className="py-3.5 px-3 font-code-sm text-on-surface">11 Inv</td>
<td className="py-3.5 px-3">
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-primary"></span>
<span className="font-code-sm text-on-surface">98.5%</span>
</div>
</td>
<td className="py-3.5 px-3">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary-container/20 text-primary font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[13px]">verified</span> 100% Attested
                    </span>
</td>
<td className="py-3.5 px-3 font-code-sm text-on-surface">1.5 Days</td>
<td className="py-3.5 px-3">
<span className="inline-flex items-center px-2 py-0.5 rounded bg-surface-container-high text-primary font-code-sm text-[11px]">
                      Low (0.03)
                    </span>
</td>
<td className="py-3.5 px-4 text-right">
<button className="px-2.5 py-1 rounded bg-surface-container-high hover:bg-primary hover:text-on-primary font-label-sm text-label-sm text-on-surface transition-all">
                      Inspect
                    </button>
</td>
</tr>
{/*  Row 5  */}
<tr className="hover:bg-surface-container-high/50 transition-colors group">
<td className="py-3.5 px-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-primary font-bold font-code-sm text-code-sm">
                        OC
                      </div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold group-hover:text-primary transition-colors">Orbital Cryo Systems</span>
<span className="font-code-sm text-[11px] text-outline">VND-1102-OCS • Stockholm</span>
</div>
</div>
</td>
<td className="py-3.5 px-3 font-code-sm text-on-surface font-medium">$785,400</td>
<td className="py-3.5 px-3 font-code-sm text-on-surface">9 Inv</td>
<td className="py-3.5 px-3">
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-primary"></span>
<span className="font-code-sm text-on-surface">99.5%</span>
</div>
</td>
<td className="py-3.5 px-3">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary-container/20 text-primary font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[13px]">verified</span> 100% Attested
                    </span>
</td>
<td className="py-3.5 px-3 font-code-sm text-on-surface">1.7 Days</td>
<td className="py-3.5 px-3">
<span className="inline-flex items-center px-2 py-0.5 rounded bg-surface-container-high text-primary font-code-sm text-[11px]">
                      Low (0.02)
                    </span>
</td>
<td className="py-3.5 px-4 text-right">
<button className="px-2.5 py-1 rounded bg-surface-container-high hover:bg-primary hover:text-on-primary font-label-sm text-label-sm text-on-surface transition-all">
                      Inspect
                    </button>
</td>
</tr>
</tbody>
</table>
</div>
{/*  Table Footer Pagination  */}
<div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-surface-container-high/60">
<span className="font-body-sm text-body-sm text-on-surface-variant">
              Showing 1-5 of 38 verified partners
            </span>
<div className="flex items-center gap-2">
<button className="p-1.5 rounded-lg bg-surface-container-high text-outline hover:text-on-surface disabled:opacity-30" disabled="">
<span className="material-symbols-outlined text-[18px]">chevron_left</span>
</button>
<div className="flex items-center gap-1 font-code-sm text-code-sm">
<span className="px-2.5 py-1 rounded bg-primary-container text-on-primary-container font-semibold">1</span>
<span className="px-2.5 py-1 rounded hover:bg-surface-container-high text-on-surface-variant cursor-pointer">2</span>
<span className="px-2.5 py-1 rounded hover:bg-surface-container-high text-on-surface-variant cursor-pointer">3</span>
<span className="text-outline">...</span>
<span className="px-2.5 py-1 rounded hover:bg-surface-container-high text-on-surface-variant cursor-pointer">8</span>
</div>
<button className="p-1.5 rounded-lg bg-surface-container-high text-on-surface hover:bg-surface-bright">
<span className="material-symbols-outlined text-[18px]">chevron_right</span>
</button>
</div>
</div>
</div>
</div>
{/*  RIGHT COLUMN (35% -> 4 of 12 cols)  */}
<div className="xl:col-span-4 space-y-8 min-w-0">
{/*  CARD 3: Spend Distribution by Deliverable Taxonomy  */}
<div className="p-6 rounded-xl bg-surface-container shadow-md space-y-6">
<div className="space-y-1">
<div className="flex items-center justify-between">
<h2 className="font-headline-md text-headline-md text-on-surface">Deliverable Taxonomy</h2>
<span className="material-symbols-outlined text-outline text-[18px]">pie_chart</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Capital allocation across supply specifications.</p>
</div>
{/*  Synthetic Donut Visualization (Inline SVG)  */}
<div className="flex items-center justify-center py-2">
<div className="relative w-48 h-48 flex items-center justify-center">
<svg className="w-full h-full -rotate-90 transform" viewBox="0 0 120 120">
<circle cx="60" cy="60" fill="transparent" r="48" stroke="#10b981" stroke-dasharray="123.7 301.6" stroke-dashoffset="0" stroke-width="12"></circle>
<circle cx="60" cy="60" fill="transparent" r="48" stroke="#4cd7f6" stroke-dasharray="99.5 301.6" stroke-dashoffset="-123.7" stroke-width="12"></circle>
<circle cx="60" cy="60" fill="transparent" r="48" stroke="#3626ce" stroke-dasharray="48.2 301.6" stroke-dashoffset="-223.2" stroke-width="12"></circle>
<circle cx="60" cy="60" fill="transparent" r="48" stroke="#00b2d0" stroke-dasharray="21.1 301.6" stroke-dashoffset="-271.4" stroke-width="12"></circle>
<circle cx="60" cy="60" fill="transparent" r="48" stroke="#ffb4ab" stroke-dasharray="9.1 301.6" stroke-dashoffset="-292.5" stroke-width="12"></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center text-center">
<span className="font-headline-md text-headline-md text-on-surface font-bold leading-none">$8.42M</span>
<span className="font-code-sm text-[11px] text-outline uppercase tracking-wider mt-1">Total Pool</span>
</div>
</div>
</div>
{/*  Taxonomy Breakdown List  */}
<div className="space-y-3 font-body-sm text-body-sm">
<div className="flex items-center justify-between p-2 rounded-lg bg-surface-container-low hover:bg-surface-container-high transition-colors">
<div className="flex items-center gap-2.5 truncate">
<span className="w-2.5 h-2.5 rounded-full bg-primary-container shrink-0"></span>
<span className="text-on-surface truncate">Cryogenic Liquids &amp; Gases</span>
</div>
<div className="flex items-center gap-2 shrink-0">
<span className="font-code-sm text-on-surface font-semibold">$3.45M</span>
<span className="font-code-sm text-primary text-[11px]">41%</span>
</div>
</div>
<div className="flex items-center justify-between p-2 rounded-lg bg-surface-container-low hover:bg-surface-container-high transition-colors">
<div className="flex items-center gap-2.5 truncate">
<span className="w-2.5 h-2.5 rounded-full bg-tertiary shrink-0"></span>
<span className="text-on-surface truncate">Hazardous Materials Intermodal</span>
</div>
<div className="flex items-center gap-2 shrink-0">
<span className="font-code-sm text-on-surface font-semibold">$2.78M</span>
<span className="font-code-sm text-tertiary text-[11px]">33%</span>
</div>
</div>
<div className="flex items-center justify-between p-2 rounded-lg bg-surface-container-low hover:bg-surface-container-high transition-colors">
<div className="flex items-center gap-2.5 truncate">
<span className="w-2.5 h-2.5 rounded-full bg-secondary-container shrink-0"></span>
<span className="text-on-surface truncate">Sovereign Enclave Vaulting</span>
</div>
<div className="flex items-center gap-2 shrink-0">
<span className="font-code-sm text-on-surface font-semibold">$1.35M</span>
<span className="font-code-sm text-secondary text-[11px]">16%</span>
</div>
</div>
<div className="flex items-center justify-between p-2 rounded-lg bg-surface-container-low hover:bg-surface-container-high transition-colors">
<div className="flex items-center gap-2.5 truncate">
<span className="w-2.5 h-2.5 rounded-full bg-tertiary-container shrink-0"></span>
<span className="text-on-surface truncate">Tactical Escort &amp; Defense</span>
</div>
<div className="flex items-center gap-2 shrink-0">
<span className="font-code-sm text-on-surface font-semibold">$0.59M</span>
<span className="font-code-sm text-outline text-[11px]">7%</span>
</div>
</div>
<div className="flex items-center justify-between p-2 rounded-lg bg-surface-container-low hover:bg-surface-container-high transition-colors">
<div className="flex items-center gap-2.5 truncate">
<span className="w-2.5 h-2.5 rounded-full bg-error shrink-0"></span>
<span className="text-on-surface truncate">Specialized High-Purity Chems</span>
</div>
<div className="flex items-center gap-2 shrink-0">
<span className="font-code-sm text-on-surface font-semibold">$0.25M</span>
<span className="font-code-sm text-error text-[11px]">3%</span>
</div>
</div>
</div>
</div>
{/*  CARD 4: Cryptographic Ledger Consensus & Node Telemetry  */}
<div className="p-6 rounded-xl bg-surface-container shadow-md space-y-5">
<div className="space-y-1">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[20px]">hub</span>
<h2 className="font-headline-md text-headline-md text-on-surface">Ledger Consensus &amp; Nodes</h2>
</div>
<span className="inline-flex items-center px-2 py-0.5 rounded-full bg-secondary-container/20 text-secondary font-label-sm text-label-sm">
                Epoch 1,429
              </span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Real-time state attestation across sovereign signing nodes.</p>
</div>
{/*  Active Nodes List  */}
<div className="space-y-2.5 font-body-sm text-body-sm">
<div className="p-3 rounded-lg bg-surface-container-low flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="w-2 h-2 rounded-full bg-primary shrink-0"></span>
<div>
<div className="text-on-surface font-medium">Virginia Cluster 07 <span className="font-code-sm text-[10px] text-primary">(Master)</span></div>
<div className="font-code-sm text-[11px] text-outline">12ms RTT • 1,420 sigs</div>
</div>
</div>
<span className="font-code-sm text-primary text-code-sm font-semibold">100% Up</span>
</div>
<div className="p-3 rounded-lg bg-surface-container-low flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="w-2 h-2 rounded-full bg-primary shrink-0"></span>
<div>
<div className="text-on-surface font-medium">Gothenburg Hub 04 <span className="font-code-sm text-[10px] text-on-surface-variant">(EU Bridge)</span></div>
<div className="font-code-sm text-[11px] text-outline">42ms RTT • 890 sigs</div>
</div>
</div>
<span className="font-code-sm text-on-surface text-code-sm">99.98% Up</span>
</div>
<div className="p-3 rounded-lg bg-surface-container-low flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="w-2 h-2 rounded-full bg-secondary shrink-0"></span>
<div>
<div className="text-on-surface font-medium">AI Fraud Oracle <span className="font-code-sm text-[10px] text-secondary">(Autonomous)</span></div>
<div className="font-code-sm text-[11px] text-outline">4ms RTT • 2,884 validations</div>
</div>
</div>
<span className="font-code-sm text-secondary text-code-sm font-semibold">100% Up</span>
</div>
<div className="p-3 rounded-lg bg-surface-container-low flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="w-2 h-2 rounded-full bg-tertiary shrink-0"></span>
<div>
<div className="text-on-surface font-medium">Treasury Escrow HSM <span className="font-code-sm text-[10px] text-tertiary">(Cold Enclave)</span></div>
<div className="font-code-sm text-[11px] text-outline">Sealed state • 18 batches</div>
</div>
</div>
<span className="font-code-sm text-tertiary text-code-sm font-semibold">Active</span>
</div>
</div>
{/*  Cryptographic State String  */}
<div className="p-3 rounded-lg bg-surface-container-lowest font-code-sm text-[11px] space-y-1 text-on-surface-variant">
<div className="flex justify-between items-center">
<span className="text-outline uppercase tracking-wider">Merkle Root:</span>
<span className="text-on-surface font-mono">0x9f88b2c4...e1441e</span>
</div>
<div className="flex justify-between items-center">
<span className="text-outline uppercase tracking-wider">Block Height:</span>
<span className="text-primary font-mono">#842,911</span>
</div>
</div>
</div>
{/*  CARD 5: Pre-Scheduled Compliance & Regulatory Exports  */}
<div className="p-6 rounded-xl bg-surface-container shadow-md space-y-5">
<div className="space-y-1">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[20px]">assignment_turned_in</span>
<h2 className="font-headline-md text-headline-md text-on-surface">Scheduled Regulatory Exports</h2>
</div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Automated FIPS, SOX, and environmental telemetry pipelines.</p>
</div>
<div className="space-y-3">
{/*  Pipeline 1  */}
<div className="p-3.5 rounded-lg bg-surface-container-low space-y-2">
<div className="flex items-start justify-between">
<div className="space-y-0.5">
<div className="font-label-md text-label-md text-on-surface font-medium">Monthly SOX &amp; FIPS 140-3 Dossier</div>
<div className="font-code-sm text-[11px] text-outline">Recipient: Treasury Audit Team (Automated)</div>
</div>
<span className="px-2 py-0.5 rounded-full bg-primary-container/20 text-primary font-label-sm text-[10px]">
                  Nov 1, 00:00 UTC
                </span>
</div>
<div className="flex items-center justify-between pt-1">
<span className="font-body-sm text-body-sm text-on-surface-variant">Encrypted GPG (AES-256)</span>
<button className="font-label-sm text-label-sm text-primary hover:underline">Edit Pipeline</button>
</div>
</div>
{/*  Pipeline 2  */}
<div className="p-3.5 rounded-lg bg-surface-container-low space-y-2">
<div className="flex items-start justify-between">
<div className="space-y-0.5">
<div className="font-label-md text-label-md text-on-surface font-medium">HazMat DOT &amp; EPA Audit Ledger</div>
<div className="font-code-sm text-[11px] text-outline">Weekly Dispatch Conformance Matrix</div>
</div>
<span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-[10px]">
                  Auto-Dispatched
                </span>
</div>
<div className="flex items-center justify-between pt-1">
<span className="font-body-sm text-body-sm text-on-surface-variant">FIPS-JSON Schema v4</span>
<button className="font-label-sm text-label-sm text-primary hover:underline">View History</button>
</div>
</div>
</div>
{/*  Schedule Trigger Button  */}
<button className="w-full py-2.5 rounded-lg bg-surface-container-high hover:bg-surface-bright text-on-surface transition-colors font-label-md text-label-md flex items-center justify-center gap-2" type="button">
<span className="material-symbols-outlined text-[18px]">add_circle</span>
<span>Configure New Export Schedule</span>
</button>
</div>
</div>
</div>
{/*  Institutional Footer & Sub-bar  */}
<div className="pt-6 pb-2 border-t border-surface-container-high/40 flex flex-col md:flex-row items-center justify-between gap-4 font-body-sm text-body-sm text-on-surface-variant">
<div className="flex flex-wrap items-center gap-4">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-primary"></span>
<span className="font-code-sm text-code-sm text-on-surface">Apex Nexus Autonomous Ledger Engine v4.9.2</span>
</div>
<span>•</span>
<span>FIPS 140-3 Level 4 Cryptographic Attestation</span>
<span>•</span>
<span>SOC 2 Type II Certified</span>
</div>
<div className="flex items-center gap-6 font-code-sm text-code-sm">
<a className="hover:text-primary transition-colors" href="#">Audit Policy</a>
<a className="hover:text-primary transition-colors" href="#">Cryptographic Keys</a>
<a className="hover:text-primary transition-colors" href="#">API Gateway Docs</a>
<span className="text-primary font-medium">99.999% SLA Uptime</span>
</div>
</div>
</div>
</div></main></div>
    </>
  );
}
