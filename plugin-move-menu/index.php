<!DOCTYPE HTML>
<html lang="en-US">
<head>
	<meta charset="UTF-8" />
	<title></title>
	<script src="scripts/jquery.js" type="text/javascript" charset="utf-8"></script>
	<script type="text/javascript" src="scripts/move-menu.js"></script>
	<link rel="stylesheet" href="style.css" />
</head>
<body>
	<ul class="lavaLamp">
	    <li><a href="#">Home</a></li>
    	<li><a href="#">Plant a tree</a></li>
    	<li><a href="#">Travel</a></li>
    	<li><a href="#">elephant</a></li>
	</ul>
	<script type="text/javascript">
		$(function() { $(".lavaLamp").lavaLamp({ fx: "backout", speed: 700}) });
	</script>
</body>
</html>