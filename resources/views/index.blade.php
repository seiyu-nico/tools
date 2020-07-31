<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
  <title>{{ config('app.name') }}</title>
  <link rel="shortcut icon" href="{{ asset('/favicon.ico') }}">
  <!-- Scripts -->
  <script src="{{ mix('js/app.js') }}" defer></script>

  <!-- Styles -->
  <link href="{{ mix('css/app.css') }}" rel="stylesheet">

</head>
<body>
  <div id="app"></div>
</body>
</html>