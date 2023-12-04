<?php

namespace App\Http\Controllers;

use App\Models\Commentaire;
use Illuminate\Http\Request;
use Inertia\Inertia;


class CommentaireController extends Controller
{
    // public function index()
    // {
    //     $commentaires = Commentaire::all();
    //     return Inertia::render('Commentaires/Commentaires',compact('commentaires'));
    // }

    public function store(Request $request)
    {
        // Validate the request
        $request->validate([
            'contenu' => 'required|string',
            'publication_id' => 'required|exists:publications,id',
        ]);

        // Create the comment
        Commentaire::create([
            'contenu' => $request->contenu,
            'user_id' => auth()->id(),
            'publication_id' => $request->publication_id,
        ]);

        return redirect()->back();

    }
    public function edit($id){
        //
    }
}
