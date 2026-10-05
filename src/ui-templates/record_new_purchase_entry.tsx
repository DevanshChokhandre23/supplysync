export default function RecordNewPurchaseEntry() {
  return (
    <>
<aside className="fixed left-0 top-0 h-full w-72 bg-surface-container-low z-50 flex flex-col justify-between shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="flex flex-col flex-1 min-h-0 pt-6"><div className="px-6 pb-6 flex items-center gap-3"><img alt="Brand logo. - Primary color: #10b981
- Font: plusJakartaSans
- Mode: dark
- Roundness: rounded-md
" className="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1Vgr0DRvF6sQsNjTmXRPKmIT7nueBmM-lDL8uuGg4b9kzW8Z396dKB8uZxIPV3SCuNKOQ9uJT7C33fFqxicHpvUZVeZJlzM5hBRqrI49H03M4ePuuc-BvH_u61u8a1UDmr_FD--HLhLqCx7AG4_BIYN-9qEDF9bXDcBs2gsivlcHCqoezPKgzpGFJtnXR4TAJLb9wUnAQjDoMnExmbqZWPb-Bmk3s9kjNb4pEW0GleH5STJu5I5y8Fe-rU"><div className="flex flex-col"><span className="font-headline-md text-headline-md text-on-surface tracking-tight leading-none">Apex Nexus</span><div className="flex items-center gap-1.5 mt-1"><span className="inline-flex items-center px-1.5 py-0.5 rounded-full bg-primary-container/20 text-primary font-label-sm text-label-sm uppercase">FIPS 140-3</span><span className="font-code-sm text-code-sm text-on-surface-variant">v4.9.2</span></div></div></div><div className="overflow-y-auto flex-1 px-4 space-y-6"><div className="space-y-1"><div className="px-3 pb-2 font-label-sm text-label-sm uppercase tracking-wider text-outline">Main Console</div><nav className="space-y-1" data-active-classes="bg-primary-container text-on-primary-container font-medium rounded-lg shadow-[0_0_16px_rgba(16,185,129,0.25)]"><a className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="admin-dashboard" href="#"><span className="material-symbols-outlined text-[20px]">space_dashboard</span><span className="font-label-md text-label-md">Dashboard</span></a><a className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="purchases-and-entries" href="#"><span className="material-symbols-outlined text-[20px]">receipt_long</span><span className="font-label-md text-label-md">Purchases / Entries</span></a><a className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="reports-and-analytics" href="#"><span className="material-symbols-outlined text-[20px]">analytics</span><span className="font-label-md text-label-md">Reports &amp; Analytics</span></a><a className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="supplier-catalog" href="#"><span className="material-symbols-outlined text-[20px]">corporate_fare</span><span className="font-label-md text-label-md">Supplier Catalog</span></a><a className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="product-master-catalog" href="#"><span className="material-symbols-outlined text-[20px]">inventory_2</span><span className="font-label-md text-label-md">Product Catalog</span></a></nav></div><div className="space-y-2"><div className="flex items-center justify-between px-3"><span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Active Suppliers</span><span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span></div><nav className="space-y-1" data-active-classes="bg-surface-container-high text-on-surface rounded-lg"><a className="flex items-center justify-between px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors group" data-path="nordic-freight-corp" href="#"><div className="flex items-center gap-2 truncate"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span><span className="font-body-sm text-body-sm truncate">Nordic Freight Corp</span></div><span className="inline-flex items-center px-2 py-0.5 rounded-full bg-primary-container/20 text-primary font-label-sm text-label-sm">+3 pending</span></a><a className="flex items-center justify-between px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors group" data-path="apex-microfab-inc" href="#"><div className="flex items-center gap-2 truncate"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span><span className="font-body-sm text-body-sm truncate">Apex Microfab Inc</span></div><span className="inline-flex items-center px-2 py-0.5 rounded-full bg-primary-container/20 text-primary font-label-sm text-label-sm">+1 pending</span></a><a className="flex items-center justify-between px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors group" data-path="vanguard-industrial" href="#"><div className="flex items-center gap-2 truncate"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span><span className="font-body-sm text-body-sm truncate">Vanguard Industrial</span></div><span className="inline-flex items-center px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">Synced</span></a><a className="flex items-center justify-between px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors group" data-path="aura-chemicals" href="#"><div className="flex items-center gap-2 truncate"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span><span className="font-body-sm text-body-sm truncate">Aura Chemicals</span></div><span className="inline-flex items-center px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">Synced</span></a></nav></div></div></div><div className="p-4 bg-surface-container-lowest mx-3 mb-4 rounded-xl flex flex-col gap-2.5"><div className="flex items-center justify-between"><div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-primary"></span><span className="font-code-sm text-code-sm text-on-surface font-semibold">Cluster 07-Virginia</span></div><span className="font-label-sm text-label-sm text-primary">Active</span></div><div className="flex items-center justify-between text-on-surface-variant"><span className="font-body-sm text-body-sm">TLS Security</span><span className="font-code-sm text-code-sm text-on-surface">TLS 1.3 Strict</span></div><div className="flex items-center justify-between text-on-surface-variant"><span className="font-body-sm text-body-sm">Gateway API</span><span className="font-label-sm text-label-sm text-primary">Operational</span></div></div></aside><div className="pl-72"><header className="fixed top-0 left-72 right-0 h-16 bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 flex items-center justify-between px-8"><div className="flex items-center gap-4 flex-1 max-w-md"><div className="relative w-full flex items-center"><span className="material-symbols-outlined absolute left-3 text-outline text-[18px]">search</span><input className="w-full h-10 pl-9 pr-12 rounded-lg bg-surface-container-high text-on-surface font-body-sm text-body-sm placeholder:text-outline focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Search entities, records, ledger (Press ⌘K)..." type="text" /><div className="absolute right-2.5 px-1.5 py-0.5 rounded bg-surface-container font-code-sm text-code-sm text-outline">⌘K</div></div></div><div className="flex items-center gap-4"><button className="relative p-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors" type="button"><span className="material-symbols-outlined text-[22px]">notifications</span><span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 rounded-full bg-primary ring-2 ring-surface shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span></button><div className="h-5 w-[1px] bg-surface-container-highest"></div><div className="flex items-center gap-3"><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><span className="material-symbols-outlined text-on-primary text-[18px]">person</span></div><div className="flex flex-col text-left"><span className="font-label-md text-label-md text-on-surface font-semibold leading-tight">Operations Lead</span><span className="font-label-sm text-label-sm text-primary">System Administrator</span></div></div><div className="h-5 w-[1px] bg-surface-container-highest"></div><a className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary-container/20 text-secondary hover:bg-secondary-container/30 transition-colors font-label-md text-label-md" data-path="supplier-portal" href="#"><span className="material-symbols-outlined text-[16px]">swap_horiz</span><span>Supplier Portal</span></a><a className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-on-surface-variant hover:text-error hover:bg-error-container/20 transition-colors font-label-md text-label-md" data-path="auth-login" href="#"><span className="material-symbols-outlined text-[16px]">logout</span><span>Sign Out</span></a></div></header><main className="w-full pt-16 bg-surface"><div className="flex flex-col w-full">
{/*  Interactive Style Hooks & Tab Highlighting Script  */}
<script>
    document.addEventListener('DOMContentLoaded', () => {
      // Highlight Purchases/Entries in navigation shell
      const navLinks = document.querySelectorAll('aside nav a');
      navLinks.forEach(link => {
        if (link.getAttribute('data-path') === 'purchases-and-entries') {
          link.classList.remove('text-on-surface-variant');
          link.classList.add('bg-primary-container', 'text-on-primary-container', 'font-medium', 'shadow-[0_0_16px_rgba(16,185,129,0.25)]');
        }
      });
    });

    function recalculateTotals() {
      const rows = document.querySelectorAll('#line-items-tbody tr[data-line]');
      let subtotal = 0;
      let totalUnits = 0;

      rows.forEach(row => {
        const qty = parseFloat(row.querySelector('.input-qty')?.value || 0);
        const price = parseFloat(row.querySelector('.input-price')?.value || 0);
        const total = qty * price;
        const totalEl = row.querySelector('.line-total-display');
        if (totalEl) {
          totalEl.textContent = '$' + total.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        }
        subtotal += total;
        totalUnits += qty;
      });

      const surcharge = 350.00;
      const grandTotal = subtotal + surcharge;

      const formattedSubtotal = '$' + subtotal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      const formattedGrandTotal = '$' + grandTotal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

      document.getElementById('subtotal-display').textContent = formattedSubtotal;
      document.getElementById('summary-subtotal-display').textContent = formattedSubtotal;
      document.getElementById('grandtotal-display').textContent = formattedGrandTotal;
      document.getElementById('sidebar-grandtotal-display').textContent = formattedGrandTotal;
      document.getElementById('sidebar-units-display').textContent = `${rows.length} items (${totalUnits} units total)`;
    }

    function removeRow(btn) {
      const row = btn.closest('tr');
      if (document.querySelectorAll('#line-items-tbody tr[data-line]').length > 1) {
        row.remove();
        recalculateTotals();
      }
    }

    function addNewRow() {
      const tbody = document.getElementById('line-items-tbody');
      const rowCount = tbody.querySelectorAll('tr[data-line]').length + 1;
      const tr = document.createElement('tr');
      tr.setAttribute('data-line', rowCount);
      tr.className = 'group transition-colors hover:bg-surface-container-high/50';
      tr.innerHTML = `
        <td className="py-3 px-4 text-center font-code-sm text-code-sm text-outline">0${rowCount}</td>
        <td className="py-3 px-4">
          <input type="text" placeholder="Item description or catalog identifier" className="w-full bg-surface-container-lowest px-3 py-1.5 rounded-lg text-on-surface font-body-sm text-body-sm focus:outline-none focus:bg-surface-container focus:ring-1 focus:ring-primary shadow-sm" value="Specialized Buffer Reagent Ultra-99" />
          <div className="mt-1 flex items-center gap-2">
            <span className="font-code-sm text-code-sm text-outline">SKU:</span>
            <input type="text" className="bg-transparent font-code-sm text-code-sm text-on-surface-variant w-28 uppercase focus:outline-none focus:text-primary" value="CHM-BUF-${Math.floor(100 + Math.random() * 900)}" />
          </div>
        </td>
        <td className="py-3 px-4">
          <select className="bg-surface-container-lowest text-on-surface-variant px-2.5 py-1.5 rounded-lg font-body-sm text-body-sm focus:outline-none focus:ring-1 focus:ring-primary shadow-sm">
            <option>Cryo / Reagents</option>
            <option selected>Chemical HazMat</option>
            <option>Optics & Telemetry</option>
            <option>Safety Escort</option>
          </select>
        </td>
        <td className="py-3 px-4">
          <input type="number" min="1" value="1" oninput="recalculateTotals()" className="input-qty w-16 text-right bg-surface-container-lowest px-2 py-1.5 rounded-lg text-on-surface font-code-sm text-code-sm focus:outline-none focus:ring-1 focus:ring-primary shadow-sm" />
        </td>
        <td className="py-3 px-4">
          <div className="relative flex items-center">
            <span className="absolute left-2 font-code-sm text-code-sm text-outline">$</span>
            <input type="number" step="0.01" value="850.00" oninput="recalculateTotals()" className="input-price w-28 pl-5 pr-2 py-1.5 text-right bg-surface-container-lowest rounded-lg text-on-surface font-code-sm text-code-sm focus:outline-none focus:ring-1 focus:ring-primary shadow-sm" />
          </div>
        </td>
        <td className="py-3 px-4 text-center">
          <span className="font-label-sm text-label-sm text-on-surface-variant">0.0% (Exempt)</span>
        </td>
        <td className="py-3 px-4 text-right">
          <span className="line-total-display font-code-sm text-code-sm font-semibold text-on-surface">$850.00</span>
        </td>
        <td className="py-3 px-3 text-center">
          <button type="button" onclick="removeRow(this)" className="p-1 rounded-lg text-outline hover:text-error hover:bg-error-container/30 transition-colors">
            <span className="material-symbols-outlined text-[18px]">delete</span>
          </button>
        </td>
      `;
      tbody.appendChild(tr);
      recalculateTotals();
    }

    function generatePONumber() {
      const rand = Math.floor(1000 + Math.random() * 9000);
      document.getElementById('po-input').value = `PO-2024-${rand}`;
    }
  </script>
{/*  Content Container with strict adherence to Spacing & Grid System  */}
<div className="p-8 max-w-[1600px] mx-auto w-full space-y-6">
{/*  Top Action & Navigation Context Bar  */}
<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 pb-2">
<div className="space-y-1.5">
{/*  Breadcrumb Hierarchy  */}
<nav className="flex items-center gap-2 font-label-sm text-label-sm uppercase tracking-wider text-outline">
<span>Master Data Governance</span>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<a className="hover:text-primary transition-colors" href="#">Purchases &amp; Entries Ledger</a>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span className="text-primary font-semibold">Record New Entry</span>
</nav>
<h1 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">Record New Purchase Entry</h1>
<p className="font-body-md text-body-md text-on-surface-variant max-w-3xl">
          Authoritatively register inbound vendor invoices, attach cryptographic purchase order bindings, itemize line items, and schedule ledger commit.
        </p>
</div>
{/*  Action Suite & Node Seal  */}
<div className="flex flex-wrap items-center gap-3">
{/*  Compliance Indicator Badge  */}
<div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-high shadow-sm">
<span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
<span className="font-code-sm text-code-sm text-on-surface">Compliance Node: Virginia Tier-4</span>
<span className="px-1.5 py-0.5 rounded bg-surface-container font-label-sm text-label-sm text-primary">FIPS 140-3</span>
</div>
<button className="px-4 py-2 rounded-lg bg-surface-container-high text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest transition-colors font-label-md text-label-md shadow-sm" type="button">
          Save Draft
        </button>
<a className="px-3 py-2 rounded-lg text-on-surface-variant hover:text-error transition-colors font-label-md text-label-md" href="#">
          Cancel &amp; Return
        </a>
</div>
</div>
{/*  2-Column Responsive Split Canvas  */}
<div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
{/*  LEFT COLUMN: The Creation & Itemization Form (8 of 12 cols = ~67%)  */}
<div className="xl:col-span-8 flex flex-col space-y-6">
{/*  SECTION 1: General & Invoice Metadata  */}
<section className="bg-surface-container-low rounded-xl p-6 shadow-md relative overflow-hidden">
<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/80 via-primary-container/40 to-transparent"></div>
<div className="flex items-center justify-between pb-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-primary-container/20 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[20px]">feed</span>
</div>
<div className="flex flex-col">
<h2 className="font-headline-md text-headline-md text-on-surface">General &amp; Invoice Metadata</h2>
<span className="font-body-sm text-body-sm text-on-surface-variant">Bind physical vendor documents to internal procurement ledgers</span>
</div>
</div>
<span className="font-label-sm text-label-sm uppercase tracking-wider px-2 py-0.5 rounded bg-surface-container text-outline">Section 01</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
{/*  Supplier Dropdown with instant verified badge  */}
<div className="space-y-1.5 md:col-span-2">
<label className="font-label-md text-label-md text-on-surface font-semibold flex items-center justify-between">
<span>Authorized Supplier / Vendor Entity</span>
<span className="font-code-sm text-code-sm text-primary flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">verified</span> Cryptographically Active
                </span>
</label>
<div className="relative">
<select className="w-full h-11 pl-4 pr-10 rounded-lg bg-surface-container-high text-on-surface font-body-md text-body-md focus:outline-none focus:ring-1 focus:ring-primary shadow-sm appearance-none">
<option selected="">Nordic Freight Corp (VND-8841-NFC • Tier 1 Strategic)</option>
<option>Apex Microfab Inc (VND-1092-AMI • High-Precision Fab)</option>
<option>Vanguard Industrial Heavy Equip (VND-4911-VIH)</option>
<option>Aura Chemicals Global Substrates (VND-7719-ACG)</option>
</select>
<span className="material-symbols-outlined absolute right-3 top-3 text-outline pointer-events-none text-[20px]">expand_more</span>
</div>
<div className="flex items-center gap-4 pt-1 px-1">
<span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-[14px] text-outline">mail</span> dispatch@nordicfreight.eu
                </span>
<span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-[14px] text-primary">speed</span> 99.8% On-Time SLA
                </span>
<span className="font-body-sm text-body-sm text-primary flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">shield</span> EDI Encrypted Route
                </span>
</div>
</div>
{/*  PO Number Input with generator button  */}
<div className="space-y-1.5">
<label className="font-label-md text-label-md text-on-surface font-semibold flex items-center justify-between">
<span>Purchase Order (PO) Binding</span>
<button className="font-label-sm text-label-sm text-primary hover:underline flex items-center gap-0.5" onclick="generatePONumber()" type="button">
<span className="material-symbols-outlined text-[12px]">autorenew</span> Auto Generate
                </button>
</label>
<div className="relative flex items-center">
<span className="material-symbols-outlined absolute left-3 text-outline text-[18px]">tag</span>
<input className="w-full h-11 pl-9 pr-4 rounded-lg bg-surface-container-high text-on-surface font-code-sm text-code-sm focus:outline-none focus:ring-1 focus:ring-primary shadow-sm" id="po-input" type="text" value="PO-2024-8922" />
</div>
</div>
{/*  Vendor Invoice Number  */}
<div className="space-y-1.5">
<label className="font-label-md text-label-md text-on-surface font-semibold">Vendor Ext. Invoice #</label>
<div className="relative flex items-center">
<span className="material-symbols-outlined absolute left-3 text-outline text-[18px]">receipt</span>
<input className="w-full h-11 pl-9 pr-4 rounded-lg bg-surface-container-high text-on-surface font-code-sm text-code-sm focus:outline-none focus:ring-1 focus:ring-primary shadow-sm" type="text" value="INV-2024-1042" />
</div>
</div>
{/*  Invoice Date  */}
<div className="space-y-1.5">
<label className="font-label-md text-label-md text-on-surface font-semibold">Invoice Issue Date</label>
<div className="relative flex items-center">
<span className="material-symbols-outlined absolute left-3 text-outline text-[18px]">calendar_today</span>
<input className="w-full h-11 pl-9 pr-4 rounded-lg bg-surface-container-high text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-1 focus:ring-primary shadow-sm" type="date" value="2024-11-04" />
</div>
</div>
{/*  Payment Terms Dropdown  */}
<div className="space-y-1.5">
<label className="font-label-md text-label-md text-on-surface font-semibold">Payment Terms / Settlement SLA</label>
<div className="relative">
<select className="w-full h-11 pl-4 pr-10 rounded-lg bg-surface-container-high text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-1 focus:ring-primary shadow-sm appearance-none">
<option selected="">Net 30 (Default Framework Agreement)</option>
<option>Net 15 (Expedited Cashflow - 1.5% Discount)</option>
<option>Net 60 (Extended Material Run)</option>
<option>Immediate Wire / Escrow Hold</option>
</select>
<span className="material-symbols-outlined absolute right-3 top-3 text-outline pointer-events-none text-[20px]">expand_more</span>
</div>
</div>
{/*  Destination Node / Warehouse Tier  */}
<div className="space-y-1.5 md:col-span-2">
<label className="font-label-md text-label-md text-on-surface font-semibold">Target Destination &amp; Custody Facility</label>
<div className="relative">
<select className="w-full h-11 pl-4 pr-10 rounded-lg bg-surface-container-high text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-1 focus:ring-primary shadow-sm appearance-none">
<option selected="">Cluster 07-Virginia Tier-4 Automated Storage Facility (Primary Secure)</option>
<option>Cluster 03-Frankfurt Logistics Terminal (European Hub)</option>
<option>Cluster 12-Singapore Deepwater Drydock Intake</option>
</select>
<span className="material-symbols-outlined absolute right-3 top-3 text-outline pointer-events-none text-[20px]">expand_more</span>
</div>
</div>
</div>
</section>
{/*  SECTION 2: Cryptographic Document Attachment & Proof  */}
<section className="bg-surface-container-low rounded-xl p-6 shadow-md space-y-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-secondary-container/20 flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[20px]">lock</span>
</div>
<div className="flex flex-col">
<h2 className="font-headline-md text-headline-md text-on-surface">Cryptographic Document Attachment &amp; Proof</h2>
<span className="font-body-sm text-body-sm text-on-surface-variant">Original vendor EDI bundles and invoice signatures</span>
</div>
</div>
<span className="font-label-sm text-label-sm uppercase tracking-wider px-2 py-0.5 rounded bg-surface-container text-outline">Section 02</span>
</div>
{/*  Upload Dropzone Area  */}
<div className="p-6 rounded-xl bg-surface-container-lowest flex flex-col items-center justify-center text-center group cursor-pointer hover:bg-surface-container-high/60 transition-all">
<div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-outline group-hover:text-primary group-hover:scale-105 transition-all mb-2">
<span className="material-symbols-outlined text-[28px]">cloud_upload</span>
</div>
<p className="font-label-md text-label-md text-on-surface font-medium">Drop signed vendor invoice PDF or cryptographic EDI bundle</p>
<p className="font-body-sm text-body-sm text-outline mt-0.5">Maximum file payload 25MB • Accepted: .pdf, .xml, .edi, .p7s (CMS Cryptographic Envelope)</p>
</div>
{/*  Pre-attached File Card with SHA-256 Stamp  */}
<div className="p-3.5 rounded-lg bg-surface-container-high flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-sm">
<div className="flex items-center gap-3 min-w-0">
<div className="w-10 h-10 rounded-lg bg-error-container/20 text-error flex items-center justify-center flex-shrink-0">
<span className="material-symbols-outlined text-[22px]">picture_as_pdf</span>
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-2">
<span className="font-body-sm text-body-sm font-semibold text-on-surface truncate">INV-2024-1042-NordicSigned.pdf</span>
<span className="font-code-sm text-code-sm text-outline">2.4 MB</span>
</div>
<div className="flex items-center gap-1.5 text-primary">
<span className="material-symbols-outlined text-[14px]">verified</span>
<span className="font-code-sm text-code-sm truncate">SHA256: 7f83b165...9b84e8a1 Verified Valid</span>
</div>
</div>
</div>
<div className="flex items-center gap-2 flex-shrink-0 self-end sm:self-auto">
<button className="px-2.5 py-1 rounded bg-surface-container text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm transition-colors" type="button">
                Inspect Hash
              </button>
<button className="p-1 rounded text-outline hover:text-error transition-colors" type="button">
<span className="material-symbols-outlined text-[18px]">close</span>
</button>
</div>
</div>
{/*  Multi-party Signature Attestation Toggle  */}
<label className="flex items-start gap-3 p-3 rounded-lg bg-surface-container cursor-pointer select-none">
<input checked="" className="mt-0.5 rounded text-primary focus:ring-primary w-4 h-4 bg-surface-container-lowest" type="checkbox" />
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold">Require multi-party threshold signature before clearance</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Requires cryptographic sign-off from both Logistics Lead and Financial Controller prior to disbursement.</span>
</div>
</label>
</section>
{/*  SECTION 3: Itemized Line Items Table  */}
<section className="bg-surface-container-low rounded-xl p-6 shadow-md space-y-4">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-primary-container/20 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[20px]">receipt_long</span>
</div>
<div className="flex flex-col">
<h2 className="font-headline-md text-headline-md text-on-surface">Itemized Line Items</h2>
<span className="font-body-sm text-body-sm text-on-surface-variant">Classify SKUs, inventory metrics, and direct ledger allocation</span>
</div>
</div>
<button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-all font-label-md text-label-md font-semibold self-start sm:self-auto" onclick="addNewRow()" type="button">
<span className="material-symbols-outlined text-[18px]">add</span>
<span>Add Line Item</span>
</button>
</div>
{/*  Clean Modern Data Table with High Precision Inputs  */}
<div className="overflow-x-auto rounded-lg bg-surface-container-lowest shadow-inner">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-high/60 text-outline uppercase font-label-sm text-label-sm">
<th className="py-3 px-4 w-12 text-center">#</th>
<th className="py-3 px-4 min-w-[280px]">SKU / Item Description</th>
<th className="py-3 px-4 w-44">Category</th>
<th className="py-3 px-4 w-20 text-right">Qty</th>
<th className="py-3 px-4 w-32 text-right">Unit Price</th>
<th className="py-3 px-4 w-28 text-center">Tax / VAT</th>
<th className="py-3 px-4 w-32 text-right">Total</th>
<th className="py-3 px-3 w-12 text-center"></th>
</tr>
</thead>
<tbody className="divide-y divide-transparent" id="line-items-tbody">
{/*  Item 1  */}
<tr className="group transition-colors hover:bg-surface-container-high/50" data-line="1">
<td className="py-3 px-4 text-center font-code-sm text-code-sm text-outline">01</td>
<td className="py-3 px-4">
<input className="w-full bg-surface-container-lowest px-3 py-1.5 rounded-lg text-on-surface font-body-sm text-body-sm focus:outline-none focus:bg-surface-container focus:ring-1 focus:ring-primary shadow-sm" type="text" value="Liquid Argon High-Purity Cryo-Tank 500L" />
<div className="mt-1 flex items-center gap-2">
<span className="font-code-sm text-code-sm text-outline">SKU:</span>
<input className="bg-transparent font-code-sm text-code-sm text-on-surface-variant w-28 uppercase focus:outline-none focus:text-primary" type="text" value="ARG-N4-500" />
</div>
</td>
<td className="py-3 px-4">
<select className="bg-surface-container-lowest text-on-surface-variant px-2.5 py-1.5 rounded-lg font-body-sm text-body-sm focus:outline-none focus:ring-1 focus:ring-primary shadow-sm">
<option selected="">Logistics / Cryo</option>
<option>HazMat Spec</option>
<option>Precision Optics</option>
</select>
</td>
<td className="py-3 px-4">
<input className="input-qty w-16 text-right bg-surface-container-lowest px-2 py-1.5 rounded-lg text-on-surface font-code-sm text-code-sm focus:outline-none focus:ring-1 focus:ring-primary shadow-sm" min="1" oninput="recalculateTotals()" type="number" value="4" />
</td>
<td className="py-3 px-4">
<div className="relative flex items-center">
<span className="absolute left-2 font-code-sm text-code-sm text-outline">$</span>
<input className="input-price w-28 pl-5 pr-2 py-1.5 text-right bg-surface-container-lowest rounded-lg text-on-surface font-code-sm text-code-sm focus:outline-none focus:ring-1 focus:ring-primary shadow-sm" oninput="recalculateTotals()" step="0.01" type="number" value="1850.00" />
</div>
</td>
<td className="py-3 px-4 text-center">
<span className="font-label-sm text-label-sm text-on-surface-variant">0.0% (Exempt)</span>
</td>
<td className="py-3 px-4 text-right">
<span className="line-total-display font-code-sm text-code-sm font-semibold text-on-surface">$7,400.00</span>
</td>
<td className="py-3 px-3 text-center">
<button className="p-1 rounded-lg text-outline hover:text-error hover:bg-error-container/30 transition-colors" onclick="removeRow(this)" type="button">
<span className="material-symbols-outlined text-[18px]">delete</span>
</button>
</td>
</tr>
{/*  Item 2  */}
<tr className="group transition-colors hover:bg-surface-container-high/50" data-line="2">
<td className="py-3 px-4 text-center font-code-sm text-code-sm text-outline">02</td>
<td className="py-3 px-4">
<input className="w-full bg-surface-container-lowest px-3 py-1.5 rounded-lg text-on-surface font-body-sm text-body-sm focus:outline-none focus:bg-surface-container focus:ring-1 focus:ring-primary shadow-sm" type="text" value="Intermodal Certified HazMat Transport Routing" />
<div className="mt-1 flex items-center gap-2">
<span className="font-code-sm text-code-sm text-outline">SKU:</span>
<input className="bg-transparent font-code-sm text-code-sm text-on-surface-variant w-28 uppercase focus:outline-none focus:text-primary" type="text" value="LOG-TR-IAD" />
</div>
</td>
<td className="py-3 px-4">
<select className="bg-surface-container-lowest text-on-surface-variant px-2.5 py-1.5 rounded-lg font-body-sm text-body-sm focus:outline-none focus:ring-1 focus:ring-primary shadow-sm">
<option>Logistics / Cryo</option>
<option selected="">HazMat Transport</option>
<option>Precision Optics</option>
</select>
</td>
<td className="py-3 px-4">
<input className="input-qty w-16 text-right bg-surface-container-lowest px-2 py-1.5 rounded-lg text-on-surface font-code-sm text-code-sm focus:outline-none focus:ring-1 focus:ring-primary shadow-sm" min="1" oninput="recalculateTotals()" type="number" value="1" />
</td>
<td className="py-3 px-4">
<div className="relative flex items-center">
<span className="absolute left-2 font-code-sm text-code-sm text-outline">$</span>
<input className="input-price w-28 pl-5 pr-2 py-1.5 text-right bg-surface-container-lowest rounded-lg text-on-surface font-code-sm text-code-sm focus:outline-none focus:ring-1 focus:ring-primary shadow-sm" oninput="recalculateTotals()" step="0.01" type="number" value="4200.00" />
</div>
</td>
<td className="py-3 px-4 text-center">
<span className="font-label-sm text-label-sm text-on-surface-variant">0.0% (Exempt)</span>
</td>
<td className="py-3 px-4 text-right">
<span className="line-total-display font-code-sm text-code-sm font-semibold text-on-surface">$4,200.00</span>
</td>
<td className="py-3 px-3 text-center">
<button className="p-1 rounded-lg text-outline hover:text-error hover:bg-error-container/30 transition-colors" onclick="removeRow(this)" type="button">
<span className="material-symbols-outlined text-[18px]">delete</span>
</button>
</td>
</tr>
{/*  Item 3  */}
<tr className="group transition-colors hover:bg-surface-container-high/50" data-line="3">
<td className="py-3 px-4 text-center font-code-sm text-code-sm text-outline">03</td>
<td className="py-3 px-4">
<input className="w-full bg-surface-container-lowest px-3 py-1.5 rounded-lg text-on-surface font-body-sm text-body-sm focus:outline-none focus:bg-surface-container focus:ring-1 focus:ring-primary shadow-sm" type="text" value="DOT Safety Escort &amp; Pressure Monitoring System" />
<div className="mt-1 flex items-center gap-2">
<span className="font-code-sm text-code-sm text-outline">SKU:</span>
<input className="bg-transparent font-code-sm text-code-sm text-on-surface-variant w-28 uppercase focus:outline-none focus:text-primary" type="text" value="INS-MON-02" />
</div>
</td>
<td className="py-3 px-4">
<select className="bg-surface-container-lowest text-on-surface-variant px-2.5 py-1.5 rounded-lg font-body-sm text-body-sm focus:outline-none focus:ring-1 focus:ring-primary shadow-sm">
<option>Logistics / Cryo</option>
<option>HazMat Transport</option>
<option selected="">Safety Spec</option>
</select>
</td>
<td className="py-3 px-4">
<input className="input-qty w-16 text-right bg-surface-container-lowest px-2 py-1.5 rounded-lg text-on-surface font-code-sm text-code-sm focus:outline-none focus:ring-1 focus:ring-primary shadow-sm" min="1" oninput="recalculateTotals()" type="number" value="2" />
</td>
<td className="py-3 px-4">
<div className="relative flex items-center">
<span className="absolute left-2 font-code-sm text-code-sm text-outline">$</span>
<input className="input-price w-28 pl-5 pr-2 py-1.5 text-right bg-surface-container-lowest rounded-lg text-on-surface font-code-sm text-code-sm focus:outline-none focus:ring-1 focus:ring-primary shadow-sm" oninput="recalculateTotals()" step="0.01" type="number" value="1150.00" />
</div>
</td>
<td className="py-3 px-4 text-center">
<span className="font-label-sm text-label-sm text-on-surface-variant">0.0% (Exempt)</span>
</td>
<td className="py-3 px-4 text-right">
<span className="line-total-display font-code-sm text-code-sm font-semibold text-on-surface">$2,300.00</span>
</td>
<td className="py-3 px-3 text-center">
<button className="p-1 rounded-lg text-outline hover:text-error hover:bg-error-container/30 transition-colors" onclick="removeRow(this)" type="button">
<span className="material-symbols-outlined text-[18px]">delete</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
{/*  Numerical Breakdown  */}
<div className="flex flex-col sm:flex-row justify-end pt-4">
<div className="w-full sm:w-80 space-y-2.5 p-4 rounded-xl bg-surface-container-lowest shadow-sm">
<div className="flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm">
<span>Items Subtotal</span>
<span className="font-code-sm text-code-sm text-on-surface font-medium" id="subtotal-display">$13,900.00</span>
</div>
<div className="flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm">
<span className="flex items-center gap-1">
<span>Tax Assessment</span>
<span className="material-symbols-outlined text-[14px] text-primary" title="Tax Exempt Certificate #TX-9921">info</span>
</span>
<span className="font-code-sm text-code-sm text-primary">$0.00 (Exempt)</span>
</div>
<div className="flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm">
<span>HazMat &amp; Secure Custody Surcharge</span>
<span className="font-code-sm text-code-sm text-on-surface font-medium">$350.00</span>
</div>
<div className="pt-2 flex items-center justify-between">
<span className="font-label-md text-label-md font-bold text-on-surface">Total Payable</span>
<span className="font-headline-md text-headline-md text-primary font-bold tracking-tight" id="grandtotal-display">$14,250.00</span>
</div>
</div>
</div>
</section>
{/*  SECTION 4: Notes, Compliance Attestation & Ledger Routing  */}
<section className="bg-surface-container-low rounded-xl p-6 shadow-md space-y-5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-tertiary-container/20 flex items-center justify-center text-tertiary">
<span className="material-symbols-outlined text-[20px]">assignment_turned_in</span>
</div>
<div className="flex flex-col">
<h2 className="font-headline-md text-headline-md text-on-surface">Notes &amp; Compliance Attestation</h2>
<span className="font-body-sm text-body-sm text-on-surface-variant">Immutable ledger routing notes &amp; operator sign-off</span>
</div>
</div>
<span className="font-label-sm text-label-sm uppercase tracking-wider px-2 py-0.5 rounded bg-surface-container text-outline">Section 04</span>
</div>
<div className="space-y-1.5">
<label className="font-label-md text-label-md text-on-surface font-semibold">Internal Operations Note (Ledger Stored)</label>
<textarea className="w-full p-3.5 rounded-lg bg-surface-container-high text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-1 focus:ring-primary shadow-sm placeholder:text-outline" placeholder="Add operational notes or shipment condition logs..." rows="3">Express shipment verified against master freight framework agreement. SLA delivery verified.</textarea>
</div>
{/*  Formal Operator Attestation  */}
<div className="p-4 rounded-xl bg-surface-container flex items-start gap-3">
<input checked="" className="mt-1 rounded text-primary focus:ring-primary w-4 h-4 bg-surface-container-lowest" id="attest-check" type="checkbox" />
<label className="cursor-pointer select-none space-y-0.5" for="attest-check">
<p className="font-label-md text-label-md text-on-surface font-semibold">I attest that this entry conforms to Master Governance schemas and FIPS 140-3 protocol specifications.</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">Your user cryptographic identity (Operations Lead • Cluster 07-Virginia) will be permanently affixed to block header upon consensus broadcast.</p>
</label>
</div>
</section>
</div>
{/*  RIGHT COLUMN: Sticky Live Ledger Inspector & Verification Sidebar (4 of 12 cols = ~33%)  */}
<div className="xl:col-span-4 sticky top-24 space-y-6">
{/*  Card: Real-Time Ledger Commit Summary  */}
<div className="bg-surface-container-low rounded-xl p-6 shadow-md relative overflow-hidden space-y-5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
<span className="font-label-md text-label-md uppercase tracking-wider font-semibold text-on-surface">Commit Inspector</span>
</div>
<span className="font-code-sm text-code-sm text-outline">STG-LEDGER-07</span>
</div>
{/*  Big Gross Amount Metric Display  */}
<div className="p-4 rounded-xl bg-surface-container-lowest space-y-1 shadow-inner">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-outline font-semibold">Total Gross Amount</span>
<div className="font-headline-xl text-headline-xl text-primary font-bold tracking-tight" id="sidebar-grandtotal-display">$14,250.00</div>
<div className="flex items-center gap-2 pt-1 font-body-sm text-body-sm text-on-surface-variant">
<span className="material-symbols-outlined text-[16px] text-primary">account_balance_wallet</span>
<span>Account: Operations Allocation Core</span>
</div>
</div>
{/*  Quick Metadata List  */}
<div className="space-y-3 font-body-sm text-body-sm">
<div className="flex items-center justify-between pb-2 bg-transparent">
<span className="text-on-surface-variant">Line Item Density</span>
<span className="font-code-sm text-code-sm font-semibold text-on-surface" id="sidebar-units-display">3 items (7 units total)</span>
</div>
<div className="flex items-center justify-between pb-2 bg-transparent">
<span className="text-on-surface-variant">Item Subtotal</span>
<span className="font-code-sm text-code-sm text-on-surface" id="summary-subtotal-display">$13,900.00</span>
</div>
<div className="flex items-center justify-between pb-2 bg-transparent">
<span className="text-on-surface-variant">Supplier Exposure</span>
<span className="font-code-sm text-code-sm text-on-surface font-semibold text-right">+$14,250.00 <span className="text-outline font-normal">($1.42M YTD)</span></span>
</div>
<div className="flex items-center justify-between pb-2 bg-transparent">
<span className="text-on-surface-variant">SLA Clearance Target</span>
<span className="font-code-sm text-code-sm text-primary font-semibold">1.4 Days (Priority Stream)</span>
</div>
<div className="flex items-center justify-between bg-transparent">
<span className="text-on-surface-variant">Tax Jurisdictional Exemption</span>
<span className="font-code-sm text-code-sm text-on-surface">TX-9921 Applied</span>
</div>
</div>
{/*  SVG Visual Meter: Allocation Capacity  */}
<div className="space-y-2 pt-1">
<div className="flex items-center justify-between font-label-sm text-label-sm">
<span className="text-on-surface-variant">Supplier Monthly Quota Utilization</span>
<span className="font-code-sm text-code-sm text-on-surface font-semibold">68.4%</span>
</div>
<div className="w-full h-2 rounded-full bg-surface-container-highest overflow-hidden">
<div className="h-full bg-gradient-to-r from-primary to-primary-container rounded-full" style="width: 68.4%;"></div>
</div>
</div>
</div>
{/*  Card: Cryptographic Proof Pipeline Preview  */}
<div className="bg-surface-container-low rounded-xl p-6 shadow-md space-y-4">
<div className="flex items-center justify-between">
<h3 className="font-headline-md text-headline-md text-on-surface">Proof Pipeline</h3>
<span className="px-2 py-0.5 rounded bg-primary-container/20 text-primary font-code-sm text-code-sm font-semibold">Pre-Flight OK</span>
</div>
<div className="space-y-3.5">
{/*  Step 1  */}
<div className="flex items-start gap-3">
<div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[16px]">check</span>
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-medium">Schema Validation</span>
<span className="font-body-sm text-body-sm text-outline">Passed JSON-LD ANSI X12 v4010 schema</span>
</div>
</div>
{/*  Step 2  */}
<div className="flex items-start gap-3">
<div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[16px]">check</span>
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-medium">PO Duplication Check</span>
<span className="font-body-sm text-body-sm text-outline">Unique identifier PO-2024-8922 verified across clusters</span>
</div>
</div>
{/*  Step 3  */}
<div className="flex items-start gap-3">
<div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[16px]">fingerprint</span>
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-medium">Zero-Knowledge Hash</span>
<span className="font-code-sm text-code-sm text-primary">Ready: 0x8a9f...c24e</span>
</div>
</div>
{/*  Step 4  */}
<div className="flex items-start gap-3">
<div className="w-6 h-6 rounded-full bg-surface-container-high text-outline flex items-center justify-center flex-shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[16px]">lan</span>
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-medium">Consensus Witness Node</span>
<span className="font-body-sm text-body-sm text-outline">Cluster 07-Virginia Standby (Quorum 5/7)</span>
</div>
</div>
</div>
</div>
{/*  Primary Action Box  */}
<div className="bg-surface-container-low rounded-xl p-6 shadow-md space-y-3">
<button className="w-full h-12 rounded-lg bg-primary-container hover:bg-primary-container/90 text-on-primary-container font-headline-md text-headline-md font-semibold tracking-tight transition-all duration-150 flex items-center justify-center gap-2 shadow-[0_0_24px_rgba(16,185,129,0.3)] active:scale-[0.985]" type="button">
<span className="material-symbols-outlined text-[20px]">assignment_turned_in</span>
<span>Commit Entry to Ledger</span>
</button>
<button className="w-full h-10 rounded-lg bg-surface-container-high text-on-surface hover:bg-surface-container-highest transition-colors font-label-md text-label-md flex items-center justify-center gap-2 shadow-sm" type="button">
<span className="material-symbols-outlined text-[18px]">add_circle</span>
<span>Save &amp; Record Another</span>
</button>
<div className="text-center pt-2">
<a className="font-body-sm text-body-sm text-outline hover:text-error transition-colors" href="#">Discard Unsaved Changes</a>
</div>
<div className="pt-3 flex items-center justify-center gap-1.5 text-center text-outline font-code-sm text-code-sm">
<span className="material-symbols-outlined text-[14px]">lock</span>
<span>Immutable entry will be broadcast to node network upon submission.</span>
</div>
</div>
</div>
</div>
</div>
</div></main></div>
    </>
  );
}
