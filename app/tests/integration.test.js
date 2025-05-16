const assert = require('assert');
const mockOpenAIService = require('../services/ai/openai.mock');

async function testFullFlow() {
  console.log('🧪 Starting Integration Test');
  
  try {
    console.log('📝 Testing Mock OpenAI Service...');
    const prompt = 'Write a SUM formula for column B';
    const response = await mockOpenAIService.sendPrompt(prompt);
    
    assert.strictEqual(
      response,
      '=SUM(B2:B100)',
      'OpenAI mock should return the expected formula'
    );
    console.log('✅ Mock OpenAI Service test passed');

    console.log('\n🔍 Validation Steps:');
    console.log('1. Launch the app with `npm run dev`');
    console.log('2. Verify the UI shows:');
    console.log('   - Spreadsheet grid on the left (80%)');
    console.log('   - AI Assistant sidebar on the right (20%)');
    console.log('3. In the sidebar chat:');
    console.log('   - Type: "Write a SUM formula for column B"');
    console.log('   - Click Send or press Enter');
    console.log('   - Verify loading animation appears');
    console.log('   - Verify response shows: "=SUM(B2:B100)"');
    console.log('\n✨ If all steps pass, Sprint 0 integration is successful!');

  } catch (error) {
    console.error('❌ Test failed:', error.message);
    process.exit(1);
  }
}

// Run the test
testFullFlow(); 