import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

const Dashboard = () => {
  return (
    <div>
      <Header page="Dashboard" />
      <Sidebar page="Dashboard"/>
      <div className="dashboard-content">
        <h2>Welcome to the Dashboard</h2>
        <p>This is your central hub for accessing key insights and activities.</p>
      </div>
    </div>
  );
};

export default Dashboard;
