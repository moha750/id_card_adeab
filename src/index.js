import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import MohammadAlmattar from "./pages/mohammadAlmattar";
import AmerBusal from "./pages/AmerBusal";
import HadeelAlsonaikh from "./pages/HadeelAlsonaikh";
import AbdullaAlarj from "./pages/AbdullaAlarj";
import AbdullahAlkhalifa from "./pages/AbdullahAlkhalifa";
import AbrarBUhaleem from "./pages/AbrarBUhaleem";
import AishaAlbuaali from "./pages/AishaAlbuaali";
import AlaaAlswadi from "./pages/AlaaAlswadi";
import AliAleesa from "./pages/AliAleesa";
import AseelAlsonaikh from "./pages/AseelAlsonaikh";
import AyatAlnoihl from "./pages/AyatAlnoihl";
import BaneenAhmed from "./pages/BaneenAhmed";
import BashayerAlghamdy from "./pages/BashayerAlghamdy";
import BatoolAlahmed from "./pages/BatoolAlahmed";
import BothainaAlramadan from "./pages/BothainaAlramadan";
import DiaAlahmed from "./pages/DiaAlahmed";
import FahadAlenizy from "./pages/FahadAlenizy";
import FatenAlnajem from "./pages/FatenAlnajem";
import FatimaAlrohaiman from "./pages/FatimaAlrohaiman";
import FawziaAlbahar from "./pages/FawziaAlbahar";
import FayAlshamari from "./pages/FayAlshamari";
import GhofranAlsaleh from "./pages/GhofranAlsaleh";
import HananMadad from "./pages/HananMadad";
import HamadAlmari from "./pages/HamadAlmari"
import HanoufAlomar from "./pages/HanoufAlomar"
import HawraAlashoor from "./pages/HawraAlashoor"
import HedayahAlahmad from "./pages/HedayahAlahmad"
import HilwaAlsubay from "./pages/HilwaAlsubay"
import LatifaAlhamadi from "./pages/LatifaAlhamadi"
import IbrahemAlmiqahwi from "./pages/IbrahemAlmiqahwi"
import IbrahemAlzaraa from "./pages/IbrahemAlzaraa"
import MaherMohammed from "./pages/MaherMohammed"
import MalakAlharbi from "./pages/MalakAlharbi"
import MalakAlmarri from "./pages/MalakAlmarri"
import MariaBuarish from "./pages/MariaBuarish"
import MariamAlboraih from "./pages/MariamAlboraih"
import MaryamAlobaidy from "./pages/MaryamAlobaidy"
import MohammedAldihneen from "./pages/MohammedAldihneen"
import MohammedAlmahdi from "./pages/MohammedAlmahdi"
import NjoodAlmozail from "./pages/NjoodAlmozail"
import NoraAlbakr from "./pages/NoraAlbakr"
import NoraAlbkheet from "./pages/NoraAlbkheet"
import NoraAlmaeyuid from "./pages/NoraAlmaeyuid"
import RawanAlessam from "./pages/RawanAlessam"
import ReemAlshami from "./pages/ReemAlshami"
import SaraAlawas from "./pages/SaraAlawas"
import SaraAlhasan from "./pages/SaraAlhasan"
import SaraAlhazza from "./pages/SaraAlhazza"
import SaraAlkhalifa from "./pages/SaraAlkhalifa"
import ShahadAladullah from "./pages/ShahadAladullah"
import ShahadAlsalem from "./pages/ShahadAlsalem"
import ShahadAlsoraiheed from "./pages//ShahadAlsoraiheed"
import ShahadBouBaid from "./pages/ShahadBouBaid"
import ShareefaAlmulhim from "./pages/ShareefaAlmulhim"
import ShmayelAlmoaidy from "./pages/ShmayelAlmoaidy"
import ShmookhAlqoaimy from "./pages/ShmookhAlqoaimy"
import ShoaaAzibi from "./pages/ShoaaAzibi"
import ShouqAlthikrallah from "./pages/ShouqAlthikrallah"
import WafaAlmarri from "./pages/WafaAlmarri"
import ZahraBUarish from "./pages/ZahraBUarish"
import ZainabBukhamseen from "./pages/ZainabBukhamseen"
import YusofAlyusof from "./pages/YusofAlyusof"
import SaadAlateeq from "./pages/SaadAlateeq"
import AlbatoolAlshihry from "./pages/AlbatoolAlshihry"
import SignUp from "./pages/signup"
import SignIn from "./pages/SignIn"



const router = createBrowserRouter([
  

  {
    path: "/",
    element: <Home />,
    errorElement: <h1 style={{ color: "red" }}>شكلك مضيع ي الحبيب ارجع للمكان الي كنت فيه</h1>,
  },

  {
    path: "/Sign_In",
    element: <SignIn />,
  },

  {
    path: "/Sign_Up",
    element: <SignUp />,
  },

  {
    path: "/Mohammad_Almattar",
    element: <MohammadAlmattar />,
  },

  {
    path: "/Amer_Busal",
    element: <AmerBusal/>,
  },

  {
    path: "/Zainab_Bukhamseen",
    element: <ZainabBukhamseen/>,
  },

  {
    path: "/Hadeel_Alsonaikh",
    element: <HadeelAlsonaikh />,
  },

  {
    path: "/Abdulla_Alarj",
    element: <AbdullaAlarj />,
  },

  {
    path: "/Abdullah_Alkhalifa",
    element: <AbdullahAlkhalifa />,
  },

  {
    path: "/Abrar_BUhaleem",
    element: <AbrarBUhaleem />,
  },

  {
    path: "/Aisha_Albuaali",
    element: <AishaAlbuaali />,
  },

  {
    path: "/Alaa_Alswadi",
    element: <AlaaAlswadi />,
  },

  {
    path: "/Albatool_Alshihry",
    element: <AlbatoolAlshihry />,
  },

  {
    path: "/Ali_Aleesa",
    element: <AliAleesa />,
  },

  {
    path: "/Aseel_Alsonaikh",
    element: <AseelAlsonaikh />,
  },

  {
    path: "/Ayat_Alnoihl",
    element: <AyatAlnoihl/>,
  },

  {
    path: "/Baneen_Ahmed",
    element: <BaneenAhmed />,
  },

  {
    path: "/Bashayer_Alghamdy",
    element: <BashayerAlghamdy />,
  },

  {
    path: "/Batool_Alahmed",
    element: <BatoolAlahmed/>,
  },

  {
    path: "/Bothaina_Alramadan",
    element: <BothainaAlramadan/>,
  },

  {
    path: "/Dia_Alahmed",
    element: <DiaAlahmed/>,
  },

  {
    path: "/Fahad_Alenizy",
    element: <FahadAlenizy />,
  },

  {
    path: "/Faten_Alnajem",
    element: <FatenAlnajem />,
  },

  {
    path: "/Fatima_Alrohaiman",
    element: <FatimaAlrohaiman />,
  },

  {
    path: "/Fawzia_Albahar",
    element: <FawziaAlbahar />,
  },

  {
    path: "/Fay_Alshamari",
    element: <FayAlshamari />,
  },

  {
    path: "/Ghofran_Alsaleh",
    element: <GhofranAlsaleh />,
  },

  {
    path: "/Hanan_Madad",
    element: <HananMadad />,
  },

  {
    path: "/Hamad_Almari",
    element: <HamadAlmari />,
  },

  {
    path: "/Hanouf_Alomar",
    element: <HanoufAlomar />,
  },

  {
    path: "/Hawra_Alashoor",
    element: <HawraAlashoor />,
  },

  {
    path: "/Hedayah_Alahmad",
    element: <HedayahAlahmad />,
  },

  {
    path: "/Hilwa_Alsubay",
    element: <HilwaAlsubay />,
  },

  {
    path: "/Ibrahem_Almiqahwi",
    element: <IbrahemAlmiqahwi />,
  },

  {
    path: "/Latifa_Alhamadi",
    element: <LatifaAlhamadi />,
  },

  {
    path: "/Ibrahem_Alzaraa",
    element: <IbrahemAlzaraa />,
  },

  {
    path: "/Maher_Mohammed",
    element: <MaherMohammed />,
  },

  {
    path: "/Malak_Alharbi",
    element: <MalakAlharbi />,
  },

  {
    path: "/Malak_Almarri",
    element: <MalakAlmarri />,
  },

  {
    path: "/Maria_Buarish",
    element: <MariaBuarish />,
  },

  {
    path: "/Mariam_Alboraih",
    element: <MariamAlboraih />,
  },

  {
    path: "/Maryam_Alobaidy",
    element: <MaryamAlobaidy />,
  },

  {
    path: "/Mohammed_Aldihneen",
    element: <MohammedAldihneen />,
  },

  {
    path: "/Mohammed_Almahdi",
    element: <MohammedAlmahdi />,
  },

  {
    path: "/Njood_Almozail",
    element: <NjoodAlmozail />,
  },

  {
    path: "/Nora_Albakr",
    element: <NoraAlbakr />,
  },

  {
    path: "/Nora_Albkheet",
    element: <NoraAlbkheet />,
  },

  {
    path: "/Nora_Almaeyuid",
    element: <NoraAlmaeyuid />,
  },

  {
    path: "/Rawan_Alessam",
    element: <RawanAlessam />,
  },

  {
    path: "/Reem_Alshami",
    element: <ReemAlshami />,
  },

  {
    path: "/Sara_Alawas",
    element: <SaraAlawas />,
  },

  {
    path: "/Sara_Alhasan",
    element: <SaraAlhasan />,
  },

  {
    path: "/Sara_Alhazza",
    element: <SaraAlhazza />,
  },

  {
    path: "/Sara_Alkhalifa",
    element: <SaraAlkhalifa />,
  },

  {
    path: "/Shahad_Aladullah",
    element: <ShahadAladullah />,
  },

  {
    path: "/Shahad_Alsalem",
    element: <ShahadAlsalem />,
  },

  {
    path: "/Shahad_Alsoraiheed",
    element: <ShahadAlsoraiheed />,
  },

  {
    path: "/Shahad_BouBaid",
    element: <ShahadBouBaid />,
  },

  {
    path: "/Shareefa_Almulhim",
    element: <ShareefaAlmulhim />,
  },

  {
    path: "/Shmayel_Almoaidy",
    element: <ShmayelAlmoaidy />,
  },

  {
    path: "/Shmookh_Alqoaimy",
    element: <ShmookhAlqoaimy />,
  },

  {
    path: "/Shoaa_Azibi",
    element: <ShoaaAzibi />,
  },

  {
    path: "/Shouq_Althikrallah",
    element: <ShouqAlthikrallah />,
  },

  {
    path: "/Wafa_Almarri",
    element: <WafaAlmarri />,
  },

  {
    path: "/Zahra_BUarish",
    element: <ZahraBUarish />,
  },

  {
    path: "/Zainab_Bukhamseen",
    element: <ZainabBukhamseen />,
  },

  {
    path: "/Yusof_Alyusof",
    element: <YusofAlyusof />,
  },

  {
    path: "/Saad_Alateeq",
    element: <SaadAlateeq />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals