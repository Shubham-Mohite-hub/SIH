import Dashboard from "./Components/Dashboard";
import DashboardOverview from "./Components/DashboardOverview";
import PatientsView from "./Components/Patient";

function App() {
  return (
    <Dashboard>
      <DashboardOverview />
    </Dashboard>
  );
}

export default App;
