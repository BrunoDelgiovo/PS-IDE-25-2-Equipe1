import React from 'react';
import { useInView } from 'react-intersection-observer';

export default function Section({ id, title, children }) {
    const { ref, inView } = useInView({
        threshold: 0.1, // Trigger when 10% of the section is visible
        triggerOnce: false // Only trigger once
    });

    return (
        <section 
            ref={ref}
            id={id} 
            className={`content-section fade-in-section ${inView ? 'is-visible' : ''}`}
        >
            <div className="card">
                <h2 className="section-title">{title}</h2>
                {children}
            </div>
        </section>
    );
}