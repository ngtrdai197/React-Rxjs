import React, { useEffect } from 'react'
import { store } from './services';

export default function ContactChild() {

    useEffect(() => {
        store.subscribe(data => {
            console.log(data);
        });
    }, []);

    return (
        <div>
            Contact Child page
        </div>
    )
}
