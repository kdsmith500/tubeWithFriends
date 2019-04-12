/*>>>>>>> REACT HOOKS STUDY <<<<<<<*/

import React, { useState } from 'react';

function NewComponent() {
    const [change, setChange]=useState('Hello!');
    return (
        <div onClick={() => setChange('World!')}>
            {change}
        </div>
    );
};

export default NewComponent;