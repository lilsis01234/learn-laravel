import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';
import AddPublicationForm from './Publication/AddPublication';
import AddCommentForm from './Commentaires/AddCommentaire';

export default function Dashboard({ auth }) {
    const objets = usePage();
    const publications = objets.props.publications;
    console.log(publications)
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12 bg-white">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">facebook</div>
                        {/* <DisplayPublication/> */}
                        <AddPublicationForm/>
                    </div>
                </div>
                {publications.map((publication) => (
                    <>
                        <div key={publication.id}>
                            <p>Published by: {publication.user.name}</p>
                            <h2>{publication.description}</h2>

                            <img src={publication.file_url} alt="Publication Image" />
                            <h2>Commentaires</h2>
                            {/* <p>{publication.commentaires.user.name}</p> */}
                            <ul>
                                {publication.commentaires.map((commentaire) => (
                                    <li key={commentaire.id}>{commentaire.contenu}</li>
                                ))}
                            </ul>
                            <AddCommentForm publicationId={publication.id} />
                        </div>
                        <br></br>
                    </>
                ))}
            </div>
        </AuthenticatedLayout>
    );
}
