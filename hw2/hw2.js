document.write('<table>');
	for (row = 1; row <= 11; row++) {
		document.write('</tr>');
		if (row == 1) {
			document.write('<th>', 'X', '</th>');
				col = 1;
				while (col <= 10) {
						document.write('<th>', col, '</th>');
						col++;
				}
		}
		else {
			document.write('<th>', row - 1, '</th>');
				col = 1;
				while (col <= 10) {
						document.write('<td>', (row - 1) * col, '</td>');
						col++;
				}
		}
		document.write('</tr>');
	}
document.write('</table>');
