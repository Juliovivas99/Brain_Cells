const openAIService = require('./openai');

async function testAPIKey() {
  console.log('Testing OpenAI API key...');
  try {
    const response = await openAIService.sendPrompt('Say "Hello" if you can read this message.');
    console.log('✅ API Key is working! Response:', response);
  } catch (error) {
    console.error('❌ API Key test failed:', error.message);
    process.exit(1);
  }
}

testAPIKey(); 