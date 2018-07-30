<!DOCTYPE html>
<html>
	<head>
		<title></title>
	</head>
	<body>
		
		<p></p>
		<p></p>
		
		<script>
			const first = ['Behind', 'every', 'great', 'man'];
			const second = ['is', 'a', 'woman'];
			const gabung = first.concat(second); // mengabungkan 2 array jadi satu
			document.getElementsByTagName("p")[0].innerHTML = gabung;
			
			const third = ['rolling', 'her', 'eyes'];
			const gabung2 = first.concat(second, third); // mengabungkan 3 array jadi satu
			document.getElementsByTagName("p")[1].innerHTML = gabung2;
		</script>
		
	</body>
 
</html>
