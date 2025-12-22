import { useLocation, useNavigate } from 'react-router-dom';
import { tickets } from '../data/tickets';
import FormsPage from './FormsPage';

function FormPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const ticketId = location.state?.ticketId;
  const selectedTicket = tickets.find((ticket) => ticket.id === ticketId);

  return <FormsPage selectedTicket={selectedTicket} onBack={() => navigate('/')} />;
}

export default FormPage;
