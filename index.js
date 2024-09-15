var myArray = [
    {'name':'John', 'age':'30', 'birthday':'11/10/2021'},
    {'name':'Shawn', 'age':'32', 'birthday':'10/1/2024'},
    {'name':'Fili', 'age':'29', 'birthday':'10/14/1990'},
    {'name':'Cahill', 'age':'25', 'birthday':'11/29/2023'},
    {'name':'Sam', 'age':'27', 'birthday':'3/12/1865'},
    {'name':'Tengo', 'age':'24', 'birthday':'10/31/2005'},
]
myTable(myArray)
function myTable(data){
    var table = document.getElementById("popTable");

    for(let i = 0; i < data.length; i++){
        var row = `
                <tr>
                <td>${data[i].name}</td>
                <td>${data[i].age}</td>
                <td>${data[i].birthday}</td>
                </tr>`

                table.innerHTML += row
    }
}