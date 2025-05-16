import React, { useState, useRef, useEffect } from 'react';

function SidebarChat() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  
  // Auto scroll to bottom when messages change
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    // Add user message
    const userMessage = {
      type: 'user',
      content: inputValue,
      timestamp: new Date().toISOString(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue(''); // Clear input
    setIsLoading(true);

    try {
      // Add loading message
      const loadingMessage = {
        type: 'assistant',
        content: '...',
        isLoading: true,
        timestamp: new Date().toISOString(),
      };
      setMessages(prev => [...prev, loadingMessage]);

      // Call GPT-4 via IPC
      const response = await window.ai.sendPrompt(userMessage.content);
      
      // Remove loading message and add actual response
      setMessages(prev => {
        const filtered = prev.filter(msg => !msg.isLoading);
        return [...filtered, {
          type: 'assistant',
          content: response.success ? response.data : `Error: ${response.error}`,
          error: !response.success,
          timestamp: new Date().toISOString(),
        }];
      });
    } catch (error) {
      // Handle any IPC or other errors
      setMessages(prev => {
        const filtered = prev.filter(msg => !msg.isLoading);
        return [...filtered, {
          type: 'assistant',
          content: 'Sorry, there was an error processing your request.',
          error: true,
          timestamp: new Date().toISOString(),
        }];
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* Message History */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.timestamp}
            className={`flex flex-col ${
              message.type === 'user' ? 'items-end' : 'items-start'
            }`}
          >
            <div
              className={`max-w-[85%] rounded-lg p-3 ${
                message.type === 'user'
                  ? 'bg-blue-500 text-white'
                  : message.error
                  ? 'bg-red-100 text-red-700'
                  : message.isLoading
                  ? 'bg-gray-100 text-gray-500 animate-pulse'
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              {message.isLoading ? (
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              ) : (
                message.content
              )}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <form onSubmit={handleSubmit} className="border-t border-gray-200 p-4">
        <textarea
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type your message..."
          className="w-full rounded-lg border border-gray-200 p-2 mb-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="3"
          disabled={isLoading}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleSubmit(e);
            }
          }}
        />
        <button
          type="submit"
          className={`w-full rounded-lg py-2 px-4 transition-colors ${
            isLoading || !inputValue.trim()
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-blue-500 text-white hover:bg-blue-600'
          }`}
          disabled={isLoading || !inputValue.trim()}
        >
          {isLoading ? 'Sending...' : 'Send'}
        </button>
      </form>
    </div>
  );
}

export default SidebarChat; 