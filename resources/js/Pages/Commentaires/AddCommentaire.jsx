import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';

const AddCommentForm = ({ publicationId }) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        contenu: '',
        publication_id: publicationId,
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        // Submit the form using Inertia
        post(route('commentaire.store'));

        // Clear the form
        reset('contenu');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Add Commentaire"
                value={data.contenu}
                onChange={(e) => setData('contenu', e.target.value)}
            />
            <button type="submit" disabled={processing}>
                Enregistrer
            </button>
        </form>
    );
};

export default AddCommentForm;
