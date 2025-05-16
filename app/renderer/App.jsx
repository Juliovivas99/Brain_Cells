import React from 'react'
import SpreadsheetGrid from './components/SpreadsheetGrid'
import SidebarChat from './components/SidebarChat'

function App() {
  return (
    <div className="h-screen flex">
      {/* Main Content Area (80%) */}
      <main className="flex-grow bg-gray-50">
        <div className="h-full w-full">
          <SpreadsheetGrid />
        </div>
      </main>

      {/* Sidebar (20%) */}
      <aside className="w-80 min-w-80 border-l border-gray-200 bg-white flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">AI Assistant</h2>
        </div>
        <div className="flex-1">
          <SidebarChat />
        </div>
      </aside>
    </div>
  )
}

export default App 