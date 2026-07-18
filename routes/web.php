<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/', 'top')->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
    Route::inertia('app-shell', 'app-shell')->name('app-shell');
});

require __DIR__ . '/settings.php';
