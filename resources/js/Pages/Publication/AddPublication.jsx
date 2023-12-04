import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';

export default function AddPublicationForm() {
    const { data, setData, post, processing, errors, reset } = useForm({
        description: '',
        file: null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        // Prepare form data
        const formData = new FormData();
        formData.append('description', data.description);
        formData.append('file', data.file);

        // Submit the form using Inertia
        post(route('publication.store'));

        // Clear the form
        reset('description', 'file');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Description:</label>
                <input
                    type="text"
                    value={data.description}
                    onChange={(e) => setData('description', e.target.value)}
                />
                <span>{errors.description}</span>
            </div>
            <div>
                <label>File:</label>
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setData('file', e.target.files[0])}
                />
                <span>{errors.file}</span>
            </div>
            <div>
                <button type="submit" disabled={processing}>
                    Add Publication
                </button>
            </div>
        </form>
    );
}
