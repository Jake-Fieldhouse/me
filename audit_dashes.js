const fs = require('fs');
const path = require('path');
const scan = (dir) => {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            if (file !== 'node_modules' && file !== '.git') scan(fullPath);
        } else {
            if (['.vue', '.ts', '.js', '.html', '.txt', '.md'].includes(path.extname(file))) {
                try {
                    const content = fs.readFileSync(fullPath, 'utf8');
                    if (content.includes('\u2014')) {
                        console.log(`EM-DASH: ${fullPath}`);
                    }
                    if (content.includes('\u2013')) {
                        console.log(`EN-DASH: ${fullPath}`);
                    }
                } catch (e) {
                    // ignore errors
                }
            }
        }
    });
};
console.log('--- START AUDIT ---');
scan('src');
scan('public');
console.log('--- END AUDIT ---');
