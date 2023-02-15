var str="testyantra"
var countA=0
var countE=0
var countI=0
var countO=0
var countU=0


		for(let i=0;i<str.length;i++)
		{
			var ch=str.charAt(i);
			if(ch=='A'||ch=='a'){
				countA++;
			}
			else if(ch=='E'||ch=='e'){
                countE++;
			}
			else if(ch=='I'||ch=='i'){
                countI++;
			}
			else if(ch=='O'||ch=='o'){
                countO++;
			}
			else if(ch=='U'||ch=='u'){
                countU++;
			}
		}
		console.log("a"+" "+"--->"+countA);
		console.log("e"+" "+"--->"+countE);
		console.log("i"+" "+"--->"+countI);
		console.log("0"+" "+"--->"+countO);
		console.log("u"+" "+"--->"+countU);