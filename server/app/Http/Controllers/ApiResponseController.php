<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ApiResponseController extends Controller
{
    //
    function apiResponse($message, $data, $errors = [], $status = true)
    {
        $errorCode = $status ? 200 : 422;
        $result = [
            "message" => $message,
            "status" => $errorCode,
            "data" => $data,
            "errors" => $errors
        ];
        return response()->json($result);
    }

    public function login(Request $request)
    {
        $inputAll = $request->all();
        $errors = [];
        $data = [];
        $message = "";
        $status = true;
        $validator = Validator::make($inputAll, [
            'email' => 'required',
            'password' => 'required',
        ]);
        if ($validator->fails()) {
            $status = false;
            $errors = $validator->errors();
            $message = "Login Failed";
            return $this->apiResponse($message, $data, $errors, $status);
        }
        $credentials = $request->only("email", "password");
        if (!$token = auth()->attempt($credentials)) {
            $status = false;
            $errors = [
                "login" => "Invalid username or password",
            ];
            $message = "Login Failed";
        } else {
            $message = "Login Successfull";
            $data = [
                'access_token' => $token,
                'token_type' => 'bearer',
                'expires_in' => auth()->factory()->getTTL() * 60,
                'user' => User::with('roles')->where('id','=',auth()->user()->id)->first(),
            ];
        }
        return $this->apiResponse($message, $data, $errors, $status);
    }

    public function allProduct(){
        $products=Product::with('users')->latest()->get();
        return $this->apiResponse("List",$products,[],true);
    }

    public function getUser($id){
        $user=User::with('roles')->where('id','=',$id)->first();
        return $this->apiResponse("List",$user,[],true);
    }

    public function getUsers(){
        $user=User::with('roles')->latest()->get();
        return $this->apiResponse("List",$user,[],true);
    }
}
