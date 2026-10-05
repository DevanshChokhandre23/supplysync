const fs = require('fs');
let content = fs.readFileSync('src/ui-templates/apex_nexus_admin_dashboard.tsx', 'utf8');

// Find the <main> tag and extract its inner content
const mainRegex = /<main[^>]*>([\s\S]*?)<\/main>/;
const match = content.match(mainRegex);

if (match && match[1]) {
  let mainContent = match[1];
  
  // Create page.tsx
  let pageCode = `import Link from 'next/link';

export default function AdminDashboard() {
  return (
    <div className="flex flex-col w-full h-full min-h-screen">
      ${mainContent}
    </div>
  );
}`;

  // Replace <a> tags with <Link> for inner-app routing
  // Note: For a quick conversion, we leave <a> as is for now since it's just a demo template.
  
  fs.writeFileSync('src/app/(admin)/admin/page.tsx', pageCode);
  console.log('Successfully updated admin/page.tsx');
} else {
  console.log('Could not find <main> block');
}
