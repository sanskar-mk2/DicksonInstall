import Communal from "../assets/images/640x360.Communal.jpg";
import End from "../assets/images/640x360.End.jpg";
import Resimercial from "../assets/images/640x360.Resimercial.jpg";
import MarriottFenway from "../assets/images/936x600MarriottFenway.GalleryThumbnail.jpg";
import CrownePlazaBaltimore from "../assets/images/961x600.CrownePlazaBaltimoreGallery4.jpg";
import CrownPlazaEnglewood from "../assets/images/961x600CrownPlazaEnglewoodGallery.jpg";
import MarriottAtlantaAirport from "../assets/images/961x600MarriottAtlantaAirportGallery6.jpg";
import ConsoleFeatures from "../assets/images/ConsoleFeatures.jpg";
import DelanoLV4 from "../assets/images/DelanoLV4.jpg";

const possible_images = [
    Communal,
    End,
    Resimercial,
    MarriottFenway,
    CrownePlazaBaltimore,
    CrownPlazaEnglewood,
    MarriottAtlantaAirport,
    ConsoleFeatures,
    DelanoLV4,
];

export const gen = () => {
    const randomIndex = Math.floor(Math.random() * possible_images.length);
    return possible_images[randomIndex];
};
