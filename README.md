# Brain Cells - Excel AI Assistant 🧠

An intelligent desktop application that combines the power of spreadsheet editing with AI assistance, making data analysis and manipulation more intuitive and efficient.

![License](https://img.shields.io/badge/license-MIT-blue.svg)

## 🎯 Project Overview

Brain Cells is a modern desktop application that enhances the traditional spreadsheet experience with AI-powered assistance. Built with Electron, React, and OpenAI integration, it provides users with an intuitive interface to work with their data while leveraging artificial intelligence for enhanced productivity.

### Key Features

- Split-view interface (80/20) with spreadsheet grid and AI sidebar
- Interactive spreadsheet functionality powered by Handsontable
- Real-time AI assistance using OpenAI's GPT models
- Modern, responsive UI built with React and TailwindCSS
- Cross-platform desktop support via Electron

## 🚀 Sprint 0 Achievements

### 1. Project Foundation

- [x] Initial project scaffold with Electron + React + Vite
- [x] Development environment setup
- [x] Basic application architecture design

### 2. UI Implementation

- [x] Split-view layout implementation (80% spreadsheet, 20% AI sidebar)
- [x] Basic spreadsheet grid (10x10) using Handsontable
- [x] Chat interface with message history
- [x] TailwindCSS integration and styling

### 3. AI Integration

- [x] OpenAI service integration
- [x] Error handling implementation
- [x] Environment variable configuration

## 🛠️ Technical Stack

- **Frontend Framework**: React
- **Desktop Framework**: Electron
- **Build Tool**: Vite
- **Styling**: TailwindCSS
- **Spreadsheet Component**: Handsontable
- **AI Integration**: OpenAI API
- **Package Manager**: npm

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)
- OpenAI API key

## 🚀 Getting Started

1. Clone the repository:

```bash
git clone https://github.com/yourusername/brain_cells.git
cd brain_cells
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory:

```bash
OPENAI_API_KEY=your_api_key_here
```

4. Start the development server:

```bash
npm run dev
```

## 🎯 Current Status

The project has established a solid foundation with basic functionality in place. Key components are working, including:

- Basic UI and component structure
- TailwindCSS integration
- Partial OpenAI integration

### Known Issues

1. GPT-4 model access restriction
2. Environment variable loading path optimization needed

## 📝 Next Steps

1. Resolve GPT model access:
   - Either obtain GPT-4 access
   - Or modify code to use GPT-3.5-turbo
2. Complete end-to-end testing of AI integration
3. Implement core spreadsheet functionality
4. Enhance error handling and user feedback

## 🤝 Contributing

We welcome contributions! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- OpenAI for their powerful API
- The Electron community
- React and Vite teams
- Handsontable team

---

Built with ❤️ using Electron, React, and OpenAI
