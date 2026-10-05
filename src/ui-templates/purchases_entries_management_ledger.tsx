export default function PurchasesEntriesManagementLedger() {
  return (
    <>
<aside className="fixed left-0 top-0 h-full w-72 bg-surface-container-low z-50 flex flex-col justify-between shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="flex flex-col flex-1 min-h-0 pt-6"><div className="px-6 pb-6 flex items-center gap-3"><img alt="Brand logo. - Primary color: #10b981
- Font: plusJakartaSans
- Mode: dark
- Roundness: rounded-md
" className="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1Vgr0DRvF6sQsNjTmXRPKmIT7nueBmM-lDL8uuGg4b9kzW8Z396dKB8uZxIPV3SCuNKOQ9uJT7C33fFqxicHpvUZVeZJlzM5hBRqrI49H03M4ePuuc-BvH_u61u8a1UDmr_FD--HLhLqCx7AG4_BIYN-9qEDF9bXDcBs2gsivlcHCqoezPKgzpGFJtnXR4TAJLb9wUnAQjDoMnExmbqZWPb-Bmk3s9kjNb4pEW0GleH5STJu5I5y8Fe-rU"><div className="flex flex-col"><span className="font-headline-md text-headline-md text-on-surface tracking-tight leading-none">Apex Nexus</span><div className="flex items-center gap-1.5 mt-1"><span className="inline-flex items-center px-1.5 py-0.5 rounded-full bg-primary-container/20 text-primary font-label-sm text-label-sm uppercase">FIPS 140-3</span><span className="font-code-sm text-code-sm text-on-surface-variant">v4.9.2</span></div></div></div><div className="overflow-y-auto flex-1 px-4 space-y-6"><div className="space-y-1"><div className="px-3 pb-2 font-label-sm text-label-sm uppercase tracking-wider text-outline">Main Console</div><nav className="space-y-1" data-active-classes="bg-primary-container text-on-primary-container font-medium rounded-lg shadow-[0_0_16px_rgba(16,185,129,0.25)]"><a className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="admin-dashboard" href="#"><span className="material-symbols-outlined text-[20px]">space_dashboard</span><span className="font-label-md text-label-md">Dashboard</span></a><a className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="purchases-and-entries" href="#"><span className="material-symbols-outlined text-[20px]">receipt_long</span><span className="font-label-md text-label-md">Purchases / Entries</span></a><a className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="reports-and-analytics" href="#"><span className="material-symbols-outlined text-[20px]">analytics</span><span className="font-label-md text-label-md">Reports &amp; Analytics</span></a><a className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="supplier-catalog" href="#"><span className="material-symbols-outlined text-[20px]">corporate_fare</span><span className="font-label-md text-label-md">Supplier Catalog</span></a><a className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="product-master-catalog" href="#"><span className="material-symbols-outlined text-[20px]">inventory_2</span><span className="font-label-md text-label-md">Product Catalog</span></a></nav></div><div className="space-y-2"><div className="flex items-center justify-between px-3"><span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Active Suppliers</span><span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span></div><nav className="space-y-1" data-active-classes="bg-surface-container-high text-on-surface rounded-lg"><a className="flex items-center justify-between px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors group" data-path="nordic-freight-corp" href="#"><div className="flex items-center gap-2 truncate"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span><span className="font-body-sm text-body-sm truncate">Nordic Freight Corp</span></div><span className="inline-flex items-center px-2 py-0.5 rounded-full bg-primary-container/20 text-primary font-label-sm text-label-sm">+3 pending</span></a><a className="flex items-center justify-between px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors group" data-path="apex-microfab-inc" href="#"><div className="flex items-center gap-2 truncate"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span><span className="font-body-sm text-body-sm truncate">Apex Microfab Inc</span></div><span className="inline-flex items-center px-2 py-0.5 rounded-full bg-primary-container/20 text-primary font-label-sm text-label-sm">+1 pending</span></a><a className="flex items-center justify-between px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors group" data-path="vanguard-industrial" href="#"><div className="flex items-center gap-2 truncate"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span><span className="font-body-sm text-body-sm truncate">Vanguard Industrial</span></div><span className="inline-flex items-center px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">Synced</span></a><a className="flex items-center justify-between px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors group" data-path="aura-chemicals" href="#"><div className="flex items-center gap-2 truncate"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span><span className="font-body-sm text-body-sm truncate">Aura Chemicals</span></div><span className="inline-flex items-center px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">Synced</span></a></nav></div></div></div><div className="p-4 bg-surface-container-lowest mx-3 mb-4 rounded-xl flex flex-col gap-2.5"><div className="flex items-center justify-between"><div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-primary"></span><span className="font-code-sm text-code-sm text-on-surface font-semibold">Cluster 07-Virginia</span></div><span className="font-label-sm text-label-sm text-primary">Active</span></div><div className="flex items-center justify-between text-on-surface-variant"><span className="font-body-sm text-body-sm">TLS Security</span><span className="font-code-sm text-code-sm text-on-surface">TLS 1.3 Strict</span></div><div className="flex items-center justify-between text-on-surface-variant"><span className="font-body-sm text-body-sm">Gateway API</span><span className="font-label-sm text-label-sm text-primary">Operational</span></div></div></aside><div className="pl-72"><header className="fixed top-0 left-72 right-0 h-16 bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 flex items-center justify-between px-8"><div className="flex items-center gap-4 flex-1 max-w-md"><div className="relative w-full flex items-center"><span className="material-symbols-outlined absolute left-3 text-outline text-[18px]">search</span><input className="w-full h-10 pl-9 pr-12 rounded-lg bg-surface-container-high text-on-surface font-body-sm text-body-sm placeholder:text-outline focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Search entities, records, ledger (Press ⌘K)..." type="text" /><div className="absolute right-2.5 px-1.5 py-0.5 rounded bg-surface-container font-code-sm text-code-sm text-outline">⌘K</div></div></div><div className="flex items-center gap-4"><button className="relative p-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors" type="button"><span className="material-symbols-outlined text-[22px]">notifications</span><span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 rounded-full bg-primary ring-2 ring-surface shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span></button><div className="h-5 w-[1px] bg-surface-container-highest"></div><div className="flex items-center gap-3"><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><span className="material-symbols-outlined text-on-primary text-[18px]">person</span></div><div className="flex flex-col text-left"><span className="font-label-md text-label-md text-on-surface font-semibold leading-tight">Operations Lead</span><span className="font-label-sm text-label-sm text-primary">System Administrator</span></div></div><div className="h-5 w-[1px] bg-surface-container-highest"></div><a className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary-container/20 text-secondary hover:bg-secondary-container/30 transition-colors font-label-md text-label-md" data-path="supplier-portal" href="#"><span className="material-symbols-outlined text-[16px]">swap_horiz</span><span>Supplier Portal</span></a><a className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-on-surface-variant hover:text-error hover:bg-error-container/20 transition-colors font-label-md text-label-md" data-path="auth-login" href="#"><span className="material-symbols-outlined text-[16px]">logout</span><span>Sign Out</span></a></div></header><main className="w-full pt-16 bg-surface"><div className="flex flex-col w-full px-8 py-8 space-y-8 bg-surface text-on-surface">
{/*  Top Breadcrumb & Header Bar  */}
<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
<div className="flex flex-col space-y-2">
<div className="flex items-center gap-2 font-label-sm text-label-sm text-outline tracking-wider uppercase">
<a className="hover:text-primary transition-colors" href="#">Master Data Governance</a>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span className="text-on-surface font-semibold">Purchases &amp; Entries Ledger</span>
</div>
<div className="flex items-center gap-4 flex-wrap">
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-bold">
          Purchase Invoices &amp; Entries Ledger
        </h1>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-container/20 text-primary font-label-sm text-label-sm font-semibold shadow-sm">
<span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
<span>14 Awaiting Review</span>
</div>
</div>
<p className="font-body-md text-body-md text-on-surface-variant max-w-3xl">
        Review incoming supplier purchase invoices, cryptographically verify line items, execute batch approvals, and record new ledger entries.
      </p>
</div>
{/*  Header Actions  */}
<div className="flex items-center gap-3 flex-wrap">
<button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-surface-container-high text-on-surface hover:bg-surface-container-highest transition-colors font-label-md text-label-md shadow-sm" type="button">
<span className="material-symbols-outlined text-[18px] text-outline">download</span>
<span>Export Ledger</span>
</button>
<button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-surface-container-high text-on-surface hover:bg-surface-container-highest transition-colors font-label-md text-label-md shadow-sm" type="button">
<span className="material-symbols-outlined text-[18px] text-primary">check_circle</span>
<span>Batch Sign-Off</span>
</button>
<button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary-container text-on-primary-container hover:bg-primary transition-all duration-150 font-label-md text-label-md font-semibold shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_24px_rgba(16,185,129,0.5)] transform active:scale-95" type="button">
<span className="material-symbols-outlined text-[18px]">add</span>
<span>Record New Entry</span>
</button>
</div>
</div>
{/*  KPI Row: 4 Modern Glass Cards  */}
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
{/*  Card 1  */}
<div className="flex flex-col justify-between p-5 rounded-xl bg-surface-container-low shadow-md space-y-4 hover:bg-surface-container transition-all">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-outline font-semibold">Pending Verification</span>
<div className="w-9 h-9 rounded-lg bg-primary-container/20 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[20px]">pending_actions</span>
</div>
</div>
<div>
<div className="flex items-baseline gap-2">
<span className="font-headline-lg text-headline-lg font-bold text-on-surface">14 Invoices</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
<span className="text-on-surface font-semibold">$342,850</span> total exposure • <span className="text-error font-medium">3 flagged</span>
</p>
</div>
<div className="w-full bg-surface-container-highest rounded-full h-1.5 overflow-hidden">
<div className="bg-primary h-1.5 rounded-full" style="width: 68%;"></div>
</div>
</div>
{/*  Card 2  */}
<div className="flex flex-col justify-between p-5 rounded-xl bg-surface-container-low shadow-md space-y-4 hover:bg-surface-container transition-all">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-outline font-semibold">Cleared This Cycle</span>
<div className="w-9 h-9 rounded-lg bg-secondary-container/20 flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[20px]">verified</span>
</div>
</div>
<div>
<div className="flex items-baseline gap-2">
<span className="font-headline-lg text-headline-lg font-bold text-on-surface">$2.18M</span>
<span className="font-label-sm text-label-sm text-primary font-semibold flex items-center">
<span className="material-symbols-outlined text-[14px]">arrow_upward</span>+18.4%
          </span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
          128 approved entries this settlement
        </p>
</div>
<div className="flex items-end gap-1 h-6 pt-1">
<span className="w-1/6 h-2 rounded-t bg-primary/40"></span>
<span className="w-1/6 h-3.5 rounded-t bg-primary/60"></span>
<span className="w-1/6 h-3 rounded-t bg-primary/50"></span>
<span className="w-1/6 h-5 rounded-t bg-primary/80"></span>
<span className="w-1/6 h-4.5 rounded-t bg-primary/70"></span>
<span className="w-1/6 h-6 rounded-t bg-primary"></span>
</div>
</div>
{/*  Card 3  */}
<div className="flex flex-col justify-between p-5 rounded-xl bg-surface-container-low shadow-md space-y-4 hover:bg-surface-container transition-all">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-outline font-semibold">Review Velocity</span>
<div className="w-9 h-9 rounded-lg bg-tertiary-container/20 flex items-center justify-center text-tertiary">
<span className="material-symbols-outlined text-[20px]">bolt</span>
</div>
</div>
<div>
<div className="flex items-baseline gap-2">
<span className="font-headline-lg text-headline-lg font-bold text-on-surface">1.4 Days</span>
<span className="font-label-sm text-label-sm text-tertiary font-medium">Goal: &lt; 2.0d</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
          99.2% cryptographic SLA adherence
        </p>
</div>
<div className="flex items-center justify-between text-code-sm font-code-sm text-outline">
<span>FIPS Queue</span>
<span className="text-primary font-semibold">Optimal (0.3s/op)</span>
</div>
</div>
{/*  Card 4  */}
<div className="flex flex-col justify-between p-5 rounded-xl bg-surface-container-low shadow-md space-y-4 hover:bg-surface-container transition-all">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-outline font-semibold">Discrepancies &amp; Hold</span>
<div className="w-9 h-9 rounded-lg bg-error-container/20 flex items-center justify-center text-error">
<span className="material-symbols-outlined text-[20px]">warning</span>
</div>
</div>
<div>
<div className="flex items-baseline gap-2">
<span className="font-headline-lg text-headline-lg font-bold text-error">2 Invoices</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
<span className="text-on-surface font-semibold">$18,420</span> held for SKU / Tax drift
        </p>
</div>
<div className="flex items-center gap-1.5 font-label-sm text-label-sm text-error">
<span className="w-2 h-2 rounded-full bg-error"></span>
<span>Aura Chemicals • Vanguard Hold</span>
</div>
</div>
</div>
{/*  Segmented Controls, Search, and Filtering Bar  */}
<div className="flex flex-col gap-4 bg-surface-container-low p-4 rounded-xl shadow-sm">
{/*  Row 1: Segmented Tabs  */}
<div className="flex items-center justify-between flex-wrap gap-4">
<div className="flex items-center gap-1 bg-surface-container-lowest p-1 rounded-lg">
<button className="px-3.5 py-1.5 rounded-md font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors" type="button">
          All Entries (142)
        </button>
<button className="px-3.5 py-1.5 rounded-md bg-primary-container/20 text-primary font-label-md text-label-md font-semibold shadow-sm" type="button">
          Awaiting Review (14)
        </button>
<button className="px-3.5 py-1.5 rounded-md font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors" type="button">
          Approved / Cleared (120)
        </button>
<button className="px-3.5 py-1.5 rounded-md font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors" type="button">
          Flagged / Hold (6)
        </button>
<button className="px-3.5 py-1.5 rounded-md font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors" type="button">
          Archived (2)
        </button>
</div>
{/*  Quick Toggles  */}
<div className="flex items-center gap-4">
<label className="flex items-center gap-2 cursor-pointer select-none">
<div className="relative">
<input checked="" className="sr-only peer" type="checkbox" />
<div className="w-9 h-5 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-on-surface after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary-container"></div>
</div>
<span className="font-label-md text-label-md text-on-surface">Urgent Only</span>
</label>
<button className="p-2 rounded-lg bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors" title="Reload Ledger Data" type="button">
<span className="material-symbols-outlined text-[18px]">sync</span>
</button>
</div>
</div>
{/*  Row 2: Search Input and Secondary Filters  */}
<div className="flex flex-col lg:flex-row items-center gap-3">
<div className="relative flex-1 w-full">
<span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-outline text-[18px]">search</span>
<input className="w-full h-10 pl-10 pr-24 rounded-lg bg-surface-container-high text-on-surface font-body-sm text-body-sm placeholder:text-outline focus:outline-none focus:ring-1 focus:ring-primary shadow-inner" placeholder="Search PO#, Invoice ID, Supplier or SKU code..." type="text" />
<div className="absolute right-3 top-1/2 -translate-y-1/2 px-1.5 py-0.5 rounded bg-surface-container font-code-sm text-code-sm text-outline">⌘K</div>
</div>
<div className="flex items-center gap-2 w-full lg:w-auto overflow-x-auto pb-1 lg:pb-0">
<select className="h-10 px-3 rounded-lg bg-surface-container-high text-on-surface font-label-md text-label-md focus:outline-none focus:ring-1 focus:ring-primary">
<option>All Suppliers</option>
<option>Nordic Freight Corp</option>
<option>Apex Microfab Inc</option>
<option>Vanguard Industrial</option>
<option>Aura Chemicals LLC</option>
</select>
<select className="h-10 px-3 rounded-lg bg-surface-container-high text-on-surface font-label-md text-label-md focus:outline-none focus:ring-1 focus:ring-primary">
<option>Date: Current Cycle</option>
<option>Last 30 Days</option>
<option>Q3 Fiscal</option>
<option>Custom Window</option>
</select>
<select className="h-10 px-3 rounded-lg bg-surface-container-high text-on-surface font-label-md text-label-md focus:outline-none focus:ring-1 focus:ring-primary">
<option>Amount: Any</option>
<option>&lt; $10,000</option>
<option>$10k - $50k</option>
<option>&gt; $50,000</option>
</select>
</div>
</div>
</div>
{/*  Primary Ledger Data Table  */}
<div className="w-full overflow-hidden rounded-xl bg-surface-container-low shadow-lg">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-lowest text-outline font-label-sm text-label-sm uppercase tracking-wider">
<th className="py-3.5 px-4 w-12 text-center">
<input className="rounded bg-surface-container-high text-primary focus:ring-0 cursor-pointer" type="checkbox" />
</th>
<th className="py-3.5 px-4">Invoice / PO Number</th>
<th className="py-3.5 px-4">Supplier Entity</th>
<th className="py-3.5 px-4">Submitted</th>
<th className="py-3.5 px-4">Items / Category</th>
<th className="py-3.5 px-4 text-right">Total Amount</th>
<th className="py-3.5 px-4">Cryptographic Proof</th>
<th className="py-3.5 px-4">Review State</th>
<th className="py-3.5 px-4 text-center">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-surface-container-highest/20 font-body-sm text-body-sm text-on-surface">
{/*  Row 1: Active Focus (Nordic Freight)  */}
<tr className="bg-primary-container/5 hover:bg-surface-container-high transition-colors">
<td className="py-4 px-4 text-center">
<input checked="" className="rounded bg-surface-container-high text-primary focus:ring-0 cursor-pointer" type="checkbox" />
</td>
<td className="py-4 px-4">
<div className="flex items-center gap-2">
<span className="font-code-sm text-code-sm font-semibold text-primary">PO-8921</span>
<span className="material-symbols-outlined text-[14px] text-outline cursor-pointer hover:text-on-surface" title="Copy Identifier">content_copy</span>
</div>
<span className="font-code-sm text-code-sm text-outline block mt-0.5">INV-2024-0988</span>
</td>
<td className="py-4 px-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-surface-container-highest flex items-center justify-center font-bold text-on-surface">
                  NF
                </div>
<div className="flex flex-col">
<span className="font-label-md text-label-md font-semibold text-on-surface">Nordic Freight Corp</span>
<div className="flex items-center gap-1.5 mt-0.5">
<span className="px-1.5 py-0.2 rounded bg-surface-container font-label-sm text-label-sm text-outline">Tier-1 Sovereign</span>
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
</div>
</div>
</div>
</td>
<td className="py-4 px-4 whitespace-nowrap">
<span className="font-label-md text-label-md text-on-surface">Today, 10:42 AM</span>
<span className="block font-code-sm text-code-sm text-outline">UTC+00:00</span>
</td>
<td className="py-4 px-4">
<span className="font-label-md text-label-md text-on-surface font-medium">3 Line Items</span>
<span className="block font-body-sm text-body-sm text-outline">HazMat Logistics • Cryogenics</span>
</td>
<td className="py-4 px-4 text-right whitespace-nowrap">
<span className="font-label-md text-label-md font-bold text-on-surface">$42,100.00</span>
<span className="block font-code-sm text-code-sm text-outline">Net 30 • USD</span>
</td>
<td className="py-4 px-4 whitespace-nowrap">
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-primary-container/20 text-primary font-code-sm text-code-sm">
<span className="material-symbols-outlined text-[16px]">verified_user</span>
<span>FIPS 140-3 Valid</span>
</div>
</td>
<td className="py-4 px-4 whitespace-nowrap">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/20 text-primary font-label-sm text-label-sm font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
<span>Awaiting Sign-Off</span>
</span>
</td>
<td className="py-4 px-4 text-center whitespace-nowrap">
<div className="flex items-center justify-center gap-1">
<button className="p-1.5 rounded-md bg-primary-container text-on-primary-container hover:bg-primary transition-colors" title="Quick Approve" type="button">
<span className="material-symbols-outlined text-[16px]">check</span>
</button>
<button className="p-1.5 rounded-md hover:bg-surface-container-highest text-on-surface-variant transition-colors" title="Inspect Details" type="button">
<span className="material-symbols-outlined text-[16px]">visibility</span>
</button>
<button className="p-1.5 rounded-md hover:bg-error-container/20 hover:text-error text-on-surface-variant transition-colors" title="Hold / Reject" type="button">
<span className="material-symbols-outlined text-[16px]">block</span>
</button>
</div>
</td>
</tr>
{/*  Row 2: Apex Microfab  */}
<tr className="hover:bg-surface-container transition-colors">
<td className="py-4 px-4 text-center">
<input className="rounded bg-surface-container-high text-primary focus:ring-0 cursor-pointer" type="checkbox" />
</td>
<td className="py-4 px-4">
<div className="flex items-center gap-2">
<span className="font-code-sm text-code-sm font-semibold text-on-surface">PO-8920</span>
<span className="material-symbols-outlined text-[14px] text-outline cursor-pointer hover:text-on-surface">content_copy</span>
</div>
<span className="font-code-sm text-code-sm text-outline block mt-0.5">INV-2024-0987</span>
</td>
<td className="py-4 px-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-surface-container-highest flex items-center justify-center font-bold text-on-surface">
                  AM
                </div>
<div className="flex flex-col">
<span className="font-label-md text-label-md font-semibold text-on-surface">Apex Microfab Inc</span>
<div className="flex items-center gap-1.5 mt-0.5">
<span className="px-1.5 py-0.2 rounded bg-surface-container font-label-sm text-label-sm text-outline">Semicon Core</span>
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
</div>
</div>
</div>
</td>
<td className="py-4 px-4 whitespace-nowrap">
<span className="font-label-md text-label-md text-on-surface">Today, 09:15 AM</span>
<span className="block font-code-sm text-code-sm text-outline">UTC+00:00</span>
</td>
<td className="py-4 px-4">
<span className="font-label-md text-label-md text-on-surface font-medium">12 Line Items</span>
<span className="block font-body-sm text-body-sm text-outline">Photolithography 300mm Wafers</span>
</td>
<td className="py-4 px-4 text-right whitespace-nowrap">
<span className="font-label-md text-label-md font-bold text-on-surface">$118,450.00</span>
<span className="block font-code-sm text-code-sm text-outline">Net 15 • USD</span>
</td>
<td className="py-4 px-4 whitespace-nowrap">
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-secondary-container/20 text-secondary font-code-sm text-code-sm">
<span className="material-symbols-outlined text-[16px]">fingerprint</span>
<span>SHA256 Match</span>
</div>
</td>
<td className="py-4 px-4 whitespace-nowrap">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/20 text-primary font-label-sm text-label-sm font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
<span>Awaiting Sign-Off</span>
</span>
</td>
<td className="py-4 px-4 text-center whitespace-nowrap">
<div className="flex items-center justify-center gap-1">
<button className="p-1.5 rounded-md bg-primary-container text-on-primary-container hover:bg-primary transition-colors" type="button">
<span className="material-symbols-outlined text-[16px]">check</span>
</button>
<button className="p-1.5 rounded-md hover:bg-surface-container-highest text-on-surface-variant transition-colors" type="button">
<span className="material-symbols-outlined text-[16px]">visibility</span>
</button>
<button className="p-1.5 rounded-md hover:bg-error-container/20 hover:text-error text-on-surface-variant transition-colors" type="button">
<span className="material-symbols-outlined text-[16px]">block</span>
</button>
</div>
</td>
</tr>
{/*  Row 3: Vanguard Industrial (Approved)  */}
<tr className="hover:bg-surface-container transition-colors opacity-90">
<td className="py-4 px-4 text-center">
<input className="rounded bg-surface-container-high text-primary focus:ring-0 cursor-pointer" type="checkbox" />
</td>
<td className="py-4 px-4">
<div className="flex items-center gap-2">
<span className="font-code-sm text-code-sm font-semibold text-on-surface">PO-8919</span>
<span className="material-symbols-outlined text-[14px] text-outline cursor-pointer hover:text-on-surface">content_copy</span>
</div>
<span className="font-code-sm text-code-sm text-outline block mt-0.5">INV-2024-0985</span>
</td>
<td className="py-4 px-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-surface-container-highest flex items-center justify-center font-bold text-on-surface">
                  VI
                </div>
<div className="flex flex-col">
<span className="font-label-md text-label-md font-semibold text-on-surface">Vanguard Industrial</span>
<div className="flex items-center gap-1.5 mt-0.5">
<span className="px-1.5 py-0.2 rounded bg-surface-container font-label-sm text-label-sm text-outline">Industrial Tech</span>
<span className="w-1.5 h-1.5 rounded-full bg-outline"></span>
</div>
</div>
</div>
</td>
<td className="py-4 px-4 whitespace-nowrap">
<span className="font-label-md text-label-md text-on-surface">Yesterday, 4:18 PM</span>
<span className="block font-code-sm text-code-sm text-outline">UTC+00:00</span>
</td>
<td className="py-4 px-4">
<span className="font-label-md text-label-md text-on-surface font-medium">8 Line Items</span>
<span className="block font-body-sm text-body-sm text-outline">Hydraulic Actuators • Seals</span>
</td>
<td className="py-4 px-4 text-right whitespace-nowrap">
<span className="font-label-md text-label-md font-bold text-on-surface">$88,200.00</span>
<span className="block font-code-sm text-code-sm text-outline">Net 30 • USD</span>
</td>
<td className="py-4 px-4 whitespace-nowrap">
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-surface-container text-on-surface-variant font-code-sm text-code-sm">
<span className="material-symbols-outlined text-[16px] text-primary">verified</span>
<span>Ledger Sealed</span>
</div>
</td>
<td className="py-4 px-4 whitespace-nowrap">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
<span>Approved</span>
</span>
</td>
<td className="py-4 px-4 text-center whitespace-nowrap">
<div className="flex items-center justify-center gap-1">
<button className="p-1.5 rounded-md hover:bg-surface-container-highest text-on-surface-variant transition-colors" type="button">
<span className="material-symbols-outlined text-[16px]">visibility</span>
</button>
<button className="p-1.5 rounded-md hover:bg-surface-container-highest text-on-surface-variant transition-colors" type="button">
<span className="material-symbols-outlined text-[16px]">history</span>
</button>
</div>
</td>
</tr>
{/*  Row 4: Aura Chemicals (Flagged Tax Discrepancy)  */}
<tr className="hover:bg-surface-container transition-colors bg-error-container/5">
<td className="py-4 px-4 text-center">
<input className="rounded bg-surface-container-high text-primary focus:ring-0 cursor-pointer" type="checkbox" />
</td>
<td className="py-4 px-4">
<div className="flex items-center gap-2">
<span className="font-code-sm text-code-sm font-semibold text-error">PO-8918</span>
<span className="material-symbols-outlined text-[14px] text-outline cursor-pointer hover:text-on-surface">content_copy</span>
</div>
<span className="font-code-sm text-code-sm text-outline block mt-0.5">INV-2024-0982</span>
</td>
<td className="py-4 px-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-surface-container-highest flex items-center justify-center font-bold text-on-surface">
                  AC
                </div>
<div className="flex flex-col">
<span className="font-label-md text-label-md font-semibold text-on-surface">Aura Chemicals LLC</span>
<div className="flex items-center gap-1.5 mt-0.5">
<span className="px-1.5 py-0.2 rounded bg-surface-container font-label-sm text-label-sm text-outline">Chemical Synthetics</span>
<span className="w-1.5 h-1.5 rounded-full bg-error"></span>
</div>
</div>
</div>
</td>
<td className="py-4 px-4 whitespace-nowrap">
<span className="font-label-md text-label-md text-on-surface">Oct 24, 02:40 PM</span>
<span className="block font-code-sm text-code-sm text-outline">UTC+00:00</span>
</td>
<td className="py-4 px-4">
<span className="font-label-md text-label-md text-on-surface font-medium">2 Line Items</span>
<span className="block font-body-sm text-body-sm text-outline">Ultra-Pure Cleanroom Reagents</span>
</td>
<td className="py-4 px-4 text-right whitespace-nowrap">
<span className="font-label-md text-label-md font-bold text-error">$14,320.00</span>
<span className="block font-code-sm text-code-sm text-error">Variance +$420</span>
</td>
<td className="py-4 px-4 whitespace-nowrap">
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-error-container/20 text-error font-code-sm text-code-sm">
<span className="material-symbols-outlined text-[16px]">gpp_maybe</span>
<span>Tax Hash Mismatch</span>
</div>
</td>
<td className="py-4 px-4 whitespace-nowrap">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-error-container/30 text-error font-label-sm text-label-sm font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-error"></span>
<span>Flagged: Tax Drift</span>
</span>
</td>
<td className="py-4 px-4 text-center whitespace-nowrap">
<div className="flex items-center justify-center gap-1">
<button className="p-1.5 rounded-md hover:bg-surface-container-highest text-on-surface-variant transition-colors" title="Investigate Discrepancy" type="button">
<span className="material-symbols-outlined text-[16px] text-error">priority_high</span>
</button>
<button className="p-1.5 rounded-md hover:bg-surface-container-highest text-on-surface-variant transition-colors" type="button">
<span className="material-symbols-outlined text-[16px]">visibility</span>
</button>
</div>
</td>
</tr>
{/*  Row 5: Helios Quantum  */}
<tr className="hover:bg-surface-container transition-colors">
<td className="py-4 px-4 text-center">
<input className="rounded bg-surface-container-high text-primary focus:ring-0 cursor-pointer" type="checkbox" />
</td>
<td className="py-4 px-4">
<div className="flex items-center gap-2">
<span className="font-code-sm text-code-sm font-semibold text-on-surface">PO-8916</span>
<span className="material-symbols-outlined text-[14px] text-outline cursor-pointer hover:text-on-surface">content_copy</span>
</div>
<span className="font-code-sm text-code-sm text-outline block mt-0.5">INV-2024-0980</span>
</td>
<td className="py-4 px-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-surface-container-highest flex items-center justify-center font-bold text-on-surface">
                  HQ
                </div>
<div className="flex flex-col">
<span className="font-label-md text-label-md font-semibold text-on-surface">Helios Quantum Ltd</span>
<div className="flex items-center gap-1.5 mt-0.5">
<span className="px-1.5 py-0.2 rounded bg-surface-container font-label-sm text-label-sm text-outline">Optics Core</span>
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
</div>
</div>
</div>
</td>
<td className="py-4 px-4 whitespace-nowrap">
<span className="font-label-md text-label-md text-on-surface">Oct 23, 11:20 AM</span>
<span className="block font-code-sm text-code-sm text-outline">UTC+00:00</span>
</td>
<td className="py-4 px-4">
<span className="font-label-md text-label-md text-on-surface font-medium">5 Line Items</span>
<span className="block font-body-sm text-body-sm text-outline">Sub-Nanometer Laser Sensors</span>
</td>
<td className="py-4 px-4 text-right whitespace-nowrap">
<span className="font-label-md text-label-md font-bold text-on-surface">$72,600.00</span>
<span className="block font-code-sm text-code-sm text-outline">Net 30 • USD</span>
</td>
<td className="py-4 px-4 whitespace-nowrap">
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-primary-container/20 text-primary font-code-sm text-code-sm">
<span className="material-symbols-outlined text-[16px]">verified_user</span>
<span>FIPS 140-3 Valid</span>
</div>
</td>
<td className="py-4 px-4 whitespace-nowrap">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/20 text-primary font-label-sm text-label-sm font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
<span>Awaiting Sign-Off</span>
</span>
</td>
<td className="py-4 px-4 text-center whitespace-nowrap">
<div className="flex items-center justify-center gap-1">
<button className="p-1.5 rounded-md bg-primary-container text-on-primary-container hover:bg-primary transition-colors" type="button">
<span className="material-symbols-outlined text-[16px]">check</span>
</button>
<button className="p-1.5 rounded-md hover:bg-surface-container-highest text-on-surface-variant transition-colors" type="button">
<span className="material-symbols-outlined text-[16px]">visibility</span>
</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
{/*  Table Pagination Footer  */}
<div className="flex flex-col sm:flex-row items-center justify-between px-6 py-4 bg-surface-container-lowest gap-4">
<div className="font-body-sm text-body-sm text-on-surface-variant">
        Showing <span className="text-on-surface font-semibold">1-5</span> of <span className="text-on-surface font-semibold">142</span> recorded transactions
      </div>
<div className="flex items-center gap-2">
<button className="p-2 rounded-lg bg-surface-container-high text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest transition-colors disabled:opacity-40" disabled="" type="button">
<span className="material-symbols-outlined text-[18px]">chevron_left</span>
</button>
<button className="w-8 h-8 rounded-lg bg-primary-container text-on-primary-container font-label-md text-label-md font-semibold" type="button">1</button>
<button className="w-8 h-8 rounded-lg bg-surface-container-high text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors" type="button">2</button>
<button className="w-8 h-8 rounded-lg bg-surface-container-high text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors" type="button">3</button>
<span className="text-outline font-label-md px-1">•••</span>
<button className="w-8 h-8 rounded-lg bg-surface-container-high text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors" type="button">18</button>
<button className="p-2 rounded-lg bg-surface-container-high text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest transition-colors" type="button">
<span className="material-symbols-outlined text-[18px]">chevron_right</span>
</button>
</div>
</div>
</div>
{/*  Docked Selected Entry Inspector & Cryptographic Verification Drawer  */}
<div className="flex flex-col rounded-xl bg-surface-container-low shadow-xl overflow-hidden mt-2">
{/*  Inspector Header Bar  */}
<div className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 bg-surface-container border-b-0 gap-4">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-xl bg-primary-container/20 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[28px]">shield_with_heart</span>
</div>
<div>
<div className="flex items-center gap-3">
<h2 className="font-headline-md text-headline-md font-bold text-on-surface">Invoice Inspection: PO-8921</h2>
<span className="px-2.5 py-0.5 rounded-full bg-primary/20 text-primary font-label-sm text-label-sm font-semibold uppercase">Pending Sign-off</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
            Submitted by <span className="text-on-surface font-semibold">Astrid Lindqvist</span> (Nordic Freight) • Ref #INV-2024-0988 • Destination Vault: Virginia Tier-4
          </p>
</div>
</div>
<div className="flex items-center gap-3">
<button className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-surface-container-high text-on-surface hover:bg-surface-container-highest transition-colors font-label-md text-label-md" type="button">
<span className="material-symbols-outlined text-[16px]">picture_as_pdf</span>
<span>View Signed PDF</span>
</button>
<button className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-error-container/20 text-error hover:bg-error-container/30 transition-colors font-label-md text-label-md" type="button">
<span className="material-symbols-outlined text-[16px]">report</span>
<span>Flag Compliance Variance</span>
</button>
<button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-container text-on-primary-container hover:bg-primary transition-colors font-label-md text-label-md font-semibold shadow-[0_0_16px_rgba(16,185,129,0.3)]" type="button">
<span className="material-symbols-outlined text-[18px]">verified</span>
<span>Approve &amp; Commit to Ledger</span>
</button>
</div>
</div>
{/*  Inspector Content Split Pane  */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
{/*  Left 2 Cols: Itemized Breakdown Table  */}
<div className="lg:col-span-2 space-y-4">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-outline font-semibold">Itemized Line Items (3)</span>
<span className="font-code-sm text-code-sm text-primary">All Line Units Validated</span>
</div>
<div className="overflow-x-auto rounded-lg bg-surface-container-lowest">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-highest/30 text-outline font-label-sm text-label-sm uppercase">
<th className="py-2.5 px-4">Line Item Description</th>
<th className="py-2.5 px-3 text-center">Qty</th>
<th className="py-2.5 px-3 text-right">Unit Price</th>
<th className="py-2.5 px-3 text-right">Tax (VAT 0%)</th>
<th className="py-2.5 px-4 text-right">Total</th>
</tr>
</thead>
<tbody className="font-body-sm text-body-sm text-on-surface divide-y divide-surface-container-highest/20">
<tr>
<td className="py-3 px-4">
<div className="font-label-md text-label-md font-semibold text-on-surface">Liquid Nitrogen Cryo-Cylinder 500L</div>
<span className="font-code-sm text-code-sm text-outline">SKU: CRYO-N2-500 • HazClass 2.2 Non-Flammable Gas</span>
</td>
<td className="py-3 px-3 text-center font-code-sm text-code-sm">10</td>
<td className="py-3 px-3 text-right font-code-sm text-code-sm">$1,200.00</td>
<td className="py-3 px-3 text-right font-code-sm text-code-sm text-outline">$0.00</td>
<td className="py-3 px-4 text-right font-label-md text-label-md font-semibold text-on-surface">$12,000.00</td>
</tr>
<tr>
<td className="py-3 px-4">
<div className="font-label-md text-label-md font-semibold text-on-surface">Pressurized HazMat Intermodal Freight Service</div>
<span className="font-code-sm text-code-sm text-outline">LOG-RT-OSLO-IAD • Temp Controlled Ambient -196C</span>
</td>
<td className="py-3 px-3 text-center font-code-sm text-code-sm">2</td>
<td className="py-3 px-3 text-right font-code-sm text-code-sm">$11,500.00</td>
<td className="py-3 px-3 text-right font-code-sm text-code-sm text-outline">$0.00</td>
<td className="py-3 px-4 text-right font-label-md text-label-md font-semibold text-on-surface">$23,000.00</td>
</tr>
<tr>
<td className="py-3 px-4">
<div className="font-label-md text-label-md font-semibold text-on-surface">DOT Hazmat Certified Transit Escort &amp; Insurance</div>
<span className="font-code-sm text-code-sm text-outline">INS-SEC-TIER1 • Underwritten Lloyds Sovereign</span>
</td>
<td className="py-3 px-3 text-center font-code-sm text-code-sm">1</td>
<td className="py-3 px-3 text-right font-code-sm text-code-sm">$7,100.00</td>
<td className="py-3 px-3 text-right font-code-sm text-code-sm text-outline">$0.00</td>
<td className="py-3 px-4 text-right font-label-md text-label-md font-semibold text-on-surface">$7,100.00</td>
</tr>
</tbody>
<tfoot>
<tr className="bg-surface-container-highest/20 font-label-md text-label-md font-semibold text-on-surface">
<td className="py-3 px-4 text-right" colspan="4">Total Payable Amount (USD):</td>
<td className="py-3 px-4 text-right font-headline-md text-headline-md text-primary">$42,100.00</td>
</tr>
</tfoot>
</table>
</div>
</div>
{/*  Right 1 Col: Cryptographic Clearance & Audit Shield  */}
<div className="flex flex-col justify-between p-4 rounded-lg bg-surface-container-lowest space-y-4">
<div>
<div className="flex items-center justify-between pb-3">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-outline font-semibold">Security Clearance</span>
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-primary">
<span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
              Secured
            </span>
</div>
<div className="space-y-3 font-code-sm text-code-sm">
<div className="p-2.5 rounded-lg bg-surface-container-high space-y-1">
<span className="text-outline block text-[11px] uppercase">Zero-Knowledge Ledger Hash</span>
<div className="text-primary truncate font-semibold">0x7f9ab32c8188e401099ffc78912eab318</div>
</div>
<div className="p-2.5 rounded-lg bg-surface-container-high space-y-1">
<span className="text-outline block text-[11px] uppercase">Vendor Cryptographic Signature</span>
<div className="text-on-surface truncate">ed25519:nordic-freight:key-rev-49</div>
</div>
<div className="p-2.5 rounded-lg bg-surface-container-high space-y-1">
<span className="text-outline block text-[11px] uppercase">Compliance Node</span>
<div className="flex items-center justify-between text-on-surface">
<span>Cluster 07-Virginia</span>
<span className="text-primary">FIPS 140-3 Mode</span>
</div>
</div>
</div>
</div>
<div className="pt-2">
<div className="flex items-center gap-2 p-2 rounded-lg bg-primary-container/10 text-primary font-body-sm text-body-sm">
<span className="material-symbols-outlined text-[18px]">verified</span>
<span>Automated checks passed: Price catalog index, tax exemptions, and PO limits conform.</span>
</div>
</div>
</div>
</div>
</div>
</div></main></div>
    </>
  );
}
