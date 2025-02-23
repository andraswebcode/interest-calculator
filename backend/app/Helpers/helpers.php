<?php

if (!function_exists('frontend_asset')){
	function frontend_asset(string $file){
		$host = env('FRONTEND_HOST', '');
		return $host . '/' . $file;
	}
}
