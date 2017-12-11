import React from 'react';

const TicketListItem = ({ticket, selectedTicket, onTicketSelect}) => {
  const active = selectedTicket === ticket ? 'active' : '';

  return (
    <a
      className={`list-group-item list-group-item-action ${active} ticket-list-item`}
      onClick={() => onTicketSelect(ticket)}>
      {ticket.violation}
    </a>
  );
};

export default TicketListItem;
