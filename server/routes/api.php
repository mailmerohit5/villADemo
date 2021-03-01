<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('getUser/{id}',[\App\Http\Controllers\ApiResponseController::class,'getUser']);
Route::get('getUsers',[\App\Http\Controllers\ApiResponseController::class,'getUsers']);
Route::post('login',[\App\Http\Controllers\ApiResponseController::class,'login']);
Route::get('allProduct',[\App\Http\Controllers\ApiResponseController::class,'allProduct']);

Route::group([
    'middleware' => ['api'],
    'prefix' => ''
], function ($router) {

});

