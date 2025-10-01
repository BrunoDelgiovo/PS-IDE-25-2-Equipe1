import React from 'react';

export default function Section({ id, title, children }) {
    return (
        <section id={id} className="content-section">
            <div className="card">
                <h2 className="section-title">{title}</h2>
                {children}
            </div>
        </section>
    );
}