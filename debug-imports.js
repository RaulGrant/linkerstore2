// Debug imports
const fs = require('fs');
const path = require('path');

// Test if components exist
const componentsToTest = [
  '@/components/ui/button',
  '@/components/ui/badge', 
  '@/components/modals/ProductQuickViewModal',
  '@/lib/data/real-amazon-products',
  '@/lib/types/store'
];

console.log('Testing import paths...');

componentsToTest.forEach(componentPath => {
  try {
    const fullPath = componentPath.replace('@/', '');
    const testPath1 = path.join(__dirname, fullPath + '.tsx');
    const testPath2 = path.join(__dirname, fullPath + '.ts');
    const testPath3 = path.join(__dirname, fullPath + '/index.tsx');
    const testPath4 = path.join(__dirname, fullPath + '/index.ts');
    
    if (fs.existsSync(testPath1)) {
      console.log(`✅ ${componentPath} -> ${testPath1}`);
    } else if (fs.existsSync(testPath2)) {
      console.log(`✅ ${componentPath} -> ${testPath2}`);
    } else if (fs.existsSync(testPath3)) {
      console.log(`✅ ${componentPath} -> ${testPath3}`);
    } else if (fs.existsSync(testPath4)) {
      console.log(`✅ ${componentPath} -> ${testPath4}`);
    } else {
      console.log(`❌ ${componentPath} -> NOT FOUND`);
      console.log(`   Checked: ${testPath1}`);
      console.log(`   Checked: ${testPath2}`);
      console.log(`   Checked: ${testPath3}`);
      console.log(`   Checked: ${testPath4}`);
    }
  } catch (e) {
    console.log(`❌ ${componentPath} -> ERROR: ${e.message}`);
  }
});
