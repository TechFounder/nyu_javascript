function multiTableRandom () {
	document.write('<table>');
	var max = Math.floor((Math.random()*10)+1);
		for (row = 1; row <= max + 1; row++) {
			document.write('<tr>');
			if (row == 1) {
				document.write('<th>', 'X', '</th>');
					col = 1;
					while (col <= max) {
							document.write('<th>', col, '</th>');
							col++;
					}
			}
			else {
				document.write('<th>', row - 1, '</th>');
					col = 1;
					while (col <= max) {
							document.write('<td>', (row - 1) * col, '</td>');
							col++;
					}
			}
			document.write('</tr>');
		}
	document.write('</table>');
}

multiTableRandom();