import React from "react";
import "../styles/Header.css";

function Header() {
    return (
        <section id="header">
            <img
                src="../assets/images/bismillah.png"
                alt="bismillah"
                className="poster"
            />
            <h3>
                Begin With The Name Of Allaah, The Most Benificient And The Most
                Merciful
            </h3>
            <h4 className="mt-4">
                Under the spirutual patronage of Peer-O-Murshid:
                <br />
                Hazrath Jahangir Ghousul Alam Mehboob-e-Yazdani Qudwatul Kubra
                Sultan Ashraf Jahangir Maqdoom-e-Simnani Alaihi Rahamatu Wa
                Rizwaan, Kichhauchha Shareef.
            </h4>
            <h4 className="mt-4">
                Under the spirutual patronage of:
                <br />
                Qutub-e-Adoni Qutub-ud-Dawaayir Ashraf-ul-Ma'aasir
                Sayyid-e-Barhaq Hazrath Sayyid Shah Taher Quadri, Al-Hamavi
                Rahamatullaahi Alaih, Adoni.
            </h4>
            <h4 className="mt-4">
                Under the guidance of Peer-O-Murshid:
                <br />
                Huzur Shaikh-ul-Islam Hazrath Sayyid Muhammad Madani Ashrafi
                Al-Jilani Damat Barkatuhu Quddusiyah, Kichhauchha Shareef.
            </h4>
        </section>
    );
}

export default Header;
