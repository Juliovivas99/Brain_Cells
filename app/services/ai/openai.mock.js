class MockOpenAIService {
  async sendPrompt(promptText) {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Mock responses for specific prompts
    if (promptText.toLowerCase().includes('sum') && promptText.toLowerCase().includes('column b')) {
      return '=SUM(B2:B100)';
    }

    // Default response
    return 'I understand you want help with spreadsheet formulas. Could you please be more specific?';
  }
}

const mockOpenAIService = new MockOpenAIService();
module.exports = mockOpenAIService; 