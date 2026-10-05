export default function DualRoleEnterpriseAuthentication1() {
  return (
    <>
<div className="pointer-events-none fixed inset-0 z-0 overflow-hidden"><div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[130px]"></div><div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-secondary-container/20 blur-[140px]"></div></div><main className="relative z-10 w-full min-h-screen flex flex-col justify-center items-center px-gutter-sm md:px-gutter"><div className="flex flex-col w-full items-center justify-center py-margin-sm md:py-margin relative">
<div className="w-full max-w-[1040px] flex flex-col items-center">
{/*  Top System Telemetry Bar  */}
<div className="w-full max-w-[500px] lg:max-w-none flex items-center justify-between px-space-md py-space-xs mb-space-md rounded-full bg-surface-container-low shadow-sm">
<div className="flex items-center gap-space-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
</span>
<span className="font-code-sm text-code-sm text-on-surface-variant uppercase tracking-wider">Apex Gateway v4.9.2</span>
</div>
<div className="flex items-center gap-space-md text-on-surface-variant">
<span className="flex items-center gap-1 font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[14px] text-primary">verified_user</span>
          FIPS 140-3 Validated
        </span>
<span className="hidden sm:inline-block font-label-sm text-label-sm opacity-60">|</span>
<span className="hidden sm:flex items-center gap-1 font-label-sm text-label-sm text-tertiary">
<span className="material-symbols-outlined text-[14px]">bolt</span>
          Zero-Trust Perimeter
        </span>
</div>
</div>
{/*  Main Dual-Pane Showcase Grid  */}
<div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-gutter items-stretch">
{/*  Left Contextual Telemetry Pane (Visible on LG screens)  */}
<div className="hidden lg:flex lg:col-span-5 flex-col justify-between p-space-xl rounded-xl bg-surface-container-low relative overflow-hidden shadow-xl">
{/*  Ambient Decorative Grid  */}
<div className="absolute inset-0 opacity-[0.03] pointer-events-none" style="background-image: radial-gradient(circle at 1px 1px, #e3e1e9 1px, transparent 0); background-size: 24px 24px;"></div>
{/*  Brand & System Identity  */}
<div className="relative z-10">
<div className="flex items-center gap-space-md mb-space-lg">
<div className="w-12 h-12 rounded-xl bg-surface-container-highest p-2 flex items-center justify-center shadow-md">
<img alt="Apex Nexus Emblem" className="w-full h-full object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1XSbPUHXiufneXLZJC-Ph1ahSM8V_KCtJqlRtN3DJKlV1Rns3PgUdkM7V8OUheq2C0fwsTw6IzLVDrTvHB8v96OEYS7xPJ4MvXSXqiu_Rcb3RIcQ9mnEyTik2SGEPh0v1sqi2yXSeLKzMqNbAK_OvovSSMZ3SsogHLzhy-yR2ThSTGXvjkkE_JeVns6NkSIHJDqZo4SXayzxwUHeyI5Y0Z03B1yr1UpYW33RrLQEOQmSDaQqGS2Yx0Qy_s" />
</div>
<div>
<span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold">Decentralized Mesh</span>
<h2 className="font-headline-md text-headline-md text-on-surface">Apex Nexus</h2>
</div>
</div>
<p className="font-body-md text-body-md text-on-surface-variant mb-space-xl">
            Sovereign multi-tier orchestration platform bridging high-security administrative operations with planetary supplier pipelines.
          </p>
{/*  Interactive Mode Indicator Capsule  */}
<div className="p-space-md rounded-lg bg-surface-container transition-all duration-300 shadow-sm" id="telemetry-info-card">
<div className="flex items-center justify-between mb-space-xs">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider" id="pane-tag">Scope Clearance</span>
<span className="font-code-sm text-code-sm px-2 py-0.5 rounded-full bg-primary-container text-on-primary font-semibold" id="pane-pill">Tier 1 Ops</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface" id="pane-desc">
              Full ledger authority, approval matrix workflows, multi-node configuration, and enterprise audit trace verification.
            </p>
</div>
{/*  Micro Sparkline Telemetry Card  */}
<div className="mt-space-md p-space-md rounded-lg bg-surface-container shadow-sm">
<div className="flex items-center justify-between text-on-surface-variant mb-space-xs font-label-sm text-label-sm">
<span className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-[15px] text-tertiary">query_stats</span>
                Global Network Latency
              </span>
<span className="font-code-sm text-code-sm text-on-surface">18.4ms avg</span>
</div>
{/*  Dynamic Vector Sparkline  */}
<svg className="w-full h-10 text-primary transition-all duration-500" fill="none" id="telemetry-sparkline" viewBox="0 0 240 40" xmlns="http://www.w3.org/2000/svg">
<path d="M0 28L20 25L40 31L60 18L80 22L100 12L120 26L140 14L160 19L180 8L200 16L220 10L240 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
<path d="M0 28L20 25L40 31L60 18L80 22L100 12L120 26L140 14L160 19L180 8L200 16L220 10L240 14V40H0V28Z" fill="currentColor" fill-opacity="0.08"></path>
</svg>
</div>
</div>
{/*  Left Pane Footer Status  */}
<div className="relative z-10 pt-space-lg">
<div className="flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
<span className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-[15px] text-primary">hub</span>
              Cluster 07-Virginia Active
            </span>
<span className="font-code-sm text-code-sm text-on-surface opacity-80">TLS 1.3 / Strict</span>
</div>
</div>
</div>
{/*  Right Interactive Authentication Canvas  */}
<div className="col-span-1 lg:col-span-7 flex flex-col justify-center">
<div className="w-full rounded-xl bg-surface-container-low p-space-lg sm:p-space-xl relative transition-all duration-300 shadow-xl" id="auth-shield">
{/*  Card Header & Badge  */}
<div className="flex items-start justify-between mb-space-lg">
<div>
<div className="flex items-center gap-2 mb-1">
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-surface-container-highest text-on-surface-variant uppercase tracking-wider font-semibold">SSO Gateway</span>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium flex items-center gap-1" id="role-status-badge">
<span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                  Admin Clearance Mode
                </span>
</div>
<h1 className="font-headline-lg text-headline-lg text-on-surface">Secure Access</h1>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Enterprise Purchasing &amp; Supplier Network</p>
</div>
{/*  Mobile Brand Mark Display  */}
<div className="lg:hidden w-10 h-10 rounded-lg bg-surface-container-highest p-1.5 flex items-center justify-center">
<img alt="Apex Nexus Emblem" className="w-full h-full object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1XSbPUHXiufneXLZJC-Ph1ahSM8V_KCtJqlRtN3DJKlV1Rns3PgUdkM7V8OUheq2C0fwsTw6IzLVDrTvHB8v96OEYS7xPJ4MvXSXqiu_Rcb3RIcQ9mnEyTik2SGEPh0v1sqi2yXSeLKzMqNbAK_OvovSSMZ3SsogHLzhy-yR2ThSTGXvjkkE_JeVns6NkSIHJDqZo4SXayzxwUHeyI5Y0Z03B1yr1UpYW33RrLQEOQmSDaQqGS2Yx0Qy_s" />
</div>
</div>
{/*  Dual-Role Segmented Controller  */}
<div className="mb-space-lg">
<label className="block font-label-sm text-label-sm text-on-surface-variant mb-space-xs uppercase tracking-wider">Target Domain Profile</label>
<div className="grid grid-cols-2 gap-1 p-1 rounded-lg bg-surface-container-highest relative">
<button className="flex items-center justify-center gap-2 py-2.5 px-space-sm rounded-md transition-all duration-200 font-label-md text-label-md bg-surface text-primary shadow-sm" id="tab-admin" onclick="switchRole('admin')" type="button">
<span className="material-symbols-outlined text-[18px]">verified_user</span>
<span>Admin Portal</span>
<span className="hidden sm:inline-block font-label-sm text-label-sm px-1.5 py-0.2 rounded bg-primary/10 text-primary">Ops</span>
</button>
<button className="flex items-center justify-center gap-2 py-2.5 px-space-sm rounded-md transition-all duration-200 font-label-md text-label-md text-on-surface-variant hover:text-on-surface" id="tab-supplier" onclick="switchRole('supplier')" type="button">
<span className="material-symbols-outlined text-[18px]">corporate_fare</span>
<span>Supplier Portal</span>
<span className="hidden sm:inline-block font-label-sm text-label-sm px-1.5 py-0.2 rounded bg-secondary-container/30 text-secondary">Vendor</span>
</button>
</div>
</div>
{/*  Role Dynamic Advisory Banner  */}
<div className="flex items-start gap-space-sm p-space-md rounded-lg bg-surface-container mb-space-lg transition-colors duration-200" id="role-banner">
<span className="material-symbols-outlined text-[20px] text-primary shrink-0 mt-0.5" id="banner-icon">shield</span>
<div className="text-on-surface">
<span className="font-label-md text-label-md font-semibold block" id="banner-title">Authorized Personnel Access Only</span>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5" id="banner-text">
                Access sovereign system configuration, purchase authorization workflows, and supplier ledger records.
              </p>
</div>
</div>
{/*  Main Interactive Authentication Form  */}
<form className="space-y-space-md" onsubmit="handleAuthSubmit(event)">
{/*  Email Input Field  */}
<div>
<div className="flex items-center justify-between mb-space-xs">
<label className="font-label-md text-label-md text-on-surface font-medium" for="work-email">Workstation Identity</label>
<span className="font-label-sm text-label-sm text-on-surface-variant" id="email-helper">Enterprise SAML ID</span>
</div>
<div className="relative flex items-center">
<span className="material-symbols-outlined absolute left-3 text-on-surface-variant text-[20px] pointer-events-none">alternate_email</span>
<input className="w-full h-11 pl-10 pr-space-md rounded-lg bg-surface-container text-on-surface font-body-md text-body-md placeholder-on-surface-variant/40 focus:outline-none focus:bg-surface transition-all duration-150 shadow-inner" id="work-email" placeholder="name@company.com" required="" type="email" />
</div>
</div>
{/*  Password Input Field  */}
<div>
<div className="flex items-center justify-between mb-space-xs">
<label className="font-label-md text-label-md text-on-surface font-medium" for="auth-password">Password &amp; Hardware Key</label>
<a className="font-label-sm text-label-sm text-primary hover:underline" href="#forgot" id="forgot-link">Recover credentials</a>
</div>
<div className="relative flex items-center">
<span className="material-symbols-outlined absolute left-3 text-on-surface-variant text-[20px] pointer-events-none">lock</span>
<input className="w-full h-11 pl-10 pr-10 rounded-lg bg-surface-container text-on-surface font-body-md text-body-md placeholder-on-surface-variant/40 focus:outline-none focus:bg-surface transition-all duration-150 shadow-inner" id="auth-password" placeholder="••••••••••••••••" required="" type="password" />
<button aria-label="Toggle password visibility" className="absolute right-3 text-on-surface-variant hover:text-on-surface flex items-center justify-center p-1" onclick="togglePasswordVisibility()" type="button">
<span className="material-symbols-outlined text-[18px]" id="eye-icon">visibility</span>
</button>
</div>
</div>
{/*  Preferences Row  */}
<div className="flex items-center justify-between pt-1">
<label className="flex items-center gap-space-sm cursor-pointer select-none">
<input checked="" className="w-4 h-4 rounded bg-surface-container text-primary accent-primary focus:ring-0 cursor-pointer" type="checkbox" />
<span className="font-body-sm text-body-sm text-on-surface-variant">Remember terminal session (8 hrs)</span>
</label>
<span className="font-code-sm text-code-sm text-on-surface-variant opacity-70">MFA Enforced</span>
</div>
{/*  Primary Action Button  */}
<button className="w-full h-12 rounded-lg bg-primary text-on-primary font-headline-md text-[15px] flex items-center justify-center gap-2 transition-all duration-150 hover:brightness-105 active:scale-[0.99] shadow-lg shadow-primary/20" id="submit-cta" type="submit">
<span className="material-symbols-outlined text-[20px]">login</span>
<span id="submit-text">Sign In to Admin Portal</span>
</button>
</form>
{/*  Divider with Identity Broker Metadata  */}
<div className="relative flex items-center justify-center my-space-lg">
<div className="w-full h-[1px] bg-surface-container-highest"></div>
<span className="absolute px-space-sm bg-surface-container-low font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Federated Identity</span>
</div>
{/*  Enterprise SSO Buttons  */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm mb-space-lg">
<button className="h-10 px-space-md rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md flex items-center justify-center gap-2 transition-all duration-150" type="button">
<span className="material-symbols-outlined text-[18px] text-tertiary">vpn_key</span>
<span>Enterprise SAML</span>
</button>
<button className="h-10 px-space-md rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md flex items-center justify-center gap-2 transition-all duration-150" type="button">
<span className="material-symbols-outlined text-[18px] text-secondary">badge</span>
<span id="secondary-sso-label">Supplier Passcode</span>
</button>
</div>
{/*  Trust Badges & System Posture Footer  */}
<div className="pt-space-md flex flex-wrap items-center justify-between gap-y-space-sm text-on-surface-variant font-label-sm text-label-sm">
<div className="flex items-center gap-space-md">
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-[15px] text-primary">lock_clock</span>
                256-bit TLS Strict
              </span>
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-[15px] text-primary">verified</span>
                SOC2 Type II
              </span>
</div>
<a className="hover:text-on-surface flex items-center gap-1 text-on-surface-variant transition-colors" href="#help">
<span className="material-symbols-outlined text-[15px]">contact_support</span>
              Support &amp; Logs
            </a>
</div>
</div>
</div>
</div>
{/*  Quick Role Preview Floating Bar (Demo Utility)  */}
<div className="mt-space-lg p-1.5 px-space-md rounded-full bg-surface-container shadow-md flex items-center gap-space-md text-on-surface-variant font-label-sm text-label-sm">
<span className="flex items-center gap-1 text-on-surface">
<span className="material-symbols-outlined text-[16px] text-tertiary">tune</span>
        Interactive Persona Preview:
      </span>
<div className="flex items-center gap-1">
<button className="px-2.5 py-1 rounded-full bg-surface-container-highest text-primary font-semibold transition-all" id="preview-btn-admin" onclick="switchRole('admin')">
          Admin Environment
        </button>
<button className="px-2.5 py-1 rounded-full text-on-surface-variant hover:text-on-surface transition-all" id="preview-btn-supplier" onclick="switchRole('supplier')">
          Supplier Environment
        </button>
</div>
</div>
</div>
{/*  Inline State Logic for Dynamic Persona Switching  */}
<script>
    let currentRole = 'admin';

    function switchRole(role) {
      currentRole = role;
      const isAdmin = role === 'admin';

      // Tabs UI
      const tabAdmin = document.getElementById('tab-admin');
      const tabSupplier = document.getElementById('tab-supplier');
      const previewAdmin = document.getElementById('preview-btn-admin');
      const previewSupplier = document.getElementById('preview-btn-supplier');

      if (isAdmin) {
        tabAdmin.className = "flex items-center justify-center gap-2 py-2.5 px-space-sm rounded-md transition-all duration-200 font-label-md text-label-md bg-surface text-primary shadow-sm";
        tabSupplier.className = "flex items-center justify-center gap-2 py-2.5 px-space-sm rounded-md transition-all duration-200 font-label-md text-label-md text-on-surface-variant hover:text-on-surface";
        previewAdmin.className = "px-2.5 py-1 rounded-full bg-surface-container-highest text-primary font-semibold transition-all";
        previewSupplier.className = "px-2.5 py-1 rounded-full text-on-surface-variant hover:text-on-surface transition-all";
      } else {
        tabSupplier.className = "flex items-center justify-center gap-2 py-2.5 px-space-sm rounded-md transition-all duration-200 font-label-md text-label-md bg-surface text-secondary shadow-sm";
        tabAdmin.className = "flex items-center justify-center gap-2 py-2.5 px-space-sm rounded-md transition-all duration-200 font-label-md text-label-md text-on-surface-variant hover:text-on-surface";
        previewSupplier.className = "px-2.5 py-1 rounded-full bg-surface-container-highest text-secondary font-semibold transition-all";
        previewAdmin.className = "px-2.5 py-1 rounded-full text-on-surface-variant hover:text-on-surface transition-all";
      }

      // Contextual Banner
      const bannerIcon = document.getElementById('banner-icon');
      const bannerTitle = document.getElementById('banner-title');
      const bannerText = document.getElementById('banner-text');
      const statusBadge = document.getElementById('role-status-badge');

      if (isAdmin) {
        bannerIcon.textContent = 'shield';
        bannerIcon.className = 'material-symbols-outlined text-[20px] text-primary shrink-0 mt-0.5';
        bannerTitle.textContent = 'Authorized Personnel Access Only';
        bannerText.textContent = 'Access sovereign system configuration, purchase authorization workflows, and supplier ledger records.';
        statusBadge.className = 'font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium flex items-center gap-1';
        statusBadge.innerHTML = '<span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>Admin Clearance Mode';
      } else {
        bannerIcon.textContent = 'storefront';
        bannerIcon.className = 'material-symbols-outlined text-[20px] text-secondary shrink-0 mt-0.5';
        bannerTitle.textContent = 'External Vendor Settlement Portal';
        bannerText.textContent = 'Submit invoice packages, monitor disbursement pipeline status, and negotiate catalog quotes.';
        statusBadge.className = 'font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-secondary-container/30 text-secondary font-medium flex items-center gap-1';
        statusBadge.innerHTML = '<span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>Supplier Gateway Mode';
      }

      // Action CTA Button
      const submitCta = document.getElementById('submit-cta');
      const submitText = document.getElementById('submit-text');
      const forgotLink = document.getElementById('forgot-link');

      if (isAdmin) {
        submitCta.className = 'w-full h-12 rounded-lg bg-primary text-on-primary font-headline-md text-[15px] flex items-center justify-center gap-2 transition-all duration-150 hover:brightness-105 active:scale-[0.99] shadow-lg shadow-primary/20';
        submitText.textContent = 'Sign In to Admin Portal';
        forgotLink.className = 'font-label-sm text-label-sm text-primary hover:underline';
      } else {
        submitCta.className = 'w-full h-12 rounded-lg bg-secondary-container text-on-surface font-headline-md text-[15px] flex items-center justify-center gap-2 transition-all duration-150 hover:brightness-110 active:scale-[0.99] shadow-lg shadow-secondary-container/30';
        submitText.textContent = 'Sign In to Supplier Portal';
        forgotLink.className = 'font-label-sm text-label-sm text-secondary hover:underline';
      }

      // Left pane metadata
      const paneTag = document.getElementById('pane-tag');
      const panePill = document.getElementById('pane-pill');
      const paneDesc = document.getElementById('pane-desc');
      const sparkline = document.getElementById('telemetry-sparkline');

      if (isAdmin) {
        paneTag.textContent = 'Scope Clearance';
        panePill.textContent = 'Tier 1 Ops';
        panePill.className = 'font-code-sm text-code-sm px-2 py-0.5 rounded-full bg-primary-container text-on-primary font-semibold';
        paneDesc.textContent = 'Full ledger authority, approval matrix workflows, multi-node configuration, and enterprise audit trace verification.';
        sparkline.className = 'w-full h-10 text-primary transition-all duration-500';
      } else {
        paneTag.textContent = 'Vendor Domain';
        panePill.textContent = 'Partner Network';
        panePill.className = 'font-code-sm text-code-sm px-2 py-0.5 rounded-full bg-secondary text-on-secondary font-semibold';
        paneDesc.textContent = 'Direct PO fulfillment pipeline, digital accounts payable receipts, and encrypted RFQ submission endpoints.';
        sparkline.className = 'w-full h-10 text-secondary transition-all duration-500';
      }
    }

    function togglePasswordVisibility() {
      const passwordInput = document.getElementById('auth-password');
      const eyeIcon = document.getElementById('eye-icon');
      if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.textContent = 'visibility_off';
      } else {
        passwordInput.type = 'password';
        eyeIcon.textContent = 'visibility';
      }
    }

    function handleAuthSubmit(e) {
      e.preventDefault();
      const email = document.getElementById('work-email').value;
      const targetDestination = currentRole === 'admin' ? '/admin' : '/portal';
      const ctaBtn = document.getElementById('submit-cta');
      
      ctaBtn.disabled = true;
      ctaBtn.classList.add('opacity-75');
      const originalText = document.getElementById('submit-text').textContent;
      document.getElementById('submit-text').textContent = 'Authenticating clearance...';

      setTimeout(() => {
        alert('Authentication Handshake Accepted.\nRouting identity ' + email + ' to ' + targetDestination);
        ctaBtn.disabled = false;
        ctaBtn.classList.remove('opacity-75');
        document.getElementById('submit-text').textContent = originalText;
      }, 700);
    }
  </script>
</div></main>
    </>
  );
}
