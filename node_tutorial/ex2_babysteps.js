/**
 * Created by callum on 07/07/2016.
 */

var sum = 0;

for (var i = 2; i < process.argv.length; i++) {
    sum += parseInt(process.argv[i]);
}

console.log(sum);