export default function ApexNexusAdminDashboard() {
  return (
    <>
<aside className="fixed left-0 top-0 h-full w-72 bg-surface-container-low z-50 flex flex-col justify-between shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="flex flex-col flex-1 min-h-0 pt-6"><div className="px-6 pb-6 flex items-center gap-3"><img alt="Brand logo. - Primary color: #10b981
- Font: plusJakartaSans
- Mode: dark
- Roundness: rounded-md
" className="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1Vgr0DRvF6sQsNjTmXRPKmIT7nueBmM-lDL8uuGg4b9kzW8Z396dKB8uZxIPV3SCuNKOQ9uJT7C33fFqxicHpvUZVeZJlzM5hBRqrI49H03M4ePuuc-BvH_u61u8a1UDmr_FD--HLhLqCx7AG4_BIYN-9qEDF9bXDcBs2gsivlcHCqoezPKgzpGFJtnXR4TAJLb9wUnAQjDoMnExmbqZWPb-Bmk3s9kjNb4pEW0GleH5STJu5I5y8Fe-rU"><div className="flex flex-col"><span className="font-headline-md text-headline-md text-on-surface tracking-tight leading-none">Apex Nexus</span><div className="flex items-center gap-1.5 mt-1"><span className="inline-flex items-center px-1.5 py-0.5 rounded-full bg-primary-container/20 text-primary font-label-sm text-label-sm uppercase">FIPS 140-3</span><span className="font-code-sm text-code-sm text-on-surface-variant">v4.9.2</span></div></div></div><div className="overflow-y-auto flex-1 px-4 space-y-6"><div className="space-y-1"><div className="px-3 pb-2 font-label-sm text-label-sm uppercase tracking-wider text-outline">Main Console</div><nav className="space-y-1" data-active-classes="bg-primary-container text-on-primary-container font-medium rounded-lg shadow-[0_0_16px_rgba(16,185,129,0.25)]"><a aria-current="page" className="flex items-center gap-3 px-3 py-2 transition-colors bg-primary-container text-on-primary-container font-medium rounded-lg shadow-[0_0_16px_rgba(16,185,129,0.25)]" data-path="admin-dashboard" href="#"><span className="material-symbols-outlined text-[20px]">space_dashboard</span><span className="font-label-md text-label-md">Dashboard</span></a><a className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="purchases-and-entries" href="#"><span className="material-symbols-outlined text-[20px]">receipt_long</span><span className="font-label-md text-label-md">Purchases / Entries</span></a><a className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="reports-and-analytics" href="#"><span className="material-symbols-outlined text-[20px]">analytics</span><span className="font-label-md text-label-md">Reports &amp; Analytics</span></a><a className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="supplier-catalog" href="#"><span className="material-symbols-outlined text-[20px]">corporate_fare</span><span className="font-label-md text-label-md">Supplier Catalog</span></a><a className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="product-master-catalog" href="#"><span className="material-symbols-outlined text-[20px]">inventory_2</span><span className="font-label-md text-label-md">Product Catalog</span></a></nav></div><div className="space-y-2"><div className="flex items-center justify-between px-3"><span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Active Suppliers</span><span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span></div><nav className="space-y-1" data-active-classes="bg-surface-container-high text-on-surface rounded-lg"><a className="flex items-center justify-between px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors group" data-path="nordic-freight-corp" href="#"><div className="flex items-center gap-2 truncate"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span><span className="font-body-sm text-body-sm truncate">Nordic Freight Corp</span></div><span className="inline-flex items-center px-2 py-0.5 rounded-full bg-primary-container/20 text-primary font-label-sm text-label-sm">+3 pending</span></a><a className="flex items-center justify-between px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors group" data-path="apex-microfab-inc" href="#"><div className="flex items-center gap-2 truncate"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span><span className="font-body-sm text-body-sm truncate">Apex Microfab Inc</span></div><span className="inline-flex items-center px-2 py-0.5 rounded-full bg-primary-container/20 text-primary font-label-sm text-label-sm">+1 pending</span></a><a className="flex items-center justify-between px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors group" data-path="vanguard-industrial" href="#"><div className="flex items-center gap-2 truncate"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span><span className="font-body-sm text-body-sm truncate">Vanguard Industrial</span></div><span className="inline-flex items-center px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">Synced</span></a><a className="flex items-center justify-between px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors group" data-path="aura-chemicals" href="#"><div className="flex items-center gap-2 truncate"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span><span className="font-body-sm text-body-sm truncate">Aura Chemicals</span></div><span className="inline-flex items-center px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">Synced</span></a></nav></div></div></div><div className="p-4 bg-surface-container-lowest mx-3 mb-4 rounded-xl flex flex-col gap-2.5"><div className="flex items-center justify-between"><div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-primary"></span><span className="font-code-sm text-code-sm text-on-surface font-semibold">Cluster 07-Virginia</span></div><span className="font-label-sm text-label-sm text-primary">Active</span></div><div className="flex items-center justify-between text-on-surface-variant"><span className="font-body-sm text-body-sm">TLS Security</span><span className="font-code-sm text-code-sm text-on-surface">TLS 1.3 Strict</span></div><div className="flex items-center justify-between text-on-surface-variant"><span className="font-body-sm text-body-sm">Gateway API</span><span className="font-label-sm text-label-sm text-primary">Operational</span></div></div></aside><div className="pl-72"><header className="fixed top-0 left-72 right-0 h-16 bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 flex items-center justify-between px-8"><div className="flex items-center gap-4 flex-1 max-w-md"><div className="relative w-full flex items-center"><span className="material-symbols-outlined absolute left-3 text-outline text-[18px]">search</span><input className="w-full h-10 pl-9 pr-12 rounded-lg bg-surface-container-high text-on-surface font-body-sm text-body-sm placeholder:text-outline focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Search entities, records, ledger (Press ⌘K)..." type="text" /><div className="absolute right-2.5 px-1.5 py-0.5 rounded bg-surface-container font-code-sm text-code-sm text-outline">⌘K</div></div></div><div className="flex items-center gap-4"><button className="relative p-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors" type="button"><span className="material-symbols-outlined text-[22px]">notifications</span><span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 rounded-full bg-primary ring-2 ring-surface shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span></button><div className="h-5 w-[1px] bg-surface-container-highest"></div><div className="flex items-center gap-3"><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><span className="material-symbols-outlined text-on-primary text-[18px]">person</span></div><div className="flex flex-col text-left"><span className="font-label-md text-label-md text-on-surface font-semibold leading-tight">Operations Lead</span><span className="font-label-sm text-label-sm text-primary">System Administrator</span></div></div><div className="h-5 w-[1px] bg-surface-container-highest"></div><a className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary-container/20 text-secondary hover:bg-secondary-container/30 transition-colors font-label-md text-label-md" data-path="supplier-portal" href="#"><span className="material-symbols-outlined text-[16px]">swap_horiz</span><span>Supplier Portal</span></a><a className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-on-surface-variant hover:text-error hover:bg-error-container/20 transition-colors font-label-md text-label-md" data-path="auth-login" href="#"><span className="material-symbols-outlined text-[16px]">logout</span><span>Sign Out</span></a></div></header><main className="w-full pt-16 bg-surface"><div className="flex flex-col w-full">
<div className="relative px-8 py-8 space-y-8 overflow-hidden">
{/*  Ambient Canvas Glow Effects  */}
<div className="absolute -top-32 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="absolute top-1/3 -right-24 w-80 h-80 bg-secondary-container/15 rounded-full blur-[100px] pointer-events-none"></div>
{/*  Header & Live Pulse Section  */}
<div className="relative flex flex-col lg:flex-row lg:items-center justify-between gap-6">
<div className="space-y-1.5">
<div className="flex items-center gap-2.5">
<span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
<span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping"></span>
            Live Node: Virginia Cluster 07
          </span>
<span className="font-code-sm text-code-sm text-outline">FIPS 140-3 Active</span>
</div>
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
          Operational Command <span className="text-outline font-normal">/</span> Admin Overview
        </h1>
<p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
          Unified ledger review, supplier invoice verification, and master data governance across cryptographically secured vendor pipelines.
        </p>
</div>
{/*  Action Suite  */}
<div className="flex flex-wrap items-center gap-3">
<button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-surface-container-high hover:bg-surface-bright text-on-surface font-label-md text-label-md transition-all" id="refresh-telemetry-btn">
<span className="material-symbols-outlined text-[18px] text-primary" id="telemetry-icon">sync</span>
<span>Refresh Telemetry</span>
<span className="px-1.5 py-0.2 rounded bg-surface-container-lowest font-code-sm text-code-sm text-primary" id="telemetry-time">00:2005s</span>
</button>
<a className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-surface-container-highest hover:bg-surface-bright text-on-surface font-label-md text-label-md transition-all shadow-sm" data-path="reports-and-analytics" href="#">
<span className="material-symbols-outlined text-[18px] text-secondary">download</span>
<span>Quick Export Reports</span>
</a>
<a className="group relative flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-container hover:bg-primary-container/90 text-on-primary-container font-label-md text-label-md font-semibold transition-all shadow-[0_0_24px_rgba(16,185,129,0.35)] active:scale-[0.98]" data-path="purchases-and-entries" href="#">
<span className="material-symbols-outlined text-[18px]">add_circle</span>
<span>+ Record New Entry</span>
</a>
</div>
</div>
{/*  4 Bento KPI Metric Cards  */}
<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
{/*  KPI 1  */}
<div className="relative p-5 rounded-xl bg-surface-container-low shadow-sm flex flex-col justify-between overflow-hidden">
<div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-75"></div>
<div className="flex items-start justify-between">
<div className="space-y-1">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Pending Review</span>
<div className="flex items-baseline gap-2">
<span className="font-headline-lg text-headline-lg text-on-surface">14</span>
<span className="font-label-md text-label-md text-outline">Invoices</span>
</div>
</div>
<span className="p-2 rounded-lg bg-primary-container/15 text-primary">
<span className="material-symbols-outlined text-[20px]">pending_actions</span>
</span>
</div>
<div className="mt-4 pt-3 flex items-center justify-between border-t border-surface-container-highest/40">
<span className="font-code-sm text-code-sm text-on-surface-variant">$342,850 Total Value</span>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary/20 text-primary font-label-sm text-label-sm shadow-[0_0_12px_rgba(16,185,129,0.25)]">
<span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
            +3 urgent
          </span>
</div>
</div>
{/*  KPI 2  */}
<div className="relative p-5 rounded-xl bg-surface-container-low shadow-sm flex flex-col justify-between overflow-hidden">
<div className="flex items-start justify-between">
<div className="space-y-1">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Recorded Purchases</span>
<div className="flex items-baseline gap-2">
<span className="font-headline-lg text-headline-lg text-on-surface">$4.82M</span>
<span className="font-label-md text-label-md text-outline">YTD</span>
</div>
</div>
<span className="p-2 rounded-lg bg-secondary-container/20 text-secondary">
<span className="material-symbols-outlined text-[20px]">account_balance_wallet</span>
</span>
</div>
<div className="mt-4 pt-3 flex items-center justify-between border-t border-surface-container-highest/40">
{/*  Sparkline representation  */}
<div className="flex items-end gap-1 h-4">
<span className="w-1.5 h-2 bg-secondary/40 rounded-full"></span>
<span className="w-1.5 h-2.5 bg-secondary/50 rounded-full"></span>
<span className="w-1.5 h-3 bg-secondary/70 rounded-full"></span>
<span className="w-1.5 h-4 bg-secondary rounded-full"></span>
</div>
<span className="inline-flex items-center gap-1 text-primary font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[14px]">trending_up</span>
            +12.4% vs prev. month
          </span>
</div>
</div>
{/*  KPI 3  */}
<div className="relative p-5 rounded-xl bg-surface-container-low shadow-sm flex flex-col justify-between overflow-hidden">
<div className="flex items-start justify-between">
<div className="space-y-1">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Active Suppliers</span>
<div className="flex items-baseline gap-2">
<span className="font-headline-lg text-headline-lg text-on-surface">48</span>
<span className="font-label-md text-label-md text-outline">Vendors</span>
</div>
</div>
<span className="p-2 rounded-lg bg-surface-container-high text-tertiary">
<span className="material-symbols-outlined text-[20px]">factory</span>
</span>
</div>
<div className="mt-4 pt-3 flex items-center justify-between border-t border-surface-container-highest/40">
<span className="font-body-sm text-body-sm text-on-surface-variant">4 in active transit</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface font-code-sm text-code-sm">
            100% SLA Sync
          </span>
</div>
</div>
{/*  KPI 4  */}
<div className="relative p-5 rounded-xl bg-surface-container-low shadow-sm flex flex-col justify-between overflow-hidden">
<div className="flex items-start justify-between">
<div className="space-y-1">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Audit &amp; Compliance</span>
<div className="flex items-baseline gap-2">
<span className="font-headline-lg text-headline-lg text-on-surface">99.98%</span>
<span className="font-label-md text-label-md text-primary">Score</span>
</div>
</div>
<span className="p-2 rounded-lg bg-primary-container/20 text-primary">
<span className="material-symbols-outlined text-[20px]">verified_user</span>
</span>
</div>
<div className="mt-4 pt-3 flex items-center justify-between border-t border-surface-container-highest/40">
<span className="font-body-sm text-body-sm text-on-surface-variant">SOC2 Type II Validated</span>
<span className="inline-flex items-center gap-1 font-code-sm text-code-sm text-primary">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
            Zero drift
          </span>
</div>
</div>
</div>
{/*  Core Tri-Card Grid (1.2 Operational Pillars)  */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
{/*  Card 1: Purchases & Entries  */}
<div className="flex flex-col justify-between rounded-xl bg-surface-container-low p-6 shadow-sm hover:shadow-md transition-all">
<div className="space-y-5">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<div className="p-2.5 rounded-xl bg-primary-container/15 text-primary">
<span className="material-symbols-outlined text-[24px]">receipt_long</span>
</div>
<div>
<h2 className="font-headline-md text-headline-md text-on-surface">Purchases &amp; Entries</h2>
<span className="font-body-sm text-body-sm text-outline">Invoicing &amp; Ledger Verification</span>
</div>
</div>
<span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm font-semibold">14 Open</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
            Review, verify, and approve incoming supplier purchase entries and ledger records across globally distributed nodes.
          </p>
{/*  Quick Metrics Bar  */}
<div className="grid grid-cols-3 gap-2 p-3 rounded-lg bg-surface-container-lowest">
<div className="text-center">
<span className="font-headline-md text-headline-md text-primary">14</span>
<p className="font-label-sm text-label-sm text-outline mt-0.5">Pending</p>
</div>
<div className="text-center">
<span className="font-headline-md text-headline-md text-on-surface">128</span>
<p className="font-label-sm text-label-sm text-outline mt-0.5">Approved</p>
</div>
<div className="text-center">
<span className="font-headline-md text-headline-md text-secondary">2.4d</span>
<p className="font-label-sm text-label-sm text-outline mt-0.5">Avg Cycle</p>
</div>
</div>
{/*  Pending Queue Snippet  */}
<div className="space-y-2.5">
<div className="flex items-center justify-between font-label-sm text-label-sm text-outline uppercase tracking-wider px-1">
<span>Awaiting Review</span>
<span>Node Submission</span>
</div>
<div className="p-3 rounded-lg bg-surface-container flex items-center justify-between hover:bg-surface-container-high transition-colors">
<div className="min-w-0 flex-1">
<div className="flex items-center gap-2">
<span className="font-label-md text-label-md text-on-surface font-semibold truncate">Nordic Freight Corp</span>
<span className="px-1.5 py-0.2 rounded bg-surface-container-highest font-code-sm text-code-sm text-outline">PO-8921</span>
</div>
<div className="flex items-center gap-2 mt-0.5">
<span className="font-body-sm text-body-sm text-primary font-medium">$42,100.00</span>
<span className="text-outline font-body-sm text-body-sm">• Submitted 2h ago</span>
</div>
</div>
<button className="shrink-0 px-2.5 py-1.5 rounded-lg bg-primary-container/20 hover:bg-primary-container text-primary hover:text-on-primary-container font-label-sm text-label-sm transition-all font-semibold">
                Sign Off
              </button>
</div>
<div className="p-3 rounded-lg bg-surface-container flex items-center justify-between hover:bg-surface-container-high transition-colors">
<div className="min-w-0 flex-1">
<div className="flex items-center gap-2">
<span className="font-label-md text-label-md text-on-surface font-semibold truncate">Apex Microfab Inc</span>
<span className="px-1.5 py-0.2 rounded bg-surface-container-highest font-code-sm text-code-sm text-outline">PO-8919</span>
</div>
<div className="flex items-center gap-2 mt-0.5">
<span className="font-body-sm text-body-sm text-primary font-medium">$118,450.00</span>
<span className="text-outline font-body-sm text-body-sm">• Submitted 4h ago</span>
</div>
</div>
<button className="shrink-0 px-2.5 py-1.5 rounded-lg bg-primary-container/20 hover:bg-primary-container text-primary hover:text-on-primary-container font-label-sm text-label-sm transition-all font-semibold">
                Sign Off
              </button>
</div>
</div>
</div>
<div className="mt-6 pt-4 border-t border-surface-container-highest/40 flex items-center gap-3">
<a className="flex-1 text-center py-2.5 px-3 rounded-lg bg-surface-container-high hover:bg-surface-bright text-on-surface font-label-md text-label-md transition-colors" data-path="purchases-and-entries" href="#">
            View All Entries
          </a>
<a className="flex-1 text-center py-2.5 px-3 rounded-lg bg-primary-container hover:bg-primary-container/90 text-on-primary-container font-label-md text-label-md font-semibold transition-all shadow-[0_0_16px_rgba(16,185,129,0.3)]" data-path="purchases-and-entries" href="#">
            + Record Entry
          </a>
</div>
</div>
{/*  Card 2: Reports & Analytics  */}
<div className="flex flex-col justify-between rounded-xl bg-surface-container-low p-6 shadow-sm hover:shadow-md transition-all">
<div className="space-y-5">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<div className="p-2.5 rounded-xl bg-secondary-container/20 text-secondary">
<span className="material-symbols-outlined text-[24px]">analytics</span>
</div>
<div>
<h2 className="font-headline-md text-headline-md text-on-surface">Reports &amp; Analytics</h2>
<span className="font-body-sm text-body-sm text-outline">Spend &amp; Variance Intelligence</span>
</div>
</div>
<span className="px-2 py-0.5 rounded-full bg-secondary/10 text-secondary font-label-sm text-label-sm">Monthly Net</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
            Aggregate purchase volume, spend distribution across supply tiers, price variance tracking, and supplier lead times.
          </p>
{/*  Expenditure Trend Visual (Inline SVG Chart)  */}
<div className="p-4 rounded-xl bg-surface-container-lowest space-y-3">
<div className="flex items-center justify-between text-on-surface-variant">
<span className="font-label-sm text-label-sm uppercase tracking-wide text-outline">Expenditure Trajectory (Q3/Q4)</span>
<span className="font-code-sm text-code-sm text-secondary font-medium">$950k Peak</span>
</div>
<div className="relative h-28 w-full flex items-end justify-between gap-3 pt-4 px-2">
{/*  Bar 1  */}
<div className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
<span className="font-code-sm text-code-sm text-outline">$480k</span>
<div className="w-full bg-surface-container-high rounded-t-md hover:bg-secondary/40 transition-colors" style="height: 48%;"></div>
<span className="font-label-sm text-label-sm text-outline">Aug</span>
</div>
{/*  Bar 2  */}
<div className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
<span className="font-code-sm text-code-sm text-outline">$620k</span>
<div className="w-full bg-surface-container-high rounded-t-md hover:bg-secondary/50 transition-colors" style="height: 64%;"></div>
<span className="font-label-sm text-label-sm text-outline">Sep</span>
</div>
{/*  Bar 3  */}
<div className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
<span className="font-code-sm text-code-sm text-outline">$810k</span>
<div className="w-full bg-secondary-container/60 rounded-t-md hover:bg-secondary-container transition-colors" style="height: 82%;"></div>
<span className="font-label-sm text-label-sm text-outline">Oct</span>
</div>
{/*  Bar 4 Active  */}
<div className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
<span className="font-code-sm text-code-sm text-primary font-semibold">$950k</span>
<div className="w-full bg-primary rounded-t-md shadow-[0_0_12px_rgba(16,185,129,0.35)]" style="height: 98%;"></div>
<span className="font-label-sm text-label-sm text-primary font-semibold">Nov</span>
</div>
</div>
{/*  Breakdown distribution bars  */}
<div className="space-y-1.5 pt-2">
<div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant">
<span>Materials: 46%</span>
<span>Logistics: 28%</span>
<span>Microfab: 26%</span>
</div>
<div className="w-full h-1.5 rounded-full bg-surface-container-high flex overflow-hidden">
<span className="h-full bg-primary w-[46%]"></span>
<span className="h-full bg-secondary w-[28%]"></span>
<span className="h-full bg-tertiary w-[26%]"></span>
</div>
</div>
</div>
</div>
<div className="mt-6 pt-4 border-t border-surface-container-highest/40 flex items-center gap-3">
<a className="flex-1 text-center py-2.5 px-3 rounded-lg bg-surface-container-high hover:bg-surface-bright text-on-surface font-label-md text-label-md transition-colors" data-path="reports-and-analytics" href="#">
            View Reports
          </a>
<button className="flex-1 text-center py-2.5 px-3 rounded-lg bg-secondary-container/20 hover:bg-secondary-container/30 text-secondary font-label-md text-label-md transition-colors">
            Schedule Digest
          </button>
</div>
</div>
{/*  Card 3: Master Data Governance  */}
<div className="flex flex-col justify-between rounded-xl bg-surface-container-low p-6 shadow-sm hover:shadow-md transition-all">
<div className="space-y-5">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<div className="p-2.5 rounded-xl bg-tertiary-container/15 text-tertiary">
<span className="material-symbols-outlined text-[24px]">corporate_fare</span>
</div>
<div>
<h2 className="font-headline-md text-headline-md text-on-surface">Master Governance</h2>
<span className="font-body-sm text-body-sm text-outline">Entities, Catalogs &amp; Compliance</span>
</div>
</div>
<span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary font-code-sm text-code-sm">Valid</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
            Central repository of supplier compliance certifications, master vendor directories, and product catalog schemas.
          </p>
{/*  Status Breakdown Modules  */}
<div className="space-y-3">
<a className="p-3.5 rounded-xl bg-surface-container-lowest flex items-center justify-between hover:bg-surface-container-high transition-colors group" data-path="supplier-catalog" href="#">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-[20px] text-tertiary">domain_verification</span>
<div>
<div className="font-label-md text-label-md text-on-surface font-semibold">Suppliers Catalog</div>
<div className="font-body-sm text-body-sm text-outline">48 Registered • 4 pending review</div>
</div>
</div>
<span className="material-symbols-outlined text-[18px] text-outline group-hover:text-primary transition-colors">chevron_right</span>
</a>
<a className="p-3.5 rounded-xl bg-surface-container-lowest flex items-center justify-between hover:bg-surface-container-high transition-colors group" data-path="product-master-catalog" href="#">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-[20px] text-secondary">inventory_2</span>
<div>
<div className="font-label-md text-label-md text-on-surface font-semibold">Product Master Catalog</div>
<div className="font-body-sm text-body-sm text-outline">1,420 Active SKUs across 8 categories</div>
</div>
</div>
<span className="material-symbols-outlined text-[18px] text-outline group-hover:text-primary transition-colors">chevron_right</span>
</a>
</div>
{/*  Shortcut Filter Tags  */}
<div className="space-y-1.5">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Quick Schema Tags</span>
<div className="flex flex-wrap gap-1.5">
<span className="px-2 py-1 rounded bg-surface-container text-on-surface-variant font-code-sm text-code-sm hover:text-on-surface cursor-pointer">Tier 1 Strategic</span>
<span className="px-2 py-1 rounded bg-surface-container text-on-surface-variant font-code-sm text-code-sm hover:text-on-surface cursor-pointer">Raw Silicon</span>
<span className="px-2 py-1 rounded bg-surface-container text-on-surface-variant font-code-sm text-code-sm hover:text-on-surface cursor-pointer">Freight Logistics</span>
<span className="px-2 py-1 rounded bg-surface-container text-primary font-code-sm text-code-sm hover:bg-primary/20 cursor-pointer">ISO-9001</span>
</div>
</div>
</div>
<div className="mt-6 pt-4 border-t border-surface-container-highest/40 flex items-center gap-3">
<a className="flex-1 text-center py-2.5 px-3 rounded-lg bg-surface-container-high hover:bg-surface-bright text-on-surface font-label-md text-label-md transition-colors" data-path="supplier-catalog" href="#">
            Manage Suppliers
          </a>
<a className="flex-1 text-center py-2.5 px-3 rounded-lg bg-surface-container-high hover:bg-surface-bright text-on-surface font-label-md text-label-md transition-colors" data-path="product-master-catalog" href="#">
            Manage Products
          </a>
</div>
</div>
</div>
{/*  Bottom Activity Ledger & Real-time Audit Trail  */}
<div className="rounded-xl bg-surface-container-low p-6 shadow-sm space-y-5">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
<div className="flex items-center gap-3">
<div className="p-2 rounded-lg bg-primary-container/15 text-primary">
<span className="material-symbols-outlined text-[20px]">shield</span>
</div>
<div>
<h2 className="font-headline-md text-headline-md text-on-surface">Cryptographic Audit Trail &amp; Activity Ledger</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">Continuous immutable log of admin sign-offs, schema patches, and vendor dispatch events.</p>
</div>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container text-on-surface-variant font-code-sm text-code-sm">
<span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Ledger Block #8,941,209
          </span>
</div>
</div>
{/*  Ledger Table / Stream  */}
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-surface-container-highest/50 font-label-sm text-label-sm uppercase tracking-wider text-outline">
<th className="py-3 px-4">Event &amp; Record ID</th>
<th className="py-3 px-4">Entity / Principal</th>
<th className="py-3 px-4">Operation Type</th>
<th className="py-3 px-4">Node Hash Signature</th>
<th className="py-3 px-4">Timestamp</th>
<th className="py-3 px-4 text-right">Status</th>
</tr>
</thead>
<tbody className="divide-y divide-surface-container-highest/30 font-body-sm text-body-sm">
{/*  Row 1  */}
<tr className="hover:bg-surface-container transition-colors">
<td className="py-3.5 px-4">
<div className="flex items-center gap-2.5">
<span className="material-symbols-outlined text-[18px] text-primary">check_circle</span>
<div className="font-label-md text-label-md text-on-surface font-semibold">PO-8918 Batch Clearance</div>
</div>
<span className="text-outline font-code-sm text-code-sm pl-7">TX-8918-990-APPROVED</span>
</td>
<td className="py-3.5 px-4">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-label-sm text-label-sm font-bold">OP</div>
<span className="text-on-surface">Operations Lead</span>
</div>
</td>
<td className="py-3.5 px-4">
<span className="px-2 py-0.5 rounded bg-surface-container font-code-sm text-code-sm text-on-surface">Invoice Sign-off</span>
</td>
<td className="py-3.5 px-4 font-code-sm text-code-sm text-outline">
                0x7f9a...88b2
              </td>
<td className="py-3.5 px-4 text-on-surface-variant font-code-sm text-code-sm">
                Just now (14:32:08 UTC)
              </td>
<td className="py-3.5 px-4 text-right">
<span className="inline-flex items-center px-2 py-0.5 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm">
                  Committed
                </span>
</td>
</tr>
{/*  Row 2  */}
<tr className="hover:bg-surface-container transition-colors">
<td className="py-3.5 px-4">
<div className="flex items-center gap-2.5">
<span className="material-symbols-outlined text-[18px] text-secondary">update</span>
<div className="font-label-md text-label-md text-on-surface font-semibold">SKU Price Tier Calibration</div>
</div>
<span className="text-outline font-code-sm text-code-sm pl-7">CAT-902-RAW-SILICON</span>
</td>
<td className="py-3.5 px-4">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-label-sm text-label-sm font-bold">SY</div>
<span className="text-on-surface">Automated Engine</span>
</div>
</td>
<td className="py-3.5 px-4">
<span className="px-2 py-0.5 rounded bg-surface-container font-code-sm text-code-sm text-on-surface">Index Variance Adjusted</span>
</td>
<td className="py-3.5 px-4 font-code-sm text-code-sm text-outline">
                0x4c2b...39e1
              </td>
<td className="py-3.5 px-4 text-on-surface-variant font-code-sm text-code-sm">
                18 mins ago
              </td>
<td className="py-3.5 px-4 text-right">
<span className="inline-flex items-center px-2 py-0.5 rounded-full bg-secondary/10 text-secondary font-label-sm text-label-sm">
                  Synced
                </span>
</td>
</tr>
{/*  Row 3  */}
<tr className="hover:bg-surface-container transition-colors">
<td className="py-3.5 px-4">
<div className="flex items-center gap-2.5">
<span className="material-symbols-outlined text-[18px] text-tertiary">key</span>
<div className="font-label-md text-label-md text-on-surface font-semibold">Vendor Certificate Re-issued</div>
</div>
<span className="text-outline font-code-sm text-code-sm pl-7">VND-NORDIC-CERT-2025</span>
</td>
<td className="py-3.5 px-4">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-surface-container-high text-tertiary flex items-center justify-center font-label-sm text-label-sm font-bold">SE</div>
<span className="text-on-surface">SecOps Compliance</span>
</div>
</td>
<td className="py-3.5 px-4">
<span className="px-2 py-0.5 rounded bg-surface-container font-code-sm text-code-sm text-on-surface">FIPS Dual-Key Rotation</span>
</td>
<td className="py-3.5 px-4 font-code-sm text-code-sm text-outline">
                0x19ae...55cf
              </td>
<td className="py-3.5 px-4 text-on-surface-variant font-code-sm text-code-sm">
                1h 12m ago
              </td>
<td className="py-3.5 px-4 text-right">
<span className="inline-flex items-center px-2 py-0.5 rounded-full bg-tertiary/10 text-tertiary font-label-sm text-label-sm">
                  Rotated
                </span>
</td>
</tr>
{/*  Row 4  */}
<tr className="hover:bg-surface-container transition-colors">
<td className="py-3.5 px-4">
<div className="flex items-center gap-2.5">
<span className="material-symbols-outlined text-[18px] text-primary">add_shopping_cart</span>
<div className="font-label-md text-label-md text-on-surface font-semibold">New Entry Intake: Vanguard Ind.</div>
</div>
<span className="text-outline font-code-sm text-code-sm pl-7">PO-8924-SUBMITTED</span>
</td>
<td className="py-3.5 px-4">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center font-label-sm text-label-sm font-bold">VN</div>
<span className="text-on-surface">Vanguard Gateway</span>
</div>
</td>
<td className="py-3.5 px-4">
<span className="px-2 py-0.5 rounded bg-surface-container font-code-sm text-code-sm text-on-surface">Purchase Order Intake</span>
</td>
<td className="py-3.5 px-4 font-code-sm text-code-sm text-outline">
                0x33f1...72a0
              </td>
<td className="py-3.5 px-4 text-on-surface-variant font-code-sm text-code-sm">
                2h 45m ago
              </td>
<td className="py-3.5 px-4 text-right">
<span className="inline-flex items-center px-2 py-0.5 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm">
                  In Queue
                </span>
</td>
</tr>
</tbody>
</table>
</div>
{/*  Footer Info Bar  */}
<div className="flex flex-col sm:flex-row items-center justify-between pt-2 text-outline font-body-sm text-body-sm">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px]">lock</span>
<span>Zero-Knowledge Proof verified by Apex Consensus Layer</span>
</div>
<a className="text-primary hover:underline font-label-md text-label-md flex items-center gap-1" data-path="purchases-and-entries" href="#">
          Full Audit History Explorer
          <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</a>
</div>
</div>
</div>
</div>
<script>
  // Telemetry real-time counter pulse
  (function initDashboardPulse() {
    const timeDisplay = document.getElementById('telemetry-time');
    const refreshBtn = document.getElementById('refresh-telemetry-btn');
    const icon = document.getElementById('telemetry-icon');
    let seconds = 4;

    const timer = setInterval(() => {
      seconds++;
      if (timeDisplay) {
        timeDisplay.textContent = `00:${seconds < 10 ? '0' + seconds : seconds}s`;
      }
    }, 1000);

    if (refreshBtn && icon) {
      refreshBtn.addEventListener('click', () => {
        icon.classList.add('animate-spin');
        seconds = 0;
        if (timeDisplay) timeDisplay.textContent = '00:00s';
        setTimeout(() => {
          icon.classList.remove('animate-spin');
        }, 600);
      });
    }
  })();
</script></main></div>
    </>
  );
}
