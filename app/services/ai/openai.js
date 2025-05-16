const axios = require('axios');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../../.env') });

class OpenAIService {
  constructor() {
    this.apiKey = process.env.OPENAI_API_KEY;
    if (!this.apiKey) {
      throw new Error('OPENAI_API_KEY is not set in environment variables. Please check your .env file in the root directory.');
    }
    if (this.apiKey === 'your-api-key-here') {
      throw new Error('Please replace the placeholder API key in .env with your actual OpenAI API key.');
    }

    this.client = axios.create({
      baseURL: 'https://api.openai.com/v1',
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json'
      }
    });

    // Log successful initialization (but not the key!)
    console.log('OpenAI service initialized successfully');
  }

  async sendPrompt(promptText) {
    try {
      const response = await this.client.post('/chat/completions', {
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: 'You are an AI assistant helping with spreadsheet operations. Provide clear, concise responses.'
          },
          {
            role: 'user',
            content: promptText
          }
        ],
        temperature: 0.7,
        max_tokens: 500
      });

      return response.data.choices[0].message.content.trim();
    } catch (error) {
      if (error.response) {
        // API responded with error status
        switch (error.response.status) {
          case 401:
            throw new Error('Invalid API key. Please check your OpenAI API key in the root .env file.');
          case 429:
            throw new Error('Rate limit exceeded. Please try again later.');
          case 500:
            throw new Error('OpenAI service error. Please try again later.');
          default:
            throw new Error(`OpenAI API error: ${error.response.data.error?.message || 'Unknown error'}`);
        }
      } else if (error.request) {
        // Network error
        throw new Error('Network error. Please check your internet connection.');
      } else {
        throw new Error(`Error: ${error.message}`);
      }
    }
  }
}

// Export a singleton instance
const openAIService = new OpenAIService();
module.exports = openAIService; 