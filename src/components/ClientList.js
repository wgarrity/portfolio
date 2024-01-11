// ClientList.js
import React from 'react';
import ClientCard from './ClientCard';
import clientData from './ClientData';

const ClientList = () => {
    return (
        <section className="clientCards">
            {clientData.map((client) => (
                <ClientCard key={client.id} client={client} />
            ))}
        </section>
    );
};

export default ClientList;