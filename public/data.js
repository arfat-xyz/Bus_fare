const roads = [
  {
    road_no: "1",
    place: "",
    name: "Karnofuli Bridge",
    value: "karnafuli_bridge",
    distance: 0,
  },
  {
    road_no: "1",
    place: "",
    name: "Razakhali",
    value: "razakhali",
    distance: 1,
  },
  {
    road_no: "1",
    place: "",
    name: "Kalamia Bazar",
    value: "kalamia_bazar",
    distance: 2,
  },
  {
    road_no: "1",
    place: "",
    name: "Nahar CNG",
    value: "nahar_cng",
    distance: 3,
  },
  {
    road_no: "1",
    place: "",
    name: "Ek Kilometer",
    value: "ek_kilometer",
    distance: 4,
  },
  {
    road_no: "1",
    place: "",
    name: "Bohoddarhat",
    value: "bohoddarhat",
    distance: 5,
  },
  {
    road_no: "1",
    place: "",
    name: "Kapasgola",
    value: "kapasgola",
    distance: 6,
  },
  {
    road_no: "1",
    place: "",
    name: "Chowkbazar",
    value: "chowkbazar",
    distance: 6.5,
  },
  {
    road_no: "1",
    place: "",
    name: "Sirazuddowla Road",
    value: "sirazuddowla_road",
    distance: 7.5,
  },
  {
    road_no: "1",
    place: "",
    name: "Andorkilla",
    value: "andorkilla",
    distance: 8,
  },
  {
    road_no: "1",
    place: "",
    name: "Lal Dighi",
    value: "lal_dighi",
    distance: 9,
  },
  {
    road_no: "1",
    place: "",
    name: "New Market",
    value: "new_market",
    distance: 10,
  },
  {
    road_no: "2",
    place: "",
    name: "Kalurghat Bridge",
    value: "kalurghat_bridge",
    distance: 0,
  },
  {
    road_no: "2",
    place: "",
    name: "Ispahani Mosjid",
    value: "ispahani_mosjid",
    distance: 1,
  },
  {
    road_no: "2",
    place: "",
    name: "Kaptai Rastar Matha",
    value: "kaptai_rastar_matha",
    distance: 2,
  },
  {
    road_no: "2",
    place: "",
    name: "CMP Rastar Matha",
    value: "cmp_rastar_matha",
    distance: 3,
  },
  {
    road_no: "2",
    place: "",
    name: "Shorafot Petrol Pump",
    value: "shorafot_petrol_pump",
    distance: 4,
  },
  {
    road_no: "2",
    place: "",
    name: "Bus Terminal",
    value: "bus_terminal",
    distance: 5,
  },
  {
    road_no: "2",
    place: "",
    name: "Bohoddarhat",
    value: "bohoddarhat",
    distance: 6,
  },
  {
    road_no: "2",
    place: "",
    name: "Muradpur",
    value: "muradpur",
    distance: 7,
  },
  {
    road_no: "2",
    place: "",
    name: "2 Number Gate",
    value: "two_number_gate",
    distance: 8,
  },
  {
    road_no: "2",
    place: "",
    name: "Medical",
    value: "medical",
    distance: 9,
  },
  {
    road_no: "2",
    place: "",
    name: "Chowkbazar",
    value: "chowkbazar",
    distance: 10,
  },
  {
    road_no: "2",
    place: "",
    name: "Jamal Khan",
    value: "jamal_khan",
    distance: 11,
  },
  {
    road_no: "2",
    place: "",
    name: "Andorkilla",
    value: "andorkilla",
    distance: 12,
  },
  {
    road_no: "2",
    place: "",
    name: "Lal Dighi",
    value: "lal_dighi",
    distance: 13,
  },
  {
    road_no: "2",
    place: "",
    name: "New Market",
    value: "new_market",
    distance: 14,
  },
  {
    road_no: "3",
    place: "",
    name: "New Market",
    value: "new_market",
    distance: 0.1,
  },
  {
    road_no: "3",
    place: "",
    name: "Tin Puler Matha",
    value: "tin_puler_matha",
    distance: 0.5,
  },
  {
    road_no: "3",
    place: "",
    name: "Anayet Bazar",
    value: "anayet_bazar",
    distance: 0.75,
  },
  {
    road_no: "3",
    place: "",
    name: "Kotwali More",
    value: "kotwali_more",
    distance: 0.8,
  },
  {
    road_no: "3",
    place: "",
    name: "Buddha Mandir",
    value: "buddha_mandir",
    distance: 1,
  },
  {
    road_no: "3",
    place: "",
    name: "Kazir Dewri",
    value: "kazir_dewri",
    distance: 2,
  },
  {
    road_no: "3",
    place: "",
    name: "Wasa",
    value: "wasa",
    distance: 2.5,
  },
  {
    road_no: "3",
    place: "",
    name: "2 Number Gate",
    value: "two_number_gate",
    distance: 3.5,
  },
  {
    road_no: "3",
    place: "",
    name: "Muradpur",
    value: "muradpur",
    distance: 4.5,
  },
  {
    road_no: "3",
    place: "",
    name: "Hamzarbug",
    value: "hamzarbug",
    distance: 5.5,
  },
  {
    road_no: "3",
    place: "",
    name: "Oxyzen",
    value: "oxyzen",
    distance: 6.5,
  },
  {
    road_no: "3",
    place: "",
    name: "Baluchora",
    value: "baluchora",
    distance: 7.5,
  },
  {
    road_no: "3",
    place: "",
    name: "Nondir Hat",
    value: "nondir_hat",
    distance: 11.5,
  },
  {
    road_no: "3",
    place: "",
    name: "Foteyabad",
    value: "foteyabad",
    distance: 14.5,
  },
  {
    road_no: "4",
    place: "",
    name: "New Market",
    value: "new_market",
    distance: 0,
  },
  {
    road_no: "4",
    place: "",
    name: "Puraton Station",
    value: "puraton_station",
    distance: 1,
  },
  {
    road_no: "4",
    place: "",
    name: "Tiger Pass",
    value: "tiger_pass",
    distance: 2,
  },
  {
    road_no: "4",
    place: "",
    name: "Wasa",
    value: "wasa",
    distance: 3,
  },
  {
    road_no: "4",
    place: "",
    name: "Goribullah Shah Mazar",
    value: "goribullah_shah_mazar",
    distance: 4,
  },
  {
    road_no: "4",
    place: "",
    name: "Wireless Colony",
    value: "wireless_colony",
    distance: 5,
  },
  {
    road_no: "4",
    place: "",
    name: "USTC",
    value: "ustc",
    distance: 6,
  },
  {
    road_no: "4",
    place: "",
    name: "A.K. Khan",
    value: "ak_khan",
    distance: 8,
  },
  {
    road_no: "4",
    place: "",
    name: "Kornel haat",
    value: "kornel_haat",
    distance: 9,
  },
  {
    road_no: "4",
    place: "",
    name: "City Gate",
    value: "city_gate",
    distance: 10,
  },
  {
    road_no: "4",
    place: "",
    name: "Fokir Hat Bridge",
    value: "fokir_hat_bridge",
    distance: 11,
  },
  {
    road_no: "4",
    place: "",
    name: "Fouzdarhat",
    value: "fouzdarhat",
    distance: 12,
  },
  {
    road_no: "4",
    place: "",
    name: "Banur Bazar",
    value: "banur_bazar",
    distance: 13,
  },
  {
    road_no: "4",
    place: "",
    name: "BM Gate",
    value: "bm_gate",
    distance: 14,
  },
  {
    road_no: "4",
    place: "",
    name: "Vatiyari",
    value: "vatiyari",
    distance: 15,
  },
  {
    road_no: "5",
    place: "",
    name: "New Market",
    value: "new_market",
    distance: 0,
  },
  {
    road_no: "5",
    place: "",
    name: "Puraton Station",
    value: "puraton_station",
    distance: 1,
  },
  {
    road_no: "5",
    place: "",
    name: "Madarbari",
    value: "madarbari",
    distance: 2,
  },
  {
    road_no: "5",
    place: "",
    name: "Tiger Pass",
    value: "tiger_pass",
    distance: 2,
  },
  {
    road_no: "5",
    place: "",
    name: "Chomuhoni",
    value: "chomuhoni",
    distance: 3.1,
  },
  {
    road_no: "5",
    place: "",
    name: "Badamtoli",
    value: "badamtoli",
    distance: 3.6,
  },
  {
    road_no: "5",
    place: "",
    name: "Barik Building",
    value: "barik_building",
    distance: 4.6,
  },
  {
    road_no: "5",
    place: "",
    name: "Fokir Hat",
    value: "fokir_hat",
    distance: 5.6,
  },
  {
    road_no: "5",
    place: "",
    name: "Nimtoli Bridge",
    value: "nimtoli_bridge",
    distance: 6.6,
  },
  {
    road_no: "5",
    place: "",
    name: "Solt Ghola",
    value: "solt_ghola",
    distance: 7.6,
  },
  {
    road_no: "5",
    place: "",
    name: "EPZ",
    value: "epz",
    distance: 8.6,
  },
  {
    road_no: "5",
    place: "",
    name: "Bondor Tila",
    value: "bondor_tila",
    distance: 9.6,
  },
  {
    road_no: "5",
    place: "",
    name: "Cement Crossing",
    value: "cement_crossing",
    distance: 10.6,
  },
  {
    road_no: "5",
    place: "",
    name: "Flowtila",
    value: "flowtila",
    distance: 11.6,
  },
  {
    road_no: "5",
    place: "",
    name: "Standard Asiatic Oil",
    value: "standard_asiatic_oil",
    distance: 12.6,
  },
  {
    road_no: "5",
    place: "",
    name: "Drydock",
    value: "drydock",
    distance: 13.6,
  },
  {
    road_no: "5",
    place: "",
    name: "Koylar Dipu",
    value: "koylar_dipu",
    distance: 14.6,
  },
  {
    road_no: "5",
    place: "",
    name: "Airport",
    value: "airport",
    distance: 18.6,
  },
  {
    road_no: "6",
    place: "",
    name: "New Market",
    value: "new_market",
    distance: 0,
  },
  {
    road_no: "6",
    place: "",
    name: "Puraton Station",
    value: "puraton_station",
    distance: 2,
  },
  {
    road_no: "6",
    place: "",
    name: "Tiger Pass",
    value: "tiger_pass",
    distance: 3,
  },
  {
    road_no: "6",
    place: "",
    name: "Chomuhoni",
    value: "chomuhoni",
    distance: 4.1,
  },
  {
    road_no: "6",
    place: "",
    name: "Badamtoli",
    value: "badamtoli",
    distance: 4.6,
  },
  {
    road_no: "6",
    place: "",
    name: "Barik Building",
    value: "barik_building",
    distance: 5.6,
  },
  {
    road_no: "6",
    place: "",
    name: "Fokir Hat",
    value: "fokir_hat",
    distance: 6.6,
  },
  {
    road_no: "6",
    place: "",
    name: "Nimtoli Bridge",
    value: "nimtoli_bridge",
    distance: 7.6,
  },
  {
    road_no: "6",
    place: "",
    name: "Solt Ghola",
    value: "solt_ghola",
    distance: 8.6,
  },
  {
    road_no: "6",
    place: "",
    name: "EPZ",
    value: "epz",
    distance: 9.6,
  },
  {
    road_no: "6",
    place: "",
    name: "Bondor Tila",
    value: "bondor_tila",
    distance: 10.6,
  },
  {
    road_no: "6",
    place: "",
    name: "Cement Crossing",
    value: "cement_crossing",
    distance: 11.6,
  },
  {
    road_no: "6",
    place: "",
    name: "Still Mill Bazar",
    value: "still_mill_bazar",
    distance: 12.6,
  },
  {
    road_no: "6",
    place: "",
    name: "Katgor Refinary Gate",
    value: "katgor_rifainary_gate",
    distance: 13.6,
  },
  {
    road_no: "6",
    place: "",
    name: "Sea Beach",
    value: "sea_beach",
    distance: 16.6,
  },
  {
    road_no: "7",
    place: "",
    name: "Kotwali More",
    value: "kotwali_more",
    distance: 0,
  },
  {
    road_no: "7",
    place: "",
    name: "New Market",
    value: "new_market",
    distance: 0.5,
  },
  {
    road_no: "7",
    place: "",
    name: "Puraton Station",
    value: "puraton_station",
    distance: 1.5,
  },
  {
    road_no: "7",
    place: "",
    name: "Tiger Pass",
    value: "tiger_pass",
    distance: 2.5,
  },
  {
    road_no: "7",
    place: "",
    name: "Chomuhoni",
    value: "chomuhoni",
    distance: 3.6,
  },
  {
    road_no: "7",
    place: "",
    name: "Badamtoli",
    value: "badamtoli",
    distance: 4.1,
  },
  {
    road_no: "7",
    place: "",
    name: "Zila Police Line",
    value: "zila_police_line",
    distance: 5.1,
  },
  {
    road_no: "7",
    place: "",
    name: "Razmukut",
    value: "Razmukut",
    distance: 6.1,
  },
  {
    road_no: "7",
    place: "",
    name: "Owabda Gate",
    value: "owabda_gate",
    distance: 7.1,
  },
  {
    road_no: "7",
    place: "",
    name: "Noya Bazar",
    value: "noya_bazar",
    distance: 8.1,
  },
  {
    road_no: "7",
    place: "",
    name: "Olonkar",
    value: "olonkar",
    distance: 9.1,
  },
  {
    road_no: "7",
    place: "",
    name: "Cornel Hat",
    value: "cornel_hat",
    distance: 10.1,
  },
  {
    road_no: "7",
    place: "",
    name: "Fokir Hat Bridge",
    value: "fokir_hat_bridge",
    distance: 12.1,
  },
  {
    road_no: "7",
    place: "",
    name: "Fouzdarhat",
    value: "fouzdarhat",
    distance: 13.1,
  },
  {
    road_no: "7",
    place: "",
    name: "Banur Bazar",
    value: "banur_bazar",
    distance: 14.1,
  },
  {
    road_no: "7",
    place: "",
    name: "Vatiyari",
    value: "vatiyari",
    distance: 16.1,
  },
  {
    road_no: "10",
    place: "",
    name: "Kalurghat Bridge",
    value: "kalurghat",
    distance: 0,
  },
  {
    road_no: "10",
    place: "",
    name: "Ispahani Mosjid",
    value: "ispahani_mosjid",
    distance: 1,
  },
  {
    road_no: "10",
    place: "",
    name: "Kaptai Rastar Matha",
    value: "kaptai_rastar_matha",
    distance: 2,
  },
  {
    road_no: "10",
    place: "",
    name: "Bus Terminal",
    value: "bus_terminal",
    distance: 5,
  },
  {
    road_no: "10",
    place: "",
    name: "Bohoddarhat",
    value: "bohoddarhat",
    distance: 6,
  },
  {
    road_no: "10",
    place: "",
    name: "Muradpur",
    value: "muradpur",
    distance: 7,
  },
  {
    road_no: "10",
    place: "",
    name: "Sholoshor Rail Station",
    value: "sholoshor_rail_station",
    distance: 8,
  },
  {
    road_no: "10",
    place: "",
    name: "GEC",
    value: "gec",
    distance: 10,
  },
  {
    road_no: "10",
    place: "",
    name: "Ispahani More",
    value: "ispahani_more",
    distance: 11,
  },
  {
    road_no: "10",
    place: "",
    name: "Deoan Hat",
    value: "deoan_hat",
    distance: 12,
  },
  {
    road_no: "10",
    place: "",
    name: "Barik Building",
    value: "barik_building",
    distance: 13,
  },
  {
    road_no: "10",
    place: "",
    name: "Badamtoli",
    value: "badamtoli",
    distance: 14,
  },
  {
    road_no: "10",
    place: "",
    name: "Bondor Post Office",
    value: "bondor_post_office",
    distance: 15,
  },
  {
    road_no: "10",
    place: "",
    name: "Customs Bridge",
    value: "customs_bridge",
    distance: 16,
  },
  {
    road_no: "10",
    place: "",
    name: "Salt Gola Crossing",
    value: "salt_gola_crossing",
    distance: 17,
  },
  {
    road_no: "10",
    place: "",
    name: "EPZ",
    value: "epz",
    distance: 18,
  },
  {
    road_no: "10",
    place: "",
    name: "Bondor Tila",
    value: "bondor_tila",
    distance: 19,
  },
  {
    road_no: "10",
    place: "",
    name: "Cement Crossing",
    value: "cement_crossing",
    distance: 20,
  },
  {
    road_no: "10",
    place: "",
    name: "Katgor Refinary Gate",
    value: "katgor_rifainary_gate",
    distance: 22,
  },
  {
    road_no: "10",
    place: "",
    name: "Sea Beach",
    value: "sea_beach",
    distance: 25,
  },
  {
    road_no: "8",
    place: "",
    name: "New Market",
    value: "new_market",
    distance: 0,
  },
  {
    road_no: "8",
    place: "",
    name: "Kodomtoli",
    value: "kodomtoli",
    distance: 1,
  },
  {
    road_no: "8",
    place: "",
    name: "Tiger Pass",
    value: "tiger_pass",
    distance: 2,
  },
  {
    road_no: "8",
    place: "",
    name: "Wasa",
    value: "wasa",
    distance: 3,
  },
  {
    road_no: "8",
    place: "",
    name: "Sholoshor Rail Station",
    value: "sholoshor_rail_station",
    distance: 4,
  },
  {
    road_no: "8",
    place: "",
    name: "Ruby Gate",
    value: "ruby_gate",
    distance: 5,
  },
  {
    road_no: "8",
    place: "",
    name: "Shersha colony",
    value: "shersha_colony",
    distance: 6,
  },
  {
    road_no: "8",
    place: "",
    name: "Bayezid",
    value: "bayezid",
    distance: 7,
  },
  {
    road_no: "8",
    place: "",
    name: "Oxyzen",
    value: "oxyzen",
    distance: 8,
  },
];
/* 
#################################################################################
###################################################################################
#################################################################################
######################################################################################
##################################################################################
################################################################################
#################################################################################
###################################################################################
#################################################################################
######################################################################################
##################################################################################
################################################################################
#################################################################################
###################################################################################
#################################################################################
######################################################################################
##################################################################################
################################################################################
#################################################################################
###################################################################################
#################################################################################
######################################################################################
##################################################################################
################################################################################
*/

export default roads;
