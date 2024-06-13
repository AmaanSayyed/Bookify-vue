<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json(Book::latest()->get());
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
      // Define validation rules
    $validatedData = $request->validate([
        'title' => 'required|string|min:3|max:255',
        'author' => 'required|string|max:255',
        'category' => 'required|string|in:Adventure,Biopic,Fantasy,Mystery,Science Fiction',
        'rating' => 'required|integer|min:1|max:5',
        'description' => 'nullable|string|max:1000',
    ]);

    // Create the Book item using the validated data
    $book = Book::create($validatedData);

    return response()->json($book);
    }

    /**
     * Display the specified resource.
     */
    public function show(Book $book)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Book $book)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Book $book)
    {
        $book->update($request->all());
        return response()->json($book);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Book $book)
    {
        $book->delete();
        return response()->json(['message'=>'Item deleted successfully']);
    }
}
