type RawTree = [string, number, number
];

type Tree = {
  key: string;
  name: string;
  lat: number;
  lng: number;
};
type CoordinatesMarker = google.maps.LatLngLiteral & { key: string }; 

const trees: RawTree[] = [
    [
        "Ash, green",
        19.446799560096157, -99.13615674228171
    ],
    [
        "Birch, white",
        19.443359494038223, -99.12362550325564
    ],
    [
        "Maple, Manitoba",
        19.439110433655344, -99.144524911058
    ],
    [
        "Elm, American 'Valley Forge'",
        19.434860720557804, -99.15113342956907
    ],
    [
        "Spruce, Colorado blue",
        19.44012242097015, -99.13328143475562
    ],
    [
        "Maple, Norway 'Schwedler'",
        19.441010957810438, -99.15903067499345
    ],
    [
        "Mulberry, white",
        19.451493631939087, -99.14302355788428
    ],
    [
        "Elm, Siberian",
        19.444418113538706, -99.11753815623509
    ],
    [
        "Kentucky coffee",
        19.443192314991713, -99.16488296539646
    ],
    [
        "Katsura, Japanese",
        19.46237893775764, -99.12590026208831
    ],
    [
        "Elm, American",
        19.45788483210735, -99.15255286481153
    ],
    [
        "Maple, Norway",
        19.44659393385267, -99.15491130546087
    ],
    [
        "Oak, white",
        19.458168032086, -99.15302507455027
    ],
    [
        "Honey locust, 'Skyline'",
        19.454317417785802, -99.10791715869465
    ],
    [
        "Cherry",
        19.462958386989026, -99.12993651387922
    ],
    [
        "Maple, Norway",
        19.443419501068426, -99.14732884673053
    ],
    [
        "Hackberry",
        19.42599961334441, -99.13165918033495
    ],
    [
        "Ash, green",
        19.457142901483504, -99.13410856284236
    ],
    [
        "Mulberry, white",
        19.459084619191472, -99.13960255092582
    ],
    [
        "Apple, Sargents",
        19.457911193650002, -99.1525214997219
    ],
    [
        "Mountain ash, European",
        19.462364112444604, -99.13818637080922
    ],
    [
        "Oak, white",
        19.448322444848287, -99.12741305846724
    ],
    [
        "Tulip tree",
        19.458358119083407, -99.13174808381862
    ],
    [
        "Honey locust, 'Shade master'",
        19.454753928283896, -99.15715653625057
    ],
    [
        "Hackberry",
        19.45961257519177, -99.13269237816255
    ],
    [
        "Pear, 'Chanticleer'",
        19.44770107595215, -99.13293784822426
    ],
    [
        "Oak, red",
        19.45324992404695, -99.14823422587837
    ],
    [
        "Cedar, white",
        19.466586433024563, -99.13445793410511
    ],
    [
        "Tulip tree",
        19.460921773304182, -99.10526220316136
    ],
    [
        "Spruce, Colorado blue",
        19.461320537505703, -99.14083053764406
    ],
    [
        "Planetree, London",
        19.449928780676114, -99.15636735521926
    ],
    [
        "Cherry",
        19.462958386989026, -99.12993651387922
    ],
    [
        "Maple, Norway",
        19.443419501068426, -99.14732884673053
    ],
    [
        "Hackberry",
        19.42599961334441, -99.13165918033495
    ],
    [
        "Ash, green",
        19.457142901483504, -99.13410856284236
    ],
    [
        "Mulberry, white",
        19.459084619191472, -99.13960255092582
    ],
    [
        "Apple, Sargents",
        19.457911193650002, -99.1525214997219
    ],
];

const formatted: CoordinatesMarker[] = trees.map(([name, lat, lng
]) => ({
  name,
  lat,
  lng,
  key: JSON.stringify({ name, lat, lng
    }),
}));

export default formatted;