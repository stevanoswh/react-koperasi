import React, { useState, useEffect } from 'react';



export default function ReactHook() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Anda telah mengklik ${count} kali`;
    }, [count]); 

    return (
        <div className="martop">
        <p>Anda telah mengklik sebanyak {count} kali</p>
        <button onClick={() => setCount(count + 1)}>
            Klik saya
        </button>
        </div>
    );
}
