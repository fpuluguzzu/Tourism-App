import { Icity } from "./interfaces/icity";
import { Iweather } from "./interfaces/iweather";

const citiesInfo: Icity[] = [
    {
        name: 'Aswan',
        attractions: [
            'Abu-Simbel',
            'Nubian Museum',
            'Elephantine',
        ],
    },

    {
        name: 'Cairo',
        attractions: [
            'The Pyramids',
            'Nile',
            'khan elkhalili'
        ],
    },


    {
        name: 'Luxor',
        attractions: [
            'Valley of the Kings',
            'Karnak',
            'Luxor Template'
        ],
    },

    {
        name: 'Sharm El-Sheikh',
        attractions: [
            'Naama',
            'Ras Muhammad National Park'
        ],
    },

];


const citiesWeather: Iweather[] = [
    {
        name: 'Aswan',
        springN: 23,
        springM: 40,
        summerN: 28,
        summerM: 43,
        winterN:12,
        winterM:25,
        autumnN:22,
        autumnM:36,
        visitFrom:'October',
        visitTo:'April'
    },


    {
        name: 'Cairo',
        springN: 18,
        springM: 30,
        summerN: 23,
        summerM: 35,
        winterN:10,
        winterM:20,
        autumnN:20,
        autumnM:30,
        visitFrom:'December',
        visitTo:'January',
    },

    {
        name: 'Luxor',
        springN: 17,
        springM: 35,
        summerN: 25,
        summerM: 41,
        winterN:8,
        winterM:24,
        autumnN:13,
        autumnM:29,
        visitFrom:'October',
        visitTo:'April',

    },

    {
        name: 'Sharm El-Sheikh',
        springN: 21,
        springM: 30,
        summerN: 29,
        summerM: 38,
        winterN:16,
        winterM:24,
        autumnN:20,
        autumnM:28,
        visitFrom:'October',
        visitTo:'November',
    },





]





export { citiesInfo, citiesWeather };