import React, { useState } from 'react';

/*import "./cardText.css"*/
function CardText({ dataLink }) {

    const [showComment, setShowComment] = useState(null);

    return (
        <>
            {dataLink.map((link) => (
                <div
                    className="cardLink"
                    key={link.id}
                    onMouseEnter={() => setShowComment(link.id)}
                    onMouseLeave={() => setShowComment(null)}
                >
                    <a target="_blank" rel="noopener" href={link.url}>
                        {link.title}
                    </a>
                    {showComment === link.id && (
                        <span className="comment">{link.description}</span>
                    )}
                </div>))}
        </>

    );
}
export default CardText;