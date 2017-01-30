var memory_array = ["A", "A", "B", "B", "C", "C", "D", "D"];
var memory_values = [];
var memory_tile_ids = [];
var tiles flipped = 0;
Array.prototype.memory_tile_shuffle = function() {
	var i = this.length, j, temp;
	while (--i > 0) {
		j = Math.floor(Math.random() * (i+1));
		temp = this[j];
		this[j] = this [i];
		this [i] = temp;
	}
}

function newBoard(){
	tiles_flipped = 0;
	var output = '';
    memory_array.memory_tile_shuffle();
	for(var i = 0; i < memory_array.length; i++){
		output += '<div id="tile_'+i+'" onclick="memoryFlipTile(this,\''+memory_array[i]+'\')"></div>';
	}
	document.getElementById('container').innerHTML = output;
}

function memoryFlipTile (tile,value) {
	if(tile.innerHTML == "" && memory_values.length < 2) {
		tile.style.background = '#FFF';
		tile .innerHTML = val;
		if (memory_values.length == 0) {
			memory_values.push(val);
			memory_tile_ids.push(tile.id);
		} else if (memory_values.length == 1) {
			memory_values.push(val);
			memory_tile_ids.push(tile.id);
		}
	}
}
