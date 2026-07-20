<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/', 'top')->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
    Route::inertia('sites-index', 'sites-index')->name('sites-index');
    Route::inertia('process-master', 'process-master')->name('process-master');
});

require __DIR__ . '/settings.php';
