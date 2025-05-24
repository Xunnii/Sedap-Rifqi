export default function HelloWorld(){
    const propsUserCard = {
        nama: "test-1",
        nim: "238892312",
        tanggal: "2025-01-12"
    }
    const propsUserCard2 = {
        nama: "test-2",
        nim: "182470197",
        tanggal: "01-11-04"
    }
    return (
        <div class="card">
            <h1>Welocme Back Pookie</h1>
            <p>Perkenalkan saya Muhammad RIfqi</p>
            <GreetingBinjai/>
            <QuoteText/>
            <UserCard {...propsUserCard} />
            <UserCard {...propsUserCard2} />
            <UserCard
            nama="Zoldyck"
            nim="2357301085"
            Tanggal="10/1/23"/>
            <center><img src="img/EsTeh.jpg" alt="logo" /></center>
        </div>
    )
}

function GreetingBinjai(){
    return (
    <h2>Salam Dari DUMAI RIAU</h2>
)
}

function QuoteText() {
    const text = "KOLONIAL BELANDA SANGAT BERPENGARUH UNTUK INDONESIA";
    const text2 = "MALAM INI KU SENDIRI";
    return (
        <div>
            <center>
            <hr/>
            <p>{text.toLowerCase()}</p>
            <p>{text2.toUpperCase()}</p>
            </center>
        </div>
    )
}

function UserCard(props){
    return (
        <div>
            <hr/>
            <h3>Nama: {props.nama}</h3>
            <p>NIM: {props.nim}</p>
            <p>Tanggal: {props.tanggal}</p>
        </div>
    )
}