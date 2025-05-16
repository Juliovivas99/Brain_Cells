const openAIService = require('./openai');

async function testGPT4() {
  try {
    console.log('Testing GPT-4 integration...');
    const response = await openAIService.sendPrompt(
      'What is the sum of numbers in column A if A1=5, A2=10, and A3=15?'
    );
    console.log('GPT-4 Response:', response);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

testGPT4(); 