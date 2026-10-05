const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, 'trendy ui');
const outputDir = path.join(__dirname, 'src', 'ui-templates');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

function htmlToJsx(html) {
  // Simple naive replacements for JSX
  let jsx = html;
  
  // class to className
  jsx = jsx.replace(/class=/g, 'className=');
  
  // Self closing tags
  jsx = jsx.replace(/<img(.*?)>/g, (match) => {
    if (match.endsWith('/>')) return match;
    return match.slice(0, -1) + ' />';
  });
  jsx = jsx.replace(/<input(.*?)>/g, (match) => {
    if (match.endsWith('/>')) return match;
    return match.slice(0, -1) + ' />';
  });
  jsx = jsx.replace(/<br>/g, '<br />');
  jsx = jsx.replace(/<hr>/g, '<hr />');
  
  // HTML comments to JSX comments
  jsx = jsx.replace(/<!--(.*?)-->/gs, '{/* $1 */}');
  
  // Extract body contents
  const bodyMatch = jsx.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  if (bodyMatch) {
    return bodyMatch[1];
  }
  return jsx;
}

const folders = fs.readdirSync(inputDir).filter(f => fs.statSync(path.join(inputDir, f)).isDirectory());

folders.forEach(folder => {
  const codePath = path.join(inputDir, folder, 'code.html');
  if (fs.existsSync(codePath)) {
    const html = fs.readFileSync(codePath, 'utf8');
    const jsx = htmlToJsx(html);
    
    // Wrap in a component
    const componentName = folder.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('');
    const tsxCode = `export default function ${componentName}() {\n  return (\n    <>\n${jsx}\n    </>\n  );\n}\n`;
    
    const outputPath = path.join(outputDir, `${folder}.tsx`);
    fs.writeFileSync(outputPath, tsxCode);
    console.log(`Converted ${folder}`);
  }
});
