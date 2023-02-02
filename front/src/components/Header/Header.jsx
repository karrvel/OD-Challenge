import React, { useState } from "react";
import style from "./Header.module.css";
import foto from "../../assets/green.svg";
import foto2 from "../../assets/blue.svg";
import foto3 from "../../assets/red.svg";
import foto4 from "../../assets/main-pic-3.png";
import foto5 from "../../assets/bg-car-new-wide (1).png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [vin, setVin] = useState("");

  return (
    <div className={style.header}>
      <div className={style.main}>
        <div className={style.h1__h}>
          <h1 className={style.h1__header}>Avtomobil Haqida malumot olish </h1>
        </div>

        <div className={style.forms__header}>
          <div className={style.input2}>
            <input
              placeholder="17-Honali VIN Ko'd"
              className={style.name}
              type="text"
              value={vin}
              onChange={(e) => {
                setVin(e.target.value);
              }}
            />

            <button
              onClick={() => {
                navigate(`/reports/${vin}`);
              }}
              className={style.btn__header}
            >
              Hisobot olish{" "}
            </button>
          </div>
        </div>
        <div className={style.href}>
          <a href="https://bornpottytrained.com/img1/kakbesplatnouznatkomplektatsiyuavtomobil_1F4B985D.jpg">
            Vin raqami qayerda joylashgan
          </a>
          <a href="">Hisobot namunasi</a>
        </div>
      </div>
      <div className={style.second}>
        <div className={style.cards}>
          <article className={style.card}>
            <div className={style.card_inner}>
              <h1>VIN raqami (avtomobil identifikatsiya raqami) nima?</h1>
              <p>
                Avtomobil identifikatsiya raqami (VIN) har bir avtomobil ishlab
                chiqarilganda unga beriladigan noyob koddir. VIN oraliq
                boʻshliqlar yoki Q (q), I (i) va O (o) harflarisiz 17 ta
                belgidan iborat harflar va raqamlar qatoridir; 0 va 1 raqamlari
                bilan chalkashmaslik uchun bular kiritilmagan. VINning har bir
                bo'limi avtomobil haqida ma'lum bir ma'lumotni, jumladan, ishlab
                chiqarilgan yili, mamlakati va zavodini taqdim etadi; markasi va
                modeli; va seriya raqami. VIN kodlari odatda bitta satrda chop
                etiladi.
              </p>
            </div>
          </article>
          <article className={style.card}>
            <div className={style.card_inner}>
              <h1>Avtomobilning VIN raqamini qanday topish mumkin</h1>
              <p>
                Aksariyat yengil avtomobillarda siz VIN raqamini boshqaruv
                panelining old tomonida haydovchi tomonida topishingiz mumkin.
                Buni ko'rishning eng yaxshi usuli - avtomobil tashqarisidan old
                oynadan qarash. VIN raqamini haydovchi yonidagi eshik ustunidan
                ham topishingiz mumkin. Eshikni oching va eshik mashinaga
                yopishgan joyni ko'rib chiqing. Mototsiklning VIN kodi odatda
                rul ostidagi rul bo'ynida bo'ladi, garchi ba'zida u motorda yoki
                motor yaqinidagi ramkada bo'lsa ham. Yarim tirkama VIN kodi
                yarim romorkning old qismida chap tomonda joylashgan.
              </p>
            </div>
          </article>
          <article className={style.card}>
            <div className={style.card_inner}>
              <h1> VIN dekoderidan qanday foydalanish kerak</h1>

              <p>
                Avtomobilingizning ishlab chiqaruvchisi, brendi, markasi va
                modeli, kuzov uslubi, dvigatel o‘lchami, yig‘ish zavodi va
                ishlab chiqarilgan yili haqida tezkor hisobotni qidirish va
                olish uchun yuqoridagi maydonga avtomobilingizning 17 belgidan
                iborat avtomobil identifikatsiya raqamini (VIN) kiriting. Milliy
                avtomobil yo'llari harakati xavfsizligi boshqarmasi (NHTSA)
                tomonidan ishlab chiqaruvchilar tomonidan NHTSAga taqdim etilgan
                ma'lumotlardan taqdim etiladi. VIN dekoder qidiruvi 1981 yildan
                beri ishlab chiqarilgan avtomobillarda foydalanish uchun
                moʻljallangan.
              </p>
            </div>
          </article>
        </div>
      </div>
      <div className={style.third}>
        <h1 className={style.h11}>Avto vin nma blan foydali?</h1>

        <div className={style.cards2}>
          <article className={style.card}>
            <div className={style.card_inner}>
              <img className={style.fotos} src={foto} />
              <h1 className={style.h11}>Vaqtingiz va asablaringizni asraydi</h1>

              <p>
                Avtomobil identifikatsiya raqami (VIN) har bir avtomobil ishlab
                chiqarilganda unga beriladigan noyob koddir. VIN oraliq
                boʻshliqlar yoki Q (q), I (i) va O (o) harflarisiz 17 ta
                belgidan iborat harflar va raqamlar qatoridir; 0 va 1 raqamlari
                bilan chalkashmaslik uchun bular kiritilmagan. VINning har bir
                bo'limi avtomobil haqida ma'lum bir ma'lumotni, jumladan, ishlab
                chiqarilgan yili, mamlakati va zavodini taqdim etadi; markasi va
                modeli; va seriya raqami. VIN kodlari odatda bitta satrda chop
                etiladi.
              </p>
            </div>
          </article>
          <article className={style.card}>
            <div className={style.card_inner}>
              <img className={style.fotos} src={foto2} />
              <h1 className={style.h11}>Unikal o'tmishini topamiz</h1>

              <p>
                Aksariyat yengil avtomobillarda siz VIN raqamini boshqaruv
                panelining old tomonida haydovchi tomonida topishingiz mumkin.
                Buni ko'rishning eng yaxshi usuli - avtomobil tashqarisidan old
                oynadan qarash. VIN raqamini haydovchi yonidagi eshik ustunidan
                ham topishingiz mumkin. Eshikni oching va eshik mashinaga
                yopishgan joyni ko'rib chiqing. Mototsiklning VIN kodi odatda
                rul ostidagi rul bo'ynida bo'ladi, garchi ba'zida u motorda yoki
                motor yaqinidagi ramkada bo'lsa ham. Yarim tirkama VIN kodi
                yarim romorkning old qismida chap tomonda joylashgan.
              </p>
            </div>
          </article>
          <article className={style.card}>
            <div className={style.card_inner}>
              <img className={style.fotos} src={foto3} />
              <h1 className={style.h11}>Bektilgan hikoyasini topib beradi</h1>
              <p>
                Avtomobilingizning ishlab chiqaruvchisi, brendi, markasi va
                modeli, kuzov uslubi, dvigatel o‘lchami, yig‘ish zavodi va
                ishlab chiqarilgan yili haqida tezkor hisobotni qidirish va
                olish uchun yuqoridagi maydonga avtomobilingizning 17 belgidan
                iborat avtomobil identifikatsiya raqamini (VIN) kiriting. Milliy
                avtomobil yo'llari harakati xavfsizligi boshqarmasi (NHTSA)
                tomonidan ishlab chiqaruvchilar tomonidan NHTSAga taqdim etilgan
                ma'lumotlardan taqdim etiladi. VIN dekoder qidiruvi 1981 yildan
                beri ishlab chiqarilgan avtomobillarda foydalanish uchun
                moʻljallangan.
              </p>
            </div>
          </article>
        </div>
      </div>
      <div className={style.third__card}>
        <ul>
          <br />
          <br />
          <br />
          <br />
          <li className={style.check}> zavod xaraktiristkasi</li>
          <li className={style.check}> Narxi</li>
          <li className={style.check}>
            {" "}
            Qaysi davlatga registratsiya qilingani
          </li>
          <li className={style.check}> Sug'urta kompaniyasi</li>
          <li className={style.check}> Oldingi egalari</li>
          <li className={style.check}> Yurgan (km) haqida malumot</li>
          <li className={style.check}>
            {" "}
            informatsiya qayeri almashtirilgani haqida
          </li>
          <li className={style.check}> Shtraflari haqida</li>
          <li className={style.check}> Avto halokatda bo'lgani haqida</li>
          <li className={style.check}>
            {" "}
            Qanday holatda (taxi, militsiya,...);
          </li>
        </ul>
        <img className={style.w500} src={foto4} alt="" />
      </div>
      <div className={style.third__card}>
        <img className={style.w400} src={foto5} alt="" />
        <div className={style.main}>
          {/* <div className={style.h1__h}>
            <h1 className={style.h1__header}>Avtomobil</h1>
          </div> */}

          {/* <div className={style.forms__header}>
            <div className={style.input2}>
              <input
                placeholder="Введите 17-значный VIN код"
                className={style.name}
                type="text"
              />
              <button className={style.btn__header}>Заказать отчет</button>
            </div>
          </div> */}
          {/* <div className={style.href}>
            <a href=""> VIN</a>
            <a href="">Пример отчёта</a>
          </div> */}
        </div>
      </div>

      <div className={style.main__footer}>
        <div className={style.footer__1}>
          <h1>VINTEKA</h1>
          <p>© 2023 PLC Auction Inc. All rights are reserved.</p>
        </div>
        <div className={style.footer__2}>
          <ul className={style.footer__ul}>
            <li>biz haqqimizda</li>
            <li>narxi</li>
            <li>faq</li>
            <li>Blog</li>
            <li>korib chiqish</li>
            <li>biz blan bog'lanish</li>
            <li>Vin izlovchi</li>
          </ul>
          <div className={style.footer__3}>
            <p>
              © 2023 JJK Auction Inc. All rights reserved. The use of this Web
              site constitutes acceptance of the:
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
