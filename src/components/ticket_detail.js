import React from 'react';

const TicketDetail = ({ticket}) => {
  if (!ticket) {
    return <div></div>;
  }
  return (
    <div>
      <p className="lead">
        {ticket.violation} at {ticket.violation_time} on {ticket.issue_date}
      </p>
      <p>
        Fined ${ticket.fine_amount}
      </p>
      <p>
        <a href={ticket.summons_image} target="_blank">View full ticket here</a>
      </p>
    </div>
  );
}

export default TicketDetail;
