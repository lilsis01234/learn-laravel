import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        first_name:'',
        sexe:'',
        date_of_birth:'',
        image:''
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('first_name', data.first_name);
        formData.append('image', data.image);
        formData.append('date_of_birth', data.date_of_birth);
        formData.append('sexe', data.sexe);
        formData.append('email', data.email);
        formData.append('password', data.password);
        formData.append('password_confirmation', data.password_confirmation);

        post(route('register'));
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <form onSubmit={submit}>
            <div>
                <InputLabel htmlFor="image" value="Image" />

                <TextInput
                    id="image"
                    name="image"
                    type="file"
                    className="mt-1 block w-full"
                    onChange={(e) => setData('image', e.target.files[0])}
                    required
                />

                <InputError message={errors.image} className="mt-2" />
            </div>


                <div>
                    <InputLabel htmlFor="name" value="Nom" />

                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>


                <div>
                    <InputLabel htmlFor="first_name" value="Prénom" />

                    <TextInput
                        id="first_name"
                        name="first_name"
                        value={data.first_name}
                        className="mt-1 block w-full"
                        autoComplete="first_name"
                        isFocused={true}
                        onChange={(e) => setData('first_name', e.target.value)}
                        required
                    />

                    <InputError message={errors.first_name} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="date_of_birth" value="Date de naissance" />

                    <TextInput
                        type="date"
                        id="date_of_birth"
                        name="date_of_birth"
                        value={data.date_of_birth}
                        className="mt-1 block w-full"
                        autoComplete="date_of_birth"
                        isFocused={true}
                        onChange={(e) => setData('date_of_birth', e.target.value)}
                        required
                    />

                    <InputError message={errors.date_of_birth} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="sexe" value="Sexe" />

                    <TextInput
                        id="sexe"
                        name="sexe"
                        value={data.sexe}
                        className="mt-1 block w-full"
                        autoComplete="sexe"
                        isFocused={true}
                        onChange={(e) => setData('sexe', e.target.value)}
                        required
                    />

                    <InputError message={errors.sexe} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData('email', e.target.value)}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Mot de passe" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password', e.target.value)}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password_confirmation" value="Confirmer le mot de passe" />

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        required
                    />

                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Link
                        href={route('login')}
                        className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                    >
                        Vous avez déjà un compte?
                    </Link>

                    <PrimaryButton className="ml-4" disabled={processing}>
                        Enregistrer
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
