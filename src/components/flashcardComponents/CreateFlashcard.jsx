import React, { useState } from 'react';
import CreateForm from './CreateForm';
import './Create.css';

function CreateFlashcard() {
    const [createFlash, setCreateFlash] = useState(false);

    return (
        <section id='create-flashcard'>
            <div className="information">
                <div className="intro">
                    <h1>Create Your Own Flash Cards Free!</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia amet dignissimos odit voluptatem corrupti quidem molestiae, doloremque, eius, sit soluta excepturi deleniti praesentium beatae necessitatibus. Ad, iure. Consequatur, aliquam perspiciatis?</p>
                </div>
                <div className="start-now">
                    <div className="cta">
                        <p>Begin your studying journey for FREE!</p>
                        <button onClick={() => setCreateFlash(createFlash ? false : true)}>START NOW</button>
                    </div>
                </div>
            </div>
            { createFlash &&
                <CreateForm />
            }
        </section>
    )
}

export default CreateFlashcard