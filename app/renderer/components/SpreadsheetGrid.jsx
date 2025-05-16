import React, { useEffect, useRef } from 'react';
import { HotTable } from '@handsontable/react';
import { registerAllModules } from 'handsontable/registry';
import 'handsontable/dist/handsontable.full.min.css';

// Register all Handsontable modules
registerAllModules();

// Generate initial data (10x10 grid)
const generateInitialData = () => {
  return Array.from({ length: 10 }, (_, rowIndex) =>
    Array.from({ length: 10 }, (_, colIndex) => {
      const col = String.fromCharCode(65 + colIndex); // Convert 0 to 'A', 1 to 'B', etc.
      return `${col}${rowIndex + 1}`;
    })
  );
};

function SpreadsheetGrid() {
  const hotRef = useRef(null);
  
  useEffect(() => {
    // You can add any initialization logic here
    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <div className="w-full h-full">
      <HotTable
        ref={hotRef}
        data={generateInitialData()}
        colHeaders={true}
        rowHeaders={true}
        height="100%"
        width="100%"
        licenseKey="non-commercial-and-evaluation"
        autoColumnSize={true}
        autoRowSize={true}
        stretchH="all"
        className="htCore"
        settings={{
          // Excel-like feel
          selectionMode: 'multiple',
          fragmentSelection: true,
        }}
      />
    </div>
  );
}

export default SpreadsheetGrid; 