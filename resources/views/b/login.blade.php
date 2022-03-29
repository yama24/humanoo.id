<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Responsive Admin Dashboard Template">
    <meta name="keywords" content="admin,dashboard">
    <meta name="author" content="stacks">
    <!-- The above 6 meta tags *must* come first in the head; any other head content must come *after* these tags -->

    <!-- Title -->
    <title>Login - Human∞.id</title>

    <!-- Styles -->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
        rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;600;700;800&display=swap"
        rel="stylesheet">
    <link
        href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
        rel="stylesheet">
    <link href="{{ asset('b/plugins/bootstrap/css/bootstrap.min.css') }}" rel="stylesheet">
    <link href="{{ asset('b/plugins/perfectscroll/perfect-scrollbar.css') }}" rel="stylesheet">
    <link href="{{ asset('b/plugins/pace/pace.css') }}" rel="stylesheet">


    <!-- Theme Styles -->
    <link href="{{ asset('b/css/main.min.css') }}" rel="stylesheet">
    <link href="{{ asset('b/css/custom.css') }}" rel="stylesheet">

    <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('humanooid-fav-head.svg') }}" />
    <link rel="icon" type="image/png" sizes="32x32" href="{{ asset('humanooid-fav-head.svg') }}" />

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>

<body>
    <div class="app app-auth-sign-in align-content-stretch d-flex flex-wrap justify-content-end">
        <div class="app-auth-background">

        </div>
        <div class="app-auth-container">
            <div class="logo mb-5">
                <a href="/">Human∞.id</a>
            </div>
            @if (session('warning'))
                <div class="alert alert-warning">
                    <b>Wait!</b> {{ session('warning') }}
                </div>
            @elseif (session('danger'))
                <div class="alert alert-danger">
                    <b>Opps!</b> {{ session('danger') }}
                </div>
            @endif

            {{-- <p class="auth-description">Please sign-in to your account and continue to the dashboard.<br>Don't have an
                account? <a href="sign-up.html">Sign Up</a></p> --}}
            <form action="{{ route('actionlogin') }}" method="post">
                @csrf
                <div class="auth-credentials m-b-xxl">
                    <label for="signInEmail" class="form-label">Email address</label>
                    <input type="text" class="form-control {{ $errors->has('signInEmail') ? 'is-invalid' : '' }}"
                        id="signInEmail" name="signInEmail" value="{{ old('signInEmail') }}"
                        aria-describedby="signInEmail" placeholder="example@neptune.com">
                    @if ($errors->has('signInEmail'))
                        <span class="invalid-feedback">{{ $errors->first('signInEmail') }}</span>
                    @endif


                    <label for="signInPassword" class="form-label m-t-md">Password</label>
                    <input type="password"
                        class="form-control {{ $errors->has('signInPassword') ? 'is-invalid' : '' }}"
                        id="signInPassword" name="signInPassword" value="{{ old('signInPassword') }}"
                        aria-describedby="signInPassword"
                        placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;">
                    @if ($errors->has('signInPassword'))
                        <span class="invalid-feedback">{{ $errors->first('signInPassword') }}</span>
                    @endif

                </div>

                <div class="auth-submit">
                    <button type="submit" class="btn btn-primary">Sign In</button>
                    {{-- <a href="#" class="auth-forgot-password float-end">Forgot password?</a> --}}
                </div>
            </form>
            {{-- <div class="divider"></div> --}}
            {{-- <div class="auth-alts">
                <a href="#" class="auth-alts-google"></a>
                <a href="#" class="auth-alts-facebook"></a>
                <a href="#" class="auth-alts-twitter"></a>
            </div> --}}
        </div>
    </div>

    <!-- Javascripts -->
    <script src="{{ asset('b/plugins/jquery/jquery-3.5.1.min.js') }}"></script>
    <script src="{{ asset('b/plugins/bootstrap/js/bootstrap.min.js') }}"></script>
    <script src="{{ asset('b/plugins/perfectscroll/perfect-scrollbar.min.js') }}"></script>
    <script src="{{ asset('b/plugins/pace/pace.min.js') }}"></script>
    <script src="{{ asset('b/js/main.min.js') }}"></script>
    <script src="{{ asset('b/js/custom.js') }}"></script>
</body>

</html>
