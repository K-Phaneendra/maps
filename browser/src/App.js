import React, { useState } from 'react';
import { Container, ButtonGroup, Button } from 'react-bootstrap';
import ChartView from './pages/ChartView';
import BatchStatus from './pages/BatchStatus';

function App() {
  const [view, setView] = useState('chart'); // Default view is chart

  return (
    <Container className="mt-4">
      <h2>Dashboard</h2>

      {/* View switch buttons */}
      <ButtonGroup className="mb-3">
        <Button
          variant={view === 'chart' ? 'primary' : 'outline-primary'}
          onClick={() => setView('chart')}
        >
          Chart View
        </Button>
        <Button
          variant={view === 'batch_status' ? 'primary' : 'outline-primary'}
          onClick={() => setView('batch_status')}
        >
          Batch Status
        </Button>
      </ButtonGroup>

      {/* Render the selected view */}
      {view === 'chart' && <ChartView />}
      {view === 'batch_status' && <BatchStatus />}
    </Container>
  );
}

export default App;
