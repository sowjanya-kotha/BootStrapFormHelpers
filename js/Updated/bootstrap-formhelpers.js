/**
 * bootstrap-formhelpers.js v2.3.0 by @vincentlamanna
 * Copyright 2013 Vincent Lamanna
 * http://www.apache.org/licenses/LICENSE-2.0
 */
if (!jQuery)
	throw new Error("Bootstrap Form Helpers requires jQuery");
var BFHCountriesList = {
	AF : "Afghanistan",
	AL : "Albania",
	DZ : "Algeria",
	AS : "American Samoa",
	AD : "Andorra",
	AO : "Angola",
	AI : "Anguilla",
	AQ : "Antarctica",
	AG : "Antigua and Barbuda",
	AR : "Argentina",
	AM : "Armenia",
	AW : "Aruba",
	AU : "Australia",
	AT : "Austria",
	AZ : "Azerbaijan",
	BH : "Bahrain",
	BD : "Bangladesh",
	BB : "Barbados",
	BY : "Belarus",
	BE : "Belgium",
	BZ : "Belize",
	BJ : "Benin",
	BM : "Bermuda",
	BT : "Bhutan",
	BO : "Bolivia",
	BA : "Bosnia and Herzegovina",
	BW : "Botswana",
	BV : "Bouvet Island",
	BR : "Brazil",
	IO : "British Indian Ocean Territory",
	VG : "British Virgin Islands",
	BN : "Brunei",
	BG : "Bulgaria",
	BF : "Burkina Faso",
	BI : "Burundi",
	CI : "CÃ´te d'Ivoire",
	KH : "Cambodia",
	CM : "Cameroon",
	CA : "Canada",
	CV : "Cape Verde",
	KY : "Cayman Islands",
	CF : "Central African Republic",
	TD : "Chad",
	CL : "Chile",
	CN : "China",
	CX : "Christmas Island",
	CC : "Cocos (Keeling) Islands",
	CO : "Colombia",
	KM : "Comoros",
	CG : "Congo",
	CK : "Cook Islands",
	CR : "Costa Rica",
	HR : "Croatia",
	CU : "Cuba",
	CY : "Cyprus",
	CZ : "Czech Republic",
	CD : "Democratic Republic of the Congo",
	DK : "Denmark",
	DJ : "Djibouti",
	DM : "Dominica",
	DO : "Dominican Republic",
	TP : "East Timor",
	EC : "Ecuador",
	EG : "Egypt",
	SV : "El Salvador",
	GQ : "Equatorial Guinea",
	ER : "Eritrea",
	EE : "Estonia",
	ET : "Ethiopia",
	FO : "Faeroe Islands",
	FK : "Falkland Islands",
	FJ : "Fiji",
	FI : "Finland",
	MK : "Former Yugoslav Republic of Macedonia",
	FR : "France",
	FX : "France, Metropolitan",
	GF : "French Guiana",
	PF : "French Polynesia",
	TF : "French Southern Territories",
	GA : "Gabon",
	GE : "Georgia",
	DE : "Germany",
	GH : "Ghana",
	GI : "Gibraltar",
	GR : "Greece",
	GL : "Greenland",
	GD : "Grenada",
	GP : "Guadeloupe",
	GU : "Guam",
	GT : "Guatemala",
	GN : "Guinea",
	GW : "Guinea-Bissau",
	GY : "Guyana",
	HT : "Haiti",
	HM : "Heard and Mc Donald Islands",
	HN : "Honduras",
	HK : "Hong Kong",
	HU : "Hungary",
	IS : "Iceland",
	IN : "India",
	ID : "Indonesia",
	IR : "Iran",
	IQ : "Iraq",
	IE : "Ireland",
	IL : "Israel",
	IT : "Italy",
	JM : "Jamaica",
	JP : "Japan",
	JO : "Jordan",
	KZ : "Kazakhstan",
	KE : "Kenya",
	KI : "Kiribati",
	KW : "Kuwait",
	KG : "Kyrgyzstan",
	LA : "Laos",
	LV : "Latvia",
	LB : "Lebanon",
	LS : "Lesotho",
	LR : "Liberia",
	LY : "Libya",
	LI : "Liechtenstein",
	LT : "Lithuania",
	LU : "Luxembourg",
	MO : "Macau",
	MG : "Madagascar",
	MW : "Malawi",
	MY : "Malaysia",
	MV : "Maldives",
	ML : "Mali",
	MT : "Malta",
	MH : "Marshall Islands",
	MQ : "Martinique",
	MR : "Mauritania",
	MU : "Mauritius",
	YT : "Mayotte",
	MX : "Mexico",
	FM : "Micronesia",
	MD : "Moldova",
	MC : "Monaco",
	MN : "Mongolia",
	ME : "Montenegro",
	MS : "Montserrat",
	MA : "Morocco",
	MZ : "Mozambique",
	MM : "Myanmar",
	NA : "Namibia",
	NR : "Nauru",
	NP : "Nepal",
	NL : "Netherlands",
	AN : "Netherlands Antilles",
	NC : "New Caledonia",
	NZ : "New Zealand",
	NI : "Nicaragua",
	NE : "Niger",
	NG : "Nigeria",
	NU : "Niue",
	NF : "Norfolk Island",
	KP : "North Korea",
	MP : "Northern Marianas",
	NO : "Norway",
	OM : "Oman",
	PK : "Pakistan",
	PW : "Palau",
	PS : "Palestine",
	PA : "Panama",
	PG : "Papua New Guinea",
	PY : "Paraguay",
	PE : "Peru",
	PH : "Philippines",
	PN : "Pitcairn Islands",
	PL : "Poland",
	PT : "Portugal",
	PR : "Puerto Rico",
	QA : "Qatar",
	RE : "Reunion",
	RO : "Romania",
	RU : "Russia",
	RW : "Rwanda",
	ST : "SÃ£o TomÃ© and PrÃ­ncipe",
	SH : "Saint Helena",
	PM : "St. Pierre and Miquelon",
	KN : "Saint Kitts and Nevis",
	LC : "Saint Lucia",
	VC : "Saint Vincent and the Grenadines",
	WS : "Samoa",
	SM : "San Marino",
	SA : "Saudi Arabia",
	SN : "Senegal",
	RS : "Serbia",
	SC : "Seychelles",
	SL : "Sierra Leone",
	SG : "Singapore",
	SK : "Slovakia",
	SI : "Slovenia",
	SB : "Solomon Islands",
	SO : "Somalia",
	ZA : "South Africa",
	GS : "South Georgia and the South Sandwich Islands",
	KR : "South Korea",
	ES : "Spain",
	LK : "Sri Lanka",
	SD : "Sudan",
	SR : "Suriname",
	SJ : "Svalbard and Jan Mayen Islands",
	SZ : "Swaziland",
	SE : "Sweden",
	CH : "Switzerland",
	SY : "Syria",
	TW : "Taiwan",
	TJ : "Tajikistan",
	TZ : "Tanzania",
	TH : "Thailand",
	BS : "The Bahamas",
	GM : "The Gambia",
	TG : "Togo",
	TK : "Tokelau",
	TO : "Tonga",
	TT : "Trinidad and Tobago",
	TN : "Tunisia",
	TR : "Turkey",
	TM : "Turkmenistan",
	TC : "Turks and Caicos Islands",
	TV : "Tuvalu",
	VI : "US Virgin Islands",
	UG : "Uganda",
	UA : "Ukraine",
	AE : "United Arab Emirates",
	GB : "United Kingdom",
	US : "United States",
	UM : "United States Minor Outlying Islands",
	UY : "Uruguay",
	UZ : "Uzbekistan",
	VU : "Vanuatu",
	VA : "Vatican City",
	VE : "Venezuela",
	VN : "Vietnam",
	WF : "Wallis and Futuna Islands",
	EH : "Western Sahara",
	YE : "Yemen",
	ZM : "Zambia",
	ZW : "Zimbabwe"
}, BFHStatesList = {
	AF : {
		1 : {
			code : "BAL",
			name : "Balkh"
		},
		2 : {
			code : "BAM",
			name : "Bamian"
		},
		3 : {
			code : "BDG",
			name : "Badghis"
		},
		4 : {
			code : "BDS",
			name : "Badakhshan"
		},
		5 : {
			code : "BGL",
			name : "Baghlan"
		},
		6 : {
			code : "FRA",
			name : "Farah"
		},
		7 : {
			code : "FYB",
			name : "Faryab"
		},
		8 : {
			code : "GHA",
			name : "Ghazni"
		},
		9 : {
			code : "GHO",
			name : "Ghowr"
		},
		10 : {
			code : "HEL",
			name : "Helmand"
		},
		11 : {
			code : "HER",
			name : "Herat"
		},
		12 : {
			code : "JOW",
			name : "Jowzjan"
		},
		13 : {
			code : "KAB",
			name : "Kabul"
		},
		14 : {
			code : "KAN",
			name : "Kandahar"
		},
		15 : {
			code : "KAP",
			name : "Kapisa"
		},
		16 : {
			code : "KDZ",
			name : "Kondoz"
		},
		17 : {
			code : "KHO",
			name : "Khost"
		},
		18 : {
			code : "KNR",
			name : "Konar"
		},
		19 : {
			code : "LAG",
			name : "Laghman"
		},
		20 : {
			code : "LOW",
			name : "Lowgar"
		},
		21 : {
			code : "NAN",
			name : "Nangrahar"
		},
		22 : {
			code : "NIM",
			name : "Nimruz"
		},
		23 : {
			code : "NUR",
			name : "Nurestan"
		},
		24 : {
			code : "ORU",
			name : "Oruzgan"
		},
		25 : {
			code : "PAR",
			name : "Parwan"
		},
		26 : {
			code : "PIA",
			name : "Paktia"
		},
		27 : {
			code : "PKA",
			name : "Paktika"
		},
		28 : {
			code : "SAM",
			name : "Samangan"
		},
		29 : {
			code : "SAR",
			name : "Sar-e Pol"
		},
		30 : {
			code : "TAK",
			name : "Takhar"
		},
		31 : {
			code : "WAR",
			name : "Wardak"
		},
		32 : {
			code : "ZAB",
			name : "Zabol"
		}
	},
	AL : {
		1 : {
			code : "BR",
			name : "Berat"
		},
		2 : {
			code : "BU",
			name : "Bulqize"
		},
		3 : {
			code : "DI",
			name : "Diber"
		},
		4 : {
			code : "DL",
			name : "Delvine"
		},
		5 : {
			code : "DR",
			name : "Durres"
		},
		6 : {
			code : "DV",
			name : "Devoll"
		},
		7 : {
			code : "EL",
			name : "Elbasan"
		},
		8 : {
			code : "ER",
			name : "Kolonje"
		},
		9 : {
			code : "FR",
			name : "Fier"
		},
		10 : {
			code : "GJ",
			name : "Gjirokaster"
		},
		11 : {
			code : "GR",
			name : "Gramsh"
		},
		12 : {
			code : "HA",
			name : "Has"
		},
		13 : {
			code : "KA",
			name : "Kavaje"
		},
		14 : {
			code : "KB",
			name : "Kurbin"
		},
		15 : {
			code : "KC",
			name : "Kucove"
		},
		16 : {
			code : "KO",
			name : "Korce"
		},
		17 : {
			code : "KR",
			name : "Kruje"
		},
		18 : {
			code : "KU",
			name : "Kukes"
		},
		19 : {
			code : "LB",
			name : "Librazhd"
		},
		20 : {
			code : "LE",
			name : "Lezhe"
		},
		21 : {
			code : "LU",
			name : "Lushnje"
		},
		22 : {
			code : "MK",
			name : "Mallakaster"
		},
		23 : {
			code : "MM",
			name : "Malesi e Madhe"
		},
		24 : {
			code : "MR",
			name : "Mirdite"
		},
		25 : {
			code : "MT",
			name : "Mat"
		},
		26 : {
			code : "PG",
			name : "Pogradec"
		},
		27 : {
			code : "PQ",
			name : "Peqin"
		},
		28 : {
			code : "PR",
			name : "Permet"
		},
		29 : {
			code : "PU",
			name : "Puke"
		},
		30 : {
			code : "SH",
			name : "Shkoder"
		},
		31 : {
			code : "SK",
			name : "Skrapar"
		},
		32 : {
			code : "SR",
			name : "Sarande"
		},
		33 : {
			code : "TE",
			name : "Tepelene"
		},
		34 : {
			code : "TP",
			name : "Tropoje"
		},
		35 : {
			code : "TR",
			name : "Tirane"
		},
		36 : {
			code : "VL",
			name : "Vlore"
		}
	},
	DZ : {
		1 : {
			code : "ADE",
			name : "Ain Defla"
		},
		2 : {
			code : "ADR",
			name : "Adrar"
		},
		3 : {
			code : "ALG",
			name : "Alger"
		},
		4 : {
			code : "ANN",
			name : "Annaba"
		},
		5 : {
			code : "ATE",
			name : "Ain Temouchent"
		},
		6 : {
			code : "BAT",
			name : "Batna"
		},
		7 : {
			code : "BBA",
			name : "Bordj Bou Arreridj"
		},
		8 : {
			code : "BEC",
			name : "Bechar"
		},
		9 : {
			code : "BEJ",
			name : "Bejaia"
		},
		10 : {
			code : "BIS",
			name : "Biskra"
		},
		11 : {
			code : "BLI",
			name : "Blida"
		},
		12 : {
			code : "BMD",
			name : "Boumerdes"
		},
		13 : {
			code : "BOA",
			name : "Bouira"
		},
		14 : {
			code : "CHL",
			name : "Chlef"
		},
		15 : {
			code : "CON",
			name : "Constantine"
		},
		16 : {
			code : "DJE",
			name : "Djelfa"
		},
		17 : {
			code : "EBA",
			name : "El Bayadh"
		},
		18 : {
			code : "EOU",
			name : "El Oued"
		},
		19 : {
			code : "ETA",
			name : "El Tarf"
		},
		20 : {
			code : "GHA",
			name : "Ghardaia"
		},
		21 : {
			code : "GUE",
			name : "Guelma"
		},
		22 : {
			code : "ILL",
			name : "Illizi"
		},
		23 : {
			code : "JIJ",
			name : "Jijel"
		},
		24 : {
			code : "KHE",
			name : "Khenchela"
		},
		25 : {
			code : "LAG",
			name : "Laghouat"
		},
		26 : {
			code : "MED",
			name : "Medea"
		},
		27 : {
			code : "MIL",
			name : "Mila"
		},
		28 : {
			code : "MOS",
			name : "Mostaganem"
		},
		29 : {
			code : "MSI",
			name : "M'Sila"
		},
		30 : {
			code : "MUA",
			name : "Muaskar"
		},
		31 : {
			code : "NAA",
			name : "Naama"
		},
		32 : {
			code : "OEB",
			name : "Oum el-Bouaghi"
		},
		33 : {
			code : "ORA",
			name : "Oran"
		},
		34 : {
			code : "OUA",
			name : "Ouargla"
		},
		35 : {
			code : "REL",
			name : "Relizane"
		},
		36 : {
			code : "SAH",
			name : "Souk Ahras"
		},
		37 : {
			code : "SAI",
			name : "Saida"
		},
		38 : {
			code : "SBA",
			name : "Sidi Bel Abbes"
		},
		39 : {
			code : "SET",
			name : "Setif"
		},
		40 : {
			code : "SKI",
			name : "Skikda"
		},
		41 : {
			code : "TAM",
			name : "Tamanghasset"
		},
		42 : {
			code : "TEB",
			name : "Tebessa"
		},
		43 : {
			code : "TIA",
			name : "Tiaret"
		},
		44 : {
			code : "TIN",
			name : "Tindouf"
		},
		45 : {
			code : "TIP",
			name : "Tipaza"
		},
		46 : {
			code : "TIS",
			name : "Tissemsilt"
		},
		47 : {
			code : "TLE",
			name : "Tlemcen"
		},
		48 : {
			code : "TOU",
			name : "Tizi Ouzou"
		}
	},
	AS : {
		1 : {
			code : "E",
			name : "Eastern"
		},
		2 : {
			code : "M",
			name : "Manu'a"
		},
		3 : {
			code : "R",
			name : "Rose Island"
		},
		4 : {
			code : "S",
			name : "Swains Island"
		},
		5 : {
			code : "W",
			name : "Western"
		}
	},
	AD : {
		1 : {
			code : "ALV",
			name : "Andorra la Vella"
		},
		2 : {
			code : "CAN",
			name : "Canillo"
		},
		3 : {
			code : "ENC",
			name : "Encamp"
		},
		4 : {
			code : "ESE",
			name : "Escaldes-Engordany"
		},
		5 : {
			code : "LMA",
			name : "La Massana"
		},
		6 : {
			code : "ORD",
			name : "Ordino"
		},
		7 : {
			code : "SJL",
			name : "Sant JuliÃ  de LÃ²ria"
		}
	},
	AO : {
		1 : {
			code : "BGO",
			name : "Bengo"
		},
		2 : {
			code : "BGU",
			name : "Benguela"
		},
		3 : {
			code : "BIE",
			name : "Bie"
		},
		4 : {
			code : "CAB",
			name : "Cabinda"
		},
		5 : {
			code : "CCU",
			name : "Cuando-Cubango"
		},
		6 : {
			code : "CNO",
			name : "Cuanza Norte"
		},
		7 : {
			code : "CUS",
			name : "Cuanza Sul"
		},
		8 : {
			code : "CNN",
			name : "Cunene"
		},
		9 : {
			code : "HUA",
			name : "Huambo"
		},
		10 : {
			code : "HUI",
			name : "Huila"
		},
		11 : {
			code : "LUA",
			name : "Luanda"
		},
		12 : {
			code : "LNO",
			name : "Lunda Norte"
		},
		13 : {
			code : "LSU",
			name : "Lunda Sul"
		},
		14 : {
			code : "MAL",
			name : "Malange"
		},
		15 : {
			code : "MOX",
			name : "Moxico"
		},
		16 : {
			code : "NAM",
			name : "Namibe"
		},
		17 : {
			code : "UIG",
			name : "Uige"
		},
		18 : {
			code : "ZAI",
			name : "Zaire"
		}
	},
	AI : {
		1 : {
			code : "ANG",
			name : "Anguillita"
		},
		2 : {
			code : "ANG",
			name : "Anguila"
		},
		3 : {
			code : "DOG",
			name : "Dog"
		},
		4 : {
			code : "LIT",
			name : "Little Scrub"
		},
		5 : {
			code : "PRI",
			name : "Prickly Pear"
		},
		6 : {
			code : "SAN",
			name : "Sandy"
		},
		7 : {
			code : "SCR",
			name : "Scrub"
		},
		8 : {
			code : "SEA",
			name : "Seal"
		},
		9 : {
			code : "SOM",
			name : "Sombrero"
		}
	},
	AQ : {
		1 : {
			code : "ASG",
			name : "Saint George"
		},
		2 : {
			code : "ASH",
			name : "Saint Philip"
		},
		3 : {
			code : "ASJ",
			name : "Saint John"
		},
		4 : {
			code : "ASL",
			name : "Saint Paul"
		},
		5 : {
			code : "ASM",
			name : "Saint Mary"
		},
		6 : {
			code : "ASR",
			name : "Saint Peter"
		},
		7 : {
			code : "BAR",
			name : "Barbuda"
		},
		8 : {
			code : "RED",
			name : "Redonda"
		}
	},
	AR : {
		1 : {
			code : "AN",
			name : "Antartida e Islas del Atlantico"
		},
		2 : {
			code : "BA",
			name : "Buenos Aires"
		},
		3 : {
			code : "CA",
			name : "Catamarca"
		},
		4 : {
			code : "CH",
			name : "Chaco"
		},
		5 : {
			code : "CU",
			name : "Chubut"
		},
		6 : {
			code : "CO",
			name : "Cordoba"
		},
		7 : {
			code : "CR",
			name : "Corrientes"
		},
		8 : {
			code : "CF",
			name : "Capital Federal"
		},
		9 : {
			code : "ER",
			name : "Entre Rios"
		},
		10 : {
			code : "FO",
			name : "Formosa"
		},
		11 : {
			code : "JU",
			name : "Jujuy"
		},
		12 : {
			code : "LP",
			name : "La Pampa"
		},
		13 : {
			code : "LR",
			name : "La Rioja"
		},
		14 : {
			code : "ME",
			name : "Mendoza"
		},
		15 : {
			code : "MI",
			name : "Misiones"
		},
		16 : {
			code : "NE",
			name : "Neuquen"
		},
		17 : {
			code : "RN",
			name : "Rio Negro"
		},
		18 : {
			code : "SA",
			name : "Salta"
		},
		19 : {
			code : "SJ",
			name : "San Juan"
		},
		20 : {
			code : "SL",
			name : "San Luis"
		},
		21 : {
			code : "SC",
			name : "Santa Cruz"
		},
		22 : {
			code : "SF",
			name : "Santa Fe"
		},
		23 : {
			code : "SD",
			name : "Santiago del Estero"
		},
		24 : {
			code : "TF",
			name : "Tierra del Fuego"
		},
		25 : {
			code : "TU",
			name : "Tucuman"
		}
	},
	AM : {
		1 : {
			code : "AGT",
			name : "Aragatsotn"
		},
		2 : {
			code : "ARR",
			name : "Ararat"
		},
		3 : {
			code : "ARM",
			name : "Armavir"
		},
		4 : {
			code : "GEG",
			name : "Geghark 'unik'"
		},
		5 : {
			code : "KOT",
			name : "Kotayk'"
		},
		6 : {
			code : "LOR",
			name : "Lorri"
		},
		7 : {
			code : "SHI",
			name : "Shirak"
		},
		8 : {
			code : "SYU",
			name : "Syunik'"
		},
		9 : {
			code : "TAV",
			name : "Tavush"
		},
		10 : {
			code : "VAY",
			name : "Vayots' Dzor"
		},
		11 : {
			code : "YER",
			name : "Yerevan"
		}
	},
	AW : {
		1 : {
			code : "ARU",
			name : "Aruba"
		},
		2 : {
			code : "DRU",
			name : "Druif Beach"
		},
		3 : {
			code : "MAN",
			name : "Manchebo Beach"
		},
		4 : {
			code : "NOO",
			name : "Noord"
		},
		5 : {
			code : "ORA",
			name : "Oranjestad"
		},
		6 : {
			code : "PAL",
			name : "Palm Beach"
		},
		7 : {
			code : "ROO",
			name : "Rooi Thomas"
		},
		8 : {
			code : "SIN",
			name : "Sint Nicolaas"
		},
		9 : {
			code : "SIN",
			name : "Sint Nicolas"
		},
		10 : {
			code : "WAY",
			name : "Wayaca"
		}
	},
	AU : {
		1 : {
			code : "ACT",
			name : "Australian Capital Territory"
		},
		2 : {
			code : "NSW",
			name : "New South Wales"
		},
		3 : {
			code : "NT",
			name : "Northern Territory"
		},
		4 : {
			code : "QLD",
			name : "Queensland"
		},
		5 : {
			code : "SA",
			name : "South Australia"
		},
		6 : {
			code : "TAS",
			name : "Tasmania"
		},
		7 : {
			code : "VIC",
			name : "Victoria"
		},
		8 : {
			code : "WA",
			name : "Western Australia"
		}
	},
	AT : {
		1 : {
			code : "BUR",
			name : "Burgenland"
		},
		2 : {
			code : "KAR",
			name : "Krnten"
		},
		3 : {
			code : "NOS",
			name : "NiederÃ¶esterreich"
		},
		4 : {
			code : "OOS",
			name : "OberÃ¶esterreich"
		},
		5 : {
			code : "SAL",
			name : "Salzburg"
		},
		6 : {
			code : "STE",
			name : "Steiermark"
		},
		7 : {
			code : "TIR",
			name : "Tirol"
		},
		8 : {
			code : "VOR",
			name : "Vorarlberg"
		},
		9 : {
			code : "WIE",
			name : "Wien"
		}
	},
	AZ : {
		1 : {
			code : "AB",
			name : "Ali Bayramli"
		},
		2 : {
			code : "ABS",
			name : "Abseron"
		},
		3 : {
			code : "AGC",
			name : "AgcabAdi"
		},
		4 : {
			code : "AGM",
			name : "Agdam"
		},
		5 : {
			code : "AGS",
			name : "Agdas"
		},
		6 : {
			code : "AGA",
			name : "Agstafa"
		},
		7 : {
			code : "AGU",
			name : "Agsu"
		},
		8 : {
			code : "AST",
			name : "Astara"
		},
		9 : {
			code : "BA",
			name : "Baki"
		},
		10 : {
			code : "BAB",
			name : "BabAk"
		},
		11 : {
			code : "BAL",
			name : "BalakAn"
		},
		12 : {
			code : "BAR",
			name : "BArdA"
		},
		13 : {
			code : "BEY",
			name : "Beylaqan"
		},
		14 : {
			code : "BIL",
			name : "Bilasuvar"
		},
		15 : {
			code : "CAB",
			name : "Cabrayil"
		},
		16 : {
			code : "CAL",
			name : "Calilabab"
		},
		17 : {
			code : "CUL",
			name : "Culfa"
		},
		18 : {
			code : "DAS",
			name : "Daskasan"
		},
		19 : {
			code : "DAV",
			name : "Davaci"
		},
		20 : {
			code : "FUZ",
			name : "Fuzuli"
		},
		21 : {
			code : "GA",
			name : "Ganca"
		},
		22 : {
			code : "GAD",
			name : "Gadabay"
		},
		23 : {
			code : "GOR",
			name : "Goranboy"
		},
		24 : {
			code : "GOY",
			name : "Goycay"
		},
		25 : {
			code : "HAC",
			name : "Haciqabul"
		},
		26 : {
			code : "IMI",
			name : "Imisli"
		},
		27 : {
			code : "ISM",
			name : "Ismayilli"
		},
		28 : {
			code : "KAL",
			name : "Kalbacar"
		},
		29 : {
			code : "KUR",
			name : "Kurdamir"
		},
		30 : {
			code : "LA",
			name : "Lankaran"
		},
		31 : {
			code : "LAC",
			name : "Lacin"
		},
		32 : {
			code : "LAN",
			name : "Lankaran"
		},
		33 : {
			code : "LER",
			name : "Lerik"
		},
		34 : {
			code : "MAS",
			name : "Masalli"
		},
		35 : {
			code : "MI",
			name : "Mingacevir"
		},
		36 : {
			code : "NA",
			name : "Naftalan"
		},
		37 : {
			code : "NX",
			name : "Naxcivan"
		},
		38 : {
			code : "NEF",
			name : "Neftcala"
		},
		39 : {
			code : "OGU",
			name : "Oguz"
		},
		40 : {
			code : "ORD",
			name : "Ordubad"
		},
		41 : {
			code : "QAB",
			name : "Qabala"
		},
		42 : {
			code : "QAX",
			name : "Qax"
		},
		43 : {
			code : "QAZ",
			name : "Qazax"
		},
		44 : {
			code : "QOB",
			name : "Qobustan"
		},
		45 : {
			code : "QBA",
			name : "Quba"
		},
		46 : {
			code : "QBI",
			name : "Qubadli"
		},
		47 : {
			code : "QUS",
			name : "Qusar"
		},
		48 : {
			code : "SA",
			name : "Saki"
		},
		49 : {
			code : "SAT",
			name : "Saatli"
		},
		50 : {
			code : "SAB",
			name : "Sabirabad"
		},
		51 : {
			code : "SAD",
			name : "Sadarak"
		},
		52 : {
			code : "SAH",
			name : "Sahbuz"
		},
		53 : {
			code : "SAK",
			name : "Saki"
		},
		54 : {
			code : "SAL",
			name : "Salyan"
		},
		55 : {
			code : "SM",
			name : "Sumqayit"
		},
		56 : {
			code : "SMI",
			name : "Samaxi"
		},
		57 : {
			code : "SKR",
			name : "Samkir"
		},
		58 : {
			code : "SMX",
			name : "Samux"
		},
		59 : {
			code : "SAR",
			name : "Sarur"
		},
		60 : {
			code : "SIY",
			name : "Siyazan"
		},
		61 : {
			code : "SS",
			name : "Susa"
		},
		62 : {
			code : "SUS",
			name : "Susa"
		},
		63 : {
			code : "TAR",
			name : "Tartar"
		},
		64 : {
			code : "TOV",
			name : "Tovuz"
		},
		65 : {
			code : "UCA",
			name : "Ucar"
		},
		66 : {
			code : "XA",
			name : "Xankandi"
		},
		67 : {
			code : "XAC",
			name : "Xacmaz"
		},
		68 : {
			code : "XAN",
			name : "Xanlar"
		},
		69 : {
			code : "XIZ",
			name : "Xizi"
		},
		70 : {
			code : "XCI",
			name : "Xocali"
		},
		71 : {
			code : "XVD",
			name : "Xocavand"
		},
		72 : {
			code : "YAR",
			name : "Yardimli"
		},
		73 : {
			code : "YEV",
			name : "Yevlax"
		},
		74 : {
			code : "ZAN",
			name : "Zangilan"
		},
		75 : {
			code : "ZAQ",
			name : "Zaqatala"
		},
		76 : {
			code : "ZAR",
			name : "Zardab"
		}
	},
	BS : {
		1 : {
			code : "ACK",
			name : "Acklins"
		},
		2 : {
			code : "BER",
			name : "Berry Islands"
		},
		3 : {
			code : "BIM",
			name : "Bimini"
		},
		4 : {
			code : "BLK",
			name : "Black Point"
		},
		5 : {
			code : "CAT",
			name : "Cat Island"
		},
		6 : {
			code : "CAB",
			name : "Central Abaco"
		},
		7 : {
			code : "CAN",
			name : "Central Andros"
		},
		8 : {
			code : "CEL",
			name : "Central Eleuthera"
		},
		9 : {
			code : "FRE",
			name : "City of Freeport"
		},
		10 : {
			code : "CRO",
			name : "Crooked Island"
		},
		11 : {
			code : "EGB",
			name : "East Grand Bahama"
		},
		12 : {
			code : "EXU",
			name : "Exuma"
		},
		13 : {
			code : "GRD",
			name : "Grand Cay"
		},
		14 : {
			code : "HAR",
			name : "Harbour Island"
		},
		15 : {
			code : "HOP",
			name : "Hope Town"
		},
		16 : {
			code : "INA",
			name : "Inagua"
		},
		17 : {
			code : "LNG",
			name : "Long Island"
		},
		18 : {
			code : "MAN",
			name : "Mangrove Cay"
		},
		19 : {
			code : "MAY",
			name : "Mayaguana"
		},
		20 : {
			code : "MOO",
			name : "Moore's Island"
		},
		21 : {
			code : "NAB",
			name : "North Abaco"
		},
		22 : {
			code : "NAN",
			name : "North Andros"
		},
		23 : {
			code : "NEL",
			name : "North Eleuthera"
		},
		24 : {
			code : "RAG",
			name : "Ragged Island"
		},
		25 : {
			code : "RUM",
			name : "Rum Cay"
		},
		26 : {
			code : "SAL",
			name : "San Salvador"
		},
		27 : {
			code : "SAB",
			name : "South Abaco"
		},
		28 : {
			code : "SAN",
			name : "South Andros"
		},
		29 : {
			code : "SEL",
			name : "South Eleuthera"
		},
		30 : {
			code : "SWE",
			name : "Spanish Wells"
		},
		31 : {
			code : "WGB",
			name : "West Grand Bahama"
		}
	},
	BH : {
		1 : {
			code : "CAP",
			name : "Capital"
		},
		2 : {
			code : "CEN",
			name : "Central"
		},
		3 : {
			code : "MUH",
			name : "Muharraq"
		},
		4 : {
			code : "NOR",
			name : "Northern"
		},
		5 : {
			code : "SOU",
			name : "Southern"
		}
	},
	BD : {
		1 : {
			code : "BAR",
			name : "Barisal"
		},
		2 : {
			code : "CHI",
			name : "Chittagong"
		},
		3 : {
			code : "DHA",
			name : "Dhaka"
		},
		4 : {
			code : "KHU",
			name : "Khulna"
		},
		5 : {
			code : "RAJ",
			name : "Rajshahi"
		},
		6 : {
			code : "SYL",
			name : "Sylhet"
		}
	},
	BB : {
		1 : {
			code : "CC",
			name : "Christ Church"
		},
		2 : {
			code : "AND",
			name : "Saint Andrew"
		},
		3 : {
			code : "GEO",
			name : "Saint George"
		},
		4 : {
			code : "JAM",
			name : "Saint James"
		},
		5 : {
			code : "JOH",
			name : "Saint John"
		},
		6 : {
			code : "JOS",
			name : "Saint Joseph"
		},
		7 : {
			code : "LUC",
			name : "Saint Lucy"
		},
		8 : {
			code : "MIC",
			name : "Saint Michael"
		},
		9 : {
			code : "PET",
			name : "Saint Peter"
		},
		10 : {
			code : "PHI",
			name : "Saint Philip"
		},
		11 : {
			code : "THO",
			name : "Saint Thomas"
		}
	},
	BY : {
		1 : {
			code : "BR",
			name : "Brestskaya (Brest)"
		},
		2 : {
			code : "HO",
			name : "Homyel'skaya (Homyel')"
		},
		3 : {
			code : "HM",
			name : "Horad Minsk"
		},
		4 : {
			code : "HR",
			name : "Hrodzyenskaya (Hrodna)"
		},
		5 : {
			code : "MA",
			name : "Mahilyowskaya (Mahilyow)"
		},
		6 : {
			code : "MI",
			name : "Minskaya"
		},
		7 : {
			code : "VI",
			name : "Vitsyebskaya (Vitsyebsk)"
		}
	},
	BE : {
		1 : {
			code : "VAN",
			name : "Antwerpen"
		},
		2 : {
			code : "WBR",
			name : "Brabant Wallon"
		},
		3 : {
			code : "WHT",
			name : "Hainaut"
		},
		4 : {
			code : "WLG",
			name : "Liege"
		},
		5 : {
			code : "VLI",
			name : "Limburg"
		},
		6 : {
			code : "WLX",
			name : "Luxembourg"
		},
		7 : {
			code : "WNA",
			name : "Namur"
		},
		8 : {
			code : "VOV",
			name : "Oost-Vlaanderen"
		},
		9 : {
			code : "VBR",
			name : "Vlaams Brabant"
		},
		10 : {
			code : "VWV",
			name : "West-Vlaanderen"
		}
	},
	BZ : {
		1 : {
			code : "BZ",
			name : "Belize"
		},
		2 : {
			code : "CY",
			name : "Cayo"
		},
		3 : {
			code : "CR",
			name : "Corozal"
		},
		4 : {
			code : "OW",
			name : "Orange Walk"
		},
		5 : {
			code : "SC",
			name : "Stann Creek"
		},
		6 : {
			code : "TO",
			name : "Toledo"
		}
	},
	BJ : {
		1 : {
			code : "AL",
			name : "Alibori"
		},
		2 : {
			code : "AK",
			name : "Atakora"
		},
		3 : {
			code : "AQ",
			name : "Atlantique"
		},
		4 : {
			code : "BO",
			name : "Borgou"
		},
		5 : {
			code : "CO",
			name : "Collines"
		},
		6 : {
			code : "DO",
			name : "Donga"
		},
		7 : {
			code : "KO",
			name : "Kouffo"
		},
		8 : {
			code : "LI",
			name : "Littoral"
		},
		9 : {
			code : "MO",
			name : "Mono"
		},
		10 : {
			code : "OU",
			name : "Oueme"
		},
		11 : {
			code : "PL",
			name : "Plateau"
		},
		12 : {
			code : "ZO",
			name : "Zou"
		}
	},
	BM : {
		1 : {
			code : "DS",
			name : "Devonshire"
		},
		2 : {
			code : "HC",
			name : "Hamilton City"
		},
		3 : {
			code : "HA",
			name : "Hamilton"
		},
		4 : {
			code : "PG",
			name : "Paget"
		},
		5 : {
			code : "PB",
			name : "Pembroke"
		},
		6 : {
			code : "GC",
			name : "Saint George City"
		},
		7 : {
			code : "SG",
			name : "Saint George's"
		},
		8 : {
			code : "SA",
			name : "Sandys"
		},
		9 : {
			code : "SM",
			name : "Smith's"
		},
		10 : {
			code : "SH",
			name : "Southampton"
		},
		11 : {
			code : "WA",
			name : "Warwick"
		}
	},
	BT : {
		1 : {
			code : "BUM",
			name : "Bumthang"
		},
		2 : {
			code : "CHU",
			name : "Chukha"
		},
		3 : {
			code : "DAG",
			name : "Dagana"
		},
		4 : {
			code : "GAS",
			name : "Gasa"
		},
		5 : {
			code : "HAA",
			name : "Haa"
		},
		6 : {
			code : "LHU",
			name : "Lhuntse"
		},
		7 : {
			code : "MON",
			name : "Mongar"
		},
		8 : {
			code : "PAR",
			name : "Paro"
		},
		9 : {
			code : "PEM",
			name : "Pemagatshel"
		},
		10 : {
			code : "PUN",
			name : "Punakha"
		},
		11 : {
			code : "SJO",
			name : "Samdrup Jongkhar"
		},
		12 : {
			code : "SAT",
			name : "Samtse"
		},
		13 : {
			code : "SAR",
			name : "Sarpang"
		},
		14 : {
			code : "THI",
			name : "Thimphu"
		},
		15 : {
			code : "TRG",
			name : "Trashigang"
		},
		16 : {
			code : "TRY",
			name : "Trashiyangste"
		},
		17 : {
			code : "TRO",
			name : "Trongsa"
		},
		18 : {
			code : "TSI",
			name : "Tsirang"
		},
		19 : {
			code : "WPH",
			name : "Wangdue Phodrang"
		},
		20 : {
			code : "ZHE",
			name : "Zhemgang"
		}
	},
	BO : {
		1 : {
			code : "BEN",
			name : "Beni"
		},
		2 : {
			code : "CHU",
			name : "Chuquisaca"
		},
		3 : {
			code : "COC",
			name : "Cochabamba"
		},
		4 : {
			code : "LPZ",
			name : "La Paz"
		},
		5 : {
			code : "ORU",
			name : "Oruro"
		},
		6 : {
			code : "PAN",
			name : "Pando"
		},
		7 : {
			code : "POT",
			name : "Potosi"
		},
		8 : {
			code : "SCZ",
			name : "Santa Cruz"
		},
		9 : {
			code : "TAR",
			name : "Tarija"
		}
	},
	BA : {
		1 : {
			code : "BRO",
			name : "Brcko district"
		},
		2 : {
			code : "FBP",
			name : "Bosanskopodrinjski Kanton"
		},
		3 : {
			code : "FHN",
			name : "Hercegovacko-neretvanski Kanton"
		},
		4 : {
			code : "FPO",
			name : "Posavski Kanton"
		},
		5 : {
			code : "FSA",
			name : "Kanton Sarajevo"
		},
		6 : {
			code : "FSB",
			name : "Srednjebosanski Kanton"
		},
		7 : {
			code : "FTU",
			name : "Tuzlanski Kanton"
		},
		8 : {
			code : "FUS",
			name : "Unsko-Sanski Kanton"
		},
		9 : {
			code : "FZA",
			name : "Zapadnobosanska"
		},
		10 : {
			code : "FZE",
			name : "Zenicko-Dobojski Kanton"
		},
		11 : {
			code : "FZH",
			name : "Zapadnohercegovacka Zupanija"
		},
		12 : {
			code : "SBI",
			name : "Bijeljina"
		},
		13 : {
			code : "SBL",
			name : "Banja Luka"
		},
		14 : {
			code : "SDO",
			name : "Doboj"
		},
		15 : {
			code : "SFO",
			name : "Foca"
		},
		16 : {
			code : "SSR",
			name : "Sarajevo-Romanija or Sokolac"
		},
		17 : {
			code : "STR",
			name : "Trebinje"
		},
		18 : {
			code : "SVL",
			name : "Vlasenica"
		}
	},
	BW : {
		1 : {
			code : "CE",
			name : "Central"
		},
		2 : {
			code : "GH",
			name : "Ghanzi"
		},
		3 : {
			code : "KD",
			name : "Kgalagadi"
		},
		4 : {
			code : "KT",
			name : "Kgatleng"
		},
		5 : {
			code : "KW",
			name : "Kweneng"
		},
		6 : {
			code : "NG",
			name : "Ngamiland"
		},
		7 : {
			code : "NE",
			name : "North East"
		},
		8 : {
			code : "NW",
			name : "North West"
		},
		9 : {
			code : "SE",
			name : "South East"
		},
		10 : {
			code : "SO",
			name : "Southern"
		}
	},
	BR : {
		1 : {
			code : "AC",
			name : "Acre"
		},
		2 : {
			code : "AL",
			name : "Alagoas"
		},
		3 : {
			code : "AP",
			name : "Amapa"
		},
		4 : {
			code : "AM",
			name : "Amazonas"
		},
		5 : {
			code : "BA",
			name : "Bahia"
		},
		6 : {
			code : "CE",
			name : "Ceara"
		},
		7 : {
			code : "DF",
			name : "Distrito Federal"
		},
		8 : {
			code : "ES",
			name : "Espirito Santo"
		},
		9 : {
			code : "GO",
			name : "Goias"
		},
		10 : {
			code : "MA",
			name : "Maranhao"
		},
		11 : {
			code : "MT",
			name : "Mato Grosso"
		},
		12 : {
			code : "MS",
			name : "Mato Grosso do Sul"
		},
		13 : {
			code : "MG",
			name : "Minas Gerais"
		},
		14 : {
			code : "PA",
			name : "Para"
		},
		15 : {
			code : "PB",
			name : "Paraiba"
		},
		16 : {
			code : "PR",
			name : "Parana"
		},
		17 : {
			code : "PE",
			name : "Pernambuco"
		},
		18 : {
			code : "PI",
			name : "Piaui"
		},
		19 : {
			code : "RJ",
			name : "Rio de Janeiro"
		},
		20 : {
			code : "RN",
			name : "Rio Grande do Norte"
		},
		21 : {
			code : "RS",
			name : "Rio Grande do Sul"
		},
		22 : {
			code : "RO",
			name : "Rondonia"
		},
		23 : {
			code : "RR",
			name : "Roraima"
		},
		24 : {
			code : "SC",
			name : "Santa Catarina"
		},
		25 : {
			code : "SP",
			name : "Sao Paulo"
		},
		26 : {
			code : "SE",
			name : "Sergipe"
		},
		27 : {
			code : "TO",
			name : "Tocantins"
		}
	},
	IO : {
		1 : {
			code : "DG",
			name : "Diego Garcia"
		},
		2 : {
			code : "DI",
			name : "Danger Island"
		},
		3 : {
			code : "EA",
			name : "Eagle Islands"
		},
		4 : {
			code : "EG",
			name : "Egmont Islands"
		},
		5 : {
			code : "NI",
			name : "Nelsons Island"
		},
		6 : {
			code : "PB",
			name : "Peros Banhos"
		},
		7 : {
			code : "SI",
			name : "Salomon Islands"
		},
		8 : {
			code : "TB",
			name : "Three Brothers"
		}
	},
	BN : {
		1 : {
			code : "BEL",
			name : "Belait"
		},
		2 : {
			code : "BRM",
			name : "Brunei and Muara"
		},
		3 : {
			code : "TEM",
			name : "Temburong"
		},
		4 : {
			code : "TUT",
			name : "Tutong"
		}
	},
	BG : {
		1 : {
			code : "BG-01",
			name : "Blagoevgrad"
		},
		2 : {
			code : "BG-02",
			name : "Burgas"
		},
		3 : {
			code : "BG-03",
			name : "Dobrich"
		},
		4 : {
			code : "BG-04",
			name : "Gabrovo"
		},
		5 : {
			code : "BG-05",
			name : "Haskovo"
		},
		6 : {
			code : "BG-06",
			name : "Kardjali"
		},
		7 : {
			code : "BG-07",
			name : "Kyustendil"
		},
		8 : {
			code : "BG-08",
			name : "Lovech"
		},
		9 : {
			code : "BG-09",
			name : "Montana"
		},
		10 : {
			code : "BG-10",
			name : "Pazardjik"
		},
		11 : {
			code : "BG-11",
			name : "Pernik"
		},
		12 : {
			code : "BG-12",
			name : "Pleven"
		},
		13 : {
			code : "BG-13",
			name : "Plovdiv"
		},
		14 : {
			code : "BG-14",
			name : "Razgrad"
		},
		15 : {
			code : "BG-15",
			name : "Shumen"
		},
		16 : {
			code : "BG-16",
			name : "Silistra"
		},
		17 : {
			code : "BG-17",
			name : "Sliven"
		},
		18 : {
			code : "BG-18",
			name : "Smolyan"
		},
		19 : {
			code : "BG-19",
			name : "Sofia"
		},
		20 : {
			code : "BG-20",
			name : "Sofia - town"
		},
		21 : {
			code : "BG-21",
			name : "Stara Zagora"
		},
		22 : {
			code : "BG-22",
			name : "Targovishte"
		},
		23 : {
			code : "BG-23",
			name : "Varna"
		},
		24 : {
			code : "BG-24",
			name : "Veliko Tarnovo"
		},
		25 : {
			code : "BG-25",
			name : "Vidin"
		},
		26 : {
			code : "BG-26",
			name : "Vratza"
		},
		27 : {
			code : "BG-27",
			name : "Yambol"
		}
	},
	BF : {
		1 : {
			code : "BAL",
			name : "Bale"
		},
		2 : {
			code : "BAM",
			name : "Bam"
		},
		3 : {
			code : "BAN",
			name : "Banwa"
		},
		4 : {
			code : "BAZ",
			name : "Bazega"
		},
		5 : {
			code : "BOR",
			name : "Bougouriba"
		},
		6 : {
			code : "BLG",
			name : "Boulgou"
		},
		7 : {
			code : "BOK",
			name : "Boulkiemde"
		},
		8 : {
			code : "COM",
			name : "Comoe"
		},
		9 : {
			code : "GAN",
			name : "Ganzourgou"
		},
		10 : {
			code : "GNA",
			name : "Gnagna"
		},
		11 : {
			code : "GOU",
			name : "Gourma"
		},
		12 : {
			code : "HOU",
			name : "Houet"
		},
		13 : {
			code : "IOA",
			name : "Ioba"
		},
		14 : {
			code : "KAD",
			name : "Kadiogo"
		},
		15 : {
			code : "KEN",
			name : "Kenedougou"
		},
		16 : {
			code : "KOD",
			name : "Komondjari"
		},
		17 : {
			code : "KOP",
			name : "Kompienga"
		},
		18 : {
			code : "KOS",
			name : "Kossi"
		},
		19 : {
			code : "KOL",
			name : "Koulpelogo"
		},
		20 : {
			code : "KOT",
			name : "Kouritenga"
		},
		21 : {
			code : "KOW",
			name : "Kourweogo"
		},
		22 : {
			code : "LER",
			name : "Leraba"
		},
		23 : {
			code : "LOR",
			name : "Loroum"
		},
		24 : {
			code : "MOU",
			name : "Mouhoun"
		},
		25 : {
			code : "NAH",
			name : "Nahouri"
		},
		26 : {
			code : "NAM",
			name : "Namentenga"
		},
		27 : {
			code : "NAY",
			name : "Nayala"
		},
		28 : {
			code : "NOU",
			name : "Noumbiel"
		},
		29 : {
			code : "OUB",
			name : "Oubritenga"
		},
		30 : {
			code : "OUD",
			name : "Oudalan"
		},
		31 : {
			code : "PAS",
			name : "Passore"
		},
		32 : {
			code : "PON",
			name : "Poni"
		},
		33 : {
			code : "SAG",
			name : "Sanguie"
		},
		34 : {
			code : "SAM",
			name : "Sanmatenga"
		},
		35 : {
			code : "SEN",
			name : "Seno"
		},
		36 : {
			code : "SIS",
			name : "Sissili"
		},
		37 : {
			code : "SOM",
			name : "Soum"
		},
		38 : {
			code : "SOR",
			name : "Sourou"
		},
		39 : {
			code : "TAP",
			name : "Tapoa"
		},
		40 : {
			code : "TUY",
			name : "Tuy"
		},
		41 : {
			code : "YAG",
			name : "Yagha"
		},
		42 : {
			code : "YAT",
			name : "Yatenga"
		},
		43 : {
			code : "ZIR",
			name : "Ziro"
		},
		44 : {
			code : "ZOD",
			name : "Zondoma"
		},
		45 : {
			code : "ZOW",
			name : "Zoundweogo"
		}
	},
	BI : {
		1 : {
			code : "BB",
			name : "Bubanza"
		},
		2 : {
			code : "BJ",
			name : "Bujumbura"
		},
		3 : {
			code : "BR",
			name : "Bururi"
		},
		4 : {
			code : "CA",
			name : "Cankuzo"
		},
		5 : {
			code : "CI",
			name : "Cibitoke"
		},
		6 : {
			code : "GI",
			name : "Gitega"
		},
		7 : {
			code : "KR",
			name : "Karuzi"
		},
		8 : {
			code : "KY",
			name : "Kayanza"
		},
		9 : {
			code : "KI",
			name : "Kirundo"
		},
		10 : {
			code : "MA",
			name : "Makamba"
		},
		11 : {
			code : "MU",
			name : "Muramvya"
		},
		12 : {
			code : "MY",
			name : "Muyinga"
		},
		13 : {
			code : "MW",
			name : "Mwaro"
		},
		14 : {
			code : "NG",
			name : "Ngozi"
		},
		15 : {
			code : "RT",
			name : "Rutana"
		},
		16 : {
			code : "RY",
			name : "Ruyigi"
		}
	},
	KH : {
		1 : {
			code : "BA",
			name : "Battambang"
		},
		2 : {
			code : "BM",
			name : "Banteay Meanchey"
		},
		3 : {
			code : "KB",
			name : "Keb"
		},
		4 : {
			code : "KK",
			name : "Kaoh Kong"
		},
		5 : {
			code : "KL",
			name : "Kandal"
		},
		6 : {
			code : "KM",
			name : "Kampong Cham"
		},
		7 : {
			code : "KN",
			name : "Kampong Chhnang"
		},
		8 : {
			code : "KO",
			name : "Kampong Som"
		},
		9 : {
			code : "KP",
			name : "Kampot"
		},
		10 : {
			code : "KR",
			name : "Kratie"
		},
		11 : {
			code : "KT",
			name : "Kampong Thom"
		},
		12 : {
			code : "KU",
			name : "Kampong Speu"
		},
		13 : {
			code : "MK",
			name : "Mondul Kiri"
		},
		14 : {
			code : "OM",
			name : "Oddar Meancheay"
		},
		15 : {
			code : "PA",
			name : "Pailin"
		},
		16 : {
			code : "PG",
			name : "Prey Veng"
		},
		17 : {
			code : "PP",
			name : "Phnom Penh"
		},
		18 : {
			code : "PR",
			name : "Preah Vihear"
		},
		19 : {
			code : "PS",
			name : "Preah Seihanu (Kompong Som or Si)"
		},
		20 : {
			code : "PU",
			name : "Pursat"
		},
		21 : {
			code : "RK",
			name : "Ratanak Kiri"
		},
		22 : {
			code : "SI",
			name : "Siemreap"
		},
		23 : {
			code : "SR",
			name : "Svay Rieng"
		},
		24 : {
			code : "ST",
			name : "Stung Treng"
		},
		25 : {
			code : "TK",
			name : "Takeo"
		}
	},
	CM : {
		1 : {
			code : "ADA",
			name : "Adamawa (Adamaoua)"
		},
		2 : {
			code : "CEN",
			name : "Centre"
		},
		3 : {
			code : "EST",
			name : "East (Est)"
		},
		4 : {
			code : "EXN",
			name : "ExtrÃªme-Nord"
		},
		5 : {
			code : "LIT",
			name : "Littoral"
		},
		6 : {
			code : "NOR",
			name : "North (Nord)"
		},
		7 : {
			code : "NOT",
			name : "Northwest (Nord-Ouest)"
		},
		8 : {
			code : "OUE",
			name : "West (Ouest)"
		},
		9 : {
			code : "SUD",
			name : "South (Sud)"
		},
		10 : {
			code : "SOU",
			name : "Southwest (Sud-Ouest)"
		}
	},
	CA : {
		1 : {
			code : "AB",
			name : "Alberta"
		},
		2 : {
			code : "BC",
			name : "British Columbia"
		},
		3 : {
			code : "MB",
			name : "Manitoba"
		},
		4 : {
			code : "NB",
			name : "New Brunswick"
		},
		5 : {
			code : "NL",
			name : "Newfoundland and Labrador"
		},
		6 : {
			code : "NT",
			name : "Northwest Territories"
		},
		7 : {
			code : "NS",
			name : "Nova Scotia"
		},
		8 : {
			code : "NU",
			name : "Nunavut"
		},
		9 : {
			code : "ON",
			name : "Ontario"
		},
		10 : {
			code : "PE",
			name : "Prince Edward Island"
		},
		11 : {
			code : "QC",
			name : "QuÃ©bec"
		},
		12 : {
			code : "SK",
			name : "Saskatchewan"
		},
		13 : {
			code : "YT",
			name : "Yukon Territory"
		}
	},
	CV : {
		1 : {
			code : "BV",
			name : "Boa Vista"
		},
		2 : {
			code : "BR",
			name : "Brava"
		},
		3 : {
			code : "CS",
			name : "Calheta de Sao Miguel"
		},
		4 : {
			code : "MA",
			name : "Maio"
		},
		5 : {
			code : "MO",
			name : "Mosteiros"
		},
		6 : {
			code : "PA",
			name : "Paul"
		},
		7 : {
			code : "PN",
			name : "Porto Novo"
		},
		8 : {
			code : "PR",
			name : "Praia"
		},
		9 : {
			code : "RG",
			name : "Ribeira Grande"
		},
		10 : {
			code : "SL",
			name : "Sal"
		},
		11 : {
			code : "CA",
			name : "Santa Catarina"
		},
		12 : {
			code : "CR",
			name : "Santa Cruz"
		},
		13 : {
			code : "SD",
			name : "Sao Domingos"
		},
		14 : {
			code : "SF",
			name : "Sao Filipe"
		},
		15 : {
			code : "SN",
			name : "Sao Nicolau"
		},
		16 : {
			code : "SV",
			name : "Sao Vicente"
		},
		17 : {
			code : "TA",
			name : "Tarrafal"
		}
	},
	KY : {
		1 : {
			code : "CR",
			name : "Creek"
		},
		2 : {
			code : "EA",
			name : "Eastern"
		},
		3 : {
			code : "ML",
			name : "Midland"
		},
		4 : {
			code : "ST",
			name : "South Town"
		},
		5 : {
			code : "SP",
			name : "Spot Bay"
		},
		6 : {
			code : "SK",
			name : "Stake Bay"
		},
		7 : {
			code : "WD",
			name : "West End"
		},
		8 : {
			code : "WN",
			name : "Western"
		}
	},
	CF : {
		1 : {
			code : "BAN",
			name : "Bangui"
		},
		2 : {
			code : "BBA",
			name : "Bamingui-Bangoran"
		},
		3 : {
			code : "BKO",
			name : "Basse-Kotto"
		},
		4 : {
			code : "HKO",
			name : "Haute-Kotto"
		},
		5 : {
			code : "HMB",
			name : "Haut-Mbomou"
		},
		6 : {
			code : "KEM",
			name : "Kemo"
		},
		7 : {
			code : "LOB",
			name : "Lobaye"
		},
		8 : {
			code : "MBO",
			name : "Mbomou"
		},
		9 : {
			code : "MKD",
			name : "MambÃ©rÃ©-KadÃ©Ã¯"
		},
		10 : {
			code : "NGR",
			name : "Nana-Grebizi"
		},
		11 : {
			code : "NMM",
			name : "Nana-Mambere"
		},
		12 : {
			code : "OMP",
			name : "Ombella-M'Poko"
		},
		13 : {
			code : "OPE",
			name : "Ouham-Pende"
		},
		14 : {
			code : "OUH",
			name : "Ouham"
		},
		15 : {
			code : "OUK",
			name : "Ouaka"
		},
		16 : {
			code : "SMB",
			name : "Sangha-Mbaere"
		},
		17 : {
			code : "VAK",
			name : "Vakaga"
		}
	},
	TD : {
		1 : {
			code : "BA",
			name : "Batha"
		},
		2 : {
			code : "BI",
			name : "Biltine"
		},
		3 : {
			code : "BE",
			name : "Borkou-Ennedi-Tibesti"
		},
		4 : {
			code : "CB",
			name : "Chari-Baguirmi"
		},
		5 : {
			code : "GU",
			name : "Guera"
		},
		6 : {
			code : "KA",
			name : "Kanem"
		},
		7 : {
			code : "LA",
			name : "Lac"
		},
		8 : {
			code : "LC",
			name : "Logone Occidental"
		},
		9 : {
			code : "LR",
			name : "Logone Oriental"
		},
		10 : {
			code : "MK",
			name : "Mayo-Kebbi"
		},
		11 : {
			code : "MC",
			name : "Moyen-Chari"
		},
		12 : {
			code : "OU",
			name : "Ouaddai"
		},
		13 : {
			code : "SA",
			name : "Salamat"
		},
		14 : {
			code : "TA",
			name : "Tandjile"
		}
	},
	CL : {
		1 : {
			code : "AI",
			name : "Aisen del General Carlos Ibanez"
		},
		2 : {
			code : "AN",
			name : "Antofagasta"
		},
		3 : {
			code : "AR",
			name : "Araucania"
		},
		4 : {
			code : "AT",
			name : "Atacama"
		},
		5 : {
			code : "BI",
			name : "Bio-Bio"
		},
		6 : {
			code : "CO",
			name : "Coquimbo"
		},
		7 : {
			code : "LI",
			name : "Libertador General Bernardo O'Hi"
		},
		8 : {
			code : "LL",
			name : "Los Lagos"
		},
		9 : {
			code : "MA",
			name : "Magallanes y de la Antartica Chi"
		},
		10 : {
			code : "ML",
			name : "Maule"
		},
		11 : {
			code : "RM",
			name : "Region Metropolitana"
		},
		12 : {
			code : "TA",
			name : "Tarapaca"
		},
		13 : {
			code : "VS",
			name : "Valparaiso"
		}
	},
	CN : {
		1 : {
			code : "AN",
			name : "Anhui"
		},
		2 : {
			code : "BE",
			name : "Beijing"
		},
		3 : {
			code : "CH",
			name : "Chongqing"
		},
		4 : {
			code : "FU",
			name : "Fujian"
		},
		5 : {
			code : "GA",
			name : "Gansu"
		},
		6 : {
			code : "GU",
			name : "Guangdong"
		},
		7 : {
			code : "GX",
			name : "Guangxi"
		},
		8 : {
			code : "GZ",
			name : "Guizhou"
		},
		9 : {
			code : "HA",
			name : "Hainan"
		},
		10 : {
			code : "HB",
			name : "Hebei"
		},
		11 : {
			code : "HL",
			name : "Heilongjiang"
		},
		12 : {
			code : "HE",
			name : "Henan"
		},
		13 : {
			code : "HK",
			name : "Hong Kong"
		},
		14 : {
			code : "HU",
			name : "Hubei"
		},
		15 : {
			code : "HN",
			name : "Hunan"
		},
		16 : {
			code : "IM",
			name : "Inner Mongolia"
		},
		17 : {
			code : "JI",
			name : "Jiangsu"
		},
		18 : {
			code : "JX",
			name : "Jiangxi"
		},
		19 : {
			code : "JL",
			name : "Jilin"
		},
		20 : {
			code : "LI",
			name : "Liaoning"
		},
		21 : {
			code : "MA",
			name : "Macau"
		},
		22 : {
			code : "NI",
			name : "Ningxia"
		},
		23 : {
			code : "SH",
			name : "Shaanxi"
		},
		24 : {
			code : "SA",
			name : "Shandong"
		},
		25 : {
			code : "SG",
			name : "Shanghai"
		},
		26 : {
			code : "SX",
			name : "Shanxi"
		},
		27 : {
			code : "SI",
			name : "Sichuan"
		},
		28 : {
			code : "TI",
			name : "Tianjin"
		},
		29 : {
			code : "XI",
			name : "Xinjiang"
		},
		30 : {
			code : "YU",
			name : "Yunnan"
		},
		31 : {
			code : "ZH",
			name : "Zhejiang"
		}
	},
	CC : {
		1 : {
			code : "D",
			name : "Direction Island"
		},
		2 : {
			code : "H",
			name : "Home Island"
		},
		3 : {
			code : "O",
			name : "Horsburgh Island"
		},
		4 : {
			code : "S",
			name : "South Island"
		},
		5 : {
			code : "W",
			name : "West Island"
		}
	},
	CO : {
		1 : {
			code : "AMZ",
			name : "Amazonas"
		},
		2 : {
			code : "ANT",
			name : "Antioquia"
		},
		3 : {
			code : "ARA",
			name : "Arauca"
		},
		4 : {
			code : "ATL",
			name : "Atlantico"
		},
		5 : {
			code : "BDC",
			name : "Bogota D.C."
		},
		6 : {
			code : "BOL",
			name : "Bolivar"
		},
		7 : {
			code : "BOY",
			name : "Boyaca"
		},
		8 : {
			code : "CAL",
			name : "Caldas"
		},
		9 : {
			code : "CAQ",
			name : "Caqueta"
		},
		10 : {
			code : "CAS",
			name : "Casanare"
		},
		11 : {
			code : "CAU",
			name : "Cauca"
		},
		12 : {
			code : "CES",
			name : "Cesar"
		},
		13 : {
			code : "CHO",
			name : "Choco"
		},
		14 : {
			code : "COR",
			name : "Cordoba"
		},
		15 : {
			code : "CAM",
			name : "Cundinamarca"
		},
		16 : {
			code : "GNA",
			name : "Guainia"
		},
		17 : {
			code : "GJR",
			name : "Guajira"
		},
		18 : {
			code : "GVR",
			name : "Guaviare"
		},
		19 : {
			code : "HUI",
			name : "Huila"
		},
		20 : {
			code : "MAG",
			name : "Magdalena"
		},
		21 : {
			code : "MET",
			name : "Meta"
		},
		22 : {
			code : "NAR",
			name : "Narino"
		},
		23 : {
			code : "NDS",
			name : "Norte de Santander"
		},
		24 : {
			code : "PUT",
			name : "Putumayo"
		},
		25 : {
			code : "QUI",
			name : "Quindio"
		},
		26 : {
			code : "RIS",
			name : "Risaralda"
		},
		27 : {
			code : "SAP",
			name : "San Andres y Providencia"
		},
		28 : {
			code : "SAN",
			name : "Santander"
		},
		29 : {
			code : "SUC",
			name : "Sucre"
		},
		30 : {
			code : "TOL",
			name : "Tolima"
		},
		31 : {
			code : "VDC",
			name : "Valle del Cauca"
		},
		32 : {
			code : "VAU",
			name : "Vaupes"
		},
		33 : {
			code : "VIC",
			name : "Vichada"
		}
	},
	KM : {
		1 : {
			code : "G",
			name : "Grande Comore"
		},
		2 : {
			code : "A",
			name : "Anjouan"
		},
		3 : {
			code : "M",
			name : "Moheli"
		}
	},
	CG : {
		1 : {
			code : "BO",
			name : "Bouenza"
		},
		2 : {
			code : "BR",
			name : "Brazzaville"
		},
		3 : {
			code : "CU",
			name : "Cuvette"
		},
		4 : {
			code : "CO",
			name : "Cuvette-Ouest"
		},
		5 : {
			code : "KO",
			name : "Kouilou"
		},
		6 : {
			code : "LE",
			name : "Lekoumou"
		},
		7 : {
			code : "LI",
			name : "Likouala"
		},
		8 : {
			code : "NI",
			name : "Niari"
		},
		9 : {
			code : "PL",
			name : "Plateaux"
		},
		10 : {
			code : "PO",
			name : "Pool"
		},
		11 : {
			code : "SA",
			name : "Sangha"
		}
	},
	CK : {
		1 : {
			code : "AI",
			name : "Aitutaki"
		},
		2 : {
			code : "AT",
			name : "Atiu"
		},
		3 : {
			code : "MA",
			name : "Manuae"
		},
		4 : {
			code : "MG",
			name : "Mangaia"
		},
		5 : {
			code : "MK",
			name : "Manihiki"
		},
		6 : {
			code : "MT",
			name : "Mitiaro"
		},
		7 : {
			code : "MU",
			name : "Mauke"
		},
		8 : {
			code : "NI",
			name : "Nassau Island"
		},
		9 : {
			code : "PA",
			name : "Palmerston"
		},
		10 : {
			code : "PE",
			name : "Penrhyn"
		},
		11 : {
			code : "PU",
			name : "Pukapuka"
		},
		12 : {
			code : "RK",
			name : "Rakahanga"
		},
		13 : {
			code : "RR",
			name : "Rarotonga"
		},
		14 : {
			code : "SU",
			name : "Surwarrow"
		},
		15 : {
			code : "TA",
			name : "Takutea"
		}
	},
	CR : {
		1 : {
			code : "AL",
			name : "Alajuela"
		},
		2 : {
			code : "CA",
			name : "Cartago"
		},
		3 : {
			code : "GU",
			name : "Guanacaste"
		},
		4 : {
			code : "HE",
			name : "Heredia"
		},
		5 : {
			code : "LI",
			name : "Limon"
		},
		6 : {
			code : "PU",
			name : "Puntarenas"
		},
		7 : {
			code : "SJ",
			name : "San Jose"
		}
	},
	CI : {
		1 : {
			code : "ABE",
			name : "Abengourou"
		},
		2 : {
			code : "ABI",
			name : "Abidjan"
		},
		3 : {
			code : "ABO",
			name : "Aboisso"
		},
		4 : {
			code : "ADI",
			name : "Adiake"
		},
		5 : {
			code : "ADZ",
			name : "Adzope"
		},
		6 : {
			code : "AGB",
			name : "Agboville"
		},
		7 : {
			code : "AGN",
			name : "Agnibilekrou"
		},
		8 : {
			code : "ALE",
			name : "Alepe"
		},
		9 : {
			code : "BOC",
			name : "Bocanda"
		},
		10 : {
			code : "BAN",
			name : "Bangolo"
		},
		11 : {
			code : "BEO",
			name : "Beoumi"
		},
		12 : {
			code : "BIA",
			name : "Biankouma"
		},
		13 : {
			code : "BDK",
			name : "Bondoukou"
		},
		14 : {
			code : "BGN",
			name : "Bongouanou"
		},
		15 : {
			code : "BFL",
			name : "Bouafle"
		},
		16 : {
			code : "BKE",
			name : "Bouake"
		},
		17 : {
			code : "BNA",
			name : "Bouna"
		},
		18 : {
			code : "BDL",
			name : "Boundiali"
		},
		19 : {
			code : "DKL",
			name : "Dabakala"
		},
		20 : {
			code : "DBU",
			name : "Dabou"
		},
		21 : {
			code : "DAL",
			name : "Daloa"
		},
		22 : {
			code : "DAN",
			name : "Danane"
		},
		23 : {
			code : "DAO",
			name : "Daoukro"
		},
		24 : {
			code : "DIM",
			name : "Dimbokro"
		},
		25 : {
			code : "DIV",
			name : "Divo"
		},
		26 : {
			code : "DUE",
			name : "Duekoue"
		},
		27 : {
			code : "FER",
			name : "Ferkessedougou"
		},
		28 : {
			code : "GAG",
			name : "Gagnoa"
		},
		29 : {
			code : "GBA",
			name : "Grand-Bassam"
		},
		30 : {
			code : "GLA",
			name : "Grand-Lahou"
		},
		31 : {
			code : "GUI",
			name : "Guiglo"
		},
		32 : {
			code : "ISS",
			name : "Issia"
		},
		33 : {
			code : "JAC",
			name : "Jacqueville"
		},
		34 : {
			code : "KAT",
			name : "Katiola"
		},
		35 : {
			code : "KOR",
			name : "Korhogo"
		},
		36 : {
			code : "LAK",
			name : "Lakota"
		},
		37 : {
			code : "MAN",
			name : "Man"
		},
		38 : {
			code : "MKN",
			name : "Mankono"
		},
		39 : {
			code : "MBA",
			name : "Mbahiakro"
		},
		40 : {
			code : "ODI",
			name : "Odienne"
		},
		41 : {
			code : "OUM",
			name : "Oume"
		},
		42 : {
			code : "SAK",
			name : "Sakassou"
		},
		43 : {
			code : "SPE",
			name : "San-Pedro"
		},
		44 : {
			code : "SAS",
			name : "Sassandra"
		},
		45 : {
			code : "SEG",
			name : "Seguela"
		},
		46 : {
			code : "SIN",
			name : "Sinfra"
		},
		47 : {
			code : "SOU",
			name : "Soubre"
		},
		48 : {
			code : "TAB",
			name : "Tabou"
		},
		49 : {
			code : "TAN",
			name : "Tanda"
		},
		50 : {
			code : "TIE",
			name : "Tiebissou"
		},
		51 : {
			code : "TIN",
			name : "Tingrela"
		},
		52 : {
			code : "TIA",
			name : "Tiassale"
		},
		53 : {
			code : "TBA",
			name : "Touba"
		},
		54 : {
			code : "TLP",
			name : "Toulepleu"
		},
		55 : {
			code : "TMD",
			name : "Toumodi"
		},
		56 : {
			code : "VAV",
			name : "Vavoua"
		},
		57 : {
			code : "YAM",
			name : "Yamoussoukro"
		},
		58 : {
			code : "ZUE",
			name : "Zuenoula"
		}
	},
	HR : {
		1 : {
			code : "BB",
			name : "Bjelovar-Bilogora"
		},
		2 : {
			code : "CZ",
			name : "City of Zagreb"
		},
		3 : {
			code : "DN",
			name : "Dubrovnik-Neretva"
		},
		4 : {
			code : "IS",
			name : "Istra"
		},
		5 : {
			code : "KA",
			name : "Karlovac"
		},
		6 : {
			code : "KK",
			name : "Koprivnica-Krizevci"
		},
		7 : {
			code : "KZ",
			name : "Krapina-Zagorje"
		},
		8 : {
			code : "LS",
			name : "Lika-Senj"
		},
		9 : {
			code : "ME",
			name : "Medimurje"
		},
		10 : {
			code : "OB",
			name : "Osijek-Baranja"
		},
		11 : {
			code : "PS",
			name : "Pozega-Slavonia"
		},
		12 : {
			code : "PG",
			name : "Primorje-Gorski Kotar"
		},
		13 : {
			code : "SI",
			name : "Sibenik"
		},
		14 : {
			code : "SM",
			name : "Sisak-Moslavina"
		},
		15 : {
			code : "SB",
			name : "Slavonski Brod-Posavina"
		},
		16 : {
			code : "SD",
			name : "Split-Dalmatia"
		},
		17 : {
			code : "VA",
			name : "Varazdin"
		},
		18 : {
			code : "VP",
			name : "Virovitica-Podravina"
		},
		19 : {
			code : "VS",
			name : "Vukovar-Srijem"
		},
		20 : {
			code : "ZK",
			name : "Zadar-Knin"
		},
		21 : {
			code : "ZA",
			name : "Zagreb"
		}
	},
	CU : {
		1 : {
			code : "CA",
			name : "Camaguey"
		},
		2 : {
			code : "CD",
			name : "Ciego de Avila"
		},
		3 : {
			code : "CI",
			name : "Cienfuegos"
		},
		4 : {
			code : "CH",
			name : "Ciudad de La Habana"
		},
		5 : {
			code : "GR",
			name : "Granma"
		},
		6 : {
			code : "GU",
			name : "Guantanamo"
		},
		7 : {
			code : "HO",
			name : "Holguin"
		},
		8 : {
			code : "IJ",
			name : "Isla de la Juventud"
		},
		9 : {
			code : "LH",
			name : "La Habana"
		},
		10 : {
			code : "LT",
			name : "Las Tunas"
		},
		11 : {
			code : "MA",
			name : "Matanzas"
		},
		12 : {
			code : "PR",
			name : "Pinar del Rio"
		},
		13 : {
			code : "SS",
			name : "Sancti Spiritus"
		},
		14 : {
			code : "SC",
			name : "Santiago de Cuba"
		},
		15 : {
			code : "VC",
			name : "Villa Clara"
		}
	},
	CY : {
		1 : {
			code : "F",
			name : "Famagusta"
		},
		2 : {
			code : "K",
			name : "Kyrenia"
		},
		3 : {
			code : "A",
			name : "Larnaca"
		},
		4 : {
			code : "I",
			name : "Limassol"
		},
		5 : {
			code : "N",
			name : "Nicosia"
		},
		6 : {
			code : "P",
			name : "Paphos"
		}
	},
	CZ : {
		1 : {
			code : "A",
			name : "HlavnÃ­ mÄ›sto Praha"
		},
		2 : {
			code : "B",
			name : "JihomoravskÃ½"
		},
		3 : {
			code : "C",
			name : "JihoÄeskÃ½"
		},
		4 : {
			code : "E",
			name : "PardubickÃ½"
		},
		5 : {
			code : "H",
			name : "KrÃ¡lovÃ©hradeckÃ½"
		},
		6 : {
			code : "J",
			name : "VysoÄina"
		},
		7 : {
			code : "K",
			name : "KarlovarskÃ½"
		},
		8 : {
			code : "L",
			name : "LibereckÃ½"
		},
		9 : {
			code : "M",
			name : "OlomouckÃ½"
		},
		10 : {
			code : "P",
			name : "PlzeÅˆskÃ½"
		},
		11 : {
			code : "S",
			name : "StÅ™edoÄeskÃ½"
		},
		12 : {
			code : "T",
			name : "MoravskoslezskÃ½"
		},
		13 : {
			code : "U",
			name : "ÃšsteckÃ½"
		},
		14 : {
			code : "Z",
			name : "ZlÃ­nskÃ½"
		}
	},
	DK : {
		1 : {
			code : "AR",
			name : "Arhus"
		},
		2 : {
			code : "BH",
			name : "Bornholm"
		},
		3 : {
			code : "CO",
			name : "Copenhagen"
		},
		4 : {
			code : "FO",
			name : "Faroe Islands"
		},
		5 : {
			code : "FR",
			name : "Frederiksborg"
		},
		6 : {
			code : "FY",
			name : "Fyn"
		},
		7 : {
			code : "KO",
			name : "Kobenhavn"
		},
		8 : {
			code : "NO",
			name : "Nordjylland"
		},
		9 : {
			code : "RI",
			name : "Ribe"
		},
		10 : {
			code : "RK",
			name : "Ringkobing"
		},
		11 : {
			code : "RO",
			name : "Roskilde"
		},
		12 : {
			code : "SO",
			name : "Sonderjylland"
		},
		13 : {
			code : "ST",
			name : "Storstrom"
		},
		14 : {
			code : "VK",
			name : "Vejle"
		},
		15 : {
			code : "VJ",
			name : "VestjÃ¦lland"
		},
		16 : {
			code : "VB",
			name : "Viborg"
		}
	},
	DJ : {
		1 : {
			code : "S",
			name : "'Ali Sabih"
		},
		2 : {
			code : "K",
			name : "Dikhil"
		},
		3 : {
			code : "J",
			name : "Djibouti"
		},
		4 : {
			code : "O",
			name : "Obock"
		},
		5 : {
			code : "T",
			name : "Tadjoura"
		}
	},
	DM : {
		1 : {
			code : "AND",
			name : "Saint Andrew Parish"
		},
		2 : {
			code : "DAV",
			name : "Saint David Parish"
		},
		3 : {
			code : "GEO",
			name : "Saint George Parish"
		},
		4 : {
			code : "JOH",
			name : "Saint John Parish"
		},
		5 : {
			code : "JOS",
			name : "Saint Joseph Parish"
		},
		6 : {
			code : "LUK",
			name : "Saint Luke Parish"
		},
		7 : {
			code : "MAR",
			name : "Saint Mark Parish"
		},
		8 : {
			code : "PAT",
			name : "Saint Patrick Parish"
		},
		9 : {
			code : "PAU",
			name : "Saint Paul Parish"
		},
		10 : {
			code : "PET",
			name : "Saint Peter Parish"
		}
	},
	DO : {
		1 : {
			code : "DN",
			name : "Distrito Nacional"
		},
		2 : {
			code : "AZ",
			name : "Azua"
		},
		3 : {
			code : "BC",
			name : "Baoruco"
		},
		4 : {
			code : "BH",
			name : "Barahona"
		},
		5 : {
			code : "DJ",
			name : "Dajabon"
		},
		6 : {
			code : "DU",
			name : "Duarte"
		},
		7 : {
			code : "EL",
			name : "Elias Pina"
		},
		8 : {
			code : "SY",
			name : "El Seybo"
		},
		9 : {
			code : "ET",
			name : "Espaillat"
		},
		10 : {
			code : "HM",
			name : "Hato Mayor"
		},
		11 : {
			code : "IN",
			name : "Independencia"
		},
		12 : {
			code : "AL",
			name : "La Altagracia"
		},
		13 : {
			code : "RO",
			name : "La Romana"
		},
		14 : {
			code : "VE",
			name : "La Vega"
		},
		15 : {
			code : "MT",
			name : "Maria Trinidad Sanchez"
		},
		16 : {
			code : "MN",
			name : "Monsenor Nouel"
		},
		17 : {
			code : "MC",
			name : "Monte Cristi"
		},
		18 : {
			code : "MP",
			name : "Monte Plata"
		},
		19 : {
			code : "PD",
			name : "Pedernales"
		},
		20 : {
			code : "PR",
			name : "Peravia (Bani)"
		},
		21 : {
			code : "PP",
			name : "Puerto Plata"
		},
		22 : {
			code : "SL",
			name : "Salcedo"
		},
		23 : {
			code : "SM",
			name : "Samana"
		},
		24 : {
			code : "SH",
			name : "Sanchez Ramirez"
		},
		25 : {
			code : "SC",
			name : "San Cristobal"
		},
		26 : {
			code : "JO",
			name : "San Jose de Ocoa"
		},
		27 : {
			code : "SJ",
			name : "San Juan"
		},
		28 : {
			code : "PM",
			name : "San Pedro de Macoris"
		},
		29 : {
			code : "SA",
			name : "Santiago"
		},
		30 : {
			code : "ST",
			name : "Santiago Rodriguez"
		},
		31 : {
			code : "SD",
			name : "Santo Domingo"
		},
		32 : {
			code : "VA",
			name : "Valverde"
		}
	},
	TP : {
		1 : {
			code : "AL",
			name : "Aileu"
		},
		2 : {
			code : "AN",
			name : "Ainaro"
		},
		3 : {
			code : "BA",
			name : "Baucau"
		},
		4 : {
			code : "BO",
			name : "Bobonaro"
		},
		5 : {
			code : "CO",
			name : "Cova Lima"
		},
		6 : {
			code : "DI",
			name : "Dili"
		},
		7 : {
			code : "ER",
			name : "Ermera"
		},
		8 : {
			code : "LA",
			name : "Lautem"
		},
		9 : {
			code : "LI",
			name : "Liquica"
		},
		10 : {
			code : "MT",
			name : "Manatuto"
		},
		11 : {
			code : "MF",
			name : "Manufahi"
		},
		12 : {
			code : "OE",
			name : "Oecussi"
		},
		13 : {
			code : "VI",
			name : "Viqueque"
		}
	},
	EC : {
		1 : {
			code : "AZU",
			name : "Azuay"
		},
		2 : {
			code : "BOL",
			name : "Bolivar"
		},
		3 : {
			code : "CAN",
			name : "CaÃ±ar"
		},
		4 : {
			code : "CAR",
			name : "Carchi"
		},
		5 : {
			code : "CHI",
			name : "Chimborazo"
		},
		6 : {
			code : "COT",
			name : "Cotopaxi"
		},
		7 : {
			code : "EOR",
			name : "El Oro"
		},
		8 : {
			code : "ESM",
			name : "Esmeraldas"
		},
		9 : {
			code : "GPS",
			name : "GalÃ¡pagos"
		},
		10 : {
			code : "GUA",
			name : "Guayas"
		},
		11 : {
			code : "IMB",
			name : "Imbabura"
		},
		12 : {
			code : "LOJ",
			name : "Loja"
		},
		13 : {
			code : "LRO",
			name : "Los RÃ­os"
		},
		14 : {
			code : "MAN",
			name : "ManabÃ­"
		},
		15 : {
			code : "MSA",
			name : "Morona Santiago"
		},
		16 : {
			code : "NAP",
			name : "Napo"
		},
		17 : {
			code : "ORE",
			name : "Orellana"
		},
		18 : {
			code : "PAS",
			name : "Pastaza"
		},
		19 : {
			code : "PIC",
			name : "Pichincha"
		},
		20 : {
			code : "SUC",
			name : "SucumbÃ­os"
		},
		21 : {
			code : "TUN",
			name : "Tungurahua"
		},
		22 : {
			code : "ZCH",
			name : "Zamora Chinchipe"
		}
	},
	EG : {
		1 : {
			code : "DHY",
			name : "Ad Daqahliyah"
		},
		2 : {
			code : "BAM",
			name : "Al Bahr al Ahmar"
		},
		3 : {
			code : "BHY",
			name : "Al Buhayrah"
		},
		4 : {
			code : "FYM",
			name : "Al Fayyum"
		},
		5 : {
			code : "GBY",
			name : "Al Gharbiyah"
		},
		6 : {
			code : "IDR",
			name : "Al Iskandariyah"
		},
		7 : {
			code : "IML",
			name : "Al Isma 'iliyah"
		},
		8 : {
			code : "JZH",
			name : "Al Jizah"
		},
		9 : {
			code : "MFY",
			name : "Al Minufiyah"
		},
		10 : {
			code : "MNY",
			name : "Al Minya"
		},
		11 : {
			code : "QHR",
			name : "Al Qahirah"
		},
		12 : {
			code : "QLY",
			name : "Al Qalyubiyah"
		},
		13 : {
			code : "WJD",
			name : "Al Wadi al Jadid"
		},
		14 : {
			code : "SHQ",
			name : "Ash Sharqiyah"
		},
		15 : {
			code : "SWY",
			name : "As Suways"
		},
		16 : {
			code : "ASW",
			name : "Aswan"
		},
		17 : {
			code : "ASY",
			name : "Asyut"
		},
		18 : {
			code : "BSW",
			name : "Bani Suwayf"
		},
		19 : {
			code : "BSD",
			name : "Bur Sa'id"
		},
		20 : {
			code : "DMY",
			name : "Dumyat"
		},
		21 : {
			code : "JNS",
			name : "Janub Sina'"
		},
		22 : {
			code : "KSH",
			name : "Kafr ash Shaykh"
		},
		23 : {
			code : "MAT",
			name : "Matruh"
		},
		24 : {
			code : "QIN",
			name : "Qina"
		},
		25 : {
			code : "SHS",
			name : "Shamal Sina'"
		},
		26 : {
			code : "SUH",
			name : "Suhaj"
		}
	},
	SV : {
		1 : {
			code : "AH",
			name : "Ahuachapan"
		},
		2 : {
			code : "CA",
			name : "Cabanas"
		},
		3 : {
			code : "CH",
			name : "Chalatenango"
		},
		4 : {
			code : "CU",
			name : "Cuscatlan"
		},
		5 : {
			code : "LB",
			name : "La Libertad"
		},
		6 : {
			code : "PZ",
			name : "La Paz"
		},
		7 : {
			code : "UN",
			name : "La Union"
		},
		8 : {
			code : "MO",
			name : "Morazan"
		},
		9 : {
			code : "SM",
			name : "San Miguel"
		},
		10 : {
			code : "SS",
			name : "San Salvador"
		},
		11 : {
			code : "SV",
			name : "San Vicente"
		},
		12 : {
			code : "SA",
			name : "Santa Ana"
		},
		13 : {
			code : "SO",
			name : "Sonsonate"
		},
		14 : {
			code : "US",
			name : "Usulutan"
		}
	},
	GQ : {
		1 : {
			code : "AN",
			name : "Provincia Annobon"
		},
		2 : {
			code : "BN",
			name : "Provincia Bioko Norte"
		},
		3 : {
			code : "BS",
			name : "Provincia Bioko Sur"
		},
		4 : {
			code : "CS",
			name : "Provincia Centro Sur"
		},
		5 : {
			code : "KN",
			name : "Provincia Kie-Ntem"
		},
		6 : {
			code : "LI",
			name : "Provincia Litoral"
		},
		7 : {
			code : "WN",
			name : "Provincia Wele-Nzas"
		}
	},
	ER : {
		1 : {
			code : "MA",
			name : "Central (Maekel)"
		},
		2 : {
			code : "KE",
			name : "Anseba (Keren)"
		},
		3 : {
			code : "DK",
			name : "Southern Red Sea (Debub-Keih-Bah)"
		},
		4 : {
			code : "SK",
			name : "Northern Red Sea (Semien-Keih-Ba)"
		},
		5 : {
			code : "DE",
			name : "Southern (Debub)"
		},
		6 : {
			code : "BR",
			name : "Gash-Barka (Barentu)"
		}
	},
	EE : {
		1 : {
			code : "HA",
			name : "Harjumaa (Tallinn)"
		},
		2 : {
			code : "HI",
			name : "Hiiumaa (Kardla)"
		},
		3 : {
			code : "IV",
			name : "Ida-Virumaa (Johvi)"
		},
		4 : {
			code : "JA",
			name : "Jarvamaa (Paide)"
		},
		5 : {
			code : "JO",
			name : "Jogevamaa (Jogeva)"
		},
		6 : {
			code : "LV",
			name : "Laane-Virumaa (Rakvere)"
		},
		7 : {
			code : "LA",
			name : "Laanemaa (Haapsalu)"
		},
		8 : {
			code : "PA",
			name : "Parnumaa (Parnu)"
		},
		9 : {
			code : "PO",
			name : "Polvamaa (Polva)"
		},
		10 : {
			code : "RA",
			name : "Raplamaa (Rapla)"
		},
		11 : {
			code : "SA",
			name : "Saaremaa (Kuessaare)"
		},
		12 : {
			code : "TA",
			name : "Tartumaa (Tartu)"
		},
		13 : {
			code : "VA",
			name : "Valgamaa (Valga)"
		},
		14 : {
			code : "VI",
			name : "Viljandimaa (Viljandi)"
		},
		15 : {
			code : "VO",
			name : "Vorumaa (Voru)"
		}
	},
	ET : {
		1 : {
			code : "AF",
			name : "Afar"
		},
		2 : {
			code : "AH",
			name : "Amhara"
		},
		3 : {
			code : "BG",
			name : "Benishangul-Gumaz"
		},
		4 : {
			code : "GB",
			name : "Gambela"
		},
		5 : {
			code : "HR",
			name : "Hariai"
		},
		6 : {
			code : "OR",
			name : "Oromia"
		},
		7 : {
			code : "SM",
			name : "Somali"
		},
		8 : {
			code : "SN",
			name : "Southern Nations - Nationalities"
		},
		9 : {
			code : "TG",
			name : "Tigray"
		},
		10 : {
			code : "AA",
			name : "Addis Ababa"
		},
		11 : {
			code : "DD",
			name : "Dire Dawa"
		}
	},
	FO : {
		1 : {
			code : "TÃ›R",
			name : "TÃ»rshavnar Kommuna"
		},
		2 : {
			code : "KLA",
			name : "KlaksvÃ­k"
		},
		3 : {
			code : "RUN",
			name : "RunavÃ­k"
		},
		4 : {
			code : "TVÃ˜",
			name : "TvÃ¸royri"
		},
		5 : {
			code : "FUG",
			name : "FuglafjÃ¸rÃ°ur"
		},
		6 : {
			code : "SUN",
			name : "Sunda Kommuna"
		},
		7 : {
			code : "VÃ¡G",
			name : "VÃ¡gur"
		},
		8 : {
			code : "NES",
			name : "Nes"
		},
		9 : {
			code : "VES",
			name : "Vestmanna"
		},
		10 : {
			code : "MIÃ°",
			name : "MiÃ°vÃ¡gur"
		},
		11 : {
			code : "SÃ˜R",
			name : "SÃ¸rvÃ¡gur"
		},
		12 : {
			code : "GÃ˜T",
			name : "GÃ¸tu Kommuna"
		},
		13 : {
			code : "SJÃ»",
			name : "SjÃ»var Kommuna"
		},
		14 : {
			code : "LEI",
			name : "LeirvÃ­k"
		},
		15 : {
			code : "SAN",
			name : "SandavÃ¡gur"
		},
		16 : {
			code : "HVA",
			name : "Hvalba"
		},
		17 : {
			code : "EIÃ°",
			name : "EiÃ°i"
		},
		18 : {
			code : "KVÃ­",
			name : "KvÃ­vÃ­k"
		},
		19 : {
			code : "SAN",
			name : "Sandur"
		},
		20 : {
			code : "SKO",
			name : "Skopun"
		},
		21 : {
			code : "HVA",
			name : "Hvannasund"
		},
		22 : {
			code : "SUM",
			name : "Sumba"
		},
		23 : {
			code : "VIÃ°",
			name : "ViÃ°areiÃ°i"
		},
		24 : {
			code : "POR",
			name : "Porkeri"
		},
		25 : {
			code : "SKÃ¡",
			name : "SkÃ¡lavÃ­k"
		},
		26 : {
			code : "KUN",
			name : "Kunoy"
		},
		27 : {
			code : "HÃšS",
			name : "HÃšsavÃ­k"
		},
		28 : {
			code : "HOV",
			name : "Hov"
		},
		29 : {
			code : "FÃ¡M",
			name : "FÃ¡mjin"
		},
		30 : {
			code : "FUN",
			name : "Funningur"
		},
		31 : {
			code : "HÃšS",
			name : "HÃšsar"
		},
		32 : {
			code : "SKÃš",
			name : "SkÃšvoy"
		},
		33 : {
			code : "SVÃ­",
			name : "SvÃ­noy"
		},
		34 : {
			code : "FUG",
			name : "Fugloy"
		}
	},
	FJ : {
		1 : {
			code : "C",
			name : "Central Division"
		},
		2 : {
			code : "E",
			name : "Eastern Division"
		},
		3 : {
			code : "N",
			name : "Northern Division"
		},
		4 : {
			code : "R",
			name : "Rotuma"
		},
		5 : {
			code : "W",
			name : "Western Division"
		}
	},
	FI : {
		1 : {
			code : "AL",
			name : "Ahvenanmaan Laani"
		},
		2 : {
			code : "ES",
			name : "Etela-Suomen Laani"
		},
		3 : {
			code : "IS",
			name : "Ita-Suomen Laani"
		},
		4 : {
			code : "LS",
			name : "Lansi-Suomen Laani"
		},
		5 : {
			code : "LA",
			name : "Lapin Lanani"
		},
		6 : {
			code : "OU",
			name : "Oulun Laani"
		}
	},
	FR : {
		1 : {
			code : "AL",
			name : "Alsace"
		},
		2 : {
			code : "AQ",
			name : "Aquitaine"
		},
		3 : {
			code : "AU",
			name : "Auvergne"
		},
		4 : {
			code : "BR",
			name : "Brittany"
		},
		5 : {
			code : "BU",
			name : "Burgundy"
		},
		6 : {
			code : "CE",
			name : "Center Loire Valley"
		},
		7 : {
			code : "CH",
			name : "Champagne"
		},
		8 : {
			code : "CO",
			name : "Corse"
		},
		9 : {
			code : "FR",
			name : "France Comte"
		},
		10 : {
			code : "LA",
			name : "Languedoc Roussillon"
		},
		11 : {
			code : "LI",
			name : "Limousin"
		},
		12 : {
			code : "LO",
			name : "Lorraine"
		},
		13 : {
			code : "MI",
			name : "Midi Pyrenees"
		},
		14 : {
			code : "NO",
			name : "Nord Pas de Calais"
		},
		15 : {
			code : "NR",
			name : "Normandy"
		},
		16 : {
			code : "PA",
			name : "Paris"
		},
		17 : {
			code : "PI",
			name : "Picardie"
		},
		18 : {
			code : "PO",
			name : "Poitou Charente"
		},
		19 : {
			code : "PR",
			name : "Provence"
		},
		20 : {
			code : "RH",
			name : "Rhone Alps"
		},
		21 : {
			code : "RI",
			name : "Riviera"
		},
		22 : {
			code : "WE",
			name : "Western Loire Valley"
		}
	},
	FX : {
		1 : {
			code : "Et",
			name : "Etranger"
		},
		2 : {
			code : "01",
			name : "Ain"
		},
		3 : {
			code : "02",
			name : "Aisne"
		},
		4 : {
			code : "03",
			name : "Allier"
		},
		5 : {
			code : "04",
			name : "Alpes de Haute Provence"
		},
		6 : {
			code : "05",
			name : "Hautes-Alpes"
		},
		7 : {
			code : "06",
			name : "Alpes Maritimes"
		},
		8 : {
			code : "07",
			name : "ArdÃ¨che"
		},
		9 : {
			code : "08",
			name : "Ardennes"
		},
		10 : {
			code : "09",
			name : "AriÃ¨ge"
		},
		11 : {
			code : "10",
			name : "Aube"
		},
		12 : {
			code : "11",
			name : "Aude"
		},
		13 : {
			code : "12",
			name : "Aveyron"
		},
		14 : {
			code : "13",
			name : "Bouches du RhÃ´ne"
		},
		15 : {
			code : "14",
			name : "Calvados"
		},
		16 : {
			code : "15",
			name : "Cantal"
		},
		17 : {
			code : "16",
			name : "Charente"
		},
		18 : {
			code : "17",
			name : "Charente Maritime"
		},
		19 : {
			code : "18",
			name : "Cher"
		},
		20 : {
			code : "19",
			name : "CorrÃ¨ze"
		},
		21 : {
			code : "2A",
			name : "Corse du Sud"
		},
		22 : {
			code : "2B",
			name : "Haute Corse"
		},
		23 : {
			code : "21",
			name : "CÃ´te d'or"
		},
		24 : {
			code : "22",
			name : "CÃ´tes d'Armor"
		},
		25 : {
			code : "23",
			name : "Creuse"
		},
		26 : {
			code : "24",
			name : "Dordogne"
		},
		27 : {
			code : "25",
			name : "Doubs"
		},
		28 : {
			code : "26",
			name : "DrÃ´me"
		},
		29 : {
			code : "27",
			name : "Eure"
		},
		30 : {
			code : "28",
			name : "Eure et Loir"
		},
		31 : {
			code : "29",
			name : "FinistÃ¨re"
		},
		32 : {
			code : "30",
			name : "Gard"
		},
		33 : {
			code : "31",
			name : "Haute Garonne"
		},
		34 : {
			code : "32",
			name : "Gers"
		},
		35 : {
			code : "33",
			name : "Gironde"
		},
		36 : {
			code : "34",
			name : "HÃ©rault"
		},
		37 : {
			code : "35",
			name : "Ille et Vilaine"
		},
		38 : {
			code : "36",
			name : "Indre"
		},
		39 : {
			code : "37",
			name : "Indre et Loire"
		},
		40 : {
			code : "38",
			name : "IsÃ©re"
		},
		41 : {
			code : "39",
			name : "Jura"
		},
		42 : {
			code : "40",
			name : "Landes"
		},
		43 : {
			code : "41",
			name : "Loir et Cher"
		},
		44 : {
			code : "42",
			name : "Loire"
		},
		45 : {
			code : "43",
			name : "Haute Loire"
		},
		46 : {
			code : "44",
			name : "Loire Atlantique"
		},
		47 : {
			code : "45",
			name : "Loiret"
		},
		48 : {
			code : "46",
			name : "Lot"
		},
		49 : {
			code : "47",
			name : "Lot et Garonne"
		},
		50 : {
			code : "48",
			name : "LozÃ¨re"
		},
		51 : {
			code : "49",
			name : "Maine et Loire"
		},
		52 : {
			code : "50",
			name : "Manche"
		},
		53 : {
			code : "51",
			name : "Marne"
		},
		54 : {
			code : "52",
			name : "Haute Marne"
		},
		55 : {
			code : "53",
			name : "Mayenne"
		},
		56 : {
			code : "54",
			name : "Meurthe et Moselle"
		},
		57 : {
			code : "55",
			name : "Meuse"
		},
		58 : {
			code : "56",
			name : "Morbihan"
		},
		59 : {
			code : "57",
			name : "Moselle"
		},
		60 : {
			code : "58",
			name : "NiÃ¨vre"
		},
		61 : {
			code : "59",
			name : "Nord"
		},
		62 : {
			code : "60",
			name : "Oise"
		},
		63 : {
			code : "61",
			name : "Orne"
		},
		64 : {
			code : "62",
			name : "Pas de Calais"
		},
		65 : {
			code : "63",
			name : "Puy de DÃ´me"
		},
		66 : {
			code : "64",
			name : "Pyrenees Atlantique"
		},
		67 : {
			code : "65",
			name : "Hautes Pyrenees"
		},
		68 : {
			code : "66",
			name : "Pyrenees Orientale"
		},
		69 : {
			code : "67",
			name : "Bas Rhin"
		},
		70 : {
			code : "68",
			name : "Haut Rhin"
		},
		71 : {
			code : "69",
			name : "RhÃ´ne"
		},
		72 : {
			code : "70",
			name : "Haute SaÃ´ne"
		},
		73 : {
			code : "71",
			name : "SaÃ´ne et Loire"
		},
		74 : {
			code : "72",
			name : "Sarthe"
		},
		75 : {
			code : "73",
			name : "Savoie"
		},
		76 : {
			code : "74",
			name : "Haute Savoie"
		},
		77 : {
			code : "75",
			name : "Paris"
		},
		78 : {
			code : "76",
			name : "Seine Martitime"
		},
		79 : {
			code : "77",
			name : "Seine et Marne"
		},
		80 : {
			code : "78",
			name : "Yvelines"
		},
		81 : {
			code : "79",
			name : "Deux SÃ¨vres"
		},
		82 : {
			code : "80",
			name : "Somme"
		},
		83 : {
			code : "81",
			name : "Tarn"
		},
		84 : {
			code : "82",
			name : "Tarn et Garonne"
		},
		85 : {
			code : "83",
			name : "Var"
		},
		86 : {
			code : "84",
			name : "Vaucluse"
		},
		87 : {
			code : "85",
			name : "VendÃ©e"
		},
		88 : {
			code : "86",
			name : "Vienne"
		},
		89 : {
			code : "87",
			name : "Haute Vienne"
		},
		90 : {
			code : "88",
			name : "Vosges"
		},
		91 : {
			code : "89",
			name : "Yonne"
		},
		92 : {
			code : "90",
			name : "Territoire de Belfort"
		},
		93 : {
			code : "91",
			name : "Essonne"
		},
		94 : {
			code : "92",
			name : "Hauts de Seine"
		},
		95 : {
			code : "93",
			name : "Seine St-Denis"
		},
		96 : {
			code : "94",
			name : "Val de Marne"
		},
		97 : {
			code : "95",
			name : "Val d'oise"
		}
	},
	GF : {
		1 : {
			code : "AWA",
			name : "Awala-Yalimapo"
		},
		2 : {
			code : "MAN",
			name : "Mana"
		},
		3 : {
			code : "SAI",
			name : "Saint-Laurent-Du-Maroni"
		},
		4 : {
			code : "APA",
			name : "Apatou"
		},
		5 : {
			code : "GRA",
			name : "Grand-Santi"
		},
		6 : {
			code : "PAP",
			name : "PapaÃ¯chton"
		},
		7 : {
			code : "SAÃœ",
			name : "SaÃœl"
		},
		8 : {
			code : "MAR",
			name : "Maripasoula"
		},
		9 : {
			code : "CAM",
			name : "Camopi"
		},
		10 : {
			code : "SAI",
			name : "Saint-Georges"
		},
		11 : {
			code : "OUA",
			name : "Ouanary"
		},
		12 : {
			code : "RÃ©G",
			name : "RÃ©gina"
		},
		13 : {
			code : "ROU",
			name : "Roura"
		},
		14 : {
			code : "SAI",
			name : "Saint-Ã©lie"
		},
		15 : {
			code : "IRA",
			name : "Iracoubo"
		},
		16 : {
			code : "SIN",
			name : "Sinnamary"
		},
		17 : {
			code : "KOU",
			name : "Kourou"
		},
		18 : {
			code : "MAC",
			name : "Macouria"
		},
		19 : {
			code : "MON",
			name : "MontsinÃ©ry-Tonnegrande"
		},
		20 : {
			code : "MAT",
			name : "Matoury"
		},
		21 : {
			code : "CAY",
			name : "Cayenne"
		},
		22 : {
			code : "REM",
			name : "Remire-Montjoly"
		}
	},
	PF : {
		1 : {
			code : "M",
			name : "Archipel des Marquises"
		},
		2 : {
			code : "T",
			name : "Archipel des Tuamotu"
		},
		3 : {
			code : "I",
			name : "Archipel des Tubuai"
		},
		4 : {
			code : "V",
			name : "Iles du Vent"
		},
		5 : {
			code : "S",
			name : "Iles Sous-le-Vent"
		}
	},
	TF : {
		1 : {
			code : "C",
			name : "Iles Crozet"
		},
		2 : {
			code : "K",
			name : "Iles Kerguelen"
		},
		3 : {
			code : "A",
			name : "Ile Amsterdam"
		},
		4 : {
			code : "P",
			name : "Ile Saint-Paul"
		},
		5 : {
			code : "D",
			name : "Adelie Land"
		}
	},
	GA : {
		1 : {
			code : "ES",
			name : "Estuaire"
		},
		2 : {
			code : "HO",
			name : "Haut-Ogooue"
		},
		3 : {
			code : "MO",
			name : "Moyen-Ogooue"
		},
		4 : {
			code : "NG",
			name : "Ngounie"
		},
		5 : {
			code : "NY",
			name : "Nyanga"
		},
		6 : {
			code : "OI",
			name : "Ogooue-Ivindo"
		},
		7 : {
			code : "OL",
			name : "Ogooue-Lolo"
		},
		8 : {
			code : "OM",
			name : "Ogooue-Maritime"
		},
		9 : {
			code : "WN",
			name : "Woleu-Ntem"
		}
	},
	GM : {
		1 : {
			code : "BJ",
			name : "Banjul"
		},
		2 : {
			code : "BS",
			name : "Basse"
		},
		3 : {
			code : "BR",
			name : "Brikama"
		},
		4 : {
			code : "JA",
			name : "Janjangbure"
		},
		5 : {
			code : "KA",
			name : "Kanifeng"
		},
		6 : {
			code : "KE",
			name : "Kerewan"
		},
		7 : {
			code : "KU",
			name : "Kuntaur"
		},
		8 : {
			code : "MA",
			name : "Mansakonko"
		},
		9 : {
			code : "LR",
			name : "Lower River"
		},
		10 : {
			code : "CR",
			name : "Central River"
		},
		11 : {
			code : "NB",
			name : "North Bank"
		},
		12 : {
			code : "UR",
			name : "Upper River"
		},
		13 : {
			code : "WE",
			name : "Western"
		}
	},
	GE : {
		1 : {
			code : "AB",
			name : "Abkhazia"
		},
		2 : {
			code : "AJ",
			name : "Ajaria"
		},
		3 : {
			code : "GU",
			name : "Guria"
		},
		4 : {
			code : "IM",
			name : "Imereti"
		},
		5 : {
			code : "KA",
			name : "Kakheti"
		},
		6 : {
			code : "KK",
			name : "Kvemo Kartli"
		},
		7 : {
			code : "MM",
			name : "Mtskheta-Mtianeti"
		},
		8 : {
			code : "RL",
			name : "Racha Lechkhumi and Kvemo Svanet"
		},
		9 : {
			code : "SJ",
			name : "Samtskhe-Javakheti"
		},
		10 : {
			code : "SK",
			name : "Shida Kartli"
		},
		11 : {
			code : "SZ",
			name : "Samegrelo-Zemo Svaneti"
		},
		12 : {
			code : "TB",
			name : "Tbilisi"
		}
	},
	DE : {
		1 : {
			code : "BAW",
			name : "Baden-WÃ¼rttemberg"
		},
		2 : {
			code : "BAY",
			name : "Bayern"
		},
		3 : {
			code : "BER",
			name : "Berlin"
		},
		4 : {
			code : "BRG",
			name : "Brandenburg"
		},
		5 : {
			code : "BRE",
			name : "Bremen"
		},
		6 : {
			code : "HAM",
			name : "Hamburg"
		},
		7 : {
			code : "HES",
			name : "Hessen"
		},
		8 : {
			code : "MEC",
			name : "Mecklenburg-Vorpommern"
		},
		9 : {
			code : "NDS",
			name : "Niedersachsen"
		},
		10 : {
			code : "NRW",
			name : "Nordrhein-Westfalen"
		},
		11 : {
			code : "RHE",
			name : "Rheinland-Pfalz"
		},
		12 : {
			code : "SAR",
			name : "Saarland"
		},
		13 : {
			code : "SAS",
			name : "Sachsen"
		},
		14 : {
			code : "SAC",
			name : "Sachsen-Anhalt"
		},
		15 : {
			code : "SCN",
			name : "Schleswig-Holstein"
		},
		16 : {
			code : "THE",
			name : "ThÃ¼ringen"
		}
	},
	GH : {
		1 : {
			code : "AS",
			name : "Ashanti Region"
		},
		2 : {
			code : "BA",
			name : "Brong-Ahafo Region"
		},
		3 : {
			code : "CE",
			name : "Central Region"
		},
		4 : {
			code : "EA",
			name : "Eastern Region"
		},
		5 : {
			code : "GA",
			name : "Greater Accra Region"
		},
		6 : {
			code : "NO",
			name : "Northern Region"
		},
		7 : {
			code : "UE",
			name : "Upper East Region"
		},
		8 : {
			code : "UW",
			name : "Upper West Region"
		},
		9 : {
			code : "VO",
			name : "Volta Region"
		},
		10 : {
			code : "WE",
			name : "Western Region"
		}
	},
	GI : {
		1 : {
			code : "EAS",
			name : "East Side"
		},
		2 : {
			code : "NOR",
			name : "North District"
		},
		3 : {
			code : "REC",
			name : "Reclamation Areas"
		},
		4 : {
			code : "SAN",
			name : "Sandpits Area"
		},
		5 : {
			code : "SOU",
			name : "South District"
		},
		6 : {
			code : "TOW",
			name : "Town Area"
		},
		7 : {
			code : "UPP",
			name : "Upper Town"
		},
		8 : {
			code : "OTH",
			name : "Other"
		}
	},
	GR : {
		1 : {
			code : "AT",
			name : "Attica"
		},
		2 : {
			code : "CN",
			name : "Central Greece"
		},
		3 : {
			code : "CM",
			name : "Central Macedonia"
		},
		4 : {
			code : "CR",
			name : "Crete"
		},
		5 : {
			code : "EM",
			name : "East Macedonia and Thrace"
		},
		6 : {
			code : "EP",
			name : "Epirus"
		},
		7 : {
			code : "II",
			name : "Ionian Islands"
		},
		8 : {
			code : "NA",
			name : "North Aegean"
		},
		9 : {
			code : "PP",
			name : "Peloponnesos"
		},
		10 : {
			code : "SA",
			name : "South Aegean"
		},
		11 : {
			code : "TH",
			name : "Thessaly"
		},
		12 : {
			code : "WG",
			name : "West Greece"
		},
		13 : {
			code : "WM",
			name : "West Macedonia"
		}
	},
	GL : {
		1 : {
			code : "A",
			name : "Avannaa"
		},
		2 : {
			code : "T",
			name : "Tunu"
		},
		3 : {
			code : "K",
			name : "Kitaa"
		}
	},
	86 : {
		1 : {
			code : "A",
			name : "Saint Andrew"
		},
		2 : {
			code : "D",
			name : "Saint David"
		},
		3 : {
			code : "G",
			name : "Saint George"
		},
		4 : {
			code : "J",
			name : "Saint John"
		},
		5 : {
			code : "M",
			name : "Saint Mark"
		},
		6 : {
			code : "P",
			name : "Saint Patrick"
		},
		7 : {
			code : "C",
			name : "Carriacou"
		},
		8 : {
			code : "Q",
			name : "Petit Martinique"
		}
	},
	GP : {
		1 : {
			code : "ARR",
			name : "Arrondissements Of The Guadeloup"
		},
		2 : {
			code : "CAN",
			name : "Cantons Of The Guadeloup Depart"
		},
		3 : {
			code : "COM",
			name : "Communes Of The Guadeloup Depart"
		}
	},
	GU : {
		1 : {
			code : "AGA",
			name : "Agana Heights"
		},
		2 : {
			code : "AGA",
			name : "Agat"
		},
		3 : {
			code : "ASA",
			name : "Asan Maina"
		},
		4 : {
			code : "BAR",
			name : "Barrigada"
		},
		5 : {
			code : "CHA",
			name : "Chalan Pago Ordot"
		},
		6 : {
			code : "DED",
			name : "Dededo"
		},
		7 : {
			code : "HAG",
			name : "HagÃ…tÃ±a"
		},
		8 : {
			code : "INA",
			name : "Inarajan"
		},
		9 : {
			code : "MAN",
			name : "Mangilao"
		},
		10 : {
			code : "MER",
			name : "Merizo"
		},
		11 : {
			code : "MON",
			name : "Mongmong Toto Maite"
		},
		12 : {
			code : "PIT",
			name : "Piti"
		},
		13 : {
			code : "SAN",
			name : "Santa Rita"
		},
		14 : {
			code : "SIN",
			name : "Sinajana"
		},
		15 : {
			code : "TAL",
			name : "Talofofo"
		},
		16 : {
			code : "TAM",
			name : "Tamuning"
		},
		17 : {
			code : "UMA",
			name : "Umatac"
		},
		18 : {
			code : "YIG",
			name : "Yigo"
		},
		19 : {
			code : "YON",
			name : "Yona"
		}
	},
	GT : {
		1 : {
			code : "AV",
			name : "Alta Verapaz"
		},
		2 : {
			code : "BV",
			name : "Baja Verapaz"
		},
		3 : {
			code : "CM",
			name : "Chimaltenango"
		},
		4 : {
			code : "CQ",
			name : "Chiquimula"
		},
		5 : {
			code : "PE",
			name : "El Peten"
		},
		6 : {
			code : "PR",
			name : "El Progreso"
		},
		7 : {
			code : "QC",
			name : "El Quiche"
		},
		8 : {
			code : "ES",
			name : "Escuintla"
		},
		9 : {
			code : "GU",
			name : "Guatemala"
		},
		10 : {
			code : "HU",
			name : "Huehuetenango"
		},
		11 : {
			code : "IZ",
			name : "Izabal"
		},
		12 : {
			code : "JA",
			name : "Jalapa"
		},
		13 : {
			code : "JU",
			name : "Jutiapa"
		},
		14 : {
			code : "QZ",
			name : "Quetzaltenango"
		},
		15 : {
			code : "RE",
			name : "Retalhuleu"
		},
		16 : {
			code : "ST",
			name : "Sacatepequez"
		},
		17 : {
			code : "SM",
			name : "San Marcos"
		},
		18 : {
			code : "SR",
			name : "Santa Rosa"
		},
		19 : {
			code : "SO",
			name : "Solola"
		},
		20 : {
			code : "SU",
			name : "Suchitepequez"
		},
		21 : {
			code : "TO",
			name : "Totonicapan"
		},
		22 : {
			code : "ZA",
			name : "Zacapa"
		}
	},
	GN : {
		1 : {
			code : "CNK",
			name : "Conakry"
		},
		2 : {
			code : "BYL",
			name : "Beyla"
		},
		3 : {
			code : "BFA",
			name : "Boffa"
		},
		4 : {
			code : "BOK",
			name : "Boke"
		},
		5 : {
			code : "COY",
			name : "Coyah"
		},
		6 : {
			code : "DBL",
			name : "Dabola"
		},
		7 : {
			code : "DLB",
			name : "Dalaba"
		},
		8 : {
			code : "DGR",
			name : "Dinguiraye"
		},
		9 : {
			code : "DBR",
			name : "Dubreka"
		},
		10 : {
			code : "FRN",
			name : "Faranah"
		},
		11 : {
			code : "FRC",
			name : "Forecariah"
		},
		12 : {
			code : "FRI",
			name : "Fria"
		},
		13 : {
			code : "GAO",
			name : "Gaoual"
		},
		14 : {
			code : "GCD",
			name : "Gueckedou"
		},
		15 : {
			code : "KNK",
			name : "Kankan"
		},
		16 : {
			code : "KRN",
			name : "Kerouane"
		},
		17 : {
			code : "KND",
			name : "Kindia"
		},
		18 : {
			code : "KSD",
			name : "Kissidougou"
		},
		19 : {
			code : "KBA",
			name : "Koubia"
		},
		20 : {
			code : "KDA",
			name : "Koundara"
		},
		21 : {
			code : "KRA",
			name : "Kouroussa"
		},
		22 : {
			code : "LAB",
			name : "Labe"
		},
		23 : {
			code : "LLM",
			name : "Lelouma"
		},
		24 : {
			code : "LOL",
			name : "Lola"
		},
		25 : {
			code : "MCT",
			name : "Macenta"
		},
		26 : {
			code : "MAL",
			name : "Mali"
		},
		27 : {
			code : "MAM",
			name : "Mamou"
		},
		28 : {
			code : "MAN",
			name : "Mandiana"
		},
		29 : {
			code : "NZR",
			name : "Nzerekore"
		},
		30 : {
			code : "PIT",
			name : "Pita"
		},
		31 : {
			code : "SIG",
			name : "Siguiri"
		},
		32 : {
			code : "TLM",
			name : "Telimele"
		},
		33 : {
			code : "TOG",
			name : "Tougue"
		},
		34 : {
			code : "YOM",
			name : "Yomou"
		}
	},
	GW : {
		1 : {
			code : "BF",
			name : "Bafata Region"
		},
		2 : {
			code : "BB",
			name : "Biombo Region"
		},
		3 : {
			code : "BS",
			name : "Bissau Region"
		},
		4 : {
			code : "BL",
			name : "Bolama Region"
		},
		5 : {
			code : "CA",
			name : "Cacheu Region"
		},
		6 : {
			code : "GA",
			name : "Gabu Region"
		},
		7 : {
			code : "OI",
			name : "Oio Region"
		},
		8 : {
			code : "QU",
			name : "Quinara Region"
		},
		9 : {
			code : "TO",
			name : "Tombali Region"
		}
	},
	GY : {
		1 : {
			code : "BW",
			name : "Barima-Waini"
		},
		2 : {
			code : "CM",
			name : "Cuyuni-Mazaruni"
		},
		3 : {
			code : "DM",
			name : "Demerara-Mahaica"
		},
		4 : {
			code : "EC",
			name : "East Berbice-Corentyne"
		},
		5 : {
			code : "EW",
			name : "Essequibo Islands-West Demerara"
		},
		6 : {
			code : "MB",
			name : "Mahaica-Berbice"
		},
		7 : {
			code : "PM",
			name : "Pomeroon-Supenaam"
		},
		8 : {
			code : "PI",
			name : "Potaro-Siparuni"
		},
		9 : {
			code : "UD",
			name : "Upper Demerara-Berbice"
		},
		10 : {
			code : "UT",
			name : "Upper Takutu-Upper Essequibo"
		}
	},
	HT : {
		1 : {
			code : "AR",
			name : "Artibonite"
		},
		2 : {
			code : "CE",
			name : "Centre"
		},
		3 : {
			code : "GA",
			name : "Grand'Anse"
		},
		4 : {
			code : "ND",
			name : "Nord"
		},
		5 : {
			code : "NE",
			name : "Nord-Est"
		},
		6 : {
			code : "NO",
			name : "Nord-Ouest"
		},
		7 : {
			code : "OU",
			name : "Ouest"
		},
		8 : {
			code : "SD",
			name : "Sud"
		},
		9 : {
			code : "SE",
			name : "Sud-Est"
		}
	},
	HM : {
		1 : {
			code : "F",
			name : "Flat Island"
		},
		2 : {
			code : "M",
			name : "McDonald Island"
		},
		3 : {
			code : "S",
			name : "Shag Island"
		},
		4 : {
			code : "H",
			name : "Heard Island"
		}
	},
	HN : {
		1 : {
			code : "AT",
			name : "Atlantida"
		},
		2 : {
			code : "CH",
			name : "Choluteca"
		},
		3 : {
			code : "CL",
			name : "Colon"
		},
		4 : {
			code : "CM",
			name : "Comayagua"
		},
		5 : {
			code : "CP",
			name : "Copan"
		},
		6 : {
			code : "CR",
			name : "Cortes"
		},
		7 : {
			code : "PA",
			name : "El Paraiso"
		},
		8 : {
			code : "FM",
			name : "Francisco Morazan"
		},
		9 : {
			code : "GD",
			name : "Gracias a Dios"
		},
		10 : {
			code : "IN",
			name : "Intibuca"
		},
		11 : {
			code : "IB",
			name : "Islas de la Bahia (Bay Islands)"
		},
		12 : {
			code : "PZ",
			name : "La Paz"
		},
		13 : {
			code : "LE",
			name : "Lempira"
		},
		14 : {
			code : "OC",
			name : "Ocotepeque"
		},
		15 : {
			code : "OL",
			name : "Olancho"
		},
		16 : {
			code : "SB",
			name : "Santa Barbara"
		},
		17 : {
			code : "VA",
			name : "Valle"
		},
		18 : {
			code : "YO",
			name : "Yoro"
		}
	},
	HK : {
		1 : {
			code : "HCW",
			name : "Central and Western Hong Kong Is"
		},
		2 : {
			code : "HEA",
			name : "Eastern Hong Kong Island"
		},
		3 : {
			code : "HSO",
			name : "Southern Hong Kong Island"
		},
		4 : {
			code : "HWC",
			name : "Wan Chai Hong Kong Island"
		},
		5 : {
			code : "KKC",
			name : "Kowloon City Kowloon"
		},
		6 : {
			code : "KKT",
			name : "Kwun Tong Kowloon"
		},
		7 : {
			code : "KSS",
			name : "Sham Shui Po Kowloon"
		},
		8 : {
			code : "KWT",
			name : "Wong Tai Sin Kowloon"
		},
		9 : {
			code : "KYT",
			name : "Yau Tsim Mong Kowloon"
		},
		10 : {
			code : "NIS",
			name : "Islands New Territories"
		},
		11 : {
			code : "NKT",
			name : "Kwai Tsing New Territories"
		},
		12 : {
			code : "NNO",
			name : "North New Territories"
		},
		13 : {
			code : "NSK",
			name : "Sai Kung New Territories"
		},
		14 : {
			code : "NST",
			name : "Sha Tin New Territories"
		},
		15 : {
			code : "NTP",
			name : "Tai Po New Territories"
		},
		16 : {
			code : "NTW",
			name : "Tsuen Wan New Territories"
		},
		17 : {
			code : "NTM",
			name : "Tuen Mun New Territories"
		},
		18 : {
			code : "NYL",
			name : "Yuen Long New Territories"
		}
	},
	HU : {
		1 : {
			code : "BK",
			name : "Bacs-Kiskun"
		},
		2 : {
			code : "BA",
			name : "Baranya"
		},
		3 : {
			code : "BE",
			name : "Bekes"
		},
		4 : {
			code : "BS",
			name : "Bekescsaba"
		},
		5 : {
			code : "BZ",
			name : "Borsod-Abauj-Zemplen"
		},
		6 : {
			code : "BU",
			name : "Budapest"
		},
		7 : {
			code : "CS",
			name : "Csongrad"
		},
		8 : {
			code : "DE",
			name : "Debrecen"
		},
		9 : {
			code : "DU",
			name : "Dunaujvaros"
		},
		10 : {
			code : "EG",
			name : "Eger"
		},
		11 : {
			code : "FE",
			name : "Fejer"
		},
		12 : {
			code : "GY",
			name : "Gyor"
		},
		13 : {
			code : "GM",
			name : "Gyor-Moson-Sopron"
		},
		14 : {
			code : "HB",
			name : "Hajdu-Bihar"
		},
		15 : {
			code : "HE",
			name : "Heves"
		},
		16 : {
			code : "HO",
			name : "Hodmezovasarhely"
		},
		17 : {
			code : "JN",
			name : "Jasz-Nagykun-Szolnok"
		},
		18 : {
			code : "KA",
			name : "Kaposvar"
		},
		19 : {
			code : "KE",
			name : "Kecskemet"
		},
		20 : {
			code : "KO",
			name : "Komarom-Esztergom"
		},
		21 : {
			code : "MI",
			name : "Miskolc"
		},
		22 : {
			code : "NA",
			name : "Nagykanizsa"
		},
		23 : {
			code : "NO",
			name : "Nograd"
		},
		24 : {
			code : "NY",
			name : "Nyiregyhaza"
		},
		25 : {
			code : "PE",
			name : "Pecs"
		},
		26 : {
			code : "PS",
			name : "Pest"
		},
		27 : {
			code : "SO",
			name : "Somogy"
		},
		28 : {
			code : "SP",
			name : "Sopron"
		},
		29 : {
			code : "SS",
			name : "Szabolcs-Szatmar-Bereg"
		},
		30 : {
			code : "SZ",
			name : "Szeged"
		},
		31 : {
			code : "SE",
			name : "Szekesfehervar"
		},
		32 : {
			code : "SL",
			name : "Szolnok"
		},
		33 : {
			code : "SM",
			name : "Szombathely"
		},
		34 : {
			code : "TA",
			name : "Tatabanya"
		},
		35 : {
			code : "TO",
			name : "Tolna"
		},
		36 : {
			code : "VA",
			name : "Vas"
		},
		37 : {
			code : "VE",
			name : "Veszprem"
		},
		38 : {
			code : "ZA",
			name : "Zala"
		},
		39 : {
			code : "ZZ",
			name : "Zalaegerszeg"
		}
	},
	IS : {
		1 : {
			code : "AL",
			name : "Austurland"
		},
		2 : {
			code : "HF",
			name : "Hofuoborgarsvaeoi"
		},
		3 : {
			code : "NE",
			name : "Norourland eystra"
		},
		4 : {
			code : "NV",
			name : "Norourland vestra"
		},
		5 : {
			code : "SL",
			name : "Suourland"
		},
		6 : {
			code : "SN",
			name : "Suournes"
		},
		7 : {
			code : "VF",
			name : "Vestfiroir"
		},
		8 : {
			code : "VL",
			name : "Vesturland"
		}
	},
	IN : {
		1 : {
			code : "AN",
			name : "Andaman and Nicobar Islands"
		},
		2 : {
			code : "AP",
			name : "Andhra Pradesh"
		},
		3 : {
			code : "AR",
			name : "Arunachal Pradesh"
		},
		4 : {
			code : "AS",
			name : "Assam"
		},
		5 : {
			code : "BI",
			name : "Bihar"
		},
		6 : {
			code : "CH",
			name : "Chandigarh"
		},
		7 : {
			code : "DA",
			name : "Dadra and Nagar Haveli"
		},
		8 : {
			code : "DM",
			name : "Daman and Diu"
		},
		9 : {
			code : "DE",
			name : "Delhi"
		},
		10 : {
			code : "GO",
			name : "Goa"
		},
		11 : {
			code : "GU",
			name : "Gujarat"
		},
		12 : {
			code : "HA",
			name : "Haryana"
		},
		13 : {
			code : "HP",
			name : "Himachal Pradesh"
		},
		14 : {
			code : "JA",
			name : "Jammu and Kashmir"
		},
		15 : {
			code : "KA",
			name : "Karnataka"
		},
		16 : {
			code : "KE",
			name : "Kerala"
		},
		17 : {
			code : "LI",
			name : "Lakshadweep Islands"
		},
		18 : {
			code : "MP",
			name : "Madhya Pradesh"
		},
		19 : {
			code : "MA",
			name : "Maharashtra"
		},
		20 : {
			code : "MN",
			name : "Manipur"
		},
		21 : {
			code : "ME",
			name : "Meghalaya"
		},
		22 : {
			code : "MI",
			name : "Mizoram"
		},
		23 : {
			code : "NA",
			name : "Nagaland"
		},
		24 : {
			code : "OR",
			name : "Orissa"
		},
		25 : {
			code : "PO",
			name : "Pondicherry"
		},
		26 : {
			code : "PU",
			name : "Punjab"
		},
		27 : {
			code : "RA",
			name : "Rajasthan"
		},
		28 : {
			code : "SI",
			name : "Sikkim"
		},
		29 : {
			code : "TN",
			name : "Tamil Nadu"
		},
		30 : {
			code : "TR",
			name : "Tripura"
		},
		31 : {
			code : "UP",
			name : "Uttar Pradesh"
		},
		32 : {
			code : "WB",
			name : "West Bengal"
		}
	},
	ID : {
		1 : {
			code : "DA",
			name : "Daista Aceh"
		},
		2 : {
			code : "SU",
			name : "Sumatera Utara"
		},
		3 : {
			code : "SB",
			name : "Sumatera Barat"
		},
		4 : {
			code : "SI",
			name : "Riau"
		},
		5 : {
			code : "JA",
			name : "Jambi"
		},
		6 : {
			code : "SS",
			name : "Sumatera Selatan"
		},
		7 : {
			code : "BE",
			name : "Bengkulu"
		},
		8 : {
			code : "LA",
			name : "Lampung"
		},
		9 : {
			code : "JK",
			name : "Dki Jakarta"
		},
		10 : {
			code : "JB",
			name : "Jawa Barat"
		},
		11 : {
			code : "JT",
			name : "Jawa Tengah"
		},
		12 : {
			code : "DY",
			name : "Daista Yogyakarta"
		},
		13 : {
			code : "JT",
			name : "Jawa Timur"
		},
		14 : {
			code : "KB",
			name : "Kalimantan Barat"
		},
		15 : {
			code : "KT",
			name : "Kalimantan Tengah"
		},
		16 : {
			code : "KI",
			name : "Kalimantan Timur"
		},
		17 : {
			code : "KS",
			name : "Kalimantan Selatan"
		},
		18 : {
			code : "BA",
			name : "Bali"
		},
		19 : {
			code : "NB",
			name : "Nusa Tenggara Barat"
		},
		20 : {
			code : "NT",
			name : "Nusa Tenggara Timur"
		},
		21 : {
			code : "SN",
			name : "Sulawesi Selatan"
		},
		22 : {
			code : "ST",
			name : "Sulawesi Tengah"
		},
		23 : {
			code : "SA",
			name : "Sulawesi Utara"
		},
		24 : {
			code : "SG",
			name : "Sulawesi Tenggara"
		},
		25 : {
			code : "MA",
			name : "Maluku"
		},
		26 : {
			code : "MU",
			name : "Maluku Utara"
		},
		27 : {
			code : "IJ",
			name : "Irian Jaya Timur"
		},
		28 : {
			code : "IT",
			name : "Irian Jaya Tengah"
		},
		29 : {
			code : "IB",
			name : "Irian Jawa Barat"
		},
		30 : {
			code : "BT",
			name : "Banten"
		},
		31 : {
			code : "BB",
			name : "Bangka Belitung"
		},
		32 : {
			code : "GO",
			name : "Gorontalo"
		}
	},
	IR : {
		1 : {
			code : "ARD",
			name : "Ardabil"
		},
		2 : {
			code : "BSH",
			name : "Bushehr"
		},
		3 : {
			code : "CMB",
			name : "Chahar Mahaal and Bakhtiari"
		},
		4 : {
			code : "EAZ",
			name : "East Azarbaijan"
		},
		5 : {
			code : "EFH",
			name : "Esfahan"
		},
		6 : {
			code : "FAR",
			name : "Fars"
		},
		7 : {
			code : "GIL",
			name : "Gilan"
		},
		8 : {
			code : "GLS",
			name : "Golestan"
		},
		9 : {
			code : "HMD",
			name : "Hamadan"
		},
		10 : {
			code : "HRM",
			name : "Hormozgan"
		},
		11 : {
			code : "ILM",
			name : "Ilam"
		},
		12 : {
			code : "KBA",
			name : "Kohkiluyeh and Buyer Ahmad"
		},
		13 : {
			code : "KRB",
			name : "Kerman"
		},
		14 : {
			code : "KRD",
			name : "Kurdistan"
		},
		15 : {
			code : "KRM",
			name : "Kermanshah"
		},
		16 : {
			code : "KZT",
			name : "Khuzestan"
		},
		17 : {
			code : "LRS",
			name : "Lorestan"
		},
		18 : {
			code : "MKZ",
			name : "Markazi"
		},
		19 : {
			code : "MZD",
			name : "Mazandaran"
		},
		20 : {
			code : "NKH",
			name : "North Khorasan"
		},
		21 : {
			code : "QAZ",
			name : "Qazvin"
		},
		22 : {
			code : "QOM",
			name : "Qom"
		},
		23 : {
			code : "RKH",
			name : "Razavi Khorasan"
		},
		24 : {
			code : "SBL",
			name : "Sistan and Baluchistan"
		},
		25 : {
			code : "SKH",
			name : "South Khorasan"
		},
		26 : {
			code : "SMN",
			name : "Semnan"
		},
		27 : {
			code : "TEH",
			name : "Tehran"
		},
		28 : {
			code : "WEZ",
			name : "West Azarbaijan"
		},
		29 : {
			code : "YZD",
			name : "Yazd"
		},
		30 : {
			code : "ZAN",
			name : "Zanjan"
		}
	},
	IQ : {
		1 : {
			code : "AB",
			name : "Al Anbar"
		},
		2 : {
			code : "AL",
			name : "Arbil"
		},
		3 : {
			code : "BA",
			name : "Al Basrah"
		},
		4 : {
			code : "BB",
			name : "Babil"
		},
		5 : {
			code : "BD",
			name : "Baghdad"
		},
		6 : {
			code : "DH",
			name : "Dahuk"
		},
		7 : {
			code : "DQ",
			name : "Dhi Qar"
		},
		8 : {
			code : "DY",
			name : "Diyala"
		},
		9 : {
			code : "KB",
			name : "Al Karbala"
		},
		10 : {
			code : "MU",
			name : "Al Muthanna"
		},
		11 : {
			code : "MY",
			name : "Maysan"
		},
		12 : {
			code : "NJ",
			name : "An Najaf"
		},
		13 : {
			code : "NN",
			name : "Ninawa"
		},
		14 : {
			code : "QA",
			name : "Al Qadisyah"
		},
		15 : {
			code : "SD",
			name : "Salah ad Din"
		},
		16 : {
			code : "SL",
			name : "As Sulaymaniyah"
		},
		17 : {
			code : "TM",
			name : "At Ta'mim"
		},
		18 : {
			code : "WS",
			name : "Wasit"
		}
	},
	IE : {
		1 : {
			code : "CA",
			name : "Carlow"
		},
		2 : {
			code : "CV",
			name : "Cavan"
		},
		3 : {
			code : "CL",
			name : "Clare"
		},
		4 : {
			code : "CO",
			name : "Cork"
		},
		5 : {
			code : "DO",
			name : "Donegal"
		},
		6 : {
			code : "DU",
			name : "Dublin"
		},
		7 : {
			code : "GA",
			name : "Galway"
		},
		8 : {
			code : "KE",
			name : "Kerry"
		},
		9 : {
			code : "KI",
			name : "Kildare"
		},
		10 : {
			code : "KL",
			name : "Kilkenny"
		},
		11 : {
			code : "LA",
			name : "Laois"
		},
		12 : {
			code : "LE",
			name : "Leitrim"
		},
		13 : {
			code : "LI",
			name : "Limerick"
		},
		14 : {
			code : "LO",
			name : "Longford"
		},
		15 : {
			code : "LU",
			name : "Louth"
		},
		16 : {
			code : "MA",
			name : "Mayo"
		},
		17 : {
			code : "ME",
			name : "Meath"
		},
		18 : {
			code : "MO",
			name : "Monaghan"
		},
		19 : {
			code : "OF",
			name : "Offaly"
		},
		20 : {
			code : "RO",
			name : "Roscommon"
		},
		21 : {
			code : "SL",
			name : "Sligo"
		},
		22 : {
			code : "TI",
			name : "Tipperary"
		},
		23 : {
			code : "WA",
			name : "Waterford"
		},
		24 : {
			code : "WE",
			name : "Westmeath"
		},
		25 : {
			code : "WX",
			name : "Wexford"
		},
		26 : {
			code : "WI",
			name : "Wicklow"
		}
	},
	IL : {
		1 : {
			code : "BS",
			name : "Be'er Sheva"
		},
		2 : {
			code : "BH",
			name : "Bika'at Hayarden"
		},
		3 : {
			code : "EA",
			name : "Eilat and Arava"
		},
		4 : {
			code : "GA",
			name : "Galil"
		},
		5 : {
			code : "HA",
			name : "Haifa"
		},
		6 : {
			code : "JM",
			name : "Jehuda Mountains"
		},
		7 : {
			code : "JE",
			name : "Jerusalem"
		},
		8 : {
			code : "NE",
			name : "Negev"
		},
		10 : {
			code : "SE",
			name : "Semaria"
		},
		11 : {
			code : "SH",
			name : "Sharon"
		},
		12 : {
			code : "TA",
			name : "Tel Aviv (Gosh Dan)"
		}
	},
	IT : {
		1 : {
			code : "AG",
			name : "Agrigento"
		},
		2 : {
			code : "AL",
			name : "Alessandria"
		},
		3 : {
			code : "AN",
			name : "Ancona"
		},
		4 : {
			code : "AO",
			name : "Aosta"
		},
		5 : {
			code : "AR",
			name : "Arezzo"
		},
		6 : {
			code : "AP",
			name : "Ascoli Piceno"
		},
		7 : {
			code : "AT",
			name : "Asti"
		},
		8 : {
			code : "AV",
			name : "Avellino"
		},
		9 : {
			code : "BA",
			name : "Bari"
		},
		10 : {
			code : "BL",
			name : "Belluno"
		},
		11 : {
			code : "BN",
			name : "Benevento"
		},
		12 : {
			code : "BG",
			name : "Bergamo"
		},
		13 : {
			code : "BI",
			name : "Biella"
		},
		14 : {
			code : "BO",
			name : "Bologna"
		},
		15 : {
			code : "BZ",
			name : "Bolzano"
		},
		16 : {
			code : "BS",
			name : "Brescia"
		},
		17 : {
			code : "BR",
			name : "Brindisi"
		},
		18 : {
			code : "CA",
			name : "Cagliari"
		},
		19 : {
			code : "CL",
			name : "Caltanissetta"
		},
		20 : {
			code : "CB",
			name : "Campobasso"
		},
		21 : {
			code : "CE",
			name : "Caserta"
		},
		22 : {
			code : "CT",
			name : "Catania"
		},
		23 : {
			code : "CZ",
			name : "Catanzaro"
		},
		24 : {
			code : "CH",
			name : "Chieti"
		},
		25 : {
			code : "CO",
			name : "Como"
		},
		26 : {
			code : "CS",
			name : "Cosenza"
		},
		27 : {
			code : "CR",
			name : "Cremona"
		},
		28 : {
			code : "KR",
			name : "Crotone"
		},
		29 : {
			code : "CN",
			name : "Cuneo"
		},
		30 : {
			code : "EN",
			name : "Enna"
		},
		31 : {
			code : "FE",
			name : "Ferrara"
		},
		32 : {
			code : "FI",
			name : "Firenze"
		},
		33 : {
			code : "FG",
			name : "Foggia"
		},
		34 : {
			code : "FO",
			name : "ForlÃ¬"
		},
		35 : {
			code : "FR",
			name : "Frosinone"
		},
		36 : {
			code : "GE",
			name : "Genova"
		},
		37 : {
			code : "GO",
			name : "Gorizia"
		},
		38 : {
			code : "GR",
			name : "Grosseto"
		},
		39 : {
			code : "IM",
			name : "Imperia"
		},
		40 : {
			code : "IS",
			name : "Isernia"
		},
		41 : {
			code : "AQ",
			name : "Aquila"
		},
		42 : {
			code : "SP",
			name : "La Spezia"
		},
		43 : {
			code : "LT",
			name : "Latina"
		},
		44 : {
			code : "LE",
			name : "Lecce"
		},
		45 : {
			code : "LC",
			name : "Lecco"
		},
		46 : {
			code : "LI",
			name : "Livorno"
		},
		47 : {
			code : "LO",
			name : "Lodi"
		},
		48 : {
			code : "LU",
			name : "Lucca"
		},
		49 : {
			code : "MC",
			name : "Macerata"
		},
		50 : {
			code : "MN",
			name : "Mantova"
		},
		51 : {
			code : "MS",
			name : "Massa-Carrara"
		},
		52 : {
			code : "MT",
			name : "Matera"
		},
		53 : {
			code : "ME",
			name : "Messina"
		},
		54 : {
			code : "MI",
			name : "Milano"
		},
		55 : {
			code : "MO",
			name : "Modena"
		},
		56 : {
			code : "NA",
			name : "Napoli"
		},
		57 : {
			code : "NO",
			name : "Novara"
		},
		58 : {
			code : "NU",
			name : "Nuoro"
		},
		59 : {
			code : "OR",
			name : "Oristano"
		},
		60 : {
			code : "PD",
			name : "Padova"
		},
		61 : {
			code : "PA",
			name : "Palermo"
		},
		62 : {
			code : "PR",
			name : "Parma"
		},
		63 : {
			code : "PG",
			name : "Perugia"
		},
		64 : {
			code : "PV",
			name : "Pavia"
		},
		65 : {
			code : "PU",
			name : "Pesaro Urbino"
		},
		66 : {
			code : "PE",
			name : "Pescara"
		},
		67 : {
			code : "PC",
			name : "Piacenza"
		},
		68 : {
			code : "PI",
			name : "Pisa"
		},
		69 : {
			code : "PT",
			name : "Pistoia"
		},
		70 : {
			code : "PN",
			name : "Pordenone"
		},
		71 : {
			code : "PZ",
			name : "Potenza"
		},
		72 : {
			code : "PO",
			name : "Prato"
		},
		73 : {
			code : "RG",
			name : "Ragusa"
		},
		74 : {
			code : "RA",
			name : "Ravenna"
		},
		75 : {
			code : "RC",
			name : "Reggio Calabria"
		},
		76 : {
			code : "RE",
			name : "Reggio Emilia"
		},
		77 : {
			code : "RI",
			name : "Rieti"
		},
		78 : {
			code : "RN",
			name : "Rimini"
		},
		79 : {
			code : "RM",
			name : "Roma"
		},
		80 : {
			code : "RO",
			name : "Rovigo"
		},
		81 : {
			code : "SA",
			name : "Salerno"
		},
		82 : {
			code : "SS",
			name : "Sassari"
		},
		83 : {
			code : "SV",
			name : "Savona"
		},
		84 : {
			code : "SI",
			name : "Siena"
		},
		85 : {
			code : "SR",
			name : "Siracusa"
		},
		86 : {
			code : "SO",
			name : "Sondrio"
		},
		87 : {
			code : "TA",
			name : "Taranto"
		},
		88 : {
			code : "TE",
			name : "Teramo"
		},
		89 : {
			code : "TR",
			name : "Terni"
		},
		90 : {
			code : "TO",
			name : "Torino"
		},
		91 : {
			code : "TP",
			name : "Trapani"
		},
		92 : {
			code : "TN",
			name : "Trento"
		},
		93 : {
			code : "TV",
			name : "Treviso"
		},
		94 : {
			code : "TS",
			name : "Trieste"
		},
		95 : {
			code : "UD",
			name : "Udine"
		},
		96 : {
			code : "VA",
			name : "Varese"
		},
		97 : {
			code : "VE",
			name : "Venezia"
		},
		98 : {
			code : "VB",
			name : "Verbania"
		},
		99 : {
			code : "VC",
			name : "Vercelli"
		},
		100 : {
			code : "VR",
			name : "Verona"
		},
		101 : {
			code : "VV",
			name : "Vibo Valentia"
		},
		102 : {
			code : "VI",
			name : "Vicenza"
		},
		103 : {
			code : "VT",
			name : "Viterbo"
		},
		104 : {
			code : "CI",
			name : "Carbonia-Iglesias"
		},
		105 : {
			code : "VS",
			name : "Medio Campidano"
		},
		106 : {
			code : "OG",
			name : "Ogliastra"
		},
		107 : {
			code : "OT",
			name : "Olbia-Tempio"
		},
		108 : {
			code : "MB",
			name : "Monza e Brianza"
		},
		109 : {
			code : "FM",
			name : "Fermo"
		},
		110 : {
			code : "BT",
			name : "Barletta-Andria-Trani"
		}
	},
	JM : {
		1 : {
			code : "CLA",
			name : "Clarendon Parish"
		},
		2 : {
			code : "HAN",
			name : "Hanover Parish"
		},
		3 : {
			code : "KIN",
			name : "Kingston Parish"
		},
		4 : {
			code : "MAN",
			name : "Manchester Parish"
		},
		5 : {
			code : "POR",
			name : "Portland Parish"
		},
		6 : {
			code : "AND",
			name : "Saint Andrew Parish"
		},
		7 : {
			code : "ANN",
			name : "Saint Ann Parish"
		},
		8 : {
			code : "CAT",
			name : "Saint Catherine Parish"
		},
		9 : {
			code : "ELI",
			name : "Saint Elizabeth Parish"
		},
		10 : {
			code : "JAM",
			name : "Saint James Parish"
		},
		11 : {
			code : "MAR",
			name : "Saint Mary Parish"
		},
		12 : {
			code : "THO",
			name : "Saint Thomas Parish"
		},
		13 : {
			code : "TRL",
			name : "Trelawny Parish"
		},
		14 : {
			code : "WML",
			name : "Westmoreland Parish"
		}
	},
	JP : {
		1 : {
			code : "AI",
			name : "Aichi"
		},
		2 : {
			code : "AK",
			name : "Akita"
		},
		3 : {
			code : "AO",
			name : "Aomori"
		},
		4 : {
			code : "CH",
			name : "Chiba"
		},
		5 : {
			code : "EH",
			name : "Ehime"
		},
		6 : {
			code : "FK",
			name : "Fukui"
		},
		7 : {
			code : "FU",
			name : "Fukuoka"
		},
		8 : {
			code : "FS",
			name : "Fukushima"
		},
		9 : {
			code : "GI",
			name : "Gifu"
		},
		10 : {
			code : "GU",
			name : "Gumma"
		},
		11 : {
			code : "HI",
			name : "Hiroshima"
		},
		12 : {
			code : "HO",
			name : "Hokkaido"
		},
		13 : {
			code : "HY",
			name : "Hyogo"
		},
		14 : {
			code : "IB",
			name : "Ibaraki"
		},
		15 : {
			code : "IS",
			name : "Ishikawa"
		},
		16 : {
			code : "IW",
			name : "Iwate"
		},
		17 : {
			code : "KA",
			name : "Kagawa"
		},
		18 : {
			code : "KG",
			name : "Kagoshima"
		},
		19 : {
			code : "KN",
			name : "Kanagawa"
		},
		20 : {
			code : "KO",
			name : "Kochi"
		},
		21 : {
			code : "KU",
			name : "Kumamoto"
		},
		22 : {
			code : "KY",
			name : "Kyoto"
		},
		23 : {
			code : "MI",
			name : "Mie"
		},
		24 : {
			code : "MY",
			name : "Miyagi"
		},
		25 : {
			code : "MZ",
			name : "Miyazaki"
		},
		26 : {
			code : "NA",
			name : "Nagano"
		},
		27 : {
			code : "NG",
			name : "Nagasaki"
		},
		28 : {
			code : "NR",
			name : "Nara"
		},
		29 : {
			code : "NI",
			name : "Niigata"
		},
		30 : {
			code : "OI",
			name : "Oita"
		},
		31 : {
			code : "OK",
			name : "Okayama"
		},
		32 : {
			code : "ON",
			name : "Okinawa"
		},
		33 : {
			code : "OS",
			name : "Osaka"
		},
		34 : {
			code : "SA",
			name : "Saga"
		},
		35 : {
			code : "SI",
			name : "Saitama"
		},
		36 : {
			code : "SH",
			name : "Shiga"
		},
		37 : {
			code : "SM",
			name : "Shimane"
		},
		38 : {
			code : "SZ",
			name : "Shizuoka"
		},
		39 : {
			code : "TO",
			name : "Tochigi"
		},
		40 : {
			code : "TS",
			name : "Tokushima"
		},
		41 : {
			code : "TK",
			name : "Tokyo"
		},
		42 : {
			code : "TT",
			name : "Tottori"
		},
		43 : {
			code : "TY",
			name : "Toyama"
		},
		44 : {
			code : "WA",
			name : "Wakayama"
		},
		45 : {
			code : "YA",
			name : "Yamagata"
		},
		46 : {
			code : "YM",
			name : "Yamaguchi"
		},
		47 : {
			code : "YN",
			name : "Yamanashi"
		}
	},
	JO : {
		1 : {
			code : "AM",
			name : "'Amman"
		},
		2 : {
			code : "AJ",
			name : "Ajlun"
		},
		3 : {
			code : "AA",
			name : "Al'Aqabah"
		},
		4 : {
			code : "AB",
			name : "Al Balqa'"
		},
		5 : {
			code : "AK",
			name : "Al Karak"
		},
		6 : {
			code : "AL",
			name : "Al Mafraq"
		},
		7 : {
			code : "AT",
			name : "At Tafilah"
		},
		8 : {
			code : "AZ",
			name : "Az Zarqa'"
		},
		9 : {
			code : "IR",
			name : "Irbid"
		},
		10 : {
			code : "JA",
			name : "Jarash"
		},
		11 : {
			code : "MA",
			name : "Ma'an"
		},
		12 : {
			code : "MD",
			name : "Madaba"
		}
	},
	KZ : {
		1 : {
			code : "AL",
			name : "Almaty"
		},
		2 : {
			code : "AC",
			name : "Almaty City"
		},
		3 : {
			code : "AM",
			name : "Aqmola"
		},
		4 : {
			code : "AQ",
			name : "Aqtobe"
		},
		5 : {
			code : "AS",
			name : "Astana City"
		},
		6 : {
			code : "AT",
			name : "Atyrau"
		},
		7 : {
			code : "BA",
			name : "Batys Qazaqstan"
		},
		8 : {
			code : "BY",
			name : "Bayqongyr City"
		},
		9 : {
			code : "MA",
			name : "Mangghystau"
		},
		10 : {
			code : "ON",
			name : "Ongtustik Qazaqstan"
		},
		11 : {
			code : "PA",
			name : "Pavlodar"
		},
		12 : {
			code : "QA",
			name : "Qaraghandy"
		},
		13 : {
			code : "QO",
			name : "Qostanay"
		},
		14 : {
			code : "QY",
			name : "Qyzylorda"
		},
		15 : {
			code : "SH",
			name : "Shyghys Qazaqstan"
		},
		16 : {
			code : "SO",
			name : "Soltustik Qazaqstan"
		},
		17 : {
			code : "ZH",
			name : "Zhambyl"
		}
	},
	KE : {
		1 : {
			code : "CE",
			name : "Central"
		},
		2 : {
			code : "CO",
			name : "Coast"
		},
		3 : {
			code : "EA",
			name : "Eastern"
		},
		4 : {
			code : "NA",
			name : "Nairobi Area"
		},
		5 : {
			code : "NE",
			name : "North Eastern"
		},
		6 : {
			code : "NY",
			name : "Nyanza"
		},
		7 : {
			code : "RV",
			name : "Rift Valley"
		},
		8 : {
			code : "WE",
			name : "Western"
		}
	},
	KI : {
		1 : {
			code : "AG",
			name : "Abaiang"
		},
		2 : {
			code : "AM",
			name : "Abemama"
		},
		3 : {
			code : "AK",
			name : "Aranuka"
		},
		4 : {
			code : "AO",
			name : "Arorae"
		},
		5 : {
			code : "BA",
			name : "Banaba"
		},
		6 : {
			code : "BE",
			name : "Beru"
		},
		7 : {
			code : "bT",
			name : "Butaritari"
		},
		8 : {
			code : "KA",
			name : "Kanton"
		},
		9 : {
			code : "KR",
			name : "Kiritimati"
		},
		10 : {
			code : "KU",
			name : "Kuria"
		},
		11 : {
			code : "MI",
			name : "Maiana"
		},
		12 : {
			code : "MN",
			name : "Makin"
		},
		13 : {
			code : "ME",
			name : "Marakei"
		},
		14 : {
			code : "NI",
			name : "Nikunau"
		},
		15 : {
			code : "NO",
			name : "Nonouti"
		},
		16 : {
			code : "ON",
			name : "Onotoa"
		},
		17 : {
			code : "TT",
			name : "Tabiteuea"
		},
		18 : {
			code : "TR",
			name : "Tabuaeran"
		},
		19 : {
			code : "TM",
			name : "Tamana"
		},
		20 : {
			code : "TW",
			name : "Tarawa"
		},
		21 : {
			code : "TE",
			name : "Teraina"
		}
	},
	KP : {
		1 : {
			code : "CHA",
			name : "Chagang-do"
		},
		2 : {
			code : "HAB",
			name : "Hamgyong-bukto"
		},
		3 : {
			code : "HAN",
			name : "Hamgyong-namdo"
		},
		4 : {
			code : "HWB",
			name : "Hwanghae-bukto"
		},
		5 : {
			code : "HWN",
			name : "Hwanghae-namdo"
		},
		6 : {
			code : "KAN",
			name : "Kangwon-do"
		},
		7 : {
			code : "PYB",
			name : "P'yongan-bukto"
		},
		8 : {
			code : "PYN",
			name : "P'yongan-namdo"
		},
		9 : {
			code : "YAN",
			name : "Ryanggang-do (Yanggang-do)"
		},
		10 : {
			code : "NAJ",
			name : "Rason Directly Governed City"
		},
		11 : {
			code : "PYO",
			name : "P'yongyang Special City"
		}
	},
	KR : {
		1 : {
			code : "CO",
			name : "Ch'ungch'ong-bukto"
		},
		2 : {
			code : "CH",
			name : "Ch'ungch'ong-namdo"
		},
		3 : {
			code : "CD",
			name : "Cheju-do"
		},
		4 : {
			code : "CB",
			name : "Cholla-bukto"
		},
		5 : {
			code : "CN",
			name : "Cholla-namdo"
		},
		6 : {
			code : "IG",
			name : "Inch'on-gwangyoksi"
		},
		7 : {
			code : "KA",
			name : "Kangwon-do"
		},
		8 : {
			code : "KG",
			name : "Kwangju-gwangyoksi"
		},
		9 : {
			code : "KD",
			name : "Kyonggi-do"
		},
		10 : {
			code : "KB",
			name : "Kyongsang-bukto"
		},
		11 : {
			code : "KN",
			name : "Kyongsang-namdo"
		},
		12 : {
			code : "PG",
			name : "Pusan-gwangyoksi"
		},
		13 : {
			code : "SO",
			name : "Soul-t'ukpyolsi"
		},
		14 : {
			code : "TA",
			name : "Taegu-gwangyoksi"
		},
		15 : {
			code : "TG",
			name : "Taejon-gwangyoksi"
		}
	},
	KW : {
		1 : {
			code : "AL",
			name : "Al'Asimah"
		},
		2 : {
			code : "AA",
			name : "Al Ahmadi"
		},
		3 : {
			code : "AF",
			name : "Al Farwaniyah"
		},
		4 : {
			code : "AJ",
			name : "Al Jahra'"
		},
		5 : {
			code : "HA",
			name : "Hawalli"
		}
	},
	KG : {
		1 : {
			code : "GB",
			name : "Bishkek"
		},
		2 : {
			code : "B",
			name : "Batken"
		},
		3 : {
			code : "C",
			name : "Chu"
		},
		4 : {
			code : "J",
			name : "Jalal-Abad"
		},
		5 : {
			code : "N",
			name : "Naryn"
		},
		6 : {
			code : "O",
			name : "Osh"
		},
		7 : {
			code : "T",
			name : "Talas"
		},
		8 : {
			code : "Y",
			name : "Ysyk-Kol"
		}
	},
	LA : {
		1 : {
			code : "VT",
			name : "Vientiane"
		},
		2 : {
			code : "AT",
			name : "Attapu"
		},
		3 : {
			code : "BK",
			name : "Bokeo"
		},
		4 : {
			code : "BL",
			name : "Bolikhamxai"
		},
		5 : {
			code : "CH",
			name : "Champasak"
		},
		6 : {
			code : "HO",
			name : "Houaphan"
		},
		7 : {
			code : "KH",
			name : "Khammouan"
		},
		8 : {
			code : "LM",
			name : "Louang Namtha"
		},
		9 : {
			code : "LP",
			name : "Louangphabang"
		},
		10 : {
			code : "OU",
			name : "Oudomxai"
		},
		11 : {
			code : "PH",
			name : "Phongsali"
		},
		12 : {
			code : "SL",
			name : "Salavan"
		},
		13 : {
			code : "SV",
			name : "Savannakhet"
		},
		14 : {
			code : "VI",
			name : "Vientiane"
		},
		15 : {
			code : "XA",
			name : "Xaignabouli"
		},
		16 : {
			code : "XE",
			name : "Xekong"
		},
		17 : {
			code : "XI",
			name : "Xiangkhoang"
		},
		18 : {
			code : "XN",
			name : "Xaisomboun"
		}
	},
	LV : {
		1 : {
			code : "AIZ",
			name : "Aizkraukles Rajons"
		},
		2 : {
			code : "ALU",
			name : "Aluksnes Rajons"
		},
		3 : {
			code : "BAL",
			name : "Balvu Rajons"
		},
		4 : {
			code : "BAU",
			name : "Bauskas Rajons"
		},
		5 : {
			code : "CES",
			name : "Cesu Rajons"
		},
		6 : {
			code : "DGR",
			name : "Daugavpils Rajons"
		},
		7 : {
			code : "DOB",
			name : "Dobeles Rajons"
		},
		8 : {
			code : "GUL",
			name : "Gulbenes Rajons"
		},
		9 : {
			code : "JEK",
			name : "Jekabpils Rajons"
		},
		10 : {
			code : "JGR",
			name : "Jelgavas Rajons"
		},
		11 : {
			code : "KRA",
			name : "Kraslavas Rajons"
		},
		12 : {
			code : "KUL",
			name : "Kuldigas Rajons"
		},
		13 : {
			code : "LPR",
			name : "Liepajas Rajons"
		},
		14 : {
			code : "LIM",
			name : "Limbazu Rajons"
		},
		15 : {
			code : "LUD",
			name : "Ludzas Rajons"
		},
		16 : {
			code : "MAD",
			name : "Madonas Rajons"
		},
		17 : {
			code : "OGR",
			name : "Ogres Rajons"
		},
		18 : {
			code : "PRE",
			name : "Preilu Rajons"
		},
		19 : {
			code : "RZR",
			name : "Rezeknes Rajons"
		},
		20 : {
			code : "RGR",
			name : "Rigas Rajons"
		},
		21 : {
			code : "SAL",
			name : "Saldus Rajons"
		},
		22 : {
			code : "TAL",
			name : "Talsu Rajons"
		},
		23 : {
			code : "TUK",
			name : "Tukuma Rajons"
		},
		24 : {
			code : "VLK",
			name : "Valkas Rajons"
		},
		25 : {
			code : "VLM",
			name : "Valmieras Rajons"
		},
		26 : {
			code : "VSR",
			name : "Ventspils Rajons"
		},
		27 : {
			code : "DGV",
			name : "Daugavpils"
		},
		28 : {
			code : "JGV",
			name : "Jelgava"
		},
		29 : {
			code : "JUR",
			name : "Jurmala"
		},
		30 : {
			code : "LPK",
			name : "Liepaja"
		},
		31 : {
			code : "RZK",
			name : "Rezekne"
		},
		32 : {
			code : "RGA",
			name : "Riga"
		},
		33 : {
			code : "VSL",
			name : "Ventspils"
		}
	},
	LB : {
		1 : {
			code : "BIN",
			name : "Bint Jbeil"
		},
		2 : {
			code : "HAS",
			name : "Hasbaya"
		},
		3 : {
			code : "MAR",
			name : "Marjeyoun"
		},
		4 : {
			code : "NAB",
			name : "Nabatieh"
		},
		5 : {
			code : "BAA",
			name : "Baalbek"
		},
		6 : {
			code : "HER",
			name : "Hermel"
		},
		7 : {
			code : "RAS",
			name : "Rashaya"
		},
		8 : {
			code : "WES",
			name : "Western Beqaa"
		},
		9 : {
			code : "ZAH",
			name : "Zahle"
		},
		10 : {
			code : "AKK",
			name : "Akkar"
		},
		11 : {
			code : "BAT",
			name : "Batroun"
		},
		12 : {
			code : "BSH",
			name : "Bsharri"
		},
		13 : {
			code : "KOU",
			name : "Koura"
		},
		14 : {
			code : "MIN",
			name : "Miniyeh-Danniyeh"
		},
		15 : {
			code : "TRI",
			name : "Tripoli"
		},
		16 : {
			code : "ZGH",
			name : "Zgharta"
		},
		17 : {
			code : "ALE",
			name : "Aley"
		},
		18 : {
			code : "BAA",
			name : "Baabda"
		},
		19 : {
			code : "BYB",
			name : "Byblos"
		},
		20 : {
			code : "CHO",
			name : "Chouf"
		},
		21 : {
			code : "KES",
			name : "Kesrwan"
		},
		22 : {
			code : "MAT",
			name : "Matn"
		},
		23 : {
			code : "JEZ",
			name : "Jezzine"
		},
		24 : {
			code : "SID",
			name : "Sidon"
		},
		25 : {
			code : "TYR",
			name : "Tyre"
		}
	},
	LS : {
		1 : {
			code : "BE",
			name : "Berea"
		},
		2 : {
			code : "BB",
			name : "Butha-Buthe"
		},
		3 : {
			code : "LE",
			name : "Leribe"
		},
		4 : {
			code : "MF",
			name : "Mafeteng"
		},
		5 : {
			code : "MS",
			name : "Maseru"
		},
		6 : {
			code : "MH",
			name : "Mohale's Hoek"
		},
		7 : {
			code : "MK",
			name : "Mokhotlong"
		},
		8 : {
			code : "QN",
			name : "Qacha's Nek"
		},
		9 : {
			code : "QT",
			name : "Quthing"
		},
		10 : {
			code : "TT",
			name : "Thaba-Tseka"
		}
	},
	LR : {
		1 : {
			code : "BI",
			name : "Bomi"
		},
		2 : {
			code : "BG",
			name : "Bong"
		},
		3 : {
			code : "GB",
			name : "Grand Bassa"
		},
		4 : {
			code : "CM",
			name : "Grand Cape Mount"
		},
		5 : {
			code : "GG",
			name : "Grand Gedeh"
		},
		6 : {
			code : "GK",
			name : "Grand Kru"
		},
		7 : {
			code : "LO",
			name : "Lofa"
		},
		8 : {
			code : "MG",
			name : "Margibi"
		},
		9 : {
			code : "ML",
			name : "Maryland"
		},
		10 : {
			code : "MS",
			name : "Montserrado"
		},
		11 : {
			code : "NB",
			name : "Nimba"
		},
		12 : {
			code : "RC",
			name : "River Cess"
		},
		13 : {
			code : "SN",
			name : "Sinoe"
		}
	},
	LY : {
		1 : {
			code : "AJ",
			name : "Ajdabiya"
		},
		2 : {
			code : "AZ",
			name : "Al 'Aziziyah"
		},
		3 : {
			code : "FA",
			name : "Al Fatih"
		},
		4 : {
			code : "JA",
			name : "Al Jabal al Akhdar"
		},
		5 : {
			code : "JU",
			name : "Al Jufrah"
		},
		6 : {
			code : "KH",
			name : "Al Khums"
		},
		7 : {
			code : "KU",
			name : "Al Kufrah"
		},
		8 : {
			code : "NK",
			name : "An Nuqat al Khams"
		},
		9 : {
			code : "AS",
			name : "Ash Shati'"
		},
		10 : {
			code : "AW",
			name : "Awbari"
		},
		11 : {
			code : "ZA",
			name : "Az Zawiyah"
		},
		12 : {
			code : "BA",
			name : "Banghazi"
		},
		13 : {
			code : "DA",
			name : "Darnah"
		},
		14 : {
			code : "GD",
			name : "Ghadamis"
		},
		15 : {
			code : "GY",
			name : "Gharyan"
		},
		16 : {
			code : "MI",
			name : "Misratah"
		},
		17 : {
			code : "MZ",
			name : "Murzuq"
		},
		18 : {
			code : "SB",
			name : "Sabha"
		},
		19 : {
			code : "SW",
			name : "Sawfajjin"
		},
		20 : {
			code : "SU",
			name : "Surt"
		},
		21 : {
			code : "TL",
			name : "Tarabulus (Tripoli)"
		},
		22 : {
			code : "TH",
			name : "Tarhunah"
		},
		23 : {
			code : "TU",
			name : "Tubruq"
		},
		24 : {
			code : "YA",
			name : "Yafran"
		},
		25 : {
			code : "ZL",
			name : "Zlitan"
		}
	},
	LI : {
		1 : {
			code : "V",
			name : "Vaduz"
		},
		2 : {
			code : "A",
			name : "Schaan"
		},
		3 : {
			code : "B",
			name : "Balzers"
		},
		4 : {
			code : "N",
			name : "Triesen"
		},
		5 : {
			code : "E",
			name : "Eschen"
		},
		6 : {
			code : "M",
			name : "Mauren"
		},
		7 : {
			code : "T",
			name : "Triesenberg"
		},
		8 : {
			code : "R",
			name : "Ruggell"
		},
		9 : {
			code : "G",
			name : "Gamprin"
		},
		10 : {
			code : "L",
			name : "Schellenberg"
		},
		11 : {
			code : "P",
			name : "Planken"
		}
	},
	LT : {
		1 : {
			code : "AL",
			name : "Alytus"
		},
		2 : {
			code : "KA",
			name : "Kaunas"
		},
		3 : {
			code : "KL",
			name : "Klaipeda"
		},
		4 : {
			code : "MA",
			name : "Marijampole"
		},
		5 : {
			code : "PA",
			name : "Panevezys"
		},
		6 : {
			code : "SI",
			name : "Siauliai"
		},
		7 : {
			code : "TA",
			name : "Taurage"
		},
		8 : {
			code : "TE",
			name : "Telsiai"
		},
		9 : {
			code : "UT",
			name : "Utena"
		},
		10 : {
			code : "VI",
			name : "Vilnius"
		}
	},
	LU : {
		1 : {
			code : "DD",
			name : "Diekirch"
		},
		2 : {
			code : "DC",
			name : "Clervaux"
		},
		3 : {
			code : "DR",
			name : "Redange"
		},
		4 : {
			code : "DV",
			name : "Vianden"
		},
		5 : {
			code : "DW",
			name : "Wiltz"
		},
		6 : {
			code : "GG",
			name : "Grevenmacher"
		},
		7 : {
			code : "GE",
			name : "Echternach"
		},
		8 : {
			code : "GR",
			name : "Remich"
		},
		9 : {
			code : "LL",
			name : "Luxembourg"
		},
		10 : {
			code : "LC",
			name : "Capellen"
		},
		11 : {
			code : "LE",
			name : "Esch-sur-Alzette"
		},
		12 : {
			code : "LM",
			name : "Mersch"
		}
	},
	MO : {
		1 : {
			code : "OLF",
			name : "Our Lady Fatima Parish"
		},
		2 : {
			code : "ANT",
			name : "St. Anthony Parish"
		},
		3 : {
			code : "LAZ",
			name : "St. Lazarus Parish"
		},
		4 : {
			code : "CAT",
			name : "Cathedral Parish"
		},
		5 : {
			code : "LAW",
			name : "St. Lawrence Parish"
		}
	},
	MK : {
		1 : {
			code : "AER",
			name : "Aerodrom"
		},
		2 : {
			code : "ARA",
			name : "AraÄinovo"
		},
		3 : {
			code : "BER",
			name : "Berovo"
		},
		4 : {
			code : "BIT",
			name : "Bitola"
		},
		5 : {
			code : "BOG",
			name : "Bogdanci"
		},
		6 : {
			code : "BOG",
			name : "Bogovinje"
		},
		7 : {
			code : "BOS",
			name : "Bosilovo"
		},
		8 : {
			code : "BRV",
			name : "Brvenica"
		},
		9 : {
			code : "BUT",
			name : "Butel"
		},
		10 : {
			code : "ÄŒAI",
			name : "ÄŒair"
		},
		11 : {
			code : "ÄŒAÅ¡",
			name : "ÄŒaÅ¡ka"
		},
		12 : {
			code : "CEN",
			name : "Centar"
		},
		13 : {
			code : "CEN",
			name : "Centar Å½upa"
		},
		14 : {
			code : "ÄŒeÅ¡",
			name : "ÄŒeÅ¡inovo-ObleÅ¡"
		},
		15 : {
			code : "ÄŒUÄŒ",
			name : "ÄŒuÄer-Sandevo"
		},
		16 : {
			code : "DEB",
			name : "Debar"
		},
		17 : {
			code : "DEB",
			name : "Debarca"
		},
		18 : {
			code : "DEL",
			name : "DelÄevo"
		},
		19 : {
			code : "DEM",
			name : "Demir Hisar"
		},
		20 : {
			code : "DEM",
			name : "Demir Kapija"
		},
		21 : {
			code : "DOL",
			name : "Dolneni"
		},
		22 : {
			code : "DRU",
			name : "Drugovo"
		},
		23 : {
			code : "GAZ",
			name : "Gazi Baba"
		},
		24 : {
			code : "GEV",
			name : "Gevgelija"
		},
		25 : {
			code : "GJO",
			name : "GjorÄe Petrov"
		},
		26 : {
			code : "GOS",
			name : "Gostivar"
		},
		27 : {
			code : "GRA",
			name : "Gradsko"
		},
		28 : {
			code : "ILI",
			name : "Ilinden"
		},
		29 : {
			code : "JEG",
			name : "Jegunovce"
		},
		30 : {
			code : "KAR",
			name : "Karbinci"
		},
		31 : {
			code : "KAR",
			name : "KarpoÅ¡"
		},
		32 : {
			code : "KAV",
			name : "Kavadarci"
		},
		33 : {
			code : "KIÄŒ",
			name : "KiÄevo"
		},
		34 : {
			code : "KIS",
			name : "Kisela Voda"
		},
		35 : {
			code : "KOÄ",
			name : "KoÄani"
		},
		36 : {
			code : "KON",
			name : "KonÄe"
		},
		37 : {
			code : "KRA",
			name : "Kratovo"
		},
		38 : {
			code : "KRI",
			name : "Kriva Palanka"
		},
		39 : {
			code : "KRI",
			name : "KrivogaÅ¡tani"
		},
		40 : {
			code : "KRU",
			name : "KruÅ¡evo"
		},
		41 : {
			code : "KUM",
			name : "Kumanovo"
		},
		42 : {
			code : "LIP",
			name : "Lipkovo"
		},
		43 : {
			code : "LOZ",
			name : "Lozovo"
		},
		44 : {
			code : "MAK",
			name : "Makedonska Kamenica"
		},
		45 : {
			code : "MAK",
			name : "Makedonski Brod"
		},
		46 : {
			code : "MAV",
			name : "Mavrovo and RostuÅ¡a"
		},
		47 : {
			code : "MOG",
			name : "Mogila"
		},
		48 : {
			code : "NEG",
			name : "Negotino"
		},
		49 : {
			code : "NOV",
			name : "Novaci"
		},
		50 : {
			code : "NOV",
			name : "Novo Selo"
		},
		51 : {
			code : "OHR",
			name : "Ohrid"
		},
		52 : {
			code : "OSL",
			name : "Oslomej"
		},
		53 : {
			code : "PEH",
			name : "PehÄevo"
		},
		54 : {
			code : "PET",
			name : "Petrovec"
		},
		55 : {
			code : "PLA",
			name : "Plasnica"
		},
		56 : {
			code : "PRI",
			name : "Prilep"
		},
		57 : {
			code : "PRO",
			name : "ProbiÅ¡tip"
		},
		58 : {
			code : "RAD",
			name : "RadoviÅ¡"
		},
		59 : {
			code : "RAN",
			name : "Rankovce"
		},
		60 : {
			code : "RES",
			name : "Resen"
		},
		61 : {
			code : "ROS",
			name : "Rosoman"
		},
		62 : {
			code : "SAR",
			name : "Saraj"
		},
		63 : {
			code : "SOP",
			name : "SopiÅ¡te"
		},
		64 : {
			code : "STA",
			name : "Star Dojran"
		},
		65 : {
			code : "STA",
			name : "Staro NagoriÄane"
		},
		66 : {
			code : "Å TI",
			name : "Å tip"
		},
		67 : {
			code : "STR",
			name : "Struga"
		},
		68 : {
			code : "STR",
			name : "Strumica"
		},
		69 : {
			code : "STU",
			name : "StudeniÄani"
		},
		70 : {
			code : "Å UT",
			name : "Å uto Orizari"
		},
		71 : {
			code : "SVE",
			name : "Sveti Nikole"
		},
		72 : {
			code : "TEA",
			name : "Tearce"
		},
		73 : {
			code : "TET",
			name : "Tetovo"
		},
		74 : {
			code : "VAL",
			name : "Valandovo"
		},
		75 : {
			code : "VAS",
			name : "Vasilevo"
		},
		76 : {
			code : "VEL",
			name : "Veles"
		},
		77 : {
			code : "VEV",
			name : "VevÄani"
		},
		78 : {
			code : "VIN",
			name : "Vinica"
		},
		79 : {
			code : "VRA",
			name : "VraneÅ¡tica"
		},
		80 : {
			code : "VRA",
			name : "VrapÄiÅ¡te"
		},
		81 : {
			code : "ZAJ",
			name : "Zajas"
		},
		82 : {
			code : "ZEL",
			name : "Zelenikovo"
		},
		83 : {
			code : "Å½EL",
			name : "Å½elino"
		},
		84 : {
			code : "ZRN",
			name : "Zrnovci"
		}
	},
	MG : {
		1 : {
			code : "AN",
			name : "Antananarivo"
		},
		2 : {
			code : "AS",
			name : "Antsiranana"
		},
		3 : {
			code : "FN",
			name : "Fianarantsoa"
		},
		4 : {
			code : "MJ",
			name : "Mahajanga"
		},
		5 : {
			code : "TM",
			name : "Toamasina"
		},
		6 : {
			code : "TL",
			name : "Toliara"
		}
	},
	MW : {
		1 : {
			code : "BLK",
			name : "Balaka"
		},
		2 : {
			code : "BLT",
			name : "Blantyre"
		},
		3 : {
			code : "CKW",
			name : "Chikwawa"
		},
		4 : {
			code : "CRD",
			name : "Chiradzulu"
		},
		5 : {
			code : "CTP",
			name : "Chitipa"
		},
		6 : {
			code : "DDZ",
			name : "Dedza"
		},
		7 : {
			code : "DWA",
			name : "Dowa"
		},
		8 : {
			code : "KRG",
			name : "Karonga"
		},
		9 : {
			code : "KSG",
			name : "Kasungu"
		},
		10 : {
			code : "LKM",
			name : "Likoma"
		},
		11 : {
			code : "LLG",
			name : "Lilongwe"
		},
		12 : {
			code : "MCG",
			name : "Machinga"
		},
		13 : {
			code : "MGC",
			name : "Mangochi"
		},
		14 : {
			code : "MCH",
			name : "Mchinji"
		},
		15 : {
			code : "MLJ",
			name : "Mulanje"
		},
		16 : {
			code : "MWZ",
			name : "Mwanza"
		},
		17 : {
			code : "MZM",
			name : "Mzimba"
		},
		18 : {
			code : "NTU",
			name : "Ntcheu"
		},
		19 : {
			code : "NKB",
			name : "Nkhata Bay"
		},
		20 : {
			code : "NKH",
			name : "Nkhotakota"
		},
		21 : {
			code : "NSJ",
			name : "Nsanje"
		},
		22 : {
			code : "NTI",
			name : "Ntchisi"
		},
		23 : {
			code : "PHL",
			name : "Phalombe"
		},
		24 : {
			code : "RMP",
			name : "Rumphi"
		},
		25 : {
			code : "SLM",
			name : "Salima"
		},
		26 : {
			code : "THY",
			name : "Thyolo"
		},
		27 : {
			code : "ZBA",
			name : "Zomba"
		}
	},
	MY : {
		1 : {
			code : "Johor",
			name : "Johor"
		},
		2 : {
			code : "Kedah",
			name : "Kedah"
		},
		3 : {
			code : "Kelantan",
			name : "Kelantan"
		},
		4 : {
			code : "Labuan",
			name : "Labuan"
		},
		5 : {
			code : "Melaka",
			name : "Melaka"
		},
		6 : {
			code : "Negeri Sembilan",
			name : "Negeri Sembilan"
		},
		7 : {
			code : "Pahang",
			name : "Pahang"
		},
		8 : {
			code : "Perak",
			name : "Perak"
		},
		9 : {
			code : "Perlis",
			name : "Perlis"
		},
		10 : {
			code : "Pulau Pinang",
			name : "Pulau Pinang"
		},
		11 : {
			code : "Sabah",
			name : "Sabah"
		},
		12 : {
			code : "Sarawak",
			name : "Sarawak"
		},
		13 : {
			code : "Selangor",
			name : "Selangor"
		},
		14 : {
			code : "Terengganu",
			name : "Terengganu"
		},
		15 : {
			code : "Kuala Lumpur",
			name : "Kuala Lumpur"
		}
	},
	MV : {
		1 : {
			code : "AAD",
			name : "Ari Atoll Dheknu"
		},
		2 : {
			code : "AAU",
			name : "Ari Atoll Uthuru"
		},
		3 : {
			code : "ADD",
			name : "Addu"
		},
		4 : {
			code : "FAA",
			name : "Faadhippolhu"
		},
		5 : {
			code : "FEA",
			name : "Felidhe Atoll"
		},
		6 : {
			code : "FMU",
			name : "Fua Mulaku"
		},
		7 : {
			code : "HAD",
			name : "Huvadhu Atoll Dhekunu"
		},
		8 : {
			code : "HAU",
			name : "Huvadhu Atoll Uthuru"
		},
		9 : {
			code : "HDH",
			name : "Hadhdhunmathi"
		},
		10 : {
			code : "KLH",
			name : "Kolhumadulu"
		},
		11 : {
			code : "MAA",
			name : "Male Atoll"
		},
		12 : {
			code : "MAD",
			name : "Maalhosmadulu Dhekunu"
		},
		13 : {
			code : "MAU",
			name : "Maalhosmadulu Uthuru"
		},
		14 : {
			code : "MLD",
			name : "Miladhunmadulu Dhekunu"
		},
		15 : {
			code : "MLU",
			name : "Miladhunmadulu Uthuru"
		},
		16 : {
			code : "MUA",
			name : "Mulaku Atoll"
		},
		17 : {
			code : "NAD",
			name : "Nilandhe Atoll Dhekunu"
		},
		18 : {
			code : "NAU",
			name : "Nilandhe Atoll Uthuru"
		},
		19 : {
			code : "THD",
			name : "Thiladhunmathi Dhekunu"
		},
		20 : {
			code : "THU",
			name : "Thiladhunmathi Uthuru"
		}
	},
	ML : {
		1 : {
			code : "GA",
			name : "Gao"
		},
		2 : {
			code : "KY",
			name : "Kayes"
		},
		3 : {
			code : "KD",
			name : "Kidal"
		},
		4 : {
			code : "KL",
			name : "Koulikoro"
		},
		5 : {
			code : "MP",
			name : "Mopti"
		},
		6 : {
			code : "SG",
			name : "Segou"
		},
		7 : {
			code : "SK",
			name : "Sikasso"
		},
		8 : {
			code : "TB",
			name : "Tombouctou"
		},
		9 : {
			code : "CD",
			name : "Bamako Capital District"
		}
	},
	MT : {
		1 : {
			code : "ATT",
			name : "Attard"
		},
		2 : {
			code : "BAL",
			name : "Balzan"
		},
		3 : {
			code : "BGU",
			name : "Birgu"
		},
		4 : {
			code : "BKK",
			name : "Birkirkara"
		},
		5 : {
			code : "BRZ",
			name : "Birzebbuga"
		},
		6 : {
			code : "BOR",
			name : "Bormla"
		},
		7 : {
			code : "DIN",
			name : "Dingli"
		},
		8 : {
			code : "FGU",
			name : "Fgura"
		},
		9 : {
			code : "FLO",
			name : "Floriana"
		},
		10 : {
			code : "GDJ",
			name : "Gudja"
		},
		11 : {
			code : "GZR",
			name : "Gzira"
		},
		12 : {
			code : "GRG",
			name : "Gargur"
		},
		13 : {
			code : "GXQ",
			name : "Gaxaq"
		},
		14 : {
			code : "HMR",
			name : "Hamrun"
		},
		15 : {
			code : "IKL",
			name : "Iklin"
		},
		16 : {
			code : "ISL",
			name : "Isla"
		},
		17 : {
			code : "KLK",
			name : "Kalkara"
		},
		18 : {
			code : "KRK",
			name : "Kirkop"
		},
		19 : {
			code : "LIJ",
			name : "Lija"
		},
		20 : {
			code : "LUQ",
			name : "Luqa"
		},
		21 : {
			code : "MRS",
			name : "Marsa"
		},
		22 : {
			code : "MKL",
			name : "Marsaskala"
		},
		23 : {
			code : "MXL",
			name : "Marsaxlokk"
		},
		24 : {
			code : "MDN",
			name : "Mdina"
		},
		25 : {
			code : "MEL",
			name : "Melliea"
		},
		26 : {
			code : "MGR",
			name : "Mgarr"
		},
		27 : {
			code : "MST",
			name : "Mosta"
		},
		28 : {
			code : "MQA",
			name : "Mqabba"
		},
		29 : {
			code : "MSI",
			name : "Msida"
		},
		30 : {
			code : "MTF",
			name : "Mtarfa"
		},
		31 : {
			code : "NAX",
			name : "Naxxar"
		},
		32 : {
			code : "PAO",
			name : "Paola"
		},
		33 : {
			code : "PEM",
			name : "Pembroke"
		},
		34 : {
			code : "PIE",
			name : "Pieta"
		},
		35 : {
			code : "QOR",
			name : "Qormi"
		},
		36 : {
			code : "QRE",
			name : "Qrendi"
		},
		37 : {
			code : "RAB",
			name : "Rabat"
		},
		38 : {
			code : "SAF",
			name : "Safi"
		},
		39 : {
			code : "SGI",
			name : "San Giljan"
		},
		40 : {
			code : "SLU",
			name : "Santa Lucija"
		},
		41 : {
			code : "SPB",
			name : "San Pawl il-Bahar"
		},
		42 : {
			code : "SGW",
			name : "San Gwann"
		},
		43 : {
			code : "SVE",
			name : "Santa Venera"
		},
		44 : {
			code : "SIG",
			name : "Siggiewi"
		},
		45 : {
			code : "SLM",
			name : "Sliema"
		},
		46 : {
			code : "SWQ",
			name : "Swieqi"
		},
		47 : {
			code : "TXB",
			name : "Ta Xbiex"
		},
		48 : {
			code : "TRX",
			name : "Tarxien"
		},
		49 : {
			code : "VLT",
			name : "Valletta"
		},
		50 : {
			code : "XGJ",
			name : "Xgajra"
		},
		51 : {
			code : "ZBR",
			name : "Zabbar"
		},
		52 : {
			code : "ZBG",
			name : "Zebbug"
		},
		53 : {
			code : "ZJT",
			name : "Zejtun"
		},
		54 : {
			code : "ZRQ",
			name : "Zurrieq"
		},
		55 : {
			code : "FNT",
			name : "Fontana"
		},
		56 : {
			code : "GHJ",
			name : "Ghajnsielem"
		},
		57 : {
			code : "GHR",
			name : "Gharb"
		},
		58 : {
			code : "GHS",
			name : "Ghasri"
		},
		59 : {
			code : "KRC",
			name : "Kercem"
		},
		60 : {
			code : "MUN",
			name : "Munxar"
		},
		61 : {
			code : "NAD",
			name : "Nadur"
		},
		62 : {
			code : "QAL",
			name : "Qala"
		},
		63 : {
			code : "VIC",
			name : "Victoria"
		},
		64 : {
			code : "SLA",
			name : "San Lawrenz"
		},
		65 : {
			code : "SNT",
			name : "Sannat"
		},
		66 : {
			code : "ZAG",
			name : "Xagra"
		},
		67 : {
			code : "XEW",
			name : "Xewkija"
		},
		68 : {
			code : "ZEB",
			name : "Zebbug"
		}
	},
	MH : {
		1 : {
			code : "ALG",
			name : "Ailinginae"
		},
		2 : {
			code : "ALL",
			name : "Ailinglaplap"
		},
		3 : {
			code : "ALK",
			name : "Ailuk"
		},
		4 : {
			code : "ARN",
			name : "Arno"
		},
		5 : {
			code : "AUR",
			name : "Aur"
		},
		6 : {
			code : "BKR",
			name : "Bikar"
		},
		7 : {
			code : "BKN",
			name : "Bikini"
		},
		8 : {
			code : "BKK",
			name : "Bokak"
		},
		9 : {
			code : "EBN",
			name : "Ebon"
		},
		10 : {
			code : "ENT",
			name : "Enewetak"
		},
		11 : {
			code : "EKB",
			name : "Erikub"
		},
		12 : {
			code : "JBT",
			name : "Jabat"
		},
		13 : {
			code : "JLT",
			name : "Jaluit"
		},
		14 : {
			code : "JEM",
			name : "Jemo"
		},
		15 : {
			code : "KIL",
			name : "Kili"
		},
		16 : {
			code : "KWJ",
			name : "Kwajalein"
		},
		17 : {
			code : "LAE",
			name : "Lae"
		},
		18 : {
			code : "LIB",
			name : "Lib"
		},
		19 : {
			code : "LKP",
			name : "Likiep"
		},
		20 : {
			code : "MJR",
			name : "Majuro"
		},
		21 : {
			code : "MLP",
			name : "Maloelap"
		},
		22 : {
			code : "MJT",
			name : "Mejit"
		},
		23 : {
			code : "MIL",
			name : "Mili"
		},
		24 : {
			code : "NMK",
			name : "Namorik"
		},
		25 : {
			code : "NAM",
			name : "Namu"
		},
		26 : {
			code : "RGL",
			name : "Rongelap"
		},
		27 : {
			code : "RGK",
			name : "Rongrik"
		},
		28 : {
			code : "TOK",
			name : "Toke"
		},
		29 : {
			code : "UJA",
			name : "Ujae"
		},
		30 : {
			code : "UJL",
			name : "Ujelang"
		},
		31 : {
			code : "UTK",
			name : "Utirik"
		},
		32 : {
			code : "WTH",
			name : "Wotho"
		},
		33 : {
			code : "WTJ",
			name : "Wotje"
		}
	},
	MQ : {
		1 : {
			code : "LAJ",
			name : "L'Ajoupa-Bouillon"
		},
		2 : {
			code : "LES",
			name : "Les Anses-d'Arlet"
		},
		3 : {
			code : "BAS",
			name : "Basse-Pointe"
		},
		4 : {
			code : "BEL",
			name : "Bellefontaine"
		},
		5 : {
			code : "LE",
			name : "Le Carbet"
		},
		6 : {
			code : "CAS",
			name : "Case-Pilote"
		},
		7 : {
			code : "LE",
			name : "Le Diamant"
		},
		8 : {
			code : "DUC",
			name : "Ducos"
		},
		9 : {
			code : "FON",
			name : "Fonds-Saint-Denis"
		},
		10 : {
			code : "FOR",
			name : "Fort-De-France"
		},
		11 : {
			code : "LE",
			name : "Le FranÃ§ois"
		},
		12 : {
			code : "GRA",
			name : "Grand'RiviÃ¨re"
		},
		13 : {
			code : "GRO",
			name : "Gros-Morne"
		},
		14 : {
			code : "LE",
			name : "Le Lamentin"
		},
		15 : {
			code : "LE",
			name : "Le Lorrain"
		},
		16 : {
			code : "MAC",
			name : "Macouba"
		},
		17 : {
			code : "LE",
			name : "Le Marigot"
		},
		18 : {
			code : "LE",
			name : "Le Marin"
		},
		19 : {
			code : "LE",
			name : "Le Morne-Rouge"
		},
		20 : {
			code : "LE",
			name : "Le Morne-Vert"
		},
		21 : {
			code : "LE",
			name : "Le PrÃªcheur"
		},
		22 : {
			code : "RIV",
			name : "RiviÃ¨re-Pilote"
		},
		23 : {
			code : "RIV",
			name : "RiviÃ¨re-SalÃ©e"
		},
		24 : {
			code : "LE",
			name : "Le Robert"
		},
		25 : {
			code : "SAI",
			name : "Sainte-Anne"
		},
		26 : {
			code : "SAI",
			name : "Sainte-Luce"
		},
		27 : {
			code : "SAI",
			name : "Sainte-Marie"
		},
		28 : {
			code : "SAI",
			name : "Saint-Esprit"
		},
		29 : {
			code : "SAI",
			name : "Saint-Joseph"
		},
		30 : {
			code : "SAI",
			name : "Saint-Pierre"
		},
		31 : {
			code : "SCH",
			name : "SchÅ“lcher"
		},
		32 : {
			code : "LA",
			name : "La TrinitÃ©"
		},
		33 : {
			code : "LES",
			name : "Les Trois-ÃŽlets"
		},
		34 : {
			code : "LE",
			name : "Le Vauclin"
		}
	},
	MR : {
		1 : {
			code : "AD",
			name : "Adrar"
		},
		2 : {
			code : "AS",
			name : "Assaba"
		},
		3 : {
			code : "BR",
			name : "Brakna"
		},
		4 : {
			code : "DN",
			name : "Dakhlet Nouadhibou"
		},
		5 : {
			code : "GO",
			name : "Gorgol"
		},
		6 : {
			code : "GM",
			name : "Guidimaka"
		},
		7 : {
			code : "HC",
			name : "Hodh Ech Chargui"
		},
		8 : {
			code : "HG",
			name : "Hodh El Gharbi"
		},
		9 : {
			code : "IN",
			name : "Inchiri"
		},
		10 : {
			code : "TA",
			name : "Tagant"
		},
		11 : {
			code : "TZ",
			name : "Tiris Zemmour"
		},
		12 : {
			code : "TR",
			name : "Trarza"
		},
		13 : {
			code : "NO",
			name : "Nouakchott"
		}
	},
	MU : {
		1 : {
			code : "AG",
			name : "Agalega Islands"
		},
		2 : {
			code : "BL",
			name : "Black River"
		},
		3 : {
			code : "BR",
			name : "Beau Bassin-Rose Hill"
		},
		4 : {
			code : "CC",
			name : "Cargados Carajos Shoals (Saint B)"
		},
		5 : {
			code : "CU",
			name : "Curepipe"
		},
		6 : {
			code : "FL",
			name : "Flacq"
		},
		7 : {
			code : "GP",
			name : "Grand Port"
		},
		8 : {
			code : "MO",
			name : "Moka"
		},
		9 : {
			code : "PA",
			name : "Pamplemousses"
		},
		10 : {
			code : "PL",
			name : "Port Louis"
		},
		11 : {
			code : "PU",
			name : "Port Louis"
		},
		12 : {
			code : "PW",
			name : "Plaines Wilhems"
		},
		13 : {
			code : "QB",
			name : "Quatre Bornes"
		},
		14 : {
			code : "RO",
			name : "Rodrigues"
		},
		15 : {
			code : "RR",
			name : "Riviere du Rempart"
		},
		16 : {
			code : "SA",
			name : "Savanne"
		},
		17 : {
			code : "VP",
			name : "Vacoas-Phoenix"
		}
	},
	YT : {
		1 : {
			code : "DZA",
			name : "Dzaoudzi"
		},
		2 : {
			code : "PAM",
			name : "Pamandzi"
		},
		3 : {
			code : "MAM",
			name : "Mamoudzou"
		},
		4 : {
			code : "DEM",
			name : "Dembeni"
		},
		5 : {
			code : "BAN",
			name : "Bandrele"
		},
		6 : {
			code : "KAN",
			name : "Kani-KÃ©li"
		},
		7 : {
			code : "BOU",
			name : "BouÃ©ni"
		},
		8 : {
			code : "CHI",
			name : "Chirongui"
		},
		9 : {
			code : "SAD",
			name : "Sada"
		},
		10 : {
			code : "OUA",
			name : "Ouangani"
		},
		11 : {
			code : "CHI",
			name : "Chiconi"
		},
		12 : {
			code : "TSI",
			name : "Tsingoni"
		},
		13 : {
			code : "MTS",
			name : "M'Tsangamouji"
		},
		14 : {
			code : "ACO",
			name : "Acoua"
		},
		15 : {
			code : "MTS",
			name : "Mtsamboro"
		},
		16 : {
			code : "BAN",
			name : "Bandraboua"
		},
		17 : {
			code : "KOU",
			name : "Koungou"
		}
	},
	MX : {
		1 : {
			code : "AGU",
			name : "Aguascalientes"
		},
		2 : {
			code : "BCN",
			name : "Baja California Norte"
		},
		3 : {
			code : "BCS",
			name : "Baja California Sur"
		},
		4 : {
			code : "CAM",
			name : "Campeche"
		},
		5 : {
			code : "CHP",
			name : "Chiapas"
		},
		6 : {
			code : "CHH",
			name : "Chihuahua"
		},
		7 : {
			code : "COA",
			name : "Coahuila de Zaragoza"
		},
		8 : {
			code : "COL",
			name : "Colima"
		},
		9 : {
			code : "DIF",
			name : "Distrito Federal"
		},
		10 : {
			code : "DUR",
			name : "Durango"
		},
		11 : {
			code : "GUA",
			name : "Guanajuato"
		},
		12 : {
			code : "GRO",
			name : "Guerrero"
		},
		13 : {
			code : "HID",
			name : "Hidalgo"
		},
		14 : {
			code : "JAL",
			name : "Jalisco"
		},
		15 : {
			code : "MEX",
			name : "Mexico"
		},
		16 : {
			code : "MIC",
			name : "Michoacan de Ocampo"
		},
		17 : {
			code : "MOR",
			name : "Morelos"
		},
		18 : {
			code : "NAY",
			name : "Nayarit"
		},
		19 : {
			code : "NLE",
			name : "Nuevo Leon"
		},
		20 : {
			code : "OAX",
			name : "Oaxaca"
		},
		21 : {
			code : "PUE",
			name : "Puebla"
		},
		22 : {
			code : "QUE",
			name : "Queretaro de Arteaga"
		},
		23 : {
			code : "ROO",
			name : "Quintana Roo"
		},
		24 : {
			code : "SLP",
			name : "San Luis Potosi"
		},
		25 : {
			code : "SIN",
			name : "Sinaloa"
		},
		26 : {
			code : "SON",
			name : "Sonora"
		},
		27 : {
			code : "TAB",
			name : "Tabasco"
		},
		28 : {
			code : "TAM",
			name : "Tamaulipas"
		},
		29 : {
			code : "TLA",
			name : "Tlaxcala"
		},
		30 : {
			code : "VER",
			name : "Veracruz-Llave"
		},
		31 : {
			code : "YUC",
			name : "Yucatan"
		},
		32 : {
			code : "ZAC",
			name : "Zacatecas"
		}
	},
	FM : {
		1 : {
			code : "C",
			name : "Chuuk"
		},
		2 : {
			code : "K",
			name : "Kosrae"
		},
		3 : {
			code : "P",
			name : "Pohnpei"
		},
		4 : {
			code : "Y",
			name : "Yap"
		}
	},
	MD : {
		1 : {
			code : "GA",
			name : "Gagauzia"
		},
		2 : {
			code : "CU",
			name : "Chisinau"
		},
		3 : {
			code : "BA",
			name : "Balti"
		},
		4 : {
			code : "CA",
			name : "Cahul"
		},
		5 : {
			code : "ED",
			name : "Edinet"
		},
		6 : {
			code : "LA",
			name : "Lapusna"
		},
		7 : {
			code : "OR",
			name : "Orhei"
		},
		8 : {
			code : "SO",
			name : "Soroca"
		},
		9 : {
			code : "TI",
			name : "Tighina"
		},
		10 : {
			code : "UN",
			name : "Ungheni"
		},
		11 : {
			code : "SN",
			name : "StÃ¢nga Nistrului"
		}
	},
	MC : {
		1 : {
			code : "FV",
			name : "Fontvieille"
		},
		2 : {
			code : "LC",
			name : "La Condamine"
		},
		3 : {
			code : "MV",
			name : "Monaco-Ville"
		},
		4 : {
			code : "MC",
			name : "Monte-Carlo"
		}
	},
	MN : {
		1 : {
			code : "1",
			name : "Ulanbaatar"
		},
		2 : {
			code : "035",
			name : "Orhon"
		},
		3 : {
			code : "037",
			name : "Darhan uul"
		},
		4 : {
			code : "039",
			name : "Hentiy"
		},
		5 : {
			code : "041",
			name : "Hovsgol"
		},
		6 : {
			code : "043",
			name : "Hovd"
		},
		7 : {
			code : "046",
			name : "Uvs"
		},
		8 : {
			code : "047",
			name : "Tov"
		},
		9 : {
			code : "049",
			name : "Selenge"
		},
		10 : {
			code : "051",
			name : "Suhbaatar"
		},
		11 : {
			code : "053",
			name : "Omnogovi"
		},
		12 : {
			code : "055",
			name : "Ovorhangay"
		},
		13 : {
			code : "057",
			name : "Dzavhan"
		},
		14 : {
			code : "059",
			name : "DundgovL"
		},
		15 : {
			code : "061",
			name : "Dornod"
		},
		16 : {
			code : "063",
			name : "Dornogov"
		},
		17 : {
			code : "064",
			name : "Govi-Sumber"
		},
		18 : {
			code : "065",
			name : "Govi-Altay"
		},
		19 : {
			code : "067",
			name : "Bulgan"
		},
		20 : {
			code : "069",
			name : "Bayanhongor"
		},
		21 : {
			code : "071",
			name : "Bayan-Olgiy"
		},
		22 : {
			code : "073",
			name : "Arhangay"
		}
	},
	MS : {
		1 : {
			code : "A",
			name : "Saint Anthony"
		},
		2 : {
			code : "G",
			name : "Saint Georges"
		},
		3 : {
			code : "P",
			name : "Saint Peter"
		}
	},
	MA : {
		1 : {
			code : "AGD",
			name : "Agadir"
		},
		2 : {
			code : "HOC",
			name : "Al Hoceima"
		},
		3 : {
			code : "AZI",
			name : "Azilal"
		},
		4 : {
			code : "BME",
			name : "Beni Mellal"
		},
		5 : {
			code : "BSL",
			name : "Ben Slimane"
		},
		6 : {
			code : "BLM",
			name : "Boulemane"
		},
		7 : {
			code : "CBL",
			name : "Casablanca"
		},
		8 : {
			code : "CHA",
			name : "Chaouen"
		},
		9 : {
			code : "EJA",
			name : "El Jadida"
		},
		10 : {
			code : "EKS",
			name : "El Kelaa des Sraghna"
		},
		11 : {
			code : "ERA",
			name : "Er Rachidia"
		},
		12 : {
			code : "ESS",
			name : "Essaouira"
		},
		13 : {
			code : "FES",
			name : "Fes"
		},
		14 : {
			code : "FIG",
			name : "Figuig"
		},
		15 : {
			code : "GLM",
			name : "Guelmim"
		},
		16 : {
			code : "IFR",
			name : "Ifrane"
		},
		17 : {
			code : "KEN",
			name : "Kenitra"
		},
		18 : {
			code : "KHM",
			name : "Khemisset"
		},
		19 : {
			code : "KHN",
			name : "Khenifra"
		},
		20 : {
			code : "KHO",
			name : "Khouribga"
		},
		21 : {
			code : "LYN",
			name : "Laayoune"
		},
		22 : {
			code : "LAR",
			name : "Larache"
		},
		23 : {
			code : "MRK",
			name : "Marrakech"
		},
		24 : {
			code : "MKN",
			name : "Meknes"
		},
		25 : {
			code : "NAD",
			name : "Nador"
		},
		26 : {
			code : "ORZ",
			name : "Ouarzazate"
		},
		27 : {
			code : "OUJ",
			name : "Oujda"
		},
		28 : {
			code : "RSA",
			name : "Rabat-Sale"
		},
		29 : {
			code : "SAF",
			name : "Safi"
		},
		30 : {
			code : "SET",
			name : "Settat"
		},
		31 : {
			code : "SKA",
			name : "Sidi Kacem"
		},
		32 : {
			code : "TGR",
			name : "Tangier"
		},
		33 : {
			code : "TAN",
			name : "Tan-Tan"
		},
		34 : {
			code : "TAO",
			name : "Taounate"
		},
		35 : {
			code : "TRD",
			name : "Taroudannt"
		},
		36 : {
			code : "TAT",
			name : "Tata"
		},
		37 : {
			code : "TAZ",
			name : "Taza"
		},
		38 : {
			code : "TET",
			name : "Tetouan"
		},
		39 : {
			code : "TIZ",
			name : "Tiznit"
		},
		40 : {
			code : "ADK",
			name : "Ad Dakhla"
		},
		41 : {
			code : "BJD",
			name : "Boujdour"
		},
		42 : {
			code : "ESM",
			name : "Es Smara"
		}
	},
	MZ : {
		1 : {
			code : "CD",
			name : "Cabo Delgado"
		},
		2 : {
			code : "GZ",
			name : "Gaza"
		},
		3 : {
			code : "IN",
			name : "Inhambane"
		},
		4 : {
			code : "MN",
			name : "Manica"
		},
		5 : {
			code : "MC",
			name : "Maputo (city)"
		},
		6 : {
			code : "MP",
			name : "Maputo"
		},
		7 : {
			code : "NA",
			name : "Nampula"
		},
		8 : {
			code : "NI",
			name : "Niassa"
		},
		9 : {
			code : "SO",
			name : "Sofala"
		},
		10 : {
			code : "TE",
			name : "Tete"
		},
		11 : {
			code : "ZA",
			name : "Zambezia"
		}
	},
	MM : {
		1 : {
			code : "AY",
			name : "Ayeyarwady"
		},
		2 : {
			code : "BG",
			name : "Bago"
		},
		3 : {
			code : "MG",
			name : "Magway"
		},
		4 : {
			code : "MD",
			name : "Mandalay"
		},
		5 : {
			code : "SG",
			name : "Sagaing"
		},
		6 : {
			code : "TN",
			name : "Tanintharyi"
		},
		7 : {
			code : "YG",
			name : "Yangon"
		},
		8 : {
			code : "CH",
			name : "Chin State"
		},
		9 : {
			code : "KC",
			name : "Kachin State"
		},
		10 : {
			code : "KH",
			name : "Kayah State"
		},
		11 : {
			code : "KN",
			name : "Kayin State"
		},
		12 : {
			code : "MN",
			name : "Mon State"
		},
		13 : {
			code : "RK",
			name : "Rakhine State"
		},
		14 : {
			code : "SH",
			name : "Shan State"
		}
	},
	NA : {
		1 : {
			code : "CA",
			name : "Caprivi"
		},
		2 : {
			code : "ER",
			name : "Erongo"
		},
		3 : {
			code : "HA",
			name : "Hardap"
		},
		4 : {
			code : "KR",
			name : "Karas"
		},
		5 : {
			code : "KV",
			name : "Kavango"
		},
		6 : {
			code : "KH",
			name : "Khomas"
		},
		7 : {
			code : "KU",
			name : "Kunene"
		},
		8 : {
			code : "OW",
			name : "Ohangwena"
		},
		9 : {
			code : "OK",
			name : "Omaheke"
		},
		10 : {
			code : "OT",
			name : "Omusati"
		},
		11 : {
			code : "ON",
			name : "Oshana"
		},
		12 : {
			code : "OO",
			name : "Oshikoto"
		},
		13 : {
			code : "OJ",
			name : "Otjozondjupa"
		}
	},
	NR : {
		1 : {
			code : "AO",
			name : "Aiwo"
		},
		2 : {
			code : "AA",
			name : "Anabar"
		},
		3 : {
			code : "AT",
			name : "Anetan"
		},
		4 : {
			code : "AI",
			name : "Anibare"
		},
		5 : {
			code : "BA",
			name : "Baiti"
		},
		6 : {
			code : "BO",
			name : "Boe"
		},
		7 : {
			code : "BU",
			name : "Buada"
		},
		8 : {
			code : "DE",
			name : "Denigomodu"
		},
		9 : {
			code : "EW",
			name : "Ewa"
		},
		10 : {
			code : "IJ",
			name : "Ijuw"
		},
		11 : {
			code : "ME",
			name : "Meneng"
		},
		12 : {
			code : "NI",
			name : "Nibok"
		},
		13 : {
			code : "UA",
			name : "Uaboe"
		},
		14 : {
			code : "YA",
			name : "Yaren"
		}
	},
	NP : {
		1 : {
			code : "BA",
			name : "Bagmati"
		},
		2 : {
			code : "BH",
			name : "Bheri"
		},
		3 : {
			code : "DH",
			name : "Dhawalagiri"
		},
		4 : {
			code : "GA",
			name : "Gandaki"
		},
		5 : {
			code : "JA",
			name : "Janakpur"
		},
		6 : {
			code : "KA",
			name : "Karnali"
		},
		7 : {
			code : "KO",
			name : "Kosi"
		},
		8 : {
			code : "LU",
			name : "Lumbini"
		},
		9 : {
			code : "MA",
			name : "Mahakali"
		},
		10 : {
			code : "ME",
			name : "Mechi"
		},
		11 : {
			code : "NA",
			name : "Narayani"
		},
		12 : {
			code : "RA",
			name : "Rapti"
		},
		13 : {
			code : "SA",
			name : "Sagarmatha"
		},
		14 : {
			code : "SE",
			name : "Seti"
		}
	},
	NL : {
		1 : {
			code : "DR",
			name : "Drenthe"
		},
		2 : {
			code : "FL",
			name : "Flevoland"
		},
		3 : {
			code : "FR",
			name : "Friesland"
		},
		4 : {
			code : "GE",
			name : "Gelderland"
		},
		5 : {
			code : "GR",
			name : "Groningen"
		},
		6 : {
			code : "LI",
			name : "Limburg"
		},
		7 : {
			code : "NB",
			name : "Noord Brabant"
		},
		8 : {
			code : "NH",
			name : "Noord Holland"
		},
		9 : {
			code : "OV",
			name : "Overijssel"
		},
		10 : {
			code : "UT",
			name : "Utrecht"
		},
		11 : {
			code : "ZE",
			name : "Zeeland"
		},
		12 : {
			code : "ZH",
			name : "Zuid Holland"
		}
	},
	AN : {
		1 : {
			code : "BON",
			name : "Bonaire"
		},
		2 : {
			code : "CUR",
			name : "CuraÃ§ao"
		},
		3 : {
			code : "SAB",
			name : "Saba"
		},
		4 : {
			code : "SEU",
			name : "Sint Eustatius"
		},
		5 : {
			code : "SMA",
			name : "Sint Maarten"
		}
	},
	NC : {
		1 : {
			code : "L",
			name : "Iles Loyaute"
		},
		2 : {
			code : "N",
			name : "Nord"
		},
		3 : {
			code : "S",
			name : "Sud"
		}
	},
	NZ : {
		1 : {
			code : "AUK",
			name : "Auckland"
		},
		2 : {
			code : "BOP",
			name : "Bay of Plenty"
		},
		3 : {
			code : "CAN",
			name : "Canterbury"
		},
		4 : {
			code : "COR",
			name : "Coromandel"
		},
		5 : {
			code : "GIS",
			name : "Gisborne"
		},
		6 : {
			code : "FIO",
			name : "Fiordland"
		},
		7 : {
			code : "HKB",
			name : "Hawke's Bay"
		},
		8 : {
			code : "MBH",
			name : "Marlborough"
		},
		9 : {
			code : "MWT",
			name : "Manawatu-Wanganui"
		},
		10 : {
			code : "MCM",
			name : "Mt Cook-Mackenzie"
		},
		11 : {
			code : "NSN",
			name : "Nelson"
		},
		12 : {
			code : "NTL",
			name : "Northland"
		},
		13 : {
			code : "OTA",
			name : "Otago"
		},
		14 : {
			code : "STL",
			name : "Southland"
		},
		15 : {
			code : "TKI",
			name : "Taranaki"
		},
		16 : {
			code : "WGN",
			name : "Wellington"
		},
		17 : {
			code : "WKO",
			name : "Waikato"
		},
		18 : {
			code : "WAI",
			name : "Wairprarapa"
		},
		19 : {
			code : "WTC",
			name : "West Coast"
		}
	},
	NI : {
		1 : {
			code : "AN",
			name : "Atlantico Norte"
		},
		2 : {
			code : "AS",
			name : "Atlantico Sur"
		},
		3 : {
			code : "BO",
			name : "Boaco"
		},
		4 : {
			code : "CA",
			name : "Carazo"
		},
		5 : {
			code : "CI",
			name : "Chinandega"
		},
		6 : {
			code : "CO",
			name : "Chontales"
		},
		7 : {
			code : "ES",
			name : "Esteli"
		},
		8 : {
			code : "GR",
			name : "Granada"
		},
		9 : {
			code : "JI",
			name : "Jinotega"
		},
		10 : {
			code : "LE",
			name : "Leon"
		},
		11 : {
			code : "MD",
			name : "Madriz"
		},
		12 : {
			code : "MN",
			name : "Managua"
		},
		13 : {
			code : "MS",
			name : "Masaya"
		},
		14 : {
			code : "MT",
			name : "Matagalpa"
		},
		15 : {
			code : "NS",
			name : "Nuevo Segovia"
		},
		16 : {
			code : "RS",
			name : "Rio San Juan"
		},
		17 : {
			code : "RI",
			name : "Rivas"
		}
	},
	NE : {
		1 : {
			code : "AG",
			name : "Agadez"
		},
		2 : {
			code : "DF",
			name : "Diffa"
		},
		3 : {
			code : "DS",
			name : "Dosso"
		},
		4 : {
			code : "MA",
			name : "Maradi"
		},
		5 : {
			code : "NM",
			name : "Niamey"
		},
		6 : {
			code : "TH",
			name : "Tahoua"
		},
		7 : {
			code : "TL",
			name : "Tillaberi"
		},
		8 : {
			code : "ZD",
			name : "Zinder"
		}
	},
	NG : {
		1 : {
			code : "AB",
			name : "Abia"
		},
		2 : {
			code : "CT",
			name : "Abuja Federal Capital Territory"
		},
		3 : {
			code : "AD",
			name : "Adamawa"
		},
		4 : {
			code : "AK",
			name : "Akwa Ibom"
		},
		5 : {
			code : "AN",
			name : "Anambra"
		},
		6 : {
			code : "BC",
			name : "Bauchi"
		},
		7 : {
			code : "BY",
			name : "Bayelsa"
		},
		8 : {
			code : "BN",
			name : "Benue"
		},
		9 : {
			code : "BO",
			name : "Borno"
		},
		10 : {
			code : "CR",
			name : "Cross River"
		},
		11 : {
			code : "DE",
			name : "Delta"
		},
		12 : {
			code : "EB",
			name : "Ebonyi"
		},
		13 : {
			code : "ED",
			name : "Edo"
		},
		14 : {
			code : "EK",
			name : "Ekiti"
		},
		15 : {
			code : "EN",
			name : "Enugu"
		},
		16 : {
			code : "GO",
			name : "Gombe"
		},
		17 : {
			code : "IM",
			name : "Imo"
		},
		18 : {
			code : "JI",
			name : "Jigawa"
		},
		19 : {
			code : "KD",
			name : "Kaduna"
		},
		20 : {
			code : "KN",
			name : "Kano"
		},
		21 : {
			code : "KT",
			name : "Katsina"
		},
		22 : {
			code : "KE",
			name : "Kebbi"
		},
		23 : {
			code : "KO",
			name : "Kogi"
		},
		24 : {
			code : "KW",
			name : "Kwara"
		},
		25 : {
			code : "LA",
			name : "Lagos"
		},
		26 : {
			code : "NA",
			name : "Nassarawa"
		},
		27 : {
			code : "NI",
			name : "Niger"
		},
		28 : {
			code : "OG",
			name : "Ogun"
		},
		29 : {
			code : "ONG",
			name : "Ondo"
		},
		30 : {
			code : "OS",
			name : "Osun"
		},
		31 : {
			code : "OY",
			name : "Oyo"
		},
		32 : {
			code : "PL",
			name : "Plateau"
		},
		33 : {
			code : "RI",
			name : "Rivers"
		},
		34 : {
			code : "SO",
			name : "Sokoto"
		},
		35 : {
			code : "TA",
			name : "Taraba"
		},
		36 : {
			code : "YO",
			name : "Yobe"
		},
		37 : {
			code : "ZA",
			name : "Zamfara"
		}
	},
	NU : {
		1 : {
			code : "MAK",
			name : "Makefu"
		},
		2 : {
			code : "TUA",
			name : "Tuapa"
		},
		3 : {
			code : "NAM",
			name : "Namukulu"
		},
		4 : {
			code : "HIK",
			name : "Hikutavake"
		},
		5 : {
			code : "TOI",
			name : "Toi"
		},
		6 : {
			code : "MUT",
			name : "Mutalau"
		},
		7 : {
			code : "LAK",
			name : "Lakepa"
		},
		8 : {
			code : "LIK",
			name : "Liku"
		},
		9 : {
			code : "HAK",
			name : "Hakupu"
		},
		10 : {
			code : "VAI",
			name : "Vaiea"
		},
		11 : {
			code : "AVA",
			name : "Avatele"
		},
		12 : {
			code : "TAM",
			name : "Tamakautoga"
		},
		13 : {
			code : "ALO",
			name : "Alofi South"
		},
		14 : {
			code : "ALO",
			name : "Alofi North"
		}
	},
	NF : {
		1 : {
			code : "NOR",
			name : "Norfolk Island"
		}
	},
	MP : {
		1 : {
			code : "N",
			name : "Northern Islands"
		},
		2 : {
			code : "R",
			name : "Rota"
		},
		3 : {
			code : "S",
			name : "Saipan"
		},
		4 : {
			code : "T",
			name : "Tinian"
		}
	},
	NO : {
		1 : {
			code : "AK",
			name : "Akershus"
		},
		2 : {
			code : "AA",
			name : "Aust-Agder"
		},
		3 : {
			code : "BU",
			name : "Buskerud"
		},
		4 : {
			code : "FM",
			name : "Finnmark"
		},
		5 : {
			code : "HM",
			name : "Hedmark"
		},
		6 : {
			code : "HL",
			name : "Hordaland"
		},
		7 : {
			code : "MR",
			name : "MÃ¸re og Romsdal"
		},
		8 : {
			code : "NL",
			name : "Nordland"
		},
		9 : {
			code : "NT",
			name : "Nord-TrÃ¸ndelag"
		},
		10 : {
			code : "OP",
			name : "Oppland"
		},
		11 : {
			code : "OL",
			name : "Oslo"
		},
		12 : {
			code : "RL",
			name : "Rogaland"
		},
		13 : {
			code : "SJ",
			name : "Sogn og Fjordane"
		},
		14 : {
			code : "ST",
			name : "SÃ¸r-TrÃ¸ndelag"
		},
		15 : {
			code : "SV",
			name : "Svalbard"
		},
		16 : {
			code : "TM",
			name : "Telemark"
		},
		17 : {
			code : "TR",
			name : "Troms"
		},
		18 : {
			code : "VA",
			name : "Vest-Agder"
		},
		19 : {
			code : "VF",
			name : "Vestfold"
		},
		20 : {
			code : "OF",
			name : "Ã˜stfold"
		}
	},
	OM : {
		1 : {
			code : "DA",
			name : "Ad Dakhiliyah"
		},
		2 : {
			code : "BA",
			name : "Al Batinah"
		},
		3 : {
			code : "WU",
			name : "Al Wusta"
		},
		4 : {
			code : "SH",
			name : "Ash Sharqiyah"
		},
		5 : {
			code : "ZA",
			name : "Az Zahirah"
		},
		6 : {
			code : "MA",
			name : "Masqat"
		},
		7 : {
			code : "MU",
			name : "Musandam"
		},
		8 : {
			code : "ZU",
			name : "Zufar"
		}
	},
	PK : {
		1 : {
			code : "B",
			name : "Balochistan"
		},
		2 : {
			code : "T",
			name : "Federally Administered Tribal Ar"
		},
		3 : {
			code : "I",
			name : "Islamabad Capital Territory"
		},
		4 : {
			code : "N",
			name : "North-West Frontier"
		},
		5 : {
			code : "P",
			name : "Punjab"
		},
		6 : {
			code : "S",
			name : "Sindh"
		}
	},
	PW : {
		1 : {
			code : "AM",
			name : "Aimeliik"
		},
		2 : {
			code : "AR",
			name : "Airai"
		},
		3 : {
			code : "AN",
			name : "Angaur"
		},
		4 : {
			code : "HA",
			name : "Hatohobei"
		},
		5 : {
			code : "KA",
			name : "Kayangel"
		},
		6 : {
			code : "KO",
			name : "Koror"
		},
		7 : {
			code : "ME",
			name : "Melekeok"
		},
		8 : {
			code : "NA",
			name : "Ngaraard"
		},
		9 : {
			code : "NG",
			name : "Ngarchelong"
		},
		10 : {
			code : "ND",
			name : "Ngardmau"
		},
		11 : {
			code : "NT",
			name : "Ngatpang"
		},
		12 : {
			code : "NC",
			name : "Ngchesar"
		},
		13 : {
			code : "NR",
			name : "Ngeremlengui"
		},
		14 : {
			code : "NW",
			name : "Ngiwal"
		},
		15 : {
			code : "PE",
			name : "Peleliu"
		},
		16 : {
			code : "SO",
			name : "Sonsorol"
		}
	},
	PA : {
		1 : {
			code : "BT",
			name : "Bocas del Toro"
		},
		2 : {
			code : "CH",
			name : "Chiriqui"
		},
		3 : {
			code : "CC",
			name : "Cocle"
		},
		4 : {
			code : "CL",
			name : "Colon"
		},
		5 : {
			code : "DA",
			name : "Darien"
		},
		6 : {
			code : "HE",
			name : "Herrera"
		},
		7 : {
			code : "LS",
			name : "Los Santos"
		},
		8 : {
			code : "PA",
			name : "Panama"
		},
		9 : {
			code : "SB",
			name : "San Blas"
		},
		10 : {
			code : "VG",
			name : "Veraguas"
		}
	},
	PG : {
		1 : {
			code : "BV",
			name : "Bougainville"
		},
		2 : {
			code : "CE",
			name : "Central"
		},
		3 : {
			code : "CH",
			name : "Chimbu"
		},
		4 : {
			code : "EH",
			name : "Eastern Highlands"
		},
		5 : {
			code : "EB",
			name : "East New Britain"
		},
		6 : {
			code : "ES",
			name : "East Sepik"
		},
		7 : {
			code : "EN",
			name : "Enga"
		},
		8 : {
			code : "GU",
			name : "Gulf"
		},
		9 : {
			code : "MD",
			name : "Madang"
		},
		10 : {
			code : "MN",
			name : "Manus"
		},
		11 : {
			code : "MB",
			name : "Milne Bay"
		},
		12 : {
			code : "MR",
			name : "Morobe"
		},
		13 : {
			code : "NC",
			name : "National Capital"
		},
		14 : {
			code : "NI",
			name : "New Ireland"
		},
		15 : {
			code : "NO",
			name : "Northern"
		},
		16 : {
			code : "SA",
			name : "Sandaun"
		},
		17 : {
			code : "SH",
			name : "Southern Highlands"
		},
		18 : {
			code : "WE",
			name : "Western"
		},
		19 : {
			code : "WH",
			name : "Western Highlands"
		},
		20 : {
			code : "WB",
			name : "West New Britain"
		}
	},
	PY : {
		1 : {
			code : "AG",
			name : "Alto Paraguay"
		},
		2 : {
			code : "AN",
			name : "Alto Parana"
		},
		3 : {
			code : "AM",
			name : "Amambay"
		},
		4 : {
			code : "AS",
			name : "Asuncion"
		},
		5 : {
			code : "BO",
			name : "Boqueron"
		},
		6 : {
			code : "CG",
			name : "Caaguazu"
		},
		7 : {
			code : "CZ",
			name : "Caazapa"
		},
		8 : {
			code : "CN",
			name : "Canindeyu"
		},
		9 : {
			code : "CE",
			name : "Central"
		},
		10 : {
			code : "CC",
			name : "Concepcion"
		},
		11 : {
			code : "CD",
			name : "Cordillera"
		},
		12 : {
			code : "GU",
			name : "Guaira"
		},
		13 : {
			code : "IT",
			name : "Itapua"
		},
		14 : {
			code : "MI",
			name : "Misiones"
		},
		15 : {
			code : "NE",
			name : "Neembucu"
		},
		16 : {
			code : "PA",
			name : "Paraguari"
		},
		17 : {
			code : "PH",
			name : "Presidente Hayes"
		},
		18 : {
			code : "SP",
			name : "San Pedro"
		}
	},
	PE : {
		1 : {
			code : "AM",
			name : "Amazonas"
		},
		2 : {
			code : "AN",
			name : "Ancash"
		},
		3 : {
			code : "AP",
			name : "Apurimac"
		},
		4 : {
			code : "AR",
			name : "Arequipa"
		},
		5 : {
			code : "AY",
			name : "Ayacucho"
		},
		6 : {
			code : "CJ",
			name : "Cajamarca"
		},
		7 : {
			code : "CL",
			name : "Callao"
		},
		8 : {
			code : "CU",
			name : "Cusco"
		},
		9 : {
			code : "HV",
			name : "Huancavelica"
		},
		10 : {
			code : "HO",
			name : "Huanuco"
		},
		11 : {
			code : "IC",
			name : "Ica"
		},
		12 : {
			code : "JU",
			name : "Junin"
		},
		13 : {
			code : "LD",
			name : "La Libertad"
		},
		14 : {
			code : "LY",
			name : "Lambayeque"
		},
		15 : {
			code : "LI",
			name : "Lima"
		},
		16 : {
			code : "LO",
			name : "Loreto"
		},
		17 : {
			code : "MD",
			name : "Madre de Dios"
		},
		18 : {
			code : "MO",
			name : "Moquegua"
		},
		19 : {
			code : "PA",
			name : "Pasco"
		},
		20 : {
			code : "PI",
			name : "Piura"
		},
		21 : {
			code : "PU",
			name : "Puno"
		},
		22 : {
			code : "SM",
			name : "San Martin"
		},
		23 : {
			code : "TA",
			name : "Tacna"
		},
		24 : {
			code : "TU",
			name : "Tumbes"
		},
		25 : {
			code : "UC",
			name : "Ucayali"
		}
	},
	PH : {
		1 : {
			code : "ABR",
			name : "Abra"
		},
		2 : {
			code : "ANO",
			name : "Agusan del Norte"
		},
		3 : {
			code : "ASU",
			name : "Agusan del Sur"
		},
		4 : {
			code : "AKL",
			name : "Aklan"
		},
		5 : {
			code : "ALB",
			name : "Albay"
		},
		6 : {
			code : "ANT",
			name : "Antique"
		},
		7 : {
			code : "APY",
			name : "Apayao"
		},
		8 : {
			code : "AUR",
			name : "Aurora"
		},
		9 : {
			code : "BAS",
			name : "Basilan"
		},
		10 : {
			code : "BTA",
			name : "Bataan"
		},
		11 : {
			code : "BTE",
			name : "Batanes"
		},
		12 : {
			code : "BTG",
			name : "Batangas"
		},
		13 : {
			code : "BLR",
			name : "Biliran"
		},
		14 : {
			code : "BEN",
			name : "Benguet"
		},
		15 : {
			code : "BOL",
			name : "Bohol"
		},
		16 : {
			code : "BUK",
			name : "Bukidnon"
		},
		17 : {
			code : "BUL",
			name : "Bulacan"
		},
		18 : {
			code : "CAG",
			name : "Cagayan"
		},
		19 : {
			code : "CNO",
			name : "Camarines Norte"
		},
		20 : {
			code : "CSU",
			name : "Camarines Sur"
		},
		21 : {
			code : "CAM",
			name : "Camiguin"
		},
		22 : {
			code : "CAP",
			name : "Capiz"
		},
		23 : {
			code : "CAT",
			name : "Catanduanes"
		},
		24 : {
			code : "CAV",
			name : "Cavite"
		},
		25 : {
			code : "CEB",
			name : "Cebu"
		},
		26 : {
			code : "CMP",
			name : "Compostela"
		},
		27 : {
			code : "DNO",
			name : "Davao del Norte"
		},
		28 : {
			code : "DSU",
			name : "Davao del Sur"
		},
		29 : {
			code : "DOR",
			name : "Davao Oriental"
		},
		30 : {
			code : "ESA",
			name : "Eastern Samar"
		},
		31 : {
			code : "GUI",
			name : "Guimaras"
		},
		32 : {
			code : "IFU",
			name : "Ifugao"
		},
		33 : {
			code : "INO",
			name : "Ilocos Norte"
		},
		34 : {
			code : "ISU",
			name : "Ilocos Sur"
		},
		35 : {
			code : "ILO",
			name : "Iloilo"
		},
		36 : {
			code : "ISA",
			name : "Isabela"
		},
		37 : {
			code : "KAL",
			name : "Kalinga"
		},
		38 : {
			code : "LAG",
			name : "Laguna"
		},
		39 : {
			code : "LNO",
			name : "Lanao del Norte"
		},
		40 : {
			code : "LSU",
			name : "Lanao del Sur"
		},
		41 : {
			code : "UNI",
			name : "La Union"
		},
		42 : {
			code : "LEY",
			name : "Leyte"
		},
		43 : {
			code : "MAG",
			name : "Maguindanao"
		},
		44 : {
			code : "MRN",
			name : "Marinduque"
		},
		45 : {
			code : "MSB",
			name : "Masbate"
		},
		46 : {
			code : "MIC",
			name : "Mindoro Occidental"
		},
		47 : {
			code : "MIR",
			name : "Mindoro Oriental"
		},
		48 : {
			code : "MSC",
			name : "Misamis Occidental"
		},
		49 : {
			code : "MOR",
			name : "Misamis Oriental"
		},
		50 : {
			code : "MOP",
			name : "Mountain"
		},
		51 : {
			code : "NOC",
			name : "Negros Occidental"
		},
		52 : {
			code : "NOR",
			name : "Negros Oriental"
		},
		53 : {
			code : "NCT",
			name : "North Cotabato"
		},
		54 : {
			code : "NSM",
			name : "Northern Samar"
		},
		55 : {
			code : "NEC",
			name : "Nueva Ecija"
		},
		56 : {
			code : "NVZ",
			name : "Nueva Vizcaya"
		},
		57 : {
			code : "PLW",
			name : "Palawan"
		},
		58 : {
			code : "PMP",
			name : "Pampanga"
		},
		59 : {
			code : "PNG",
			name : "Pangasinan"
		},
		60 : {
			code : "QZN",
			name : "Quezon"
		},
		61 : {
			code : "QRN",
			name : "Quirino"
		},
		62 : {
			code : "RIZ",
			name : "Rizal"
		},
		63 : {
			code : "ROM",
			name : "Romblon"
		},
		64 : {
			code : "SMR",
			name : "Samar"
		},
		65 : {
			code : "SRG",
			name : "Sarangani"
		},
		66 : {
			code : "SQJ",
			name : "Siquijor"
		},
		67 : {
			code : "SRS",
			name : "Sorsogon"
		},
		68 : {
			code : "SCO",
			name : "South Cotabato"
		},
		69 : {
			code : "SLE",
			name : "Southern Leyte"
		},
		70 : {
			code : "SKU",
			name : "Sultan Kudarat"
		},
		71 : {
			code : "SLU",
			name : "Sulu"
		},
		72 : {
			code : "SNO",
			name : "Surigao del Norte"
		},
		73 : {
			code : "SSU",
			name : "Surigao del Sur"
		},
		74 : {
			code : "TAR",
			name : "Tarlac"
		},
		75 : {
			code : "TAW",
			name : "Tawi-Tawi"
		},
		76 : {
			code : "ZBL",
			name : "Zambales"
		},
		77 : {
			code : "ZNO",
			name : "Zamboanga del Norte"
		},
		78 : {
			code : "ZSU",
			name : "Zamboanga del Sur"
		},
		79 : {
			code : "ZSI",
			name : "Zamboanga Sibugay"
		}
	},
	PN : {
		1 : {
			code : "PIT",
			name : "Pitcairn Island"
		}
	},
	PL : {
		1 : {
			code : "DO",
			name : "DolnoÅ›lÄ…skie"
		},
		2 : {
			code : "KP",
			name : "Kujawsko-Pomorskie"
		},
		3 : {
			code : "LL",
			name : "Lubelskie"
		},
		4 : {
			code : "LU",
			name : "Lubuskie"
		},
		5 : {
			code : "LO",
			name : "ÅÃ³dzkie"
		},
		6 : {
			code : "ML",
			name : "MaÅ‚opolskie"
		},
		7 : {
			code : "MZ",
			name : "Mazowieckie"
		},
		8 : {
			code : "OP",
			name : "Opolskie"
		},
		9 : {
			code : "PP",
			name : "Podkarpackie"
		},
		10 : {
			code : "PL",
			name : "Podlaskie"
		},
		11 : {
			code : "PM",
			name : "Pomorskie"
		},
		12 : {
			code : "SL",
			name : "ÅšlÄ…skie"
		},
		13 : {
			code : "SW",
			name : "ÅšwiÄ™tokrzyskie"
		},
		14 : {
			code : "WM",
			name : "WarmiÅ„sko-Mazurskie"
		},
		15 : {
			code : "WP",
			name : "Wielkopolskie"
		},
		16 : {
			code : "ZA",
			name : "Zachodniopomorskie"
		}
	},
	PT : {
		1 : {
			code : "AC",
			name : "AÃ§ores"
		},
		2 : {
			code : "AV",
			name : "Aveiro"
		},
		3 : {
			code : "BE",
			name : "Beja"
		},
		4 : {
			code : "BR",
			name : "Braga"
		},
		5 : {
			code : "BA",
			name : "BraganÃ§a"
		},
		6 : {
			code : "CB",
			name : "Castelo Branco"
		},
		7 : {
			code : "CO",
			name : "Coimbra"
		},
		8 : {
			code : "EV",
			name : "Ã©vora"
		},
		9 : {
			code : "FA",
			name : "Faro"
		},
		10 : {
			code : "GU",
			name : "Guarda"
		},
		12 : {
			code : "LE",
			name : "Leiria"
		},
		13 : {
			code : "LI",
			name : "Lisboa"
		},
		14 : {
			code : "ME",
			name : "Madeira"
		},
		15 : {
			code : "PO",
			name : "Portalegre"
		},
		16 : {
			code : "PR",
			name : "Porto"
		},
		17 : {
			code : "SA",
			name : "SantarÃ©m"
		},
		18 : {
			code : "SE",
			name : "SetÃšbal"
		},
		19 : {
			code : "VC",
			name : "Viana do Castelo"
		},
		20 : {
			code : "VR",
			name : "Vila Real"
		},
		21 : {
			code : "VI",
			name : "Viseu"
		}
	},
	PR : {
		1 : {
			code : "A-A",
			name : "AÃ±asco"
		},
		2 : {
			code : "ADJ",
			name : "Adjuntas"
		},
		3 : {
			code : "AGU",
			name : "Aguada"
		},
		4 : {
			code : "AGU",
			name : "Aguadilla"
		},
		5 : {
			code : "AGU",
			name : "Aguas Buenas"
		},
		6 : {
			code : "AIB",
			name : "Aibonito"
		},
		7 : {
			code : "ARE",
			name : "Arecibo"
		},
		8 : {
			code : "ARR",
			name : "Arroyo"
		},
		9 : {
			code : "BAR",
			name : "Barceloneta"
		},
		10 : {
			code : "BAR",
			name : "Barranquitas"
		},
		11 : {
			code : "BAY",
			name : "BayamÃ³n"
		},
		12 : {
			code : "CAB",
			name : "Cabo Rojo"
		},
		13 : {
			code : "CAG",
			name : "Caguas"
		},
		14 : {
			code : "CAM",
			name : "Camuy"
		},
		15 : {
			code : "CAN",
			name : "CanÃ³vanas"
		},
		16 : {
			code : "CAR",
			name : "Carolina"
		},
		17 : {
			code : "CAT",
			name : "CataÃ±o"
		},
		18 : {
			code : "CAY",
			name : "Cayey"
		},
		19 : {
			code : "CEI",
			name : "Ceiba"
		},
		20 : {
			code : "CIA",
			name : "Ciales"
		},
		21 : {
			code : "CID",
			name : "Cidra"
		},
		22 : {
			code : "COA",
			name : "Coamo"
		},
		23 : {
			code : "COM",
			name : "ComerÃ­o"
		},
		24 : {
			code : "COR",
			name : "Corozal"
		},
		25 : {
			code : "CUL",
			name : "Culebra"
		},
		26 : {
			code : "DOR",
			name : "Dorado"
		},
		27 : {
			code : "FAJ",
			name : "Fajardo"
		},
		28 : {
			code : "FLO",
			name : "Florida"
		},
		29 : {
			code : "GUA",
			name : "Guayama"
		},
		30 : {
			code : "GUA",
			name : "Guayanilla"
		},
		31 : {
			code : "GUA",
			name : "Guaynabo"
		},
		32 : {
			code : "GUR",
			name : "Gurabo"
		},
		33 : {
			code : "GUÂ¡",
			name : "GuÃ¡nica"
		},
		34 : {
			code : "HAT",
			name : "Hatillo"
		},
		35 : {
			code : "HOR",
			name : "Hormigueros"
		},
		36 : {
			code : "HUM",
			name : "Humacao"
		},
		37 : {
			code : "ISA",
			name : "Isabela"
		},
		38 : {
			code : "JAY",
			name : "Jayuya"
		},
		39 : {
			code : "JUA",
			name : "Juana DÃ­az"
		},
		40 : {
			code : "JUN",
			name : "Juncos"
		},
		41 : {
			code : "LAJ",
			name : "Lajas"
		},
		42 : {
			code : "LAR",
			name : "Lares"
		},
		43 : {
			code : "LAS",
			name : "Las MarÃ­as"
		},
		44 : {
			code : "LAS",
			name : "Las Piedras"
		},
		45 : {
			code : "LOÃ•",
			name : "LoÃ­za"
		},
		46 : {
			code : "LUQ",
			name : "Luquillo"
		},
		47 : {
			code : "MAN",
			name : "ManatÃ­"
		},
		48 : {
			code : "MAR",
			name : "Maricao"
		},
		49 : {
			code : "MAU",
			name : "Maunabo"
		},
		50 : {
			code : "MAY",
			name : "MayagÃ¼ez"
		},
		51 : {
			code : "MOC",
			name : "Moca"
		},
		52 : {
			code : "MOR",
			name : "Morovis"
		},
		53 : {
			code : "NAG",
			name : "Naguabo"
		},
		54 : {
			code : "NAR",
			name : "Naranjito"
		},
		55 : {
			code : "ORO",
			name : "Orocovis"
		},
		56 : {
			code : "PAT",
			name : "Patillas"
		},
		57 : {
			code : "PE-",
			name : "PeÃ±uelas"
		},
		58 : {
			code : "PON",
			name : "Ponce"
		},
		59 : {
			code : "QUE",
			name : "Quebradillas"
		},
		60 : {
			code : "RIN",
			name : "RincÃ³n"
		},
		61 : {
			code : "RIO",
			name : "Rio Grande"
		},
		62 : {
			code : "SAB",
			name : "Sabana Grande"
		},
		63 : {
			code : "SAL",
			name : "Salinas"
		},
		64 : {
			code : "SAN",
			name : "San GermÃ n"
		},
		65 : {
			code : "SAN",
			name : "San Juan"
		},
		66 : {
			code : "SAN",
			name : "San Lorenzo"
		},
		67 : {
			code : "SAN",
			name : "San SebastiÃ n"
		},
		68 : {
			code : "SAN",
			name : "Santa Isabel"
		},
		69 : {
			code : "TOA",
			name : "Toa Alta"
		},
		70 : {
			code : "TOA",
			name : "Toa Baja"
		},
		71 : {
			code : "TRU",
			name : "Trujillo Alto"
		},
		72 : {
			code : "UTU",
			name : "Utuado"
		},
		73 : {
			code : "VEG",
			name : "Vega Alta"
		},
		74 : {
			code : "VEG",
			name : "Vega Baja"
		},
		75 : {
			code : "VIE",
			name : "Vieques"
		},
		76 : {
			code : "VIL",
			name : "Villalba"
		},
		77 : {
			code : "YAB",
			name : "Yabucoa"
		},
		78 : {
			code : "YAU",
			name : "Yauco"
		}
	},
	QA : {
		1 : {
			code : "DW",
			name : "Ad Dawhah"
		},
		2 : {
			code : "GW",
			name : "Al Ghuwayriyah"
		},
		3 : {
			code : "JM",
			name : "Al Jumayliyah"
		},
		4 : {
			code : "KR",
			name : "Al Khawr"
		},
		5 : {
			code : "WK",
			name : "Al Wakrah"
		},
		6 : {
			code : "RN",
			name : "Ar Rayyan"
		},
		7 : {
			code : "JB",
			name : "Jarayan al Batinah"
		},
		8 : {
			code : "MS",
			name : "Madinat ash Shamal"
		},
		9 : {
			code : "UD",
			name : "Umm Sa'id"
		},
		10 : {
			code : "UL",
			name : "Umm Salal"
		}
	},
	RO : {
		1 : {
			code : "AB",
			name : "Alba"
		},
		2 : {
			code : "AR",
			name : "Arad"
		},
		3 : {
			code : "AG",
			name : "Arges"
		},
		4 : {
			code : "BC",
			name : "Bacau"
		},
		5 : {
			code : "BH",
			name : "Bihor"
		},
		6 : {
			code : "BN",
			name : "Bistrita-Nasaud"
		},
		7 : {
			code : "BT",
			name : "Botosani"
		},
		8 : {
			code : "BV",
			name : "Brasov"
		},
		9 : {
			code : "BR",
			name : "Braila"
		},
		10 : {
			code : "B",
			name : "Bucuresti"
		},
		11 : {
			code : "BZ",
			name : "Buzau"
		},
		12 : {
			code : "CS",
			name : "Caras-Severin"
		},
		13 : {
			code : "CL",
			name : "Calarasi"
		},
		14 : {
			code : "CJ",
			name : "Cluj"
		},
		15 : {
			code : "CT",
			name : "Constanta"
		},
		16 : {
			code : "CV",
			name : "Covasna"
		},
		17 : {
			code : "DB",
			name : "Dimbovita"
		},
		18 : {
			code : "DJ",
			name : "Dolj"
		},
		19 : {
			code : "GL",
			name : "Galati"
		},
		20 : {
			code : "GR",
			name : "Giurgiu"
		},
		21 : {
			code : "GJ",
			name : "Gorj"
		},
		22 : {
			code : "HR",
			name : "Harghita"
		},
		23 : {
			code : "HD",
			name : "Hunedoara"
		},
		24 : {
			code : "IL",
			name : "Ialomita"
		},
		25 : {
			code : "IS",
			name : "Iasi"
		},
		26 : {
			code : "IF",
			name : "Ilfov"
		},
		27 : {
			code : "MM",
			name : "Maramures"
		},
		28 : {
			code : "MH",
			name : "Mehedinti"
		},
		29 : {
			code : "MS",
			name : "Mures"
		},
		30 : {
			code : "NT",
			name : "Neamt"
		},
		31 : {
			code : "OT",
			name : "Olt"
		},
		32 : {
			code : "PH",
			name : "Prahova"
		},
		33 : {
			code : "SM",
			name : "Satu-Mare"
		},
		34 : {
			code : "SJ",
			name : "Salaj"
		},
		35 : {
			code : "SB",
			name : "Sibiu"
		},
		36 : {
			code : "SV",
			name : "Suceava"
		},
		37 : {
			code : "TR",
			name : "Teleorman"
		},
		38 : {
			code : "TM",
			name : "Timis"
		},
		39 : {
			code : "TL",
			name : "Tulcea"
		},
		40 : {
			code : "VS",
			name : "Vaslui"
		},
		41 : {
			code : "VL",
			name : "Valcea"
		},
		42 : {
			code : "VN",
			name : "Vrancea"
		}
	},
	RU : {
		1 : {
			code : "AB",
			name : "Abakan"
		},
		2 : {
			code : "AG",
			name : "Aginskoye"
		},
		3 : {
			code : "AN",
			name : "Anadyr"
		},
		4 : {
			code : "AR",
			name : "Arkahangelsk"
		},
		5 : {
			code : "AS",
			name : "Astrakhan"
		},
		6 : {
			code : "BA",
			name : "Barnaul"
		},
		7 : {
			code : "BE",
			name : "Belgorod"
		},
		8 : {
			code : "BI",
			name : "Birobidzhan"
		},
		9 : {
			code : "BL",
			name : "Blagoveshchensk"
		},
		10 : {
			code : "BR",
			name : "Bryansk"
		},
		11 : {
			code : "CH",
			name : "Cheboksary"
		},
		12 : {
			code : "CL",
			name : "Chelyabinsk"
		},
		13 : {
			code : "CR",
			name : "Cherkessk"
		},
		14 : {
			code : "CI",
			name : "Chita"
		},
		15 : {
			code : "DU",
			name : "Dudinka"
		},
		16 : {
			code : "EL",
			name : "Elista"
		},
		17 : {
			code : "GO",
			name : "Gomo-Altaysk"
		},
		18 : {
			code : "GA",
			name : "Gorno-Altaysk"
		},
		19 : {
			code : "GR",
			name : "Groznyy"
		},
		20 : {
			code : "IR",
			name : "Irkutsk"
		},
		21 : {
			code : "IV",
			name : "Ivanovo"
		},
		22 : {
			code : "IZ",
			name : "Izhevsk"
		},
		23 : {
			code : "KA",
			name : "Kalinigrad"
		},
		24 : {
			code : "KL",
			name : "Kaluga"
		},
		25 : {
			code : "KS",
			name : "Kasnodar"
		},
		26 : {
			code : "KZ",
			name : "Kazan"
		},
		27 : {
			code : "KE",
			name : "Kemerovo"
		},
		28 : {
			code : "KH",
			name : "Khabarovsk"
		},
		29 : {
			code : "KM",
			name : "Khanty-Mansiysk"
		},
		30 : {
			code : "KO",
			name : "Kostroma"
		},
		31 : {
			code : "KR",
			name : "Krasnodar"
		},
		32 : {
			code : "KN",
			name : "Krasnoyarsk"
		},
		33 : {
			code : "KU",
			name : "Kudymkar"
		},
		34 : {
			code : "KG",
			name : "Kurgan"
		},
		35 : {
			code : "KK",
			name : "Kursk"
		},
		36 : {
			code : "KY",
			name : "Kyzyl"
		},
		37 : {
			code : "LI",
			name : "Lipetsk"
		},
		38 : {
			code : "MA",
			name : "Magadan"
		},
		39 : {
			code : "MK",
			name : "Makhachkala"
		},
		40 : {
			code : "MY",
			name : "Maykop"
		},
		41 : {
			code : "MO",
			name : "Moscow"
		},
		42 : {
			code : "MU",
			name : "Murmansk"
		},
		43 : {
			code : "NA",
			name : "Nalchik"
		},
		44 : {
			code : "NR",
			name : "Naryan Mar"
		},
		45 : {
			code : "NZ",
			name : "Nazran"
		},
		46 : {
			code : "NI",
			name : "Nizhniy Novgorod"
		},
		47 : {
			code : "NO",
			name : "Novgorod"
		},
		48 : {
			code : "NV",
			name : "Novosibirsk"
		},
		49 : {
			code : "OM",
			name : "Omsk"
		},
		50 : {
			code : "OR",
			name : "Orel"
		},
		51 : {
			code : "OE",
			name : "Orenburg"
		},
		52 : {
			code : "PA",
			name : "Palana"
		},
		53 : {
			code : "PE",
			name : "Penza"
		},
		54 : {
			code : "PR",
			name : "Perm"
		},
		55 : {
			code : "PK",
			name : "Petropavlovsk-Kamchatskiy"
		},
		56 : {
			code : "PT",
			name : "Petrozavodsk"
		},
		57 : {
			code : "PS",
			name : "Pskov"
		},
		58 : {
			code : "RO",
			name : "Rostov-na-Donu"
		},
		59 : {
			code : "RY",
			name : "Ryazan"
		},
		60 : {
			code : "SL",
			name : "Salekhard"
		},
		61 : {
			code : "SA",
			name : "Samara"
		},
		62 : {
			code : "SR",
			name : "Saransk"
		},
		63 : {
			code : "SV",
			name : "Saratov"
		},
		64 : {
			code : "SM",
			name : "Smolensk"
		},
		65 : {
			code : "SP",
			name : "St. Petersburg"
		},
		66 : {
			code : "ST",
			name : "Stavropol"
		},
		67 : {
			code : "SY",
			name : "Syktyvkar"
		},
		68 : {
			code : "TA",
			name : "Tambov"
		},
		69 : {
			code : "TO",
			name : "Tomsk"
		},
		70 : {
			code : "TU",
			name : "Tula"
		},
		71 : {
			code : "TR",
			name : "Tura"
		},
		72 : {
			code : "TV",
			name : "Tver"
		},
		73 : {
			code : "TY",
			name : "Tyumen"
		},
		74 : {
			code : "UF",
			name : "Ufa"
		},
		75 : {
			code : "UL",
			name : "Ul'yanovsk"
		},
		76 : {
			code : "UU",
			name : "Ulan-Ude"
		},
		77 : {
			code : "US",
			name : "Ust'-Ordynskiy"
		},
		78 : {
			code : "VL",
			name : "Vladikavkaz"
		},
		79 : {
			code : "VA",
			name : "Vladimir"
		},
		80 : {
			code : "VV",
			name : "Vladivostok"
		},
		81 : {
			code : "VG",
			name : "Volgograd"
		},
		82 : {
			code : "VD",
			name : "Vologda"
		},
		83 : {
			code : "VO",
			name : "Voronezh"
		},
		84 : {
			code : "VY",
			name : "Vyatka"
		},
		85 : {
			code : "YA",
			name : "Yakutsk"
		},
		86 : {
			code : "YR",
			name : "Yaroslavl"
		},
		87 : {
			code : "YE",
			name : "Yekaterinburg"
		},
		88 : {
			code : "YO",
			name : "Yoshkar-Ola"
		}
	},
	RW : {
		1 : {
			code : "BU",
			name : "Butare"
		},
		2 : {
			code : "BY",
			name : "Byumba"
		},
		3 : {
			code : "CY",
			name : "Cyangugu"
		},
		4 : {
			code : "GK",
			name : "Gikongoro"
		},
		5 : {
			code : "GS",
			name : "Gisenyi"
		},
		6 : {
			code : "GT",
			name : "Gitarama"
		},
		7 : {
			code : "KG",
			name : "Kibungo"
		},
		8 : {
			code : "KY",
			name : "Kibuye"
		},
		9 : {
			code : "KR",
			name : "Kigali Rurale"
		},
		10 : {
			code : "KV",
			name : "Kigali-ville"
		},
		11 : {
			code : "RU",
			name : "Ruhengeri"
		},
		12 : {
			code : "UM",
			name : "Umutara"
		}
	},
	KN : {
		1 : {
			code : "CCN",
			name : "Christ Church Nichola Town"
		},
		2 : {
			code : "SAS",
			name : "Saint Anne Sandy Point"
		},
		3 : {
			code : "SGB",
			name : "Saint George Basseterre"
		},
		4 : {
			code : "SGG",
			name : "Saint George Gingerland"
		},
		5 : {
			code : "SJW",
			name : "Saint James Windward"
		},
		6 : {
			code : "SJC",
			name : "Saint John Capesterre"
		},
		7 : {
			code : "SJF",
			name : "Saint John Figtree"
		},
		8 : {
			code : "SMC",
			name : "Saint Mary Cayon"
		},
		9 : {
			code : "CAP",
			name : "Saint Paul Capesterre"
		},
		10 : {
			code : "CHA",
			name : "Saint Paul Charlestown"
		},
		11 : {
			code : "SPB",
			name : "Saint Peter Basseterre"
		},
		12 : {
			code : "STL",
			name : "Saint Thomas Lowland"
		},
		13 : {
			code : "STM",
			name : "Saint Thomas Middle Island"
		},
		14 : {
			code : "TPP",
			name : "Trinity Palmetto Point"
		}
	},
	LC : {
		1 : {
			code : "AR",
			name : "Anse-la-Raye"
		},
		2 : {
			code : "CA",
			name : "Castries"
		},
		3 : {
			code : "CH",
			name : "Choiseul"
		},
		4 : {
			code : "DA",
			name : "Dauphin"
		},
		5 : {
			code : "DE",
			name : "Dennery"
		},
		6 : {
			code : "GI",
			name : "Gros-Islet"
		},
		7 : {
			code : "LA",
			name : "Laborie"
		},
		8 : {
			code : "MI",
			name : "Micoud"
		},
		9 : {
			code : "PR",
			name : "Praslin"
		},
		10 : {
			code : "SO",
			name : "Soufriere"
		},
		11 : {
			code : "VF",
			name : "Vieux-Fort"
		}
	},
	VC : {
		1 : {
			code : "C",
			name : "Charlotte"
		},
		2 : {
			code : "R",
			name : "Grenadines"
		},
		3 : {
			code : "A",
			name : "Saint Andrew"
		},
		4 : {
			code : "D",
			name : "Saint David"
		},
		5 : {
			code : "G",
			name : "Saint George"
		},
		6 : {
			code : "P",
			name : "Saint Patrick"
		}
	},
	WS : {
		1 : {
			code : "AN",
			name : "A'ana"
		},
		2 : {
			code : "AI",
			name : "Aiga-i-le-Tai"
		},
		3 : {
			code : "AT",
			name : "Atua"
		},
		4 : {
			code : "FA",
			name : "Fa'asaleleaga"
		},
		5 : {
			code : "GE",
			name : "Gaga'emauga"
		},
		6 : {
			code : "GF",
			name : "Gagaifomauga"
		},
		7 : {
			code : "PA",
			name : "Palauli"
		},
		8 : {
			code : "SA",
			name : "Satupa'itea"
		},
		9 : {
			code : "TU",
			name : "Tuamasaga"
		},
		10 : {
			code : "VF",
			name : "Va'a-o-Fonoti"
		},
		11 : {
			code : "VS",
			name : "Vaisigano"
		}
	},
	SM : {
		1 : {
			code : "AC",
			name : "Acquaviva"
		},
		2 : {
			code : "BM",
			name : "Borgo Maggiore"
		},
		3 : {
			code : "CH",
			name : "Chiesanuova"
		},
		4 : {
			code : "DO",
			name : "Domagnano"
		},
		5 : {
			code : "FA",
			name : "Faetano"
		},
		6 : {
			code : "FI",
			name : "Fiorentino"
		},
		7 : {
			code : "MO",
			name : "Montegiardino"
		},
		8 : {
			code : "SM",
			name : "Citta di San Marino"
		},
		9 : {
			code : "SE",
			name : "Serravalle"
		}
	},
	ST : {
		1 : {
			code : "S",
			name : "Sao Tome"
		},
		2 : {
			code : "P",
			name : "Principe"
		}
	},
	SA : {
		1 : {
			code : "BH",
			name : "Al Bahah"
		},
		2 : {
			code : "HS",
			name : "Al Hudud ash Shamaliyah"
		},
		3 : {
			code : "JF",
			name : "Al Jawf"
		},
		4 : {
			code : "MD",
			name : "Al Madinah"
		},
		5 : {
			code : "QS",
			name : "Al Qasim"
		},
		6 : {
			code : "RD",
			name : "Ar Riyad"
		},
		7 : {
			code : "AQ",
			name : "Ash Sharqiyah (Eastern)"
		},
		8 : {
			code : "AS",
			name : "'Asir"
		},
		9 : {
			code : "HL",
			name : "Ha'il"
		},
		10 : {
			code : "JZ",
			name : "Jizan"
		},
		11 : {
			code : "ML",
			name : "Makkah"
		},
		12 : {
			code : "NR",
			name : "Najran"
		},
		13 : {
			code : "TB",
			name : "Tabuk"
		}
	},
	SN : {
		1 : {
			code : "DA",
			name : "Dakar"
		},
		2 : {
			code : "DI",
			name : "Diourbel"
		},
		3 : {
			code : "FA",
			name : "Fatick"
		},
		4 : {
			code : "KA",
			name : "Kaolack"
		},
		5 : {
			code : "KO",
			name : "Kolda"
		},
		6 : {
			code : "LO",
			name : "Louga"
		},
		7 : {
			code : "MA",
			name : "Matam"
		},
		8 : {
			code : "SL",
			name : "Saint-Louis"
		},
		9 : {
			code : "TA",
			name : "Tambacounda"
		},
		10 : {
			code : "TH",
			name : "Thies"
		},
		11 : {
			code : "ZI",
			name : "Ziguinchor"
		}
	},
	SC : {
		1 : {
			code : "AP",
			name : "Anse aux Pins"
		},
		2 : {
			code : "AB",
			name : "Anse Boileau"
		},
		3 : {
			code : "AE",
			name : "Anse Etoile"
		},
		4 : {
			code : "AL",
			name : "Anse Louis"
		},
		5 : {
			code : "AR",
			name : "Anse Royale"
		},
		6 : {
			code : "BL",
			name : "Baie Lazare"
		},
		7 : {
			code : "BS",
			name : "Baie Sainte Anne"
		},
		8 : {
			code : "BV",
			name : "Beau Vallon"
		},
		9 : {
			code : "BA",
			name : "Bel Air"
		},
		10 : {
			code : "BO",
			name : "Bel Ombre"
		},
		11 : {
			code : "CA",
			name : "Cascade"
		},
		12 : {
			code : "GL",
			name : "Glacis"
		},
		13 : {
			code : "GM",
			name : "Grand' Anse (on Mahe)"
		},
		14 : {
			code : "GP",
			name : "Grand' Anse (on Praslin)"
		},
		15 : {
			code : "DG",
			name : "La Digue"
		},
		16 : {
			code : "RA",
			name : "La Riviere Anglaise"
		},
		17 : {
			code : "MB",
			name : "Mont Buxton"
		},
		18 : {
			code : "MF",
			name : "Mont Fleuri"
		},
		19 : {
			code : "PL",
			name : "Plaisance"
		},
		20 : {
			code : "PR",
			name : "Pointe La Rue"
		},
		21 : {
			code : "PG",
			name : "Port Glaud"
		},
		22 : {
			code : "SL",
			name : "Saint Louis"
		},
		23 : {
			code : "TA",
			name : "Takamaka"
		}
	},
	SL : {
		1 : {
			code : "E",
			name : "Eastern"
		},
		2 : {
			code : "N",
			name : "Northern"
		},
		3 : {
			code : "S",
			name : "Southern"
		},
		4 : {
			code : "W",
			name : "Western"
		}
	},
	SK : {
		1 : {
			code : "BA",
			name : "Banskobystricky"
		},
		2 : {
			code : "BR",
			name : "Bratislavsky"
		},
		3 : {
			code : "KO",
			name : "Kosicky"
		},
		4 : {
			code : "NI",
			name : "Nitriansky"
		},
		5 : {
			code : "PR",
			name : "Presovsky"
		},
		6 : {
			code : "TC",
			name : "Trenciansky"
		},
		7 : {
			code : "TV",
			name : "Trnavsky"
		},
		8 : {
			code : "ZI",
			name : "Zilinsky"
		}
	},
	SI : {
		1 : {
			code : "4",
			name : "Å tajerska"
		},
		2 : {
			code : "2A",
			name : "Gorenjska"
		},
		3 : {
			code : "5",
			name : "Prekmurje"
		},
		4 : {
			code : "3",
			name : "KoroÅ¡ka"
		},
		5 : {
			code : "2B",
			name : "Notranjska"
		},
		6 : {
			code : "1",
			name : "Primorska"
		},
		7 : {
			code : "2C",
			name : "Dolenjska"
		},
		8 : {
			code : "2C",
			name : "Bela Krajina"
		}
	},
	SB : {
		1 : {
			code : "CE",
			name : "Central"
		},
		2 : {
			code : "CH",
			name : "Choiseul"
		},
		3 : {
			code : "GC",
			name : "Guadalcanal"
		},
		4 : {
			code : "HO",
			name : "Honiara"
		},
		5 : {
			code : "IS",
			name : "Isabel"
		},
		6 : {
			code : "MK",
			name : "Makira"
		},
		7 : {
			code : "ML",
			name : "Malaita"
		},
		8 : {
			code : "RB",
			name : "Rennell and Bellona"
		},
		9 : {
			code : "TM",
			name : "Temotu"
		},
		10 : {
			code : "WE",
			name : "Western"
		}
	},
	SO : {
		1 : {
			code : "AW",
			name : "Awdal"
		},
		2 : {
			code : "BK",
			name : "Bakool"
		},
		3 : {
			code : "BN",
			name : "Banaadir"
		},
		4 : {
			code : "BR",
			name : "Bari"
		},
		5 : {
			code : "BY",
			name : "Bay"
		},
		6 : {
			code : "GA",
			name : "Galguduud"
		},
		7 : {
			code : "GE",
			name : "Gedo"
		},
		8 : {
			code : "HI",
			name : "Hiiraan"
		},
		9 : {
			code : "JD",
			name : "Jubbada Dhexe"
		},
		10 : {
			code : "JH",
			name : "Jubbada Hoose"
		},
		11 : {
			code : "MU",
			name : "Mudug"
		},
		12 : {
			code : "NU",
			name : "Nugaal"
		},
		13 : {
			code : "SA",
			name : "Sanaag"
		},
		14 : {
			code : "SD",
			name : "Shabeellaha Dhexe"
		},
		15 : {
			code : "SH",
			name : "Shabeellaha Hoose"
		},
		16 : {
			code : "SL",
			name : "Sool"
		},
		17 : {
			code : "TO",
			name : "Togdheer"
		},
		18 : {
			code : "WG",
			name : "Woqooyi Galbeed"
		}
	},
	ZA : {
		1 : {
			code : "EC",
			name : "Eastern Cape"
		},
		2 : {
			code : "FS",
			name : "Free State"
		},
		3 : {
			code : "GT",
			name : "Gauteng"
		},
		4 : {
			code : "KN",
			name : "KwaZulu-Natal"
		},
		5 : {
			code : "LP",
			name : "Limpopo"
		},
		6 : {
			code : "MP",
			name : "Mpumalanga"
		},
		7 : {
			code : "NW",
			name : "North West"
		},
		8 : {
			code : "NC",
			name : "Northern Cape"
		},
		9 : {
			code : "WC",
			name : "Western Cape"
		}
	},
	ES : {
		1 : {
			code : "CA",
			name : "La CoruÃ±a"
		},
		2 : {
			code : "AL",
			name : "Ãlava"
		},
		3 : {
			code : "AB",
			name : "Albacete"
		},
		4 : {
			code : "AC",
			name : "Alicante"
		},
		5 : {
			code : "AM",
			name : "Almeria"
		},
		6 : {
			code : "AS",
			name : "Asturias"
		},
		7 : {
			code : "AV",
			name : "Ãvila"
		},
		8 : {
			code : "BJ",
			name : "Badajoz"
		},
		9 : {
			code : "IB",
			name : "Baleares"
		},
		10 : {
			code : "BA",
			name : "Barcelona"
		},
		11 : {
			code : "BU",
			name : "Burgos"
		},
		12 : {
			code : "CC",
			name : "CÃ¡ceres"
		},
		13 : {
			code : "CZ",
			name : "CÃ¡diz"
		},
		14 : {
			code : "CT",
			name : "Cantabria"
		},
		15 : {
			code : "CL",
			name : "CastellÃ³n"
		},
		16 : {
			code : "CE",
			name : "Ceuta"
		},
		17 : {
			code : "CR",
			name : "Ciudad Real"
		},
		18 : {
			code : "CD",
			name : "CÃ³rdoba"
		},
		19 : {
			code : "CU",
			name : "Cuenca"
		},
		20 : {
			code : "GI",
			name : "Gerona"
		},
		21 : {
			code : "GD",
			name : "Granada"
		},
		22 : {
			code : "GJ",
			name : "Guadalajara"
		},
		23 : {
			code : "GP",
			name : "GuipÃºzcoa"
		},
		24 : {
			code : "HL",
			name : "Huelva"
		},
		25 : {
			code : "HS",
			name : "Huesca"
		},
		26 : {
			code : "JN",
			name : "JaÃ©n"
		},
		27 : {
			code : "RJ",
			name : "La Rioja"
		},
		28 : {
			code : "PM",
			name : "Las Palmas"
		},
		29 : {
			code : "LE",
			name : "LeÃ³n"
		},
		30 : {
			code : "LL",
			name : "LÃ©rida"
		},
		31 : {
			code : "LG",
			name : "Lugo"
		},
		32 : {
			code : "MD",
			name : "Madrid"
		},
		33 : {
			code : "MA",
			name : "MÃ¡laga"
		},
		34 : {
			code : "ML",
			name : "Melilla"
		},
		35 : {
			code : "MU",
			name : "Murcia"
		},
		36 : {
			code : "NV",
			name : "Navarra"
		},
		37 : {
			code : "OU",
			name : "Ourense"
		},
		38 : {
			code : "PL",
			name : "Palencia"
		},
		39 : {
			code : "PO",
			name : "Pontevedra"
		},
		40 : {
			code : "SL",
			name : "Salamanca"
		},
		41 : {
			code : "SC",
			name : "Santa Cruz de Tenerife"
		},
		42 : {
			code : "SG",
			name : "Segovia"
		},
		43 : {
			code : "SV",
			name : "Sevilla"
		},
		44 : {
			code : "SO",
			name : "Soria"
		},
		45 : {
			code : "TA",
			name : "Tarragona"
		},
		46 : {
			code : "TE",
			name : "Teruel"
		},
		47 : {
			code : "TO",
			name : "Toledo"
		},
		48 : {
			code : "VC",
			name : "Valencia"
		},
		49 : {
			code : "VD",
			name : "Valladolid"
		},
		50 : {
			code : "VZ",
			name : "Vizcaya"
		},
		51 : {
			code : "ZM",
			name : "Zamora"
		},
		52 : {
			code : "ZR",
			name : "Zaragoza"
		}
	},
	LK : {
		1 : {
			code : "CE",
			name : "Central"
		},
		2 : {
			code : "EA",
			name : "Eastern"
		},
		3 : {
			code : "NC",
			name : "North Central"
		},
		4 : {
			code : "NO",
			name : "Northern"
		},
		5 : {
			code : "NW",
			name : "North Western"
		},
		6 : {
			code : "SA",
			name : "Sabaragamuwa"
		},
		7 : {
			code : "SO",
			name : "Southern"
		},
		8 : {
			code : "UV",
			name : "Uva"
		},
		9 : {
			code : "WE",
			name : "Western"
		}
	},
	SH : {
		1 : {
			code : "A",
			name : "Ascension"
		},
		2 : {
			code : "S",
			name : "Saint Helena"
		},
		3 : {
			code : "T",
			name : "Tristan da Cunha"
		}
	},
	PM : {
		1 : {
			code : "P",
			name : "Saint Pierre"
		},
		2 : {
			code : "M",
			name : "Miquelon"
		}
	},
	SD : {
		1 : {
			code : "ANL",
			name : "A'ali an Nil"
		},
		2 : {
			code : "BAM",
			name : "Al Bahr al Ahmar"
		},
		3 : {
			code : "BRT",
			name : "Al Buhayrat"
		},
		4 : {
			code : "JZR",
			name : "Al Jazirah"
		},
		5 : {
			code : "KRT",
			name : "Al Khartum"
		},
		6 : {
			code : "QDR",
			name : "Al Qadarif"
		},
		7 : {
			code : "WDH",
			name : "Al Wahdah"
		},
		8 : {
			code : "ANB",
			name : "An Nil al Abyad"
		},
		9 : {
			code : "ANZ",
			name : "An Nil al Azraq"
		},
		10 : {
			code : "ASH",
			name : "Ash Shamaliyah"
		},
		11 : {
			code : "BJA",
			name : "Bahr al Jabal"
		},
		12 : {
			code : "GIS",
			name : "Gharb al Istiwa'iyah"
		},
		13 : {
			code : "GBG",
			name : "Gharb Bahr al Ghazal"
		},
		14 : {
			code : "GDA",
			name : "Gharb Darfur"
		},
		15 : {
			code : "GKU",
			name : "Gharb Kurdufan"
		},
		16 : {
			code : "JDA",
			name : "Janub Darfur"
		},
		17 : {
			code : "JKU",
			name : "Janub Kurdufan"
		},
		18 : {
			code : "JQL",
			name : "Junqali"
		},
		19 : {
			code : "KSL",
			name : "Kassala"
		},
		20 : {
			code : "NNL",
			name : "Nahr an Nil"
		},
		21 : {
			code : "SBG",
			name : "Shamal Bahr al Ghazal"
		},
		22 : {
			code : "SDA",
			name : "Shamal Darfur"
		},
		23 : {
			code : "SKU",
			name : "Shamal Kurdufan"
		},
		24 : {
			code : "SIS",
			name : "Sharq al Istiwa'iyah"
		},
		25 : {
			code : "SNR",
			name : "Sinnar"
		},
		26 : {
			code : "WRB",
			name : "Warab"
		}
	},
	SR : {
		1 : {
			code : "BR",
			name : "Brokopondo"
		},
		2 : {
			code : "CM",
			name : "Commewijne"
		},
		3 : {
			code : "CR",
			name : "Coronie"
		},
		4 : {
			code : "MA",
			name : "Marowijne"
		},
		5 : {
			code : "NI",
			name : "Nickerie"
		},
		6 : {
			code : "PA",
			name : "Para"
		},
		7 : {
			code : "PM",
			name : "Paramaribo"
		},
		9 : {
			code : "SA",
			name : "Saramacca"
		},
		10 : {
			code : "SI",
			name : "Sipaliwini"
		},
		11 : {
			code : "WA",
			name : "Wanica"
		}
	},
	SZ : {
		1 : {
			code : "H",
			name : "Hhohho"
		},
		2 : {
			code : "L",
			name : "Lubombo"
		},
		3 : {
			code : "M",
			name : "Manzini"
		},
		4 : {
			code : "S",
			name : "Shishelweni"
		}
	},
	SE : {
		1 : {
			code : "K",
			name : "Blekinge"
		},
		2 : {
			code : "W",
			name : "Dalama"
		},
		3 : {
			code : "I",
			name : "Gotland"
		},
		4 : {
			code : "X",
			name : "GÃ¤vleborg"
		},
		5 : {
			code : "N",
			name : "Halland"
		},
		6 : {
			code : "Z",
			name : "JÃ¤mtland"
		},
		7 : {
			code : "F",
			name : "JÃ¶nkÃ¶ping"
		},
		8 : {
			code : "H",
			name : "Kalmar"
		},
		9 : {
			code : "G",
			name : "Kronoberg"
		},
		10 : {
			code : "BD",
			name : "Norrbotten"
		},
		11 : {
			code : "M",
			name : "SkÃ¥ne"
		},
		12 : {
			code : "AB",
			name : "Stockholm"
		},
		13 : {
			code : "D",
			name : "SÃ¶dermanland"
		},
		14 : {
			code : "C",
			name : "Uppsala"
		},
		15 : {
			code : "S",
			name : "VÃ¤rmland"
		},
		16 : {
			code : "AC",
			name : "VÃ¤sterbotten"
		},
		17 : {
			code : "Y",
			name : "VÃ¤sternorrland"
		},
		18 : {
			code : "U",
			name : "VÃ¤stmanland"
		},
		19 : {
			code : "O",
			name : "VÃ¤stra GÃ¶taland"
		},
		20 : {
			code : "T",
			name : "Ã–rebro"
		},
		21 : {
			code : "E",
			name : "Ã–stergÃ¶tland"
		}
	},
	CH : {
		1 : {
			code : "AG",
			name : "Aargau"
		},
		2 : {
			code : "AR",
			name : "Appenzell Ausserrhoden"
		},
		3 : {
			code : "AI",
			name : "Appenzell Innerrhoden"
		},
		4 : {
			code : "BS",
			name : "Basel-Stadt"
		},
		5 : {
			code : "BL",
			name : "Basel-Landschaft"
		},
		6 : {
			code : "BE",
			name : "Bern"
		},
		7 : {
			code : "FR",
			name : "Fribourg"
		},
		8 : {
			code : "GE",
			name : "GenÃ¨ve"
		},
		9 : {
			code : "GL",
			name : "Glarus"
		},
		10 : {
			code : "GR",
			name : "GraubÃ¼nden"
		},
		11 : {
			code : "JU",
			name : "Jura"
		},
		12 : {
			code : "LU",
			name : "Lucerne"
		},
		13 : {
			code : "NE",
			name : "NeuchÃ¢tel"
		},
		14 : {
			code : "NW",
			name : "Nidwalden"
		},
		15 : {
			code : "OW",
			name : "Obwalden"
		},
		16 : {
			code : "SG",
			name : "St. Gallen"
		},
		17 : {
			code : "SH",
			name : "Schaffhausen"
		},
		18 : {
			code : "SZ",
			name : "Schwyz"
		},
		19 : {
			code : "SO",
			name : "Solothurn"
		},
		20 : {
			code : "TG",
			name : "Thurgau"
		},
		21 : {
			code : "TI",
			name : "Ticino"
		},
		22 : {
			code : "UR",
			name : "Uri"
		},
		23 : {
			code : "VS",
			name : "Valais"
		},
		24 : {
			code : "VD",
			name : "Vaud"
		},
		25 : {
			code : "ZG",
			name : "Zug"
		},
		26 : {
			code : "ZH",
			name : "ZÃ¼rich"
		}
	},
	SY : {
		1 : {
			code : "HA",
			name : "Al Hasakah"
		},
		2 : {
			code : "LA",
			name : "Al Ladhiqiyah"
		},
		3 : {
			code : "QU",
			name : "Al Qunaytirah"
		},
		4 : {
			code : "RQ",
			name : "Ar Raqqah"
		},
		5 : {
			code : "SU",
			name : "As Suwayda"
		},
		6 : {
			code : "DA",
			name : "Dara"
		},
		7 : {
			code : "DZ",
			name : "Dayr az Zawr"
		},
		8 : {
			code : "DI",
			name : "Dimashq"
		},
		9 : {
			code : "HL",
			name : "Halab"
		},
		10 : {
			code : "HM",
			name : "Hamah"
		},
		11 : {
			code : "HI",
			name : "Hims"
		},
		12 : {
			code : "ID",
			name : "Idlib"
		},
		13 : {
			code : "RD",
			name : "Rif Dimashq"
		},
		14 : {
			code : "TA",
			name : "Tartus"
		}
	},
	TW : {
		1 : {
			code : "CH",
			name : "Chang-hua"
		},
		2 : {
			code : "CI",
			name : "Chia-i"
		},
		3 : {
			code : "HS",
			name : "Hsin-chu"
		},
		4 : {
			code : "HL",
			name : "Hua-lien"
		},
		5 : {
			code : "IL",
			name : "I-lan"
		},
		6 : {
			code : "KH",
			name : "Kao-hsiung county"
		},
		7 : {
			code : "KM",
			name : "Kin-men"
		},
		8 : {
			code : "LC",
			name : "Lien-chiang"
		},
		9 : {
			code : "ML",
			name : "Miao-li"
		},
		10 : {
			code : "NT",
			name : "Nan-t'ou"
		},
		11 : {
			code : "PH",
			name : "P'eng-hu"
		},
		12 : {
			code : "PT",
			name : "P'ing-tung"
		},
		13 : {
			code : "TG",
			name : "T'ai-chung"
		},
		14 : {
			code : "TA",
			name : "T'ai-nan"
		},
		15 : {
			code : "TP",
			name : "T'ai-pei county"
		},
		16 : {
			code : "TT",
			name : "T'ai-tung"
		},
		17 : {
			code : "TY",
			name : "T'ao-yuan"
		},
		18 : {
			code : "YL",
			name : "Yun-lin"
		},
		19 : {
			code : "CC",
			name : "Chia-i city"
		},
		20 : {
			code : "CL",
			name : "Chi-lung"
		},
		21 : {
			code : "HC",
			name : "Hsin-chu"
		},
		22 : {
			code : "TH",
			name : "T'ai-chung"
		},
		23 : {
			code : "TN",
			name : "T'ai-nan"
		},
		24 : {
			code : "KC",
			name : "Kao-hsiung city"
		},
		25 : {
			code : "TC",
			name : "T'ai-pei city"
		}
	},
	TJ : {
		1 : {
			code : "GB",
			name : "Gorno-Badakhstan"
		},
		2 : {
			code : "KT",
			name : "Khatlon"
		},
		3 : {
			code : "SU",
			name : "Sughd"
		}
	},
	TZ : {
		1 : {
			code : "AR",
			name : "Arusha"
		},
		2 : {
			code : "DS",
			name : "Dar es Salaam"
		},
		3 : {
			code : "DO",
			name : "Dodoma"
		},
		4 : {
			code : "IR",
			name : "Iringa"
		},
		5 : {
			code : "KA",
			name : "Kagera"
		},
		6 : {
			code : "KI",
			name : "Kigoma"
		},
		7 : {
			code : "KJ",
			name : "Kilimanjaro"
		},
		8 : {
			code : "LN",
			name : "Lindi"
		},
		9 : {
			code : "MY",
			name : "Manyara"
		},
		10 : {
			code : "MR",
			name : "Mara"
		},
		11 : {
			code : "MB",
			name : "Mbeya"
		},
		12 : {
			code : "MO",
			name : "Morogoro"
		},
		13 : {
			code : "MT",
			name : "Mtwara"
		},
		14 : {
			code : "MW",
			name : "Mwanza"
		},
		15 : {
			code : "PN",
			name : "Pemba North"
		},
		16 : {
			code : "PS",
			name : "Pemba South"
		},
		17 : {
			code : "PW",
			name : "Pwani"
		},
		18 : {
			code : "RK",
			name : "Rukwa"
		},
		19 : {
			code : "RV",
			name : "Ruvuma"
		},
		20 : {
			code : "SH",
			name : "Shinyanga"
		},
		21 : {
			code : "SI",
			name : "Singida"
		},
		22 : {
			code : "TB",
			name : "Tabora"
		},
		23 : {
			code : "TN",
			name : "Tanga"
		},
		24 : {
			code : "ZC",
			name : "Zanzibar Central"
		},
		25 : {
			code : "ZN",
			name : "Zanzibar North"
		},
		26 : {
			code : "ZU",
			name : "Zanzibar Urban"
		}
	},
	TH : {
		1 : {
			code : "Amnat Charoen",
			name : "Amnat Charoen"
		},
		2 : {
			code : "Ang Thong",
			name : "Ang Thong"
		},
		3 : {
			code : "Ayutthaya",
			name : "Ayutthaya"
		},
		4 : {
			code : "Bangkok",
			name : "Bangkok"
		},
		5 : {
			code : "Buriram",
			name : "Buriram"
		},
		6 : {
			code : "Chachoengsao",
			name : "Chachoengsao"
		},
		7 : {
			code : "Chai Nat",
			name : "Chai Nat"
		},
		8 : {
			code : "Chaiyaphum",
			name : "Chaiyaphum"
		},
		9 : {
			code : "Chanthaburi",
			name : "Chanthaburi"
		},
		10 : {
			code : "Chiang Mai",
			name : "Chiang Mai"
		},
		11 : {
			code : "Chiang Rai",
			name : "Chiang Rai"
		},
		12 : {
			code : "Chon Buri",
			name : "Chon Buri"
		},
		13 : {
			code : "Chumphon",
			name : "Chumphon"
		},
		14 : {
			code : "Kalasin",
			name : "Kalasin"
		},
		15 : {
			code : "Kamphaeng Phet",
			name : "Kamphaeng Phet"
		},
		16 : {
			code : "Kanchanaburi",
			name : "Kanchanaburi"
		},
		17 : {
			code : "Khon Kaen",
			name : "Khon Kaen"
		},
		18 : {
			code : "Krabi",
			name : "Krabi"
		},
		19 : {
			code : "Lampang",
			name : "Lampang"
		},
		20 : {
			code : "Lamphun",
			name : "Lamphun"
		},
		21 : {
			code : "Loei",
			name : "Loei"
		},
		22 : {
			code : "Lop Buri",
			name : "Lop Buri"
		},
		23 : {
			code : "Mae Hong Son",
			name : "Mae Hong Son"
		},
		24 : {
			code : "Maha Sarakham",
			name : "Maha Sarakham"
		},
		25 : {
			code : "Mukdahan",
			name : "Mukdahan"
		},
		26 : {
			code : "Nakhon Nayok",
			name : "Nakhon Nayok"
		},
		27 : {
			code : "Nakhon Pathom",
			name : "Nakhon Pathom"
		},
		28 : {
			code : "Nakhon Phanom",
			name : "Nakhon Phanom"
		},
		29 : {
			code : "Nakhon Ratchasima",
			name : "Nakhon Ratchasima"
		},
		30 : {
			code : "Nakhon Sawan",
			name : "Nakhon Sawan"
		},
		31 : {
			code : "Nakhon Si Thammarat",
			name : "Nakhon Si Thammarat"
		},
		32 : {
			code : "Nan",
			name : "Nan"
		},
		33 : {
			code : "Narathiwat",
			name : "Narathiwat"
		},
		34 : {
			code : "Nong Bua Lamphu",
			name : "Nong Bua Lamphu"
		},
		35 : {
			code : "Nong Khai",
			name : "Nong Khai"
		},
		36 : {
			code : "Nonthaburi",
			name : "Nonthaburi"
		},
		37 : {
			code : "Pathum Thani",
			name : "Pathum Thani"
		},
		38 : {
			code : "Pattani",
			name : "Pattani"
		},
		39 : {
			code : "Phangnga",
			name : "Phangnga"
		},
		40 : {
			code : "Phatthalung",
			name : "Phatthalung"
		},
		41 : {
			code : "Phayao",
			name : "Phayao"
		},
		42 : {
			code : "Phetchabun",
			name : "Phetchabun"
		},
		43 : {
			code : "Phetchaburi",
			name : "Phetchaburi"
		},
		44 : {
			code : "Phichit",
			name : "Phichit"
		},
		45 : {
			code : "Phitsanulok",
			name : "Phitsanulok"
		},
		46 : {
			code : "Phrae",
			name : "Phrae"
		},
		47 : {
			code : "Phuket",
			name : "Phuket"
		},
		48 : {
			code : "Prachin Buri",
			name : "Prachin Buri"
		},
		49 : {
			code : "Prachuap Khiri Khan",
			name : "Prachuap Khiri Khan"
		},
		50 : {
			code : "Ranong",
			name : "Ranong"
		},
		51 : {
			code : "Ratchaburi",
			name : "Ratchaburi"
		},
		52 : {
			code : "Rayong",
			name : "Rayong"
		},
		53 : {
			code : "Roi Et",
			name : "Roi Et"
		},
		54 : {
			code : "Sa Kaeo",
			name : "Sa Kaeo"
		},
		55 : {
			code : "Sakon Nakhon",
			name : "Sakon Nakhon"
		},
		56 : {
			code : "Samut Prakan",
			name : "Samut Prakan"
		},
		57 : {
			code : "Samut Sakhon",
			name : "Samut Sakhon"
		},
		58 : {
			code : "Samut Songkhram",
			name : "Samut Songkhram"
		},
		59 : {
			code : "Sara Buri",
			name : "Sara Buri"
		},
		60 : {
			code : "Satun",
			name : "Satun"
		},
		61 : {
			code : "Sing Buri",
			name : "Sing Buri"
		},
		62 : {
			code : "Sisaket",
			name : "Sisaket"
		},
		63 : {
			code : "Songkhla",
			name : "Songkhla"
		},
		64 : {
			code : "Sukhothai",
			name : "Sukhothai"
		},
		65 : {
			code : "Suphan Buri",
			name : "Suphan Buri"
		},
		66 : {
			code : "Surat Thani",
			name : "Surat Thani"
		},
		67 : {
			code : "Surin",
			name : "Surin"
		},
		68 : {
			code : "Tak",
			name : "Tak"
		},
		69 : {
			code : "Trang",
			name : "Trang"
		},
		70 : {
			code : "Trat",
			name : "Trat"
		},
		71 : {
			code : "Ubon Ratchathani",
			name : "Ubon Ratchathani"
		},
		72 : {
			code : "Udon Thani",
			name : "Udon Thani"
		},
		73 : {
			code : "Uthai Thani",
			name : "Uthai Thani"
		},
		74 : {
			code : "Uttaradit",
			name : "Uttaradit"
		},
		75 : {
			code : "Yala",
			name : "Yala"
		},
		76 : {
			code : "Yasothon",
			name : "Yasothon"
		}
	},
	TG : {
		1 : {
			code : "K",
			name : "Kara"
		},
		2 : {
			code : "P",
			name : "Plateaux"
		},
		3 : {
			code : "S",
			name : "Savanes"
		},
		4 : {
			code : "C",
			name : "Centrale"
		},
		5 : {
			code : "M",
			name : "Maritime"
		}
	},
	TK : {
		1 : {
			code : "A",
			name : "Atafu"
		},
		2 : {
			code : "F",
			name : "Fakaofo"
		},
		3 : {
			code : "N",
			name : "Nukunonu"
		}
	},
	TO : {
		1 : {
			code : "H",
			name : "Ha'apai"
		},
		2 : {
			code : "T",
			name : "Tongatapu"
		},
		3 : {
			code : "V",
			name : "Vava'u"
		}
	},
	TT : {
		1 : {
			code : "CT",
			name : "Couva"
		},
		2 : {
			code : "DM",
			name : "Diego Martin"
		},
		3 : {
			code : "MR",
			name : "Mayaro"
		},
		4 : {
			code : "PD",
			name : "Penal"
		},
		5 : {
			code : "PT",
			name : "Princes Town"
		},
		6 : {
			code : "SG",
			name : "Sangre Grande"
		},
		7 : {
			code : "SL",
			name : "San Juan"
		},
		8 : {
			code : "SI",
			name : "Siparia"
		},
		9 : {
			code : "TP",
			name : "Tunapuna"
		},
		10 : {
			code : "PS",
			name : "Port of Spain"
		},
		11 : {
			code : "SF",
			name : "San Fernando"
		},
		12 : {
			code : "AR",
			name : "Arima"
		},
		13 : {
			code : "PF",
			name : "Point Fortin"
		},
		14 : {
			code : "CH",
			name : "Chaguanas"
		},
		15 : {
			code : "TO",
			name : "Tobago"
		}
	},
	TN : {
		1 : {
			code : "AR",
			name : "Ariana"
		},
		2 : {
			code : "BJ",
			name : "Beja"
		},
		3 : {
			code : "BA",
			name : "Ben Arous"
		},
		4 : {
			code : "BI",
			name : "Bizerte"
		},
		5 : {
			code : "GB",
			name : "Gabes"
		},
		6 : {
			code : "GF",
			name : "Gafsa"
		},
		7 : {
			code : "JE",
			name : "Jendouba"
		},
		8 : {
			code : "KR",
			name : "Kairouan"
		},
		9 : {
			code : "KS",
			name : "Kasserine"
		},
		10 : {
			code : "KB",
			name : "Kebili"
		},
		11 : {
			code : "KF",
			name : "Kef"
		},
		12 : {
			code : "MH",
			name : "Mahdia"
		},
		13 : {
			code : "MN",
			name : "Manouba"
		},
		14 : {
			code : "ME",
			name : "Medenine"
		},
		15 : {
			code : "MO",
			name : "Monastir"
		},
		16 : {
			code : "NA",
			name : "Nabeul"
		},
		17 : {
			code : "SF",
			name : "Sfax"
		},
		18 : {
			code : "SD",
			name : "Sidi"
		},
		19 : {
			code : "SL",
			name : "Siliana"
		},
		20 : {
			code : "SO",
			name : "Sousse"
		},
		21 : {
			code : "TA",
			name : "Tataouine"
		},
		22 : {
			code : "TO",
			name : "Tozeur"
		},
		23 : {
			code : "TU",
			name : "Tunis"
		},
		24 : {
			code : "ZA",
			name : "Zaghouan"
		}
	},
	TR : {
		1 : {
			code : "ADA",
			name : "Adana"
		},
		2 : {
			code : "ADI",
			name : "Adiyaman"
		},
		3 : {
			code : "AFY",
			name : "Afyonkarahisar"
		},
		4 : {
			code : "AGR",
			name : "Agri"
		},
		5 : {
			code : "AKS",
			name : "Aksaray"
		},
		6 : {
			code : "AMA",
			name : "Amasya"
		},
		7 : {
			code : "ANK",
			name : "Ankara"
		},
		8 : {
			code : "ANT",
			name : "Antalya"
		},
		9 : {
			code : "ARD",
			name : "Ardahan"
		},
		10 : {
			code : "ART",
			name : "Artvin"
		},
		11 : {
			code : "AYI",
			name : "Aydin"
		},
		12 : {
			code : "BAL",
			name : "Balikesir"
		},
		13 : {
			code : "BAR",
			name : "Bartin"
		},
		14 : {
			code : "BAT",
			name : "Batman"
		},
		15 : {
			code : "BAY",
			name : "Bayburt"
		},
		16 : {
			code : "BIL",
			name : "Bilecik"
		},
		17 : {
			code : "BIN",
			name : "Bingol"
		},
		18 : {
			code : "BIT",
			name : "Bitlis"
		},
		19 : {
			code : "BOL",
			name : "Bolu"
		},
		20 : {
			code : "BRD",
			name : "Burdur"
		},
		21 : {
			code : "BRS",
			name : "Bursa"
		},
		22 : {
			code : "CKL",
			name : "Canakkale"
		},
		23 : {
			code : "CKR",
			name : "Cankiri"
		},
		24 : {
			code : "COR",
			name : "Corum"
		},
		25 : {
			code : "DEN",
			name : "Denizli"
		},
		26 : {
			code : "DIY",
			name : "Diyarbakir"
		},
		27 : {
			code : "DUZ",
			name : "Duzce"
		},
		28 : {
			code : "EDI",
			name : "Edirne"
		},
		29 : {
			code : "ELA",
			name : "Elazig"
		},
		30 : {
			code : "EZC",
			name : "Erzincan"
		},
		31 : {
			code : "EZR",
			name : "Erzurum"
		},
		32 : {
			code : "ESK",
			name : "Eskisehir"
		},
		33 : {
			code : "GAZ",
			name : "Gaziantep"
		},
		34 : {
			code : "GIR",
			name : "Giresun"
		},
		35 : {
			code : "GMS",
			name : "Gumushane"
		},
		36 : {
			code : "HKR",
			name : "Hakkari"
		},
		37 : {
			code : "HTY",
			name : "Hatay"
		},
		38 : {
			code : "IGD",
			name : "Igdir"
		},
		39 : {
			code : "ISP",
			name : "Isparta"
		},
		40 : {
			code : "IST",
			name : "Istanbul"
		},
		41 : {
			code : "IZM",
			name : "Izmir"
		},
		42 : {
			code : "KAH",
			name : "Kahramanmaras"
		},
		43 : {
			code : "KRB",
			name : "Karabuk"
		},
		44 : {
			code : "KRM",
			name : "Karaman"
		},
		45 : {
			code : "KRS",
			name : "Kars"
		},
		46 : {
			code : "KAS",
			name : "Kastamonu"
		},
		47 : {
			code : "KAY",
			name : "Kayseri"
		},
		48 : {
			code : "KLS",
			name : "Kilis"
		},
		49 : {
			code : "KRK",
			name : "Kirikkale"
		},
		50 : {
			code : "KLR",
			name : "Kirklareli"
		},
		51 : {
			code : "KRH",
			name : "Kirsehir"
		},
		52 : {
			code : "KOC",
			name : "Kocaeli"
		},
		53 : {
			code : "KON",
			name : "Konya"
		},
		54 : {
			code : "KUT",
			name : "Kutahya"
		},
		55 : {
			code : "MAL",
			name : "Malatya"
		},
		56 : {
			code : "MAN",
			name : "Manisa"
		},
		57 : {
			code : "MAR",
			name : "Mardin"
		},
		58 : {
			code : "MER",
			name : "Mersin"
		},
		59 : {
			code : "MUG",
			name : "Mugla"
		},
		60 : {
			code : "MUS",
			name : "Mus"
		},
		61 : {
			code : "NEV",
			name : "Nevsehir"
		},
		62 : {
			code : "NIG",
			name : "Nigde"
		},
		63 : {
			code : "ORD",
			name : "Ordu"
		},
		64 : {
			code : "OSM",
			name : "Osmaniye"
		},
		65 : {
			code : "RIZ",
			name : "Rize"
		},
		66 : {
			code : "SAK",
			name : "Sakarya"
		},
		67 : {
			code : "SAM",
			name : "Samsun"
		},
		68 : {
			code : "SAN",
			name : "Sanliurfa"
		},
		69 : {
			code : "SII",
			name : "Siirt"
		},
		70 : {
			code : "SIN",
			name : "Sinop"
		},
		71 : {
			code : "SIR",
			name : "Sirnak"
		},
		72 : {
			code : "SIV",
			name : "Sivas"
		},
		73 : {
			code : "TEL",
			name : "Tekirdag"
		},
		74 : {
			code : "TOK",
			name : "Tokat"
		},
		75 : {
			code : "TRA",
			name : "Trabzon"
		},
		76 : {
			code : "TUN",
			name : "Tunceli"
		},
		77 : {
			code : "USK",
			name : "Usak"
		},
		78 : {
			code : "VAN",
			name : "Van"
		},
		79 : {
			code : "YAL",
			name : "Yalova"
		},
		80 : {
			code : "YOZ",
			name : "Yozgat"
		},
		81 : {
			code : "ZON",
			name : "Zonguldak"
		}
	},
	TM : {
		1 : {
			code : "A",
			name : "Ahal Welayaty"
		},
		2 : {
			code : "B",
			name : "Balkan Welayaty"
		},
		3 : {
			code : "D",
			name : "Dashhowuz Welayaty"
		},
		4 : {
			code : "L",
			name : "Lebap Welayaty"
		},
		5 : {
			code : "M",
			name : "Mary Welayaty"
		}
	},
	TC : {
		1 : {
			code : "AC",
			name : "Ambergris Cays"
		},
		2 : {
			code : "DC",
			name : "Dellis Cay"
		},
		3 : {
			code : "FC",
			name : "French Cay"
		},
		4 : {
			code : "LW",
			name : "Little Water Cay"
		},
		5 : {
			code : "RC",
			name : "Parrot Cay"
		},
		6 : {
			code : "PN",
			name : "Pine Cay"
		},
		7 : {
			code : "SL",
			name : "Salt Cay"
		},
		8 : {
			code : "GT",
			name : "Grand Turk"
		},
		9 : {
			code : "SC",
			name : "South Caicos"
		},
		10 : {
			code : "EC",
			name : "East Caicos"
		},
		11 : {
			code : "MC",
			name : "Middle Caicos"
		},
		12 : {
			code : "NC",
			name : "North Caicos"
		},
		13 : {
			code : "PR",
			name : "Providenciales"
		},
		14 : {
			code : "WC",
			name : "West Caicos"
		}
	},
	TV : {
		1 : {
			code : "NMG",
			name : "Nanumanga"
		},
		2 : {
			code : "NLK",
			name : "Niulakita"
		},
		3 : {
			code : "NTO",
			name : "Niutao"
		},
		4 : {
			code : "FUN",
			name : "Funafuti"
		},
		5 : {
			code : "NME",
			name : "Nanumea"
		},
		6 : {
			code : "NUI",
			name : "Nui"
		},
		7 : {
			code : "NFT",
			name : "Nukufetau"
		},
		8 : {
			code : "NLL",
			name : "Nukulaelae"
		},
		9 : {
			code : "VAI",
			name : "Vaitupu"
		}
	},
	UG : {
		1 : {
			code : "KAL",
			name : "Kalangala"
		},
		2 : {
			code : "KMP",
			name : "Kampala"
		},
		3 : {
			code : "KAY",
			name : "Kayunga"
		},
		4 : {
			code : "KIB",
			name : "Kiboga"
		},
		5 : {
			code : "LUW",
			name : "Luwero"
		},
		6 : {
			code : "MAS",
			name : "Masaka"
		},
		7 : {
			code : "MPI",
			name : "Mpigi"
		},
		8 : {
			code : "MUB",
			name : "Mubende"
		},
		9 : {
			code : "MUK",
			name : "Mukono"
		},
		10 : {
			code : "NKS",
			name : "Nakasongola"
		},
		11 : {
			code : "RAK",
			name : "Rakai"
		},
		12 : {
			code : "SEM",
			name : "Sembabule"
		},
		13 : {
			code : "WAK",
			name : "Wakiso"
		},
		14 : {
			code : "BUG",
			name : "Bugiri"
		},
		15 : {
			code : "BUS",
			name : "Busia"
		},
		16 : {
			code : "IGA",
			name : "Iganga"
		},
		17 : {
			code : "JIN",
			name : "Jinja"
		},
		18 : {
			code : "KAB",
			name : "Kaberamaido"
		},
		19 : {
			code : "KML",
			name : "Kamuli"
		},
		20 : {
			code : "KPC",
			name : "Kapchorwa"
		},
		21 : {
			code : "KTK",
			name : "Katakwi"
		},
		22 : {
			code : "KUM",
			name : "Kumi"
		},
		23 : {
			code : "MAY",
			name : "Mayuge"
		},
		24 : {
			code : "MBA",
			name : "Mbale"
		},
		25 : {
			code : "PAL",
			name : "Pallisa"
		},
		26 : {
			code : "SIR",
			name : "Sironko"
		},
		27 : {
			code : "SOR",
			name : "Soroti"
		},
		28 : {
			code : "TOR",
			name : "Tororo"
		},
		29 : {
			code : "ADJ",
			name : "Adjumani"
		},
		30 : {
			code : "APC",
			name : "Apac"
		},
		31 : {
			code : "ARU",
			name : "Arua"
		},
		32 : {
			code : "GUL",
			name : "Gulu"
		},
		33 : {
			code : "KIT",
			name : "Kitgum"
		},
		34 : {
			code : "KOT",
			name : "Kotido"
		},
		35 : {
			code : "LIR",
			name : "Lira"
		},
		36 : {
			code : "MRT",
			name : "Moroto"
		},
		37 : {
			code : "MOY",
			name : "Moyo"
		},
		38 : {
			code : "NAK",
			name : "Nakapiripirit"
		},
		39 : {
			code : "NEB",
			name : "Nebbi"
		},
		40 : {
			code : "PAD",
			name : "Pader"
		},
		41 : {
			code : "YUM",
			name : "Yumbe"
		},
		42 : {
			code : "BUN",
			name : "Bundibugyo"
		},
		43 : {
			code : "BSH",
			name : "Bushenyi"
		},
		44 : {
			code : "HOI",
			name : "Hoima"
		},
		45 : {
			code : "KBL",
			name : "Kabale"
		},
		46 : {
			code : "KAR",
			name : "Kabarole"
		},
		47 : {
			code : "KAM",
			name : "Kamwenge"
		},
		48 : {
			code : "KAN",
			name : "Kanungu"
		},
		49 : {
			code : "KAS",
			name : "Kasese"
		},
		50 : {
			code : "KBA",
			name : "Kibaale"
		},
		51 : {
			code : "KIS",
			name : "Kisoro"
		},
		52 : {
			code : "KYE",
			name : "Kyenjojo"
		},
		53 : {
			code : "MSN",
			name : "Masindi"
		},
		54 : {
			code : "MBR",
			name : "Mbarara"
		},
		55 : {
			code : "NTU",
			name : "Ntungamo"
		},
		56 : {
			code : "RUK",
			name : "Rukungiri"
		}
	},
	UA : {
		1 : {
			code : "CK",
			name : "Cherkasy"
		},
		2 : {
			code : "CH",
			name : "Chernihiv"
		},
		3 : {
			code : "CV",
			name : "Chernivtsi"
		},
		4 : {
			code : "CR",
			name : "Crimea"
		},
		5 : {
			code : "DN",
			name : "Dnipropetrovs'k"
		},
		6 : {
			code : "DO",
			name : "Donets'k"
		},
		7 : {
			code : "IV",
			name : "Ivano-Frankivs'k"
		},
		8 : {
			code : "KL",
			name : "Kharkiv Kherson"
		},
		9 : {
			code : "KM",
			name : "Khmel'nyts'kyy"
		},
		10 : {
			code : "KR",
			name : "Kirovohrad"
		},
		11 : {
			code : "KV",
			name : "Kiev"
		},
		12 : {
			code : "KY",
			name : "Kyyiv"
		},
		13 : {
			code : "LU",
			name : "Luhans'k"
		},
		14 : {
			code : "LV",
			name : "L'viv"
		},
		15 : {
			code : "MY",
			name : "Mykolayiv"
		},
		16 : {
			code : "OD",
			name : "Odesa"
		},
		17 : {
			code : "PO",
			name : "Poltava"
		},
		18 : {
			code : "RI",
			name : "Rivne"
		},
		19 : {
			code : "SE",
			name : "Sevastopol"
		},
		20 : {
			code : "SU",
			name : "Sumy"
		},
		21 : {
			code : "TE",
			name : "Ternopil'"
		},
		22 : {
			code : "VI",
			name : "Vinnytsya"
		},
		23 : {
			code : "VO",
			name : "Volyn'"
		},
		24 : {
			code : "ZK",
			name : "Zakarpattya"
		},
		25 : {
			code : "ZA",
			name : "Zaporizhzhya"
		},
		26 : {
			code : "ZH",
			name : "Zhytomyr"
		}
	},
	AE : {
		1 : {
			code : "AZ",
			name : "Abu Zaby"
		},
		2 : {
			code : "AJ",
			name : "'Ajman"
		},
		3 : {
			code : "FU",
			name : "Al Fujayrah"
		},
		4 : {
			code : "SH",
			name : "Ash Shariqah"
		},
		5 : {
			code : "DU",
			name : "Dubayy"
		},
		6 : {
			code : "RK",
			name : "R'as al Khaymah"
		},
		7 : {
			code : "UQ",
			name : "Umm al Qaywayn"
		}
	},
	GB : {
		1 : {
			code : "ABN",
			name : "Aberdeen"
		},
		2 : {
			code : "ABNS",
			name : "Aberdeenshire"
		},
		3 : {
			code : "ANG",
			name : "Anglesey"
		},
		4 : {
			code : "AGS",
			name : "Angus"
		},
		5 : {
			code : "ARY",
			name : "Argyll and Bute"
		},
		6 : {
			code : "BEDS",
			name : "Bedfordshire"
		},
		7 : {
			code : "BERKS",
			name : "Berkshire"
		},
		8 : {
			code : "BLA",
			name : "Blaenau Gwent"
		},
		9 : {
			code : "BRI",
			name : "Bridgend"
		},
		10 : {
			code : "BSTL",
			name : "Bristol"
		},
		11 : {
			code : "BUCKS",
			name : "Buckinghamshire"
		},
		12 : {
			code : "CAE",
			name : "Caerphilly"
		},
		13 : {
			code : "CAMBS",
			name : "Cambridgeshire"
		},
		14 : {
			code : "CDF",
			name : "Cardiff"
		},
		15 : {
			code : "CARM",
			name : "Carmarthenshire"
		},
		16 : {
			code : "CDGN",
			name : "Ceredigion"
		},
		17 : {
			code : "CHES",
			name : "Cheshire"
		},
		18 : {
			code : "CLACK",
			name : "Clackmannanshire"
		},
		19 : {
			code : "CON",
			name : "Conwy"
		},
		20 : {
			code : "CORN",
			name : "Cornwall"
		},
		21 : {
			code : "DNBG",
			name : "Denbighshire"
		},
		22 : {
			code : "DERBY",
			name : "Derbyshire"
		},
		23 : {
			code : "DVN",
			name : "Devon"
		},
		24 : {
			code : "DOR",
			name : "Dorset"
		},
		25 : {
			code : "DGL",
			name : "Dumfries and Galloway"
		},
		26 : {
			code : "DUND",
			name : "Dundee"
		},
		27 : {
			code : "DHM",
			name : "Durham"
		},
		28 : {
			code : "ARYE",
			name : "East Ayrshire"
		},
		29 : {
			code : "DUNBE",
			name : "East Dunbartonshire"
		},
		30 : {
			code : "LOTE",
			name : "East Lothian"
		},
		31 : {
			code : "RENE",
			name : "East Renfrewshire"
		},
		32 : {
			code : "ERYS",
			name : "East Riding of Yorkshire"
		},
		33 : {
			code : "SXE",
			name : "East Sussex"
		},
		34 : {
			code : "EDIN",
			name : "Edinburgh"
		},
		35 : {
			code : "ESX",
			name : "Essex"
		},
		36 : {
			code : "FALK",
			name : "Falkirk"
		},
		37 : {
			code : "FFE",
			name : "Fife"
		},
		38 : {
			code : "FLINT",
			name : "Flintshire"
		},
		39 : {
			code : "GLAS",
			name : "Glasgow"
		},
		40 : {
			code : "GLOS",
			name : "Gloucestershire"
		},
		41 : {
			code : "LDN",
			name : "Greater London"
		},
		42 : {
			code : "MCH",
			name : "Greater Manchester"
		},
		43 : {
			code : "GDD",
			name : "Gwynedd"
		},
		44 : {
			code : "HANTS",
			name : "Hampshire"
		},
		45 : {
			code : "HWR",
			name : "Herefordshire"
		},
		46 : {
			code : "HERTS",
			name : "Hertfordshire"
		},
		47 : {
			code : "HLD",
			name : "Highlands"
		},
		48 : {
			code : "IVER",
			name : "Inverclyde"
		},
		49 : {
			code : "IOW",
			name : "Isle of Wight"
		},
		50 : {
			code : "KNT",
			name : "Kent"
		},
		51 : {
			code : "LANCS",
			name : "Lancashire"
		},
		52 : {
			code : "LEICS",
			name : "Leicestershire"
		},
		53 : {
			code : "LINCS",
			name : "Lincolnshire"
		},
		54 : {
			code : "MSY",
			name : "Merseyside"
		},
		55 : {
			code : "MERT",
			name : "Merthyr Tydfil"
		},
		56 : {
			code : "MLOT",
			name : "Midlothian"
		},
		57 : {
			code : "MMOUTH",
			name : "Monmouthshire"
		},
		58 : {
			code : "MORAY",
			name : "Moray"
		},
		59 : {
			code : "NPRTAL",
			name : "Neath Port Talbot"
		},
		60 : {
			code : "NEWPT",
			name : "Newport"
		},
		61 : {
			code : "NOR",
			name : "Norfolk"
		},
		62 : {
			code : "ARYN",
			name : "North Ayrshire"
		},
		63 : {
			code : "LANN",
			name : "North Lanarkshire"
		},
		64 : {
			code : "YSN",
			name : "North Yorkshire"
		},
		65 : {
			code : "NHM",
			name : "Northamptonshire"
		},
		66 : {
			code : "NLD",
			name : "Northumberland"
		},
		67 : {
			code : "NOT",
			name : "Nottinghamshire"
		},
		68 : {
			code : "ORK",
			name : "Orkney Islands"
		},
		69 : {
			code : "OFE",
			name : "Oxfordshire"
		},
		70 : {
			code : "PEM",
			name : "Pembrokeshire"
		},
		71 : {
			code : "PERTH",
			name : "Perth and Kinross"
		},
		72 : {
			code : "PWS",
			name : "Powys"
		},
		73 : {
			code : "REN",
			name : "Renfrewshire"
		},
		74 : {
			code : "RHON",
			name : "Rhondda Cynon Taff"
		},
		75 : {
			code : "RUT",
			name : "Rutland"
		},
		76 : {
			code : "BOR",
			name : "Scottish Borders"
		},
		77 : {
			code : "SHET",
			name : "Shetland Islands"
		},
		78 : {
			code : "SPE",
			name : "Shropshire"
		},
		79 : {
			code : "SOM",
			name : "Somerset"
		},
		80 : {
			code : "ARYS",
			name : "South Ayrshire"
		},
		81 : {
			code : "LANS",
			name : "South Lanarkshire"
		},
		82 : {
			code : "YSS",
			name : "South Yorkshire"
		},
		83 : {
			code : "SFD",
			name : "Staffordshire"
		},
		84 : {
			code : "STIR",
			name : "Stirling"
		},
		85 : {
			code : "SFK",
			name : "Suffolk"
		},
		86 : {
			code : "SRY",
			name : "Surrey"
		},
		87 : {
			code : "SWAN",
			name : "Swansea"
		},
		88 : {
			code : "TORF",
			name : "Torfaen"
		},
		89 : {
			code : "TWR",
			name : "Tyne and Wear"
		},
		90 : {
			code : "VGLAM",
			name : "Vale of Glamorgan"
		},
		91 : {
			code : "WARKS",
			name : "Warwickshire"
		},
		92 : {
			code : "WDUN",
			name : "West Dunbartonshire"
		},
		93 : {
			code : "WLOT",
			name : "West Lothian"
		},
		94 : {
			code : "WMD",
			name : "West Midlands"
		},
		95 : {
			code : "SXW",
			name : "West Sussex"
		},
		96 : {
			code : "YSW",
			name : "West Yorkshire"
		},
		97 : {
			code : "WIL",
			name : "Western Isles"
		},
		98 : {
			code : "WLT",
			name : "Wiltshire"
		},
		99 : {
			code : "WORCS",
			name : "Worcestershire"
		},
		100 : {
			code : "WRX",
			name : "Wrexham"
		}
	},
	US : {
		1 : {
			code : "AL",
			name : "Alabama"
		},
		2 : {
			code : "AK",
			name : "Alaska"
		},
		3 : {
			code : "AS",
			name : "American Samoa"
		},
		4 : {
			code : "AZ",
			name : "Arizona"
		},
		5 : {
			code : "AR",
			name : "Arkansas"
		},
		6 : {
			code : "AF",
			name : "Armed Forces Africa"
		},
		7 : {
			code : "AA",
			name : "Armed Forces Americas"
		},
		8 : {
			code : "AC",
			name : "Armed Forces Canada"
		},
		9 : {
			code : "AE",
			name : "Armed Forces Europe"
		},
		10 : {
			code : "AM",
			name : "Armed Forces Middle East"
		},
		11 : {
			code : "AP",
			name : "Armed Forces Pacific"
		},
		12 : {
			code : "CA",
			name : "California"
		},
		13 : {
			code : "CO",
			name : "Colorado"
		},
		14 : {
			code : "CT",
			name : "Connecticut"
		},
		15 : {
			code : "DE",
			name : "Delaware"
		},
		16 : {
			code : "DC",
			name : "District of Columbia"
		},
		17 : {
			code : "FM",
			name : "Federated States Of Micronesia"
		},
		18 : {
			code : "FL",
			name : "Florida"
		},
		19 : {
			code : "GA",
			name : "Georgia"
		},
		20 : {
			code : "GU",
			name : "Guam"
		},
		21 : {
			code : "HI",
			name : "Hawaii"
		},
		22 : {
			code : "ID",
			name : "Idaho"
		},
		23 : {
			code : "IL",
			name : "Illinois"
		},
		24 : {
			code : "IN",
			name : "Indiana"
		},
		25 : {
			code : "IA",
			name : "Iowa"
		},
		26 : {
			code : "KS",
			name : "Kansas"
		},
		27 : {
			code : "KY",
			name : "Kentucky"
		},
		28 : {
			code : "LA",
			name : "Louisiana"
		},
		29 : {
			code : "ME",
			name : "Maine"
		},
		30 : {
			code : "MH",
			name : "Marshall Islands"
		},
		31 : {
			code : "MD",
			name : "Maryland"
		},
		32 : {
			code : "MA",
			name : "Massachusetts"
		},
		33 : {
			code : "MI",
			name : "Michigan"
		},
		34 : {
			code : "MN",
			name : "Minnesota"
		},
		35 : {
			code : "MS",
			name : "Mississippi"
		},
		36 : {
			code : "MO",
			name : "Missouri"
		},
		37 : {
			code : "MT",
			name : "Montana"
		},
		38 : {
			code : "NE",
			name : "Nebraska"
		},
		39 : {
			code : "NV",
			name : "Nevada"
		},
		40 : {
			code : "NH",
			name : "New Hampshire"
		},
		41 : {
			code : "NJ",
			name : "New Jersey"
		},
		42 : {
			code : "NM",
			name : "New Mexico"
		},
		43 : {
			code : "NY",
			name : "New York"
		},
		44 : {
			code : "NC",
			name : "North Carolina"
		},
		45 : {
			code : "ND",
			name : "North Dakota"
		},
		46 : {
			code : "MP",
			name : "Northern Mariana Islands"
		},
		47 : {
			code : "OH",
			name : "Ohio"
		},
		48 : {
			code : "OK",
			name : "Oklahoma"
		},
		49 : {
			code : "OR",
			name : "Oregon"
		},
		50 : {
			code : "PW",
			name : "Palau"
		},
		51 : {
			code : "PA",
			name : "Pennsylvania"
		},
		52 : {
			code : "PR",
			name : "Puerto Rico"
		},
		53 : {
			code : "RI",
			name : "Rhode Island"
		},
		54 : {
			code : "SC",
			name : "South Carolina"
		},
		55 : {
			code : "SD",
			name : "South Dakota"
		},
		56 : {
			code : "TN",
			name : "Tennessee"
		},
		57 : {
			code : "TX",
			name : "Texas"
		},
		58 : {
			code : "UT",
			name : "Utah"
		},
		59 : {
			code : "VT",
			name : "Vermont"
		},
		60 : {
			code : "VI",
			name : "Virgin Islands"
		},
		61 : {
			code : "VA",
			name : "Virginia"
		},
		62 : {
			code : "WA",
			name : "Washington"
		},
		63 : {
			code : "WV",
			name : "West Virginia"
		},
		64 : {
			code : "WI",
			name : "Wisconsin"
		},
		65 : {
			code : "WY",
			name : "Wyoming"
		}
	},
	UM : {
		1 : {
			code : "BI",
			name : "Baker Island"
		},
		2 : {
			code : "HI",
			name : "Howland Island"
		},
		3 : {
			code : "JI",
			name : "Jarvis Island"
		},
		4 : {
			code : "JA",
			name : "Johnston Atoll"
		},
		5 : {
			code : "KR",
			name : "Kingman Reef"
		},
		6 : {
			code : "MA",
			name : "Midway Atoll"
		},
		7 : {
			code : "NI",
			name : "Navassa Island"
		},
		8 : {
			code : "PA",
			name : "Palmyra Atoll"
		},
		9 : {
			code : "WI",
			name : "Wake Island"
		}
	},
	UY : {
		1 : {
			code : "AR",
			name : "Artigas"
		},
		2 : {
			code : "CA",
			name : "Canelones"
		},
		3 : {
			code : "CL",
			name : "Cerro Largo"
		},
		4 : {
			code : "CO",
			name : "Colonia"
		},
		5 : {
			code : "DU",
			name : "Durazno"
		},
		6 : {
			code : "FS",
			name : "Flores"
		},
		7 : {
			code : "FA",
			name : "Florida"
		},
		8 : {
			code : "LA",
			name : "Lavalleja"
		},
		9 : {
			code : "MA",
			name : "Maldonado"
		},
		10 : {
			code : "MO",
			name : "Montevideo"
		},
		11 : {
			code : "PA",
			name : "Paysandu"
		},
		12 : {
			code : "RN",
			name : "Rio Negro"
		},
		13 : {
			code : "RV",
			name : "Rivera"
		},
		14 : {
			code : "RO",
			name : "Rocha"
		},
		15 : {
			code : "SL",
			name : "Salto"
		},
		16 : {
			code : "SJ",
			name : "San Jose"
		},
		17 : {
			code : "SO",
			name : "Soriano"
		},
		18 : {
			code : "TA",
			name : "Tacuarembo"
		},
		19 : {
			code : "TT",
			name : "Treinta y Tres"
		}
	},
	UZ : {
		1 : {
			code : "AN",
			name : "Andijon"
		},
		2 : {
			code : "BU",
			name : "Buxoro"
		},
		3 : {
			code : "FA",
			name : "Farg'ona"
		},
		4 : {
			code : "JI",
			name : "Jizzax"
		},
		5 : {
			code : "NG",
			name : "Namangan"
		},
		6 : {
			code : "NW",
			name : "Navoiy"
		},
		7 : {
			code : "QA",
			name : "Qashqadaryo"
		},
		8 : {
			code : "QR",
			name : "Qoraqalpog'iston Republikasi"
		},
		9 : {
			code : "SA",
			name : "Samarqand"
		},
		10 : {
			code : "SI",
			name : "Sirdaryo"
		},
		11 : {
			code : "SU",
			name : "Surxondaryo"
		},
		12 : {
			code : "TK",
			name : "Toshkent City"
		},
		13 : {
			code : "TO",
			name : "Toshkent Region"
		},
		14 : {
			code : "XO",
			name : "Xorazm"
		}
	},
	VU : {
		1 : {
			code : "MA",
			name : "Malampa"
		},
		2 : {
			code : "PE",
			name : "Penama"
		},
		3 : {
			code : "SA",
			name : "Sanma"
		},
		4 : {
			code : "SH",
			name : "Shefa"
		},
		5 : {
			code : "TA",
			name : "Tafea"
		},
		6 : {
			code : "TO",
			name : "Torba"
		}
	},
	VE : {
		1 : {
			code : "AM",
			name : "Amazonas"
		},
		2 : {
			code : "AN",
			name : "Anzoategui"
		},
		3 : {
			code : "AP",
			name : "Apure"
		},
		4 : {
			code : "AR",
			name : "Aragua"
		},
		5 : {
			code : "BA",
			name : "Barinas"
		},
		6 : {
			code : "BO",
			name : "Bolivar"
		},
		7 : {
			code : "CA",
			name : "Carabobo"
		},
		8 : {
			code : "CO",
			name : "Cojedes"
		},
		9 : {
			code : "DA",
			name : "Delta Amacuro"
		},
		10 : {
			code : "DF",
			name : "Dependencias Federales"
		},
		11 : {
			code : "DI",
			name : "Distrito Federal"
		},
		12 : {
			code : "FA",
			name : "Falcon"
		},
		13 : {
			code : "GU",
			name : "Guarico"
		},
		14 : {
			code : "LA",
			name : "Lara"
		},
		15 : {
			code : "ME",
			name : "Merida"
		},
		16 : {
			code : "MI",
			name : "Miranda"
		},
		17 : {
			code : "MO",
			name : "Monagas"
		},
		18 : {
			code : "NE",
			name : "Nueva Esparta"
		},
		19 : {
			code : "PO",
			name : "Portuguesa"
		},
		20 : {
			code : "SU",
			name : "Sucre"
		},
		21 : {
			code : "TA",
			name : "Tachira"
		},
		22 : {
			code : "TR",
			name : "Trujillo"
		},
		23 : {
			code : "VA",
			name : "Vargas"
		},
		24 : {
			code : "YA",
			name : "Yaracuy"
		},
		25 : {
			code : "ZU",
			name : "Zulia"
		}
	},
	VN : {
		1 : {
			code : "AG",
			name : "An Giang"
		},
		2 : {
			code : "BG",
			name : "Bac Giang"
		},
		3 : {
			code : "BK",
			name : "Bac Kan"
		},
		4 : {
			code : "BL",
			name : "Bac Lieu"
		},
		5 : {
			code : "BC",
			name : "Bac Ninh"
		},
		6 : {
			code : "BR",
			name : "Ba Ria-Vung Tau"
		},
		7 : {
			code : "BN",
			name : "Ben Tre"
		},
		8 : {
			code : "BH",
			name : "Binh Dinh"
		},
		9 : {
			code : "BU",
			name : "Binh Duong"
		},
		10 : {
			code : "BP",
			name : "Binh Phuoc"
		},
		11 : {
			code : "BT",
			name : "Binh Thuan"
		},
		12 : {
			code : "CM",
			name : "Ca Mau"
		},
		13 : {
			code : "CT",
			name : "Can Tho"
		},
		14 : {
			code : "CB",
			name : "Cao Bang"
		},
		15 : {
			code : "DL",
			name : "Dak Lak"
		},
		16 : {
			code : "DG",
			name : "Dak Nong"
		},
		17 : {
			code : "DN",
			name : "Da Nang"
		},
		18 : {
			code : "DB",
			name : "Dien Bien"
		},
		19 : {
			code : "DI",
			name : "Dong Nai"
		},
		20 : {
			code : "DT",
			name : "Dong Thap"
		},
		21 : {
			code : "GL",
			name : "Gia Lai"
		},
		22 : {
			code : "HG",
			name : "Ha Giang"
		},
		23 : {
			code : "HD",
			name : "Hai Duong"
		},
		24 : {
			code : "HP",
			name : "Hai Phong"
		},
		25 : {
			code : "HM",
			name : "Ha Nam"
		},
		26 : {
			code : "HI",
			name : "Ha Noi"
		},
		27 : {
			code : "HT",
			name : "Ha Tay"
		},
		28 : {
			code : "HH",
			name : "Ha Tinh"
		},
		29 : {
			code : "HB",
			name : "Hoa Binh"
		},
		30 : {
			code : "HC",
			name : "Ho Chin Minh"
		},
		31 : {
			code : "HU",
			name : "Hau Giang"
		},
		32 : {
			code : "HY",
			name : "Hung Yen"
		}
	},
	VI : {
		1 : {
			code : "C",
			name : "Saint Croix"
		},
		2 : {
			code : "J",
			name : "Saint John"
		},
		3 : {
			code : "T",
			name : "Saint Thomas"
		}
	},
	WF : {
		1 : {
			code : "A",
			name : "Alo"
		},
		2 : {
			code : "S",
			name : "Sigave"
		},
		3 : {
			code : "W",
			name : "Wallis"
		}
	},
	YE : {
		1 : {
			code : "AB",
			name : "Abyan"
		},
		2 : {
			code : "AD",
			name : "Adan"
		},
		3 : {
			code : "AM",
			name : "Amran"
		},
		4 : {
			code : "BA",
			name : "Al Bayda"
		},
		5 : {
			code : "DA",
			name : "Ad Dali"
		},
		6 : {
			code : "DH",
			name : "Dhamar"
		},
		7 : {
			code : "HD",
			name : "Hadramawt"
		},
		8 : {
			code : "HJ",
			name : "Hajjah"
		},
		9 : {
			code : "HU",
			name : "Al Hudaydah"
		},
		10 : {
			code : "IB",
			name : "Ibb"
		},
		11 : {
			code : "JA",
			name : "Al Jawf"
		},
		12 : {
			code : "LA",
			name : "Lahij"
		},
		13 : {
			code : "MA",
			name : "Ma'rib"
		},
		14 : {
			code : "MR",
			name : "Al Mahrah"
		},
		15 : {
			code : "MW",
			name : "Al Mahwit"
		},
		16 : {
			code : "SD",
			name : "Sa'dah"
		},
		17 : {
			code : "SN",
			name : "San'a"
		},
		18 : {
			code : "SH",
			name : "Shabwah"
		},
		19 : {
			code : "TA",
			name : "Ta'izz"
		}
	},
	YU : {
		1 : {
			code : "KOS",
			name : "Kosovo"
		},
		2 : {
			code : "MON",
			name : "Montenegro"
		},
		3 : {
			code : "SER",
			name : "Serbia"
		},
		4 : {
			code : "VOJ",
			name : "Vojvodina"
		}
	},
	ZR : {
		1 : {
			code : "BC",
			name : "Bas-Congo"
		},
		2 : {
			code : "BN",
			name : "Bandundu"
		},
		3 : {
			code : "EQ",
			name : "Equateur"
		},
		4 : {
			code : "KA",
			name : "Katanga"
		},
		5 : {
			code : "KE",
			name : "Kasai-Oriental"
		},
		6 : {
			code : "KN",
			name : "Kinshasa"
		},
		7 : {
			code : "KW",
			name : "Kasai-Occidental"
		},
		8 : {
			code : "MA",
			name : "Maniema"
		},
		9 : {
			code : "NK",
			name : "Nord-Kivu"
		},
		10 : {
			code : "OR",
			name : "Orientale"
		},
		11 : {
			code : "SK",
			name : "Sud-Kivu"
		}
	},
	ZM : {
		1 : {
			code : "CE",
			name : "Central"
		},
		2 : {
			code : "CB",
			name : "Copperbelt"
		},
		3 : {
			code : "EA",
			name : "Eastern"
		},
		4 : {
			code : "LP",
			name : "Luapula"
		},
		5 : {
			code : "LK",
			name : "Lusaka"
		},
		6 : {
			code : "NO",
			name : "Northern"
		},
		7 : {
			code : "NW",
			name : "North-Western"
		},
		8 : {
			code : "SO",
			name : "Southern"
		},
		9 : {
			code : "WE",
			name : "Western"
		}
	},
	ZW : {
		1 : {
			code : "BU",
			name : "Bulawayo"
		},
		2 : {
			code : "HA",
			name : "Harare"
		},
		3 : {
			code : "ML",
			name : "Manicaland"
		},
		4 : {
			code : "MC",
			name : "Mashonaland Central"
		},
		5 : {
			code : "ME",
			name : "Mashonaland East"
		},
		6 : {
			code : "MW",
			name : "Mashonaland West"
		},
		7 : {
			code : "MV",
			name : "Masvingo"
		},
		8 : {
			code : "MN",
			name : "Matabeleland North"
		},
		9 : {
			code : "MS",
			name : "Matabeleland South"
		},
		10 : {
			code : "MD",
			name : "Midlands"
		}
	}
};
+function(a) {
	"use strict";
	var b = function (b, c) {
		this.options = a.extend({}, a.fn.bfhcountries.defaults, c),
		this.$element = a(b),
		this.$element.is("select") && this.addCountries(),
		this.$element.hasClass("bfh-selectbox") && this.addBootstrapCountries(),
		this.$element.is("span") && this.displayCountry()
	};
	b.prototype = {
		constructor : b,
		getCountries : function () {
			var b,
			c;
			if (this.options.available) {
				if ("string" == typeof this.options.available) {
					c = [],
					this.options.available = this.options.available.split(",");
					for (b in BFHCountriesList)
						BFHCountriesList.hasOwnProperty(b) && a.inArray(b, this.options.available) >= 0 && (c[b] = BFHCountriesList[b])
				} else
					c = this.options.available;
				return c
			}
			return BFHCountriesList
		},
		addCountries : function () {
			var a,
			b,
			c;
			a = this.options.country,
			c = this.getCountries(),
			this.$element.html(""),
			this.options.blank === !0 && this.$element.append('<option value="" label="-None-" code=""></option>');
			for (b in c) {
				c.hasOwnProperty(b) && this.$element.append('<option value="' + c[b] + '" code="' + b + '">' + c[b] + "</option>");
			}
			this.$element.val(a);
		},
		addBootstrapCountries : function () {
			var a,
			b,
			c,
			d,
			e,
			f;
			d = this.options.country,
			a = this.$element.find('input[type="hidden"]'),
			b = this.$element.find(".bfh-selectbox-option"),
			c = this.$element.find("[role=option]"),
			f = this.getCountries(),
			c.html(""),
			this.options.blank === !0 && c.append('<li><a tabindex="-1" href="#" data-option=""></a></li>');
			for (e in f)
				f.hasOwnProperty(e) && (this.options.flags === !0 ? c.append('<li><a tabindex="-1" href="#" data-option="' + e + '"><i class="glyphicon bfh-flag-' + e + '"></i>' + f[e] + "</a></li>") : c.append('<li><a tabindex="-1" href="#" data-option="' + e + '">' + f[e] + "</a></li>"));
			this.$element.val(d)
		},
		displayCountry : function () {
			var a;
			a = this.options.country,
			this.options.flags === !0 ? this.$element.html('<i class="glyphicon bfh-flag-' + a + '"></i> ' + BFHCountriesList[a]) : this.$element.html(BFHCountriesList[a])
		}
	};
	var c = a.fn.bfhcountries;
	a.fn.bfhcountries = function (c) {
		return this.each(function () {
			var d,
			e,
			f;
			d = a(this),
			e = d.data("bfhcountries"),
			f = "object" == typeof c && c,
			e || d.data("bfhcountries", e = new b(this, f)),
			"string" == typeof c && e[c].call(d)
		})
	},
	a.fn.bfhcountries.Constructor = b,
	a.fn.bfhcountries.defaults = {
		country : "GB",
		available : "",
		flags : !1,
		blank : !0
	},
	a.fn.bfhcountries.noConflict = function () {
		return a.fn.bfhcountries = c,
		this
	},
	a(document).ready(function () {
		console.log('Countries');
		a("form select.bfh-countries, span.bfh-countries, div.bfh-countries").each(function () {
			var b;
			console.log('Found a country');
			b = a(this),
			b.hasClass("bfh-selectbox") && b.bfhselectbox(b.data()),
			b.bfhcountries(b.data())
		})
	})
}
(window.jQuery), +function(a) {
	"use strict";
	var b = function (b, c) {
		this.options = a.extend({}, a.fn.bfhstates.defaults, c),
		this.$element = a(b),
		this.$element.is("select") && this.addStates(),
		this.$element.hasClass("bfh-selectbox") && this.addBootstrapStates(),
		this.$element.is("span") && this.displayState()
	};
	b.prototype = {
		constructor : b,
		addStates : function () {
			var b,
			c;
			b = this.options.country,
			"" !== b && (c = a(document).find("#" + b), 0 !== c.length && (b = c.val(), c.on("change", {
						state : this
					}, this.changeCountry))),
			this.loadStates(b)
		},
		loadStates : function (a) {
			var b,
			c;
			b = this.options.state,
			this.$element.html(""),
			this.options.blank === !0 && this.$element.append('<option value="" label="-None-" code=""></option>');
			for (c in BFHStatesList[a]) {
				BFHStatesList[a].hasOwnProperty(c) && this.$element.append('<option value="' + BFHStatesList[a][c].name + '" code="' + BFHStatesList[a][c].code + '">' + BFHStatesList[a][c].name + "</option>");
			}
			this.$element.val(b)
		},
		changeCountry : function (b) {
			var c,
			d,
			e;
			c = a(this),
			d = b.data.state,
			e = c.find(":selected").attr('code');
			d.loadStates(e)
		},
		addBootstrapStates : function () {
			var b,
			c;
			b = this.options.country,
			"" !== b && (c = a(document).find("#" + b), 0 !== c.length && (b = c.find('input[type="hidden"]').val(), c.on("change.bfhselectbox", {
						state : this
					}, this.changeBootstrapCountry))),
			this.loadBootstrapStates(b)
		},
		loadBootstrapStates : function (a) {
			var b,
			c,
			d,
			e,
			f,
			g;
			e = this.options.state,
			f = "",
			b = this.$element.find('input[type="hidden"]'),
			c = this.$element.find(".bfh-selectbox-option"),
			d = this.$element.find("[role=option]"),
			d.html(""),
			this.options.blank === !0 && d.append('<li><a tabindex="-1" href="#" data-option=""></a></li>');
			for (g in BFHStatesList[a])
				BFHStatesList[a].hasOwnProperty(g) && (d.append('<li><a tabindex="-1" href="#" data-option="' + BFHStatesList[a][g].code + '">' + BFHStatesList[a][g].name + "</a></li>"), BFHStatesList[a][g].code === e && (f = BFHStatesList[a][g].name));
			this.$element.val(e)
		},
		changeBootstrapCountry : function (b) {
			var c,
			d,
			e;
			c = a(this),
			d = b.data.state,
			e = c.val(),
			d.loadBootstrapStates(e)
		},
		displayState : function () {
			var a,
			b,
			c,
			d;
			a = this.options.country,
			b = this.options.state,
			c = "";
			for (d in BFHStatesList[a])
				if (BFHStatesList[a].hasOwnProperty(d) && BFHStatesList[a][d].code === b) {
					c = BFHStatesList[a][d].name;
					break
				}
			this.$element.html(c)
		}
	};
	var c = a.fn.bfhstates;
	a.fn.bfhstates = function (c) {
		return this.each(function () {
			var d,
			e,
			f;
			d = a(this),
			e = d.data("bfhstates"),
			f = "object" == typeof c && c,
			e || d.data("bfhstates", e = new b(this, f)),
			"string" == typeof c && e[c].call(d)
		})
	},
	a.fn.bfhstates.Constructor = b,
	a.fn.bfhstates.defaults = {
		country : "",
		state : "",
		blank : !0
	},
	a.fn.bfhstates.noConflict = function () {
		return a.fn.bfhstates = c,
		this
	},
	a(document).ready(function () {
		console.log('States');
		console.log(a("select.bfh-states, span.bfh-states, div.bfh-states"));
		a("form select.bfh-states, span.bfh-states, div.bfh-states").each(function () {
			console.log('Found a state');
			var b;
			b = a(this),
			b.hasClass("bfh-selectbox") && b.bfhselectbox(b.data()),
			b.bfhstates(b.data())
		})
	})
}
(window.jQuery);
