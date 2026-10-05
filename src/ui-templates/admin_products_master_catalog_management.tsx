export default function AdminProductsMasterCatalogManagement() {
  return (
    <>
<aside className="fixed left-0 top-0 h-full w-72 bg-surface-container-low z-50 flex flex-col justify-between shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="flex flex-col flex-1 min-h-0 pt-6"><div className="px-6 pb-6 flex items-center gap-3"><img alt="Brand logo. - Primary color: #10b981
- Font: plusJakartaSans
- Mode: dark
- Roundness: rounded-md
" className="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1Vgr0DRvF6sQsNjTmXRPKmIT7nueBmM-lDL8uuGg4b9kzW8Z396dKB8uZxIPV3SCuNKOQ9uJT7C33fFqxicHpvUZVeZJlzM5hBRqrI49H03M4ePuuc-BvH_u61u8a1UDmr_FD--HLhLqCx7AG4_BIYN-9qEDF9bXDcBs2gsivlcHCqoezPKgzpGFJtnXR4TAJLb9wUnAQjDoMnExmbqZWPb-Bmk3s9kjNb4pEW0GleH5STJu5I5y8Fe-rU"><div className="flex flex-col"><span className="font-headline-md text-headline-md text-on-surface tracking-tight leading-none">Apex Nexus</span><div className="flex items-center gap-1.5 mt-1"><span className="inline-flex items-center px-1.5 py-0.5 rounded-full bg-primary-container/20 text-primary font-label-sm text-label-sm uppercase">FIPS 140-3</span><span className="font-code-sm text-code-sm text-on-surface-variant">v4.9.2</span></div></div></div><div className="overflow-y-auto flex-1 px-4 space-y-6"><div className="space-y-1"><div className="px-3 pb-2 font-label-sm text-label-sm uppercase tracking-wider text-outline">Main Console</div><nav className="space-y-1" data-active-classes="bg-primary-container text-on-primary-container font-medium rounded-lg shadow-[0_0_16px_rgba(16,185,129,0.25)]"><a className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="admin-dashboard" href="#"><span className="material-symbols-outlined text-[20px]">space_dashboard</span><span className="font-label-md text-label-md">Dashboard</span></a><a className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="purchases-and-entries" href="#"><span className="material-symbols-outlined text-[20px]">receipt_long</span><span className="font-label-md text-label-md">Purchases / Entries</span></a><a className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="reports-and-analytics" href="#"><span className="material-symbols-outlined text-[20px]">analytics</span><span className="font-label-md text-label-md">Reports &amp; Analytics</span></a><a className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="supplier-catalog" href="#"><span className="material-symbols-outlined text-[20px]">corporate_fare</span><span className="font-label-md text-label-md">Supplier Catalog</span></a><a className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="product-master-catalog" href="#"><span className="material-symbols-outlined text-[20px]">inventory_2</span><span className="font-label-md text-label-md">Product Catalog</span></a></nav></div><div className="space-y-2"><div className="flex items-center justify-between px-3"><span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Active Suppliers</span><span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span></div><nav className="space-y-1" data-active-classes="bg-surface-container-high text-on-surface rounded-lg"><a className="flex items-center justify-between px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors group" data-path="nordic-freight-corp" href="#"><div className="flex items-center gap-2 truncate"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span><span className="font-body-sm text-body-sm truncate">Nordic Freight Corp</span></div><span className="inline-flex items-center px-2 py-0.5 rounded-full bg-primary-container/20 text-primary font-label-sm text-label-sm">+3 pending</span></a><a className="flex items-center justify-between px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors group" data-path="apex-microfab-inc" href="#"><div className="flex items-center gap-2 truncate"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span><span className="font-body-sm text-body-sm truncate">Apex Microfab Inc</span></div><span className="inline-flex items-center px-2 py-0.5 rounded-full bg-primary-container/20 text-primary font-label-sm text-label-sm">+1 pending</span></a><a className="flex items-center justify-between px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors group" data-path="vanguard-industrial" href="#"><div className="flex items-center gap-2 truncate"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span><span className="font-body-sm text-body-sm truncate">Vanguard Industrial</span></div><span className="inline-flex items-center px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">Synced</span></a><a className="flex items-center justify-between px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors group" data-path="aura-chemicals" href="#"><div className="flex items-center gap-2 truncate"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span><span className="font-body-sm text-body-sm truncate">Aura Chemicals</span></div><span className="inline-flex items-center px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">Synced</span></a></nav></div></div></div><div className="p-4 bg-surface-container-lowest mx-3 mb-4 rounded-xl flex flex-col gap-2.5"><div className="flex items-center justify-between"><div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-primary"></span><span className="font-code-sm text-code-sm text-on-surface font-semibold">Cluster 07-Virginia</span></div><span className="font-label-sm text-label-sm text-primary">Active</span></div><div className="flex items-center justify-between text-on-surface-variant"><span className="font-body-sm text-body-sm">TLS Security</span><span className="font-code-sm text-code-sm text-on-surface">TLS 1.3 Strict</span></div><div className="flex items-center justify-between text-on-surface-variant"><span className="font-body-sm text-body-sm">Gateway API</span><span className="font-label-sm text-label-sm text-primary">Operational</span></div></div></aside><div className="pl-72"><header className="fixed top-0 left-72 right-0 h-16 bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 flex items-center justify-between px-8"><div className="flex items-center gap-4 flex-1 max-w-md"><div className="relative w-full flex items-center"><span className="material-symbols-outlined absolute left-3 text-outline text-[18px]">search</span><input className="w-full h-10 pl-9 pr-12 rounded-lg bg-surface-container-high text-on-surface font-body-sm text-body-sm placeholder:text-outline focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Search entities, records, ledger (Press ⌘K)..." type="text" /><div className="absolute right-2.5 px-1.5 py-0.5 rounded bg-surface-container font-code-sm text-code-sm text-outline">⌘K</div></div></div><div className="flex items-center gap-4"><button className="relative p-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors" type="button"><span className="material-symbols-outlined text-[22px]">notifications</span><span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 rounded-full bg-primary ring-2 ring-surface shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span></button><div className="h-5 w-[1px] bg-surface-container-highest"></div><div className="flex items-center gap-3"><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><span className="material-symbols-outlined text-on-primary text-[18px]">person</span></div><div className="flex flex-col text-left"><span className="font-label-md text-label-md text-on-surface font-semibold leading-tight">Operations Lead</span><span className="font-label-sm text-label-sm text-primary">System Administrator</span></div></div><div className="h-5 w-[1px] bg-surface-container-highest"></div><a className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary-container/20 text-secondary hover:bg-secondary-container/30 transition-colors font-label-md text-label-md" data-path="supplier-portal" href="#"><span className="material-symbols-outlined text-[16px]">swap_horiz</span><span>Supplier Portal</span></a><a className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-on-surface-variant hover:text-error hover:bg-error-container/20 transition-colors font-label-md text-label-md" data-path="auth-login" href="#"><span className="material-symbols-outlined text-[16px]">logout</span><span>Sign Out</span></a></div></header><main className="w-full pt-16 bg-surface"><div className="flex flex-col w-full">
{/*  Visual Ambient Backing & Micro Accents  */}
<div className="relative w-full px-8 py-8 space-y-8 max-w-[1720px] mx-auto overflow-hidden">
<div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-container/5 rounded-full blur-3xl pointer-events-none -z-10"></div>
<div className="absolute top-48 left-10 w-80 h-80 bg-secondary-container/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
{/*  Governance Breadcrumb & Security Enclave Bar  */}
<div className="flex flex-wrap items-center justify-between gap-4">
<div className="flex items-center gap-2 text-on-surface-variant font-label-md text-label-md">
<span className="hover:text-on-surface transition-colors cursor-pointer">Master Governance</span>
<span className="material-symbols-outlined text-[14px] text-outline">chevron_right</span>
<span className="hover:text-on-surface transition-colors cursor-pointer">Master Data</span>
<span className="material-symbols-outlined text-[14px] text-outline">chevron_right</span>
<span className="text-primary font-semibold">Products &amp; Deliverables Catalog</span>
</div>
<div className="flex items-center gap-3">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
</span>
<span className="font-code-sm text-code-sm text-on-surface font-medium">Cluster 07-Virginia: Ledger Synced</span>
<span className="text-outline text-label-sm font-label-sm">|</span>
<span className="font-code-sm text-code-sm text-primary">SPEC-2025.4-v9</span>
</div>
<div className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[14px] text-primary">verified_user</span>
<span>FIPS 140-3 Consensus Validated</span>
</div>
</div>
</div>
{/*  Header & Action Row  */}
<div className="flex flex-col xl:flex-row xl:items-end justify-between gap-6 pb-2">
<div className="space-y-2 max-w-3xl">
<div className="flex items-center gap-3">
<div className="p-2.5 rounded-xl bg-surface-container-high text-primary shadow-sm">
<span className="material-symbols-outlined text-[28px]">inventory_2</span>
</div>
<div>
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Master Product &amp; Deliverables Catalog</h1>
<p className="font-body-md text-body-md text-on-surface-variant">
              Centralized registry governance enforcing cryptographic bill of materials, supplier rate indexation matrices, and zero-loss cryogenic transit standards.
            </p>
</div>
</div>
</div>
<div className="flex flex-wrap items-center gap-3">
<button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-container-high hover:bg-surface-bright text-on-surface transition-colors font-label-md text-label-md shadow-sm" type="button">
<span className="material-symbols-outlined text-[18px] text-on-surface-variant">file_download</span>
<span>Export Catalog</span>
<span className="px-1.5 py-0.5 rounded bg-surface-container font-code-sm text-code-sm text-outline">CSV / JSON</span>
</button>
<button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-container-high hover:bg-surface-bright text-on-surface transition-colors font-label-md text-label-md shadow-sm" type="button">
<span className="material-symbols-outlined text-[18px] text-on-surface-variant">upload_file</span>
<span>Bulk SKU Ingest</span>
</button>
<button className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-primary-container hover:bg-primary text-on-primary-container hover:text-on-primary transition-all font-label-md text-label-md font-semibold shadow-[0_0_20px_rgba(16,185,129,0.35)] active:scale-95" type="button">
<span className="material-symbols-outlined text-[18px]">add_circle</span>
<span>Create New SKU</span>
</button>
</div>
</div>
{/*  Top KPI Metrics  */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
{/*  Card 1  */}
<div className="p-5 rounded-xl bg-surface-container-low relative overflow-hidden group hover:bg-surface-container transition-colors shadow-sm">
<div className="flex items-center justify-between mb-3">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-outline font-semibold">Active Registered Deliverables</span>
<span className="p-2 rounded-lg bg-surface-container-high text-primary">
<span className="material-symbols-outlined text-[20px]">category</span>
</span>
</div>
<div className="flex items-baseline gap-2">
<span className="font-headline-xl text-headline-xl text-on-surface tracking-tight">142</span>
<span className="font-label-md text-label-md text-primary font-semibold">+8 this quarter</span>
</div>
<div className="mt-3 flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm">
<span>Distributed across 6 taxonomies</span>
<span className="font-code-sm text-code-sm text-on-surface">100% active</span>
</div>
<div className="w-full bg-surface-container-highest h-1 rounded-full mt-3 overflow-hidden">
<div className="bg-primary h-full w-[84%] rounded-full"></div>
</div>
</div>
{/*  Card 2  */}
<div className="p-5 rounded-xl bg-surface-container-low relative overflow-hidden group hover:bg-surface-container transition-colors shadow-sm">
<div className="flex items-center justify-between mb-3">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-outline font-semibold">Contracted Supply Partners</span>
<span className="p-2 rounded-lg bg-surface-container-high text-secondary">
<span className="material-symbols-outlined text-[20px]">handshake</span>
</span>
</div>
<div className="flex items-baseline gap-2">
<span className="font-headline-xl text-headline-xl text-on-surface tracking-tight">38</span>
<span className="font-label-md text-label-md text-secondary font-semibold">Verified tier 1/2</span>
</div>
<div className="mt-3 flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm">
<span>Supplier redundancy ratio</span>
<span className="font-code-sm text-code-sm text-on-surface font-semibold">3.7 sources/item</span>
</div>
<div className="w-full bg-surface-container-highest h-1 rounded-full mt-3 overflow-hidden">
<div className="bg-secondary h-full w-[72%] rounded-full"></div>
</div>
</div>
{/*  Card 3  */}
<div className="p-5 rounded-xl bg-surface-container-low relative overflow-hidden group hover:bg-surface-container transition-colors shadow-sm">
<div className="flex items-center justify-between mb-3">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-outline font-semibold">Pending Rate Proposals</span>
<span className="p-2 rounded-lg bg-surface-container-high text-tertiary">
<span className="material-symbols-outlined text-[20px]">how_to_vote</span>
</span>
</div>
<div className="flex items-baseline gap-2">
<span className="font-headline-xl text-headline-xl text-on-surface tracking-tight">5</span>
<span className="inline-flex items-center px-2 py-0.5 rounded-full bg-tertiary-container/30 text-tertiary font-label-sm text-label-sm font-semibold">Quorum Active</span>
</div>
<div className="mt-3 flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm">
<span>3 in quorum voting</span>
<span className="font-code-sm text-code-sm text-on-surface">2 in forensic audit</span>
</div>
<div className="w-full bg-surface-container-highest h-1 rounded-full mt-3 overflow-hidden">
<div className="bg-tertiary h-full w-[45%] rounded-full"></div>
</div>
</div>
{/*  Card 4  */}
<div className="p-5 rounded-xl bg-surface-container-low relative overflow-hidden group hover:bg-surface-container transition-colors shadow-sm">
<div className="flex items-center justify-between mb-3">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-outline font-semibold">Catalog Ledger Health</span>
<span className="p-2 rounded-lg bg-surface-container-high text-primary">
<span className="material-symbols-outlined text-[20px]">lock_clock</span>
</span>
</div>
<div className="flex items-baseline gap-2">
<span className="font-headline-xl text-headline-xl text-primary tracking-tight">100%</span>
<span className="font-label-md text-label-md text-primary font-semibold">Zero Desync</span>
</div>
<div className="mt-3 flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm">
<span>Sha-256 state hash</span>
<span className="font-code-sm text-code-sm text-on-surface-variant truncate max-w-[120px]">#09e4a..b90f</span>
</div>
<div className="w-full bg-surface-container-highest h-1 rounded-full mt-3 overflow-hidden">
<div className="bg-primary h-full w-full rounded-full"></div>
</div>
</div>
</div>
{/*  Search, Taxonomy, and Dynamic Filters  */}
<div className="space-y-4">
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 p-4 rounded-xl bg-surface-container-low shadow-sm">
{/*  Search Input  */}
<div className="relative flex-1 min-w-[280px]">
<span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-outline text-[20px]">search</span>
<input className="w-full h-11 pl-10 pr-20 rounded-lg bg-surface-container text-on-surface font-body-md text-body-md placeholder:text-outline focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Search deliverables by SKU code, UN designation, chemical title, vendor rate..." type="text" />
<div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 px-1.5 py-0.5 rounded bg-surface-container-high text-outline font-code-sm text-code-sm">
<span>⌘</span><span>K</span>
</div>
</div>
{/*  Filter Dropdowns  */}
<div className="flex flex-wrap items-center gap-3">
<div className="flex items-center gap-2">
<span className="font-label-sm text-label-sm text-outline uppercase font-semibold">Vendor:</span>
<select className="h-11 px-3 py-1.5 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md focus:outline-none focus:ring-1 focus:ring-primary cursor-pointer">
<option value="all">All Contractors (38)</option>
<option value="nordic">Nordic Freight Corp</option>
<option value="apex">Apex Microfab Inc</option>
<option value="vanguard">Vanguard Industrial</option>
<option value="aura">Aura Chemicals LLC</option>
</select>
</div>
<div className="flex items-center gap-2">
<span className="font-label-sm text-label-sm text-outline uppercase font-semibold">Compliance:</span>
<select className="h-11 px-3 py-1.5 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md focus:outline-none focus:ring-1 focus:ring-primary cursor-pointer">
<option value="all">All Statuses</option>
<option value="certified">Certified &amp; Cleared</option>
<option value="review">Quorum Review</option>
<option value="deprecated">Archived / Deprecated</option>
</select>
</div>
<button className="p-2.5 rounded-lg bg-surface-container hover:bg-surface-bright text-on-surface-variant hover:text-on-surface transition-colors" type="button">
<span className="material-symbols-outlined text-[20px]">tune</span>
</button>
</div>
</div>
{/*  Taxonomy Filter Tabs  */}
<div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
<button className="px-4 py-2 rounded-lg bg-primary-container text-on-primary-container font-label-md text-label-md font-semibold shrink-0 shadow-sm flex items-center gap-2">
<span>All Deliverables</span>
<span className="px-2 py-0.5 rounded-full bg-on-primary-container/20 font-code-sm text-code-sm">142</span>
</button>
<button className="px-4 py-2 rounded-lg bg-surface-container-low hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface font-label-md text-label-md shrink-0 transition-colors flex items-center gap-2">
<span>Cryogenic Storage &amp; Liquids</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container-high font-code-sm text-code-sm text-outline">34</span>
</button>
<button className="px-4 py-2 rounded-lg bg-surface-container-low hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface font-label-md text-label-md shrink-0 transition-colors flex items-center gap-2">
<span>Hazardous Materials Haulage</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container-high font-code-sm text-code-sm text-outline">28</span>
</button>
<button className="px-4 py-2 rounded-lg bg-surface-container-low hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface font-label-md text-label-md shrink-0 transition-colors flex items-center gap-2">
<span>Secure Enclave Vaulting</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container-high font-code-sm text-code-sm text-outline">19</span>
</button>
<button className="px-4 py-2 rounded-lg bg-surface-container-low hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface font-label-md text-label-md shrink-0 transition-colors flex items-center gap-2">
<span>Armed Tactical Transit</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container-high font-code-sm text-code-sm text-outline">16</span>
</button>
<button className="px-4 py-2 rounded-lg bg-surface-container-low hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface font-label-md text-label-md shrink-0 transition-colors flex items-center gap-2">
<span>Industrial Valves &amp; Hardware</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container-high font-code-sm text-code-sm text-outline">45</span>
</button>
</div>
</div>
{/*  Master Deliverables Ledger (Data Table)  */}
<div className="rounded-xl bg-surface-container-low overflow-hidden shadow-md">
<div className="p-4 px-6 bg-surface-container flex flex-wrap items-center justify-between gap-4">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary text-[22px]">database</span>
<span className="font-headline-md text-headline-md text-on-surface">Registered Catalog Ledger</span>
<span className="font-code-sm text-code-sm text-outline">Live Consensus Engine</span>
</div>
<div className="flex items-center gap-3 text-on-surface-variant font-body-sm text-body-sm">
<span>Showing 6 of 142 deliverables</span>
<div className="flex items-center gap-1">
<button className="p-1 rounded bg-surface-container-high text-outline cursor-not-allowed">
<span className="material-symbols-outlined text-[16px]">chevron_left</span>
</button>
<span className="font-code-sm text-code-sm px-2 text-on-surface">Page 1 / 24</span>
<button className="p-1 rounded bg-surface-container-high text-on-surface hover:bg-surface-bright">
<span className="material-symbols-outlined text-[16px]">chevron_right</span>
</button>
</div>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-lowest text-outline font-label-sm text-label-sm uppercase tracking-wider">
<th className="py-3.5 px-6 font-semibold">Item Code &amp; Specifications</th>
<th className="py-3.5 px-4 font-semibold">Hazard Class</th>
<th className="py-3.5 px-4 font-semibold">Benchmark Standard</th>
<th className="py-3.5 px-4 font-semibold">Contracted Suppliers &amp; Agreed Rates</th>
<th className="py-3.5 px-4 font-semibold">Telemetry &amp; SLA</th>
<th className="py-3.5 px-4 font-semibold">Ledger Governance</th>
<th className="py-3.5 px-6 font-semibold text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-surface-container font-body-md text-body-md">
{/*  Row 1: High Tech Cryogenic Material  */}
<tr className="hover:bg-surface-container/60 transition-colors group">
<td className="py-4 px-6">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2">
<span className="font-code-sm text-code-sm font-bold text-primary px-2 py-0.5 rounded bg-primary-container/20">APX-CRYO-091</span>
<span className="font-label-md text-label-md font-semibold text-on-surface">Liquid Helium-4 Supercritical</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Purity 99.9999% Grade 6.0 | Iso-Dewar container 45,000L</span>
<div className="flex items-center gap-1.5 mt-0.5">
<span className="font-code-sm text-code-sm px-1.5 py-0.2 rounded bg-surface-container-high text-outline">UN 1963</span>
<span className="font-code-sm text-code-sm px-1.5 py-0.2 rounded bg-surface-container-high text-outline">DOT-SP 10078</span>
</div>
</div>
</td>
<td className="py-4 px-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-tertiary-container/20 text-tertiary font-label-sm text-label-sm font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                  Class 2.2 Cryo Gas
                </span>
</td>
<td className="py-4 px-4">
<div className="flex flex-col">
<span className="font-code-sm text-code-sm font-bold text-on-surface">$142.80 / Liter</span>
<span className="font-body-sm text-body-sm text-outline">Base index NYMEX+3.2%</span>
</div>
</td>
<td className="py-4 px-4">
<div className="flex flex-col gap-1.5">
<div className="flex items-center justify-between gap-3 text-body-sm">
<span className="text-on-surface font-medium truncate max-w-[140px]">Nordic Freight Corp</span>
<span className="font-code-sm text-code-sm font-semibold text-primary">$138.50/L</span>
</div>
<div className="flex items-center justify-between gap-3 text-body-sm">
<span className="text-on-surface-variant truncate max-w-[140px]">Apex Microfab</span>
<span className="font-code-sm text-code-sm text-on-surface-variant">$144.10/L</span>
</div>
<span className="font-label-sm text-label-sm text-outline">+1 tertiary backer</span>
</div>
</td>
<td className="py-4 px-4">
<div className="flex flex-col gap-1">
<span className="font-label-sm text-label-sm text-primary flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">ac_unit</span> &lt; 4.2 Kelvin Target
                  </span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Continuous IoT boil-off telemetry</span>
</div>
</td>
<td className="py-4 px-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary-container/20 text-primary font-label-sm text-label-sm font-semibold">
<span className="material-symbols-outlined text-[14px]">verified</span>
                  Consensus Active
                </span>
</td>
<td className="py-4 px-6 text-right">
<div className="flex items-center justify-end gap-1">
<button className="p-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors" title="Inspect Vendor Rates">
<span className="material-symbols-outlined text-[18px]">query_stats</span>
</button>
<button className="p-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors" title="Audit Log">
<span className="material-symbols-outlined text-[18px]">history</span>
</button>
<button className="p-1.5 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-colors" title="Edit Deliverable">
<span className="material-symbols-outlined text-[18px]">edit_square</span>
</button>
</div>
</td>
</tr>
{/*  Row 2: Under Quorum Review  */}
<tr className="bg-tertiary-container/5 hover:bg-tertiary-container/10 transition-colors group">
<td className="py-4 px-6">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2">
<span className="font-code-sm text-code-sm font-bold text-tertiary px-2 py-0.5 rounded bg-tertiary-container/20">APX-TRN-882</span>
<span className="font-label-md text-label-md font-semibold text-on-surface">Sub-Zero Liquid Argon Haulage</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Pressurized ISO-tank transport, dual vacuum-jacketed</span>
<div className="flex items-center gap-1.5 mt-0.5">
<span className="font-code-sm text-code-sm px-1.5 py-0.2 rounded bg-surface-container-high text-outline">UN 1951</span>
<span className="font-code-sm text-code-sm px-1.5 py-0.2 rounded bg-surface-container-high text-outline">ADR-8</span>
</div>
</div>
</td>
<td className="py-4 px-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary-container/20 text-secondary font-label-sm text-label-sm font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                  Class 2 Refrigerated
                </span>
</td>
<td className="py-4 px-4">
<div className="flex flex-col">
<span className="font-code-sm text-code-sm font-bold text-tertiary">$11.85 / km-ton</span>
<span className="font-body-sm text-body-sm text-error">Proposal: +8.4%</span>
</div>
</td>
<td className="py-4 px-4">
<div className="flex flex-col gap-1.5">
<div className="flex items-center justify-between gap-3 text-body-sm">
<span className="text-on-surface font-medium truncate max-w-[140px]">Vanguard Industrial</span>
<span className="font-code-sm text-code-sm font-semibold text-tertiary">$12.85/k-t</span>
</div>
<div className="flex items-center justify-between gap-3 text-body-sm">
<span className="text-on-surface-variant truncate max-w-[140px]">Nordic Freight</span>
<span className="font-code-sm text-code-sm text-on-surface-variant">$11.85/k-t</span>
</div>
<span className="font-label-sm text-label-sm text-tertiary font-medium">Rate adjustment pending</span>
</div>
</td>
<td className="py-4 px-4">
<div className="flex flex-col gap-1">
<span className="font-label-sm text-label-sm text-on-surface flex items-center gap-1">
<span className="material-symbols-outlined text-[14px] text-tertiary">speed</span> 72-hr max corridor
                  </span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Real-time pressure drop alarms</span>
</div>
</td>
<td className="py-4 px-4">
<div className="flex flex-col gap-1">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-tertiary-container/30 text-tertiary font-label-sm text-label-sm font-semibold">
<span className="material-symbols-outlined text-[14px]">how_to_vote</span>
                    Quorum 4/5 Sigs
                  </span>
<span className="font-code-sm text-code-sm text-outline">Expires in 18 hrs</span>
</div>
</td>
<td className="py-4 px-6 text-right">
<div className="flex items-center justify-end gap-1">
<button className="px-2.5 py-1 rounded-lg bg-tertiary-container text-on-tertiary font-label-sm text-label-sm font-semibold hover:bg-tertiary transition-colors" title="Vote Quorum Proposal">
                    Cast Vote
                  </button>
<button className="p-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors" title="Audit Log">
<span className="material-symbols-outlined text-[18px]">history</span>
</button>
</div>
</td>
</tr>
{/*  Row 3: Secure Enclave Vaulting  */}
<tr className="hover:bg-surface-container/60 transition-colors group">
<td className="py-4 px-6">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2">
<span className="font-code-sm text-code-sm font-bold text-secondary px-2 py-0.5 rounded bg-secondary-container/20">APX-VLT-304</span>
<span className="font-label-md text-label-md font-semibold text-on-surface">Class-4 Electromagnetic Shielded Vault</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Tempest-grade Faraday cage bay, isolated seismic damping</span>
<div className="flex items-center gap-1.5 mt-0.5">
<span className="font-code-sm text-code-sm px-1.5 py-0.2 rounded bg-surface-container-high text-outline">TEMPEST-B</span>
<span className="font-code-sm text-code-sm px-1.5 py-0.2 rounded bg-surface-container-high text-outline">SCIF-09</span>
</div>
</div>
</td>
<td className="py-4 px-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  Sovereign Enclave
                </span>
</td>
<td className="py-4 px-4">
<div className="flex flex-col">
<span className="font-code-sm text-code-sm font-bold text-on-surface">$4,850.00 / Bay-Mo</span>
<span className="font-body-sm text-body-sm text-outline">Tier IV redundant power</span>
</div>
</td>
<td className="py-4 px-4">
<div className="flex flex-col gap-1.5">
<div className="flex items-center justify-between gap-3 text-body-sm">
<span className="text-on-surface font-medium truncate max-w-[140px]">Apex Microfab Inc</span>
<span className="font-code-sm text-code-sm font-semibold text-primary">$4,850/mo</span>
</div>
<div className="flex items-center justify-between gap-3 text-body-sm">
<span className="text-on-surface-variant truncate max-w-[140px]">Vanguard Industrial</span>
<span className="font-code-sm text-code-sm text-on-surface-variant">$5,120/mo</span>
</div>
</div>
</td>
<td className="py-4 px-4">
<div className="flex flex-col gap-1">
<span className="font-label-sm text-label-sm text-on-surface flex items-center gap-1">
<span className="material-symbols-outlined text-[14px] text-primary">security</span> 99.999% Attenuation
                  </span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Biometric dual-custody gate</span>
</div>
</td>
<td className="py-4 px-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary-container/20 text-primary font-label-sm text-label-sm font-semibold">
<span className="material-symbols-outlined text-[14px]">verified</span>
                  Consensus Active
                </span>
</td>
<td className="py-4 px-6 text-right">
<div className="flex items-center justify-end gap-1">
<button className="p-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors" title="Inspect Details">
<span className="material-symbols-outlined text-[18px]">query_stats</span>
</button>
<button className="p-1.5 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-colors" title="Edit Deliverable">
<span className="material-symbols-outlined text-[18px]">edit_square</span>
</button>
</div>
</td>
</tr>
{/*  Row 4: Armed Tactical Transit  */}
<tr className="hover:bg-surface-container/60 transition-colors group">
<td className="py-4 px-6">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2">
<span className="font-code-sm text-code-sm font-bold text-primary px-2 py-0.5 rounded bg-primary-container/20">APX-ARM-117</span>
<span className="font-label-md text-label-md font-semibold text-on-surface">Armed Convoy Escort &amp; Secure Corridor</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Dual level-B6 armored chase vehicles with tactical operators</span>
<div className="flex items-center gap-1.5 mt-0.5">
<span className="font-code-sm text-code-sm px-1.5 py-0.2 rounded bg-surface-container-high text-outline">DOD-IT-22</span>
<span className="font-code-sm text-code-sm px-1.5 py-0.2 rounded bg-surface-container-high text-outline">ITAR-COMPLIANT</span>
</div>
</div>
</td>
<td className="py-4 px-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-error-container/30 text-error font-label-sm text-label-sm font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-error"></span>
                  Tactical Escort
                </span>
</td>
<td className="py-4 px-4">
<div className="flex flex-col">
<span className="font-code-sm text-code-sm font-bold text-on-surface">$340.00 / Hour-Unit</span>
<span className="font-body-sm text-body-sm text-outline">Includes SATCOM relay</span>
</div>
</td>
<td className="py-4 px-4">
<div className="flex flex-col gap-1.5">
<div className="flex items-center justify-between gap-3 text-body-sm">
<span className="text-on-surface font-medium truncate max-w-[140px]">Nordic Defense Ops</span>
<span className="font-code-sm text-code-sm font-semibold text-primary">$340.00/h</span>
</div>
<div className="flex items-center justify-between gap-3 text-body-sm">
<span className="text-on-surface-variant truncate max-w-[140px]">Vanguard Industrial</span>
<span className="font-code-sm text-code-sm text-on-surface-variant">$365.00/h</span>
</div>
</div>
</td>
<td className="py-4 px-4">
<div className="flex flex-col gap-1">
<span className="font-label-sm text-label-sm text-on-surface flex items-center gap-1">
<span className="material-symbols-outlined text-[14px] text-primary">satellite_alt</span> 100ms GPS heartbeat
                  </span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Continuous remote kill-switch</span>
</div>
</td>
<td className="py-4 px-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary-container/20 text-primary font-label-sm text-label-sm font-semibold">
<span className="material-symbols-outlined text-[14px]">verified</span>
                  Consensus Active
                </span>
</td>
<td className="py-4 px-6 text-right">
<div className="flex items-center justify-end gap-1">
<button className="p-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors" title="Inspect Details">
<span className="material-symbols-outlined text-[18px]">query_stats</span>
</button>
<button className="p-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors" title="Audit Log">
<span className="material-symbols-outlined text-[18px]">history</span>
</button>
<button className="p-1.5 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-colors" title="Edit Deliverable">
<span className="material-symbols-outlined text-[18px]">edit_square</span>
</button>
</div>
</td>
</tr>
{/*  Row 5: Hazardous Materials Haulage  */}
<tr className="hover:bg-surface-container/60 transition-colors group">
<td className="py-4 px-6">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2">
<span className="font-code-sm text-code-sm font-bold text-primary px-2 py-0.5 rounded bg-primary-container/20">APX-CHM-502</span>
<span className="font-label-md text-label-md font-semibold text-on-surface">Anhydrous Hydrofluoric Acid (Electronic)</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Semiconductor ultra-pure etch, Monel 400 cylinders</span>
<div className="flex items-center gap-1.5 mt-0.5">
<span className="font-code-sm text-code-sm px-1.5 py-0.2 rounded bg-surface-container-high text-outline">UN 1052</span>
<span className="font-code-sm text-code-sm px-1.5 py-0.2 rounded bg-surface-container-high text-outline">Hazmat 8 (6.1)</span>
</div>
</div>
</td>
<td className="py-4 px-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-error-container/20 text-error font-label-sm text-label-sm font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-error"></span>
                  Class 8 Corrosive Poison
                </span>
</td>
<td className="py-4 px-4">
<div className="flex flex-col">
<span className="font-code-sm text-code-sm font-bold text-on-surface">$88.20 / Kg</span>
<span className="font-body-sm text-body-sm text-outline">EPA track &amp; trace levy</span>
</div>
</td>
<td className="py-4 px-4">
<div className="flex flex-col gap-1.5">
<div className="flex items-center justify-between gap-3 text-body-sm">
<span className="text-on-surface font-medium truncate max-w-[140px]">Aura Chemicals</span>
<span className="font-code-sm text-code-sm font-semibold text-primary">$86.50/Kg</span>
</div>
<div className="flex items-center justify-between gap-3 text-body-sm">
<span className="text-on-surface-variant truncate max-w-[140px]">Nordic Freight</span>
<span className="font-code-sm text-code-sm text-on-surface-variant">$90.10/Kg</span>
</div>
</div>
</td>
<td className="py-4 px-4">
<div className="flex flex-col gap-1">
<span className="font-label-sm text-label-sm text-on-surface flex items-center gap-1">
<span className="material-symbols-outlined text-[14px] text-error">view_stream</span> Zero-Permeation Seal
                  </span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Continuous optical vapor sniffers</span>
</div>
</td>
<td className="py-4 px-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary-container/20 text-primary font-label-sm text-label-sm font-semibold">
<span className="material-symbols-outlined text-[14px]">verified</span>
                  Consensus Active
                </span>
</td>
<td className="py-4 px-6 text-right">
<div className="flex items-center justify-end gap-1">
<button className="p-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors" title="Inspect Details">
<span className="material-symbols-outlined text-[18px]">query_stats</span>
</button>
<button className="p-1.5 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-colors" title="Edit Deliverable">
<span className="material-symbols-outlined text-[18px]">edit_square</span>
</button>
</div>
</td>
</tr>
{/*  Row 6: Industrial Cryogenic Hardware  */}
<tr className="hover:bg-surface-container/60 transition-colors group">
<td className="py-4 px-6">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2">
<span className="font-code-sm text-code-sm font-bold text-primary px-2 py-0.5 rounded bg-primary-container/20">APX-HDW-740</span>
<span className="font-label-md text-label-md font-semibold text-on-surface">Cryogenic Bellows Relief Valve 2-Inch</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Stainless 316L, Hastelloy spring, ASME Section VIII stamped</span>
<div className="flex items-center gap-1.5 mt-0.5">
<span className="font-code-sm text-code-sm px-1.5 py-0.2 rounded bg-surface-container-high text-outline">ASME-VIII</span>
<span className="font-code-sm text-code-sm px-1.5 py-0.2 rounded bg-surface-container-high text-outline">CRN-0C14980</span>
</div>
</div>
</td>
<td className="py-4 px-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-outline"></span>
                  Hardware / Pressure
                </span>
</td>
<td className="py-4 px-4">
<div className="flex flex-col">
<span className="font-code-sm text-code-sm font-bold text-on-surface">$1,620.00 / Unit</span>
<span className="font-body-sm text-body-sm text-outline">Batch test lot #891</span>
</div>
</td>
<td className="py-4 px-4">
<div className="flex flex-col gap-1.5">
<div className="flex items-center justify-between gap-3 text-body-sm">
<span className="text-on-surface font-medium truncate max-w-[140px]">Vanguard Industrial</span>
<span className="font-code-sm text-code-sm font-semibold text-primary">$1,580/ea</span>
</div>
<div className="flex items-center justify-between gap-3 text-body-sm">
<span className="text-on-surface-variant truncate max-w-[140px]">Apex Microfab</span>
<span className="font-code-sm text-code-sm text-on-surface-variant">$1,620/ea</span>
</div>
</div>
</td>
<td className="py-4 px-4">
<div className="flex flex-col gap-1">
<span className="font-label-sm text-label-sm text-primary flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">check_circle</span> 50,000 Cycle Tested
                  </span>
<span className="font-body-sm text-body-sm text-on-surface-variant">He leak rate &lt; 1x10⁻⁸ mbar·l/s</span>
</div>
</td>
<td className="py-4 px-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary-container/20 text-primary font-label-sm text-label-sm font-semibold">
<span className="material-symbols-outlined text-[14px]">verified</span>
                  Consensus Active
                </span>
</td>
<td className="py-4 px-6 text-right">
<div className="flex items-center justify-end gap-1">
<button className="p-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors" title="Inspect Details">
<span className="material-symbols-outlined text-[18px]">query_stats</span>
</button>
<button className="p-1.5 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-colors" title="Edit Deliverable">
<span className="material-symbols-outlined text-[18px]">edit_square</span>
</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
{/*  Table Footer / Enclave Ledger Audit Anchor  */}
<div className="p-4 px-6 bg-surface-container-lowest flex flex-wrap items-center justify-between gap-3">
<div className="flex items-center gap-2 text-on-surface-variant font-code-sm text-code-sm">
<span className="material-symbols-outlined text-primary text-[16px]">terminal</span>
<span>Ledger Merkle Root:</span>
<span className="text-on-surface font-semibold">e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855</span>
</div>
<div className="flex items-center gap-2 font-label-sm text-label-sm text-outline">
<span>Cryptographic Epoch 1,429</span>
<span>•</span>
<span className="text-primary">Next consensus tick: 04:12 UTC</span>
</div>
</div>
</div>
{/*  Visual Showcase Asset Grid (High-Craft Sensory Context)  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="relative rounded-xl overflow-hidden bg-surface-container-low h-48 group shadow-sm">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Close-up technical shot of a high-purity cryogenic liquid helium dewar tank with stainless steel piping and frosted valves emitting faint icy vapor, high-tech fintech dark mode lighting with subtle emerald green reflection" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFBOxg429K2UY7wHyHLWv2SLJ7cf4QIzCpkeHqkE4l5Lp9QerCcLGZtRRx14TKFaF11EmOVsOLoIgtE-QyhOpt_OiQtPX6zxZDQCDJs4VjFfDA9O2IkCIk2UfEulMgjUwHFr1XECcTag_gN3rtKPsG7Pl3SBEPbw5I4sonyxE6N8U2eZqNDKWv7NUEISYO_AW7rI8VdoS3AzsDTEJ1t-OApXUMwbBQK94ZMKXcusCpJd-CUZ6nK3ypdw" />
<div className="absolute inset-0 bg-gradient-to-t from-surface-dim via-surface-dim/60 to-transparent p-5 flex flex-col justify-end">
<span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">Cryogenic Supply Line</span>
<span className="font-headline-md text-headline-md text-on-surface font-semibold">Supercritical Helium Fleet</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">Active zero-boil-off chillers on 14 cross-border rail links.</p>
</div>
</div>
<div className="relative rounded-xl overflow-hidden bg-surface-container-low h-48 group shadow-sm">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Interior of an ultra-secure subterranean Faraday cage vault facility with brushed titanium reinforced modular server bays, cool deep blue and emerald LED running lights along clean geometric lines" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgcYrmELmsM1EErrp0SLcnCZjq-OQNH7Fa2ihdbMzaDW5X0WEQ5ClIs9H7O3HkEtCJ535GTi2srDorfNiJYIHRdAkNlg21tWHU4RjbZppQGhC8mfhE5B9AEJOm5k7XBZRPWMUCi9xHHo5-Tj5Ozo62zKOz0AZcubTRvymxhjjroaw7bAku-Hum1-n4jHyFCtpKW61bg9SaZxGMmwKT4Dz9CQHpvrCfvQNlBqoXkrFtxkazvorb2HqmPw" />
<div className="absolute inset-0 bg-gradient-to-t from-surface-dim via-surface-dim/60 to-transparent p-5 flex flex-col justify-end">
<span className="font-label-sm text-label-sm text-secondary uppercase font-bold tracking-wider">Electromagnetic SCIF</span>
<span className="font-headline-md text-headline-md text-on-surface font-semibold">Class-4 Vaulting Hubs</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">Real-time attenuation telemetry streaming directly to enclave.</p>
</div>
</div>
<div className="relative rounded-xl overflow-hidden bg-surface-container-low h-48 group shadow-sm">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Tactical armored transport convoy on a rainy highway at twilight with sleek matte black composite panels and encrypted satellite antennas, illuminated with sharp emergency neon green indicators" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXl2FPe9WXTIUpzK9nmdVQavBpNV4csRYJynkFa6p9MIdI7H9f-8s6YxpNxK1apaPpMztB-ljU5V4Ufmm24LyNEMWfuu0-l1bndCzNBMCMP7PSlHhDOU_wPo-lj8NdWbhMKXVDN0TQdeOMI2Et-492h0m_fjCoo8TaShR5a7MxxeeplSXNOPBw1hnAyNDltHMwziJv6E-vuNNTQu9uLn-edotFNA02crwoKffQ_spCQtqhLiYsEMogyg" />
<div className="absolute inset-0 bg-gradient-to-t from-surface-dim via-surface-dim/60 to-transparent p-5 flex flex-col justify-end">
<span className="font-label-sm text-label-sm text-tertiary uppercase font-bold tracking-wider">Secured Escort Unit</span>
<span className="font-headline-md text-headline-md text-on-surface font-semibold">Tactical Transit Grid</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">Dual-redundant SATCOM relays with geofenced corridor enforcement.</p>
</div>
</div>
</div>
{/*  Lower Governance Panels (2-Column Bento)  */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-6">
{/*  Left Box: Automatic Rate Indexation Matrix  */}
<div className="p-6 rounded-xl bg-surface-container-low shadow-sm space-y-6">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="p-2 rounded-lg bg-surface-container-high text-primary">
<span className="material-symbols-outlined text-[22px]">functions</span>
</div>
<div>
<h2 className="font-headline-md text-headline-md text-on-surface">Automatic Rate Indexation Matrix</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">Dynamic calculation logic triggering contractual SKU price floats</p>
</div>
</div>
<span className="font-code-sm text-code-sm px-2 py-1 rounded bg-surface-container text-primary font-semibold">ALGO-V3.8</span>
</div>
{/*  Formula Callout  */}
<div className="p-4 rounded-lg bg-surface-container-lowest font-code-sm text-code-sm space-y-2">
<div className="text-outline uppercase text-[10px] tracking-widest font-semibold">Active Algorithmic Benchmark Formula</div>
<div className="text-primary font-semibold truncate">
            Rate<sub>final</sub> = Base<sub>contract</sub> × [ 1 + α(ΔFuel<sub>EIA</sub>) + β(ΔGrid<sub>PJM</sub>) + γ(Hazard<sub>Levy</sub>) ]
          </div>
<div className="text-on-surface-variant text-[11px]">
            Coefficients: α = 0.38 (Diesel/Bunker), β = 0.29 (Cryo Liquefaction Grid), γ = 0.12 (EPA / Hazmat Surcharge)
          </div>
</div>
{/*  Metric Drivers Bars  */}
<div className="space-y-4">
<div className="space-y-1.5">
<div className="flex items-center justify-between text-body-sm">
<span className="text-on-surface font-medium">Diesel Fuel Benchmark Index (EIA Gulf Coast)</span>
<span className="font-code-sm text-code-sm text-primary font-semibold">$3.842 / Gal (+1.4%)</span>
</div>
<div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
<div className="bg-primary h-full rounded-full" style="width: 68%;"></div>
</div>
</div>
<div className="space-y-1.5">
<div className="flex items-center justify-between text-body-sm">
<span className="text-on-surface font-medium">Industrial Power Grid Peak Surcharge (PJM Regional)</span>
<span className="font-code-sm text-code-sm text-tertiary font-semibold">88.4 MWh ($0.114/kWh)</span>
</div>
<div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
<div className="bg-tertiary h-full rounded-full" style="width: 54%;"></div>
</div>
</div>
<div className="space-y-1.5">
<div className="flex items-center justify-between text-body-sm">
<span className="text-on-surface font-medium">Hazardous Materials Regulatory &amp; DOT Assessment</span>
<span className="font-code-sm text-code-sm text-on-surface-variant font-semibold">Class 2/8 Indexed Baseline</span>
</div>
<div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
<div className="bg-secondary h-full rounded-full" style="width: 82%;"></div>
</div>
</div>
</div>
<div className="pt-2 flex items-center justify-between">
<span className="font-body-sm text-body-sm text-on-surface-variant">Last automatic global re-weighting occurred 14m ago.</span>
<button className="text-primary hover:text-primary-fixed transition-colors font-label-md text-label-md font-semibold flex items-center gap-1" type="button">
<span>Configure Matrix Parameters</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
</div>
</div>
{/*  Right Box: Active Rate Revision Quorum  */}
<div className="p-6 rounded-xl bg-surface-container-low shadow-sm space-y-6">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="p-2 rounded-lg bg-surface-container-high text-tertiary">
<span className="material-symbols-outlined text-[22px]">how_to_vote</span>
</div>
<div>
<h2 className="font-headline-md text-headline-md text-on-surface">Active Rate Revision Quorum</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">Multi-sig consensus voting for supplier rate adjustments</p>
</div>
</div>
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-tertiary-container/30 text-tertiary font-code-sm text-code-sm font-semibold">
            2 Proposals Active
          </span>
</div>
{/*  Proposal Item 1  */}
<div className="p-4 rounded-xl bg-surface-container space-y-3">
<div className="flex items-start justify-between gap-3">
<div>
<div className="flex items-center gap-2">
<span className="font-code-sm text-code-sm font-bold text-tertiary">PROP-2025-084</span>
<span className="font-label-md text-label-md font-semibold text-on-surface">Sub-Zero Liquid Argon Haulage</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                Vanguard Industrial requesting +8.4% index adjustment due to cryogenic compressor overhaul costs.
              </p>
</div>
<span className="px-2 py-0.5 rounded bg-surface-container-high text-tertiary font-code-sm text-code-sm font-semibold whitespace-nowrap">
              4 of 5 Signed
            </span>
</div>
{/*  Quorum Progress  */}
<div className="space-y-1">
<div className="flex items-center justify-between text-body-sm">
<span className="text-on-surface-variant font-label-sm text-label-sm">Signatures Collected (80% threshold reached)</span>
<span className="font-code-sm text-code-sm text-primary font-bold">1 needed for final commit</span>
</div>
<div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
<div className="bg-tertiary h-full rounded-full" style="width: 80%;"></div>
</div>
</div>
<div className="flex items-center justify-between pt-1">
<div className="flex items-center -space-x-1.5 overflow-hidden">
<div className="inline-block h-6 w-6 rounded-full bg-primary flex items-center justify-center text-[10px] font-bold text-on-primary" title="SecOps Lead">SO</div>
<div className="inline-block h-6 w-6 rounded-full bg-secondary flex items-center justify-center text-[10px] font-bold text-on-secondary" title="Supply Chain VP">SC</div>
<div className="inline-block h-6 w-6 rounded-full bg-tertiary flex items-center justify-center text-[10px] font-bold text-on-tertiary" title="Compliance Officer">CO</div>
<div className="inline-block h-6 w-6 rounded-full bg-surface-bright flex items-center justify-center text-[10px] font-bold text-on-surface" title="Finance Lead">FL</div>
<div className="inline-block h-6 w-6 rounded-full bg-surface-container-highest flex items-center justify-center text-[10px] text-outline font-semibold" title="Pending: Legal Enclave">?</div>
</div>
<div className="flex items-center gap-2">
<button className="px-3 py-1 rounded-lg bg-surface-container-high hover:bg-surface-bright text-on-surface font-label-sm text-label-sm transition-colors">
                View Ledger Audit
              </button>
<button className="px-3 py-1 rounded-lg bg-primary-container hover:bg-primary text-on-primary-container hover:text-on-primary font-label-sm text-label-sm font-semibold transition-colors">
                Affix Admin Key
              </button>
</div>
</div>
</div>
{/*  Proposal Item 2  */}
<div className="p-4 rounded-xl bg-surface-container space-y-3">
<div className="flex items-start justify-between gap-3">
<div>
<div className="flex items-center gap-2">
<span className="font-code-sm text-code-sm font-bold text-on-surface-variant">PROP-2025-082</span>
<span className="font-label-md text-label-md font-semibold text-on-surface">Liquid Nitrogen Trailer Fleet Allocation</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                Nordic Freight Corp proposed +4.1% tariff revision for ISO-33 tankers on Northern European corridors.
              </p>
</div>
<span className="px-2 py-0.5 rounded bg-surface-container-high text-outline font-code-sm text-code-sm font-semibold whitespace-nowrap">
              2 of 5 Signed
            </span>
</div>
{/*  Quorum Progress  */}
<div className="space-y-1">
<div className="flex items-center justify-between text-body-sm">
<span className="text-on-surface-variant font-label-sm text-label-sm">Signatures Collected (40% threshold reached)</span>
<span className="font-code-sm text-code-sm text-outline font-medium">3 signatures required</span>
</div>
<div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
<div className="bg-outline h-full rounded-full" style="width: 40%;"></div>
</div>
</div>
<div className="flex items-center justify-between pt-1">
<div className="flex items-center -space-x-1.5 overflow-hidden">
<div className="inline-block h-6 w-6 rounded-full bg-primary flex items-center justify-center text-[10px] font-bold text-on-primary" title="SecOps Lead">SO</div>
<div className="inline-block h-6 w-6 rounded-full bg-surface-bright flex items-center justify-center text-[10px] font-bold text-on-surface" title="Finance Lead">FL</div>
<div className="inline-block h-6 w-6 rounded-full bg-surface-container-highest flex items-center justify-center text-[10px] text-outline font-semibold">?</div>
<div className="inline-block h-6 w-6 rounded-full bg-surface-container-highest flex items-center justify-center text-[10px] text-outline font-semibold">?</div>
<div className="inline-block h-6 w-6 rounded-full bg-surface-container-highest flex items-center justify-center text-[10px] text-outline font-semibold">?</div>
</div>
<button className="px-3 py-1 rounded-lg bg-surface-container-high hover:bg-surface-bright text-on-surface font-label-sm text-label-sm transition-colors">
              Review Proposal Terms
            </button>
</div>
</div>
</div>
</div>
</div>
</div>
<script>
  // Dynamic Tab Filter Micro-Interaction
  document.querySelectorAll('button[class*="shrink-0"]').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('button[class*="shrink-0"]').forEach(t => {
        t.classList.remove('bg-primary-container', 'text-on-primary-container', 'font-semibold');
        t.classList.add('bg-surface-container-low', 'text-on-surface-variant');
      });
      tab.classList.remove('bg-surface-container-low', 'text-on-surface-variant');
      tab.classList.add('bg-primary-container', 'text-on-primary-container', 'font-semibold');
    });
  });

  // Table row interactive telemetry focus highlight
  document.querySelectorAll('tbody tr').forEach(row => {
    row.addEventListener('click', (e) => {
      if (!e.target.closest('button')) {
        document.querySelectorAll('tbody tr').forEach(r => r.classList.remove('ring-1', 'ring-primary/40'));
        row.classList.add('ring-1', 'ring-primary/40');
      }
    });
  });
</script></main></div>
    </>
  );
}
