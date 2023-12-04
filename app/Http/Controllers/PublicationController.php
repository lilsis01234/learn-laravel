<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use App\Models\Publication;

class PublicationController extends Controller
{
    public function store(Request $request)
    {
        // Validate the request
        $request->validate([
            'description' => 'required|string',
            'file' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        // Upload file
        // Upload file
        $file = $request->file('file');
        $filePath = $file->store('public/files');
        $url = asset('storage/' . $filePath);

        // Create the publication
        $publication = Publication::create([
            'description' => $request->description,
            'file' => $url,
            'user_id' => auth()->id(),
        ]);

        return redirect()->route('dashboard');
    }

    public function index()
    {
        try {
            $publications = Publication::with('commentaires', 'user')->get();

            // Add file URLs to each publication
            $publications->each(function ($publication) {
                $publication->file_url = asset('storage/files/' . basename($publication->file));
            });

            // Pass publications to the Inertia view
            return Inertia::render('Dashboard', compact('publications'));
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }



    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    // public function store(Request $request): RedirectResponse
    // {
    //     $request->validate([
    //         'name' => 'required|string|max:255',
    //         'email' => 'required|string|email|max:255|unique:'.User::class,
    //         'password' => ['required', 'confirmed', Rules\Password::defaults()],
    //         'first_name'=>'required|string|max:255',
    //         'date_of_birth'=>'required',
    //         'sexe'=>'required|string|max:1',
    //         'image'=>'required|string'
    //     ]);

    //     $user = User::create([
    //         'name' => $request->name,
    //         'email' => $request->email,
    //         'password' => Hash::make($request->password),
    //         'first_name' => $request->first_name,
    //         'image'=>$request->image,
    //         'sexe'=>$request->sexe,
    //         'date_of_birth'=>$request->date_of_birth
    //     ]);

    //     event(new Registered($user));

    //     Auth::login($user);

    //     return redirect(RouteServiceProvider::HOME);
    // }
}

