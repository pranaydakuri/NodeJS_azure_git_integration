const assert = require('assert');

function add(a, b) {
  return a + b;
}

// Simple test
try {
  assert.strictEqual(add(2, 3), 5);
  console.log('✅ Test passed');
} catch (error) {
  console.error('❌ Test failed');
  process.exit(1);
}
