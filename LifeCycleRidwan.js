import { useState, useEffect } from "react";

const JualCepatAPI =[
    {
        id : 1,
        nama : 'Cermin Bekas',
        ket : 'ukuran 40 cm x 60 cm',
        harga : 125000
    },

    {
        id : 2,
        nama : 'Lemari Plastik Bekas',
        ket : '4 susun',
        harga : 200000
    },

    {
        id : 3,
        nama : 'Kompor Gas 1 Tungku',
        ket : 'Merk Quantum',
        harga : 175000
    },

    {
        id : 4,
        nama : 'Tabung Gas 3 Kg',
        ket : 'bonus sisa isi gas',
        harga : 150000
    },
    
];

const LifeCycleRidwan = () => {
    const [produk, setProduk] = useState([]) ;
    const [carts, setCarts] = useState([]) ;
    const [totalBayar, setTotalBayar] = useState([]) ;

    function add(addProduk) {
        console.log("tes1");
        const addToCarts = [...carts];
        addToCarts.push(addProduk);
        setCarts(addToCarts);
    }

    function hapus(hapusList) {
        console.log("tes2");
        const deleteList = [...carts];
        deleteList.splice(hapusList);
        setCarts(deleteList);
    }

    useEffect(() => {
        setProduk(JualCepatAPI);
    }, []);

    useEffect(() => {
        let countTotalBayar = 0 ;
        for ( const cart of carts) {
            countTotalBayar = countTotalBayar + cart.harga;
        }

        setTotalBayar(countTotalBayar);
    }, [carts]);

    return (
        <>
        <p>
            List Barang Jual Cepat
        </p>

        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nama</th>
                    <th>Barang</th>
                    <th>Keterangan</th>
                    <th>Harga</th>
                    <th>Tambah</th>
                </tr>
            </thead>
            <tbody>
                {produk.map((produk, key) => (
                    <tr key = {key}>
                        <td>{key+1}</td>
                        <td>{produk.nama}</td>
                        <td>Rp. {produk.harga}</td>
                        <td>{produk.ket}</td>
                        <td>
                            <button onClick={() => add(produk)}>Tambah</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>

        <p>Isi Kantong</p>
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nama</th>
                    <th>Barang</th>
                    <th>Keterangan</th>
                    <th>Harga</th>
                    <th>Tambah</th>
                </tr>
            </thead>
            <tbody>
                {carts.map((cart, id) => (
                    <tr key={id}>
                        <td>{id+1}</td>
                        <td>{cart.nama}</td>
                        <td>Rp. {cart.harga}</td>
                        <td>
                            <button onClick={() => hapus(cart)}>Hapus</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>

        <p>Total Bayar : {totalBayar}</p>
        </>
    );

};

