import React from "react";

const listJualBU = [
    {
        nama : 'Cermin Bekas',
        ket : 'ukuran 40 cm x 60 cm',
        harga : 125000
    },

    {
        nama : 'Lemari Plastik Bekas',
        ket : '4 susun',
        harga : 200000
    },

    {
        nama : 'Kompor Gas 1 Tungku',
        ket : 'Merk Quantum',
        harga : 175000
    },

    {
        nama : 'Tabung Gas 3 Kg',
        ket : 'bonus sisa isi gas',
        harga : 150000
    }
]

class LatianRidwan extends React.Component {
    constructor() {
        super()

        this.state = {
            totalBayar = 0,
            barangs : [],
            bills : []
        }
    }

    componentDidMount (){
        this.setState({barangs: listJualBU})
    }

    componentDidUpdate (prevProps, prevState) {
        if (prevState.bills.length !== this.state.bills.length) {
            
            let total = 0;

            for (let struk of this.state.bills) {
                total = total + struk.harga
            }

            this.setState({totalBayar : total})
        }
    }

    tambah (barangYangDipilih) {
        const kantong = [ ...this.state.bills]
        kantong.push(barangYangDipilih)
        this.setState({bills: kantong})
    }

    hapus (barangIni) {
        const isiKantong = [...this.state.bills]
        const index = isiKantong.indexOf(barangIni)

        if (index !== -1) {
            isiKantong.splice(index,1)
            this.setState({bills: isiKantong})
        }
    }

    render () {
        return(
            <div>
                <p>List Barang Jual BU</p>
                <ul>
                    {this.state.barangs.map((list) => (
                        <li>
                            {list.nama} | 
                            Rp. {list.harga} |
                            {list.ket}

                            <button onClick={() => this.tambah(list)}>
                                Kantong
                            </button>
                        </li>
                    ))}
                </ul>

                <p>Kantong</p>

                <ul>
                    {this.state.bills.map((bill) => (
                    <li>
                        {bill.nama} |
                        Rp. {bill.harga}
                    </li>
                    )
                    )}
                </ul>
            </div>
        )
    }
}