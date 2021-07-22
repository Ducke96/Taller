alert('ups se reiniciaron los datos');
var Cuentas = [
    {
        idCustomer: "43545643",
        lastname: "Fernández Sánchez",
        name: "María Cristina",
        dateBirthday: "1965/05/23",
        accounts: [
            {
                number: "762534",
                dateOpen: "2019/06/25",
                residue: 2000000,
                state: true
            },
            {
                number: "9038483",
                dateOpen: "2020/03/12",
                residue: 1500000,
                state: false,
            }
        ],
        Credits: [
            {
                number: "7625341",
                dateOpen: "2019/06/25",
                residue: 2000000,
                state: true
            },
            {
                number: "90384831",
                dateOpen: "2020/03/12",
                residue: 1500000,
                state: true
            }

        ]
    },
    {
        idCustomer: "83373755",
        lastname: "Morales Sierra",
        name: "Viviana Andrea",
        dateBirthday: "1975/10/21",
        accounts: [
            {
                number: "9098301",
                dateOpen: "2020/01/12",
                residue: 0,
                state: false
            },
            {
                number: "589388744",
                dateOpen: "2020/04/19",
                residue: 0,
                state: false
            },
            {
                number: "3294944",
                dateOpen: "2018/09/23",
                residue: 0,
                state: false
            },
        ],
        Credits: [
            {
                number: "7625342",
                dateOpen: "2019/06/25",
                residue: 2000000,
                state: true
            },
            {
                number: "90384832",
                dateOpen: "2020/03/12",
                residue: 1500000,
                state: true,
            }

        ]
    },
    {
        idCustomer: "74892783",
        lastname: "Pedraza López",
        name: "Sergio Alejandro",
        dateBirthday: "2000/07/29",
        accounts: [
            {
                number: "73849545",
                dateOpen: "2019/02/27",
                residue: 2000000,
                state: true,
            },
            {
                number: "9474753",
                dateOpen: "2018/7/20",
                residue: 1000000,
                state: false
            },
            {
                number: "97727273",
                dateOpen: "2019/10/11",
                residue: 8900000,
                state: true
            },
        ],
        Credits: [
            {
                number: "7625343",
                dateOpen: "2019/06/25",
                residue: 2000000,
                state: true
            }

        ]
    },
    {
        idCustomer: "93897394",
        lastname: "Arcos Iriarte",
        name: "Jorge Enrique",
        dateBirthday: "1983/11/30",
        accounts: [
            {
                number: "9937475",
                dateOpen: "2018-10-10",
                residue: 234000,
                state: false
            }
        ],
        Credits: [
            {
                number: "7625344",
                dateOpen: "2019/06/25",
                residue: 2000000,
                state: true
            },
            {
                number: "90384834",
                dateOpen: "2020/03/12",
                residue: 1500000,
                state: true
            }

        ]
    },
    {
        idCustomer: "94747535",
        lastname: "Chaparro Sinisterra",
        name: "Julio Ernesto",
        dateBirthday: "1962/12/07",
        accounts: [
            {
                number: "9839494",
                dateOpen: "2019/03/27",
                residue: 2000000,
                state: true
            },
            {
                number: "132434",
                dateOpen: "2020/7/11",
                residue: 1800000,
                state: true
            },
            {
                number: "954563",
                dateOpen: "2019/3/18",
                residue: 10000000,
                state: true,
            },
            {
                number: "8993845",
                dateOpen: "2020/11/18",
                residue: 89000,
                state: false
            },
        ],
        Credits: [
            {
                number: "7625345",
                dateOpen: "2019/06/25",
                residue: 2000000,
                state: true
            },
            {
                number: "90384835",
                dateOpen: "2020/03/12",
                residue: 0,
                state: false,
            },
            {
                number: "76255",
                dateOpen: "2019/06/25",
                residue: 2000000,
                state: true
            },
            {
                number: "903845",
                dateOpen: "2020/03/12",
                residue: 0,
                state: false,
            }

        ]
    },
]


ReloadDatos();

//Leer documentos

function ReloadDatos() {
    
    tabla.innerHTML = '';
    Cuentas.forEach((Cuentas) => {


        console.log(Cuentas.accounts);
        tabla.innerHTML += `
        <tr>
        <th scope="row">${Cuentas.idCustomer}</th>
        <td>${Cuentas.name}</td>
        <td>${Cuentas.lastname}</td>
        <td>${Cuentas.dateBirthday}</td>
        
        <td>${Cuentas.accounts.length}</td>
        <td><button class="btn btn-warning"  onclick="editarCuentas('${Cuentas.idCustomer}','${Cuentas.name}')">Editar</button></td>
        <td>${Cuentas.Credits.length}</td>
        <td><button class="btn btn-warning"  onclick="editarCreditos('${Cuentas.idCustomer}','${Cuentas.name}')">Editar</button></td>
        </tr>
        `


    });

}


//leer creditos

function editarCreditos(id, nombreUser) {
    document.getElementById('usuarioCredito').innerHTML = '';
    document.getElementById('usuarioCredito').innerHTML += `${nombreUser}`;


    tablaCreditos.innerHTML = '';

    Cuentas.forEach((Cuentas) => {



        if (Cuentas.idCustomer == id) {

            Cuentas.Credits.forEach((Cuentas1) => {


              

                console.log(Cuentas1.number);

                tablaCreditos.innerHTML += `
                        <tr>
                        <th scope="row">${Cuentas1.number}</th>
                        <td>${Cuentas1.state}</td>
                        <td>${Cuentas1.residue}</td>
                        <td><button class="btn btn-warning"  onclick="editarState('${id}','${Cuentas1.number}','Credito')">Editar State</button></td>
                        </tr>
                        `




            });


        }


    });


}



// leer cuentas
function editarCuentas(id, nombreUser) {
    document.getElementById('usuarioCuenta').innerHTML = '';
    document.getElementById('usuarioCuenta').innerHTML += `${nombreUser}`;
    tablaCuentas.innerHTML = '';



    Cuentas.forEach((Cuentas) => {


        if (Cuentas.idCustomer == id) {

            Cuentas.accounts.forEach((Cuentas1) => {


                console.log(Cuentas1.number);

                tablaCuentas.innerHTML += `
                    <tr>
                    <th scope="row">${Cuentas1.number}</th>
                    <td>${Cuentas1.state}</td>
                    <td>${Cuentas1.residue}</td>
                    <td><button class="btn btn-warning"  onclick="editarState('${id}','${Cuentas1.number}','Cuenta')">Editar State</button></td>
                    </tr>
                    `




            });


        }


    });


}


function cuenta(number, dataOpen, residue, state) {
    this.number = number;
    this.dataOpen = dataOpen;
    this.state = state;
    this.residue = residue;
}
function credito(number, dataOpen, residue, state) {
    this.number = number;
    this.dataOpen = dataOpen;
    this.state = state;
    this.residue = residue;
}


//consignar

function consignar() {


    var id = document.getElementById("idCustomer").value;
    var idcuenta = document.getElementById("idCuenta").value;
    var Producto = document.getElementById("Producto").value;
    var saldo = document.getElementById("Cantidad").value;

    Cuentas.forEach((Cuentas) => {

        if (Cuentas.idCustomer == id) {

            if (Producto == "Cuenta") {

                Cuentas.accounts.forEach((Cuentas) => {

                    if (Cuentas.number == idcuenta) {

                        Cuentas.residue = Cuentas.residue + saldo;

                        alert('consignacion hecha su saldo cambio a ' + Cuentas.residue);
                    }


                });

            } else if (Producto == "Credito") {

                Cuentas.Credits.forEach((Cuentas) => {

                    if (Cuentas.number == idcuenta) {

                        Cuentas.residue = Cuentas.residue - saldo;

                        if(Cuentas.residue ==0){
                            Cuentas.state = false;
                        }else if(Cuentas.residue < 0){

                        Cuentas.residue = Cuentas.residue + saldo;

                        }
                        alert('consignacion hecha su deuda cambio a ' + Cuentas.residue);
                    }


                });

            }




        }


    });



}




function retirar() {
    alert('entro al retirar');

    var id = document.getElementById("idCustomer1").value;
    var idcuenta = document.getElementById("idCuenta1").value;
    var saldo = document.getElementById("Cantidad1").value;

    Cuentas.forEach((Cuentas) => {




        if (Cuentas.idCustomer == id) {


            Cuentas.accounts.forEach((Cuentas) => {

                if (Cuentas.number == idcuenta) {

                        if (saldo > Cuentas.residue) {
                                alert('no puede retirar mas de lo debido');
                        }else{
                            Cuentas.residue = Cuentas.residue - saldo;
                            alert('retiro hecho su saldo cambio a ' + Cuentas.residue);

                        }
            


                 
                }


            });


        }


    });



}





function editarState(id, numerocuenta ,Producto) {

    if (Producto == "Cuenta") {

        Cuentas.forEach((Cuentas) => {
            if (Cuentas.idCustomer == id) {

                Cuentas.accounts.forEach((Cuentas) => {

                    if (Cuentas.number == numerocuenta) {


                        if (Cuentas.state == true) {
                            Cuentas.state = false;


                            console.log(Cuentas.state);
                            console.log('el estado de la cuenta cambio a false');

                        } else {

                            Cuentas.state = true;
                            console.log(Cuentas.state);


                        }

                    }


                });

            }

        });



    }


    else if (Producto == "Credito") {


        Cuentas.forEach((Cuentas) => {
            if (Cuentas.idCustomer == id) {

                Cuentas.Credits.forEach((Cuentas) => {

                    if (Cuentas.number == numerocuenta) {

                        if (Cuentas.state == true) {
                            Cuentas.state = false;


                            console.log(Cuentas.state);
                            console.log('el estado de la cuenta cambio a false');

                        } else {

                            Cuentas.state = true;
                            console.log(Cuentas.state);


                        }

                    }


                });

            }

        });



    }

}

    function Crear() {
        var id = document.getElementById("idCustomerC").value;
        var idcuenta = Math.random() * (10000 - 1) + 1;
        var saldo = document.getElementById("CantidadC").value;
        var Producto = document.getElementById("ProductoC").value;

        if (Producto == "Cuenta") {
            Cuentas.forEach((Cuentas) => {

                if (Cuentas.idCustomer == id) {

                    var obj = {

                        number: idcuenta,
                        dateOpen: new Date(),
                        residue: saldo,
                        state: true
                    }

                    Cuentas.accounts.push(obj);
                    alert('se creo la cuenta');
                }
            });

        } else if (Producto == "Credito") {

            Cuentas.forEach((Cuentas) => {


                if (Cuentas.idCustomer == id) {
                    var obj = {

                        number: idcuenta,
                        dateOpen: new Date(),
                        residue: saldo,
                        state: true
                    }
                    Cuentas.Credits.push(obj);
                    alert('se creo el credito');
                }
            });

        }



    }

