import React from 'react';
import { usePage } from '@inertiajs/react';

export default function DisplayPublication() {
    const { props } = usePage();
    const { publications } = props;

    return (
        <>
            {publications.map((publication) => (
                <div key={publication.id}>
                    <h2>{publication.description}</h2>
                    <p>Published by: {publication.user.name}</p>
                    <p>Comments:</p>
                    <ul>
                        {publication.commentaires.map((commentaire) => (
                            <li key={commentaire.id}>{commentaire.contenu}</li>
                        ))}
                    </ul>
                    {/* Add Comment Form */}
                    <AddCommentForm publicationId={publication.id} />
                </div>
            ))}
        </>
    );
}
